
# CISA Urges Hardening Fortinet Devices After Reports of Credential Exposure

> [Executive Overview] CISA는 최근 'FortiBleed'라 명명된 대규모 Fortinet 장비 계정 정보 유출 사건에 대해 긴급 보안 권고를 발표했습니다. 약 74,000대의 FortiGate 방화벽 및 SSL VPN 게이트웨이가 영향을 받았으며, 이는 정부 및 민간 부문 모두의 네트워크 경계 보안을 심각하게 위협하고 있습니다. [Threat Analysis] 이번 위협은 공격자가 인터넷에 노출된 장비의 유출된 자격 증명을 악용하여 무단 접근하는 방식을 취합니다. 특히 PBKDF2와 같은 강력한 해시 함수가 적용되지 않은 구형 시스템이나 취약한 암호 정책을 가진 장비가 주요 타겟입니다. 공격자는 획득한 관리자 권한을 통해 네트워크 구성을 변경하거나 내부망 침투를 시도합니다. [Impact Assessment] 전 세계 194개국에 걸쳐 광범위한 피해가 보고되었으며, 유출된 계정 정보가 후속 공격인 랜섬웨어 유포나 데이터 탈취의 교두보로 활용될 위험이 매우 큽니다. 특히 VPN 서비스의 침해는 기업 전체 인프라에 대한 신뢰를 무너뜨리는 결과를 초래할 수 있습니다. [Recommendations] 모든 관리자 및 VPN 세션을 즉시 종료하고 비밀번호를 초기화해야 하며, Fortinet 권고에 따라 PBKDF2 해시 알고리즘을 강제 적용해야 합니다. 또한 피싱 내성 MFA를 필수 도입하고 관리 인터페이스의 인터넷 노출을 차단하여 공격 표면을 최소화하는 조치가 시급합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: FortiBleed, Credential Leak, VPN Security, MFA Hardening, CISA Alert

## Analysis
[Executive Overview] CISA는 최근 'FortiBleed'라 명명된 대규모 Fortinet 장비 계정 정보 유출 사건에 대해 긴급 보안 권고를 발표했습니다. 약 74,000대의 FortiGate 방화벽 및 SSL VPN 게이트웨이가 영향을 받았으며, 이는 정부 및 민간 부문 모두의 네트워크 경계 보안을 심각하게 위협하고 있습니다. [Threat Analysis] 이번 위협은 공격자가 인터넷에 노출된 장비의 유출된 자격 증명을 악용하여 무단 접근하는 방식을 취합니다. 특히 PBKDF2와 같은 강력한 해시 함수가 적용되지 않은 구형 시스템이나 취약한 암호 정책을 가진 장비가 주요 타겟입니다. 공격자는 획득한 관리자 권한을 통해 네트워크 구성을 변경하거나 내부망 침투를 시도합니다. [Impact Assessment] 전 세계 194개국에 걸쳐 광범위한 피해가 보고되었으며, 유출된 계정 정보가 후속 공격인 랜섬웨어 유포나 데이터 탈취의 교두보로 활용될 위험이 매우 큽니다. 특히 VPN 서비스의 침해는 기업 전체 인프라에 대한 신뢰를 무너뜨리는 결과를 초래할 수 있습니다. [Recommendations] 모든 관리자 및 VPN 세션을 즉시 종료하고 비밀번호를 초기화해야 하며, Fortinet 권고에 따라 PBKDF2 해시 알고리즘을 강제 적용해야 합니다. 또한 피싱 내성 MFA를 필수 도입하고 관리 인터페이스의 인터넷 노출을 차단하여 공격 표면을 최소화하는 조치가 시급합니다.


## References
1. CISA, Alert: CISA Urges Hardening Fortinet Devices After Reports of Credential Exposure, 2026
2. MITRE ATT&CK: T1133 (External Remote Services), 2024
3. MITRE ATT&CK: T1078 (Valid Accounts), 2024
4. Fortinet PSIRT, Analysis of Reported Credential Compromise of FortiGate Devices, 2024
5. NIST SP 800-63B, Digital Identity Guidelines, 2020
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/alerts/2026/06/18/cisa-urges-hardening-fortinet-devices-after-reports-credential-exposure)
    