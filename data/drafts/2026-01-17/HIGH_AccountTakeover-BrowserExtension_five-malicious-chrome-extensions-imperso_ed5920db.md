
# Five Malicious Chrome Extensions Impersonate Workday and NetSuite to Hijack Accounts

> [Executive Overview] 최근 보안 연구팀은 Workday, NetSuite, SuccessFactors와 같은 주요 기업용 HR 및 ERP 플랫폼을 사칭한 5개의 악성 Chrome 확장 프로그램을 발견했습니다. 이 위협은 기업 내부의 핵심 시스템에 접근할 수 있는 권한을 가진 계정을 직접적인 타겟으로 삼고 있으며, 단순한 개인 정보 탈취를 넘어 기업 전체의 데이터 보안 체계를 위협하는 심각한 보안 침해 사고로 이어질 수 있습니다. [Threat Analysis] 해당 악성 확장 프로그램들은 서로 협력하여 동작하도록 설계되었으며, 주요 공격 벡터는 세션 인증 토큰 탈취입니다. 공격자는 이를 통해 다중 요소 인증(MFA)을 우회하고 계정에 대한 완전한 제어권을 획득합니다. 특히 주목할 점은 이들이 보안 탐지를 회피하기 위해 조직의 사고 대응(Incident Response) 기능을 차단하는 기능을 포함하고 있다는 것입니다. 이는 공격자가 시스템 내에서 장기간 은신하며 지속적인 위협(APT)을 가할 수 있게 합니다. [Impact Assessment] 공격에 성공할 경우, 공격자는 인사 정보, 재무 데이터, 고객 관계 관리(CRM) 정보 등 기업의 가장 민감한 자산에 무단으로 접근할 수 있습니다. 이는 개인정보 보호법(GDPR, ISMS-P 등) 위반에 따른 법적 책임뿐만 아니라, 기업의 신뢰도 하락 및 재정적 손실을 초래합니다. 또한, 탈취된 계정은 기업 네트워크 내부 침투를 위한 교두보로 악용될 가능성이 큽니다. [Recommendations] 조직은 브라우저 확장 프로그램에 대한 화이트리스트 정책을 수립하여 승인되지 않은 프로그램 설치를 원천 차단해야 합니다. 또한, EDR 및 브라우저 보안 솔루션을 도입하여 비정상적인 토큰 접근 및 API 호출을 실시간 모니터링해야 합니다. 임직원 대상으로는 공식 스토어 외의 소스에서 확장 프로그램을 다운로드하지 않도록 하는 사회 공학적 공격 방어 교육을 강화할 것을 권고합니다.

**Severity**: HIGH (8.5/10)
**Tags**: Account Takeover, Browser Extension, Token Theft, Social Engineering

## Analysis
[Executive Overview] 최근 보안 연구팀은 Workday, NetSuite, SuccessFactors와 같은 주요 기업용 HR 및 ERP 플랫폼을 사칭한 5개의 악성 Chrome 확장 프로그램을 발견했습니다. 이 위협은 기업 내부의 핵심 시스템에 접근할 수 있는 권한을 가진 계정을 직접적인 타겟으로 삼고 있으며, 단순한 개인 정보 탈취를 넘어 기업 전체의 데이터 보안 체계를 위협하는 심각한 보안 침해 사고로 이어질 수 있습니다. [Threat Analysis] 해당 악성 확장 프로그램들은 서로 협력하여 동작하도록 설계되었으며, 주요 공격 벡터는 세션 인증 토큰 탈취입니다. 공격자는 이를 통해 다중 요소 인증(MFA)을 우회하고 계정에 대한 완전한 제어권을 획득합니다. 특히 주목할 점은 이들이 보안 탐지를 회피하기 위해 조직의 사고 대응(Incident Response) 기능을 차단하는 기능을 포함하고 있다는 것입니다. 이는 공격자가 시스템 내에서 장기간 은신하며 지속적인 위협(APT)을 가할 수 있게 합니다. [Impact Assessment] 공격에 성공할 경우, 공격자는 인사 정보, 재무 데이터, 고객 관계 관리(CRM) 정보 등 기업의 가장 민감한 자산에 무단으로 접근할 수 있습니다. 이는 개인정보 보호법(GDPR, ISMS-P 등) 위반에 따른 법적 책임뿐만 아니라, 기업의 신뢰도 하락 및 재정적 손실을 초래합니다. 또한, 탈취된 계정은 기업 네트워크 내부 침투를 위한 교두보로 악용될 가능성이 큽니다. [Recommendations] 조직은 브라우저 확장 프로그램에 대한 화이트리스트 정책을 수립하여 승인되지 않은 프로그램 설치를 원천 차단해야 합니다. 또한, EDR 및 브라우저 보안 솔루션을 도입하여 비정상적인 토큰 접근 및 API 호출을 실시간 모니터링해야 합니다. 임직원 대상으로는 공식 스토어 외의 소스에서 확장 프로그램을 다운로드하지 않도록 하는 사회 공학적 공격 방어 교육을 강화할 것을 권고합니다.


## References
1. MITRE ATT&CK: T1176 (Browser Extensions)
2. MITRE ATT&CK: T1539 (Steal Web Sessions)
3. Kapravelos et al., Hulk: Eliciting Malicious Behavior in Browser Extensions, USENIX Security, 2014
4. CISA Alert AA22-131A: Protecting Against Cyber Threats to Managed Service Providers and Their Customers, 2022
## Original Source
[The Hacker News](https://thehackernews.com/2026/01/five-malicious-chrome-extensions.html)
    