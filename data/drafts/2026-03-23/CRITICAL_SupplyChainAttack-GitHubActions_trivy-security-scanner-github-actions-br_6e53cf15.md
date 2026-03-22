
# Trivy Security Scanner GitHub Actions Breached, 75 Tags Hijacked to Steal CI/CD Secrets

> [Executive Overview] Aqua Security에서 유지 관리하는 오픈소스 취약점 스캐너 Trivy의 GitHub Actions 환경이 최근 한 달 사이 두 번째 침해 사고를 당했습니다. 공격자는 'aquasecurity/trivy-action' 및 'aquasecurity/setup-trivy'의 75개 태그를 하이재킹하여 악성 코드를 삽입했으며, 이를 통해 전 세계 수천 개의 CI/CD 파이프라인에서 민감한 시크릿 정보를 탈취하는 치명적인 소프트웨어 공급망 공격을 수행했습니다.

[Threat Analysis] 기술적 분석 결과, 공격자는 기존에 신뢰되던 GitHub 태그가 가리키는 커밋을 악성 페이로드가 포함된 버전으로 교체했습니다. 해당 페이로드는 GitHub Actions 워크플로우가 실행될 때 작동하여, 환경 변수에 저장된 GitHub Secrets, 클라우드 자격 증명(AWS/GCP/Azure 키), 그리고 API 토큰을 수집한 뒤 공격자의 원격 서버로 전송하도록 설계되었습니다. 이는 태그의 가변성을 악용한 전형적인 공급망 침해 사례입니다.

[Impact Assessment] Trivy는 컨테이너 보안 스캔의 표준 도구로 널리 사용되기 때문에, 포춘 500대 기업을 포함한 대규모 인프라가 위험에 노출되었습니다. 특히 버전을 고정(Pinning)하여 사용하던 개발자들조차 하이재킹된 태그로 인해 피해를 입었으며, 유출된 시크릿을 통해 공격자가 대상 기업의 내부 클라우드 환경으로 횡적 이동(Lateral Movement)을 감행할 수 있는 심각한 위협 상황입니다.

[Recommendations] 조직은 즉시 모든 Trivy 관련 GitHub Actions 참조를 태그 기반에서 변경 불가능한 Full SHA 커밋 해시 값으로 전환해야 합니다. 또한, 침해 발생 기간 동안 노출되었을 가능성이 있는 모든 API 키와 시크릿을 즉시 폐기하고 재발급(Rotation)해야 하며, CI/CD 환경에서의 아웃바운드 네트워크 통제 및 최소 권한 원칙(Least Privilege)을 강화하여 비정상적인 데이터 전송을 차단해야 합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: Supply Chain Attack, GitHub Actions, Secrets Theft, CI/CD Security, Trivy

## Analysis
[Executive Overview] Aqua Security에서 유지 관리하는 오픈소스 취약점 스캐너 Trivy의 GitHub Actions 환경이 최근 한 달 사이 두 번째 침해 사고를 당했습니다. 공격자는 'aquasecurity/trivy-action' 및 'aquasecurity/setup-trivy'의 75개 태그를 하이재킹하여 악성 코드를 삽입했으며, 이를 통해 전 세계 수천 개의 CI/CD 파이프라인에서 민감한 시크릿 정보를 탈취하는 치명적인 소프트웨어 공급망 공격을 수행했습니다.

[Threat Analysis] 기술적 분석 결과, 공격자는 기존에 신뢰되던 GitHub 태그가 가리키는 커밋을 악성 페이로드가 포함된 버전으로 교체했습니다. 해당 페이로드는 GitHub Actions 워크플로우가 실행될 때 작동하여, 환경 변수에 저장된 GitHub Secrets, 클라우드 자격 증명(AWS/GCP/Azure 키), 그리고 API 토큰을 수집한 뒤 공격자의 원격 서버로 전송하도록 설계되었습니다. 이는 태그의 가변성을 악용한 전형적인 공급망 침해 사례입니다.

[Impact Assessment] Trivy는 컨테이너 보안 스캔의 표준 도구로 널리 사용되기 때문에, 포춘 500대 기업을 포함한 대규모 인프라가 위험에 노출되었습니다. 특히 버전을 고정(Pinning)하여 사용하던 개발자들조차 하이재킹된 태그로 인해 피해를 입었으며, 유출된 시크릿을 통해 공격자가 대상 기업의 내부 클라우드 환경으로 횡적 이동(Lateral Movement)을 감행할 수 있는 심각한 위협 상황입니다.

[Recommendations] 조직은 즉시 모든 Trivy 관련 GitHub Actions 참조를 태그 기반에서 변경 불가능한 Full SHA 커밋 해시 값으로 전환해야 합니다. 또한, 침해 발생 기간 동안 노출되었을 가능성이 있는 모든 API 키와 시크릿을 즉시 폐기하고 재발급(Rotation)해야 하며, CI/CD 환경에서의 아웃바운드 네트워크 통제 및 최소 권한 원칙(Least Privilege)을 강화하여 비정상적인 데이터 전송을 차단해야 합니다.


## References
1. Ladisa et al., Taxonomy of Attacks on Open-Source Software Supply Chains, IEEE, 2023
2. MITRE ATT&CK: T1195.002 (Supply Chain Compromise: Software Dependencies)
3. CISA & NSA, Securing the Software Supply Chain: Recommended Practices for Developers, 2022
4. Ohm et al., Backstabber's Knife Collection: A Review of Open Source Software Supply Chain Attacks, International Conference on Detection of Intrusions and Malware, and Vulnerability Assessment, 2020
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/trivy-security-scanner-github-actions.html)
    