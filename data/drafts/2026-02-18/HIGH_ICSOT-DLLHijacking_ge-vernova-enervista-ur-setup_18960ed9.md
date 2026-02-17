
# GE Vernova Enervista UR Setup

> [Executive Overview] GE Vernova의 Enervista UR Setup 소프트웨어에서 관리자 권한 실행 및 임의 파일 쓰기가 가능한 보안 취약점이 발견되었습니다. 이 소프트웨어는 전력망 및 제조 공정의 보호 및 제어 장치를 설정하는 데 사용되는 핵심 도구로, 에너지, 제조, 수자원 등 주요 인프라 부문에서 전 세계적으로 활용되고 있어 해당 취약점 악용 시 산업 제어 시스템(ICS) 환경에 심각한 위협이 될 수 있습니다.

[Threat Analysis] 이번에 식별된 취약점은 두 가지입니다. 첫째, CVE-2026-1762(DLL Hijacking)는 설치 프로그램 실행 시 신뢰할 수 없는 경로에서 DLL을 로드하는 CWE-427 취약점으로, 공격자가 악성 DLL을 배치할 경우 시스템 관리자 권한으로 코드를 실행할 수 있습니다. 둘째, CVE-2026-1763은 펌웨어 업데이트 파일 처리 과정에서 발생하는 경로 탐색(Path Traversal, CWE-35) 취약점으로, 공격자가 특정 파일을 열도록 유도하여 파일 시스템에 임의의 데이터를 기록할 수 있게 합니다.

[Impact Assessment] 공격자가 이 취약점을 성공적으로 악용할 경우, 엔지니어링 워크스테이션에 대한 완전한 제어권을 획득할 수 있습니다. 이는 단순히 소프트웨어 오작동을 넘어, OT(운영 기술) 네트워크 내에서의 측면 이동(Lateral Movement)을 위한 교두보로 활용될 수 있으며, 궁극적으로는 변전소나 제조 라인의 물리적 설비 제어 로직을 변조하여 서비스 중단이나 물리적 피해를 야기할 수 있는 위험성을 내포하고 있습니다.

[Recommendations] 영향받는 버전(8.70 미만)의 사용자는 즉시 최신 보안 패치가 적용된 버전 8.70 이상으로 업데이트해야 합니다. 또한, CISA는 제어 시스템의 네트워크 노출을 최소화하고 비즈니스 네트워크와 완전히 격리된 방화벽 뒤에 배치할 것을 권장합니다. 원격 접속이 필요한 경우에는 반드시 다중 인증(MFA)이 적용된 VPN을 사용하고, 침입 탐지 및 방어 체계를 포함한 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다.

**Severity**: HIGH (7.8/10)
**Tags**: ICS/OT, DLL Hijacking, Path Traversal, GE Vernova, Energy Sector

## Analysis
[Executive Overview] GE Vernova의 Enervista UR Setup 소프트웨어에서 관리자 권한 실행 및 임의 파일 쓰기가 가능한 보안 취약점이 발견되었습니다. 이 소프트웨어는 전력망 및 제조 공정의 보호 및 제어 장치를 설정하는 데 사용되는 핵심 도구로, 에너지, 제조, 수자원 등 주요 인프라 부문에서 전 세계적으로 활용되고 있어 해당 취약점 악용 시 산업 제어 시스템(ICS) 환경에 심각한 위협이 될 수 있습니다.

[Threat Analysis] 이번에 식별된 취약점은 두 가지입니다. 첫째, CVE-2026-1762(DLL Hijacking)는 설치 프로그램 실행 시 신뢰할 수 없는 경로에서 DLL을 로드하는 CWE-427 취약점으로, 공격자가 악성 DLL을 배치할 경우 시스템 관리자 권한으로 코드를 실행할 수 있습니다. 둘째, CVE-2026-1763은 펌웨어 업데이트 파일 처리 과정에서 발생하는 경로 탐색(Path Traversal, CWE-35) 취약점으로, 공격자가 특정 파일을 열도록 유도하여 파일 시스템에 임의의 데이터를 기록할 수 있게 합니다.

[Impact Assessment] 공격자가 이 취약점을 성공적으로 악용할 경우, 엔지니어링 워크스테이션에 대한 완전한 제어권을 획득할 수 있습니다. 이는 단순히 소프트웨어 오작동을 넘어, OT(운영 기술) 네트워크 내에서의 측면 이동(Lateral Movement)을 위한 교두보로 활용될 수 있으며, 궁극적으로는 변전소나 제조 라인의 물리적 설비 제어 로직을 변조하여 서비스 중단이나 물리적 피해를 야기할 수 있는 위험성을 내포하고 있습니다.

[Recommendations] 영향받는 버전(8.70 미만)의 사용자는 즉시 최신 보안 패치가 적용된 버전 8.70 이상으로 업데이트해야 합니다. 또한, CISA는 제어 시스템의 네트워크 노출을 최소화하고 비즈니스 네트워크와 완전히 격리된 방화벽 뒤에 배치할 것을 권장합니다. 원격 접속이 필요한 경우에는 반드시 다중 인증(MFA)이 적용된 VPN을 사용하고, 침입 탐지 및 방어 체계를 포함한 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-048-03: GE Vernova Enervista UR Setup, 2026
2. CVE-2026-1762
3. CVE-2026-1763
4. MITRE ATT&CK: T1574.001 (Hijack Execution Flow: DLL Search Order Hijacking)
5. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-048-03)
    