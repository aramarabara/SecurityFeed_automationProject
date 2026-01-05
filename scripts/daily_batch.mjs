import fs from 'fs';
import path from 'path';
import { GoogleGenAI, Type } from '@google/genai';
import simpleGit from 'simple-git';
import Parser from 'rss-parser';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import dotenv from 'dotenv';

// 1. Initialize Environment
dotenv.config();
const config = JSON.parse(fs.readFileSync('automation.config.json', 'utf-8'));
const git = simpleGit();
const parser = new Parser();
const window = new JSDOM('').window;
const purify = DOMPurify(window);

// Check API Key
if (!process.env.API_KEY) {
  console.error("❌ FATAL: process.env.API_KEY is missing.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const MODEL_ID = "gemini-3-flash-preview";

// Parse language settings from environment (comma-separated: "english,korean,japanese")
const parseLanguages = () => {
  const langEnv = process.env.LANGUAGE || 'english';
  return langEnv.split(',').map(lang => lang.trim().toLowerCase());
};

// Get language-specific instructions
const getLanguageInstruction = (lang) => {
  const langMap = {
    'english': 'English',
    'korean': 'Korean (한국어)',
    'japanese': 'Japanese (日本語)',
    'chinese': 'Chinese (中文)',
    'spanish': 'Spanish (Español)',
    'french': 'French (Français)',
    'german': 'German (Deutsch)',
  };
  return langMap[lang] || lang.charAt(0).toUpperCase() + lang.slice(1);
};

// Ensure Directories Exist
const ensureDirs = () => {
  ['data/raw', 'data/analyzed', 'data/drafts'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
};

// --- Helper Functions ---

const sanitize = (content) => {
  return purify.sanitize(content, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'code', 'pre'],
    ALLOWED_ATTR: ['href', 'target']
  });
};

// Generate date folder path (YYYY-MM-DD)
const getDateFolder = (dateStr) => {
  const date = dateStr ? new Date(dateStr) : new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Generate descriptive filename for analyzed articles
// Format: [SEVERITY]_[TAG1-TAG2]_[short-title-slug]_[id].json
const generateAnalyzedFilename = (article, language) => {
  const severity = article.severity_level || 'INFO';
  const tags = (article.tags || []).slice(0, 2)
    .map(tag => tag.replace(/[^a-zA-Z0-9-]/g, ''))
    .join('-');
  const titleSlug = (article.title || 'untitled')
    .substring(0, 40)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const idShort = article.id.substring(0, 8);
  const langSuffix = language && language !== 'english' ? `_${language}` : '';
  return `${severity}_${tags || 'untagged'}_${titleSlug || 'untitled'}_${idShort}${langSuffix}.json`;
};

const saveJson = (baseFolder, filename, data, dateStr = null) => {
  // For analyzed articles, use date-based folder structure
  if (baseFolder === 'data/analyzed') {
    const dateFolder = getDateFolder(dateStr || data.timestamp);
    const fullPath = path.join(baseFolder, dateFolder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
    fs.writeFileSync(path.join(fullPath, filename), JSON.stringify(data, null, 2));
  } else {
    // For raw articles, use flat structure
    if (!fs.existsSync(baseFolder)) {
      fs.mkdirSync(baseFolder, { recursive: true });
    }
    fs.writeFileSync(path.join(baseFolder, filename), JSON.stringify(data, null, 2));
  }
};

const saveMarkdown = (baseFolder, filename, content, dateStr = null) => {
  // For drafts, use date-based folder structure
  if (baseFolder === 'data/drafts') {
    const dateFolder = getDateFolder(dateStr);
    const fullPath = path.join(baseFolder, dateFolder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
    fs.writeFileSync(path.join(fullPath, filename), content);
  } else {
    if (!fs.existsSync(baseFolder)) {
      fs.mkdirSync(baseFolder, { recursive: true });
    }
    fs.writeFileSync(path.join(baseFolder, filename), content);
  }
};

// --- Core Logic ---

async function fetchAndIngest() {
  console.log("📡 [Step 1] Ingesting Feeds...");
  let rawArticles = [];

  for (const source of config.workflow.sources) {
    try {
      console.log(`   - Fetching ${source.name}...`);
      const feed = await parser.parseURL(source.url);
      
      const items = feed.items.slice(0, config.workflow.thresholds.max_articles_per_run).map(item => ({
        id: crypto.randomUUID(),
        title: item.title,
        url: item.link,
        content: sanitize(item.content || item.contentSnippet || item.summary || ''),
        source: source.name,
        timestamp: new Date().toISOString()
      }));

      rawArticles = [...rawArticles, ...items];
    } catch (e) {
      console.error(`   ⚠️ Failed to fetch ${source.name}:`, e.message);
    }
  }

  // Save Raw Batch
  if (rawArticles.length > 0) {
    const batchName = `batch_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    saveJson('data/raw', batchName, rawArticles);
    console.log(`   ✅ Saved ${rawArticles.length} raw articles to ${batchName}`);
  }

  return rawArticles;
}

async function analyzeArticle(article, targetLanguage = 'english') {
  const langInstruction = getLanguageInstruction(targetLanguage);
  
  const prompt = `
    Analyze the following security news article and create a comprehensive, well-structured intelligence report.
    
    Title: ${article.title}
    Content: ${article.content}
    
    Generate the analysis in ${langInstruction} language.
    
    Tasks:
    1. Create a comprehensive article-style summary (3-5 paragraphs, 200-400 words) with the following structure:
       - Executive Overview: Brief context and significance of the threat
       - Threat Analysis: Key technical details, attack vectors, and methodologies
       - Impact Assessment: Who/what is affected and potential consequences
       - Recommendations: Actionable security measures and mitigation strategies
    
    2. Assign a severity score (1-10) where 10 is global internet meltdown and 1 is minor noise.
    
    3. Determine severity level (CRITICAL, HIGH, MEDIUM, LOW, INFO).
    
    4. Extract 3-5 relevant tags (e.g., Ransomware, CVE, Patch, DNS Hijacking).
    
    5. Include authoritative research papers and references:
       - Academic papers from IEEE, ACM, USENIX, or similar venues
       - CVE entries, MITRE ATT&CK techniques, or NIST publications
       - Industry reports from security vendors (Mandiant, CrowdStrike, etc.)
       - Government advisories (CISA, NSA, etc.)
       Format references as: "Author et al., Title, Venue/Publisher, Year" or "CVE-YYYY-XXXXX" or "MITRE ATT&CK: TXXXX"
       Include 2-5 relevant references that provide deeper context or technical details.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: prompt,
      config: {
        systemInstruction: `You are a Senior Cyber Threat Intelligence Analyst with expertise in academic research and industry best practices. You are thorough, technical, and always cite authoritative sources including research papers, CVEs, and industry reports. Write in ${langInstruction}.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { 
              type: Type.STRING,
              description: "Comprehensive article-style summary (3-5 paragraphs, 200-400 words) with Executive Overview, Threat Analysis, Impact Assessment, and Recommendations sections"
            },
            severity_score: { 
              type: Type.NUMBER,
              description: "Severity score from 1-10"
            },
            severity_level: { 
              type: Type.STRING, 
              enum: ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"],
              description: "Severity level classification"
            },
            tags: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3-5 relevant security tags"
            },
            references: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "2-5 authoritative references including research papers (with authors, title, venue, year), CVEs, MITRE ATT&CK techniques, or industry reports"
            }
          },
          required: ["summary", "severity_score", "severity_level", "tags", "references"]
        }
      }
    });

    const analysis = JSON.parse(response.text);
    return { 
      ...article, 
      ...analysis, 
      is_analyzed: true,
      references: analysis.references || []
    };
  } catch (e) {
    console.error(`   ❌ AI Analysis failed for "${article.title}":`, e.message);
    return null;
  }
}

async function runAnalysis(articles) {
  console.log("🧠 [Step 2] Analyzing Content...");
  const languages = parseLanguages();
  console.log(`   📝 Target languages: ${languages.join(', ')}`);
  
  const analyzed = [];

  for (const article of articles) {
    process.stdout.write(`   - Analyzing: ${article.title.substring(0, 40)}... `);
    
    // Analyze in primary language (first in list)
    const primaryLang = languages[0];
    const result = await analyzeArticle(article, primaryLang);
    
    if (result) {
      console.log(`[Score: ${result.severity_score}] [${primaryLang}]`);
      
      // Save primary language analysis with descriptive filename
      const primaryFilename = generateAnalyzedFilename(result, primaryLang);
      saveJson('data/analyzed', primaryFilename, result);
      analyzed.push(result);
      
      // Generate multi-language versions if multiple languages specified
      if (languages.length > 1) {
        for (const lang of languages.slice(1)) {
          try {
            process.stdout.write(`     → Generating ${lang} version... `);
            const langResult = await analyzeArticle(article, lang);
            if (langResult) {
              const langFilename = generateAnalyzedFilename(langResult, lang);
              saveJson('data/analyzed', langFilename, langResult);
              console.log(`[OK]`);
            } else {
              console.log(`[FAILED]`);
            }
          } catch (e) {
            console.log(`[FAILED: ${e.message}]`);
          }
        }
      }
    } else {
      console.log(`[FAILED]`);
    }
  }
  return analyzed;
}

async function generateDrafts(articles) {
  console.log("✍️ [Step 3] Generating Drafts...");
  let count = 0;

  for (const article of articles) {
    // Check config threshold
    if (article.severity_score < config.workflow.thresholds.min_severity_for_draft) {
      continue;
    }

    const referencesSection = article.references && article.references.length > 0
      ? `\n## References\n${article.references.map((ref, idx) => `${idx + 1}. ${ref}`).join('\n')}\n`
      : '';

    const markdown = `
# ${article.title}

> ${article.summary}

**Severity**: ${article.severity_level} (${article.severity_score}/10)
**Tags**: ${article.tags.join(', ')}

## Analysis
${article.summary}

${referencesSection}## Original Source
[${article.source}](${article.url})
    `;

    // Generate descriptive filename for draft
    const draftFilename = generateAnalyzedFilename(article).replace('.json', '.md');
    saveMarkdown('data/drafts', draftFilename, markdown);
    count++;
  }
  console.log(`   ✅ Generated ${count} drafts (Threshold: Score >= ${config.workflow.thresholds.min_severity_for_draft})`);
}

async function gitAutomation() {
  if (!config.git.auto_commit) return;

  console.log("📦 [Step 4] Git Automation...");
  try {
    const status = await git.status();
    if (status.files.length === 0) {
      console.log("   - No changes to commit.");
      return;
    }

    await git.add('data/*');
    const msg = config.git.commit_message_template.replace('[TIMESTAMP]', new Date().toISOString());
    await git.commit(msg);
    console.log(`   ✅ Committed with message: "${msg}"`);
    
    // push is optional depending on environment auth
    // await git.push('origin', config.git.branch); 
    // console.log("   🚀 Pushed to remote.");
    
  } catch (e) {
    console.error("   ❌ Git Error:", e.message);
  }
}

// --- Main Execution ---

(async () => {
  console.log("=== SecurityFeedBot Daily Batch Started ===");
  ensureDirs();

  // 1. Ingest
  const raw = await fetchAndIngest();

  // 2. Analyze
  if (raw.length > 0) {
    const analyzed = await runAnalysis(raw);

    // 3. Draft
    if (analyzed.length > 0) {
      await generateDrafts(analyzed);
    }
  }

  // 4. Commit
  await gitAutomation();

  console.log("=== Batch Completed Successfully ===");
})();