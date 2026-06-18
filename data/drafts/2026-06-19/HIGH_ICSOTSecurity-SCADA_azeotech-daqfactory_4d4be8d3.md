
# AzeoTech DAQFactory

> [Executive Overview] AzeoTech사의 데이터 수집 및 제어 소프트웨어인 DAQFactory에서 심각한 유형 혼동(Type Confusion) 취약점인 CVE-2026-12390이 보고되었습니다. 이 취약점은 전 세계 제조 산업 현장의 SCADA 및 HMI 시스템에 영향을 미치며, 공격자가 악의적으로 조작된 프로젝트 파일을 배포할 경우 대상 시스템의 완전한 제어권을 획득할 수 있는 위험성을 내포하고 있습니다. [Threat Analysis] 본 취약점은 CWE-843(유형 혼동)으로 분류되며, DAQFactory가 .ctl 파일을 처리하는 과정에서 객체 유형을 부적절하게 검증할 때 발생합니다. 공격자는 특수하게 제작된 .ctl 파일을 통해 메모리 손상을 유도하고 임의 코드 실행(ACE)을 달성할 수 있습니다. 로컬 공격 벡터(AV:L)와 사용자 상호작용(UI:R)이 필요하지만, 사회공학적 기법을 통해 숙련된 공격자가 타겟 시스템을 감염시키는 데 충분히 활용될 수 있습니다. [Impact Assessment] 취약점 악용 성공 시, 공격자는 제조 공정 시스템 내에서 관리자 권한으로 명령을 실행할 수 있습니다. 이는 생산 라인의 비정상적 가동, 산업 기밀 유출, 또는 시스템 가용성 중단과 같은 치명적인 결과로 이어질 수 있으며, 특히 국가 핵심 인프라인 제조 분야에 심각한 물리적, 경제적 타격을 줄 수 있습니다. [Recommendations] 관리자는 출처가 불분명한 .ctl 파일을 열람하지 않도록 주의해야 하며, 해당 파일들을 관리자 권한으로만 수정 가능한 폴더에 격리 저장해야 합니다. 또한, 신뢰할 수 없는 문서를 로드할 때는 반드시 'Safe Mode'를 사용하고 문서 암호를 설정할 것을 권고합니다. 아울러 ICS 네트워크를 외부 인터넷으로부터 격리하고 다계층 방어 전략(Defense-in-Depth)을 적용하여 잠재적인 위협 노출을 최소화해야 합니다.

**Severity**: HIGH (7.8/10)
**Tags**: ICS/OT Security, SCADA, CVE-2026-12390, Type Confusion, Critical Manufacturing

## Analysis
[Executive Overview] AzeoTech사의 데이터 수집 및 제어 소프트웨어인 DAQFactory에서 심각한 유형 혼동(Type Confusion) 취약점인 CVE-2026-12390이 보고되었습니다. 이 취약점은 전 세계 제조 산업 현장의 SCADA 및 HMI 시스템에 영향을 미치며, 공격자가 악의적으로 조작된 프로젝트 파일을 배포할 경우 대상 시스템의 완전한 제어권을 획득할 수 있는 위험성을 내포하고 있습니다. [Threat Analysis] 본 취약점은 CWE-843(유형 혼동)으로 분류되며, DAQFactory가 .ctl 파일을 처리하는 과정에서 객체 유형을 부적절하게 검증할 때 발생합니다. 공격자는 특수하게 제작된 .ctl 파일을 통해 메모리 손상을 유도하고 임의 코드 실행(ACE)을 달성할 수 있습니다. 로컬 공격 벡터(AV:L)와 사용자 상호작용(UI:R)이 필요하지만, 사회공학적 기법을 통해 숙련된 공격자가 타겟 시스템을 감염시키는 데 충분히 활용될 수 있습니다. [Impact Assessment] 취약점 악용 성공 시, 공격자는 제조 공정 시스템 내에서 관리자 권한으로 명령을 실행할 수 있습니다. 이는 생산 라인의 비정상적 가동, 산업 기밀 유출, 또는 시스템 가용성 중단과 같은 치명적인 결과로 이어질 수 있으며, 특히 국가 핵심 인프라인 제조 분야에 심각한 물리적, 경제적 타격을 줄 수 있습니다. [Recommendations] 관리자는 출처가 불분명한 .ctl 파일을 열람하지 않도록 주의해야 하며, 해당 파일들을 관리자 권한으로만 수정 가능한 폴더에 격리 저장해야 합니다. 또한, 신뢰할 수 없는 문서를 로드할 때는 반드시 'Safe Mode'를 사용하고 문서 암호를 설정할 것을 권고합니다. 아울러 ICS 네트워크를 외부 인터넷으로부터 격리하고 다계층 방어 전략(Defense-in-Depth)을 적용하여 잠재적인 위협 노출을 최소화해야 합니다.


## References
1. CISA Advisory ICSA-26-169-02, AzeoTech DAQFactory, 2026
2. CVE-2026-12390
3. MITRE ATT&CK: T1204.002 (User Execution: Malicious File)
4. CWE-843: Access of Resource Using Incompatible Type ('Type Confusion')
5. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-169-02)
    