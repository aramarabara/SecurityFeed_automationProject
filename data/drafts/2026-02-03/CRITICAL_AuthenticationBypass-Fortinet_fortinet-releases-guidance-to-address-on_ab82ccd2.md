
# Fortinet Releases Guidance to Address Ongoing Exploitation of Authentication Bypass Vulnerability CVE-2026-24858

> ### Executive Overview
최근 Fortinet 제품군에서 발견된 CVE-2026-24858 취약점은 FortiCloud SSO(Single Sign-On) 인증 메커니즘을 악용하여 인증을 우회할 수 있는 치명적인 보안 결함입니다. 이 취약점은 이전의 SSO 관련 취약점인 CVE-2025-59718 및 CVE-2025-59719에 대한 패치가 적용된 시스템에서도 여전히 유효하다는 점에서 그 심각성이 매우 높습니다. CISA는 해당 취약점을 '알려진 악용된 취약점(KEV)' 목록에 추가하며 전 세계적 긴급 패치를 권고하고 있습니다.

### Threat Analysis
기술적으로 본 취약점은 CWE-288(대체 경로 또는 채널을 이용한 인증 우회)로 분류됩니다. 공격자가 유효한 FortiCloud 계정과 등록된 장치를 보유한 경우, SSO가 활성화된 다른 사용자의 FortiOS, FortiManager, FortiWeb 등의 장치에 무단으로 로그인할 수 있습니다. 특히 이전에 발견된 SAML 메시지 조작 방식(CWE-347)과는 또 다른 인증 로직의 결함을 이용하기 때문에, 기존 보안 조치를 우회하여 침투할 수 있는 정교한 공격 벡터를 제공합니다.

### Impact Assessment
실제 침해 사례에서 공격자들은 FortiGate 장치의 방화벽 설정을 무단으로 변경하고, 새로운 관리자 계정을 생성하며, VPN 구성을 수정하여 지속적인 접근 권한을 확보하는 활동을 보였습니다. 이는 네트워크 게이트웨이 장비의 완전한 장악으로 이어질 수 있으며, 기업 내부망으로의 측면 이동(Lateral Movement) 및 민감 데이터 유출을 가능케 하는 심각한 결과를 초래합니다. 영향을 받는 제품에는 FortiOS, FortiManager, FortiAnalyzer 등 주요 보안 인프라가 대거 포함되어 있습니다.

### Recommendations
조직은 Fortinet에서 배포한 최신 보안 업데이트를 즉시 적용해야 합니다. 패치 적용 전까지는 임시 조치로 FortiCloud SSO 기능을 비활성화하는 것을 검토해야 하며, 감사 로그를 정밀 분석하여 승인되지 않은 방화벽 규칙 변경, 계정 생성, VPN 설정 수정 여부를 반드시 확인해야 합니다. 또한 모든 인터넷 노출 장치에 대해 다중 인증(MFA)을 강화하고 침해 지표(IoC)를 모니터링할 것을 강력히 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: Authentication Bypass, Fortinet, CISA KEV, Single Sign-On, Network Security

## Analysis
### Executive Overview
최근 Fortinet 제품군에서 발견된 CVE-2026-24858 취약점은 FortiCloud SSO(Single Sign-On) 인증 메커니즘을 악용하여 인증을 우회할 수 있는 치명적인 보안 결함입니다. 이 취약점은 이전의 SSO 관련 취약점인 CVE-2025-59718 및 CVE-2025-59719에 대한 패치가 적용된 시스템에서도 여전히 유효하다는 점에서 그 심각성이 매우 높습니다. CISA는 해당 취약점을 '알려진 악용된 취약점(KEV)' 목록에 추가하며 전 세계적 긴급 패치를 권고하고 있습니다.

### Threat Analysis
기술적으로 본 취약점은 CWE-288(대체 경로 또는 채널을 이용한 인증 우회)로 분류됩니다. 공격자가 유효한 FortiCloud 계정과 등록된 장치를 보유한 경우, SSO가 활성화된 다른 사용자의 FortiOS, FortiManager, FortiWeb 등의 장치에 무단으로 로그인할 수 있습니다. 특히 이전에 발견된 SAML 메시지 조작 방식(CWE-347)과는 또 다른 인증 로직의 결함을 이용하기 때문에, 기존 보안 조치를 우회하여 침투할 수 있는 정교한 공격 벡터를 제공합니다.

### Impact Assessment
실제 침해 사례에서 공격자들은 FortiGate 장치의 방화벽 설정을 무단으로 변경하고, 새로운 관리자 계정을 생성하며, VPN 구성을 수정하여 지속적인 접근 권한을 확보하는 활동을 보였습니다. 이는 네트워크 게이트웨이 장비의 완전한 장악으로 이어질 수 있으며, 기업 내부망으로의 측면 이동(Lateral Movement) 및 민감 데이터 유출을 가능케 하는 심각한 결과를 초래합니다. 영향을 받는 제품에는 FortiOS, FortiManager, FortiAnalyzer 등 주요 보안 인프라가 대거 포함되어 있습니다.

### Recommendations
조직은 Fortinet에서 배포한 최신 보안 업데이트를 즉시 적용해야 합니다. 패치 적용 전까지는 임시 조치로 FortiCloud SSO 기능을 비활성화하는 것을 검토해야 하며, 감사 로그를 정밀 분석하여 승인되지 않은 방화벽 규칙 변경, 계정 생성, VPN 설정 수정 여부를 반드시 확인해야 합니다. 또한 모든 인터넷 노출 장치에 대해 다중 인증(MFA)을 강화하고 침해 지표(IoC)를 모니터링할 것을 강력히 권고합니다.


## References
1. CVE-2026-24858
2. Fortinet PSIRT, Administrative FortiCloud SSO authentication bypass (FG-IR-26-060), 2026
3. CISA, Known Exploited Vulnerabilities Catalog, 2026
4. MITRE ATT&CK: T1556 (Modify Authentication Process)
5. Arctic Wolf Labs, Malicious Configuration Changes on Fortinet FortiGate Devices via SSO Accounts, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/alerts/2026/01/28/fortinet-releases-guidance-address-ongoing-exploitation-authentication-bypass-vulnerability-cve-2026)
    