
# ThreatsDay Bulletin: Edge Plaintext Passwords, ICS 0-Days, Patch-or-Die Alerts and 25+ New Stories

> [Executive Overview] 2026년 사이버 위협 지형은 기술적 정교함보다 관리 소홀과 공급망의 약점을 공략하는 방향으로 회귀하고 있습니다. Microsoft Edge 브라우저의 평문 비밀번호 노출과 ICS(산업 제어 시스템)의 제로데이 취약점은 국가 기반 시설과 기업 데이터 보안에 즉각적인 위협을 제기하며, 이는 단순한 보안 사고를 넘어 국가 안보 문제로 직결됩니다. [Threat Analysis] 공격자들은 악성 npm/PyPI 패키지, 위조 앱, 방치된 DNS 레코드를 활용한 하이재킹 등 고전적이지만 효과적인 벡터를 사용합니다. 특히 탈취된 계정 정보가 Discord 및 Telegram과 같은 플랫폼에서 대규모로 공개 유통되며 공격의 진입 장벽이 극도로 낮아지고 있습니다. 이러한 '자격 증명 유출의 일상화'는 복잡한 해킹 기술 없이도 자동화된 도구만으로 엔터프라이즈 환경을 침해할 수 있음을 시사합니다. [Impact Assessment] ICS 취약점은 단순 데이터 유출을 넘어 공장 가동 중단이나 에너지망 마비와 같은 물리적 피해(Kinetic Impact)를 야기할 수 있습니다. 또한 브라우저 내 평문 비밀번호 노출은 기업 내부망 침투 후 권한 상승 및 횡적 이동(Lateral Movement)의 핵심 경로로 작용하여 랜섬웨어 확산의 치명적인 도화선이 됩니다. [Recommendations] 조직은 'Patch-or-Die' 정책을 수용하여 긴급 패치 관리 우선순위를 재설정해야 합니다. 하드웨어 기반 다요소 인증(MFA)의 전면 도입, 공급망 보안을 위한 소프트웨어 자재 명세서(SBOM) 검증, 그리고 방치된 DNS 자산에 대한 정기적인 인벤토리 점검과 가시성 확보가 필수적으로 요구됩니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: ICS Security, Zero-Day, Credential Theft, Supply Chain Attack, DNS Hijacking

## Analysis
[Executive Overview] 2026년 사이버 위협 지형은 기술적 정교함보다 관리 소홀과 공급망의 약점을 공략하는 방향으로 회귀하고 있습니다. Microsoft Edge 브라우저의 평문 비밀번호 노출과 ICS(산업 제어 시스템)의 제로데이 취약점은 국가 기반 시설과 기업 데이터 보안에 즉각적인 위협을 제기하며, 이는 단순한 보안 사고를 넘어 국가 안보 문제로 직결됩니다. [Threat Analysis] 공격자들은 악성 npm/PyPI 패키지, 위조 앱, 방치된 DNS 레코드를 활용한 하이재킹 등 고전적이지만 효과적인 벡터를 사용합니다. 특히 탈취된 계정 정보가 Discord 및 Telegram과 같은 플랫폼에서 대규모로 공개 유통되며 공격의 진입 장벽이 극도로 낮아지고 있습니다. 이러한 '자격 증명 유출의 일상화'는 복잡한 해킹 기술 없이도 자동화된 도구만으로 엔터프라이즈 환경을 침해할 수 있음을 시사합니다. [Impact Assessment] ICS 취약점은 단순 데이터 유출을 넘어 공장 가동 중단이나 에너지망 마비와 같은 물리적 피해(Kinetic Impact)를 야기할 수 있습니다. 또한 브라우저 내 평문 비밀번호 노출은 기업 내부망 침투 후 권한 상승 및 횡적 이동(Lateral Movement)의 핵심 경로로 작용하여 랜섬웨어 확산의 치명적인 도화선이 됩니다. [Recommendations] 조직은 'Patch-or-Die' 정책을 수용하여 긴급 패치 관리 우선순위를 재설정해야 합니다. 하드웨어 기반 다요소 인증(MFA)의 전면 도입, 공급망 보안을 위한 소프트웨어 자재 명세서(SBOM) 검증, 그리고 방치된 DNS 자산에 대한 정기적인 인벤토리 점검과 가시성 확보가 필수적으로 요구됩니다.


## References
1. MITRE ATT&CK: T1555 - Credentials from Web Browsers
2. MITRE ATT&CK: T1195 - Supply Chain Compromise
3. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST SP 800-82r3, 2023
4. Mandiant, M-Trends 2024 Special Report, 2024
5. CISA Alert (AA23-201A): Identification and Mitigating Risks in ICS
## Original Source
[The Hacker News](https://thehackernews.com/2026/05/threatsday-bulletin-edge-plaintext.html)
    