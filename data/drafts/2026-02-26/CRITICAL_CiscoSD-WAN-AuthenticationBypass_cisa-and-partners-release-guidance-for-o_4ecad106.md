
# CISA and Partners Release Guidance for Ongoing Global Exploitation of Cisco SD-WAN Systems

> 미 사이버보안 및 인프라 보안국(CISA)과 NSA를 포함한 국제 파트너들은 Cisco SD-WAN 시스템을 대상으로 한 전 세계적인 사이버 공격 활동에 대해 긴급 경보를 발령했습니다. 이번 위협은 기업 네트워크의 핵심 허브 역할을 하는 SD-WAN 컨트롤러를 표적으로 삼고 있으며, 공격자가 네트워크 트래픽 전체를 제어하거나 장기적인 침투를 유지할 수 있다는 점에서 그 위험성이 매우 높습니다. 특히 CISA는 해당 취약점들을 '알려진 악용된 취약점(KEV)' 목록에 추가하고 연방 민간 행정부(FCEB) 기관에 긴급 지침(ED 26-03)을 하달하여 즉각적인 조치를 요구했습니다.

기술적으로 공격자들은 취약점 체이닝(Vulnerability Chaining) 기법을 사용합니다. 먼저 인증 우회 취약점인 CVE-2026-20127을 통해 시스템에 초기 접근한 뒤, 연이어 권한 상승 취약점인 CVE-2022-20775를 악용하여 관리자 권한을 획득합니다. 이러한 과정은 공격자가 시스템 내에서 장기적인 지속성(Persistence)을 확보하고 탐지를 회피하며 네트워크 내부로 확산하기 위한 고도화된 위협(APT) 전략의 일환으로 분석됩니다.

이번 취약점 악용으로 인해 Cisco SD-WAN을 사용하는 전 세계 정부 기관 및 기업들이 직접적인 위협에 노출되었습니다. SD-WAN 시스템이 침해될 경우, 공격자는 암호화된 트래픽을 가로채거나 네트워크 경로를 조작하여 중간자 공격(MitM)을 수행할 수 있습니다. 이는 기밀 데이터 유출뿐만 아니라 국가 안보와 직결된 인프라의 운영 중단을 초래할 수 있는 심각한 위협입니다.

대응을 위해 모든 조직은 즉시 보유 중인 Cisco SD-WAN 시스템 자산을 전수 조사하고 가용한 모든 패치를 즉각 적용해야 합니다. 또한 CISA와 파트너사가 배포한 '위협 헌팅 가이드'를 활용하여 가상 스냅샷 및 로그 분석을 통한 침해 흔적 조사를 수행해야 합니다. 네트워크 경계 보안 강화, VPN 인터페이스 격리, 원격 Syslog 서버 활용 등 Cisco의 하드닝 가이드를 준수하는 것이 향후 추가적인 피해를 예방하는 데 필수적입니다.

**Severity**: CRITICAL (9/10)
**Tags**: Cisco SD-WAN, Authentication Bypass, Privilege Escalation, CISA KEV, APT

## Analysis
미 사이버보안 및 인프라 보안국(CISA)과 NSA를 포함한 국제 파트너들은 Cisco SD-WAN 시스템을 대상으로 한 전 세계적인 사이버 공격 활동에 대해 긴급 경보를 발령했습니다. 이번 위협은 기업 네트워크의 핵심 허브 역할을 하는 SD-WAN 컨트롤러를 표적으로 삼고 있으며, 공격자가 네트워크 트래픽 전체를 제어하거나 장기적인 침투를 유지할 수 있다는 점에서 그 위험성이 매우 높습니다. 특히 CISA는 해당 취약점들을 '알려진 악용된 취약점(KEV)' 목록에 추가하고 연방 민간 행정부(FCEB) 기관에 긴급 지침(ED 26-03)을 하달하여 즉각적인 조치를 요구했습니다.

기술적으로 공격자들은 취약점 체이닝(Vulnerability Chaining) 기법을 사용합니다. 먼저 인증 우회 취약점인 CVE-2026-20127을 통해 시스템에 초기 접근한 뒤, 연이어 권한 상승 취약점인 CVE-2022-20775를 악용하여 관리자 권한을 획득합니다. 이러한 과정은 공격자가 시스템 내에서 장기적인 지속성(Persistence)을 확보하고 탐지를 회피하며 네트워크 내부로 확산하기 위한 고도화된 위협(APT) 전략의 일환으로 분석됩니다.

이번 취약점 악용으로 인해 Cisco SD-WAN을 사용하는 전 세계 정부 기관 및 기업들이 직접적인 위협에 노출되었습니다. SD-WAN 시스템이 침해될 경우, 공격자는 암호화된 트래픽을 가로채거나 네트워크 경로를 조작하여 중간자 공격(MitM)을 수행할 수 있습니다. 이는 기밀 데이터 유출뿐만 아니라 국가 안보와 직결된 인프라의 운영 중단을 초래할 수 있는 심각한 위협입니다.

대응을 위해 모든 조직은 즉시 보유 중인 Cisco SD-WAN 시스템 자산을 전수 조사하고 가용한 모든 패치를 즉각 적용해야 합니다. 또한 CISA와 파트너사가 배포한 '위협 헌팅 가이드'를 활용하여 가상 스냅샷 및 로그 분석을 통한 침해 흔적 조사를 수행해야 합니다. 네트워크 경계 보안 강화, VPN 인터페이스 격리, 원격 Syslog 서버 활용 등 Cisco의 하드닝 가이드를 준수하는 것이 향후 추가적인 피해를 예방하는 데 필수적입니다.


## References
1. CVE-2026-20127
2. CVE-2022-20775
3. CISA, Emergency Directive (ED) 26-03: Mitigate Vulnerabilities in Cisco SD-WAN Systems, 2026
4. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
5. Cisco Systems, Cisco Catalyst SD-WAN Hardening Guide, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/alerts/2026/02/25/cisa-and-partners-release-guidance-ongoing-global-exploitation-cisco-sd-wan-systems)
    