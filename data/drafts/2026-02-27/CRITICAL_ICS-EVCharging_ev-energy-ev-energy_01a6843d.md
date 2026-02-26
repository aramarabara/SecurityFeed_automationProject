
# EV Energy ev.energy

> 핵심 개요: EV Energy의 충전 관리 플랫폼에서 발견된 다수의 취약점은 전기차(EV) 충전 인프라의 보안에 심각한 위협을 제기합니다. 특히 WebSocket 엔드포인트의 인증 결여와 세션 관리 부실은 공격자가 전 세계에 배치된 충전 스테이션에 대한 무단 행정 권한을 획득하거나 서비스를 중단시킬 수 있는 경로를 제공합니다. 이는 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 대한 직접적인 위협으로 간주됩니다. 위협 분석: 주요 공격 벡터는 인증이 없는 OCPP(Open Charge Point Protocol) WebSocket 엔드포인트(CVE-2026-27772)입니다. 공격자는 공개된 지도 플랫폼을 통해 획득한 충전기 식별자(CVE-2026-25774)를 사용하여 정상적인 충전기로 위장하고 백엔드와 통신할 수 있습니다. 또한, 무차별 대입 공격에 대한 방어 기재가 부족하고 예측 가능한 세션 ID를 사용하고 있어, 세션 하이재킹 및 서비스 거부(DoS) 공격을 통한 인프라 마비가 기술적으로 용이한 상태입니다. 영향 평가: 본 취약점은 영국에 본사를 둔 EV Energy의 전 세계 모든 버전 제품에 영향을 미칩니다. 공격 성공 시 충전 데이터의 무단 수정, 과금 정보 조작, 충전 서비스의 광범위한 중단이 발생할 수 있으며, 이는 전력망 안정성 저해 및 사용자 안전 사고로 이어질 수 있는 높은 위험성을 내포하고 있습니다. 권장 사항: 현재 제조사의 공식 패치가 배포되지 않았으므로, 운영자는 충전 제어 시스템을 공용 인터넷으로부터 완전히 격리하고 방화벽 뒤에 배치해야 합니다. 원격 접속이 필요한 경우 반드시 강력한 인증을 포함한 VPN을 사용해야 하며, WebSocket 트래픽에 대한 이상 징후 모니터링을 강화하여 비정상적인 접속 시도를 즉각 차단할 것을 권고합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: ICS, EV Charging, WebSocket Security, CWE-306, Critical Infrastructure

## Analysis
핵심 개요: EV Energy의 충전 관리 플랫폼에서 발견된 다수의 취약점은 전기차(EV) 충전 인프라의 보안에 심각한 위협을 제기합니다. 특히 WebSocket 엔드포인트의 인증 결여와 세션 관리 부실은 공격자가 전 세계에 배치된 충전 스테이션에 대한 무단 행정 권한을 획득하거나 서비스를 중단시킬 수 있는 경로를 제공합니다. 이는 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 대한 직접적인 위협으로 간주됩니다. 위협 분석: 주요 공격 벡터는 인증이 없는 OCPP(Open Charge Point Protocol) WebSocket 엔드포인트(CVE-2026-27772)입니다. 공격자는 공개된 지도 플랫폼을 통해 획득한 충전기 식별자(CVE-2026-25774)를 사용하여 정상적인 충전기로 위장하고 백엔드와 통신할 수 있습니다. 또한, 무차별 대입 공격에 대한 방어 기재가 부족하고 예측 가능한 세션 ID를 사용하고 있어, 세션 하이재킹 및 서비스 거부(DoS) 공격을 통한 인프라 마비가 기술적으로 용이한 상태입니다. 영향 평가: 본 취약점은 영국에 본사를 둔 EV Energy의 전 세계 모든 버전 제품에 영향을 미칩니다. 공격 성공 시 충전 데이터의 무단 수정, 과금 정보 조작, 충전 서비스의 광범위한 중단이 발생할 수 있으며, 이는 전력망 안정성 저해 및 사용자 안전 사고로 이어질 수 있는 높은 위험성을 내포하고 있습니다. 권장 사항: 현재 제조사의 공식 패치가 배포되지 않았으므로, 운영자는 충전 제어 시스템을 공용 인터넷으로부터 완전히 격리하고 방화벽 뒤에 배치해야 합니다. 원격 접속이 필요한 경우 반드시 강력한 인증을 포함한 VPN을 사용해야 하며, WebSocket 트래픽에 대한 이상 징후 모니터링을 강화하여 비정상적인 접속 시도를 즉각 차단할 것을 권고합니다.


## References
1. CISA, ICSA-26-057-07: EV Energy ev.energy, 2026
2. CVE-2026-27772
3. MITRE ATT&CK: T0812 (Default Credentials / Impersonation in ICS)
4. A. Johnson et al., Security Vulnerabilities in the Open Charge Point Protocol (OCPP) for Electric Vehicle Charging, IEEE Transactions on Smart Grid, 2023
5. MITRE ATT&CK: T1210 (Exploitation of Remote Services)
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-07)
    