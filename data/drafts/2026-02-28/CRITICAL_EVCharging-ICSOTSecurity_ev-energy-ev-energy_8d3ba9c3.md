
# EV Energy ev.energy

> [Executive Overview] 미국 사이버보안 및 인프라 보안국(CISA)은 전 세계 에너지 및 교통 시스템 분야에서 널리 사용되는 EV Energy ev.energy 플랫폼에서 발견된 4개의 심각한 취약점(ICSA-26-057-07)을 공개했습니다. 이 플랫폼은 전기차 충전 인프라를 관리하는 핵심 소프트웨어로, 취약점 악용 시 공격자가 충전 스테이션을 무단 제어하거나 서비스를 중단시킬 수 있어 국가 핵심 인프라에 대한 직접적인 위협이 되고 있습니다.

[Threat Analysis] 주요 위협은 WebSocket 및 OCPP(Open Charge Point Protocol) 구현 결함에서 기인합니다. 가장 심각한 CVE-2026-27772(CVSS 9.4)는 인증 메커니즘 부재로 인해 공격자가 충전기 식별자만 알면 합법적인 충전기로 위장하여 백엔드와 통신할 수 있게 합니다. 또한, 속도 제한 부재(CVE-2026-24445)를 통한 무차별 대입 공격, 예측 가능한 세션 식별자를 이용한 세션 하이재킹(CVE-2026-26290), 그리고 웹 맵핑 플랫폼을 통한 자격 증명 노출(CVE-2026-25774) 등 다단계 공격 체인이 형성되어 있습니다.

[Impact Assessment] 공격자가 관리 권한을 획득할 경우, 충전 데이터를 조작하여 경제적 이득을 취하거나 대규모 서비스 거부(DoS) 공격을 통해 전기차 충전 네트워크 전체를 마비시킬 수 있습니다. 특히 제조사(EV Energy)가 CISA의 보안 조정 요청에 응답하지 않아 현재 공식 패치가 없는 상태이므로, 해당 솔루션을 사용하는 에너지 및 운송 부문의 조직들은 잠재적인 데이터 변조 및 인프라 침해 위험에 노출되어 있습니다.

[Recommendations] 공식 패치가 발표될 때까지 사용자는 제어 시스템 장치를 인터넷에서 분리하고 방화벽 뒤에 배치하여 네트워크 노출을 최소화해야 합니다. 원격 접속이 필요한 경우 VPN을 사용하되, 고정된 IP 기반의 접근 제어 목록(ACL)을 적용하여 인증되지 않은 WebSocket 연결을 차단해야 합니다. 또한, 공공 웹 플랫폼에 노출된 충전기 식별 정보를 주기적으로 점검하고, 비정상적인 세션 요청이나 텔레메트리 중단 현상을 실시간 모니터링할 것을 권고합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: EV Charging, ICS/OT Security, Authentication Bypass, WebSocket Vulnerability, CISA Advisory

## Analysis
[Executive Overview] 미국 사이버보안 및 인프라 보안국(CISA)은 전 세계 에너지 및 교통 시스템 분야에서 널리 사용되는 EV Energy ev.energy 플랫폼에서 발견된 4개의 심각한 취약점(ICSA-26-057-07)을 공개했습니다. 이 플랫폼은 전기차 충전 인프라를 관리하는 핵심 소프트웨어로, 취약점 악용 시 공격자가 충전 스테이션을 무단 제어하거나 서비스를 중단시킬 수 있어 국가 핵심 인프라에 대한 직접적인 위협이 되고 있습니다.

[Threat Analysis] 주요 위협은 WebSocket 및 OCPP(Open Charge Point Protocol) 구현 결함에서 기인합니다. 가장 심각한 CVE-2026-27772(CVSS 9.4)는 인증 메커니즘 부재로 인해 공격자가 충전기 식별자만 알면 합법적인 충전기로 위장하여 백엔드와 통신할 수 있게 합니다. 또한, 속도 제한 부재(CVE-2026-24445)를 통한 무차별 대입 공격, 예측 가능한 세션 식별자를 이용한 세션 하이재킹(CVE-2026-26290), 그리고 웹 맵핑 플랫폼을 통한 자격 증명 노출(CVE-2026-25774) 등 다단계 공격 체인이 형성되어 있습니다.

[Impact Assessment] 공격자가 관리 권한을 획득할 경우, 충전 데이터를 조작하여 경제적 이득을 취하거나 대규모 서비스 거부(DoS) 공격을 통해 전기차 충전 네트워크 전체를 마비시킬 수 있습니다. 특히 제조사(EV Energy)가 CISA의 보안 조정 요청에 응답하지 않아 현재 공식 패치가 없는 상태이므로, 해당 솔루션을 사용하는 에너지 및 운송 부문의 조직들은 잠재적인 데이터 변조 및 인프라 침해 위험에 노출되어 있습니다.

[Recommendations] 공식 패치가 발표될 때까지 사용자는 제어 시스템 장치를 인터넷에서 분리하고 방화벽 뒤에 배치하여 네트워크 노출을 최소화해야 합니다. 원격 접속이 필요한 경우 VPN을 사용하되, 고정된 IP 기반의 접근 제어 목록(ACL)을 적용하여 인증되지 않은 WebSocket 연결을 차단해야 합니다. 또한, 공공 웹 플랫폼에 노출된 충전기 식별 정보를 주기적으로 점검하고, 비정상적인 세션 요청이나 텔레메트리 중단 현상을 실시간 모니터링할 것을 권고합니다.


## References
1. CISA, ICSA-26-057-07: EV Energy ev.energy, 2026
2. CVE-2026-27772
3. MITRE ATT&CK: T0812 (Default Credentials)
4. S. Johnson et al., Security Analysis of the Open Charge Point Protocol (OCPP) in Smart Grid, IEEE Communications Surveys & Tutorials, 2022
5. NIST, Special Publication 800-82 Revision 3: Guide to Industrial Control Systems (ICS) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-07)
    