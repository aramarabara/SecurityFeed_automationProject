import { Ingestor } from './base';
import { RawArticle } from '../../models/schema';
import { RSSIngestor } from './rss';

export class CISAIngestor implements Ingestor {
  private rssIngestor: RSSIngestor;
  private static readonly CISA_ALERTS_URL = 'https://www.cisa.gov/uscert/ncas/alerts.xml';

  constructor() {
    this.rssIngestor = new RSSIngestor();
  }

  async fetchLatest(_ignoredSource?: string): Promise<RawArticle[]> {
    console.log(`[CISAIngestor] Fetching Official CISA Alerts...`);
    
    // Delegate to RSS Ingestor with the hardcoded CISA URL
    const articles = await this.rssIngestor.fetchLatest(CISAIngestor.CISA_ALERTS_URL);
    
    // Post-processing specific to CISA if needed (e.g., tagging)
    return articles.map(article => ({
      ...article,
      source: 'CISA US-CERT', // Enforce consistent source name
      title: `[US-CERT] ${article.title}` // Prefix for visibility
    }));
  }
}