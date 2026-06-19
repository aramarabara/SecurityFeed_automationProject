
# AutoJack Attack Lets One Web Page Hijack AI Agent for Host Code Execution

> Microsoft 연구진이 공개한 'AutoJack' 공격은 웹 브라우징 기능을 수행하는 AI 에이전트가 보안의 취약한 연결 고리가 될 수 있음을 시사합니다. 이 취약점 체인은 AI가 자율적으로 웹을 탐색하는 과정에서 공격자의 JavaScript 코드를 실행하게 함으로써, 인증 절차 없이 호스트 시스템에서 원격 코드 실행(RCE)을 가능하게 합니다. 이는 AI 기술의 급격한 도입 과정에서 발생할 수 있는 새로운 형태의 공급망 및 런타임 위협으로 간주됩니다.

공격 과정은 AI 에이전트를 공격자가 제어하는 악성 웹 페이지로 유도하는 것으로 시작됩니다. 해당 페이지에 삽입된 JavaScript는 동일한 머신에서 실행 중인 권한 있는 로컬 서비스(Local Service)에 접근합니다. 이 과정에서 에이전트와 호스트 간의 신뢰 관계를 악용하여 추가적인 사용자 승인이나 자격 증명 입력 없이 새로운 프로세스를 생성합니다. 이는 전통적인 SSRF(Server-Side Request Forgery)와 유사하지만, AI 에이전트의 고유한 로컬 브리지를 겨냥한다는 점에서 차별화됩니다.

이 위협은 자율형 워크플로우를 위해 AI 에이전트를 도입한 기업 및 개인 환경에 치명적인 영향을 미칠 수 있습니다. 공격자가 호스트 시스템의 제어권을 획득할 경우, 내부 네트워크로의 침투, 민감 데이터 유출, 혹은 지속적인 백도어 설치 등 광범위한 피해가 예상됩니다. 특히 에이전트가 시스템 관리 권한을 보유하고 있을 경우 전체 인프라가 위험에 노출될 수 있습니다.

대응 방안으로 가장 시급한 것은 AI 에이전트를 격리된 샌드박스 환경에서 실행하여 호스트 시스템과의 직접적인 통신을 원천 차단하는 것입니다. 또한 로컬 서비스 인터페이스에 대한 상호 인증(Mutual Auth)을 도입하고, 최소 권한 원칙(PoLP)에 따라 에이전트의 권한을 엄격히 제한해야 합니다. 마지막으로 AI가 접근하는 콘텐츠에 대한 실시간 검사와 로컬호스트 트래픽에 대한 이상 징후 모니터링이 병행되어야 합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: AI Agent Security, Remote Code Execution (RCE), Indirect Prompt Injection, Microsoft Research, Host Hijacking

## Analysis
Microsoft 연구진이 공개한 'AutoJack' 공격은 웹 브라우징 기능을 수행하는 AI 에이전트가 보안의 취약한 연결 고리가 될 수 있음을 시사합니다. 이 취약점 체인은 AI가 자율적으로 웹을 탐색하는 과정에서 공격자의 JavaScript 코드를 실행하게 함으로써, 인증 절차 없이 호스트 시스템에서 원격 코드 실행(RCE)을 가능하게 합니다. 이는 AI 기술의 급격한 도입 과정에서 발생할 수 있는 새로운 형태의 공급망 및 런타임 위협으로 간주됩니다.

공격 과정은 AI 에이전트를 공격자가 제어하는 악성 웹 페이지로 유도하는 것으로 시작됩니다. 해당 페이지에 삽입된 JavaScript는 동일한 머신에서 실행 중인 권한 있는 로컬 서비스(Local Service)에 접근합니다. 이 과정에서 에이전트와 호스트 간의 신뢰 관계를 악용하여 추가적인 사용자 승인이나 자격 증명 입력 없이 새로운 프로세스를 생성합니다. 이는 전통적인 SSRF(Server-Side Request Forgery)와 유사하지만, AI 에이전트의 고유한 로컬 브리지를 겨냥한다는 점에서 차별화됩니다.

이 위협은 자율형 워크플로우를 위해 AI 에이전트를 도입한 기업 및 개인 환경에 치명적인 영향을 미칠 수 있습니다. 공격자가 호스트 시스템의 제어권을 획득할 경우, 내부 네트워크로의 침투, 민감 데이터 유출, 혹은 지속적인 백도어 설치 등 광범위한 피해가 예상됩니다. 특히 에이전트가 시스템 관리 권한을 보유하고 있을 경우 전체 인프라가 위험에 노출될 수 있습니다.

대응 방안으로 가장 시급한 것은 AI 에이전트를 격리된 샌드박스 환경에서 실행하여 호스트 시스템과의 직접적인 통신을 원천 차단하는 것입니다. 또한 로컬 서비스 인터페이스에 대한 상호 인증(Mutual Auth)을 도입하고, 최소 권한 원칙(PoLP)에 따라 에이전트의 권한을 엄격히 제한해야 합니다. 마지막으로 AI가 접근하는 콘텐츠에 대한 실시간 검사와 로컬호스트 트래픽에 대한 이상 징후 모니터링이 병행되어야 합니다.


## References
1. Greshake et al., Not What You've Signed Up For: Compromising Real-World LLM Applications via Indirect Prompt Injection, AISec '23, 2023
2. MITRE ATT&CK: T1189 (Drive-by Compromise)
3. MITRE ATT&CK: T1059.007 (Command and Scripting Interpreter: JavaScript)
4. Microsoft Security Response Center (MSRC), Researching the security of AI agents, 2024
## Original Source
[The Hacker News](https://thehackernews.com/2026/06/autojack-attack-lets-one-web-page.html)
    