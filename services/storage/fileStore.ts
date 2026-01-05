import { RawArticle, AnalyzedArticle } from "../../models/schema";

/**
 * FileStore Strategy
 * Simulates a file-based storage system using LocalStorage.
 * 
 * Directory Structure:
 * - data/raw/: Raw JSON from ingestors
 * - data/analyzed/YYYY-MM-DD/: Enriched JSON from AI (organized by date)
 * - data/drafts/YYYY-MM-DD/: Final Markdown for Velog/Blog (organized by date)
 */

export class FileStore {
  /**
   * Generate a descriptive filename based on severity, tags, and title
   * Format: [SEVERITY]_[TAG1-TAG2]_[short-title-slug]_[id].json
   */
  private generateAnalyzedFilename(article: AnalyzedArticle, language?: string): string {
    const severity = article.severity_level;
    const tags = article.tags.slice(0, 2).join('-').replace(/[^a-zA-Z0-9-]/g, '');
    const titleSlug = article.title
      .substring(0, 40)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const langSuffix = language && language !== 'english' ? `_${language}` : '';
    return `${severity}_${tags}_${titleSlug}_${article.id.substring(0, 8)}${langSuffix}.json`;
  }

  /**
   * Get date folder path in YYYY-MM-DD format
   */
  private getDateFolder(date?: Date): string {
    const d = date || new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private saveToFile(path: string, filename: string, data: any) {
    const fullPath = `${path}${filename}`;
    console.log(`[FileStore] Writing to ${fullPath}`);
    try {
      localStorage.setItem(fullPath, JSON.stringify(data));
    } catch (e) {
      console.error(`[FileStore] Disk Write Error:`, e);
    }
  }

  saveRaw(articles: RawArticle[]) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `batch_${timestamp}.json`;
    this.saveToFile('data/raw/', filename, articles);
  }

  saveAnalyzed(article: AnalyzedArticle, language?: string) {
    const dateFolder = this.getDateFolder(new Date(article.timestamp));
    const filename = this.generateAnalyzedFilename(article, language);
    const path = `data/analyzed/${dateFolder}/`;
    this.saveToFile(path, filename, article);
  }

  saveDraft(article: AnalyzedArticle, markdownContent: string) {
    const dateFolder = this.getDateFolder();
    const severity = article.severity_level;
    const tags = article.tags.slice(0, 2).join('-').replace(/[^a-zA-Z0-9-]/g, '');
    const titleSlug = article.title
      .substring(0, 40)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const filename = `${severity}_${tags}_${titleSlug}_${article.id.substring(0, 8)}.md`;
    const fileContent = {
      meta: {
        title: article.title,
        tags: article.tags,
        date: new Date().toISOString()
      },
      content: markdownContent
    };
    const path = `data/drafts/${dateFolder}/`;
    this.saveToFile(path, filename, fileContent);
  }

  // Helper to list "files" for debugging
  listFiles(directory: string): string[] {
    return Object.keys(localStorage)
      .filter(key => key.startsWith(directory));
  }
}