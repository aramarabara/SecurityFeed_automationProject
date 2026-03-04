
# Mobiliti e-mobi.hu

> [Executive Overview] 헝가리의 전기차(EV) 충전 서비스 제공업체인 Mobiliti의 e-mobi.hu 플랫폼에서 심각한 보안 취약점들이 발견되었습니다. 이 취약점들은 에너지 및 교통 시스템과 같은 핵심 인프라 부문에 걸쳐 광범위한 영향을 미칠 수 있으며, 공격자가 충전 스테이션에 대한 무단 관리 권한을 획득하거나 충전 서비스를 완전히 중단시킬 수 있는 심각한 위험을 내포하고 있습니다. [Threat Analysis] 주요 위협은 WebSocket 및 OCPP(Open Charge Point Protocol) 엔드포인트의 보안 구현 결함에서 발생합니다. 특히 CVE-2026-26051은 인증 메커니즘의 부재로 인해 공격자가 충전기로 위장하여 백엔드에 조작된 데이터를 전송할 수 있게 합니다. 또한, 속도 제한 미비(CVE-2026-20882) 및 예측 가능한 세션 식별자(CVE-2026-27764) 문제를 통해 세션 하이재킹 및 서비스 거부(DoS) 공격이 가능하며, 충전기 식별 정보가 외부 매핑 플랫폼에 노출(CVE-2026-27777)되어 공격의 진입 장벽을 낮추고 있습니다. [Impact Assessment] 공격 성공 시 충전 네트워크의 데이터 무결성이 손상되고 대규모 서비스 중단이 발생할 수 있습니다. 이는 단순히 전기차 사용자의 불편을 넘어, 백엔드 관리 시스템의 권한 탈취를 통한 2차 공격으로 이어질 수 있으며 국가 에너지 망의 안정성에 잠재적인 위협을 가합니다. [Recommendations] CISA는 모든 제어 시스템 장치를 인터넷에서 분리하고 방화벽 뒤에 배치할 것을 강력히 권고합니다. 원격 접속이 필요한 경우 최신 버전의 VPN을 사용해야 하며, 제조사인 Mobiliti가 현재 CISA의 협조 요청에 응답하지 않은 상태이므로 시스템 운영자는 제조사에 직접 연락하여 보안 패치 여부를 확인하고 심층 방어 전략을 수립해야 합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: EV Charging Infrastructure, ICS Security, WebSocket Vulnerability, OCPP, Authentication Bypass

## Analysis
[Executive Overview] 헝가리의 전기차(EV) 충전 서비스 제공업체인 Mobiliti의 e-mobi.hu 플랫폼에서 심각한 보안 취약점들이 발견되었습니다. 이 취약점들은 에너지 및 교통 시스템과 같은 핵심 인프라 부문에 걸쳐 광범위한 영향을 미칠 수 있으며, 공격자가 충전 스테이션에 대한 무단 관리 권한을 획득하거나 충전 서비스를 완전히 중단시킬 수 있는 심각한 위험을 내포하고 있습니다. [Threat Analysis] 주요 위협은 WebSocket 및 OCPP(Open Charge Point Protocol) 엔드포인트의 보안 구현 결함에서 발생합니다. 특히 CVE-2026-26051은 인증 메커니즘의 부재로 인해 공격자가 충전기로 위장하여 백엔드에 조작된 데이터를 전송할 수 있게 합니다. 또한, 속도 제한 미비(CVE-2026-20882) 및 예측 가능한 세션 식별자(CVE-2026-27764) 문제를 통해 세션 하이재킹 및 서비스 거부(DoS) 공격이 가능하며, 충전기 식별 정보가 외부 매핑 플랫폼에 노출(CVE-2026-27777)되어 공격의 진입 장벽을 낮추고 있습니다. [Impact Assessment] 공격 성공 시 충전 네트워크의 데이터 무결성이 손상되고 대규모 서비스 중단이 발생할 수 있습니다. 이는 단순히 전기차 사용자의 불편을 넘어, 백엔드 관리 시스템의 권한 탈취를 통한 2차 공격으로 이어질 수 있으며 국가 에너지 망의 안정성에 잠재적인 위협을 가합니다. [Recommendations] CISA는 모든 제어 시스템 장치를 인터넷에서 분리하고 방화벽 뒤에 배치할 것을 강력히 권고합니다. 원격 접속이 필요한 경우 최신 버전의 VPN을 사용해야 하며, 제조사인 Mobiliti가 현재 CISA의 협조 요청에 응답하지 않은 상태이므로 시스템 운영자는 제조사에 직접 연락하여 보안 패치 여부를 확인하고 심층 방어 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-062-06: Mobiliti e-mobi.hu, 2026
2. CVE-2026-26051
3. CVE-2026-20882
4. MITRE ATT&CK: T0812 (Default Credentials)
5. S. Johnson et al., Security Analysis of Open Charge Point Protocol in Electric Vehicle Infrastructure, IEEE SmartGridComm, 2024
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-062-06)
    