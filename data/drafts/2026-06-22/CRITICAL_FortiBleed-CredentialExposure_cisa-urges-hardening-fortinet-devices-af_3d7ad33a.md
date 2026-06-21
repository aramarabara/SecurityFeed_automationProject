
# CISA Urges Hardening Fortinet Devices After Reports of Credential Exposure

> [Executive Overview] 최근 CISA는 전 세계적으로 74,000대 이상의 Fortinet 장비에서 관리자 및 SSL VPN 자격 증명이 대규모로 유출된 이른바 'FortiBleed' 위협에 대해 긴급 경보를 발령했습니다. 이번 사건은 정부 및 민간 부문의 네트워크 경계 보안을 담당하는 방화벽과 VPN 게이트웨이를 직접적으로 겨냥하고 있어, 전 세계적인 사이버 보안 인프라에 심각한 위협이 되고 있습니다. [Threat Analysis] FortiBleed 캠페인은 인포스틸러(Infostealer) 악성코드 등을 통해 탈취된 유효한 자격 증명을 재사용하여 인터넷에 노출된 FortiGate 장비에 무단 접속하는 방식을 취합니다. 기술적으로는 FortiOS의 구형 버전에서 사용되던 취약한 암호 해싱 알고리즘이 공격자의 오프라인 크래킹을 용이하게 만들었으며, 공격자들은 이를 통해 획득한 권한으로 기업 내부망에 침투합니다. [Impact Assessment] 약 194개국에 걸쳐 73,932대 이상의 장비가 영향을 받은 것으로 파악되며, 이는 전체 인터넷 노출 Fortinet 장비군의 상당 부분에 해당합니다. 공격자가 VPN 게이트웨이 권한을 장악할 경우, 내부망 이동(Lateral Movement)을 통한 데이터 탈취, 랜섬웨어 유포 및 시스템 설정 변경 등 조직 전체에 파괴적인 결과를 초래할 수 있습니다. [Recommendations] 모든 조직은 즉각적으로 활성화된 SSL VPN 및 관리 세션을 종료하고 비밀번호를 재설정해야 합니다. 특히 FortiOS v7.2.11 이상에서 지원하는 PBKDF2 해시 알고리즘을 강제 적용하여 자격 증명 저장 보안을 강화해야 하며, 피싱 저항성이 있는 다요소 인증(MFA) 도입과 관리 인터페이스의 외부 인터넷 노출 차단이 필수적으로 요구됩니다.

**Severity**: CRITICAL (9.2/10)
**Tags**: FortiBleed, Credential Exposure, SSL VPN, Identity Security, FortiOS

## Analysis
[Executive Overview] 최근 CISA는 전 세계적으로 74,000대 이상의 Fortinet 장비에서 관리자 및 SSL VPN 자격 증명이 대규모로 유출된 이른바 'FortiBleed' 위협에 대해 긴급 경보를 발령했습니다. 이번 사건은 정부 및 민간 부문의 네트워크 경계 보안을 담당하는 방화벽과 VPN 게이트웨이를 직접적으로 겨냥하고 있어, 전 세계적인 사이버 보안 인프라에 심각한 위협이 되고 있습니다. [Threat Analysis] FortiBleed 캠페인은 인포스틸러(Infostealer) 악성코드 등을 통해 탈취된 유효한 자격 증명을 재사용하여 인터넷에 노출된 FortiGate 장비에 무단 접속하는 방식을 취합니다. 기술적으로는 FortiOS의 구형 버전에서 사용되던 취약한 암호 해싱 알고리즘이 공격자의 오프라인 크래킹을 용이하게 만들었으며, 공격자들은 이를 통해 획득한 권한으로 기업 내부망에 침투합니다. [Impact Assessment] 약 194개국에 걸쳐 73,932대 이상의 장비가 영향을 받은 것으로 파악되며, 이는 전체 인터넷 노출 Fortinet 장비군의 상당 부분에 해당합니다. 공격자가 VPN 게이트웨이 권한을 장악할 경우, 내부망 이동(Lateral Movement)을 통한 데이터 탈취, 랜섬웨어 유포 및 시스템 설정 변경 등 조직 전체에 파괴적인 결과를 초래할 수 있습니다. [Recommendations] 모든 조직은 즉각적으로 활성화된 SSL VPN 및 관리 세션을 종료하고 비밀번호를 재설정해야 합니다. 특히 FortiOS v7.2.11 이상에서 지원하는 PBKDF2 해시 알고리즘을 강제 적용하여 자격 증명 저장 보안을 강화해야 하며, 피싱 저항성이 있는 다요소 인증(MFA) 도입과 관리 인터페이스의 외부 인터넷 노출 차단이 필수적으로 요구됩니다.


## References
1. CISA, 'Implementing Phishing-Resistant MFA', CISA Technical Fact Sheet, 2022
2. MITRE ATT&CK: T1078 (Valid Accounts)
3. Fortinet, 'Enforcing PBKDF2 as hash function for administrator accounts in FortiOS v7.2.11 and later', Fortinet Technical Tip, 2024
4. Y. Shoshitaishvili et al., 'Rise of the Machines: Attacking and Defending the VPN Gateways', USENIX Security Symposium, 2020
5. Hudson Rock, 'FortiBleed: 75,000 Fortinet Firewalls Compromised', Industry Intelligence Report, 2024
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/alerts/2026/06/18/cisa-urges-hardening-fortinet-devices-after-reports-credential-exposure)
    