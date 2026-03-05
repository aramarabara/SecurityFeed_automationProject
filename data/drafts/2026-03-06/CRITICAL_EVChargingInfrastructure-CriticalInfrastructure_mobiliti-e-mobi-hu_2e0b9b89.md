
# Mobiliti e-mobi.hu

> [Executive Overview] Mobiliti의 e-mobi.hu 전기차(EV) 충전 인프라에서 관리 권한 탈취 및 서비스 중단이 가능한 심각한 보안 취약점들이 발견되었습니다. 이 위협은 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 직접적인 영향을 미칠 수 있으며, CISA(미국 사이버보안 및 인프라 보안국)는 이를 심각한 수준으로 분류했습니다. 특히 제조사인 Mobiliti가 보안 권고에 응답하지 않아 현재 공식 패치가 부재한 상태이므로 운영자들의 각별한 주의가 요구됩니다.

[Threat Analysis] 주요 공격 벡터는 WebSocket 엔드포인트의 인증 메커니즘 부재(CVE-2026-26051)와 세션 관리 결함(CVE-2026-27764)입니다. 공격자는 공개 지도 플랫폼에서 획득한 충전소 식별자를 악용하여 정상적인 충전 스테이션으로 위장할 수 있으며, OCPP(Open Charge Point Protocol) 명령을 백엔드에 직접 전송하여 인프라를 무단 제어할 수 있습니다. 또한 속도 제한(Rate Limiting)의 부재는 무차별 대입 공격 및 서비스 거부(DoS) 공격의 경로를 제공합니다.

[Impact Assessment] 전 세계적으로 배포된 모든 e-mobi.hu 버전이 공격에 노출되어 있으며, 공격 성공 시 충전 네트워크의 데이터 무결성이 훼손되거나 대규모 서비스 중단 사태가 발생할 수 있습니다. 이는 충전 요금 조작과 같은 경제적 손실은 물론, 교통망 마비로 인한 사회적 혼란을 야기할 수 있는 중대한 사안입니다. 권한 상승을 통한 백엔드 시스템 장악은 연쇄적인 인프라 침해로 이어질 가능성이 큽니다.

[Recommendations] 공식 패치가 발표될 때까지 운영자는 제어 시스템 장치를 인터넷에서 분리하고 네트워크 노출을 최소화해야 합니다. 모든 제어 시스템은 방화벽 뒤의 격리된 네트워크에 배치하고, 원격 접속 시 반드시 다요소 인증(MFA)이 적용된 보안 VPN을 사용해야 합니다. 또한, CISA의 '심층 방어(Defense-in-Depth)' 전략에 따라 실시간 로그 모니터링 및 이상 징후 탐지 체계를 강화할 것을 강력히 권고합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: EV Charging Infrastructure, Critical Infrastructure, OCPP, Broken Authentication, CISA Advisory

## Analysis
[Executive Overview] Mobiliti의 e-mobi.hu 전기차(EV) 충전 인프라에서 관리 권한 탈취 및 서비스 중단이 가능한 심각한 보안 취약점들이 발견되었습니다. 이 위협은 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 직접적인 영향을 미칠 수 있으며, CISA(미국 사이버보안 및 인프라 보안국)는 이를 심각한 수준으로 분류했습니다. 특히 제조사인 Mobiliti가 보안 권고에 응답하지 않아 현재 공식 패치가 부재한 상태이므로 운영자들의 각별한 주의가 요구됩니다.

[Threat Analysis] 주요 공격 벡터는 WebSocket 엔드포인트의 인증 메커니즘 부재(CVE-2026-26051)와 세션 관리 결함(CVE-2026-27764)입니다. 공격자는 공개 지도 플랫폼에서 획득한 충전소 식별자를 악용하여 정상적인 충전 스테이션으로 위장할 수 있으며, OCPP(Open Charge Point Protocol) 명령을 백엔드에 직접 전송하여 인프라를 무단 제어할 수 있습니다. 또한 속도 제한(Rate Limiting)의 부재는 무차별 대입 공격 및 서비스 거부(DoS) 공격의 경로를 제공합니다.

[Impact Assessment] 전 세계적으로 배포된 모든 e-mobi.hu 버전이 공격에 노출되어 있으며, 공격 성공 시 충전 네트워크의 데이터 무결성이 훼손되거나 대규모 서비스 중단 사태가 발생할 수 있습니다. 이는 충전 요금 조작과 같은 경제적 손실은 물론, 교통망 마비로 인한 사회적 혼란을 야기할 수 있는 중대한 사안입니다. 권한 상승을 통한 백엔드 시스템 장악은 연쇄적인 인프라 침해로 이어질 가능성이 큽니다.

[Recommendations] 공식 패치가 발표될 때까지 운영자는 제어 시스템 장치를 인터넷에서 분리하고 네트워크 노출을 최소화해야 합니다. 모든 제어 시스템은 방화벽 뒤의 격리된 네트워크에 배치하고, 원격 접속 시 반드시 다요소 인증(MFA)이 적용된 보안 VPN을 사용해야 합니다. 또한, CISA의 '심층 방어(Defense-in-Depth)' 전략에 따라 실시간 로그 모니터링 및 이상 징후 탐지 체계를 강화할 것을 강력히 권고합니다.


## References
1. CISA, ICSA-26-062-06: Mobiliti e-mobi.hu, 2026
2. CVE-2026-26051
3. CVE-2026-27764
4. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
5. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-062-06)
    