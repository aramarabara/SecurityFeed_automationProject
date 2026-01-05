import { GoogleGenAI, Type } from "@google/genai";
import { RawArticle, AnalyzedArticle, SeverityLevel } from "../../models/schema";

const GEMINI_API_KEY = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Using Gemini-3-flash for speed and structured output capabilities
const MODEL_ID = "gemini-3-flash-preview";

// Parse language settings from environment (comma-separated: "english,korean,japanese")
const parseLanguages = (): string[] => {
  const langEnv = process.env.LANGUAGE || 'english';
  return langEnv.split(',').map(lang => lang.trim().toLowerCase());
};

// Get language-specific instructions
const getLanguageInstruction = (lang: string): string => {
  const langMap: Record<string, string> = {
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

export class AIAgent {
  
  async analyze(article: RawArticle, targetLanguage: string = 'english'): Promise<AnalyzedArticle> {
    if (!GEMINI_API_KEY) {
      throw new Error("API Key missing");
    }

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

      const jsonText = response.text;
      if (!jsonText) throw new Error("Empty response from AI");

      const analysis = JSON.parse(jsonText);

      return {
        ...article,
        is_analyzed: true,
        summary: analysis.summary,
        severity_score: analysis.severity_score,
        severity_level: analysis.severity_level,
        tags: analysis.tags,
        references: analysis.references || []
      };

    } catch (error) {
      console.error("AI Analysis Failed:", error);
      // Fallback if AI fails, to keep app running
      return {
        ...article,
        is_analyzed: true,
        summary: "Analysis failed. Manual review required.",
        severity_score: 0,
        severity_level: 'INFO',
        tags: ["Error"],
        references: []
      };
    }
  }

  // Multi-language analysis support
  async analyzeMultiLanguage(article: RawArticle): Promise<Record<string, AnalyzedArticle>> {
    const languages = parseLanguages();
    const results: Record<string, AnalyzedArticle> = {};

    for (const lang of languages) {
      try {
        results[lang] = await this.analyze(article, lang);
      } catch (error) {
        console.error(`Failed to analyze in ${lang}:`, error);
      }
    }

    return results;
  }
}