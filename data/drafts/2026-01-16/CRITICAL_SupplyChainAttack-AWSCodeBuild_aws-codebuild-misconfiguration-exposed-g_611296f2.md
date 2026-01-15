
# AWS CodeBuild Misconfiguration Exposed GitHub Repos to Potential Supply Chain Attacks

> Executive Overview: AWS CodeBuild에서 발생한 설정 오류인 'CodeBreach' 취약점은 클라우드 서비스 제공업체(CSP)의 내부 인프라가 공급망 공격에 얼마나 취약할 수 있는지를 극명하게 보여줍니다. 클라우드 보안 기업 Wiz에 의해 발견된 이 결함은 AWS JavaScript SDK를 포함한 AWS의 핵심 GitHub 리포지토리에 대한 무단 접근 및 제어 권한을 허용할 수 있는 위험을 내포하고 있었습니다. Threat Analysis: 해당 취약점은 CodeBuild 프로젝트의 빌드 환경 설정 미흡으로 인해 발생했습니다. 공격자는 빌드 프로세스 내의 권한 상향(Privilege Escalation)을 통해 연결된 소스 코드 저장소에 임의의 커밋을 푸시하거나 빌드 아티팩트를 오염시킬 수 있었습니다. 이는 신뢰된 빌드 시스템을 공격의 교두보로 삼는 전형적인 CI/CD 파이프라인 침해 기법을 따릅니다. Impact Assessment: AWS JavaScript SDK는 전 세계 수많은 클라우드 애플리케이션의 기반이 되는 라이브러리입니다. 만약 이 리포지토리가 탈취되어 악성 코드가 주입되었다면, AWS 환경을 사용하는 거의 모든 기업과 사용자가 백도어 또는 데이터 유출 위협에 노출되었을 것입니다. 이는 단순한 데이터 침해를 넘어 글로벌 클라우드 생태계 전반의 신뢰성을 무너뜨릴 수 있는 수준의 위협입니다. Recommendations: 기업은 CI/CD 파이프라인에 대해 '최소 권한 원칙'을 엄격히 적용하고, 빌드 환경과 소스 코드 저장소 간의 IAM 권한을 정기적으로 감사해야 합니다. 또한, 빌드된 아티팩트의 무결성을 보장하기 위해 코드 서명 기술을 도입하고, CSPM(Cloud Security Posture Management) 솔루션을 통해 클라우드 서비스의 오설정 유무를 실시간으로 모니터링해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: Supply Chain Attack, AWS CodeBuild, Cloud Misconfiguration, CI/CD Security, CodeBreach

## Analysis
Executive Overview: AWS CodeBuild에서 발생한 설정 오류인 'CodeBreach' 취약점은 클라우드 서비스 제공업체(CSP)의 내부 인프라가 공급망 공격에 얼마나 취약할 수 있는지를 극명하게 보여줍니다. 클라우드 보안 기업 Wiz에 의해 발견된 이 결함은 AWS JavaScript SDK를 포함한 AWS의 핵심 GitHub 리포지토리에 대한 무단 접근 및 제어 권한을 허용할 수 있는 위험을 내포하고 있었습니다. Threat Analysis: 해당 취약점은 CodeBuild 프로젝트의 빌드 환경 설정 미흡으로 인해 발생했습니다. 공격자는 빌드 프로세스 내의 권한 상향(Privilege Escalation)을 통해 연결된 소스 코드 저장소에 임의의 커밋을 푸시하거나 빌드 아티팩트를 오염시킬 수 있었습니다. 이는 신뢰된 빌드 시스템을 공격의 교두보로 삼는 전형적인 CI/CD 파이프라인 침해 기법을 따릅니다. Impact Assessment: AWS JavaScript SDK는 전 세계 수많은 클라우드 애플리케이션의 기반이 되는 라이브러리입니다. 만약 이 리포지토리가 탈취되어 악성 코드가 주입되었다면, AWS 환경을 사용하는 거의 모든 기업과 사용자가 백도어 또는 데이터 유출 위협에 노출되었을 것입니다. 이는 단순한 데이터 침해를 넘어 글로벌 클라우드 생태계 전반의 신뢰성을 무너뜨릴 수 있는 수준의 위협입니다. Recommendations: 기업은 CI/CD 파이프라인에 대해 '최소 권한 원칙'을 엄격히 적용하고, 빌드 환경과 소스 코드 저장소 간의 IAM 권한을 정기적으로 감사해야 합니다. 또한, 빌드된 아티팩트의 무결성을 보장하기 위해 코드 서명 기술을 도입하고, CSPM(Cloud Security Posture Management) 솔루션을 통해 클라우드 서비스의 오설정 유무를 실시간으로 모니터링해야 합니다.


## References
1. Alon Schindel et al., CodeBreach: How a misconfiguration in AWS CodeBuild exposed AWS's own source code, Wiz Research Report, 2025
2. MITRE ATT&CK: T1195.002 (Supply Chain Compromise: Software Dependencies and Development Tools)
3. NIST SP 800-161r1, Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations, NIST, 2022
4. MITRE ATT&CK: T1537 (Transfer Data to Cloud Account)
## Original Source
[The Hacker News](https://thehackernews.com/2026/01/aws-codebuild-misconfiguration-exposed.html)
    