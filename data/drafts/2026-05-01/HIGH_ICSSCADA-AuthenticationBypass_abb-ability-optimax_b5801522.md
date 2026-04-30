
# ABB Ability OPTIMAX

> [Executive Overview] 글로벌 산업 자동화 기업 ABB의 에너지 관리 솔루션인 Ability OPTIMAX에서 인증 우회 취약점(CVE-2025-14510)이 발견되었습니다. 이 솔루션은 전 세계 에너지 및 수처리 등 국가 핵심 인프라 분야에서 널리 사용되고 있어, 해당 취약점 악용 시 공공 서비스의 연속성과 보안에 심각한 위협이 될 수 있습니다. [Threat Analysis] 본 취약점은 Azure Active Directory Single Sign-On(SSO) 통합 시 인증 알고리즘의 구현 오류(CWE-303)로 인해 발생합니다. 공격 복잡도는 높음(AC:H)으로 분류되어 무차별적인 자동 공격은 어려울 수 있으나, 정교한 공격자는 이를 통해 유효한 사용자 자격 증명 없이도 시스템 인증을 우회하여 내부 권한을 획득할 수 있습니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 OPTIMAX 시스템 내의 중요 데이터에 접근하거나 제어 설정을 변경할 수 있는 완전한 권한을 가질 수 있습니다. 이는 에너지 공급망의 무결성 훼손, 정보 유출, 그리고 최악의 경우 국가 핵심 인프라의 가동 중단으로 이어질 수 있는 고위험군 위협입니다. [Recommendations] 해당 제품을 사용하는 조직은 즉시 ABB에서 제공하는 보안 패치(버전 6.3.1-251120 이상 등)를 적용해야 합니다. 또한, 제어 시스템을 공용 인터넷에서 분리하고 방화벽을 통한 네트워크 세분화(Segmentation)를 수행하며, 불가피한 원격 접속 시에는 강력한 VPN과 다중 인증(MFA)을 적용하는 심층 방어 전략을 수립해야 합니다.

**Severity**: HIGH (8.1/10)
**Tags**: ICS/SCADA, Authentication Bypass, Azure AD SSO, Critical Infrastructure, CVE-2025-14510

## Analysis
[Executive Overview] 글로벌 산업 자동화 기업 ABB의 에너지 관리 솔루션인 Ability OPTIMAX에서 인증 우회 취약점(CVE-2025-14510)이 발견되었습니다. 이 솔루션은 전 세계 에너지 및 수처리 등 국가 핵심 인프라 분야에서 널리 사용되고 있어, 해당 취약점 악용 시 공공 서비스의 연속성과 보안에 심각한 위협이 될 수 있습니다. [Threat Analysis] 본 취약점은 Azure Active Directory Single Sign-On(SSO) 통합 시 인증 알고리즘의 구현 오류(CWE-303)로 인해 발생합니다. 공격 복잡도는 높음(AC:H)으로 분류되어 무차별적인 자동 공격은 어려울 수 있으나, 정교한 공격자는 이를 통해 유효한 사용자 자격 증명 없이도 시스템 인증을 우회하여 내부 권한을 획득할 수 있습니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 OPTIMAX 시스템 내의 중요 데이터에 접근하거나 제어 설정을 변경할 수 있는 완전한 권한을 가질 수 있습니다. 이는 에너지 공급망의 무결성 훼손, 정보 유출, 그리고 최악의 경우 국가 핵심 인프라의 가동 중단으로 이어질 수 있는 고위험군 위협입니다. [Recommendations] 해당 제품을 사용하는 조직은 즉시 ABB에서 제공하는 보안 패치(버전 6.3.1-251120 이상 등)를 적용해야 합니다. 또한, 제어 시스템을 공용 인터넷에서 분리하고 방화벽을 통한 네트워크 세분화(Segmentation)를 수행하며, 불가피한 원격 접속 시에는 강력한 VPN과 다중 인증(MFA)을 적용하는 심층 방어 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-120-04: ABB Ability OPTIMAX, 2026
2. CVE-2025-14510
3. MITRE ATT&CK: T1550.001 (Use Alternate Authentication Material: Application Access Token)
4. Stouffer et al., NIST Special Publication 800-82 Revision 2: Guide to Industrial Control Systems (ICS) Security, 2015
5. ABB PSIRT, Cybersecurity Advisory 9AKK108472A1331, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-120-04)
    