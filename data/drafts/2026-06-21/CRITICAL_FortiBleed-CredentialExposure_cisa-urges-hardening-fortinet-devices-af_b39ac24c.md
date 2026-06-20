
# CISA Urges Hardening Fortinet Devices After Reports of Credential Exposure

> [Executive Overview] 최근 미국 사이버보안 및 인프라 보안국(CISA)은 전 세계 약 74,000대의 Fortinet 장비 계정 정보가 유출된 'FortiBleed' 사태에 대해 긴급 보안 경고를 발령했습니다. 정부 및 민간 부문의 방화벽과 VPN 게이트웨이가 주요 공격 대상이 되었으며, 이는 조직의 경계 보안을 직접적으로 무너뜨리는 심각한 위협으로 간주됩니다. [Threat Analysis] 이번 캠페인은 고도화된 취약점 익스플로잇보다는 대규모로 유출된 유효 자격 증명(Credential)을 직접 활용하는 '자격 증명 도용' 공격이 특징입니다. 특히 FortiOS의 구형 해시 알고리즘을 사용하여 저장된 관리자 계정 정보가 주요 표적이 되었으며, 공격자들은 인터넷에 노출된 SSL VPN 및 관리 인터페이스를 통해 침투한 뒤 내부망 이동(Lateral Movement) 및 추가 권한 상승을 시도하고 있습니다. [Impact Assessment] 전 세계 194개국에 걸친 광범위한 피해가 보고되었으며, 유출된 계정 정보를 통해 데이터 탈취, 랜섬웨어 유포, 또는 장기적인 지능형 지속 위협(APT)의 교두보가 마련될 수 있습니다. 보안 장비 자체가 공격의 통로가 된다는 점에서 조직 전체의 가시성과 제어권이 심각하게 훼손될 위험이 큽니다. [Recommendations] 모든 조직은 즉시 활성 SSL VPN 및 관리 세션을 강제 종료하고 비밀번호를 전면 재설정해야 합니다. 특히 FortiOS 7.2.11 이상 버전에서 지원하는 PBKDF2 해싱 알고리즘을 강제 적용하여 자격 증명 저장 보안을 강화하고, FIDO2 기반의 피싱 저항성 다요소 인증(MFA)을 필수적으로 도입해야 합니다. 또한 관리 인터페이스를 공용 인터넷에서 완전히 격리하고 신뢰할 수 있는 IP로만 접근을 제한하여 공격 표면을 최소화할 것을 권고합니다.

**Severity**: CRITICAL (8.8/10)
**Tags**: FortiBleed, Credential Exposure, SSL VPN, PBKDF2, Attack Surface Management

## Analysis
[Executive Overview] 최근 미국 사이버보안 및 인프라 보안국(CISA)은 전 세계 약 74,000대의 Fortinet 장비 계정 정보가 유출된 'FortiBleed' 사태에 대해 긴급 보안 경고를 발령했습니다. 정부 및 민간 부문의 방화벽과 VPN 게이트웨이가 주요 공격 대상이 되었으며, 이는 조직의 경계 보안을 직접적으로 무너뜨리는 심각한 위협으로 간주됩니다. [Threat Analysis] 이번 캠페인은 고도화된 취약점 익스플로잇보다는 대규모로 유출된 유효 자격 증명(Credential)을 직접 활용하는 '자격 증명 도용' 공격이 특징입니다. 특히 FortiOS의 구형 해시 알고리즘을 사용하여 저장된 관리자 계정 정보가 주요 표적이 되었으며, 공격자들은 인터넷에 노출된 SSL VPN 및 관리 인터페이스를 통해 침투한 뒤 내부망 이동(Lateral Movement) 및 추가 권한 상승을 시도하고 있습니다. [Impact Assessment] 전 세계 194개국에 걸친 광범위한 피해가 보고되었으며, 유출된 계정 정보를 통해 데이터 탈취, 랜섬웨어 유포, 또는 장기적인 지능형 지속 위협(APT)의 교두보가 마련될 수 있습니다. 보안 장비 자체가 공격의 통로가 된다는 점에서 조직 전체의 가시성과 제어권이 심각하게 훼손될 위험이 큽니다. [Recommendations] 모든 조직은 즉시 활성 SSL VPN 및 관리 세션을 강제 종료하고 비밀번호를 전면 재설정해야 합니다. 특히 FortiOS 7.2.11 이상 버전에서 지원하는 PBKDF2 해싱 알고리즘을 강제 적용하여 자격 증명 저장 보안을 강화하고, FIDO2 기반의 피싱 저항성 다요소 인증(MFA)을 필수적으로 도입해야 합니다. 또한 관리 인터페이스를 공용 인터넷에서 완전히 격리하고 신뢰할 수 있는 IP로만 접근을 제한하여 공격 표면을 최소화할 것을 권고합니다.


## References
1. CISA, CISA Urges Hardening Fortinet Devices After Reports of Credential Exposure, CISA Alert, 2024
2. MITRE ATT&CK: T1078 (Valid Accounts)
3. MITRE ATT&CK: T1133 (External Remote Services)
4. Fortinet, Technical Tip: Enforcing PBKDF2 as hash function for administrator accounts in FortiOS v7.2.11 and later, 2024
5. Hudson Rock, FortiBleed: 75,000 Fortinet Firewalls Compromised: Global Enterprises Exposed, 2024
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/alerts/2026/06/18/cisa-urges-hardening-fortinet-devices-after-reports-credential-exposure)
    