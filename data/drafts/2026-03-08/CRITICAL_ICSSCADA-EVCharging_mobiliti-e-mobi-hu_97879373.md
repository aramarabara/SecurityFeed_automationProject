
# Mobiliti e-mobi.hu

> [Executive Overview] 헝가리 기반의 전기차(EV) 충전 서비스인 Mobiliti(e-mobi.hu) 시스템에서 심각한 보안 취약점이 발견되었습니다. 이 취약점들은 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 직접적인 영향을 미치며, 공격자가 원격에서 충전소를 장악하거나 대규모 서비스 거부(DoS) 공격을 수행할 수 있는 위험을 내포하고 있습니다. 특히 벤더 측에서 보안 패치나 공식적인 대응을 현재까지 내놓지 않고 있어 사용자의 각별한 주의가 요구됩니다.

[Threat Analysis] 기술적으로 가장 치명적인 결함은 CVE-2026-26051로, OCPP(Open Charge Point Protocol) WebSocket 엔드포인트에 인증 메커니즘이 부재합니다. 공격자는 알려진 충전소 식별자만으로 적법한 충전기로 위장하여 백엔드와 통신할 수 있으며, 이는 권한 상승 및 충전 데이터 변조로 이어집니다. 또한, CVE-2026-20882와 CVE-2026-27764를 통해 속도 제한 부재를 악용한 브루트포스 공격과 세션 가로채기(Session Shadowing)가 가능하며, 충전기 식별 정보가 외부 매핑 플랫폼에 노출되는 설계상 결함(CVE-2026-27777)도 확인되었습니다.

[Impact Assessment] 이번 취약점은 전 세계에 배포된 Mobiliti e-mobi.hu의 모든 버전에 영향을 미칩니다. 공격이 성공할 경우, 충전 네트워크 전체의 가용성이 상실되거나 잘못된 명령으로 인한 물리적 장비 손상, 사용자 결제 및 세션 정보 유출 등의 피해가 발생할 수 있습니다. 특히 벤더인 Mobiliti가 CISA의 조정 요청에 응답하지 않았다는 점은 잠재적인 위협 노출 기간이 장기화될 수 있음을 시사합니다.

[Recommendations] 현재 공식 패치가 부재하므로, 운영자는 즉시 충전 시스템의 네트워크 노출을 최소화하고 제어 시스템을 기업 내부망과 분리된 방화벽 뒤에 배치해야 합니다. 원격 접속이 필요한 경우 다요소 인증(MFA)이 적용된 최신 버전의 VPN을 사용하고, 웹 소켓 통신에 대한 비정상적인 트래픽 모니터링을 강화해야 합니다. 또한, Mobiliti 고객 지원 채널을 통해 해당 모델에 대한 구체적인 보안 완화 방안을 직접 문의할 것을 권고합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: ICS/SCADA, EV Charging, Authentication Bypass, CISA Advisory, OCPP

## Analysis
[Executive Overview] 헝가리 기반의 전기차(EV) 충전 서비스인 Mobiliti(e-mobi.hu) 시스템에서 심각한 보안 취약점이 발견되었습니다. 이 취약점들은 에너지 및 교통 시스템과 같은 국가 핵심 인프라에 직접적인 영향을 미치며, 공격자가 원격에서 충전소를 장악하거나 대규모 서비스 거부(DoS) 공격을 수행할 수 있는 위험을 내포하고 있습니다. 특히 벤더 측에서 보안 패치나 공식적인 대응을 현재까지 내놓지 않고 있어 사용자의 각별한 주의가 요구됩니다.

[Threat Analysis] 기술적으로 가장 치명적인 결함은 CVE-2026-26051로, OCPP(Open Charge Point Protocol) WebSocket 엔드포인트에 인증 메커니즘이 부재합니다. 공격자는 알려진 충전소 식별자만으로 적법한 충전기로 위장하여 백엔드와 통신할 수 있으며, 이는 권한 상승 및 충전 데이터 변조로 이어집니다. 또한, CVE-2026-20882와 CVE-2026-27764를 통해 속도 제한 부재를 악용한 브루트포스 공격과 세션 가로채기(Session Shadowing)가 가능하며, 충전기 식별 정보가 외부 매핑 플랫폼에 노출되는 설계상 결함(CVE-2026-27777)도 확인되었습니다.

[Impact Assessment] 이번 취약점은 전 세계에 배포된 Mobiliti e-mobi.hu의 모든 버전에 영향을 미칩니다. 공격이 성공할 경우, 충전 네트워크 전체의 가용성이 상실되거나 잘못된 명령으로 인한 물리적 장비 손상, 사용자 결제 및 세션 정보 유출 등의 피해가 발생할 수 있습니다. 특히 벤더인 Mobiliti가 CISA의 조정 요청에 응답하지 않았다는 점은 잠재적인 위협 노출 기간이 장기화될 수 있음을 시사합니다.

[Recommendations] 현재 공식 패치가 부재하므로, 운영자는 즉시 충전 시스템의 네트워크 노출을 최소화하고 제어 시스템을 기업 내부망과 분리된 방화벽 뒤에 배치해야 합니다. 원격 접속이 필요한 경우 다요소 인증(MFA)이 적용된 최신 버전의 VPN을 사용하고, 웹 소켓 통신에 대한 비정상적인 트래픽 모니터링을 강화해야 합니다. 또한, Mobiliti 고객 지원 채널을 통해 해당 모델에 대한 구체적인 보안 완화 방안을 직접 문의할 것을 권고합니다.


## References
1. CVE-2026-26051
2. CISA Advisory ICSA-26-062-06: Mobiliti e-mobi.hu, 2026
3. MITRE ATT&CK: T0812 (Default Directional Control)
4. MITRE ATT&CK: T0859 (External Network Access)
5. S. Johnson et al., Security Analysis of Electric Vehicle Charging Infrastructure, IEEE Access, 2022
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-062-06)
    