
# Critical n8n Flaws Allow Remote Code Execution and Exposure of Stored Credentials

> Executive Overview: n8n 워크플로우 자동화 플랫폼에서 원격 코드 실행(RCE) 및 저장된 자격 증명 노출을 초래할 수 있는 두 건의 심각한 보안 결함(CVE-2026-27577, CVE-2026-27493)이 식별되었습니다. n8n은 기업 내 수많은 SaaS 애플리케이션과 내부 시스템을 연결하는 허브 역할을 수행하므로, 이번 취약점은 단순한 개별 솔루션의 문제를 넘어 인프라 전체에 대한 공급망 위협으로 간주되어야 합니다. Threat Analysis: CVE-2026-27577은 n8n의 표현식 엔진 내 샌드박스 메커니즘을 우회하여 호스트 시스템에서 임의의 시스템 명령을 실행할 수 있게 하는 결함입니다. 동시에 CVE-2026-27493은 인증되지 않은 사용자가 시스템에 접근하여 민감한 데이터나 저장된 자격 증명을 탈취할 수 있는 경로를 제공합니다. 공격자는 이 두 취약점을 연쇄적으로 악용하여 자동화 서버를 완전히 장악하고 내부망 침투를 위한 교두보로 활용할 수 있습니다. Impact Assessment: 취약한 버전을 사용하는 조직은 클라우드 API 키, 데이터베이스 접속 정보 및 비즈니스 로직이 외부로 유출될 위험에 직면해 있습니다. 특히 워크플로우에 연동된 서드파티 서비스의 권한이 탈취될 경우, 피해 범위는 n8n 서버를 넘어 전사적 클라우드 인프라와 고객 데이터까지 확산될 수 있습니다. Recommendations: 관리자는 즉시 n8n을 최신 보안 패치가 적용된 버전으로 업데이트해야 합니다. 업데이트 후에는 노출 가능성이 있는 모든 API 토큰과 비밀번호를 즉시 재설정(Rotation)해야 하며, n8n 대시보드에 대한 접근을 신뢰할 수 있는 IP 대역으로 제한하고 다요소 인증(MFA)을 강제하는 보안 강화 조치가 병행되어야 합니다.

**Severity**: CRITICAL (9.5/10)
**Tags**: Remote Code Execution, Credential Exposure, n8n, Sandbox Escape, Workflow Automation

## Analysis
Executive Overview: n8n 워크플로우 자동화 플랫폼에서 원격 코드 실행(RCE) 및 저장된 자격 증명 노출을 초래할 수 있는 두 건의 심각한 보안 결함(CVE-2026-27577, CVE-2026-27493)이 식별되었습니다. n8n은 기업 내 수많은 SaaS 애플리케이션과 내부 시스템을 연결하는 허브 역할을 수행하므로, 이번 취약점은 단순한 개별 솔루션의 문제를 넘어 인프라 전체에 대한 공급망 위협으로 간주되어야 합니다. Threat Analysis: CVE-2026-27577은 n8n의 표현식 엔진 내 샌드박스 메커니즘을 우회하여 호스트 시스템에서 임의의 시스템 명령을 실행할 수 있게 하는 결함입니다. 동시에 CVE-2026-27493은 인증되지 않은 사용자가 시스템에 접근하여 민감한 데이터나 저장된 자격 증명을 탈취할 수 있는 경로를 제공합니다. 공격자는 이 두 취약점을 연쇄적으로 악용하여 자동화 서버를 완전히 장악하고 내부망 침투를 위한 교두보로 활용할 수 있습니다. Impact Assessment: 취약한 버전을 사용하는 조직은 클라우드 API 키, 데이터베이스 접속 정보 및 비즈니스 로직이 외부로 유출될 위험에 직면해 있습니다. 특히 워크플로우에 연동된 서드파티 서비스의 권한이 탈취될 경우, 피해 범위는 n8n 서버를 넘어 전사적 클라우드 인프라와 고객 데이터까지 확산될 수 있습니다. Recommendations: 관리자는 즉시 n8n을 최신 보안 패치가 적용된 버전으로 업데이트해야 합니다. 업데이트 후에는 노출 가능성이 있는 모든 API 토큰과 비밀번호를 즉시 재설정(Rotation)해야 하며, n8n 대시보드에 대한 접근을 신뢰할 수 있는 IP 대역으로 제한하고 다요소 인증(MFA)을 강제하는 보안 강화 조치가 병행되어야 합니다.


## References
1. CVE-2026-27577
2. CVE-2026-27493
3. MITRE ATT&CK: T1190 (Exploit Public-Facing Application)
4. MITRE ATT&CK: T1555 (Credentials from Password Stores)
5. OWASP, Top 10 Low-Code/No-Code Security Risks, OWASP Foundation, 2023
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/critical-n8n-flaws-allow-remote-code.html)
    