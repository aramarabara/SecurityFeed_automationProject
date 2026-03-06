
# ePower epower.ie

> Executive Overview: ePower의 전기차(EV) 충전 인프라에서 발견된 다수의 취약점은 에너지 및 교통 시스템과 같은 국가 핵심 기반 시설에 심각한 사이버 위협을 제기합니다. CISA가 발표한 이번 권고(ICSA-26-062-07)는 인증 메커니즘 부재 및 세션 관리 결함으로 인해 공격자가 충전 스테이션에 대한 무단 관리 권한을 획득하거나 서비스 거부(DoS) 공격을 유도할 수 있음을 경고합니다. Threat Analysis: 핵심 취약점인 CVE-2026-22552(CVSS 9.4)는 WebSocket 엔드포인트의 인증 미비로 인해 발생하며, 공격자가 충전기 식별자를 도용하여 백엔드 시스템과 정상적인 충전기처럼 통신할 수 있게 합니다. 또한 무차별 대입 공격을 차단하는 속도 제한 기능의 부재(CVE-2026-27778)와 예측 가능한 세션 식별자를 통한 세션 하이재킹(CVE-2026-24912) 위험이 공존하며, 충전기 ID가 외부 맵 플랫폼에 노출되는 등의 설계상 결함도 확인되었습니다. Impact Assessment: 해당 취약점은 전 세계적으로 배포된 ePower의 모든 버전에 영향을 미치며, 공격 성공 시 충전 네트워크 데이터의 변조, 권한 상승, 그리고 대규모 충전 서비스 중단으로 이어질 수 있습니다. 특히 제조사가 CISA의 보안 조정 요청에 응답하지 않아 공식 패치가 없는 상태이므로, 운영 환경의 위험이 매우 높습니다. Recommendations: 운영자는 충전 제어 시스템을 공용 인터넷으로부터 즉시 격리하고 방화벽 및 VPN을 통한 엄격한 접근 제어를 실시해야 합니다. 또한 CISA의 ICS 심층 방어(Defense-in-Depth) 전략에 따라 비즈니스 네트워크와의 분리 및 지속적인 이상 징후 모니터링을 수행할 것을 강력히 권고합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: ICS/SCADA, EV Charging, CISA Advisory, WebSocket Security, Authentication Bypass

## Analysis
Executive Overview: ePower의 전기차(EV) 충전 인프라에서 발견된 다수의 취약점은 에너지 및 교통 시스템과 같은 국가 핵심 기반 시설에 심각한 사이버 위협을 제기합니다. CISA가 발표한 이번 권고(ICSA-26-062-07)는 인증 메커니즘 부재 및 세션 관리 결함으로 인해 공격자가 충전 스테이션에 대한 무단 관리 권한을 획득하거나 서비스 거부(DoS) 공격을 유도할 수 있음을 경고합니다. Threat Analysis: 핵심 취약점인 CVE-2026-22552(CVSS 9.4)는 WebSocket 엔드포인트의 인증 미비로 인해 발생하며, 공격자가 충전기 식별자를 도용하여 백엔드 시스템과 정상적인 충전기처럼 통신할 수 있게 합니다. 또한 무차별 대입 공격을 차단하는 속도 제한 기능의 부재(CVE-2026-27778)와 예측 가능한 세션 식별자를 통한 세션 하이재킹(CVE-2026-24912) 위험이 공존하며, 충전기 ID가 외부 맵 플랫폼에 노출되는 등의 설계상 결함도 확인되었습니다. Impact Assessment: 해당 취약점은 전 세계적으로 배포된 ePower의 모든 버전에 영향을 미치며, 공격 성공 시 충전 네트워크 데이터의 변조, 권한 상승, 그리고 대규모 충전 서비스 중단으로 이어질 수 있습니다. 특히 제조사가 CISA의 보안 조정 요청에 응답하지 않아 공식 패치가 없는 상태이므로, 운영 환경의 위험이 매우 높습니다. Recommendations: 운영자는 충전 제어 시스템을 공용 인터넷으로부터 즉시 격리하고 방화벽 및 VPN을 통한 엄격한 접근 제어를 실시해야 합니다. 또한 CISA의 ICS 심층 방어(Defense-in-Depth) 전략에 따라 비즈니스 네트워크와의 분리 및 지속적인 이상 징후 모니터링을 수행할 것을 강력히 권고합니다.


## References
1. CISA, ICSA-26-062-07: ePower epower.ie, 2026
2. CVE-2026-22552
3. MITRE ATT&CK: T0883 (Unauthorized Command Message)
4. Ahmad et al., Cybersecurity of Electric Vehicle Charging Stations: Vulnerabilities, Attacks and Countermeasures, IEEE Access, 2021
5. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-062-07)
    