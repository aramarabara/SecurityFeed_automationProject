import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import simpleGit from 'simple-git';
import { CodeQLVulnerability, CodeQLDetailedReport } from '../../models/vulnerability';

/**
 * CodeQL Runner Interface
 * This interface allows for different implementations:
 * - MockCodeQLRunner: For testing/development
 * - CodeQLCLIRunner: Actual CodeQL CLI integration
 * - CodeQLAPIRunner: GitHub CodeQL API integration (future)
 */
export interface ICodeQLRunner {
  /**
   * Clone repository and prepare for CodeQL analysis
   */
  prepareRepository(repoUrl: string, targetPath: string): Promise<void>;

  /**
   * Create CodeQL database for the repository
   */
  createDatabase(repoPath: string, language: string): Promise<string>;

  /**
   * Run CodeQL queries and return vulnerabilities
   */
  runQueries(databasePath: string, queries?: string[]): Promise<CodeQLVulnerability[]>;

  /**
   * Clean up temporary files and directories
   */
  cleanup(path: string): Promise<void>;

  /**
   * Generate detailed analysis report with database info and statistics
   */
  generateDetailedReport(databasePath: string, sarifPath: string): Promise<CodeQLDetailedReport>;
}

/**
 * Mock CodeQL Runner for testing and development
 * Returns simulated vulnerability data
 */
export class MockCodeQLRunner implements ICodeQLRunner {
  async prepareRepository(repoUrl: string, targetPath: string): Promise<void> {
    console.log(`   [MOCK] Preparing repository: ${repoUrl} -> ${targetPath}`);
    // Simulate clone time
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async createDatabase(repoPath: string, language: string): Promise<string> {
    console.log(`   [MOCK] Creating CodeQL database for ${language} at ${repoPath}`);
    // Simulate database creation time
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `${repoPath}/codeql-db`;
  }

  async runQueries(databasePath: string, queries?: string[]): Promise<CodeQLVulnerability[]> {
    console.log(`   [MOCK] Running CodeQL queries on ${databasePath}`);
    // Simulate query execution time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Return mock vulnerabilities
    const mockVulnerabilities: CodeQLVulnerability[] = [
      {
        id: `mock-vuln-${Date.now()}-1`,
        ruleId: 'js/sql-injection',
        message: 'Potential SQL injection vulnerability',
        severity: 'error',
        filePath: 'src/api/user.js',
        startLine: 42,
        endLine: 45,
        codeSnippet: `const query = "SELECT * FROM users WHERE id = " + userId;`,
        queryName: 'SQL Injection',
        cwe: 'CWE-89',
      },
      {
        id: `mock-vuln-${Date.now()}-2`,
        ruleId: 'js/hardcoded-credentials',
        message: 'Hardcoded credentials detected',
        severity: 'warning',
        filePath: 'config/database.js',
        startLine: 15,
        endLine: 15,
        codeSnippet: `const password = "admin123";`,
        queryName: 'Hardcoded Credentials',
        cwe: 'CWE-798',
      },
    ];

    // Randomly return 0-3 vulnerabilities for variety
    const count = Math.floor(Math.random() * 4);
    return mockVulnerabilities.slice(0, count);
  }

  async cleanup(path: string): Promise<void> {
    console.log(`   [MOCK] Cleaning up: ${path}`);
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  async generateDetailedReport(databasePath: string, sarifPath: string): Promise<CodeQLDetailedReport> {
    console.log(`   [MOCK] Generating detailed report...`);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      databaseInfo: {
        language: 'python',
        sourceLocation: databasePath.replace('-db', ''),
        databaseVersion: 'mock-1.0.0',
      },
      statistics: {
        totalFiles: 10,
        totalLinesOfCode: 500,
        totalLinesOfUserCode: 450,
        extractedFiles: ['src/main.py', 'src/utils.py'],
      },
      queryResults: {
        totalQueries: 52,
        queriesExecuted: ['py/sql-injection', 'py/hardcoded-credentials'],
        resultsByQuery: {
          'py/sql-injection': 1,
          'py/hardcoded-credentials': 1,
        },
      },
      sarifResults: {
        totalResults: 2,
        resultsBySeverity: {
          error: 1,
          warning: 1,
          note: 0,
        },
      },
    };
  }
}

/**
 * CodeQL CLI Runner Implementation
 * Uses actual CodeQL CLI to scan repositories
 */
export class CodeQLCLIRunner implements ICodeQLRunner {
  private codeqlPath: string;
  private codeqlQueriesPath: string;
  private tempDir: string;

  constructor(codeqlPath?: string, codeqlQueriesPath?: string) {
    this.codeqlPath = codeqlPath || process.env.CODEQL_PATH || 'codeql';
    this.codeqlQueriesPath = codeqlQueriesPath || process.env.CODEQL_QUERIES_PATH || '/Users/ara/IdeaProjects/codeql';
    this.tempDir = path.join(process.cwd(), 'data', 'temp_scan');
  }

  async prepareRepository(repoUrl: string, targetPath: string): Promise<void> {
    // Ensure temp directory exists
    await fs.ensureDir(this.tempDir);
    
    // Remove existing directory if it exists
    if (await fs.pathExists(targetPath)) {
      await fs.remove(targetPath);
    }

    console.log(`   📥 Cloning repository: ${repoUrl}...`);
    const git = simpleGit();
    await git.clone(repoUrl, targetPath);
    console.log(`   ✅ Repository cloned to ${targetPath}`);
  }

  async createDatabase(repoPath: string, language: string): Promise<string> {
    // Only support Python for now
    if (language.toLowerCase() !== 'python') {
      throw new Error(`Language ${language} not supported. Only Python is supported.`);
    }

    const repoName = path.basename(repoPath);
    const dbPath = path.join(this.tempDir, `${repoName}-db`);

    // Remove existing database if it exists
    if (await fs.pathExists(dbPath)) {
      await fs.remove(dbPath);
    }

    console.log(`   🗄️  Creating CodeQL database for ${language}...`);
    
    try {
      execSync(
        `${this.codeqlPath} database create "${dbPath}" --language=python --source-root="${repoPath}" --overwrite`,
        { 
          stdio: 'inherit',
          cwd: process.cwd(),
        }
      );
      console.log(`   ✅ Database created at ${dbPath}`);
      return dbPath;
    } catch (error: any) {
      console.error(`   ❌ Failed to create database: ${error.message}`);
      throw error;
    }
  }

  async runQueries(databasePath: string, queries?: string[]): Promise<CodeQLVulnerability[]> {
    const repoName = path.basename(databasePath).replace('-db', '');
    const resultFile = path.join(this.tempDir, `${repoName}.sarif`);
    const bqrsFile = path.join(this.tempDir, `${repoName}.bqrs`);
    
    // Store paths for detailed report generation
    this.lastSarifPath = resultFile;
    this.lastDatabasePath = databasePath;

    // Use Python Security Extended Suite
    const querySuite = path.join(
      this.codeqlQueriesPath,
      'python',
      'ql',
      'src',
      'codeql-suites',
      'python-security-extended.qls'
    );

    if (!(await fs.pathExists(querySuite))) {
      console.error(`   ❌ Query suite not found: ${querySuite}`);
      throw new Error(`CodeQL query suite not found at ${querySuite}`);
    }

    console.log(`   🔍 Running CodeQL queries...`);
    
    try {
      // Run analysis with SARIF format
      execSync(
        `${this.codeqlPath} database analyze "${databasePath}" "${querySuite}" --format=sarif-latest --output="${resultFile}"`,
        {
          stdio: 'inherit',
          cwd: process.cwd(),
        }
      );

      // Parse SARIF results
      if (!(await fs.pathExists(resultFile))) {
        console.log(`   ⚠️  No results file generated`);
        return [];
      }

      const sarif = await fs.readJson(resultFile);
      const runs = sarif.runs?.[0];
      
      if (!runs || !runs.results || runs.results.length === 0) {
        console.log(`   ✅ No vulnerabilities found`);
        return [];
      }

      console.log(`   ✅ Found ${runs.results.length} vulnerability/vulnerabilities`);

      // Map SARIF results to our format
      const vulnerabilities: CodeQLVulnerability[] = runs.results.map((result: any, index: number) => {
        const location = result.locations?.[0]?.physicalLocation;
        const artifactLocation = location?.artifactLocation;
        const region = location?.region;
        
        // Get rule information
        const ruleId = result.ruleId;
        const rule = runs.tool?.driver?.rules?.find((r: any) => r.id === ruleId);
        
        // Extract CWE if available
        const properties = result.properties || {};
        const cwe = properties['security-severity'] || rule?.properties?.cwe?.[0] || undefined;
        
        // Get code snippet if available
        const codeSnippet = region?.snippet?.text || '';

        return {
          id: `codeql-${repoName}-${Date.now()}-${index}`,
          ruleId: ruleId,
          message: result.message?.text || rule?.shortDescription?.text || 'Vulnerability detected',
          severity: this.mapSeverity(result.level || 'warning'),
          filePath: artifactLocation?.uri || 'unknown',
          startLine: region?.startLine || 0,
          endLine: region?.endLine || region?.startLine || 0,
          codeSnippet: codeSnippet,
          queryName: rule?.name || ruleId,
          cwe: cwe ? `CWE-${cwe}` : undefined,
        };
      });

      return vulnerabilities;
    } catch (error: any) {
      console.error(`   ❌ Failed to run queries: ${error.message}`);
      // Return empty array instead of throwing to continue with other repos
      return [];
    }
  }

  async cleanup(path: string): Promise<void> {
    if (await fs.pathExists(path)) {
      console.log(`   🧹 Cleaning up: ${path}`);
      await fs.remove(path);
    }
  }

  async generateDetailedReport(databasePath: string, sarifPath: string): Promise<CodeQLDetailedReport> {
    console.log(`   📊 Generating detailed CodeQL analysis report...`);
    
    const report: CodeQLDetailedReport = {
      databaseInfo: {
        language: 'python',
        sourceLocation: databasePath.replace('-db', ''),
        databaseVersion: 'unknown',
      },
      statistics: {
        totalFiles: 0,
        totalLinesOfCode: 0,
        totalLinesOfUserCode: 0,
        extractedFiles: [],
      },
      queryResults: {
        totalQueries: 0,
        queriesExecuted: [],
        resultsByQuery: {},
      },
      sarifResults: {
        totalResults: 0,
        resultsBySeverity: {
          error: 0,
          warning: 0,
          note: 0,
        },
      },
    };

    try {
      // 1. Get database info (includes AST and extraction metadata)
      try {
        const infoOutput = execSync(
          `${this.codeqlPath} database info "${databasePath}" --format=json`,
          { encoding: 'utf-8', stdio: 'pipe', maxBuffer: 10 * 1024 * 1024 }
        );
        const dbInfo = JSON.parse(infoOutput);
        report.databaseInfo = {
          language: dbInfo.primaryLanguage || 'python',
          sourceLocation: dbInfo.sourceLocation || databasePath.replace('-db', ''),
          databaseVersion: dbInfo.databaseVersion || 'unknown',
          creationMetadata: dbInfo.creationMetadata || dbInfo, // Include full metadata for AST info
        };
        console.log(`   ✅ Database info extracted`);
      } catch (e: any) {
        console.log(`   ⚠️  Could not get database info: ${e.message}`);
      }

      // 2. Parse SARIF for statistics
      if (await fs.pathExists(sarifPath)) {
        const sarif = await fs.readJson(sarifPath);
        report.rawSarif = sarif;
        
        const runs = sarif.runs?.[0];
        if (runs) {
          // Statistics from SARIF
          report.sarifResults.totalResults = runs.results?.length || 0;
          
          // Count by severity
          if (runs.results) {
            runs.results.forEach((result: any) => {
              const severity = this.mapSeverity(result.level || 'warning');
              report.sarifResults.resultsBySeverity[severity]++;
            });
          }

          // Query information
          if (runs.tool?.driver?.rules) {
            report.queryResults.queriesExecuted = runs.tool.driver.rules.map((r: any) => r.id);
            report.queryResults.totalQueries = runs.tool.driver.rules.length;
            
            // Count results by query
            if (runs.results) {
              runs.results.forEach((result: any) => {
                const ruleId = result.ruleId;
                report.queryResults.resultsByQuery[ruleId] = 
                  (report.queryResults.resultsByQuery[ruleId] || 0) + 1;
              });
            }
          }

          // Extract file information from artifacts
          if (runs.artifacts) {
            report.statistics.extractedFiles = runs.artifacts.map((a: any) => a.location?.uri || '');
            report.statistics.totalFiles = runs.artifacts.length;
          }
        }
      }

      // 3. Get lines of code and file statistics from database
      try {
        const locQuery = path.join(
          this.codeqlQueriesPath,
          'python',
          'ql',
          'src',
          'Summary',
          'LinesOfCode.ql'
        );
        
        if (await fs.pathExists(locQuery)) {
          const locBqrs = path.join(this.tempDir, `loc-${Date.now()}.bqrs`);
          execSync(
            `${this.codeqlPath} query run "${locQuery}" --database="${databasePath}" --output="${locBqrs}"`,
            { encoding: 'utf-8', stdio: 'pipe', maxBuffer: 10 * 1024 * 1024 }
          );
          
          // Decode BQRS to get actual values
          const locJson = execSync(
            `${this.codeqlPath} bqrs decode "${locBqrs}" --format=json`,
            { encoding: 'utf-8', stdio: 'pipe', maxBuffer: 10 * 1024 * 1024 }
          );
          
          const locData = JSON.parse(locJson);
          if (locData.tuples && locData.tuples.length > 0) {
            // LinesOfCode query returns [totalLines]
            report.statistics.totalLinesOfCode = locData.tuples[0]?.[0] || 0;
          }
          
          // Cleanup
          if (await fs.pathExists(locBqrs)) {
            await fs.remove(locBqrs);
          }
        }
        
        // Get LinesOfUserCode
        const userLocQuery = path.join(
          this.codeqlQueriesPath,
          'python',
          'ql',
          'src',
          'Summary',
          'LinesOfUserCode.ql'
        );
        
        if (await fs.pathExists(userLocQuery)) {
          const userLocBqrs = path.join(this.tempDir, `userloc-${Date.now()}.bqrs`);
          execSync(
            `${this.codeqlPath} query run "${userLocQuery}" --database="${databasePath}" --output="${userLocBqrs}"`,
            { encoding: 'utf-8', stdio: 'pipe', maxBuffer: 10 * 1024 * 1024 }
          );
          
          const userLocJson = execSync(
            `${this.codeqlPath} bqrs decode "${userLocBqrs}" --format=json`,
            { encoding: 'utf-8', stdio: 'pipe', maxBuffer: 10 * 1024 * 1024 }
          );
          
          const userLocData = JSON.parse(userLocJson);
          if (userLocData.tuples && userLocData.tuples.length > 0) {
            report.statistics.totalLinesOfUserCode = userLocData.tuples[0]?.[0] || 0;
          }
          
          if (await fs.pathExists(userLocBqrs)) {
            await fs.remove(userLocBqrs);
          }
        }
        
        console.log(`   ✅ Code statistics extracted`);
      } catch (e: any) {
        console.log(`   ⚠️  Could not get code statistics: ${e.message}`);
      }
      
      // 4. Extract AST-related information from SARIF codeFlows
      if (await fs.pathExists(sarifPath)) {
        const sarif = await fs.readJson(sarifPath);
        const runs = sarif.runs?.[0];
        
        if (runs?.results) {
          // Extract code flow information (AST traversal paths)
          const codeFlows: any[] = [];
          runs.results.forEach((result: any) => {
            if (result.codeFlows) {
              codeFlows.push({
                ruleId: result.ruleId,
                message: result.message?.text || '',
                flows: result.codeFlows.map((flow: any) => {
                  return {
                    threadFlows: flow.threadFlows?.map((tf: any) => {
                      return {
                        locations: tf.locations?.map((loc: any) => {
                          return {
                            file: loc.location?.physicalLocation?.artifactLocation?.uri || '',
                            line: loc.location?.physicalLocation?.region?.startLine || 0,
                            column: loc.location?.physicalLocation?.region?.startColumn || 0,
                            message: loc.location?.message?.text || '',
                            kind: loc.kind || 'unknown',
                          };
                        }) || [],
                      };
                    }) || [],
                  };
                }) || [],
              });
            }
          });
          
          if (codeFlows.length > 0) {
            // Add code flows to report (AST traversal information)
            report.codeFlows = codeFlows;
            console.log(`   ✅ Code flow (AST) information extracted`);
          }
        }
      }

      console.log(`   ✅ Detailed report generated`);
      return report;
    } catch (error: any) {
      console.error(`   ⚠️  Error generating detailed report: ${error.message}`);
      return report; // Return partial report
    }
  }

  /**
   * Map CodeQL severity levels to our format
   */
  private mapSeverity(level: string): 'error' | 'warning' | 'note' {
    const levelLower = level.toLowerCase();
    if (levelLower === 'error' || levelLower === 'critical') {
      return 'error';
    }
    if (levelLower === 'warning' || levelLower === 'high') {
      return 'warning';
    }
    return 'note';
  }
}
