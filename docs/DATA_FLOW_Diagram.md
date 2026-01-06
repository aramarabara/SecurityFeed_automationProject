# Data Flow Documentation

## Overview
이 문서는 SecurityFeed의 주요 워크플로(뉴스/저장소 → AI/CodeQL 분석 → Reporting) 전체를 단계별로 설명합니다.

---

## Processing Sequence

### A. 일반 인텔리전스 분석 (뉴스 기반)
```mermaid
sequenceDiagram
    autonumber
    actor User
    participant App as Controller
    participant Factory as Ingestor Factory
    participant Purify as DOMPurify
    participant FileStore as Storage
    participant Agent as AI Agent
    participant Gemini as Google GenAI

    User->>App: Select Data Ingestor (RSS/CISA/HN)
    App->>Factory: getIngestor(type)
    Factory-->>App: Ingestor 반환
    App->>Factory: fetchLatest()
    Factory->>Purify: sanitize(rawHTML)
    Purify-->>Factory: cleanHTML
    Factory-->>App: RawArticle[]
    App->>FileStore: saveRaw(RawArticle[])
    FileStore-->>App: 저장됨
    App->>User: Show Raw Data

    User->>App: Click "Analyze"
    loop For Each Article
        App->>Agent: analyze(RawArticle)
        Agent->>Gemini: generateContent(Prompt)
        Gemini-->>Agent: AI JSON Response
        Agent-->>App: AnalyzedArticle
        App->>FileStore: saveAnalyzed(AnalyzedArticle)
        FileStore-->>App: 저장됨
    end
    App->>User: Update UI(Severity)

    User->>App: Click "Save Draft"
    App->>FileStore: saveDraft(AnalyzedArticle, Markdown)
    FileStore-->>App: 저장됨
    App->>User: Show "Saved"
```

### B. Github + CodeQL 취약점 워크플로
```mermaid
sequenceDiagram
    autonumber
    participant Bot as Automation
    participant Analyzer as VulnerabilityAnalyzer
    participant GitAPI as GitHub Search API
    participant Repo as GitHub Repo
    participant CodeQL as CodeQL Engine
    participant SARIF as Static Analysis Result
    participant FileStore as Storage
    participant AIAgent as AI Agent
    participant Draft as Draft Generator

    Bot->>Analyzer: 추출 키워드 전달
    Analyzer->>GitAPI: repo 검색 (star 100-1000, keyword, python)
    GitAPI-->>Analyzer: Repo List 반환
    loop for each Repo
        Analyzer->>Repo: clone
        Analyzer->>CodeQL: database create & analyze
        CodeQL-->>SARIF: 결과(SARIF)
        Analyzer->>AIAgent: SARIF 전달/핵심 요약(Prompt)
        AIAgent-->>Analyzer: Threat summary, severity 등
        Analyzer->>FileStore: 개별 VulnerabilityReport 저장
    end
    Analyzer->>Draft: Markdown 리포트 종합/생성
    Draft->>FileStore: 저장
```

---

## Storage Hierarchy
- **Level 1 (Raw)**: `data/raw/`           : 원본/뉴스 수집 결과
- **Level 2 (Analyzed)**: `data/analyzed/` : AI 분석, Tag/Severity, reference 부여
- **Level 3 (Drafts)**: `data/drafts/`     : Markdown, Blog-ready
- **Level 4 (Vuln)**: `data/vulnerabilities/` : CodeQL 결과 + AI 요약
