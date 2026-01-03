# Data Flow Documentation

## Overview
This document describes the lifecycle of a security article from external ingestion to AI enrichment and FileStore persistence.

## Processing Sequence

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant App as Controller
    participant Factory as Ingestor Factory
    participant Purify as DOMPurify
    participant FileStore as Storage Service
    participant Agent as AI Agent
    participant Gemini as Google GenAI

    Note over User, App: Phase 1: Ingestion (Zero-Trust)

    User->>App: Select CISA/RSS & Click "Fetch"
    App->>Factory: getIngestor(type)
    Factory-->>App: returns Ingestor
    App->>Factory: fetchLatest()
    Factory->>Purify: sanitize(rawHTML)
    Purify-->>Factory: cleanHTML
    Factory-->>App: returns RawArticle[]
    App->>FileStore: saveRaw(RawArticle[])
    FileStore-->>App: write "data/raw/batch_xyz.json"
    App->>User: Display Raw Articles

    Note over User, App: Phase 2: Analysis

    User->>App: Click "Analyze"
    loop For each Article
        App->>Agent: analyze(RawArticle)
        Agent->>Gemini: generateContent(Prompt)
        Gemini-->>Agent: JSON Response
        Agent-->>App: returns AnalyzedArticle
        App->>FileStore: saveAnalyzed(AnalyzedArticle)
        FileStore-->>App: write "data/analyzed/{id}.json"
    end
    App->>User: Update UI with Severity Scores

    Note over User, App: Phase 3: Publication

    User->>App: Click "Save Draft"
    App->>FileStore: saveDraft(AnalyzedArticle, Markdown)
    FileStore-->>App: write "data/drafts/{id}.md"
    App->>User: Show "Saved" Status
```

## Storage Hierarchy
*   **Level 1 (Raw)**: `data/raw/` - Immutable source of truth (post-sanitization).
*   **Level 2 (Structured)**: `data/analyzed/` - Intelligence added (scores, tags).
*   **Level 3 (Product)**: `data/drafts/` - Human-readable outputs (Markdown).
