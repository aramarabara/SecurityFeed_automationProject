
# EnOcean SmartServer IoT

> [Executive Overview] EnOcean SmartServer IoT 플랫폼에서 발견된 두 개의 보안 취약점(CVE-2026-20761, CVE-2026-22885)은 스마트 빌딩 및 산업 자동화 환경에 심각한 위협을 초래합니다. 이 장치는 다양한 IoT 프로토콜을 통합 관리하는 핵심 게이트웨이로, 취약점 악용 시 원격 공격자가 시스템 제어권을 완전히 장악할 수 있습니다. [Threat Analysis] 주요 위협은 LON IP-852 관리 메시지 처리 로직의 결함에서 기인합니다. CVE-2026-20761은 커맨드 인젝션(Command Injection) 취약점으로, 조작된 메시지를 통해 OS 수준의 임의 명령 실행을 허용합니다. CVE-2026-22885는 범위 외 읽기(Out-of-bounds Read)를 유발하여 메모리 데이터를 유출시키며, 이는 ASLR과 같은 최신 보안 방어 체계를 무력화하는 데 사용될 수 있습니다. [Impact Assessment] 전 세계 정보 기술 및 핵심 인프라 분야에 도입된 해당 장치가 공격을 받을 경우, 건물 자동화 시스템의 오작동이나 중단은 물론, 내부망 침투를 위한 교두보로 악용될 수 있습니다. 특히 인증되지 않은 원격 공격자가 공격을 수행할 수 있다는 점이 위험 요소입니다. [Recommendations] 관리자는 즉시 시스템을 SmartServer 4.6 Update 2 (v4.60.023) 이상 버전으로 업데이트해야 합니다. 또한 장치를 인터넷에 직접 노출하지 말고, 방화벽과 VPN을 활용한 네트워크 격리 및 심층 방어(Defense-in-Depth) 전략을 적용할 것을 강력히 권고합니다.

**Severity**: HIGH (8.1/10)
**Tags**: IoT Security, RCE, Command Injection, ICS/SCADA, Patch

## Analysis
[Executive Overview] EnOcean SmartServer IoT 플랫폼에서 발견된 두 개의 보안 취약점(CVE-2026-20761, CVE-2026-22885)은 스마트 빌딩 및 산업 자동화 환경에 심각한 위협을 초래합니다. 이 장치는 다양한 IoT 프로토콜을 통합 관리하는 핵심 게이트웨이로, 취약점 악용 시 원격 공격자가 시스템 제어권을 완전히 장악할 수 있습니다. [Threat Analysis] 주요 위협은 LON IP-852 관리 메시지 처리 로직의 결함에서 기인합니다. CVE-2026-20761은 커맨드 인젝션(Command Injection) 취약점으로, 조작된 메시지를 통해 OS 수준의 임의 명령 실행을 허용합니다. CVE-2026-22885는 범위 외 읽기(Out-of-bounds Read)를 유발하여 메모리 데이터를 유출시키며, 이는 ASLR과 같은 최신 보안 방어 체계를 무력화하는 데 사용될 수 있습니다. [Impact Assessment] 전 세계 정보 기술 및 핵심 인프라 분야에 도입된 해당 장치가 공격을 받을 경우, 건물 자동화 시스템의 오작동이나 중단은 물론, 내부망 침투를 위한 교두보로 악용될 수 있습니다. 특히 인증되지 않은 원격 공격자가 공격을 수행할 수 있다는 점이 위험 요소입니다. [Recommendations] 관리자는 즉시 시스템을 SmartServer 4.6 Update 2 (v4.60.023) 이상 버전으로 업데이트해야 합니다. 또한 장치를 인터넷에 직접 노출하지 말고, 방화벽과 VPN을 활용한 네트워크 격리 및 심층 방어(Defense-in-Depth) 전략을 적용할 것을 강력히 권고합니다.


## References
1. CVE-2026-20761
2. CVE-2026-22885
3. CISA Advisory ICSA-26-050-01: EnOcean SmartServer IoT, 2026
4. MITRE ATT&CK: T1210 (Exploitation of Remote Services)
5. Amir Zaltzman et al., Claroty Team82 Security Research, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-01)
    