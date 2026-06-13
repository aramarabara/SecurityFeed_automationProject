
# Brickcom Cameras

> [Executive Overview] 대만 소재의 IP 카메라 제조사인 Brickcom의 주요 제품군(Cube, Dome, Bullet, Box)에서 인증 우회 및 기본 자격 증명 사용을 포함한 심각한 보안 취약점이 발견되었습니다. CISA의 권고문(ICSA-26-162-03)에 따르면, 해당 취약점들은 공격자가 별도의 인증 절차 없이 실시간 비디오 피드에 접근하거나 장치의 행정적 제어권을 획득할 수 있게 하여 전 세계 주요 인프라 시설의 물리적 보안에 심각한 위협을 초래하고 있습니다. [Threat Analysis] 기술적으로 CVE-2026-50245(CWE-306)는 /ONVIF 엔드포인트를 통해 인증 없이 스냅샷 이미지를 추출할 수 있는 결함이며, CVE-2026-50005(CWE-1392)는 공장 출고 시 설정된 기본 계정 정보를 악용하여 장치에 침투할 수 있는 취약점입니다. 공격자는 이를 연계하여 원격에서 장치를 완전히 장악하거나 모니터링 시스템을 무력화할 수 있으며, CISA는 해당 취약점에 대한 개념 증명(PoC) 코드가 존재함을 확인했습니다. [Impact Assessment] 영향 범위는 상업 시설, 의료, 금융 및 중요 제조 부문 등 광범위하며, 전 세계적으로 배치된 3.2.3.5.6 버전의 기기들이 잠재적인 침해 대상입니다. 단순한 영상 유출을 넘어 공격자가 내부 네트워크 침투를 위한 교두보(Pivot point)로 활용할 수 있어, 기업 및 국가 중요 시설의 기밀 유출 및 운영 중단 가능성이 매우 높습니다. [Recommendations] 현재 제조사의 공식 패치가 제공되지 않고 있으므로, 사용자는 장치를 인터넷에서 분리하고 방화벽 뒤의 격리된 네트워크에 배치해야 합니다. 원격 접속이 필요한 경우 반드시 최신 버전의 VPN을 사용하고, 가능한 경우 기본 자격 증명을 즉시 변경해야 합니다. 또한, CISA의 ICS 방어 전략(Defense-in-Depth)을 적용하여 다계층 보안 체계를 구축할 것을 권고합니다.

**Severity**: HIGH (8.3/10)
**Tags**: IoT Security, CISA Advisory, Default Credentials, Critical Infrastructure, Unpatched

## Analysis
[Executive Overview] 대만 소재의 IP 카메라 제조사인 Brickcom의 주요 제품군(Cube, Dome, Bullet, Box)에서 인증 우회 및 기본 자격 증명 사용을 포함한 심각한 보안 취약점이 발견되었습니다. CISA의 권고문(ICSA-26-162-03)에 따르면, 해당 취약점들은 공격자가 별도의 인증 절차 없이 실시간 비디오 피드에 접근하거나 장치의 행정적 제어권을 획득할 수 있게 하여 전 세계 주요 인프라 시설의 물리적 보안에 심각한 위협을 초래하고 있습니다. [Threat Analysis] 기술적으로 CVE-2026-50245(CWE-306)는 /ONVIF 엔드포인트를 통해 인증 없이 스냅샷 이미지를 추출할 수 있는 결함이며, CVE-2026-50005(CWE-1392)는 공장 출고 시 설정된 기본 계정 정보를 악용하여 장치에 침투할 수 있는 취약점입니다. 공격자는 이를 연계하여 원격에서 장치를 완전히 장악하거나 모니터링 시스템을 무력화할 수 있으며, CISA는 해당 취약점에 대한 개념 증명(PoC) 코드가 존재함을 확인했습니다. [Impact Assessment] 영향 범위는 상업 시설, 의료, 금융 및 중요 제조 부문 등 광범위하며, 전 세계적으로 배치된 3.2.3.5.6 버전의 기기들이 잠재적인 침해 대상입니다. 단순한 영상 유출을 넘어 공격자가 내부 네트워크 침투를 위한 교두보(Pivot point)로 활용할 수 있어, 기업 및 국가 중요 시설의 기밀 유출 및 운영 중단 가능성이 매우 높습니다. [Recommendations] 현재 제조사의 공식 패치가 제공되지 않고 있으므로, 사용자는 장치를 인터넷에서 분리하고 방화벽 뒤의 격리된 네트워크에 배치해야 합니다. 원격 접속이 필요한 경우 반드시 최신 버전의 VPN을 사용하고, 가능한 경우 기본 자격 증명을 즉시 변경해야 합니다. 또한, CISA의 ICS 방어 전략(Defense-in-Depth)을 적용하여 다계층 보안 체계를 구축할 것을 권고합니다.


## References
1. CVE-2026-50245
2. CVE-2026-50005
3. CISA, ICSA-26-162-03: Brickcom Cameras, 2026
4. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
5. MITRE ATT&CK: T1078 - Valid Accounts
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-162-03)
    