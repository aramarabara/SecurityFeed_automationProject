# Data Flow Documentation

## Overview
This document describes the lifecycle of a security article from external ingestion to AI enrichment and visualization.

## Processing Sequence

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant App as Controller (App.tsx)
    participant Factory as Ingestor Factory
    participant Strategy as Concrete Ingestor
    participant Agent as AI Agent Service
    participant Gemini as Google GenAI

    Note over User, App: Phase 1: Ingestion

    User->>App: Select Source & Click "Fetch"
    App->>Factory: getIngestor(type)
    Factory-->>App: returns instance (e.g., RSSIngestor)
    App->>Strategy: fetchLatest(sourceInput)
    Strategy-->>App: returns RawArticle[]
    App->>User: Display Raw Articles

    Note over User, App: Phase 2: Analysis

    User->>App: Click "Run AI Analysis"
    loop For each Article
        App->>Agent: analyze(RawArticle)
        Agent->>Gemini: generateContent(Prompt + Schema)
        Gemini-->>Agent: JSON Response (Summary, Score, Tags)
        Agent-->>App: returns AnalyzedArticle
        App->>User: Update UI with Severity Badge & Summary
    end
```

## State Transitions
1.  **Empty State**: No data loaded.
2.  **Raw State**: Data fetched, contains `title`, `content`, `url`. `is_analyzed = false`.
3.  **Analyzed State**: Data enriched with `severity_score`, `tags`. `is_analyzed = true`.
