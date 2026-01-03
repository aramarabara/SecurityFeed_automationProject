// Equivalent to Pydantic models in Python
export type SeverityLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';

export interface RawArticle {
  id: string;
  title: string;
  url: string;
  content: string; // Snippet or full text
  source: string;
  timestamp: string;
}

export interface AnalyzedArticle extends RawArticle {
  summary: string;
  severity_score: number; // 1-10
  severity_level: SeverityLevel;
  tags: string[];
  is_analyzed: boolean;
}

// Helper to check if an article is analyzed
export const isAnalyzed = (article: RawArticle | AnalyzedArticle): article is AnalyzedArticle => {
  return (article as AnalyzedArticle).is_analyzed === true;
};

// Types migrated from deprecated types.ts
export enum JobStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum ContentType {
  TEXT = 'TEXT',
  RSS = 'RSS',
}

export interface ContentJob {
  id: string;
  title: string;
  status: JobStatus;
  type: ContentType;
  createdAt: string;
  generatedContent?: string;
}