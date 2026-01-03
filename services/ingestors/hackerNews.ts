import { Ingestor } from './base';
import { RawArticle } from '../../models/schema';

export class HackerNewsIngestor implements Ingestor {
  async fetchLatest(keyword: string = 'security'): Promise<RawArticle[]> {
    console.log(`[HackerNewsIngestor] Searching for ${keyword}`);
    
    await new Promise(resolve => setTimeout(resolve, 600));

    return [
      {
        id: crypto.randomUUID(),
        title: "Show HN: Open Source Security Scanner for Docker",
        url: "https://news.ycombinator.com/item?id=123456",
        content: "I built a tool that scans docker layers for secrets and known CVEs. Check it out on GitHub.",
        source: "Hacker News",
        timestamp: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        title: "Opinion: Why current IAM policies fail",
        url: "https://news.ycombinator.com/item?id=789012",
        content: "Identity and Access Management is broken at the root level. Here is my thesis on why we need to move to capability-based security.",
        source: "Hacker News",
        timestamp: new Date(Date.now() - 7200000).toISOString()
      }
    ];
  }
}