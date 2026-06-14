
# Brickcom Cameras

> [Executive Overview] 대만 소재의 네트워크 카메라 제조업체인 Brickcom의 Cube, Dome, Bullet, Box 등 주요 IP 카메라 모델에서 심각한 보안 취약점이 발견되었습니다. 해당 장치들은 전 세계 상업 시설, 제조, 금융, 의료 및 공공 보건 등 주요 기반 시설 섹터에 널리 배치되어 있어, 익스플로잇 성공 시 심각한 물리적 및 논리적 보안 위협을 초래할 수 있습니다.

[Threat Analysis] 주요 취약점은 두 가지로 분류됩니다. CVE-2026-50245는 /ONVIF 엔드포인트를 통한 인증 없는 실시간 스냅샷 접근(CWE-306)을 허용하며, CVE-2026-50005는 기기 출하 시 설정된 기본 자격 증명(CWE-1392)을 악용하여 공격자가 시스템에 무단 접속할 수 있도록 합니다. CISA는 parsa rezaie khiabanloo가 작성한 개념 증명(PoC) 코드를 확인했으며, 공격자가 기술적 장벽 없이 원격에서 영상 피드 탈취 및 관리자 권한 획득이 가능한 상태임을 경고했습니다.

[Impact Assessment] 이 취약점은 비디오 피드에 대한 무단 모니터링을 통한 민감 정보 유출뿐만 아니라, 공격자가 장치의 관리 제어권을 획득하여 네트워크 내부 침투를 위한 거점으로 활용할 위험을 내포하고 있습니다. 특히 제조사가 CISA의 조정 요청에 응답하지 않아 공식적인 패치가 부재한 상황이므로, 노출된 장치들은 지속적으로 고위험 상태에 놓여 있습니다.

[Recommendations] 사용자는 즉시 장치를 인터넷으로부터 격리하고 방화벽 뒤의 폐쇄된 네트워크에 배치해야 합니다. 원격 접속이 반드시 필요한 경우 최신 보안 패치가 적용된 VPN을 사용해야 하며, 무엇보다 기본 비밀번호를 강력한 고유 암호로 즉시 변경해야 합니다. 또한 침입 탐지 시스템(IDS)을 통해 비정상적인 ONVIF 트래픽 유입을 모니터링할 것을 권고합니다.

**Severity**: HIGH (8.3/10)
**Tags**: IoT Security, Default Credentials, CISA Advisory, IP Camera, Critical Infrastructure

## Analysis
[Executive Overview] 대만 소재의 네트워크 카메라 제조업체인 Brickcom의 Cube, Dome, Bullet, Box 등 주요 IP 카메라 모델에서 심각한 보안 취약점이 발견되었습니다. 해당 장치들은 전 세계 상업 시설, 제조, 금융, 의료 및 공공 보건 등 주요 기반 시설 섹터에 널리 배치되어 있어, 익스플로잇 성공 시 심각한 물리적 및 논리적 보안 위협을 초래할 수 있습니다.

[Threat Analysis] 주요 취약점은 두 가지로 분류됩니다. CVE-2026-50245는 /ONVIF 엔드포인트를 통한 인증 없는 실시간 스냅샷 접근(CWE-306)을 허용하며, CVE-2026-50005는 기기 출하 시 설정된 기본 자격 증명(CWE-1392)을 악용하여 공격자가 시스템에 무단 접속할 수 있도록 합니다. CISA는 parsa rezaie khiabanloo가 작성한 개념 증명(PoC) 코드를 확인했으며, 공격자가 기술적 장벽 없이 원격에서 영상 피드 탈취 및 관리자 권한 획득이 가능한 상태임을 경고했습니다.

[Impact Assessment] 이 취약점은 비디오 피드에 대한 무단 모니터링을 통한 민감 정보 유출뿐만 아니라, 공격자가 장치의 관리 제어권을 획득하여 네트워크 내부 침투를 위한 거점으로 활용할 위험을 내포하고 있습니다. 특히 제조사가 CISA의 조정 요청에 응답하지 않아 공식적인 패치가 부재한 상황이므로, 노출된 장치들은 지속적으로 고위험 상태에 놓여 있습니다.

[Recommendations] 사용자는 즉시 장치를 인터넷으로부터 격리하고 방화벽 뒤의 폐쇄된 네트워크에 배치해야 합니다. 원격 접속이 반드시 필요한 경우 최신 보안 패치가 적용된 VPN을 사용해야 하며, 무엇보다 기본 비밀번호를 강력한 고유 암호로 즉시 변경해야 합니다. 또한 침입 탐지 시스템(IDS)을 통해 비정상적인 ONVIF 트래픽 유입을 모니터링할 것을 권고합니다.


## References
1. CISA, ICSA-26-162-03: Brickcom Cameras, 2026
2. CVE-2026-50245
3. CVE-2026-50005
4. MITRE ATT&CK: T1078.001 (Valid Accounts: Default Accounts)
5. Cui et al., Defeating the Management Interface of Embedded Devices, USENIX Security, 2010
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-162-03)
    