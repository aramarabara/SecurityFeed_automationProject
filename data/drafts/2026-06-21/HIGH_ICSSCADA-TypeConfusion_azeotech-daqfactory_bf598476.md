
# AzeoTech DAQFactory

> Executive Overview: AzeoTech DAQFactory 시스템에서 발견된 CVE-2026-12390 취약점은 전 세계 제조 공정 및 주요 인프라에서 사용되는 데이터 수집 및 제어 시스템의 무결성을 심각하게 위협합니다. 이 취약점은 HMI(Human-Machine Interface)와 SCADA 소프트웨어의 데이터 처리 과정에서 발생하는 논리적 오류로, 공격자가 제어 시스템의 운영 권한을 탈취할 수 있는 경로를 제공합니다.

Threat Analysis: 본 취약점은 CWE-843(Type Confusion)으로 분류되며, 프로그램이 호환되지 않는 리소스 유형으로 메모리 내 객체에 접근할 때 발생합니다. 공격자는 특수하게 조작된 .ctl 구성 파일을 제작하여 사용자가 이를 로드하도록 유도하는 사회공학적 기법을 사용합니다. 파일 로드 시 발생하는 형식 혼란은 메모리 오염을 유발하며, 최종적으로 공격자가 의도한 임의 코드가 시스템 컨텍스트에서 실행(ACE)될 수 있는 환경을 조성합니다.

Impact Assessment: DAQFactory가 핵심 제조(Critical Manufacturing) 분야에서 널리 사용됨에 따라, 성공적인 공격은 산업 현장의 공정 중단, 장비 파손 또는 공정 데이터의 위변조로 이어질 수 있습니다. 특히 로컬 공격 벡터를 가짐에도 불구하고, 관리자 권한으로 실행되는 경우가 많은 ICS 환경 특성상 시스템 전체에 대한 제어권 상실과 내부 망으로의 측면 이동(Lateral Movement) 위험이 매우 높습니다.

Recommendations: 즉각적인 조치로 .ctl 파일을 관리자만 수정 가능한 보안 폴더에 저장하고, 출처가 불분명한 파일의 실행을 엄격히 금지해야 합니다. 운영 환경에서는 'Safe Mode'를 활성화하고 문서 편집 암호를 설정하여 비인가 수정을 방지해야 합니다. 또한, 네트워크 수준에서는 Purdue 모델에 기반한 망 분리를 시행하고, ICS 전용 방화벽 및 VPN 시스템의 최신 패치 상태를 상시 유지할 것을 권고합니다.

**Severity**: HIGH (8.4/10)
**Tags**: ICS/SCADA, Type Confusion, CVE-2026-12390, Critical Manufacturing, Remote Code Execution

## Analysis
Executive Overview: AzeoTech DAQFactory 시스템에서 발견된 CVE-2026-12390 취약점은 전 세계 제조 공정 및 주요 인프라에서 사용되는 데이터 수집 및 제어 시스템의 무결성을 심각하게 위협합니다. 이 취약점은 HMI(Human-Machine Interface)와 SCADA 소프트웨어의 데이터 처리 과정에서 발생하는 논리적 오류로, 공격자가 제어 시스템의 운영 권한을 탈취할 수 있는 경로를 제공합니다.

Threat Analysis: 본 취약점은 CWE-843(Type Confusion)으로 분류되며, 프로그램이 호환되지 않는 리소스 유형으로 메모리 내 객체에 접근할 때 발생합니다. 공격자는 특수하게 조작된 .ctl 구성 파일을 제작하여 사용자가 이를 로드하도록 유도하는 사회공학적 기법을 사용합니다. 파일 로드 시 발생하는 형식 혼란은 메모리 오염을 유발하며, 최종적으로 공격자가 의도한 임의 코드가 시스템 컨텍스트에서 실행(ACE)될 수 있는 환경을 조성합니다.

Impact Assessment: DAQFactory가 핵심 제조(Critical Manufacturing) 분야에서 널리 사용됨에 따라, 성공적인 공격은 산업 현장의 공정 중단, 장비 파손 또는 공정 데이터의 위변조로 이어질 수 있습니다. 특히 로컬 공격 벡터를 가짐에도 불구하고, 관리자 권한으로 실행되는 경우가 많은 ICS 환경 특성상 시스템 전체에 대한 제어권 상실과 내부 망으로의 측면 이동(Lateral Movement) 위험이 매우 높습니다.

Recommendations: 즉각적인 조치로 .ctl 파일을 관리자만 수정 가능한 보안 폴더에 저장하고, 출처가 불분명한 파일의 실행을 엄격히 금지해야 합니다. 운영 환경에서는 'Safe Mode'를 활성화하고 문서 편집 암호를 설정하여 비인가 수정을 방지해야 합니다. 또한, 네트워크 수준에서는 Purdue 모델에 기반한 망 분리를 시행하고, ICS 전용 방화벽 및 VPN 시스템의 최신 패치 상태를 상시 유지할 것을 권고합니다.


## References
1. CISA, ICSA-26-169-02: AzeoTech DAQFactory, 2026
2. CVE-2026-12390
3. MITRE ATT&CK: T1204.002 (User Execution: Malicious File)
4. MITRE CWE-843: Access of Resource Using Incompatible Type ('Type Confusion')
5. S. L. Geller et al., 'Memory Safety Strategies for Industrial Control Systems', IEEE Security & Privacy, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-169-02)
    