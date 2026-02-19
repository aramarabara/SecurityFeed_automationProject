
# EnOcean SmartServer IoT

> EnOcean Edge의 SmartServer IoT 제품에서 치명적인 보안 취약점이 발견되었습니다. 이 장치는 산업용 IoT 및 스마트 빌딩 자동화의 핵심 구성 요소로, LON(Local Operating Network) 프로토콜을 처리하는 게이트웨이 역할을 수행합니다. 발견된 취약점들은 공격자가 원격에서 장치의 제어권을 완전히 획득하거나 보안 메커니즘을 무력화할 수 있는 경로를 제공하여 스마트 인프라의 안정성을 심각하게 위협합니다.

취약점 분석 결과, LON IP-852 관리 메시지 처리 로직에서 발생하는 두 가지 주요 결함이 확인되었습니다. CVE-2026-20761은 부적절한 입력 검증으로 인한 커맨드 인젝션 취약점으로, 특수하게 조작된 IP-852 메시지를 통해 OS 수준의 임의 명령 실행이 가능합니다. CVE-2026-22885는 범위를 벗어난 읽기(Out-of-bounds Read) 취약점으로, 프로그램 메모리 유출을 유도하여 ASLR과 같은 메모리 보호 기법을 우회하는 데 악용될 수 있습니다. 공격자는 이 두 취약점을 결합하여 공격의 성공률과 파괴력을 극대화할 수 있습니다.

영향 평가 측면에서, 전 세계 IT 및 중요 인프라 부문에 도입된 SmartServer IoT 버전 4.60.009 이하 제품들이 공격 노출 상태에 있습니다. 취약점 악용에 성공할 경우 공격자는 건물의 자동화 시스템을 조작하거나 네트워크 내에서 측면 이동(Lateral Movement)을 위한 거점을 확보할 수 있습니다. 이는 물리적 보안 시스템의 무력화나 기밀 데이터 유출로 이어질 수 있어 즉각적인 대응이 요구됩니다.

대응 방안으로 EnOcean은 SmartServer 4.6 Update 2(v4.60.023) 이상으로의 즉시 업데이트를 강력히 권고합니다. 또한 제어 시스템 장치를 인터넷에 직접 노출하지 않도록 네트워크 격리를 실시하고, 방화벽 및 VPN을 활용한 보안 접속 체계를 구축해야 합니다. 조직은 심층 방어(Defense-in-Depth) 전략에 따라 자산의 노출도를 최소화하고 비정상적인 트래픽에 대한 실시간 모니터링을 강화해야 합니다.

**Severity**: HIGH (8.1/10)
**Tags**: IoT Security, Remote Code Execution, Industrial Control Systems, Command Injection, Patch Management

## Analysis
EnOcean Edge의 SmartServer IoT 제품에서 치명적인 보안 취약점이 발견되었습니다. 이 장치는 산업용 IoT 및 스마트 빌딩 자동화의 핵심 구성 요소로, LON(Local Operating Network) 프로토콜을 처리하는 게이트웨이 역할을 수행합니다. 발견된 취약점들은 공격자가 원격에서 장치의 제어권을 완전히 획득하거나 보안 메커니즘을 무력화할 수 있는 경로를 제공하여 스마트 인프라의 안정성을 심각하게 위협합니다.

취약점 분석 결과, LON IP-852 관리 메시지 처리 로직에서 발생하는 두 가지 주요 결함이 확인되었습니다. CVE-2026-20761은 부적절한 입력 검증으로 인한 커맨드 인젝션 취약점으로, 특수하게 조작된 IP-852 메시지를 통해 OS 수준의 임의 명령 실행이 가능합니다. CVE-2026-22885는 범위를 벗어난 읽기(Out-of-bounds Read) 취약점으로, 프로그램 메모리 유출을 유도하여 ASLR과 같은 메모리 보호 기법을 우회하는 데 악용될 수 있습니다. 공격자는 이 두 취약점을 결합하여 공격의 성공률과 파괴력을 극대화할 수 있습니다.

영향 평가 측면에서, 전 세계 IT 및 중요 인프라 부문에 도입된 SmartServer IoT 버전 4.60.009 이하 제품들이 공격 노출 상태에 있습니다. 취약점 악용에 성공할 경우 공격자는 건물의 자동화 시스템을 조작하거나 네트워크 내에서 측면 이동(Lateral Movement)을 위한 거점을 확보할 수 있습니다. 이는 물리적 보안 시스템의 무력화나 기밀 데이터 유출로 이어질 수 있어 즉각적인 대응이 요구됩니다.

대응 방안으로 EnOcean은 SmartServer 4.6 Update 2(v4.60.023) 이상으로의 즉시 업데이트를 강력히 권고합니다. 또한 제어 시스템 장치를 인터넷에 직접 노출하지 않도록 네트워크 격리를 실시하고, 방화벽 및 VPN을 활용한 보안 접속 체계를 구축해야 합니다. 조직은 심층 방어(Defense-in-Depth) 전략에 따라 자산의 노출도를 최소화하고 비정상적인 트래픽에 대한 실시간 모니터링을 강화해야 합니다.


## References
1. CVE-2026-20761
2. CVE-2026-22885
3. CISA Advisory ICSA-26-050-01, EnOcean SmartServer IoT, 2026
4. MITRE ATT&CK: T1210 - Exploitation of Remote Services
5. Amir Zaltzman, Research on Industrial Gateway Vulnerabilities, Claroty Team82 Report, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-01)
    