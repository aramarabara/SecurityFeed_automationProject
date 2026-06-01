
# MacGregor Voyage Data Recorder (VDR) G4e

> [Executive Overview] 덴마크의 선박 기술 전문 기업인 Danelec가 제조한 MacGregor 항해 데이터 기록 장치(VDR) G4e 모델에서 심각한 보안 취약점들이 발견되었습니다. VDR은 항공기의 블랙박스와 유사하게 선박의 모든 항해 데이터를 기록하는 핵심 장치로, 이번 취약점 노출은 전 세계 해상 교통 및 물류 인프라에 중대한 위험을 초래할 수 있습니다. [Threat Analysis] 주요 위협은 하드코딩된 자격 증명(CVE-2026-42929)과 기본 비밀번호(CVE-2026-42941)의 미변경 사용에 집중되어 있습니다. 또한, 인증된 사용자가 비밀번호 해시가 포함된 백업 파일을 다운로드할 수 있으며(CVE-2026-42951), 취약한 해싱 알고리즘(CVE-2026-44611)으로 인해 무차별 대입 공격에 노출되어 있습니다. 특히 웹 인터페이스를 통해 루트 비밀번호를 포함한 민감 파일을 직접 수정할 수 있는 권한 상승 취약점(CVE-2026-40425)이 결합될 경우 공격자는 장치에 대한 완전한 관리 권한을 획득하게 됩니다. [Impact Assessment] 전 세계적으로 운용 중인 해당 VDR 장치가 공격을 받을 경우, 사고 기록의 조작, 삭제 또는 선박 데이터 탈취가 가능해집니다. 이는 해상 사고 발생 시 증거 보존의 무결성을 훼손할 뿐만 아니라, 국가 중요 인프라인 물류 수송 체계에 혼란을 야기할 수 있는 높은 위협 수준을 가지고 있습니다. [Recommendations] 관리자는 즉시 Danelec에서 배포한 최신 펌웨어(V5.250)를 적용해야 합니다. 또한, VDR 장치를 인터넷에 직접 노출하지 않고 방화벽 및 VPN을 통한 네트워크 분리(Air-gapping)를 강화해야 하며, 정기적인 보안 패치 관리와 접근 제어 정책(RBAC) 수립이 필수적입니다.

**Severity**: HIGH (8.7/10)
**Tags**: ICS/OT Security, Maritime Security, Default Credentials, Firmware Vulnerability, CVE-2026-42929

## Analysis
[Executive Overview] 덴마크의 선박 기술 전문 기업인 Danelec가 제조한 MacGregor 항해 데이터 기록 장치(VDR) G4e 모델에서 심각한 보안 취약점들이 발견되었습니다. VDR은 항공기의 블랙박스와 유사하게 선박의 모든 항해 데이터를 기록하는 핵심 장치로, 이번 취약점 노출은 전 세계 해상 교통 및 물류 인프라에 중대한 위험을 초래할 수 있습니다. [Threat Analysis] 주요 위협은 하드코딩된 자격 증명(CVE-2026-42929)과 기본 비밀번호(CVE-2026-42941)의 미변경 사용에 집중되어 있습니다. 또한, 인증된 사용자가 비밀번호 해시가 포함된 백업 파일을 다운로드할 수 있으며(CVE-2026-42951), 취약한 해싱 알고리즘(CVE-2026-44611)으로 인해 무차별 대입 공격에 노출되어 있습니다. 특히 웹 인터페이스를 통해 루트 비밀번호를 포함한 민감 파일을 직접 수정할 수 있는 권한 상승 취약점(CVE-2026-40425)이 결합될 경우 공격자는 장치에 대한 완전한 관리 권한을 획득하게 됩니다. [Impact Assessment] 전 세계적으로 운용 중인 해당 VDR 장치가 공격을 받을 경우, 사고 기록의 조작, 삭제 또는 선박 데이터 탈취가 가능해집니다. 이는 해상 사고 발생 시 증거 보존의 무결성을 훼손할 뿐만 아니라, 국가 중요 인프라인 물류 수송 체계에 혼란을 야기할 수 있는 높은 위협 수준을 가지고 있습니다. [Recommendations] 관리자는 즉시 Danelec에서 배포한 최신 펌웨어(V5.250)를 적용해야 합니다. 또한, VDR 장치를 인터넷에 직접 노출하지 않고 방화벽 및 VPN을 통한 네트워크 분리(Air-gapping)를 강화해야 하며, 정기적인 보안 패치 관리와 접근 제어 정책(RBAC) 수립이 필수적입니다.


## References
1. CISA, ICSA-26-148-01: MacGregor Voyage Data Recorder (VDR) G4e, 2026
2. CVE-2026-42929
3. CVE-2026-42941
4. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
5. K. Jones et al., Cyber-Physical Security in Maritime Systems, Journal of Maritime Research, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-148-01)
    