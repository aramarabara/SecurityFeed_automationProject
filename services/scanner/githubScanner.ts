import { Octokit } from '@octokit/rest';
import { GitHubRepository } from '../../models/vulnerability';

export class GitHubScanner {
  private octokit: Octokit;

  constructor(token?: string) {
    const githubToken = token || process.env.GITHUB_TOKEN;
    if (!githubToken) {
      throw new Error('GitHub token is required. Set GITHUB_TOKEN in .env or pass as parameter.');
    }
    this.octokit = new Octokit({ auth: githubToken });
  }

  /**
   * Search repositories by keywords with star range filter
   * @param keywords - Array of keywords to search for (max 5 due to GitHub API limit)
   * @param minStars - Minimum stars (default: 100)
   * @param maxStars - Maximum stars (default: 1000)
   * @param language - Optional language filter
   * @param maxResults - Maximum number of results to return (default: 30)
   */
  async searchRepositories(
    keywords: string[],
    minStars: number = 100,
    maxStars: number = 1000,
    language?: string,
    maxResults: number = 30
  ): Promise<GitHubRepository[]> {
    try {
      // GitHub API allows max 5 OR operators, so limit to 5 keywords
      const limitedKeywords = keywords.slice(0, 5);
      if (keywords.length > 5) {
        console.log(`   ⚠️ Limiting keywords from ${keywords.length} to 5 (GitHub API limit)`);
      }

      // Build search query - GitHub allows max 5 OR operators
      const keywordQuery = limitedKeywords.map(k => `"${k}"`).join(' OR ');
      const starRange = `stars:${minStars}..${maxStars}`;
      const languageFilter = language ? ` language:${language}` : '';
      const query = `${keywordQuery} ${starRange}${languageFilter}`;

      console.log(`   🔍 GitHub Search Query: ${query}`);

      const repositories: GitHubRepository[] = [];
      let page = 1;
      const perPage = Math.min(100, maxResults); // GitHub API max is 100 per page

      while (repositories.length < maxResults) {
        const response = await this.octokit.rest.search.repos({
          q: query,
          sort: 'stars',
          order: 'desc',
          per_page: perPage,
          page: page,
        });

        if (response.data.items.length === 0) {
          break;
        }

        for (const repo of response.data.items) {
          if (repositories.length >= maxResults) break;

          repositories.push({
            id: repo.id.toString(),
            name: repo.name,
            fullName: repo.full_name,
            stars: repo.stargazers_count,
            language: repo.language,
            url: repo.html_url,
            description: repo.description || null,
            keywords: keywords, // Store search keywords
            createdAt: repo.created_at,
            updatedAt: repo.updated_at,
            cloneUrl: repo.clone_url,
          });
        }

        // Check if we have more pages
        if (response.data.items.length < perPage || repositories.length >= maxResults) {
          break;
        }

        page++;
        
        // Rate limit handling
        const rateLimit = response.headers['x-ratelimit-remaining'];
        if (rateLimit && parseInt(rateLimit) < 10) {
          console.log(`   ⚠️ Rate limit low: ${rateLimit} remaining. Waiting...`);
          await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute
        }
      }

      console.log(`   ✅ Found ${repositories.length} repositories`);
      return repositories;
    } catch (error: any) {
      console.error(`   ❌ GitHub search failed:`, error.message);
      if (error.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please wait or use authenticated token.');
      }
      throw error;
    }
  }

  /**
   * Get repository details by full name
   */
  async getRepository(fullName: string): Promise<GitHubRepository | null> {
    try {
      const [owner, repo] = fullName.split('/');
      const response = await this.octokit.rest.repos.get({
        owner,
        repo,
      });

      return {
        id: response.data.id.toString(),
        name: response.data.name,
        fullName: response.data.full_name,
        stars: response.data.stargazers_count,
        language: response.data.language,
        url: response.data.html_url,
        description: response.data.description || null,
        keywords: [],
        createdAt: response.data.created_at,
        updatedAt: response.data.updated_at,
        cloneUrl: response.data.clone_url,
      };
    } catch (error: any) {
      console.error(`   ❌ Failed to get repository ${fullName}:`, error.message);
      return null;
    }
  }

  /**
   * Check rate limit status
   */
  async checkRateLimit(): Promise<{ remaining: number; reset: number }> {
    const response = await this.octokit.rest.rateLimit.get();
    return {
      remaining: response.data.resources.search.remaining,
      reset: response.data.resources.search.reset,
    };
  }
}
