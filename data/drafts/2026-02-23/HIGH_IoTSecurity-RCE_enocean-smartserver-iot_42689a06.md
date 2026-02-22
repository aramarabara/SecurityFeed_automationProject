
# EnOcean SmartServer IoT

> [Executive Overview] EnOcean Edge Inc.의 SmartServer IoT 플랫폼에서 원격 코드 실행(RCE) 및 정보 유출을 허용하는 심각한 보안 취약점이 발견되었습니다. 해당 장치는 전 세계 산업 제어 시스템(ICS) 및 IT 인프라에서 데이터 통합 및 관리를 위해 널리 사용되고 있어, 이번 취약점 노출은 중요 인프라에 대한 잠재적인 공격 벡터가 될 수 있습니다. [Threat Analysis] 식별된 취약점은 LON IP-852 관리 메시지 처리 로직의 결함에서 기인합니다. CVE-2026-20761은 적절한 검증 없이 외부 입력을 시스템 명령어로 처리하는 커맨드 인젝션 취약점이며, CVE-2026-22885는 메모리 영역을 벗어난 읽기를 유발하여 민감한 메모리 데이터를 노출시키는 취약점입니다. 공격자는 특수하게 제작된 IP-852 메시지를 전송하여 ASLR 보안 기능을 우회하고 원격에서 임의의 OS 명령을 실행할 수 있습니다. [Impact Assessment] 공격 성공 시 공격자는 IoT 게이트웨이에 대한 완전한 제어권을 획득할 수 있으며, 이를 통해 연결된 산업용 센서 및 제어 네트워크에 침투할 수 있습니다. 이는 가용성 저해, 공정 데이터 조작, 나아가 물리적 설비 손상으로 이어질 수 있는 고위험군 위협으로 평가됩니다. [Recommendations] 사용자들은 즉시 SmartServer IoT 소프트웨어를 v4.60.023(SmartServer 4.6 Update 2) 이상으로 업데이트해야 합니다. 또한 장치를 외부 인터넷으로부터 격리하고, 비즈니스 네트워크와의 물리적/논리적 분리를 위한 방화벽 및 VPN 적용 등 다계층 방어 전략을 수립해야 합니다.

**Severity**: HIGH (8.1/10)
**Tags**: IoT Security, RCE, Command Injection, ICS/SCADA, Patch Management

## Analysis
[Executive Overview] EnOcean Edge Inc.의 SmartServer IoT 플랫폼에서 원격 코드 실행(RCE) 및 정보 유출을 허용하는 심각한 보안 취약점이 발견되었습니다. 해당 장치는 전 세계 산업 제어 시스템(ICS) 및 IT 인프라에서 데이터 통합 및 관리를 위해 널리 사용되고 있어, 이번 취약점 노출은 중요 인프라에 대한 잠재적인 공격 벡터가 될 수 있습니다. [Threat Analysis] 식별된 취약점은 LON IP-852 관리 메시지 처리 로직의 결함에서 기인합니다. CVE-2026-20761은 적절한 검증 없이 외부 입력을 시스템 명령어로 처리하는 커맨드 인젝션 취약점이며, CVE-2026-22885는 메모리 영역을 벗어난 읽기를 유발하여 민감한 메모리 데이터를 노출시키는 취약점입니다. 공격자는 특수하게 제작된 IP-852 메시지를 전송하여 ASLR 보안 기능을 우회하고 원격에서 임의의 OS 명령을 실행할 수 있습니다. [Impact Assessment] 공격 성공 시 공격자는 IoT 게이트웨이에 대한 완전한 제어권을 획득할 수 있으며, 이를 통해 연결된 산업용 센서 및 제어 네트워크에 침투할 수 있습니다. 이는 가용성 저해, 공정 데이터 조작, 나아가 물리적 설비 손상으로 이어질 수 있는 고위험군 위협으로 평가됩니다. [Recommendations] 사용자들은 즉시 SmartServer IoT 소프트웨어를 v4.60.023(SmartServer 4.6 Update 2) 이상으로 업데이트해야 합니다. 또한 장치를 외부 인터넷으로부터 격리하고, 비즈니스 네트워크와의 물리적/논리적 분리를 위한 방화벽 및 VPN 적용 등 다계층 방어 전략을 수립해야 합니다.


## References
1. CVE-2026-20761
2. CVE-2026-22885
3. CISA Advisory ICSA-26-050-01, EnOcean SmartServer IoT, 2026
4. MITRE ATT&CK: T0814 (Control Device Peripherals)
5. Amir Zaltzman et al., Vulnerability Research in Industrial IoT Gateways, Claroty Team82, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-01)
    