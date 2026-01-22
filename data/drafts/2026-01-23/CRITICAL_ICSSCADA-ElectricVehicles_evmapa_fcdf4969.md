
# EVMAPA

> [Executive Overview] 본 보고서는 체코 및 슬로바키아 등 유럽 교통 인프라의 핵심인 EVMAPA 전기차 충전 관리 시스템에서 발견된 3건의 주요 보안 취약점(CVE-2025-54816, CVE-2025-53968, CVE-2025-55705)에 대한 분석을 담고 있습니다. 해당 취약점들은 인증 메커니즘 부재 및 불충분한 세션 관리로 인해 발생하며, 공격자가 원격에서 충전 스테이션의 제어권을 탈취하거나 서비스를 중단시킬 수 있는 심각한 위협을 내포하고 있습니다. [Threat Analysis] 가장 치명적인 결함은 WebSocket 엔드포인트에서 인증을 강제하지 않는 CVE-2025-54816(CVSS 9.4)입니다. 공격자는 이를 통해 권한 없이 시스템에 연결하여 민감한 데이터에 접근하거나 원격 명령을 실행할 수 있습니다. 또한, Open Charge Point Protocol(OCPP) 연결 시 인증 시도 횟수를 제한하지 않아 무차별 대입 공격(Brute-force) 및 서비스 거부(DoS)가 가능하며, 동일한 충전 스테이션 ID를 이용한 중복 세션 연결이 허용되어 세션 조작의 위험이 존재합니다. [Impact Assessment] 이러한 취약점이 악용될 경우, 충전 스테이션의 상태 정보를 위조하거나 충전 세션을 임의로 조작하여 경제적 손실을 야기할 수 있습니다. 특히 교통 시스템과 같은 임계 인프라(Critical Infrastructure) 환경에서 서비스 중단은 공공 안전과 직결되며, 공격자가 원격 명령 실행을 통해 시스템 전체를 장악할 경우 대규모 인프라 마비로 이어질 가능성이 큽니다. [Recommendations] 대응책으로 사용자는 모든 제어 시스템을 방화벽 뒤에 배치하고 인터넷 노출을 최소화해야 합니다. EVMAPA 측은 WebSocket Secure(WSS) 사용과 전용 VPN 연결을 권고하며, 향후 OCPP 2.x 이상 버전에서 BASIC 인증 제어를 구현할 계획입니다. 자산 관리자는 즉시 펌웨어를 최신 상태로 유지하고, 다중 인증 시도 제한 및 고유 세션 관리를 위한 보안 설정을 강화해야 합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: ICS/SCADA, Electric Vehicles, Authentication Bypass, CVE-2025-54816, CISA Advisory

## Analysis
[Executive Overview] 본 보고서는 체코 및 슬로바키아 등 유럽 교통 인프라의 핵심인 EVMAPA 전기차 충전 관리 시스템에서 발견된 3건의 주요 보안 취약점(CVE-2025-54816, CVE-2025-53968, CVE-2025-55705)에 대한 분석을 담고 있습니다. 해당 취약점들은 인증 메커니즘 부재 및 불충분한 세션 관리로 인해 발생하며, 공격자가 원격에서 충전 스테이션의 제어권을 탈취하거나 서비스를 중단시킬 수 있는 심각한 위협을 내포하고 있습니다. [Threat Analysis] 가장 치명적인 결함은 WebSocket 엔드포인트에서 인증을 강제하지 않는 CVE-2025-54816(CVSS 9.4)입니다. 공격자는 이를 통해 권한 없이 시스템에 연결하여 민감한 데이터에 접근하거나 원격 명령을 실행할 수 있습니다. 또한, Open Charge Point Protocol(OCPP) 연결 시 인증 시도 횟수를 제한하지 않아 무차별 대입 공격(Brute-force) 및 서비스 거부(DoS)가 가능하며, 동일한 충전 스테이션 ID를 이용한 중복 세션 연결이 허용되어 세션 조작의 위험이 존재합니다. [Impact Assessment] 이러한 취약점이 악용될 경우, 충전 스테이션의 상태 정보를 위조하거나 충전 세션을 임의로 조작하여 경제적 손실을 야기할 수 있습니다. 특히 교통 시스템과 같은 임계 인프라(Critical Infrastructure) 환경에서 서비스 중단은 공공 안전과 직결되며, 공격자가 원격 명령 실행을 통해 시스템 전체를 장악할 경우 대규모 인프라 마비로 이어질 가능성이 큽니다. [Recommendations] 대응책으로 사용자는 모든 제어 시스템을 방화벽 뒤에 배치하고 인터넷 노출을 최소화해야 합니다. EVMAPA 측은 WebSocket Secure(WSS) 사용과 전용 VPN 연결을 권고하며, 향후 OCPP 2.x 이상 버전에서 BASIC 인증 제어를 구현할 계획입니다. 자산 관리자는 즉시 펌웨어를 최신 상태로 유지하고, 다중 인증 시도 제한 및 고유 세션 관리를 위한 보안 설정을 강화해야 합니다.


## References
1. CISA, ICSA-26-022-08: EVMAPA, 2026
2. CVE-2025-54816
3. CVE-2025-53968
4. MITRE ATT&CK: T0812 - Default Credentials
5. NIST, Special Publication 800-82 Revision 3: Guide to Industrial Control Systems (ICS) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-022-08)
    