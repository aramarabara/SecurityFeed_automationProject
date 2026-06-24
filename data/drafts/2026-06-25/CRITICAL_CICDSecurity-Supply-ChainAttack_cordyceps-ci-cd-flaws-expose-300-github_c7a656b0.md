
# Cordyceps CI/CD Flaws Expose 300+ GitHub Repositories to Supply-Chain Attacks

> Executive Overview: 최근 보안 전문 기업인 Novee Security는 'Cordyceps'라 명명된 새로운 유형의 CI/CD 워크플로우 취약점 패턴을 발견하고 이를 공개했습니다. 이 취약점은 GitHub Actions의 설정 오류를 악용하여 공격자가 오픈 소스 소프트웨어 공급망을 직접적으로 장악할 수 있게 설계되었습니다. 조사 결과 Microsoft, Google, Apache와 같은 전 세계적인 기술 거대 기업의 리포지토리를 포함하여 300개 이상의 주요 오픈 소스 프로젝트가 이 위험에 노출된 것으로 확인되었습니다. 이는 현대적 개발 프로세스에서 CI/CD 파이프라인이 보안의 가장 약한 고리가 될 수 있음을 시사하는 심각한 보안 이슈입니다. Threat Analysis: Cordyceps 공격의 기술적 핵심은 GitHub Actions에서 제공하는 'pull_request_target' 이벤트의 부적절한 설정과 권한 남용에 있습니다. 공격자가 악의적인 코드가 포함된 Pull Request를 제출하면, 취약한 설정의 워크플로우는 이를 자동 실행하게 되며, 이 과정에서 높은 수준의 쓰기 권한을 가진 GITHUB_TOKEN이 공격자에게 노출됩니다. 공격자는 이를 이용해 소스 코드를 변조하거나 리포지토리에 저장된 API 키, 클라우드 접속 자격 증명 등의 민감한 시크릿 정보를 외부로 탈취할 수 있습니다. 특히 체크아웃 과정에서 외부 소스 코드를 검증 없이 실행하는 패턴이 주요 공격 벡터로 작용하여 파이프라인 내부의 신뢰 경계를 무너뜨립니다. Impact Assessment: 공격이 성공할 경우 오픈 소스 생태계 전반에 걸친 광범위한 피해가 예상됩니다. 공격자가 변조한 코드가 공식 패키지로 릴리스되면 이를 사용하는 수백만 명의 사용자가 악성 코드에 감염되는 '공급망 중독' 현상이 발생합니다. 특히 신뢰도가 높은 대형 프로젝트들이 대상이라는 점에서 기업 및 국가 인프라에 대한 2차 공격으로 이어질 가능성이 매우 큽니다. 이는 기업의 브랜드 이미지 실추뿐만 아니라 법적 책임 및 데이터 유출로 인한 막대한 경제적 손실을 야기합니다. Recommendations: 이를 방어하기 위해 조직은 CI/CD 파이프라인 설계 시 제로 트러스트 원칙을 적용해야 합니다. 우선 모든 워크플로우에서 GITHUB_TOKEN의 기본 권한을 최소 읽기 전용으로 설정하고, 필요한 경우에만 명시적으로 권한을 부여해야 합니다. 또한 외부 기여자가 제출한 코드는 반드시 보안 검토자의 수동 승인을 거친 후에만 워크플로우가 실행되도록 설정해야 하며, OIDC(OpenID Connect)를 사용하여 장기 보관되는 시크릿 사용을 지양해야 합니다. 정기적인 CI/CD 구성 스캐닝(SAST) 및 공급망 보안 도구 도입도 필수적입니다.

**Severity**: CRITICAL (8.8/10)
**Tags**: CI/CD Security, Supply-Chain Attack, GitHub Actions, DevSecOps, Repo Hijacking

## Analysis
Executive Overview: 최근 보안 전문 기업인 Novee Security는 'Cordyceps'라 명명된 새로운 유형의 CI/CD 워크플로우 취약점 패턴을 발견하고 이를 공개했습니다. 이 취약점은 GitHub Actions의 설정 오류를 악용하여 공격자가 오픈 소스 소프트웨어 공급망을 직접적으로 장악할 수 있게 설계되었습니다. 조사 결과 Microsoft, Google, Apache와 같은 전 세계적인 기술 거대 기업의 리포지토리를 포함하여 300개 이상의 주요 오픈 소스 프로젝트가 이 위험에 노출된 것으로 확인되었습니다. 이는 현대적 개발 프로세스에서 CI/CD 파이프라인이 보안의 가장 약한 고리가 될 수 있음을 시사하는 심각한 보안 이슈입니다. Threat Analysis: Cordyceps 공격의 기술적 핵심은 GitHub Actions에서 제공하는 'pull_request_target' 이벤트의 부적절한 설정과 권한 남용에 있습니다. 공격자가 악의적인 코드가 포함된 Pull Request를 제출하면, 취약한 설정의 워크플로우는 이를 자동 실행하게 되며, 이 과정에서 높은 수준의 쓰기 권한을 가진 GITHUB_TOKEN이 공격자에게 노출됩니다. 공격자는 이를 이용해 소스 코드를 변조하거나 리포지토리에 저장된 API 키, 클라우드 접속 자격 증명 등의 민감한 시크릿 정보를 외부로 탈취할 수 있습니다. 특히 체크아웃 과정에서 외부 소스 코드를 검증 없이 실행하는 패턴이 주요 공격 벡터로 작용하여 파이프라인 내부의 신뢰 경계를 무너뜨립니다. Impact Assessment: 공격이 성공할 경우 오픈 소스 생태계 전반에 걸친 광범위한 피해가 예상됩니다. 공격자가 변조한 코드가 공식 패키지로 릴리스되면 이를 사용하는 수백만 명의 사용자가 악성 코드에 감염되는 '공급망 중독' 현상이 발생합니다. 특히 신뢰도가 높은 대형 프로젝트들이 대상이라는 점에서 기업 및 국가 인프라에 대한 2차 공격으로 이어질 가능성이 매우 큽니다. 이는 기업의 브랜드 이미지 실추뿐만 아니라 법적 책임 및 데이터 유출로 인한 막대한 경제적 손실을 야기합니다. Recommendations: 이를 방어하기 위해 조직은 CI/CD 파이프라인 설계 시 제로 트러스트 원칙을 적용해야 합니다. 우선 모든 워크플로우에서 GITHUB_TOKEN의 기본 권한을 최소 읽기 전용으로 설정하고, 필요한 경우에만 명시적으로 권한을 부여해야 합니다. 또한 외부 기여자가 제출한 코드는 반드시 보안 검토자의 수동 승인을 거친 후에만 워크플로우가 실행되도록 설정해야 하며, OIDC(OpenID Connect)를 사용하여 장기 보관되는 시크릿 사용을 지양해야 합니다. 정기적인 CI/CD 구성 스캐닝(SAST) 및 공급망 보안 도구 도입도 필수적입니다.


## References
1. Novee Security, "Cordyceps: Hijacking the Open Source Supply Chain", Industry Report, 2024
2. MITRE ATT&CK: T1195.002
3. NIST SP 800-218, "Secure Software Development Framework (SSDF) Version 1.1", NIST, 2022
4. Vu et al., "LastPyMile: Identifying the Provenance of Binary Packages", USENIX Security, 2021
5. CISA, "Securing the Software Supply Chain: Recommended Practices for Developers", CISA/NSA/ODNI, 2022
## Original Source
[The Hacker News](https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html)
    