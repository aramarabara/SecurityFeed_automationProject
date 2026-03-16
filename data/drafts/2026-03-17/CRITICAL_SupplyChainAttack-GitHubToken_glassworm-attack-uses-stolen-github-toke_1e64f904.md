
# GlassWorm Attack Uses Stolen GitHub Tokens to Force-Push Malware Into Python Repos

> Executive Overview: GlassWorm 캠페인은 도난된 GitHub 개인 액세스 토큰(PAT)을 무단 사용하여 수백 개의 Python 프로젝트에 악성 코드를 주입하는 정교한 공급망 공격입니다. 이 공격은 개발 환경의 신뢰 체인을 직접 타격하며, 오픈소스 생태계 전반에 걸친 보안 위협을 가중시키고 있습니다. Threat Analysis: 공격자는 탈취한 토큰을 통해 Django 애플리케이션, 머신러닝 연구 코드, Streamlit 대시보드 및 PyPI 패키지의 setup.py, main.py, app.py 파일에 난독화된 악성 코드를 강제 푸시(Force-Push)합니다. 이는 유효한 자격 증명을 악용하여 기존 보안 필터를 우회하는 기법으로, 자동화된 스크립트를 통해 대규모로 전개됩니다. Impact Assessment: 감염된 저장소를 복제하거나 의존성으로 사용하는 개발자와 기업은 원격 코드 실행(RCE) 및 민감 데이터 유출 위험에 직면합니다. 특히 ML 연구 및 데이터 과학 분야의 프로젝트가 주요 타겟이 되어 지적 재산권 탈취의 가능성도 제기됩니다. Recommendations: 조직은 GitHub 토큰에 대해 최소 권한 원칙(PoLP)을 적용하고 토큰 만료 주기를 단축해야 합니다. 또한 GitHub의 Secret Scanning 및 Push Protection 기능을 활성화하고, 모든 커밋에 GPG 서명을 의무화하여 코드 무결성을 보장해야 합니다. CI/CD 파이프라인 내에서 타사 라이브러리의 코드 변경 사항을 자동으로 검사하는 보안 도구 도입이 권장됩니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: Supply Chain Attack, GitHub Token, Malware Injection, Python Security, Credential Theft

## Analysis
Executive Overview: GlassWorm 캠페인은 도난된 GitHub 개인 액세스 토큰(PAT)을 무단 사용하여 수백 개의 Python 프로젝트에 악성 코드를 주입하는 정교한 공급망 공격입니다. 이 공격은 개발 환경의 신뢰 체인을 직접 타격하며, 오픈소스 생태계 전반에 걸친 보안 위협을 가중시키고 있습니다. Threat Analysis: 공격자는 탈취한 토큰을 통해 Django 애플리케이션, 머신러닝 연구 코드, Streamlit 대시보드 및 PyPI 패키지의 setup.py, main.py, app.py 파일에 난독화된 악성 코드를 강제 푸시(Force-Push)합니다. 이는 유효한 자격 증명을 악용하여 기존 보안 필터를 우회하는 기법으로, 자동화된 스크립트를 통해 대규모로 전개됩니다. Impact Assessment: 감염된 저장소를 복제하거나 의존성으로 사용하는 개발자와 기업은 원격 코드 실행(RCE) 및 민감 데이터 유출 위험에 직면합니다. 특히 ML 연구 및 데이터 과학 분야의 프로젝트가 주요 타겟이 되어 지적 재산권 탈취의 가능성도 제기됩니다. Recommendations: 조직은 GitHub 토큰에 대해 최소 권한 원칙(PoLP)을 적용하고 토큰 만료 주기를 단축해야 합니다. 또한 GitHub의 Secret Scanning 및 Push Protection 기능을 활성화하고, 모든 커밋에 GPG 서명을 의무화하여 코드 무결성을 보장해야 합니다. CI/CD 파이프라인 내에서 타사 라이브러리의 코드 변경 사항을 자동으로 검사하는 보안 도구 도입이 권장됩니다.


## References
1. StepSecurity, GlassWorm: Malware Campaign Targeting Python Repositories, 2024
2. MITRE ATT&CK: T1195.001 (Supply Chain Compromise)
3. Ohm et al., Backstabber’s Knife Collection: A Review of Open Source Software Supply Chain Attacks, USENIX Security, 2020
4. CISA, Securing the Software Supply Chain: Recommended Practices for Developers, 2022
5. MITRE ATT&CK: T1078 (Valid Accounts)
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/glassworm-attack-uses-stolen-github.html)
    