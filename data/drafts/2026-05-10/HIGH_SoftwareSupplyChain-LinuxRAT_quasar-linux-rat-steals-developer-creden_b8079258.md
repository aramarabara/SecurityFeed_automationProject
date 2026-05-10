
# Quasar Linux RAT Steals Developer Credentials for Software Supply Chain Compromise

> [Executive Overview] Quasar Linux RAT(QLNX)은 소프트웨어 공급망을 위협하는 최신 리눅스 기반 원격 관리 도구(RAT)입니다. 이 악성코드는 특히 개발자와 DevOps 엔지니어를 표적으로 삼아 시스템에 침투하며, 장기적인 은닉과 자격 증명 탈취를 목적으로 설계되었습니다. 공급망 공격의 특성상 초기 침투는 수많은 기업과 사용자에게 광범위한 피해를 확산시킬 수 있는 기폭제가 됩니다. [Threat Analysis] QLNX는 키로깅, 클립보드 모니터링, 파일 조작 및 네트워크 터널링과 같은 고도화된 기능을 제공합니다. 공격자는 이를 통해 개발자의 소스 코드 저장소 접근 권한, 클라우드 API 키, SSH 자격 증명을 수집합니다. 특히 리눅스 환경의 특성을 악용하여 보안 솔루션의 탐지를 우회하며, 공격자가 타겟 네트워크 내부에서 자유롭게 이동할 수 있는 통로를 확보합니다. [Impact Assessment] 이 위협의 가장 큰 파급력은 소프트웨어 공급망 오염에 있습니다. 개발 환경이 장악되면 악성 코드가 정상적인 업데이트나 패키지에 포함되어 수천 개의 다운스트림 고객에게 배포될 수 있습니다. 이는 기업에 복구 불가능한 브랜드 가치 하락, 대규모 데이터 유출에 따른 법적 규제 준수 실패, 그리고 인프라 제어권 상실이라는 치명적인 결과를 초래합니다. [Recommendations] 조직은 개발자 워크스테이션에 대한 엔드포인트 탐지 및 대응(EDR) 솔루션을 강화하고, 모든 CI/CD 파이프라인에 강력한 다요소 인증(MFA)을 적용해야 합니다. 또한 정기적인 비밀번호 및 접근 키 순환 정책을 시행하고, 소스 코드 및 바이너리의 코드 서명 무결성 검사를 자동화하여 공급망 내의 비정상적인 변경 사항을 즉각 탐지해야 합니다.

**Severity**: HIGH (8.5/10)
**Tags**: Software Supply Chain, Linux RAT, Credential Harvesting, DevOps Security

## Analysis
[Executive Overview] Quasar Linux RAT(QLNX)은 소프트웨어 공급망을 위협하는 최신 리눅스 기반 원격 관리 도구(RAT)입니다. 이 악성코드는 특히 개발자와 DevOps 엔지니어를 표적으로 삼아 시스템에 침투하며, 장기적인 은닉과 자격 증명 탈취를 목적으로 설계되었습니다. 공급망 공격의 특성상 초기 침투는 수많은 기업과 사용자에게 광범위한 피해를 확산시킬 수 있는 기폭제가 됩니다. [Threat Analysis] QLNX는 키로깅, 클립보드 모니터링, 파일 조작 및 네트워크 터널링과 같은 고도화된 기능을 제공합니다. 공격자는 이를 통해 개발자의 소스 코드 저장소 접근 권한, 클라우드 API 키, SSH 자격 증명을 수집합니다. 특히 리눅스 환경의 특성을 악용하여 보안 솔루션의 탐지를 우회하며, 공격자가 타겟 네트워크 내부에서 자유롭게 이동할 수 있는 통로를 확보합니다. [Impact Assessment] 이 위협의 가장 큰 파급력은 소프트웨어 공급망 오염에 있습니다. 개발 환경이 장악되면 악성 코드가 정상적인 업데이트나 패키지에 포함되어 수천 개의 다운스트림 고객에게 배포될 수 있습니다. 이는 기업에 복구 불가능한 브랜드 가치 하락, 대규모 데이터 유출에 따른 법적 규제 준수 실패, 그리고 인프라 제어권 상실이라는 치명적인 결과를 초래합니다. [Recommendations] 조직은 개발자 워크스테이션에 대한 엔드포인트 탐지 및 대응(EDR) 솔루션을 강화하고, 모든 CI/CD 파이프라인에 강력한 다요소 인증(MFA)을 적용해야 합니다. 또한 정기적인 비밀번호 및 접근 키 순환 정책을 시행하고, 소스 코드 및 바이너리의 코드 서명 무결성 검사를 자동화하여 공급망 내의 비정상적인 변경 사항을 즉각 탐지해야 합니다.


## References
1. MITRE ATT&CK: T1195 (Supply Chain Compromise)
2. MITRE ATT&CK: T1552 (Unsecured Credentials)
3. CISA, Securing the Software Supply Chain, CISA Insights, 2023
4. Uroz et al., Analyzing Linux Malware: A Comprehensive Review, IEEE, 2022
## Original Source
[The Hacker News](https://thehackernews.com/2026/05/quasar-linux-rat-steals-developer.html)
    