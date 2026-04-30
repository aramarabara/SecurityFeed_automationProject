
# ABB Edgenius Management Portal

> [Executive Overview] ABB Edgenius Management Portal에서 심각한 수준의 인증 우회 취약점이 발견되어 산업 제어 시스템(ICS) 환경의 보안 위협이 고조되고 있습니다. Edgenius는 산업용 엣지 컴퓨팅 데이터 관리 솔루션으로, 전 세계 제조 및 IT 인프라에서 핵심적인 역할을 수행합니다. 이번 취약점(CVE-2025-10571)은 공격자가 별도의 인증 과정 없이 시스템에 침투할 수 있는 통로를 제공하므로 자산 가용성과 운영 연속성에 치명적인 위협이 됩니다. [Threat Analysis] 해당 취약점은 CWE-288(대체 경로 또는 채널을 이용한 인증 우회)로 분류됩니다. 공격자는 인접한 네트워크 내에서 특수하게 제작된 메시지를 시스템 노드에 전송함으로써 인증 메커니즘을 완전히 무력화할 수 있습니다. 이를 통해 공격자는 시스템에 대한 높은 수준의 권한을 획득하여 임의의 코드를 실행(RCE)하거나, 기존 애플리케이션을 삭제하고 설정을 임의로 변경할 수 있는 기술적 토대를 마련하게 됩니다. [Impact Assessment] 취약점 악용 시 공격자는 산업 현장의 엣지 노드를 완전히 장악할 수 있습니다. 이는 생산 공정의 중단, 데이터 변조, 산업 기밀 유출과 같은 심각한 결과로 이어지며, 특히 전 세계적인 배포 특성상 광범위한 산업망에 파급 효과를 미칠 수 있습니다. CVSS 9.6의 높은 점수는 이 취약점이 복잡한 공격 조건 없이도 시스템의 기밀성, 무결성, 가용성을 모두 파괴할 수 있음을 시사합니다. [Recommendations] 최우선적으로 ABB에서 제공하는 보안 업데이트인 Edgenius 버전 3.2.2.0으로 업그레이드할 것을 권고합니다. 패치 적용 전까지는 Management Portal 서비스를 비활성화하여 공격 표면을 제거해야 합니다. 또한 방화벽을 통한 네트워크 격리, 제어망과 비즈니스망의 물리적 분리, VPN 사용 시 다요소 인증(MFA) 도입 등 심층 방어(Defense-in-Depth) 전략을 준수해야 합니다.

**Severity**: CRITICAL (9.6/10)
**Tags**: Industrial Control Systems, Authentication Bypass, CVE-2025-10571, ABB Edgenius, Remote Code Execution

## Analysis
[Executive Overview] ABB Edgenius Management Portal에서 심각한 수준의 인증 우회 취약점이 발견되어 산업 제어 시스템(ICS) 환경의 보안 위협이 고조되고 있습니다. Edgenius는 산업용 엣지 컴퓨팅 데이터 관리 솔루션으로, 전 세계 제조 및 IT 인프라에서 핵심적인 역할을 수행합니다. 이번 취약점(CVE-2025-10571)은 공격자가 별도의 인증 과정 없이 시스템에 침투할 수 있는 통로를 제공하므로 자산 가용성과 운영 연속성에 치명적인 위협이 됩니다. [Threat Analysis] 해당 취약점은 CWE-288(대체 경로 또는 채널을 이용한 인증 우회)로 분류됩니다. 공격자는 인접한 네트워크 내에서 특수하게 제작된 메시지를 시스템 노드에 전송함으로써 인증 메커니즘을 완전히 무력화할 수 있습니다. 이를 통해 공격자는 시스템에 대한 높은 수준의 권한을 획득하여 임의의 코드를 실행(RCE)하거나, 기존 애플리케이션을 삭제하고 설정을 임의로 변경할 수 있는 기술적 토대를 마련하게 됩니다. [Impact Assessment] 취약점 악용 시 공격자는 산업 현장의 엣지 노드를 완전히 장악할 수 있습니다. 이는 생산 공정의 중단, 데이터 변조, 산업 기밀 유출과 같은 심각한 결과로 이어지며, 특히 전 세계적인 배포 특성상 광범위한 산업망에 파급 효과를 미칠 수 있습니다. CVSS 9.6의 높은 점수는 이 취약점이 복잡한 공격 조건 없이도 시스템의 기밀성, 무결성, 가용성을 모두 파괴할 수 있음을 시사합니다. [Recommendations] 최우선적으로 ABB에서 제공하는 보안 업데이트인 Edgenius 버전 3.2.2.0으로 업그레이드할 것을 권고합니다. 패치 적용 전까지는 Management Portal 서비스를 비활성화하여 공격 표면을 제거해야 합니다. 또한 방화벽을 통한 네트워크 격리, 제어망과 비즈니스망의 물리적 분리, VPN 사용 시 다요소 인증(MFA) 도입 등 심층 방어(Defense-in-Depth) 전략을 준수해야 합니다.


## References
1. CVE-2025-10571
2. CISA Advisory: ICSA-26-120-03
3. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
4. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST SP 800-82, 2015
5. ABB PSIRT Advisory: 7PAA022088
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-120-03)
    