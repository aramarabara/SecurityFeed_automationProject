# Ontology & Conventions

## Domain Concepts

### Entities
| Entity           | Description                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------|
| **RawArticle**   | A standardized, sanitized news item from any source (structured, but not yet enriched).           |
| **AnalyzedArticle** | An article post AI-enrichment (severity, tags, multi-language summaries, references, ...).         |
| **Draft**        | Publication-ready Markdown, generated from an AnalyzedArticle.                                   |
| **Ingestor**     | Strategy pattern for retrieving RawArticles from a source (RSS, CISA, HackerNews, GitHub Search).|
| **FileStore**    | Abstract file structure, organizing `raw`, `analyzed`, `drafts`, `vulnerabilities`.             |
| **VulnerabilityReport** | CodeQL 기반 저장소 취약점 리포트 (SARIF, AI processed summary, AST flow)             |

### Attributes
| Attribute       | Type            | Description                                                                 |
|-----------------|-----------------|-----------------------------------------------------------------------------|
| **Severity Score** | `1-10`        | Threat score (10=Critical, 1=Info)                                          |
| **Severity Level** | `Enum`        | Severity Category: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFO`              |
| **Tags**        | `List<String>`  | Keywords for topic, malware, function, vector etc.                         |
| **References**  | `List<String>`  | Paper/Research references, external sources (AI output, enforced)           |

## Naming Conventions

### Codebase
- **Files**: CamelCase (`ArticleCard.tsx`), camelCase (`aiAgent.ts`)
- **Classes/Interfaces**: PascalCase (`RSSIngestor`)
- **Variables/Functions**: camelCase

### DTOs/Data Schema
- API 연동/타입 호환 위해 **snake_case** 필수

```typescript
interface AnalyzedArticle {
  // Serialized fields for DB/Python interop
  severity_score: number;
  severity_level: string;
  is_analyzed: boolean;
  // Standard TS/JS
  id: string;
  title: string;
}
```

### Folder Structure (FileStore)
- `data/raw/batch_{timestamp}.json`        // 1차원 원본
- `data/analyzed/YYYY-MM-DD/[severity]_[tags]_[title]_[id].json` // 분석본
- `data/drafts/YYYY-MM-DD/[...].md`        // Markdown 보고서 최종본
- `data/vulnerabilities/YYYY-MM-DD/[severity]_[repo]_[#vulns]_report.json`, ...   

## Taxonomy: Severity Levels
1. **CRITICAL**  : 제로데이, 적극적 공격, 핵심 인프라 위협 without patch
2. **HIGH**      : PoC 확인된 active exploit, 패치 존재함
3. **MEDIUM**    : 잠재 위협/Targeted but not critical
4. **LOW**       : Best practice 위반, 낮은 위험성
5. **INFO**      : 일반 뉴스, 지식 공유, 교육

## 기타
- FileStore는 (Local) S3/Persistence abstraction 대체 가능
- 인텔리전스 뿐 아니라 Vulnerability(CWE)에도 동일한 컨벤션, 파일 구조를 적용