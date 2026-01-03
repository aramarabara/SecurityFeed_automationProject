import { RawArticle } from '../../models/schema';

// Abstract Base Class / Interface equivalent
export interface Ingestor {
  fetchLatest(source: string): Promise<RawArticle[]>;
}

// Strategy Context / Factory
export enum IngestorType {
  RSS = 'RSS',
  CISA = 'CISA',
  HACKERNEWS = 'HACKERNEWS',
  MOCK = 'MOCK'
}