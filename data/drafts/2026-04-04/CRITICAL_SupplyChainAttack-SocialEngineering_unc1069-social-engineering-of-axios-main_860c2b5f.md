
# UNC1069 Social Engineering of Axios Maintainer Led to npm Supply Chain Attack

> [Executive Overview] 최근 북한 연계 위협 그룹인 UNC1069가 전 세계적으로 널리 사용되는 npm 패키지인 'Axios'의 유지관리자를 대상으로 정밀한 사회공학적 공격을 수행하여 공급망 침해를 시도한 사건이 발생했습니다. 이는 오픈소스 생태계의 신뢰 구조를 악용한 고도화된 타겟 공격으로, 수많은 엔터프라이즈 애플리케이션의 보안 근간을 위협하는 중대한 사안입니다. [Threat Analysis] UNC1069는 Axios의 주요 유지관리자인 Jason Saayman에게 특정 기업의 창업자로 위장하여 접근하는 방식을 취했습니다. 이들은 장기간에 걸쳐 신뢰를 쌓은 후, 가짜 협업 제안이나 기술적 문의를 가장하여 악성 코드 주입을 시도하거나 계정 권한을 탈취하려 했습니다. 이러한 전술은 단순한 기술적 취약점 공략이 아닌, 인간의 심리를 교묘히 이용한 'Spear Phishing'과 'Identity Theft'의 결합 형태를 띱니다. [Impact Assessment] Axios는 주간 수천만 건 이상의 다운로드를 기록하는 핵심 라이브러리입니다. 만약 공격자가 패키지 배포 권한을 완전히 장악하여 악성 버전을 릴리스했을 경우, 이를 의존성으로 사용하는 전 세계 수백만 개의 웹 애플리케이션과 서버가 백도어 감염 및 데이터 유출 위험에 직속으로 노출됩니다. 이는 단순 기업 피해를 넘어 국가적 차원의 인프라 위협으로 번질 수 있는 파급력을 지닙니다. [Recommendations] 오픈소스 유지관리자는 반드시 하드웨어 토큰 기반의 MFA를 적용하고, 비정상적인 협업 요청에 대해 상호 검증 절차를 거쳐야 합니다. 개발 조직은 소프트웨어 자재 명세서(SBOM)를 도입하여 종속성을 투명하게 관리하고, 'npm audit'이나 소스 코드 정적 분석 도구(SAST)를 통해 의심스러운 코드 변경 사항을 실시간으로 모니터링해야 합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: Supply Chain Attack, Social Engineering, UNC1069, npm, Axios

## Analysis
[Executive Overview] 최근 북한 연계 위협 그룹인 UNC1069가 전 세계적으로 널리 사용되는 npm 패키지인 'Axios'의 유지관리자를 대상으로 정밀한 사회공학적 공격을 수행하여 공급망 침해를 시도한 사건이 발생했습니다. 이는 오픈소스 생태계의 신뢰 구조를 악용한 고도화된 타겟 공격으로, 수많은 엔터프라이즈 애플리케이션의 보안 근간을 위협하는 중대한 사안입니다. [Threat Analysis] UNC1069는 Axios의 주요 유지관리자인 Jason Saayman에게 특정 기업의 창업자로 위장하여 접근하는 방식을 취했습니다. 이들은 장기간에 걸쳐 신뢰를 쌓은 후, 가짜 협업 제안이나 기술적 문의를 가장하여 악성 코드 주입을 시도하거나 계정 권한을 탈취하려 했습니다. 이러한 전술은 단순한 기술적 취약점 공략이 아닌, 인간의 심리를 교묘히 이용한 'Spear Phishing'과 'Identity Theft'의 결합 형태를 띱니다. [Impact Assessment] Axios는 주간 수천만 건 이상의 다운로드를 기록하는 핵심 라이브러리입니다. 만약 공격자가 패키지 배포 권한을 완전히 장악하여 악성 버전을 릴리스했을 경우, 이를 의존성으로 사용하는 전 세계 수백만 개의 웹 애플리케이션과 서버가 백도어 감염 및 데이터 유출 위험에 직속으로 노출됩니다. 이는 단순 기업 피해를 넘어 국가적 차원의 인프라 위협으로 번질 수 있는 파급력을 지닙니다. [Recommendations] 오픈소스 유지관리자는 반드시 하드웨어 토큰 기반의 MFA를 적용하고, 비정상적인 협업 요청에 대해 상호 검증 절차를 거쳐야 합니다. 개발 조직은 소프트웨어 자재 명세서(SBOM)를 도입하여 종속성을 투명하게 관리하고, 'npm audit'이나 소스 코드 정적 분석 도구(SAST)를 통해 의심스러운 코드 변경 사항을 실시간으로 모니터링해야 합니다.


## References
1. MITRE ATT&CK: T1195.001 (Supply Chain Compromise: Compromise Software Dependencies and Development Tools)
2. Mandiant, North Korean Threat Actors Target Open Source Maintainers, Industry Report, 2024
3. MITRE ATT&CK: T1566.002 (Phishing: Spearphishing Link)
4. NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations, NIST, 2022
## Original Source
[The Hacker News](https://thehackernews.com/2026/04/unc1069-social-engineering-of-axios.html)
    