
# Claude Code GitHub Action Flaw Let One Malicious Issue Hijack Repositories

> [Executive Overview] Anthropic의 'Claude Code' GitHub Action에서 발견된 취약점은 공격자가 단 하나의 악성 GitHub 이슈를 생성하는 것만으로 취약한 공개 저장소를 완전히 장악할 수 있게 합니다. 이는 AI 기반 자동화 도구가 개발 파이프라인에 깊숙이 통합됨에 따라 발생할 수 있는 새로운 형태의 위협으로, 전 세계 개발 생태계에 심각한 보안 경고를 던지고 있습니다. [Threat Analysis] 이 공격은 GitHub의 '이슈 생성' 이벤트를 트리거로 삼습니다. 공격자가 작성한 악성 프롬프트가 포함된 이슈가 생성되면, Claude Code는 이를 처리하는 과정에서 외부 입력을 신뢰할 수 있는 명령으로 오인하는 '간접 프롬프트 주입(Indirect Prompt Injection)'이 발생합니다. 이를 통해 공격자는 워크플로우에 부여된 권한을 도용하여 임의의 셸 명령을 실행하거나, 저장소의 소스 코드를 무단으로 수정 및 푸시할 수 있는 권한을 획득하게 됩니다. [Impact Assessment] 특히 Anthropic의 공식 저장소 자체가 이 취약한 워크플로우를 사용하고 있었다는 점이 가장 치명적입니다. 공격자가 이를 이용해 Claude Code 자체에 악성 코드를 주입했다면, 이를 사용하는 수많은 하위 프로젝트에 자동으로 악성 코드가 전파되는 대규모 '공급망 공격(Supply Chain Attack)'으로 번졌을 위험이 큽니다. 이는 대규모 언어 모델(LLM)을 워크플로우에 통합할 때 발생하는 신뢰 경계의 모호함을 보여줍니다. [Recommendations] 조직은 GitHub Action의 GITHUB_TOKEN 권한을 'contents: read'와 같이 최소 권한 원칙(PoLP)에 따라 제한해야 합니다. 특히 외부 입력이 포함된 트리거에 대해 'write' 권한 부여를 엄격히 금지하고, AI 기반 도구가 수행하는 모든 코드 변경 사항에 대해 'Human-in-the-loop' 검토 프로세스를 의무화해야 합니다. Anthropic이 배포한 최신 보안 패치를 즉시 적용하고 워크플로우 보안 설정을 전수 조사할 것을 권고합니다.

**Severity**: CRITICAL (8.8/10)
**Tags**: Supply Chain Attack, Prompt Injection, GitHub Actions, Command Injection

## Analysis
[Executive Overview] Anthropic의 'Claude Code' GitHub Action에서 발견된 취약점은 공격자가 단 하나의 악성 GitHub 이슈를 생성하는 것만으로 취약한 공개 저장소를 완전히 장악할 수 있게 합니다. 이는 AI 기반 자동화 도구가 개발 파이프라인에 깊숙이 통합됨에 따라 발생할 수 있는 새로운 형태의 위협으로, 전 세계 개발 생태계에 심각한 보안 경고를 던지고 있습니다. [Threat Analysis] 이 공격은 GitHub의 '이슈 생성' 이벤트를 트리거로 삼습니다. 공격자가 작성한 악성 프롬프트가 포함된 이슈가 생성되면, Claude Code는 이를 처리하는 과정에서 외부 입력을 신뢰할 수 있는 명령으로 오인하는 '간접 프롬프트 주입(Indirect Prompt Injection)'이 발생합니다. 이를 통해 공격자는 워크플로우에 부여된 권한을 도용하여 임의의 셸 명령을 실행하거나, 저장소의 소스 코드를 무단으로 수정 및 푸시할 수 있는 권한을 획득하게 됩니다. [Impact Assessment] 특히 Anthropic의 공식 저장소 자체가 이 취약한 워크플로우를 사용하고 있었다는 점이 가장 치명적입니다. 공격자가 이를 이용해 Claude Code 자체에 악성 코드를 주입했다면, 이를 사용하는 수많은 하위 프로젝트에 자동으로 악성 코드가 전파되는 대규모 '공급망 공격(Supply Chain Attack)'으로 번졌을 위험이 큽니다. 이는 대규모 언어 모델(LLM)을 워크플로우에 통합할 때 발생하는 신뢰 경계의 모호함을 보여줍니다. [Recommendations] 조직은 GitHub Action의 GITHUB_TOKEN 권한을 'contents: read'와 같이 최소 권한 원칙(PoLP)에 따라 제한해야 합니다. 특히 외부 입력이 포함된 트리거에 대해 'write' 권한 부여를 엄격히 금지하고, AI 기반 도구가 수행하는 모든 코드 변경 사항에 대해 'Human-in-the-loop' 검토 프로세스를 의무화해야 합니다. Anthropic이 배포한 최신 보안 패치를 즉시 적용하고 워크플로우 보안 설정을 전수 조사할 것을 권고합니다.


## References
1. RyotaK, Hijacking GitHub repositories via Claude Code, GMO Cybersecurity, 2024
2. Greshake et al., Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Injected Prompts, arXiv, 2023
3. MITRE ATT&CK: T1195.002 (Supply Chain Compromise: Software Dependencies)
4. OWASP Top 10 for LLM: LLM01 (Prompt Injection)
## Original Source
[The Hacker News](https://thehackernews.com/2026/06/claude-code-github-action-flaw-let-one.html)
    