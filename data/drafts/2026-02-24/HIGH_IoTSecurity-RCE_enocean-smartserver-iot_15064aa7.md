
# EnOcean SmartServer IoT

> [Executive Overview] EnOcean SmartServer IoT 플랫폼에서 원격 코드 실행(RCE) 및 메모리 유출이 가능한 심각한 보안 취약점이 발견되었습니다. 이 장치는 전 세계 산업용 IoT 및 빌딩 자동화 시스템의 핵심 게이트웨이로 사용되고 있어, 공격자가 이를 장악할 경우 하위 제어 네트워크 전체에 대한 심각한 위협으로 발전할 수 있는 비즈니스 크리티컬한 이슈입니다.

[Threat Analysis] 핵심 취약점인 CVE-2026-20761은 LON IP-852 관리 메시지 처리 과정에서 발생하는 명령 주입(Command Injection) 결함입니다. 공격자는 특수하게 조작된 IP-852 메시지를 전송하여 장치 내 OS 수준의 임의 명령을 실행할 수 있습니다. 보조 취약점인 CVE-2026-22885(Out-of-bounds Read)는 메모리 데이터를 노출시켜 ASLR과 같은 메모리 보호 기법을 우회하는 데 악용될 수 있습니다. 공격 복잡도는 높으나, 성공 시 공격자가 시스템의 전체 권한을 획득할 수 있다는 점이 특징입니다.

[Impact Assessment] 해당 취약점은 버전 4.60.009 이하의 모든 EnOcean SmartServer IoT 장치에 영향을 미치며, 전 세계 IT 및 주요 인프라 부문에 도입된 자산들이 잠재적 공격 대상입니다. 취약한 장치가 인터넷에 노출되어 있을 경우, 외부 공격자에 의해 물리적 공정 제어 방해, 데이터 탈취 및 내부망 침투를 위한 교두보로 악용될 수 있어 파급 효과가 매우 큽니다.

[Recommendations] 조직의 보안 관리자는 즉시 SmartServer 소프트웨어를 최신 버전인 v4.60.023 이상으로 업데이트해야 합니다. 기술적 패치와 더불어, 제어 시스템 네트워크를 업무용 네트워크 및 인터넷으로부터 물리적/논리적으로 격리하는 네트워크 세그멘테이션(Segmentation)을 강화해야 합니다. 또한, VPN 사용 시 최신 보안 버전을 유지하고 EnOcean의 공식 보안 가이드(Hardening Guide)를 준수할 것을 권고합니다.

**Severity**: HIGH (8.1/10)
**Tags**: IoT Security, RCE, Command Injection, ICS/OT, Patch Management

## Analysis
[Executive Overview] EnOcean SmartServer IoT 플랫폼에서 원격 코드 실행(RCE) 및 메모리 유출이 가능한 심각한 보안 취약점이 발견되었습니다. 이 장치는 전 세계 산업용 IoT 및 빌딩 자동화 시스템의 핵심 게이트웨이로 사용되고 있어, 공격자가 이를 장악할 경우 하위 제어 네트워크 전체에 대한 심각한 위협으로 발전할 수 있는 비즈니스 크리티컬한 이슈입니다.

[Threat Analysis] 핵심 취약점인 CVE-2026-20761은 LON IP-852 관리 메시지 처리 과정에서 발생하는 명령 주입(Command Injection) 결함입니다. 공격자는 특수하게 조작된 IP-852 메시지를 전송하여 장치 내 OS 수준의 임의 명령을 실행할 수 있습니다. 보조 취약점인 CVE-2026-22885(Out-of-bounds Read)는 메모리 데이터를 노출시켜 ASLR과 같은 메모리 보호 기법을 우회하는 데 악용될 수 있습니다. 공격 복잡도는 높으나, 성공 시 공격자가 시스템의 전체 권한을 획득할 수 있다는 점이 특징입니다.

[Impact Assessment] 해당 취약점은 버전 4.60.009 이하의 모든 EnOcean SmartServer IoT 장치에 영향을 미치며, 전 세계 IT 및 주요 인프라 부문에 도입된 자산들이 잠재적 공격 대상입니다. 취약한 장치가 인터넷에 노출되어 있을 경우, 외부 공격자에 의해 물리적 공정 제어 방해, 데이터 탈취 및 내부망 침투를 위한 교두보로 악용될 수 있어 파급 효과가 매우 큽니다.

[Recommendations] 조직의 보안 관리자는 즉시 SmartServer 소프트웨어를 최신 버전인 v4.60.023 이상으로 업데이트해야 합니다. 기술적 패치와 더불어, 제어 시스템 네트워크를 업무용 네트워크 및 인터넷으로부터 물리적/논리적으로 격리하는 네트워크 세그멘테이션(Segmentation)을 강화해야 합니다. 또한, VPN 사용 시 최신 보안 버전을 유지하고 EnOcean의 공식 보안 가이드(Hardening Guide)를 준수할 것을 권고합니다.


## References
1. CVE-2026-20761
2. CVE-2026-22885
3. CISA, ICSA-26-050-01: EnOcean SmartServer IoT, 2026
4. MITRE ATT&CK: T1210 - Exploitation of Remote Services
5. Claroty Team82, Vulnerability Research on LON IP-852 Protocol Implementation, Claroty, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-01)
    