import fs from 'fs';
import path from 'path';
import { CodeQLDetailedReport } from '../models/vulnerability';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Generate human-readable markdown report from detailed CodeQL report
 * Usage: tsx scripts/generate_human_readable_report.ts <detailed-report-path>
 */
async function generateHumanReadableReport() {
  const reportPath = process.argv[2];
  
  if (!reportPath) {
    console.log("Usage: tsx scripts/generate_human_readable_report.ts <detailed-report-path>");
    console.log("\nExample:");
    console.log("  tsx scripts/generate_human_readable_report.ts data/vulnerabilities/2026-01-05/DETAILED_Zero-attacker_*.json");
    process.exit(1);
  }

  // Find file if wildcard is used
  const actualPath = reportPath.includes('*') 
    ? fs.readdirSync(path.dirname(reportPath))
        .find(f => f.startsWith('DETAILED_') && f.endsWith('.json'))
        ? path.join(path.dirname(reportPath), fs.readdirSync(path.dirname(reportPath))
          .find(f => f.startsWith('DETAILED_') && f.endsWith('.json'))!)
        : reportPath
    : reportPath;

  if (!fs.existsSync(actualPath)) {
    console.error(`❌ Report file not found: ${actualPath}`);
    process.exit(1);
  }

  console.log(`📖 Generating human-readable report from: ${actualPath}`);

  const detailedReport: CodeQLDetailedReport = JSON.parse(fs.readFileSync(actualPath, 'utf-8'));

  // Extract repository name from path or report
  const repoName = path.basename(actualPath).replace('DETAILED_', '').replace(/_\d+\.json$/, '');
  
  // Generate markdown report
  const markdown = generateMarkdownReport(detailedReport, repoName);

  // Save markdown report
  const outputPath = actualPath.replace('.json', '_REPORT.md');
  fs.writeFileSync(outputPath, markdown);

  console.log(`✅ Human-readable report saved: ${outputPath}`);
  console.log(`\n📊 Report Summary:`);
  console.log(`   - Total Vulnerabilities: ${detailedReport.sarifResults.totalResults}`);
  console.log(`   - Files Analyzed: ${detailedReport.statistics.totalFiles}`);
  console.log(`   - Code Flows (AST paths): ${detailedReport.codeFlows?.length || 0}`);
  console.log(`   - Report Size: ${(markdown.length / 1024).toFixed(2)} KB`);
}

function generateMarkdownReport(report: CodeQLDetailedReport, repoName: string): string {
  const md: string[] = [];

  // Header
  md.push(`# CodeQL Security Analysis Report`);
  md.push(`\n**Repository**: ${repoName}`);
  md.push(`\n**Analysis Date**: ${new Date().toISOString().split('T')[0]}`);
  md.push(`\n**Language**: ${report.databaseInfo.language}`);
  md.push(`\n---\n`);

  // Executive Summary
  md.push(`## 📊 Executive Summary\n`);
  md.push(`- **Total Files Analyzed**: ${report.statistics.totalFiles}`);
  md.push(`- **Lines of Code**: ${report.statistics.totalLinesOfCode || 'N/A'}`);
  md.push(`- **Lines of User Code**: ${report.statistics.totalLinesOfUserCode || 'N/A'}`);
  md.push(`- **Total Queries Executed**: ${report.queryResults.totalQueries}`);
  md.push(`- **Vulnerabilities Found**: ${report.sarifResults.totalResults}`);
  md.push(`  - 🔴 Critical (error): ${report.sarifResults.resultsBySeverity.error}`);
  md.push(`  - 🟠 Warning: ${report.sarifResults.resultsBySeverity.warning}`);
  md.push(`  - 🔵 Note: ${report.sarifResults.resultsBySeverity.note}`);
  md.push(`\n---\n`);

  // Database Information
  md.push(`## 🗄️ Database Information\n`);
  md.push(`- **Language**: ${report.databaseInfo.language}`);
  md.push(`- **Source Location**: ${report.databaseInfo.sourceLocation}`);
  md.push(`- **Database Version**: ${report.databaseInfo.databaseVersion}`);
  if (report.databaseInfo.creationMetadata) {
    md.push(`\n### Creation Metadata\n`);
    md.push(`\`\`\`json`);
    md.push(JSON.stringify(report.databaseInfo.creationMetadata, null, 2));
    md.push(`\`\`\``);
  }
  md.push(`\n---\n`);

  // Statistics
  md.push(`## 📈 Code Statistics\n`);
  md.push(`### Extracted Files (${report.statistics.extractedFiles.length})\n`);
  report.statistics.extractedFiles.forEach((file, idx) => {
    md.push(`${idx + 1}. \`${file}\``);
  });
  md.push(`\n---\n`);

  // Query Results
  md.push(`## 🔍 Query Results\n`);
  md.push(`### Executed Queries (${report.queryResults.queriesExecuted.length})\n`);
  report.queryResults.queriesExecuted.forEach((query, idx) => {
    const count = report.queryResults.resultsByQuery[query] || 0;
    const icon = count > 0 ? '🔴' : '✅';
    md.push(`${idx + 1}. ${icon} \`${query}\` - ${count} result(s)`);
  });
  md.push(`\n---\n`);

  // Code Flows (AST Information)
  if (report.codeFlows && report.codeFlows.length > 0) {
    md.push(`## 🌳 AST Code Flows (Data Flow Analysis)\n`);
    md.push(`\nThis section shows the AST traversal paths for each vulnerability, demonstrating how data flows through the code.\n`);
    
    report.codeFlows.forEach((flow, idx) => {
      md.push(`\n### ${idx + 1}. ${flow.ruleId}\n`);
      md.push(`**Message**: ${flow.message.substring(0, 100)}${flow.message.length > 100 ? '...' : ''}\n`);
      
      flow.flows.forEach((f, flowIdx) => {
        md.push(`\n#### Flow Path ${flowIdx + 1}\n`);
        
        f.threadFlows.forEach((tf, tfIdx) => {
          md.push(`\n**Thread Flow ${tfIdx + 1}**:\n`);
          md.push(`\n| Step | File | Line | Column | AST Node |`);
          md.push(`|------|------|------|--------|---------|`);
          
          tf.locations.forEach((loc, locIdx) => {
            md.push(`| ${locIdx + 1} | \`${loc.file}\` | ${loc.line} | ${loc.column} | ${loc.message || loc.kind || 'N/A'} |`);
          });
        });
      });
    });
    md.push(`\n---\n`);
  }

  // SARIF Results Summary
  md.push(`## 🚨 Vulnerability Summary\n`);
  md.push(`\n### By Severity\n`);
  md.push(`- **Error**: ${report.sarifResults.resultsBySeverity.error}`);
  md.push(`- **Warning**: ${report.sarifResults.resultsBySeverity.warning}`);
  md.push(`- **Note**: ${report.sarifResults.resultsBySeverity.note}`);
  
  md.push(`\n### By Query Type\n`);
  Object.entries(report.queryResults.resultsByQuery)
    .sort(([, a], [, b]) => b - a)
    .forEach(([query, count]) => {
      md.push(`- \`${query}\`: ${count} result(s)`);
    });
  
  md.push(`\n---\n`);

  // Raw SARIF Reference
  md.push(`## 📎 Additional Information\n`);
  md.push(`\nThis report is generated from CodeQL analysis results. For complete details including:`);
  md.push(`- Full AST node information`);
  md.push(`- Complete code flow paths`);
  md.push(`- All SARIF metadata`);
  md.push(`\nPlease refer to the \`rawSarif\` field in the original JSON file.\n`);
  md.push(`\n---\n`);
  md.push(`\n*Generated by SecurityFeed AI - CodeQL Analysis System*`);

  return md.join('\n');
}

generateHumanReadableReport().catch(console.error);
