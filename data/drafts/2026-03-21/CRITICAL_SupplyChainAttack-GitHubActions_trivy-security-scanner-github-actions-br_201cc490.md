
# Trivy Security Scanner GitHub Actions Breached, 75 Tags Hijacked to Steal CI/CD Secrets

> [Executive Overview] Aqua Security에서 유지 관리하는 오픈소스 취약점 스캐너 Trivy의 GitHub Action 태그 75개가 하이재킹되어 CI/CD 시크릿을 탈취하는 공급망 공격이 발생했습니다. 한 달 사이 두 번째로 발생한 이번 사고는 보안 도구 자체가 공격의 매개체가 되었다는 점에서 현대 소프트웨어 공급망의 취약성을 여실히 보여줍니다. [Threat Analysis] 공격자는 'aquasecurity/trivy-action' 및 'aquasecurity/setup-trivy' 레포지토리의 기존 릴리스 태그를 수정하여 악성 코드를 주입했습니다. GitHub Actions 워크플로우가 실행될 때, 이 악성 코드는 환경 변수(Environment Variables)와 GitHub 토큰 등을 수집하여 공격자의 원격 서버로 전송하는 전형적인 시크릿 유출 기법을 사용했습니다. [Impact Assessment] Trivy는 전 세계적으로 널리 사용되는 컨테이너 보안 스캐너이므로, 이를 CI/CD 파이프라인에 통합한 수많은 기업의 클라우드 자격 증명 및 API 키가 노출되었을 위험이 큽니다. 이는 2차 침투를 통한 데이터 유출이나 인프라 장악으로 이어질 수 있는 심각한 위협입니다. [Recommendations] 사용자는 즉시 기존 태그 기반의 참조를 신뢰할 수 있는 특정 커밋 SHA(Commit Hash)로 교체해야 합니다. 또한 파이프라인에서 사용된 모든 비밀번호와 토큰을 즉시 무효화하고 재발급(Rotation)해야 하며, GitHub Actions의 최소 권한 원칙(Least Privilege)을 적용하여 'contents: read'와 같은 제한적 권한만을 부여해야 합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: Supply Chain Attack, GitHub Actions, CI/CD Security, Credential Theft, Trivy

## Analysis
[Executive Overview] Aqua Security에서 유지 관리하는 오픈소스 취약점 스캐너 Trivy의 GitHub Action 태그 75개가 하이재킹되어 CI/CD 시크릿을 탈취하는 공급망 공격이 발생했습니다. 한 달 사이 두 번째로 발생한 이번 사고는 보안 도구 자체가 공격의 매개체가 되었다는 점에서 현대 소프트웨어 공급망의 취약성을 여실히 보여줍니다. [Threat Analysis] 공격자는 'aquasecurity/trivy-action' 및 'aquasecurity/setup-trivy' 레포지토리의 기존 릴리스 태그를 수정하여 악성 코드를 주입했습니다. GitHub Actions 워크플로우가 실행될 때, 이 악성 코드는 환경 변수(Environment Variables)와 GitHub 토큰 등을 수집하여 공격자의 원격 서버로 전송하는 전형적인 시크릿 유출 기법을 사용했습니다. [Impact Assessment] Trivy는 전 세계적으로 널리 사용되는 컨테이너 보안 스캐너이므로, 이를 CI/CD 파이프라인에 통합한 수많은 기업의 클라우드 자격 증명 및 API 키가 노출되었을 위험이 큽니다. 이는 2차 침투를 통한 데이터 유출이나 인프라 장악으로 이어질 수 있는 심각한 위협입니다. [Recommendations] 사용자는 즉시 기존 태그 기반의 참조를 신뢰할 수 있는 특정 커밋 SHA(Commit Hash)로 교체해야 합니다. 또한 파이프라인에서 사용된 모든 비밀번호와 토큰을 즉시 무효화하고 재발급(Rotation)해야 하며, GitHub Actions의 최소 권한 원칙(Least Privilege)을 적용하여 'contents: read'와 같은 제한적 권한만을 부여해야 합니다.


## References
1. Ladisa et al., Taxonomy of Attacks on Open-Source Software Supply Chains, IEEE, 2023
2. MITRE ATT&CK: T1195.002 (Supply Chain Compromise: Compromise Software Dependencies)
3. MITRE ATT&CK: T1552 (Unsecured Credentials)
4. CISA, Securing the Software Supply Chain: Recommended Practices for Developers, 2022
5. Aqua Security, Security Advisory: Trivy-Action Tag Hijacking Incident, 2024
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/trivy-security-scanner-github-actions.html)
    