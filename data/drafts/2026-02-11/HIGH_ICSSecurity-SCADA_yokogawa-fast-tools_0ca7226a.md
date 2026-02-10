
# Yokogawa FAST/TOOLS

> Executive Overview: 요코가와(Yokogawa)의 산업 제어 시스템(ICS) 관리 소프트웨어인 FAST/TOOLS에서 다수의 심각한 보안 취약점이 발견되어 전 세계 에너지 및 제조 산업의 핵심 인프라 보호에 비상이 걸렸습니다. 이번에 보고된 14개의 취약점은 원격 코드 실행, 데이터 탈취 및 중간자 공격(MITM)을 포함한 광범위한 공격 벡터를 제공하며, 이는 국가 기가 산업의 운영 중단으로 이어질 수 있는 중대한 사안입니다. Threat Analysis: 주요 취약점인 CVE-2025-66608은 경로 탐색(Path Traversal)을 통해 서버 내부의 민감한 파일에 접근할 수 있게 하며, CVE-2025-66597은 취약한 암호화 알고리즘 사용으로 인해 통신 내용이 복호화될 위험을 내포하고 있습니다. 공격자는 HSTS 설정 부재를 악용해 세션을 가로채거나 CSRF를 통해 사용자 권한을 찬탈함으로써 제어 시스템의 논리 구조를 임의로 조작할 수 있습니다. Impact Assessment: 해당 취약점은 전 세계 제조, 에너지, 농업 분야 등 핵심 인프라 전반에 영향을 미치며, 성공적으로 악용될 경우 산업 기밀 유출은 물론 물리적 설비 제어권 상실이라는 파괴적인 결과를 초래할 수 있습니다. 특히 IP 기반 인증 의존성으로 인해 내부망에 침투한 웜 공격에 매우 취약한 구조임이 확인되었습니다. Recommendations: 관리자는 즉시 Yokogawa FAST/TOOLS를 R10.04 버전으로 업데이트하고 전용 패치(CS_e12787) 및 서비스 팩(SP3)을 적용해야 합니다. 또한 제어 네트워크를 외부 인터넷으로부터 완전히 격리하고, 심층 방어(Defense-in-Depth) 전략을 구축하여 비정상 트래픽에 대한 실시간 모니터링 체계를 강화할 것을 권고합니다.

**Severity**: HIGH (8.2/10)
**Tags**: ICS Security, SCADA, Yokogawa, CVE-2025-66608, Path Traversal

## Analysis
Executive Overview: 요코가와(Yokogawa)의 산업 제어 시스템(ICS) 관리 소프트웨어인 FAST/TOOLS에서 다수의 심각한 보안 취약점이 발견되어 전 세계 에너지 및 제조 산업의 핵심 인프라 보호에 비상이 걸렸습니다. 이번에 보고된 14개의 취약점은 원격 코드 실행, 데이터 탈취 및 중간자 공격(MITM)을 포함한 광범위한 공격 벡터를 제공하며, 이는 국가 기가 산업의 운영 중단으로 이어질 수 있는 중대한 사안입니다. Threat Analysis: 주요 취약점인 CVE-2025-66608은 경로 탐색(Path Traversal)을 통해 서버 내부의 민감한 파일에 접근할 수 있게 하며, CVE-2025-66597은 취약한 암호화 알고리즘 사용으로 인해 통신 내용이 복호화될 위험을 내포하고 있습니다. 공격자는 HSTS 설정 부재를 악용해 세션을 가로채거나 CSRF를 통해 사용자 권한을 찬탈함으로써 제어 시스템의 논리 구조를 임의로 조작할 수 있습니다. Impact Assessment: 해당 취약점은 전 세계 제조, 에너지, 농업 분야 등 핵심 인프라 전반에 영향을 미치며, 성공적으로 악용될 경우 산업 기밀 유출은 물론 물리적 설비 제어권 상실이라는 파괴적인 결과를 초래할 수 있습니다. 특히 IP 기반 인증 의존성으로 인해 내부망에 침투한 웜 공격에 매우 취약한 구조임이 확인되었습니다. Recommendations: 관리자는 즉시 Yokogawa FAST/TOOLS를 R10.04 버전으로 업데이트하고 전용 패치(CS_e12787) 및 서비스 팩(SP3)을 적용해야 합니다. 또한 제어 네트워크를 외부 인터넷으로부터 완전히 격리하고, 심층 방어(Defense-in-Depth) 전략을 구축하여 비정상 트래픽에 대한 실시간 모니터링 체계를 강화할 것을 권고합니다.


## References
1. CISA, ICSA-26-041-01: Yokogawa FAST/TOOLS, 2026
2. CVE-2025-66608
3. CVE-2025-66597
4. MITRE ATT&CK: T0847 (Control Device Property Discovery)
5. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-041-01)
    