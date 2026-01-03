import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import Parser from 'rss-parser';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import dotenv from 'dotenv';

// Initialize
dotenv.config();
const config = JSON.parse(fs.readFileSync('automation.config.json', 'utf-8'));
const parser = new Parser();
const window = new JSDOM('').window;
const purify = DOMPurify(window);

const STATUS_FILE = 'public/automation_status.json';

// Test State
const report = {
  lastRun: new Date().toISOString(),
  status: 'PENDING',
  steps: {
    envCheck: { status: 'PENDING', message: '' },
    feedFetch: { status: 'PENDING', message: '' },
    aiConnection: { status: 'PENDING', message: '' },
    fileSystem: { status: 'PENDING', message: '' }
  },
  errors: []
};

function saveReport() {
  // Ensure public dir exists
  if (!fs.existsSync('public')) fs.mkdirSync('public');
  fs.writeFileSync(STATUS_FILE, JSON.stringify(report, null, 2));
  console.log(`📝 Report saved to ${STATUS_FILE}`);
}

async function runTest() {
  console.log("🧪 Starting Automation Unit Test...");
  
  try {
    // 1. Environment Check
    if (!process.env.API_KEY) throw new Error("API_KEY missing in .env");
    report.steps.envCheck = { status: 'SUCCESS', message: 'Variables present' };
    console.log("✅ Step 1: Environment OK");

    // 2. Feed Fetch (Integration Test)
    const testSource = config.workflow.sources[0];
    try {
      const feed = await parser.parseURL(testSource.url);
      if (!feed.items || feed.items.length === 0) throw new Error("Feed parsed but empty");
      report.steps.feedFetch = { 
        status: 'SUCCESS', 
        message: `Fetched ${feed.items.length} items from ${testSource.name}` 
      };
      console.log(`✅ Step 2: Feed Fetch OK (${feed.items.length} items)`);
    } catch (e) {
      report.steps.feedFetch = { status: 'FAILED', message: e.message };
      throw e;
    }

    // 3. AI Connection (Smoke Test)
    // We send a tiny prompt to verify connectivity without wasting tokens
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-3-flash-preview";
      await ai.models.generateContent({
        model: model,
        contents: "Test connection. Reply 'OK'.",
      });
      report.steps.aiConnection = { status: 'SUCCESS', message: 'Gemini API responding' };
      console.log("✅ Step 3: AI Connection OK");
    } catch (e) {
      report.steps.aiConnection = { status: 'FAILED', message: e.message };
      throw e;
    }

    // 4. File System Permissions
    try {
      const testFile = 'data/test_write_permission.tmp';
      if (!fs.existsSync('data')) fs.mkdirSync('data');
      fs.writeFileSync(testFile, 'test');
      fs.unlinkSync(testFile);
      report.steps.fileSystem = { status: 'SUCCESS', message: 'Write access confirmed' };
      console.log("✅ Step 4: File System OK");
    } catch (e) {
      report.steps.fileSystem = { status: 'FAILED', message: e.message };
      throw e;
    }

    report.status = 'SUCCESS';

  } catch (error) {
    console.error("❌ Test Failed:", error.message);
    report.status = 'FAILED';
    report.errors.push(error.message);
  } finally {
    saveReport();
  }
}

runTest();