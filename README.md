# SecurityFeed AI

## Overview
SecurityFeed AI is an intelligent security news aggregator designed to ingest, analyze, and prioritize cyber threat intelligence. 

By leveraging the **Strategy Pattern** for data ingestion and **Google Gemini 1.5/3** for semantic analysis, the system transforms raw news feeds into structured, actionable intelligence with severity scoring and IOC (Indicator of Compromise) extraction.

## Key Features
*   **Multi-Source Ingestion**:
    *   **RSS Generic**: Real-time fetching via `rss2json` bridge.
    *   **CISA Alerts**: Dedicated strategy for US-CERT alerts.
    *   **HackerNews**: API integration for keyword monitoring.
*   **Zero-Trust Security**: Input sanitization using **DOMPurify** to prevent XSS from untrusted feeds.
*   **AI-Powered Analysis**: Uses Google Gemini to summarize threats, assign severity scores (1-10), and extract relevant tags.
*   **FileStore Architecture**: Flat-file storage simulation replacing Redis for simplified data persistence (`data/raw`, `data/analyzed`, `data/drafts`).
*   **Headless Automation**: A Node.js engine (`daily_batch.mjs`) that runs autonomously to fetch, analyze, and commit intelligence reports.

## System Map

```mermaid
graph TD
    User[Security Analyst] -->|View & Control| UI[Web Interface]
    Cron[MacOS Cron] -->|Trigger| Bot[daily_batch.mjs]
    
    subgraph "Browser Engine"
        UI --> RSS[RSS Ingestor]
        UI --> CISA[CISA Ingestor]
        RSS -->|Sanitize| PurifyDOM[DOMPurify]
    end

    subgraph "Node Engine"
        Bot --> NodeRSS[RSS Parser]
        Bot --> NodeSanitizer[JSDOM + DOMPurify]
    end

    NodeRSS -->|Write| Disk[FileStore (data/)]
    PurifyDOM -->|Write| Disk
    
    Bot -->|Git Ops| GitHub[Remote Repo]
```

## Quick Start (Web App)
1.  Run `npm install` and `npm start`.
2.  Select an Ingestion Strategy (RSS, CISA, or HackerNews).
3.  Click **Fetch** -> **Analyze** -> **Save Draft**.

## Automation Setup (Headless)
1.  Configure `automation.config.json`.
2.  Set `API_KEY` in your `.env` file.
3.  Run the batch job manually:
    ```bash
    npm run automation:run
    ```
4.  Setup Crontab (Example):
    ```bash
    0 8 * * * cd /path/to/project && /usr/local/bin/node scripts/daily_batch.mjs >> automation.log 2>&1
    ```
