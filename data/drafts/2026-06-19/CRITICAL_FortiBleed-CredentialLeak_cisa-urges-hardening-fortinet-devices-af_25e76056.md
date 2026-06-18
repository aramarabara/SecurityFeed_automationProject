
# CISA Urges Hardening Fortinet Devices After Reports of Credential Exposure

> [Executive Overview] 미 사이버보안 및 인프라 보안국(CISA)은 'FortiBleed'로 명명된 대규모 Fortinet 장비 계정 정보 유출 사건에 대해 긴급 경고를 발령했습니다. 전 세계적으로 약 74,000대 이상의 FortiGate 방화벽 및 SSL VPN 게이트웨이의 관리자 및 사용자 계정 정보가 노출되었으며, 이는 정부 및 민간 부문의 네트워크 경계 보안을 심각하게 위협하는 사안입니다. [Threat Analysis] 이번 위협은 인터넷에 노출된 Fortinet 장비를 대상으로 기유출된 유효 자격 증명을 사용하여 무단 접속을 시도하는 공격 형태를 띱니다. 특히 과거의 취약점이나 인포스틸러(Info-stealer)를 통해 수집된 자격 증명이 대규모로 재사용되고 있으며, 기술적으로는 취약한 레거시 해시 알고리즘을 사용하는 관리자 계정이 무차별 대입 및 크래킹 공격의 주된 표적이 되고 있습니다. [Impact Assessment] 전 세계 194개국에 걸친 광범위한 인프라가 영향권에 있으며, 방화벽과 VPN의 침해는 조직 내부망으로의 측면 이동(Lateral Movement), 데이터 탈취, 그리고 최종적으로는 랜섬웨어 확산의 교두보가 됩니다. 인터넷에 직접 연결된 FortiGate 장비의 상당수가 잠재적 위험에 노출되어 있어 국가적 수준의 공급망 보안 위기로 간주됩니다. [Recommendations] 모든 관리자는 즉시 활성 SSL VPN 및 관리 세션을 강제 종료하고 비밀번호를 재설정해야 합니다. FortiOS 7.2.11 이상에서 권장하는 PBKDF2 해시 알고리즘을 적용하여 자격 증명 저장 보안을 강화하고, 피싱 방어형 다요소 인증(MFA) 도입을 의무화해야 합니다. 또한, 관리 인터페이스를 공인 인터넷에서 완전히 격리하고 신뢰할 수 있는 내부 네트워크(Internal Trusted Network)에서만 접근 가능하도록 제한해야 합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: FortiBleed, Credential Leak, SSL VPN, CISA Advisory, Network Security

## Analysis
[Executive Overview] 미 사이버보안 및 인프라 보안국(CISA)은 'FortiBleed'로 명명된 대규모 Fortinet 장비 계정 정보 유출 사건에 대해 긴급 경고를 발령했습니다. 전 세계적으로 약 74,000대 이상의 FortiGate 방화벽 및 SSL VPN 게이트웨이의 관리자 및 사용자 계정 정보가 노출되었으며, 이는 정부 및 민간 부문의 네트워크 경계 보안을 심각하게 위협하는 사안입니다. [Threat Analysis] 이번 위협은 인터넷에 노출된 Fortinet 장비를 대상으로 기유출된 유효 자격 증명을 사용하여 무단 접속을 시도하는 공격 형태를 띱니다. 특히 과거의 취약점이나 인포스틸러(Info-stealer)를 통해 수집된 자격 증명이 대규모로 재사용되고 있으며, 기술적으로는 취약한 레거시 해시 알고리즘을 사용하는 관리자 계정이 무차별 대입 및 크래킹 공격의 주된 표적이 되고 있습니다. [Impact Assessment] 전 세계 194개국에 걸친 광범위한 인프라가 영향권에 있으며, 방화벽과 VPN의 침해는 조직 내부망으로의 측면 이동(Lateral Movement), 데이터 탈취, 그리고 최종적으로는 랜섬웨어 확산의 교두보가 됩니다. 인터넷에 직접 연결된 FortiGate 장비의 상당수가 잠재적 위험에 노출되어 있어 국가적 수준의 공급망 보안 위기로 간주됩니다. [Recommendations] 모든 관리자는 즉시 활성 SSL VPN 및 관리 세션을 강제 종료하고 비밀번호를 재설정해야 합니다. FortiOS 7.2.11 이상에서 권장하는 PBKDF2 해시 알고리즘을 적용하여 자격 증명 저장 보안을 강화하고, 피싱 방어형 다요소 인증(MFA) 도입을 의무화해야 합니다. 또한, 관리 인터페이스를 공인 인터넷에서 완전히 격리하고 신뢰할 수 있는 내부 네트워크(Internal Trusted Network)에서만 접근 가능하도록 제한해야 합니다.


## References
1. CISA Alert: Hardening Fortinet Devices After Reports of Credential Exposure, CISA, 2024
2. MITRE ATT&CK: T1078 (Valid Accounts)
3. MITRE ATT&CK: T1133 (External Remote Services)
4. Fortinet Technical Tip: Enforcing PBKDF2 as hash function for administrator accounts in FortiOS v7.2.11 and later, Fortinet, 2024
5. CVE-2023-27997: FortiOS heap-based buffer overflow in SSL-VPN, Fortinet PSIRT, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/alerts/2026/06/18/cisa-urges-hardening-fortinet-devices-after-reports-credential-exposure)
    