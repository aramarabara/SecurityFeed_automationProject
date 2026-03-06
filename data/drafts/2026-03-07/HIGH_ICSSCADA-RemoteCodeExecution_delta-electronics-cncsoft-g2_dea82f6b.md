
# Delta Electronics CNCSoft-G2

> [Executive Overview] 델타 일렉트로닉스(Delta Electronics)의 CNCSoft-G2 소프트웨어에서 원격 코드 실행(RCE)으로 이어질 수 있는 고위험 보안 취약점(CVE-2026-3094)이 발견되었습니다. 이 소프트웨어는 전 세계 제조 산업의 핵심인 수치 제어(CNC) 시스템 운영에 널리 사용되고 있어, 공격 성공 시 산업 자동화 환경에 심각한 위협을 초래할 수 있습니다. 특히 대만 본사를 둔 델타의 글로벌 시장 점유율을 고려할 때, 전 세계 제조 시설의 공급망 보안에 미치는 영향이 매우 큽니다. [Threat Analysis] 해당 취약점은 DOPSoft 구성 요소에서 DPAX 파일을 파싱하는 과정 중 발생하는 '경계 외 쓰기(CWE-787)' 결함입니다. 공격자는 특수하게 조작된 DPAX 파일을 생성하여 사용자에게 전달하고, 사용자가 이를 실행하도록 유도하는 사회 공학적 기법을 사용합니다. 로컬 공격 벡터(AV:L)를 가지며 사용자 상호작용(UI:R)이 필수적이지만, 일단 실행되면 공격자가 장치에서 임의의 코드를 실행하고 시스템 권한을 획득할 수 있는 경로를 제공합니다. [Impact Assessment] 이 취약점의 영향은 단순히 엔지니어링 워크스테이션의 침해에 그치지 않습니다. 공격자가 제어 시스템 네트워크에 접근하게 되면 제조 공정 데이터의 탈취, 공정 중단, 또는 물리적 설비 파손과 같은 심각한 결과로 이어질 수 있습니다. 특히 중요 제조 부문에 종사하는 기업들은 이번 취약점으로 인해 생산 라인의 가동 중단이나 지적 재산권 유출과 같은 경영상의 큰 타격을 입을 위험이 있습니다. [Recommendations] 최선의 대응 방안은 델타 일렉트로닉스에서 배포한 보안 패치를 적용하여 CNCSoft-G2를 V2.1.0.39 이상의 최신 버전으로 업데이트하는 것입니다. 또한, 출처가 불분명한 DPAX 파일의 실행을 엄격히 금지하고, 네트워크 분리(Segmentation)를 통해 운영 기술(OT)망을 사무용 네트워크 및 인터넷으로부터 격리해야 합니다. CISA의 권고에 따라 방화벽 강화, VPN 사용 시 다중 요소 인증(MFA) 도입 등 심층 방어(Defense-in-Depth) 전략을 구축할 것을 권장합니다.

**Severity**: HIGH (7.8/10)
**Tags**: ICS/SCADA, Remote Code Execution, CVE-2026-3094, Delta Electronics, CWE-787

## Analysis
[Executive Overview] 델타 일렉트로닉스(Delta Electronics)의 CNCSoft-G2 소프트웨어에서 원격 코드 실행(RCE)으로 이어질 수 있는 고위험 보안 취약점(CVE-2026-3094)이 발견되었습니다. 이 소프트웨어는 전 세계 제조 산업의 핵심인 수치 제어(CNC) 시스템 운영에 널리 사용되고 있어, 공격 성공 시 산업 자동화 환경에 심각한 위협을 초래할 수 있습니다. 특히 대만 본사를 둔 델타의 글로벌 시장 점유율을 고려할 때, 전 세계 제조 시설의 공급망 보안에 미치는 영향이 매우 큽니다. [Threat Analysis] 해당 취약점은 DOPSoft 구성 요소에서 DPAX 파일을 파싱하는 과정 중 발생하는 '경계 외 쓰기(CWE-787)' 결함입니다. 공격자는 특수하게 조작된 DPAX 파일을 생성하여 사용자에게 전달하고, 사용자가 이를 실행하도록 유도하는 사회 공학적 기법을 사용합니다. 로컬 공격 벡터(AV:L)를 가지며 사용자 상호작용(UI:R)이 필수적이지만, 일단 실행되면 공격자가 장치에서 임의의 코드를 실행하고 시스템 권한을 획득할 수 있는 경로를 제공합니다. [Impact Assessment] 이 취약점의 영향은 단순히 엔지니어링 워크스테이션의 침해에 그치지 않습니다. 공격자가 제어 시스템 네트워크에 접근하게 되면 제조 공정 데이터의 탈취, 공정 중단, 또는 물리적 설비 파손과 같은 심각한 결과로 이어질 수 있습니다. 특히 중요 제조 부문에 종사하는 기업들은 이번 취약점으로 인해 생산 라인의 가동 중단이나 지적 재산권 유출과 같은 경영상의 큰 타격을 입을 위험이 있습니다. [Recommendations] 최선의 대응 방안은 델타 일렉트로닉스에서 배포한 보안 패치를 적용하여 CNCSoft-G2를 V2.1.0.39 이상의 최신 버전으로 업데이트하는 것입니다. 또한, 출처가 불분명한 DPAX 파일의 실행을 엄격히 금지하고, 네트워크 분리(Segmentation)를 통해 운영 기술(OT)망을 사무용 네트워크 및 인터넷으로부터 격리해야 합니다. CISA의 권고에 따라 방화벽 강화, VPN 사용 시 다중 요소 인증(MFA) 도입 등 심층 방어(Defense-in-Depth) 전략을 구축할 것을 권장합니다.


## References
1. CVE-2026-3094
2. CISA, Advisory ICSA-26-064-01: Delta Electronics CNCSoft-G2, 2026
3. MITRE ATT&CK: T1204.002 (User Execution: Malicious File)
4. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST SP 800-82, 2015
5. CWE-787: Out-of-bounds Write, MITRE, 2024
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-064-01)
    