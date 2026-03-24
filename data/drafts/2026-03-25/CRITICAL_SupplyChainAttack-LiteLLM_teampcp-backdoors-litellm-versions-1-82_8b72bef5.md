
# TeamPCP Backdoors LiteLLM Versions 1.82.7–1.82.8 Likely via Trivy CI/CD Compromise

> [Executive Overview] 최근 TeamPCP 위협 그룹이 인기 있는 Python 오픈소스 라이브러리인 LiteLLM의 특정 버전(1.82.7 및 1.82.8)을 침해하여 악성 코드를 주입하는 공급망 공격을 수행했습니다. 이번 사고는 Trivy 및 KICS와 같은 널리 사용되는 보안 스캐닝 도구의 CI/CD 인프라가 침해된 것과 궤를 같이하며, 현대적인 소프트웨어 개발 파이프라인의 취약성을 극명하게 보여줍니다. [Threat Analysis] 공격자는 LiteLLM 패키지 내부에 자격 증명 수집기(Credential Harvester), 쿠버네티스(Kubernetes) 환경에서의 측면 이동(Lateral Movement) 툴킷, 그리고 지속적인 원격 제어를 위한 백도어를 포함시켰습니다. 분석 결과, 공격자는 신뢰할 수 있는 빌드 시스템을 장악하여 정상적인 배포 과정을 통해 악성 코드를 유포하는 정교한 전술을 구사했습니다. [Impact Assessment] LiteLLM은 LLM API 통합을 위해 수많은 기업에서 채택하고 있는 라이브러리로, 해당 버전을 설치한 조직은 클라우드 API 키 탈취, K8s 클러스터 제어권 상실, 그리고 내부 민감 데이터 유출의 심각한 위험에 노출되었습니다. 특히 AI 인프라와 컨테이너 오케스트레이션 환경을 동시에 겨냥했다는 점에서 피해 규모가 상당할 것으로 예측됩니다. [Recommendations] 모든 조직은 LiteLLM 설치 버전을 즉시 검토하고 1.82.7 및 1.82.8 버전을 즉각 폐기 및 안전한 최신 버전으로 업데이트해야 합니다. 또한 침해된 환경에서 사용된 모든 API 키와 클라우드 자격 증명을 즉시 교체(Rotation)하고, CI/CD 파이프라인에 대한 코드 서명 및 무결성 검증 프로세스를 강화할 것을 권고합니다.

**Severity**: CRITICAL (8.8/10)
**Tags**: Supply Chain Attack, LiteLLM, TeamPCP, Kubernetes Security, Credential Theft

## Analysis
[Executive Overview] 최근 TeamPCP 위협 그룹이 인기 있는 Python 오픈소스 라이브러리인 LiteLLM의 특정 버전(1.82.7 및 1.82.8)을 침해하여 악성 코드를 주입하는 공급망 공격을 수행했습니다. 이번 사고는 Trivy 및 KICS와 같은 널리 사용되는 보안 스캐닝 도구의 CI/CD 인프라가 침해된 것과 궤를 같이하며, 현대적인 소프트웨어 개발 파이프라인의 취약성을 극명하게 보여줍니다. [Threat Analysis] 공격자는 LiteLLM 패키지 내부에 자격 증명 수집기(Credential Harvester), 쿠버네티스(Kubernetes) 환경에서의 측면 이동(Lateral Movement) 툴킷, 그리고 지속적인 원격 제어를 위한 백도어를 포함시켰습니다. 분석 결과, 공격자는 신뢰할 수 있는 빌드 시스템을 장악하여 정상적인 배포 과정을 통해 악성 코드를 유포하는 정교한 전술을 구사했습니다. [Impact Assessment] LiteLLM은 LLM API 통합을 위해 수많은 기업에서 채택하고 있는 라이브러리로, 해당 버전을 설치한 조직은 클라우드 API 키 탈취, K8s 클러스터 제어권 상실, 그리고 내부 민감 데이터 유출의 심각한 위험에 노출되었습니다. 특히 AI 인프라와 컨테이너 오케스트레이션 환경을 동시에 겨냥했다는 점에서 피해 규모가 상당할 것으로 예측됩니다. [Recommendations] 모든 조직은 LiteLLM 설치 버전을 즉시 검토하고 1.82.7 및 1.82.8 버전을 즉각 폐기 및 안전한 최신 버전으로 업데이트해야 합니다. 또한 침해된 환경에서 사용된 모든 API 키와 클라우드 자격 증명을 즉시 교체(Rotation)하고, CI/CD 파이프라인에 대한 코드 서명 및 무결성 검증 프로세스를 강화할 것을 권고합니다.


## References
1. Endor Labs & JFrog Research, TeamPCP Supply Chain Attack Analysis, Industry Report, 2024
2. MITRE ATT&CK: T1195.002 (Supply Chain Compromise: Compromise Software Dependencies)
3. Ohm et al., Backstabber's Knife Collection: A Review of Open Source Software Supply Chain Attacks, USENIX Security, 2020
4. MITRE ATT&CK: T1078 (Valid Accounts)
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/teampcp-backdoors-litellm-versions.html)
    