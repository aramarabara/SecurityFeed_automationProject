
# ePower epower.ie

> [Executive Overview] 아일랜드 기반의 전기차(EV) 충전 솔루션 기업인 ePower의 충전 스테이션 인프라에서 치명적인 보안 취약점 4종이 발견되었습니다. 이번 결함은 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 직접적인 위협을 가하며, 공격자가 충전 스테이션에 대한 무단 행정 제어권을 획득하거나 서비스 거부(DoS) 공격을 통해 충전 서비스를 마비시킬 수 있는 심각한 수준입니다. [Threat Analysis] 핵심 위협은 OCPP(Open Charge Point Protocol) WebSocket 엔드포인트의 인증 메커니즘 부재(CVE-2026-22552)에서 기인합니다. 공격자는 알려진 충전기 식별자를 이용해 합법적인 장치로 위장하여 백엔드에 명령을 내리거나 데이터를 조작할 수 있습니다. 또한 세션 식별자의 예측 가능성으로 인한 세션 하이재킹(CVE-2026-24912) 및 속도 제한 부재로 인한 무차별 대입 공격(CVE-2026-27778) 위험이 공존하며, 심지어 일부 식별 정보가 웹 매핑 플랫폼을 통해 공개적으로 노출(CVE-2026-27770)되고 있는 상황입니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 전 세계에 배포된 ePower 충전 네트워크의 무결성을 훼손하고 대규모 충전 거부 상태를 유발할 수 있습니다. 이는 단순히 개별 충전기 문제를 넘어 에너지 그리드 안정성과 대중 교통 운영에 부정적인 영향을 미치며, 사용자의 인증 정보 및 결제 관련 데이터 조작으로 이어질 수 있는 위험을 내포하고 있습니다. [Recommendations] 현재 제조사의 공식 패치가 확인되지 않았으므로, 운영자는 충전 장치를 비즈니스 네트워크와 격리하고 방화벽 뒤에 배치하여 인터넷 노출을 최소화해야 합니다. 원격 접속이 필요한 경우 최신 버전의 VPN을 적용하고, 비정상적인 WebSocket 연결 시도를 모니터링해야 합니다. 또한 내부 위험 평가를 통해 방어 체계를 재점검하고 CISA의 ICS 보안 권고안을 준수할 것을 강력히 권고합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: EV Infrastructure, ICS/SCADA, Broken Authentication, CISA Advisory, WebSocket Security

## Analysis
[Executive Overview] 아일랜드 기반의 전기차(EV) 충전 솔루션 기업인 ePower의 충전 스테이션 인프라에서 치명적인 보안 취약점 4종이 발견되었습니다. 이번 결함은 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 직접적인 위협을 가하며, 공격자가 충전 스테이션에 대한 무단 행정 제어권을 획득하거나 서비스 거부(DoS) 공격을 통해 충전 서비스를 마비시킬 수 있는 심각한 수준입니다. [Threat Analysis] 핵심 위협은 OCPP(Open Charge Point Protocol) WebSocket 엔드포인트의 인증 메커니즘 부재(CVE-2026-22552)에서 기인합니다. 공격자는 알려진 충전기 식별자를 이용해 합법적인 장치로 위장하여 백엔드에 명령을 내리거나 데이터를 조작할 수 있습니다. 또한 세션 식별자의 예측 가능성으로 인한 세션 하이재킹(CVE-2026-24912) 및 속도 제한 부재로 인한 무차별 대입 공격(CVE-2026-27778) 위험이 공존하며, 심지어 일부 식별 정보가 웹 매핑 플랫폼을 통해 공개적으로 노출(CVE-2026-27770)되고 있는 상황입니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 전 세계에 배포된 ePower 충전 네트워크의 무결성을 훼손하고 대규모 충전 거부 상태를 유발할 수 있습니다. 이는 단순히 개별 충전기 문제를 넘어 에너지 그리드 안정성과 대중 교통 운영에 부정적인 영향을 미치며, 사용자의 인증 정보 및 결제 관련 데이터 조작으로 이어질 수 있는 위험을 내포하고 있습니다. [Recommendations] 현재 제조사의 공식 패치가 확인되지 않았으므로, 운영자는 충전 장치를 비즈니스 네트워크와 격리하고 방화벽 뒤에 배치하여 인터넷 노출을 최소화해야 합니다. 원격 접속이 필요한 경우 최신 버전의 VPN을 적용하고, 비정상적인 WebSocket 연결 시도를 모니터링해야 합니다. 또한 내부 위험 평가를 통해 방어 체계를 재점검하고 CISA의 ICS 보안 권고안을 준수할 것을 강력히 권고합니다.


## References
1. CVE-2026-22552
2. CISA ICSA-26-062-07: ePower epower.ie, 2026
3. MITRE ATT&CK for ICS: T0812 - Default Credentials
4. Johnson et al., Security and Privacy in the EV Charging Infrastructure: A Comprehensive Survey, IEEE Communications Surveys & Tutorials, 2022
5. NIST SP 800-82 Rev. 3 - Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-062-07)
    