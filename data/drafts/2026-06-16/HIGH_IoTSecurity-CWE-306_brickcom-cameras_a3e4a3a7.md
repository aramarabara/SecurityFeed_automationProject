
# Brickcom Cameras

> [Executive Overview] 최근 CISA는 전 세계 주요 인프라 산업에서 널리 사용되는 Brickcom 사의 IP 카메라 제품군(Cube, Dome, Bullet, Box)에서 발견된 심각한 보안 취약점에 대해 경고를 발표했습니다. 이 취약점은 인증되지 않은 공격자가 실시간 영상 피드에 무단 접근하고 기기 제어권을 획득할 수 있게 하여, 의료, 금융, 제조 등 핵심 시설의 물리적 보안에 중대한 위협을 초래합니다. [Threat Analysis] 식별된 주요 결함은 CVE-2026-50245(인증 누락)와 CVE-2026-50005(기본 자격 증명 사용)입니다. 공격자는 ONVIF 엔드포인트를 통해 인증 없이 스냅샷 이미지를 추출할 수 있으며, 제품 출하 시 설정된 기본 비밀번호를 악용하여 관리자 권한을 탈취할 수 있습니다. 특히 CISA의 보고에 따르면 제조사인 Brickcom 측이 보안 권고에 응답하지 않아 현재 공식적인 패치가 부재한 '제로데이'에 가까운 위험 상태입니다. [Impact Assessment] 공격 성공 시 민감한 시설의 내부 영상이 실시간으로 유출될 수 있으며, 이는 지적 재산권 침해나 개인정보 유출로 이어집니다. 또한, 침해된 카메라는 내부 네트워크 침투를 위한 피벗 포인트(Pivot Point)로 활용되거나 DDoS 공격을 위한 봇넷의 일부로 악용될 가능성이 큽니다. [Recommendations] 관리자는 즉시 모든 기기의 기본 비밀번호를 복잡한 암호로 교체하고, 카메라를 공용 인터넷에서 격리해야 합니다. 내부망에서도 방화벽을 통해 접근을 제한하고 VPN을 통한 암호화 통신을 강제해야 하며, 제조사의 공식 패치가 발표될 때까지 지속적인 네트워크 트래픽 모니터링이 필수적입니다.

**Severity**: HIGH (8.3/10)
**Tags**: IoT Security, CWE-306, CWE-1392, CISA Advisory, OT Security

## Analysis
[Executive Overview] 최근 CISA는 전 세계 주요 인프라 산업에서 널리 사용되는 Brickcom 사의 IP 카메라 제품군(Cube, Dome, Bullet, Box)에서 발견된 심각한 보안 취약점에 대해 경고를 발표했습니다. 이 취약점은 인증되지 않은 공격자가 실시간 영상 피드에 무단 접근하고 기기 제어권을 획득할 수 있게 하여, 의료, 금융, 제조 등 핵심 시설의 물리적 보안에 중대한 위협을 초래합니다. [Threat Analysis] 식별된 주요 결함은 CVE-2026-50245(인증 누락)와 CVE-2026-50005(기본 자격 증명 사용)입니다. 공격자는 ONVIF 엔드포인트를 통해 인증 없이 스냅샷 이미지를 추출할 수 있으며, 제품 출하 시 설정된 기본 비밀번호를 악용하여 관리자 권한을 탈취할 수 있습니다. 특히 CISA의 보고에 따르면 제조사인 Brickcom 측이 보안 권고에 응답하지 않아 현재 공식적인 패치가 부재한 '제로데이'에 가까운 위험 상태입니다. [Impact Assessment] 공격 성공 시 민감한 시설의 내부 영상이 실시간으로 유출될 수 있으며, 이는 지적 재산권 침해나 개인정보 유출로 이어집니다. 또한, 침해된 카메라는 내부 네트워크 침투를 위한 피벗 포인트(Pivot Point)로 활용되거나 DDoS 공격을 위한 봇넷의 일부로 악용될 가능성이 큽니다. [Recommendations] 관리자는 즉시 모든 기기의 기본 비밀번호를 복잡한 암호로 교체하고, 카메라를 공용 인터넷에서 격리해야 합니다. 내부망에서도 방화벽을 통해 접근을 제한하고 VPN을 통한 암호화 통신을 강제해야 하며, 제조사의 공식 패치가 발표될 때까지 지속적인 네트워크 트래픽 모니터링이 필수적입니다.


## References
1. CISA, ICSA-26-162-03: Brickcom Cameras, 2026
2. CVE-2026-50245
3. CVE-2026-50005
4. MITRE ATT&CK: T1078.001 (Default Accounts)
5. Costin et al., All Your Cameras Are Belong to Us: Security and Privacy in IP Cameras, USENIX Security, 2014
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-162-03)
    