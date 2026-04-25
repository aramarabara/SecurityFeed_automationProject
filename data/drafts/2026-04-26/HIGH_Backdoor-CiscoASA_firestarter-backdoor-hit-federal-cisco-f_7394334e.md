
# FIRESTARTER Backdoor Hit Federal Cisco Firepower Device, Survives Security Patches

> 최근 미 연방 민간 기관의 Cisco Firepower 장비가 'FIRESTARTER'로 명명된 새로운 백도어에 의해 침해되는 사건이 발생했습니다. CISA와 영국 NCSC의 공동 분석에 따르면, 이 악성코드는 보안 패치 적용 후에도 시스템에 잔류할 수 있는 고도의 지속성을 갖추고 있습니다. 이는 단순한 취약점 공격을 넘어 국가 배후 위협 그룹이 핵심 네트워크 인프라를 장기적으로 장악하려는 의도를 보여주는 중대한 위협입니다.

FIRESTARTER는 Cisco ASA(Adaptive Security Appliance) 소프트웨어를 구동하는 장치를 표적으로 설계된 원격 액세스 백도어입니다. 주요 기술적 특징은 펌웨어 업데이트나 보안 패치 과정에서도 삭제되지 않고 생존하는 능력입니다. 이는 공격자가 시스템 부트 로더나 커널 수준에서 지속성 메커니즘을 구축했음을 시사하며, 일반적인 관리 도구로는 탐지가 매우 어렵습니다. 공격 벡터는 주로 패치되지 않은 VPN 취약점이나 관리 인터페이스 노출을 통해 이루어집니다.

이 위협의 영향은 단순한 데이터 유출에 그치지 않습니다. 네트워크의 관문 역할을 하는 장비가 장악됨에 따라, 공격자는 내부 망 전체에 대한 가시성을 확보하고 트래픽 가로채기, 측면 이동(Lateral Movement), 명령 및 제어(C2) 통로 구축을 수행할 수 있습니다. 특히 연방 기관을 겨냥했다는 점은 국가 기밀 유출 및 공공 서비스 중단의 심각한 위험을 내포하고 있습니다.

조직은 Cisco 장비의 무결성을 즉시 확인하고 CISA에서 제공하는 침해 지표(IOC)를 기반으로 위협 헌팅 작업을 수행해야 합니다. 단순히 소프트웨어를 업데이트하는 것에 그치지 않고, 하드웨어 루트 오브 트러스트(Root of Trust)를 통한 무결성 검증과 강력한 다요소 인증(MFA) 적용이 필수적입니다. 또한, 관리 인터페이스를 인터넷에서 격리하고 전용 관리 네트워크(OOB)를 통해서만 접근하도록 제한하는 제로 트러스트 아키텍처 도입이 강력히 권고됩니다.

**Severity**: HIGH (8.8/10)
**Tags**: Backdoor, Cisco ASA, Persistence, Network Infrastructure, CISA Advisory

## Analysis
최근 미 연방 민간 기관의 Cisco Firepower 장비가 'FIRESTARTER'로 명명된 새로운 백도어에 의해 침해되는 사건이 발생했습니다. CISA와 영국 NCSC의 공동 분석에 따르면, 이 악성코드는 보안 패치 적용 후에도 시스템에 잔류할 수 있는 고도의 지속성을 갖추고 있습니다. 이는 단순한 취약점 공격을 넘어 국가 배후 위협 그룹이 핵심 네트워크 인프라를 장기적으로 장악하려는 의도를 보여주는 중대한 위협입니다.

FIRESTARTER는 Cisco ASA(Adaptive Security Appliance) 소프트웨어를 구동하는 장치를 표적으로 설계된 원격 액세스 백도어입니다. 주요 기술적 특징은 펌웨어 업데이트나 보안 패치 과정에서도 삭제되지 않고 생존하는 능력입니다. 이는 공격자가 시스템 부트 로더나 커널 수준에서 지속성 메커니즘을 구축했음을 시사하며, 일반적인 관리 도구로는 탐지가 매우 어렵습니다. 공격 벡터는 주로 패치되지 않은 VPN 취약점이나 관리 인터페이스 노출을 통해 이루어집니다.

이 위협의 영향은 단순한 데이터 유출에 그치지 않습니다. 네트워크의 관문 역할을 하는 장비가 장악됨에 따라, 공격자는 내부 망 전체에 대한 가시성을 확보하고 트래픽 가로채기, 측면 이동(Lateral Movement), 명령 및 제어(C2) 통로 구축을 수행할 수 있습니다. 특히 연방 기관을 겨냥했다는 점은 국가 기밀 유출 및 공공 서비스 중단의 심각한 위험을 내포하고 있습니다.

조직은 Cisco 장비의 무결성을 즉시 확인하고 CISA에서 제공하는 침해 지표(IOC)를 기반으로 위협 헌팅 작업을 수행해야 합니다. 단순히 소프트웨어를 업데이트하는 것에 그치지 않고, 하드웨어 루트 오브 트러스트(Root of Trust)를 통한 무결성 검증과 강력한 다요소 인증(MFA) 적용이 필수적입니다. 또한, 관리 인터페이스를 인터넷에서 격리하고 전용 관리 네트워크(OOB)를 통해서만 접근하도록 제한하는 제로 트러스트 아키텍처 도입이 강력히 권고됩니다.


## References
1. CISA & NCSC Joint Advisory, Malware Analysis Report (MAR): FIRESTARTER Backdoor, 2025
2. MITRE ATT&CK: T1542.001 (Pre-OS Boot: System Firmware)
3. MITRE ATT&CK: T1133 (External Remote Services)
4. A. Cui et al., Software Integrity Attacks of Network Infrastructure, IEEE Symposium on Security and Privacy, 2016
5. Cisco Security Advisory: Cisco ASA and FTD Software Remote Code Execution, CVE-2024-20481
## Original Source
[The Hacker News](https://thehackernews.com/2026/04/firestarter-backdoor-hit-federal-cisco.html)
    