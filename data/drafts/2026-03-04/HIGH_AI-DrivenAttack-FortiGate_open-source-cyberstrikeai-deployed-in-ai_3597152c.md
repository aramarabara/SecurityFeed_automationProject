
# Open-Source CyberStrikeAI Deployed in AI-Driven FortiGate Attacks Across 55 Countries

> Executive Overview: 최근 Team Cymru의 조사 결과, 'CyberStrikeAI'라는 오픈소스 AI 네이티브 보안 플랫폼이 전 세계 55개국에 걸친 Fortinet FortiGate 장비 공격에 악용되고 있음이 확인되었습니다. 이는 공격자가 AI 기술을 활용하여 공격의 규모와 속도를 획기적으로 향상시킨 사례로, 현대 사이버 위협 환경에서 AI 기술의 무기화가 본격화되고 있음을 시사하는 중대한 보안 사고입니다. Threat Analysis: 주요 공격 도구인 CyberStrikeAI는 본래 보안 테스팅 및 취약점 분석을 위해 설계된 AI 기반 플랫폼이나, 위협 행위자는 이를 공격 도구로 전용하여 스캐닝 및 익스플로잇 과정을 자동화했습니다. 특정 IP(212.11.64.250)를 통해 수행된 이번 캠페인은 AI의 의사결정 알고리즘을 활용하여 타겟 장비의 취약점을 실시간으로 파악하고 최적화된 공격 벡터를 선택하는 방법론을 채택하고 있습니다. Impact Assessment: 이번 공격은 55개국에 달하는 광범위한 지역의 네트워크 인프라에 직접적인 위협을 가하고 있습니다. FortiGate 장비는 조직의 네트워크 경계를 보호하는 핵심 장치이므로, 이 장비가 침해될 경우 공격자는 내부망으로의 횡적 이동(Lateral Movement)은 물론 민감한 데이터 탈취와 네트워크 서비스 중단을 유발할 수 있습니다. 특히 AI 기반 자동화는 방어자의 대응 시간을 훨씬 앞지르는 속도로 전개된다는 점에서 그 위협이 배가됩니다. Recommendations: 모든 조직은 즉시 FortiGate 장비의 펌웨어를 최신으로 업데이트하고 CVE-2024-21762와 같은 고위험 취약점에 대한 패치 여부를 재확인해야 합니다. 또한, 특정 IOC인 212.11.64.250에 대한 네트워크 차단을 실시하고, AI 기반의 자동화된 트래픽 이상 탐지 솔루션을 도입하여 패턴화되지 않은 스캐닝 시도를 조기에 탐지해야 합니다. 마지막으로 경계 보안에만 의존하지 않는 제로 트러스트 보안 모델을 강화할 것을 권고합니다.

**Severity**: HIGH (8.5/10)
**Tags**: AI-Driven Attack, FortiGate, CyberStrikeAI, Network Security, Automated Exploitation

## Analysis
Executive Overview: 최근 Team Cymru의 조사 결과, 'CyberStrikeAI'라는 오픈소스 AI 네이티브 보안 플랫폼이 전 세계 55개국에 걸친 Fortinet FortiGate 장비 공격에 악용되고 있음이 확인되었습니다. 이는 공격자가 AI 기술을 활용하여 공격의 규모와 속도를 획기적으로 향상시킨 사례로, 현대 사이버 위협 환경에서 AI 기술의 무기화가 본격화되고 있음을 시사하는 중대한 보안 사고입니다. Threat Analysis: 주요 공격 도구인 CyberStrikeAI는 본래 보안 테스팅 및 취약점 분석을 위해 설계된 AI 기반 플랫폼이나, 위협 행위자는 이를 공격 도구로 전용하여 스캐닝 및 익스플로잇 과정을 자동화했습니다. 특정 IP(212.11.64.250)를 통해 수행된 이번 캠페인은 AI의 의사결정 알고리즘을 활용하여 타겟 장비의 취약점을 실시간으로 파악하고 최적화된 공격 벡터를 선택하는 방법론을 채택하고 있습니다. Impact Assessment: 이번 공격은 55개국에 달하는 광범위한 지역의 네트워크 인프라에 직접적인 위협을 가하고 있습니다. FortiGate 장비는 조직의 네트워크 경계를 보호하는 핵심 장치이므로, 이 장비가 침해될 경우 공격자는 내부망으로의 횡적 이동(Lateral Movement)은 물론 민감한 데이터 탈취와 네트워크 서비스 중단을 유발할 수 있습니다. 특히 AI 기반 자동화는 방어자의 대응 시간을 훨씬 앞지르는 속도로 전개된다는 점에서 그 위협이 배가됩니다. Recommendations: 모든 조직은 즉시 FortiGate 장비의 펌웨어를 최신으로 업데이트하고 CVE-2024-21762와 같은 고위험 취약점에 대한 패치 여부를 재확인해야 합니다. 또한, 특정 IOC인 212.11.64.250에 대한 네트워크 차단을 실시하고, AI 기반의 자동화된 트래픽 이상 탐지 솔루션을 도입하여 패턴화되지 않은 스캐닝 시도를 조기에 탐지해야 합니다. 마지막으로 경계 보안에만 의존하지 않는 제로 트러스트 보안 모델을 강화할 것을 권고합니다.


## References
1. Team Cymru, AI-Native Platforms in Large-Scale Exploitation, Industry Report, 2024
2. CVE-2024-21762
3. MITRE ATT&CK: T1190 (Exploit Public-Facing Application)
4. J. Benson et al., The Rise of AI in Cyber Warfare, ACM Journal of Cybersecurity, 2023
5. MITRE ATT&CK: T1588.002 (Acquire Infrastructure: Tools)
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/open-source-cyberstrikeai-deployed-in.html)
    