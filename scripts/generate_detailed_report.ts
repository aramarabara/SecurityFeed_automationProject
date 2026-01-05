import fs from 'fs';
import path from 'path';
import { CodeQLCLIRunner } from '../services/scanner/codeqlRunner';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Generate detailed CodeQL report from existing SARIF files
 * Usage: tsx scripts/generate_detailed_report.ts [repo-name]
 */
async function generateReportFromSarif() {
  const repoName = process.argv[2];
  
  if (!repoName) {
    console.log("Usage: tsx scripts/generate_detailed_report.ts <repo-name>");
    console.log("\nAvailable SARIF files:");
    const tempDir = 'data/temp_scan';
    if (fs.existsSync(tempDir)) {
      const files = fs.readdirSync(tempDir).filter(f => f.endsWith('.sarif'));
      files.forEach(f => console.log(`  - ${f.replace('.sarif', '')}`));
    }
    process.exit(1);
  }

  const tempDir = 'data/temp_scan';
  const sarifPath = path.join(tempDir, `${repoName}.sarif`);
  const dbPath = path.join(tempDir, `${repoName}-db`);

  if (!fs.existsSync(sarifPath)) {
    console.error(`❌ SARIF file not found: ${sarifPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(dbPath)) {
    console.error(`❌ Database not found: ${dbPath}`);
    console.log("Note: Database may have been cleaned up. Re-run scan to generate report.");
    process.exit(1);
  }

  console.log(`📊 Generating detailed CodeQL report for ${repoName}...`);
  console.log(`   SARIF: ${sarifPath}`);
  console.log(`   Database: ${dbPath}`);

  const runner = new CodeQLCLIRunner();
  
  try {
    const detailedReport = await runner.generateDetailedReport(dbPath, sarifPath);
    
    // Save detailed report
    const dateFolder = new Date().toISOString().split('T')[0].replace(/-/g, '-');
    const reportDir = path.join('data/vulnerabilities', dateFolder);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const reportFile = path.join(reportDir, `DETAILED_${repoName}_${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(detailedReport, null, 2));
    
    console.log(`\n✅ Detailed report saved: ${reportFile}`);
    console.log(`\n📋 Report Summary:`);
    console.log(`   - Database Language: ${detailedReport.databaseInfo.language}`);
    console.log(`   - Total Files: ${detailedReport.statistics.totalFiles}`);
    console.log(`   - Lines of Code: ${detailedReport.statistics.totalLinesOfCode}`);
    console.log(`   - Lines of User Code: ${detailedReport.statistics.totalLinesOfUserCode}`);
    console.log(`   - Total Queries: ${detailedReport.queryResults.totalQueries}`);
    console.log(`   - Total Results: ${detailedReport.sarifResults.totalResults}`);
    console.log(`   - Code Flows (AST paths): ${detailedReport.codeFlows?.length || 0}`);
    
    if (detailedReport.codeFlows && detailedReport.codeFlows.length > 0) {
      console.log(`\n🔍 AST Code Flows Found:`);
      detailedReport.codeFlows.forEach((flow, idx) => {
        console.log(`   ${idx + 1}. ${flow.ruleId}`);
        console.log(`      Message: ${flow.message.substring(0, 60)}...`);
        console.log(`      Flow paths: ${flow.flows.length}`);
      });
    }
    
    console.log(`\n💡 Full AST information is available in:`);
    console.log(`   - databaseInfo.creationMetadata (extraction metadata)`);
    console.log(`   - codeFlows (AST traversal paths for each vulnerability)`);
    console.log(`   - rawSarif (complete SARIF with all AST node information)`);
    
  } catch (error: any) {
    console.error(`❌ Failed to generate report: ${error.message}`);
    process.exit(1);
  }
}

generateReportFromSarif();
