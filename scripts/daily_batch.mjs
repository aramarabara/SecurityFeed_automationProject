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

const saveJson = (folder, filename, data) => {
  fs.writeFileSync(path.join(folder, filename), JSON.stringify(data, null, 2));
};

const saveMarkdown = (folder, filename, content) => {
  fs.writeFileSync(path.join(folder, filename), content);
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

async function analyzeArticle(article) {
  const prompt = `
    Analyze the following security news article snippet.
    
    Title: ${article.title}
    Content: ${article.content}
    
    Tasks:
    1. Summarize the key threat in 1 sentence.
    2. Assign a severity score (1-10).
    3. Determine severity level (CRITICAL, HIGH, MEDIUM, LOW, INFO).
    4. Extract 3-5 relevant tags.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            severity_score: { type: Type.NUMBER },
            severity_level: { type: Type.STRING, enum: ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"] },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["summary", "severity_score", "severity_level", "tags"]
        }
      }
    });

    const analysis = JSON.parse(response.text);
    return { ...article, ...analysis, is_analyzed: true };
  } catch (e) {
    console.error(`   ❌ AI Analysis failed for "${article.title}":`, e.message);
    return null;
  }
}

async function runAnalysis(articles) {
  console.log("🧠 [Step 2] Analyzing Content...");
  const analyzed = [];

  for (const article of articles) {
    process.stdout.write(`   - Analyzing: ${article.title.substring(0, 40)}... `);
    const result = await analyzeArticle(article);
    
    if (result) {
      console.log(`[Score: ${result.severity_score}]`);
      saveJson('data/analyzed', `${result.id}.json`, result);
      analyzed.push(result);
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

    const markdown = `
# ${article.title}

> ${article.summary}

**Severity**: ${article.severity_level} (${article.severity_score}/10)
**Tags**: ${article.tags.join(', ')}

## Analysis
(Automated Analysis via Gemini 3 Flash)
This vulnerability/event has been flagged as **${article.severity_level}**. 

## Original Source
[${article.source}](${article.url})
    `;

    saveMarkdown('data/drafts', `${article.id}.md`, markdown);
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