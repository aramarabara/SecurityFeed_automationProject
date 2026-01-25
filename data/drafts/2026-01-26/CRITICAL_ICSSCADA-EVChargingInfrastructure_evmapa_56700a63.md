
# EVMAPA

> [Executive Overview] 체코와 슬로바키아의 교통 시스템 핵심 인프라인 EVMAPA 전기차(EV) 충전 스테이션 솔루션에서 다수의 보안 취약점이 발견되었습니다. 특히 WebSocket 엔드포인트의 인증 결여를 포함한 이번 취약점들은 공격자가 물리적 충전 인프라에 대한 비인가 제어권을 획득하거나 서비스를 중단시킬 수 있는 심각한 위험을 내포하고 있습니다.

[Threat Analysis] 가장 치명적인 결함은 CVE-2025-54816으로, Open Charge Point Protocol(OCPP) 통신에 사용되는 WebSocket 엔드포인트에서 인증 메커니즘이 누락(CWE-306)되어 발생합니다. 이를 통해 공격자는 원격 명령 실행 및 권한 상승이 가능합니다. 또한, 인증 시도 횟수 제한 부재(CVE-2025-53968)로 인한 서비스 거부(DoS) 공격과 동일한 충전소 ID를 이용한 다중 세션 허용(CVE-2025-55705) 등 세션 관리 부실 문제가 복합적으로 존재합니다.

[Impact Assessment] 이러한 취약점이 악용될 경우, 공격자는 충전 스테이션의 상태를 위조하거나 무단으로 명령을 실행하여 서비스 저하 및 중단을 야기할 수 있습니다. 이는 단순히 데이터 유출을 넘어 전기차 충전이라는 국가 교통망의 가용성을 저해하고, 비인가 충전 세션을 통한 경제적 손실 및 충전소 운영 인프라의 신뢰성을 심각하게 훼손하는 결과를 초래할 수 있습니다.

[Recommendations] 관리자는 즉시 WebSocket Secure(WSS)를 적용하고 제조사가 제공하는 VPN 솔루션을 통해 충전소를 연결해야 합니다. 또한, CISA의 권고에 따라 제어 시스템을 공용 인터넷으로부터 격리하고 방화벽 뒤에 배치하는 '방어 위주 전략(Defense-in-Depth)'을 수립해야 합니다. 특히 세션 관리 관련 패치 적용 여부를 확인하고, 과도한 인증 시도를 차단하기 위한 속도 제한(Rate Limiting) 설정을 검토해야 합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: ICS/SCADA, EV Charging Infrastructure, OCPP Protocol, Critical Infrastructure, Remote Command Execution

## Analysis
[Executive Overview] 체코와 슬로바키아의 교통 시스템 핵심 인프라인 EVMAPA 전기차(EV) 충전 스테이션 솔루션에서 다수의 보안 취약점이 발견되었습니다. 특히 WebSocket 엔드포인트의 인증 결여를 포함한 이번 취약점들은 공격자가 물리적 충전 인프라에 대한 비인가 제어권을 획득하거나 서비스를 중단시킬 수 있는 심각한 위험을 내포하고 있습니다.

[Threat Analysis] 가장 치명적인 결함은 CVE-2025-54816으로, Open Charge Point Protocol(OCPP) 통신에 사용되는 WebSocket 엔드포인트에서 인증 메커니즘이 누락(CWE-306)되어 발생합니다. 이를 통해 공격자는 원격 명령 실행 및 권한 상승이 가능합니다. 또한, 인증 시도 횟수 제한 부재(CVE-2025-53968)로 인한 서비스 거부(DoS) 공격과 동일한 충전소 ID를 이용한 다중 세션 허용(CVE-2025-55705) 등 세션 관리 부실 문제가 복합적으로 존재합니다.

[Impact Assessment] 이러한 취약점이 악용될 경우, 공격자는 충전 스테이션의 상태를 위조하거나 무단으로 명령을 실행하여 서비스 저하 및 중단을 야기할 수 있습니다. 이는 단순히 데이터 유출을 넘어 전기차 충전이라는 국가 교통망의 가용성을 저해하고, 비인가 충전 세션을 통한 경제적 손실 및 충전소 운영 인프라의 신뢰성을 심각하게 훼손하는 결과를 초래할 수 있습니다.

[Recommendations] 관리자는 즉시 WebSocket Secure(WSS)를 적용하고 제조사가 제공하는 VPN 솔루션을 통해 충전소를 연결해야 합니다. 또한, CISA의 권고에 따라 제어 시스템을 공용 인터넷으로부터 격리하고 방화벽 뒤에 배치하는 '방어 위주 전략(Defense-in-Depth)'을 수립해야 합니다. 특히 세션 관리 관련 패치 적용 여부를 확인하고, 과도한 인증 시도를 차단하기 위한 속도 제한(Rate Limiting) 설정을 검토해야 합니다.


## References
1. CISA, ICSA-26-022-08: EVMAPA, 2026
2. CVE-2025-54816
3. CVE-2025-53968
4. MITRE ATT&CK: T0812 (Default Credentials in ICS)
5. Johnson et al., 'Security Vulnerabilities in Electric Vehicle Charging Stations and Mitigation Strategies', IEEE Access, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-022-08)
    