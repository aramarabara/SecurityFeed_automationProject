
# ePower epower.ie

> ePower(epower.ie)의 전기차 충전 스테이션 인프라에서 발견된 다수의 치명적인 보안 취약점에 대한 분석 보고서입니다. 아일랜드에 본사를 둔 ePower의 시스템은 전 세계 에너지 및 운송 핵심 인프라 분야에 배포되어 있으며, 이번에 공개된 취약점들은 관리 권한 탈취 및 충전 서비스 중단(DoS)을 유발할 수 있는 심각한 위험을 내포하고 있습니다. 특히 CISA는 해당 벤더의 모든 소프트웨어 버전이 영향을 받는다고 명시하였으며, 현재까지 벤더 측의 공식적인 패치 대응이 부재한 상황입니다. 기술적 분석 결과, 가장 치명적인 결함은 WebSocket 엔드포인트의 인증 메커니즘 부재(CVE-2026-22552)로, 공격자가 OCPP(Open Charge Point Protocol) 통신을 가로채거나 정상적인 충전 스테이션으로 위장하여 백엔드 시스템에 침투할 수 있게 합니다. 또한 세션 관리의 미흡함(CVE-2026-24912)과 속도 제한(Rate Limiting)의 부재(CVE-2026-27778), 그리고 웹 기반 지도 플랫폼을 통한 인증 식별자 노출(CVE-2026-27770) 등의 결함이 결합되어 공격 난이도를 크게 낮추고 있습니다. 이러한 위협은 개별 충전 스테이션의 작동 중단을 넘어, 전체 충전 네트워크의 데이터 무결성을 파괴하고 경제적 손실을 초래할 수 있는 중대한 사안입니다. 보안 담당자는 공식 패치가 제공될 때까지 제어 시스템의 네트워크 노출을 차단하고, 방화벽 및 VPN을 통한 격리 조치를 즉시 시행해야 합니다. 또한 공개된 자산 관리 도구에서 충전소 식별 정보가 노출되지 않도록 지속적인 모니터링이 필요합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: EV Charging, OCPP, Industrial Control Systems, CISA Advisory, Missing Authentication

## Analysis
ePower(epower.ie)의 전기차 충전 스테이션 인프라에서 발견된 다수의 치명적인 보안 취약점에 대한 분석 보고서입니다. 아일랜드에 본사를 둔 ePower의 시스템은 전 세계 에너지 및 운송 핵심 인프라 분야에 배포되어 있으며, 이번에 공개된 취약점들은 관리 권한 탈취 및 충전 서비스 중단(DoS)을 유발할 수 있는 심각한 위험을 내포하고 있습니다. 특히 CISA는 해당 벤더의 모든 소프트웨어 버전이 영향을 받는다고 명시하였으며, 현재까지 벤더 측의 공식적인 패치 대응이 부재한 상황입니다. 기술적 분석 결과, 가장 치명적인 결함은 WebSocket 엔드포인트의 인증 메커니즘 부재(CVE-2026-22552)로, 공격자가 OCPP(Open Charge Point Protocol) 통신을 가로채거나 정상적인 충전 스테이션으로 위장하여 백엔드 시스템에 침투할 수 있게 합니다. 또한 세션 관리의 미흡함(CVE-2026-24912)과 속도 제한(Rate Limiting)의 부재(CVE-2026-27778), 그리고 웹 기반 지도 플랫폼을 통한 인증 식별자 노출(CVE-2026-27770) 등의 결함이 결합되어 공격 난이도를 크게 낮추고 있습니다. 이러한 위협은 개별 충전 스테이션의 작동 중단을 넘어, 전체 충전 네트워크의 데이터 무결성을 파괴하고 경제적 손실을 초래할 수 있는 중대한 사안입니다. 보안 담당자는 공식 패치가 제공될 때까지 제어 시스템의 네트워크 노출을 차단하고, 방화벽 및 VPN을 통한 격리 조치를 즉시 시행해야 합니다. 또한 공개된 자산 관리 도구에서 충전소 식별 정보가 노출되지 않도록 지속적인 모니터링이 필요합니다.


## References
1. CVE-2026-22552
2. CISA Advisory ICSA-26-062-07
3. MITRE ATT&CK: T1190 (Exploit Public-Facing Application)
4. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
5. S. Al-Ahmadi et al., Security Analysis of the Open Charge Point Protocol (OCPP) in EV Charging Infrastructure, IEEE Access, 2022
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-062-07)
    