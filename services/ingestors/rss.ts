import { Ingestor } from './base';
import { RawArticle } from '../../models/schema';
import { sanitize, sanitizeText } from '../utils/sanitizer';

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  description: string;
  guid: string;
}

export class RSSIngestor implements Ingestor {
  async fetchLatest(url: string): Promise<RawArticle[]> {
    console.log(`[RSSIngestor] Fetching from ${url}`);
    
    try {
      // Use rss2json service to bridge CORS and parse XML to JSON
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error('RSS parsing failed');
      }

      return data.items.map((item: RSSItem) => ({
        id: crypto.randomUUID(), // RSS2JSON doesn't always return GUID, so we generate one or use link
        title: sanitizeText(item.title),
        url: item.link,
        // Prefer full content, fallback to description/snippet
        content: sanitize(item.content || item.description || ''),
        source: sanitizeText(data.feed.title || url),
        timestamp: item.pubDate
      }));

    } catch (error) {
      console.error('[RSSIngestor] Error:', error);
      throw error;
    }
  }
}