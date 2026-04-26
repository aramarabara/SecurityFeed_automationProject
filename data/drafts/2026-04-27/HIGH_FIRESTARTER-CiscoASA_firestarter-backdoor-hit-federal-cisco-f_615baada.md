
# FIRESTARTER Backdoor Hit Federal Cisco Firepower Device, Survives Security Patches

> [Executive Overview] 2025년 9월, 미국 CISA는 연방 민간 기관의 Cisco Firepower 장비에서 'FIRESTARTER'라는 고도화된 백도어를 발견했다고 발표했습니다. 이 악성코드는 Cisco의 ASA(Adaptive Security Appliance) 소프트웨어를 구동하는 장비를 표적으로 삼으며, 단순한 침투를 넘어 시스템 보안 패치 이후에도 생존하는 강력한 지속성을 보여주었습니다. 이는 국가 기반 위협 행위자들이 네트워크 경계 장비를 장기적인 첩보 활동의 거점으로 활용하고 있음을 보여주는 중대한 사례입니다. [Threat Analysis] FIRESTARTER는 펌웨어 또는 부팅 프로세스 수준에서 동작하여 일반적인 운영체제 보안 패치로는 제거되지 않는 특성을 가집니다. CISA와 NCSC의 분석에 따르면, 이 백도어는 원격 관리 인터페이스를 통해 명령을 수신하며 탐지를 피하기 위해 암호화된 통신 채널을 사용합니다. 공격자는 장비의 무결성을 손상시켜 보안 업데이트가 적용된 후에도 악성 바이너리가 다시 로드되도록 설계하여 침투 상태를 유지합니다. [Impact Assessment] 이번 공격의 영향은 해당 연방 기관의 기밀 정보 유출 위험을 넘어, 네트워크 전체의 가시성이 공격자에게 노출되었다는 점에서 매우 심각합니다. 보안 장비 자체가 감염됨으로써 트래픽 감시 및 필터링 기능이 무력화되었고, 이는 공격자가 내부 네트워크로 확산(Lateral Movement)할 수 있는 완벽한 발판을 제공했습니다. [Recommendations] 대응을 위해 조직은 즉시 Cisco 장비의 하드웨어 무결성 검사(Hardware Root of Trust)를 수행하고, 모든 관리자 계정에 대해 피싱 방지 MFA를 필수 적용해야 합니다. 또한, CISA에서 제공하는 침해 지표(IoC)를 기반으로 네트워크 로그를 전수 조사하고, 단순 소프트웨어 업데이트보다는 펌웨어 수준의 초기화 및 재설치를 고려해야 합니다.

**Severity**: HIGH (8.5/10)
**Tags**: FIRESTARTER, Cisco ASA, Persistence, Backdoor, Network Infrastructure

## Analysis
[Executive Overview] 2025년 9월, 미국 CISA는 연방 민간 기관의 Cisco Firepower 장비에서 'FIRESTARTER'라는 고도화된 백도어를 발견했다고 발표했습니다. 이 악성코드는 Cisco의 ASA(Adaptive Security Appliance) 소프트웨어를 구동하는 장비를 표적으로 삼으며, 단순한 침투를 넘어 시스템 보안 패치 이후에도 생존하는 강력한 지속성을 보여주었습니다. 이는 국가 기반 위협 행위자들이 네트워크 경계 장비를 장기적인 첩보 활동의 거점으로 활용하고 있음을 보여주는 중대한 사례입니다. [Threat Analysis] FIRESTARTER는 펌웨어 또는 부팅 프로세스 수준에서 동작하여 일반적인 운영체제 보안 패치로는 제거되지 않는 특성을 가집니다. CISA와 NCSC의 분석에 따르면, 이 백도어는 원격 관리 인터페이스를 통해 명령을 수신하며 탐지를 피하기 위해 암호화된 통신 채널을 사용합니다. 공격자는 장비의 무결성을 손상시켜 보안 업데이트가 적용된 후에도 악성 바이너리가 다시 로드되도록 설계하여 침투 상태를 유지합니다. [Impact Assessment] 이번 공격의 영향은 해당 연방 기관의 기밀 정보 유출 위험을 넘어, 네트워크 전체의 가시성이 공격자에게 노출되었다는 점에서 매우 심각합니다. 보안 장비 자체가 감염됨으로써 트래픽 감시 및 필터링 기능이 무력화되었고, 이는 공격자가 내부 네트워크로 확산(Lateral Movement)할 수 있는 완벽한 발판을 제공했습니다. [Recommendations] 대응을 위해 조직은 즉시 Cisco 장비의 하드웨어 무결성 검사(Hardware Root of Trust)를 수행하고, 모든 관리자 계정에 대해 피싱 방지 MFA를 필수 적용해야 합니다. 또한, CISA에서 제공하는 침해 지표(IoC)를 기반으로 네트워크 로그를 전수 조사하고, 단순 소프트웨어 업데이트보다는 펌웨어 수준의 초기화 및 재설치를 고려해야 합니다.


## References
1. CISA, Malware Analysis Report (MAR-10435133-1.v1): FIRESTARTER Backdoor, CISA, 2025
2. MITRE ATT&CK: T1542.001 (Pre-OS Boot: System Firmware)
3. NCSC UK, Advisory: Persistence Mechanisms in Network Infrastructure Appliances, NCSC, 2024
4. Cisco Security Advisory, Cisco ASA and FTD Software Persistence Vulnerability, Cisco, 2025
## Original Source
[The Hacker News](https://thehackernews.com/2026/04/firestarter-backdoor-hit-federal-cisco.html)
    