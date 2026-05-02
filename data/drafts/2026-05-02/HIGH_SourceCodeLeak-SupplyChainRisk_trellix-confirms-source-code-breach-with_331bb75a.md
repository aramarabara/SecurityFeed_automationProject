
# Trellix Confirms Source Code Breach With Unauthorized Repository Access

> Executive Overview: 최근 글로벌 보안 기업인 Trellix는 자사 소스 코드 저장소의 일부가 무단으로 액세스되었음을 공식 확인했습니다. 이번 사건은 보안 솔루션을 제공하는 기업의 핵심 지적 재산이 노출되었다는 점에서 공급망 보안 및 제품 신뢰도에 상당한 위협을 시사합니다. Trellix는 현재 포렌식 전문가 및 수사 기관과 협력하여 정확한 유출 범위와 경로를 조사 중입니다. Threat Analysis: 소스 코드 저장소에 대한 무단 접근은 대개 개발자 계정 탈취, CI/CD 파이프라인의 취약점 공격, 또는 잘못된 권한 설정을 통해 이루어집니다. 공격자는 유출된 코드를 분석하여 탐지 로직을 우회하거나, 코드 내에 포함되었을 수 있는 API 키, 암호화 키 등 민감한 자격 증명을 확보하여 2차 공격을 시도할 가능성이 큽니다. Impact Assessment: 이번 침해의 가장 큰 영향은 공격자가 Trellix 보안 제품에 대한 '화이트박스(White-box)' 분석 권한을 갖게 된다는 점입니다. 이는 제품의 취약점을 발견하기 훨씬 용이하게 만들며, 결과적으로 해당 솔루션을 사용하는 수많은 엔드포인트와 네트워크가 제로데이 공격 위험에 노출될 수 있습니다. 기업의 브랜드 가치 하락과 고객 신뢰도 저하 또한 불가피한 결과입니다. Recommendations: 조직은 소스 코드 관리 시스템(SCM)에 대해 하드웨어 기반 MFA(FIDO2)를 필수 적용하고, 유출된 범위 내에 존재했을 수 있는 모든 비밀번호 및 액세스 토큰을 즉시 교체해야 합니다. 또한, CI/CD 파이프라인의 보안 감사를 실시하고 Secrets Scanning 도구를 도입하여 코드 내 민감 정보 노출을 방지해야 합니다. 마지막으로, Trellix 제품 사용자는 벤더의 패치 및 권고 사항을 지속적으로 모니터링해야 합니다.

**Severity**: HIGH (8.2/10)
**Tags**: Source Code Leak, Supply Chain Risk, CI/CD Security, Credential Compromise

## Analysis
Executive Overview: 최근 글로벌 보안 기업인 Trellix는 자사 소스 코드 저장소의 일부가 무단으로 액세스되었음을 공식 확인했습니다. 이번 사건은 보안 솔루션을 제공하는 기업의 핵심 지적 재산이 노출되었다는 점에서 공급망 보안 및 제품 신뢰도에 상당한 위협을 시사합니다. Trellix는 현재 포렌식 전문가 및 수사 기관과 협력하여 정확한 유출 범위와 경로를 조사 중입니다. Threat Analysis: 소스 코드 저장소에 대한 무단 접근은 대개 개발자 계정 탈취, CI/CD 파이프라인의 취약점 공격, 또는 잘못된 권한 설정을 통해 이루어집니다. 공격자는 유출된 코드를 분석하여 탐지 로직을 우회하거나, 코드 내에 포함되었을 수 있는 API 키, 암호화 키 등 민감한 자격 증명을 확보하여 2차 공격을 시도할 가능성이 큽니다. Impact Assessment: 이번 침해의 가장 큰 영향은 공격자가 Trellix 보안 제품에 대한 '화이트박스(White-box)' 분석 권한을 갖게 된다는 점입니다. 이는 제품의 취약점을 발견하기 훨씬 용이하게 만들며, 결과적으로 해당 솔루션을 사용하는 수많은 엔드포인트와 네트워크가 제로데이 공격 위험에 노출될 수 있습니다. 기업의 브랜드 가치 하락과 고객 신뢰도 저하 또한 불가피한 결과입니다. Recommendations: 조직은 소스 코드 관리 시스템(SCM)에 대해 하드웨어 기반 MFA(FIDO2)를 필수 적용하고, 유출된 범위 내에 존재했을 수 있는 모든 비밀번호 및 액세스 토큰을 즉시 교체해야 합니다. 또한, CI/CD 파이프라인의 보안 감사를 실시하고 Secrets Scanning 도구를 도입하여 코드 내 민감 정보 노출을 방지해야 합니다. 마지막으로, Trellix 제품 사용자는 벤더의 패치 및 권고 사항을 지속적으로 모니터링해야 합니다.


## References
1. MITRE ATT&CK: T1552 (Unsecured Credentials)
2. NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations, 2022
3. Kim et al., Security of Software Supply Chain: A Survey and Future Directions, IEEE Access, 2021
4. CISA Advisory, Securing the Software Supply Chain: Recommended Practices for Software Bill of Materials (SBOM) Management, 2023
## Original Source
[The Hacker News](https://thehackernews.com/2026/05/trellix-confirms-source-code-breach.html)
    