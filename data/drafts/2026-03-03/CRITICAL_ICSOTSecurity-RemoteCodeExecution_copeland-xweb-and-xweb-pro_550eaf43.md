
# Copeland XWEB and XWEB Pro

> [Executive Overview] Copeland의 XWEB 및 XWEB Pro 제품군에서 인증 우회 및 원격 코드 실행(RCE)이 가능한 20개 이상의 보안 취약점이 발견되었습니다. 전 세계 상업 시설의 모니터링 및 제어에 널리 사용되는 이 장치들은 Claroty Team82의 연구를 통해 공격 표면이 매우 넓은 것으로 드러났으며, 이는 산업 제어 시스템(ICS) 환경에서 물리적 피해로 이어질 수 있는 중대한 위협입니다. [Threat Analysis] 이번 취약점들은 CVSS 점수 10.0을 기록한 CVE-2026-21718(인증 우회)과 다수의 OS 커맨드 인젝션(CVE-2026-24663 등)을 포함합니다. 공격자는 펌웨어 업데이트, 라이브러리 설치 또는 연락처 가져오기 경로 등에 조작된 요청을 전송하여 인증 없이 시스템 권한을 획득하고 임의의 코드를 실행할 수 있습니다. 또한 스택 기반 버퍼 오버플로우와 경로 탐색 취약점은 서비스 거부(DoS)나 데이터 탈취를 가능하게 합니다. [Impact Assessment] 공격자가 XWEB 장치의 제어권을 획득할 경우, 냉동 및 공조 시스템의 설정을 임의로 변경하여 물리적 자산의 손상이나 운영 중단을 초래할 수 있습니다. 특히 이러한 OT 장치들은 종종 IT 네트워크와 연결되어 있어, 공격자가 기업 내부망으로 침투하기 위한 초기 거점으로 악용될 위험이 매우 높습니다. [Recommendations] 사용자는 즉시 Copeland 소프트웨어 업데이트 페이지를 통해 1.12.1 이후의 최신 버전으로 패치를 적용해야 합니다. 또한 보안 강화를 위해 ICS 장치를 인터넷에서 격리하고, 방화벽을 통한 네트워크 세분화를 실행하며, 모든 원격 접속에는 보안이 검증된 VPN을 사용해야 하는 심층 방어(Defense-in-Depth) 전략이 필수적입니다.

**Severity**: CRITICAL (10/10)
**Tags**: ICS/OT Security, Remote Code Execution, Authentication Bypass, Copeland XWEB, Claroty Team82

## Analysis
[Executive Overview] Copeland의 XWEB 및 XWEB Pro 제품군에서 인증 우회 및 원격 코드 실행(RCE)이 가능한 20개 이상의 보안 취약점이 발견되었습니다. 전 세계 상업 시설의 모니터링 및 제어에 널리 사용되는 이 장치들은 Claroty Team82의 연구를 통해 공격 표면이 매우 넓은 것으로 드러났으며, 이는 산업 제어 시스템(ICS) 환경에서 물리적 피해로 이어질 수 있는 중대한 위협입니다. [Threat Analysis] 이번 취약점들은 CVSS 점수 10.0을 기록한 CVE-2026-21718(인증 우회)과 다수의 OS 커맨드 인젝션(CVE-2026-24663 등)을 포함합니다. 공격자는 펌웨어 업데이트, 라이브러리 설치 또는 연락처 가져오기 경로 등에 조작된 요청을 전송하여 인증 없이 시스템 권한을 획득하고 임의의 코드를 실행할 수 있습니다. 또한 스택 기반 버퍼 오버플로우와 경로 탐색 취약점은 서비스 거부(DoS)나 데이터 탈취를 가능하게 합니다. [Impact Assessment] 공격자가 XWEB 장치의 제어권을 획득할 경우, 냉동 및 공조 시스템의 설정을 임의로 변경하여 물리적 자산의 손상이나 운영 중단을 초래할 수 있습니다. 특히 이러한 OT 장치들은 종종 IT 네트워크와 연결되어 있어, 공격자가 기업 내부망으로 침투하기 위한 초기 거점으로 악용될 위험이 매우 높습니다. [Recommendations] 사용자는 즉시 Copeland 소프트웨어 업데이트 페이지를 통해 1.12.1 이후의 최신 버전으로 패치를 적용해야 합니다. 또한 보안 강화를 위해 ICS 장치를 인터넷에서 격리하고, 방화벽을 통한 네트워크 세분화를 실행하며, 모든 원격 접속에는 보안이 검증된 VPN을 사용해야 하는 심층 방어(Defense-in-Depth) 전략이 필수적입니다.


## References
1. CISA Advisory ICSA-26-057-10, Copeland XWEB and XWEB Pro, 2026
2. CVE-2026-21718
3. CVE-2026-24663
4. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
5. NIST, SP 800-82 Rev. 3 - Guide to Industrial Control Systems (ICS) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-10)
    