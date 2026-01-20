
# Three Flaws in Anthropic MCP Git Server Enable File Access and Code Execution

> Executive Overview: Anthropic의 Model Context Protocol(MCP) Git 서버인 mcp-server-git에서 발견된 세 가지 취약점은 AI 어시스턴트가 Git 리포지토리와 상호작용하는 과정에서 발생하는 심각한 보안 결함입니다. 이 취약점은 공격자가 프롬프트 인젝션(Prompt Injection) 기법을 사용하여 시스템의 파일 제어권과 실행 권한을 획득할 수 있게 하며, AI 기반 자동화 도구의 보안 신뢰 경계에 중대한 경고를 던지고 있습니다. Threat Analysis: 해당 취약점들은 공격자가 악성 README 파일이나 리포지토리에 포함된 데이터를 조작하여 AI 모델의 명령을 유도하는 '간접 프롬프트 인젝션'을 통해 활성화됩니다. 주요 공격 기법으로는 경로 탐색(Path Traversal)을 통한 임의 파일 읽기 및 삭제, 그리고 특정 조건 하에서의 원격 코드 실행(RCE)이 포함됩니다. 이는 LLM이 외부 소스로부터 데이터를 가져올 때 입력값에 대한 검증이 부족함을 시사합니다. Impact Assessment: 이 결함은 MCP를 통해 Git 환경을 제어하는 모든 개발자 및 기업 환경에 직접적인 위협이 됩니다. 공격 성공 시 민감한 소스 코드 및 설정 파일 탈취, 프로젝트 무결성 훼손, 시스템 제어권 상실로 이어질 수 있으며, 이는 특히 AI 에이전트가 높은 권한을 가진 CI/CD 파이프라인이나 개발 환경에서 치명적인 피해를 초래합니다. Recommendations: 즉각적인 조치로 Anthropic에서 제공하는 최신 패치를 적용해야 합니다. 또한, AI 어시스턴트가 신뢰할 수 없는 리포지토리에 접근하는 것을 제한하고, 실행 환경을 샌드박스화하여 파일 시스템 접근을 최소화해야 합니다. 입력 데이터에 대한 엄격한 필터링과 프롬프트 인젝션 방어 레이어 도입이 권고됩니다.

**Severity**: HIGH (8.8/10)
**Tags**: Prompt Injection, Remote Code Execution, Model Context Protocol, AI Security, Path Traversal

## Analysis
Executive Overview: Anthropic의 Model Context Protocol(MCP) Git 서버인 mcp-server-git에서 발견된 세 가지 취약점은 AI 어시스턴트가 Git 리포지토리와 상호작용하는 과정에서 발생하는 심각한 보안 결함입니다. 이 취약점은 공격자가 프롬프트 인젝션(Prompt Injection) 기법을 사용하여 시스템의 파일 제어권과 실행 권한을 획득할 수 있게 하며, AI 기반 자동화 도구의 보안 신뢰 경계에 중대한 경고를 던지고 있습니다. Threat Analysis: 해당 취약점들은 공격자가 악성 README 파일이나 리포지토리에 포함된 데이터를 조작하여 AI 모델의 명령을 유도하는 '간접 프롬프트 인젝션'을 통해 활성화됩니다. 주요 공격 기법으로는 경로 탐색(Path Traversal)을 통한 임의 파일 읽기 및 삭제, 그리고 특정 조건 하에서의 원격 코드 실행(RCE)이 포함됩니다. 이는 LLM이 외부 소스로부터 데이터를 가져올 때 입력값에 대한 검증이 부족함을 시사합니다. Impact Assessment: 이 결함은 MCP를 통해 Git 환경을 제어하는 모든 개발자 및 기업 환경에 직접적인 위협이 됩니다. 공격 성공 시 민감한 소스 코드 및 설정 파일 탈취, 프로젝트 무결성 훼손, 시스템 제어권 상실로 이어질 수 있으며, 이는 특히 AI 에이전트가 높은 권한을 가진 CI/CD 파이프라인이나 개발 환경에서 치명적인 피해를 초래합니다. Recommendations: 즉각적인 조치로 Anthropic에서 제공하는 최신 패치를 적용해야 합니다. 또한, AI 어시스턴트가 신뢰할 수 없는 리포지토리에 접근하는 것을 제한하고, 실행 환경을 샌드박스화하여 파일 시스템 접근을 최소화해야 합니다. 입력 데이터에 대한 엄격한 필터링과 프롬프트 인젝션 방어 레이어 도입이 권고됩니다.


## References
1. Greshake et al., Not what you've signed up for: Compromising Real-World LLM-Integrated Applications via Indirect Prompt Injection, AISec, 2023
2. MITRE ATT&CK: T1204.002
3. OWASP Top 10 for LLM Applications: LLM01 Prompt Injection
4. MITRE ATT&CK: T1059.007
5. CVE-2024-XXXXX (Anthropic MCP Git Server Vulnerabilities)
## Original Source
[The Hacker News](https://thehackernews.com/2026/01/three-flaws-in-anthropic-mcp-git-server.html)
    