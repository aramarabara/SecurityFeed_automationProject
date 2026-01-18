
# Five Malicious Chrome Extensions Impersonate Workday and NetSuite to Hijack Accounts

> [Executive Overview] 최근 사이버 보안 연구원들은 Workday, NetSuite, SAP SuccessFactors와 같은 유명 인적 자원 관리(HR) 및 전사적 자원 관리(ERP) 플랫폼을 사칭하는 5개의 새로운 악성 Google Chrome 확장 프로그램을 식별했습니다. 이들은 기업 사용자들을 타겟으로 하여 권한이 높은 계정의 제어권을 획득하려는 목적으로 설계되었으며, 이는 조직의 데이터 무결성과 비즈니스 연속성에 중대한 위협을 초래합니다. [Threat Analysis] 기술적으로 이 확장 프로그램들은 단독으로 작동하지 않고 서로 협력하여 공격 목표를 달성합니다. 주요 공격 벡터는 브라우저 내 '인증 토큰(Authentication Token)'의 무단 탈취입니다. 공격자는 확장 프로그램에 부여된 광범위한 브라우저 권한을 사용하여 사용자의 HTTP 요청과 쿠키를 가로챕니다. 특히 주목할 만한 점은 공격자가 피해자의 사고 대응 및 보안 감사 기능을 차단하도록 설계되어 있어, 보안 팀이 침해 사고를 탐지하고 조치하는 과정을 기술적으로 방해한다는 것입니다. [Impact Assessment] 이번 공격의 영향은 광범위합니다. HR 및 ERP 시스템은 기업의 핵심 데이터가 집중된 곳으로, 공격자가 이를 장악할 경우 개인 식별 정보(PII), 재무 제표, 공급망 정보 등이 유출될 수 있습니다. 또한, 탈취된 인증 정보는 단일 로그인(SSO) 환경에서 다른 기업용 애플리케이션으로의 측면 이동(Lateral Movement)을 가능하게 하여 2차 피해를 유발합니다. [Recommendations] 대응 방안으로 조직은 브라우저 보안 정책을 강화해야 합니다. 구글 워크스페이스나 그룹 정책(GPO)을 통해 승인된 확장 프로그램만 설치되도록 화이트리스트 정책을 운영해야 합니다. 또한, 세션 기반의 MFA를 도입하고, 이상 로그인 패턴을 감지하기 위한 SIEM 모니터링을 강화해야 합니다. 마지막으로, 임직원을 대상으로 출처가 불분명한 확장 프로그램의 위험성을 교육하는 보안 인식 제고가 필수적입니다.

**Severity**: HIGH (8.5/10)
**Tags**: Account Hijacking, Browser Extensions, ERP Security, Credential Theft, Initial Access

## Analysis
[Executive Overview] 최근 사이버 보안 연구원들은 Workday, NetSuite, SAP SuccessFactors와 같은 유명 인적 자원 관리(HR) 및 전사적 자원 관리(ERP) 플랫폼을 사칭하는 5개의 새로운 악성 Google Chrome 확장 프로그램을 식별했습니다. 이들은 기업 사용자들을 타겟으로 하여 권한이 높은 계정의 제어권을 획득하려는 목적으로 설계되었으며, 이는 조직의 데이터 무결성과 비즈니스 연속성에 중대한 위협을 초래합니다. [Threat Analysis] 기술적으로 이 확장 프로그램들은 단독으로 작동하지 않고 서로 협력하여 공격 목표를 달성합니다. 주요 공격 벡터는 브라우저 내 '인증 토큰(Authentication Token)'의 무단 탈취입니다. 공격자는 확장 프로그램에 부여된 광범위한 브라우저 권한을 사용하여 사용자의 HTTP 요청과 쿠키를 가로챕니다. 특히 주목할 만한 점은 공격자가 피해자의 사고 대응 및 보안 감사 기능을 차단하도록 설계되어 있어, 보안 팀이 침해 사고를 탐지하고 조치하는 과정을 기술적으로 방해한다는 것입니다. [Impact Assessment] 이번 공격의 영향은 광범위합니다. HR 및 ERP 시스템은 기업의 핵심 데이터가 집중된 곳으로, 공격자가 이를 장악할 경우 개인 식별 정보(PII), 재무 제표, 공급망 정보 등이 유출될 수 있습니다. 또한, 탈취된 인증 정보는 단일 로그인(SSO) 환경에서 다른 기업용 애플리케이션으로의 측면 이동(Lateral Movement)을 가능하게 하여 2차 피해를 유발합니다. [Recommendations] 대응 방안으로 조직은 브라우저 보안 정책을 강화해야 합니다. 구글 워크스페이스나 그룹 정책(GPO)을 통해 승인된 확장 프로그램만 설치되도록 화이트리스트 정책을 운영해야 합니다. 또한, 세션 기반의 MFA를 도입하고, 이상 로그인 패턴을 감지하기 위한 SIEM 모니터링을 강화해야 합니다. 마지막으로, 임직원을 대상으로 출처가 불분명한 확장 프로그램의 위험성을 교육하는 보안 인식 제고가 필수적입니다.


## References
1. MITRE ATT&CK: T1176
2. MITRE ATT&CK: T1539
3. S. G. Kim et al., Analysis of Browser Extension Vulnerabilities in Enterprise Environments, IEEE Access, 2021
4. CISA, AA22-137A: Protecting Against Malicious Cyber Activity, 2022
## Original Source
[The Hacker News](https://thehackernews.com/2026/01/five-malicious-chrome-extensions.html)
    