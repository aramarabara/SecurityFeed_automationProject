# Ontology & Conventions

## Domain Concepts

### Entities
| Entity | Description |
| :--- | :--- |
| **RawArticle** | A standardized unit of news derived from an external source before processing. |
| **AnalyzedArticle** | An enriched entity containing threat intelligence derived from a RawArticle. |
| **Ingestor** | A mechanism or strategy for retrieving RawArticles from a specific channel. |

### Attributes
| Attribute | Type | Description |
| :--- | :--- | :--- |
| **Severity Score** | `1-10` | Quantitative measure of threat. 10 = Global Critical, 1 = Informational. |
| **Severity Level** | `Enum` | Categorical classification: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFO`. |
| **Tags** | `List<String>` | Keywords identifying specific malware families, vectors (e.g., "Phishing"), or targets. |

## Naming Conventions

### Codebase
*   **Files**: CamelCase (e.g., `ArticleCard.tsx`) or camelCase (e.g., `aiAgent.ts`).
*   **Classes/Interfaces**: PascalCase (e.g., `RSSIngestor`, `RawArticle`).
*   **Variables/Functions**: camelCase (e.g., `fetchLatest`, `handleAnalyze`).

### Data Schema (DTOs)
To maintain compatibility with Python/Pydantic backend conventions (as per original requirements), data properties inside DTOs utilize **snake_case** where they represent serialized data fields.

```typescript
interface AnalyzedArticle {
  // Pythonic / Database style for serialized fields
  severity_score: number;
  severity_level: string;
  is_analyzed: boolean;

  // Standard TS style for others
  id: string;
  title: string;
}
```

## Taxonomy: Severity Levels

1.  **CRITICAL**: Active exploitation, zero-day with no patch, or infrastructure-wide compromise.
2.  **HIGH**: Critical vulnerabilities with patches available, or targeted active campaigns.
3.  **MEDIUM**: Proof of concepts released, or specific but limited attacks.
4.  **LOW**: Best practice violations or theoretical vulnerabilities.
5.  **INFO**: General news, tool releases, or educational content.
