import { GoogleGenAI, Type } from "@google/genai";
import { RawArticle, AnalyzedArticle, SeverityLevel } from "../../models/schema";

const GEMINI_API_KEY = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Using Gemini-3-flash for speed and structured output capabilities
const MODEL_ID = "gemini-3-flash-preview";

export class AIAgent {
  
  async analyze(article: RawArticle): Promise<AnalyzedArticle> {
    if (!GEMINI_API_KEY) {
      throw new Error("API Key missing");
    }

    const prompt = `
      Analyze the following security news article snippet.
      
      Title: ${article.title}
      Content: ${article.content}
      
      Tasks:
      1. Summarize the key threat in 1 sentence.
      2. Assign a severity score (1-10) where 10 is global internet meltdown and 1 is minor noise.
      3. Determine severity level (CRITICAL, HIGH, MEDIUM, LOW, INFO).
      4. Extract 3-5 relevant tags (e.g., Ransomware, CVE, Patch).
    `;

    try {
      const response = await ai.models.generateContent({
        model: MODEL_ID,
        contents: prompt,
        config: {
          systemInstruction: "You are a Senior Cyber Threat Intelligence Analyst. You are concise, paranoid, and technical.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              severity_score: { type: Type.NUMBER },
              severity_level: { type: Type.STRING, enum: ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"] },
              tags: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
              }
            },
            required: ["summary", "severity_score", "severity_level", "tags"]
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
        tags: analysis.tags
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
        tags: ["Error"]
      };
    }
  }
}