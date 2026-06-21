
# AzeoTech DAQFactory

> [Executive Overview] AzeoTech의 DAQFactory는 데이터 수집 및 제어를 위해 전 세계 주요 제조 시설에서 널리 사용되는 HMI/SCADA 솔루션입니다. 최근 보고된 CVE-2026-12390 취약점은 해당 소프트웨어의 데이터 처리 메커니즘에서 발생하는 심각한 보안 결함으로, 공격자가 이를 악용할 경우 산업 제어 시스템(ICS)의 무결성과 가용성을 완전히 손상시킬 수 있는 잠재력을 가지고 있습니다.

[Threat Analysis] 본 취약점은 '타입 혼동(Type Confusion, CWE-843)' 결함으로 분류됩니다. 공격자는 특수하게 제작된 .ctl 파일을 생성하여 사용자에게 전달하고, 사용자가 이 파일을 DAQFactory에서 열도록 유도하는 방식으로 공격을 수행합니다. 프로그램이 입력된 데이터의 형식을 잘못 해석할 때 발생하는 메모리 관리 오류를 이용해 임의 코드 실행(ACE)이 가능해지며, 이는 로컬 공격 벡터(AV:L)와 사용자 상호작용(UI:A/R)이 결합된 전형적인 사회 공학적 공격 형태를 띱니다.

[Impact Assessment] 이 결함이 성공적으로 악용될 경우, 공격자는 제어 시스템의 권한을 획득하여 생산 프로세스 중단, 센서 데이터 조작, 또는 물리적 설비 파손과 같은 치명적인 결과를 초래할 수 있습니다. 특히 Critical Manufacturing 섹터에 속한 기업들에게 전 세계적으로 영향을 미칠 수 있으며, 운영 기술(OT) 환경에서의 코드 실행 권한 탈취는 곧바로 비즈니스 연속성 중단으로 직결됩니다.

[Recommendations] 조직은 즉시 DAQFactory를 최신 버전으로 업데이트하거나 패치를 적용해야 합니다. 완화 조치로 신뢰할 수 없는 출처의 .ctl 파일 로드를 금지하고, 프로젝트 파일을 관리자 권한이 있는 폴더에 저장하여 접근을 제한해야 합니다. 또한, 불분명한 문서를 열람할 때는 반드시 'Safe Mode'를 사용하고 문서 편집 비밀번호를 설정하는 등 심층 방어 전략을 수립할 것을 권장합니다.

**Severity**: HIGH (8.4/10)
**Tags**: SCADA/HMI, Type Confusion, CVE-2026-12390, Industrial Control Systems, Code Execution

## Analysis
[Executive Overview] AzeoTech의 DAQFactory는 데이터 수집 및 제어를 위해 전 세계 주요 제조 시설에서 널리 사용되는 HMI/SCADA 솔루션입니다. 최근 보고된 CVE-2026-12390 취약점은 해당 소프트웨어의 데이터 처리 메커니즘에서 발생하는 심각한 보안 결함으로, 공격자가 이를 악용할 경우 산업 제어 시스템(ICS)의 무결성과 가용성을 완전히 손상시킬 수 있는 잠재력을 가지고 있습니다.

[Threat Analysis] 본 취약점은 '타입 혼동(Type Confusion, CWE-843)' 결함으로 분류됩니다. 공격자는 특수하게 제작된 .ctl 파일을 생성하여 사용자에게 전달하고, 사용자가 이 파일을 DAQFactory에서 열도록 유도하는 방식으로 공격을 수행합니다. 프로그램이 입력된 데이터의 형식을 잘못 해석할 때 발생하는 메모리 관리 오류를 이용해 임의 코드 실행(ACE)이 가능해지며, 이는 로컬 공격 벡터(AV:L)와 사용자 상호작용(UI:A/R)이 결합된 전형적인 사회 공학적 공격 형태를 띱니다.

[Impact Assessment] 이 결함이 성공적으로 악용될 경우, 공격자는 제어 시스템의 권한을 획득하여 생산 프로세스 중단, 센서 데이터 조작, 또는 물리적 설비 파손과 같은 치명적인 결과를 초래할 수 있습니다. 특히 Critical Manufacturing 섹터에 속한 기업들에게 전 세계적으로 영향을 미칠 수 있으며, 운영 기술(OT) 환경에서의 코드 실행 권한 탈취는 곧바로 비즈니스 연속성 중단으로 직결됩니다.

[Recommendations] 조직은 즉시 DAQFactory를 최신 버전으로 업데이트하거나 패치를 적용해야 합니다. 완화 조치로 신뢰할 수 없는 출처의 .ctl 파일 로드를 금지하고, 프로젝트 파일을 관리자 권한이 있는 폴더에 저장하여 접근을 제한해야 합니다. 또한, 불분명한 문서를 열람할 때는 반드시 'Safe Mode'를 사용하고 문서 편집 비밀번호를 설정하는 등 심층 방어 전략을 수립할 것을 권장합니다.


## References
1. CISA, ICSA-26-169-02: AzeoTech DAQFactory, 2026
2. CVE-2026-12390
3. MITRE ATT&CK: T1204.002 (Malicious File)
4. CWE-843: Access of Resource Using Incompatible Type ('Type Confusion')
5. NIST, National Vulnerability Database (NVD) CVE-2026-12390 Detail
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-169-02)
    