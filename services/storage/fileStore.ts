import { RawArticle, AnalyzedArticle } from "../../models/schema";

/**
 * FileStore Strategy
 * Simulates a file-based storage system using LocalStorage.
 * 
 * Directory Structure Simulation:
 * - data/raw/: Raw JSON from ingestors
 * - data/analyzed/: Enriched JSON from AI
 * - data/drafts/: Final Markdown for Velog/Blog
 */

export class FileStore {
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

  saveAnalyzed(article: AnalyzedArticle) {
    const filename = `${article.id}.json`;
    this.saveToFile('data/analyzed/', filename, article);
  }

  saveDraft(article: AnalyzedArticle, markdownContent: string) {
    // In a real file system, this would be a .md file
    const filename = `${article.id}.md`;
    const fileContent = {
      meta: {
        title: article.title,
        tags: article.tags,
        date: new Date().toISOString()
      },
      content: markdownContent
    };
    this.saveToFile('data/drafts/', filename, fileContent);
  }

  // Helper to list "files" for debugging
  listFiles(directory: string): string[] {
    return Object.keys(localStorage)
      .filter(key => key.startsWith(directory));
  }
}