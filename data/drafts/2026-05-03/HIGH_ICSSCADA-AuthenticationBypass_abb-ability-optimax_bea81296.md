
# ABB Ability OPTIMAX

> [Executive Overview] ABB의 산업용 에너지 최적화 소프트웨어인 Ability OPTIMAX에서 Azure Active Directory(Azure AD) Single Sign-On(SSO) 통합 시 발생하는 심각한 인증 우회 취약점(CVE-2025-14510)이 발견되었습니다. 이 취약점은 전 세계 에너지 및 상하수도 시스템과 같은 핵심 인프라 분야의 제어 시스템 보안에 상당한 위협을 초래할 수 있습니다. [Threat Analysis] 해당 위협은 CWE-303(인증 알고리즘의 잘못된 구현)에 기반하며, 공격자가 특수하게 조작된 요청을 통해 유효한 자격 증명 없이 시스템에 접근할 수 있게 합니다. CVSS 3.1 기준 8.1의 높은 점수를 기록하고 있으나, 공격 복잡도가 'High'로 설정된 것은 특정 SSO 구성 환경에서의 정밀한 타겟팅이 필요함을 시사합니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 OPTIMAX 시스템 내에서 관리 권한을 획득하여 운영 데이터를 조작하거나 중요 설비의 가동을 중단시키는 등 물리적 피해를 야기할 수 있습니다. 특히 6.1~6.4 버전의 광범위한 배포 범위로 인해 전 세계 에너지망의 안정성에 부정적인 영향을 미칠 가능성이 큽니다. [Recommendations] 관리자는 ABB에서 배포한 최신 보안 패치(6.3.1-251120 또는 6.4.1-251120 이상)를 즉시 적용해야 합니다. 또한, 운영 기술(OT) 네트워크를 비즈니스 네트워크와 물리적으로 격리하고, 외부 인터넷으로부터의 직접적인 접근을 차단하며, 필수적인 원격 접속 시 MFA가 적용된 보안 VPN을 사용하는 심층 방어 전략을 수립해야 합니다.

**Severity**: HIGH (8.1/10)
**Tags**: ICS/SCADA, Authentication Bypass, CVE-2025-14510, Azure AD SSO, Critical Infrastructure

## Analysis
[Executive Overview] ABB의 산업용 에너지 최적화 소프트웨어인 Ability OPTIMAX에서 Azure Active Directory(Azure AD) Single Sign-On(SSO) 통합 시 발생하는 심각한 인증 우회 취약점(CVE-2025-14510)이 발견되었습니다. 이 취약점은 전 세계 에너지 및 상하수도 시스템과 같은 핵심 인프라 분야의 제어 시스템 보안에 상당한 위협을 초래할 수 있습니다. [Threat Analysis] 해당 위협은 CWE-303(인증 알고리즘의 잘못된 구현)에 기반하며, 공격자가 특수하게 조작된 요청을 통해 유효한 자격 증명 없이 시스템에 접근할 수 있게 합니다. CVSS 3.1 기준 8.1의 높은 점수를 기록하고 있으나, 공격 복잡도가 'High'로 설정된 것은 특정 SSO 구성 환경에서의 정밀한 타겟팅이 필요함을 시사합니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 OPTIMAX 시스템 내에서 관리 권한을 획득하여 운영 데이터를 조작하거나 중요 설비의 가동을 중단시키는 등 물리적 피해를 야기할 수 있습니다. 특히 6.1~6.4 버전의 광범위한 배포 범위로 인해 전 세계 에너지망의 안정성에 부정적인 영향을 미칠 가능성이 큽니다. [Recommendations] 관리자는 ABB에서 배포한 최신 보안 패치(6.3.1-251120 또는 6.4.1-251120 이상)를 즉시 적용해야 합니다. 또한, 운영 기술(OT) 네트워크를 비즈니스 네트워크와 물리적으로 격리하고, 외부 인터넷으로부터의 직접적인 접근을 차단하며, 필수적인 원격 접속 시 MFA가 적용된 보안 VPN을 사용하는 심층 방어 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-120-04: ABB Ability OPTIMAX, 2026
2. CVE-2025-14510
3. MITRE ATT&CK: T1556 (Modify Authentication Process)
4. ABB PSIRT, Cybersecurity Advisory 9AKK108472A1331, 2026
5. Knapp et al., Industrial Network Security: Securing Critical Infrastructure Networks, Syngress, 2014
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-120-04)
    