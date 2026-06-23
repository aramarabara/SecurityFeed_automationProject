
# FortiBleed Targeted FortiGate Firewalls in 110 Million-Credential Harvesting Operation

> [Executive Overview] 2026년 2월부터 시작된 'FortiBleed' 캠페인은 전 세계 43만 대 이상의 FortiGate 방화벽을 겨냥한 전례 없는 규모의 자격 증명 탈취 작전입니다. 러시아어를 사용하는 초기 침투 브로커(IAB)에 의해 주도되는 이 공격은 약 1억 1천만 개의 계정 정보를 수집하며 기업 네트워크 보안의 근간을 위협하고 있습니다. [Threat Analysis] 공격자는 노출된 FortiGate 서비스를 검색한 후 대규모 자격 증명 목록을 활용한 무차별 대입 공격(Brute-forcing) 및 맞춤형 툴을 배포하는 방식을 취합니다. 특히 IAB의 특성상 획득한 유효 계정 정보를 다크웹에서 랜섬웨어 그룹이나 국가 배후 해킹 조직에 판매하여 대규모 2차 피해를 양산하는 공급망 허브 역할을 수행하고 있습니다. [Impact Assessment] 전 세계적으로 널리 사용되는 보안 장비인 FortiGate의 침해는 내부망 침투, 데이터 유출, 그리고 랜섬웨어 감염으로 직결됩니다. 약 1.1억 개의 크리덴셜 유출은 단순히 한 기업의 문제를 넘어 전 세계 네트워크 인프라에 대한 신뢰도 하락과 막대한 경제적 손실을 초래할 수 있는 심각한 사안입니다. [Recommendations] 조직은 즉시 다요소 인증(MFA)을 필수적으로 도입하고 관리 인터페이스의 공인 IP 노출을 차단해야 합니다. 또한, 비정상적인 로그인 시도를 탐지하기 위한 로그 모니터링을 강화하고, 모든 FortiGate 장비의 펌웨어를 최신 상태로 유지하며 강력한 암호 정책을 시행할 것을 권고합니다.

**Severity**: HIGH (8.5/10)
**Tags**: IAB, Credential Harvesting, FortiGate, Brute Force, Network Security

## Analysis
[Executive Overview] 2026년 2월부터 시작된 'FortiBleed' 캠페인은 전 세계 43만 대 이상의 FortiGate 방화벽을 겨냥한 전례 없는 규모의 자격 증명 탈취 작전입니다. 러시아어를 사용하는 초기 침투 브로커(IAB)에 의해 주도되는 이 공격은 약 1억 1천만 개의 계정 정보를 수집하며 기업 네트워크 보안의 근간을 위협하고 있습니다. [Threat Analysis] 공격자는 노출된 FortiGate 서비스를 검색한 후 대규모 자격 증명 목록을 활용한 무차별 대입 공격(Brute-forcing) 및 맞춤형 툴을 배포하는 방식을 취합니다. 특히 IAB의 특성상 획득한 유효 계정 정보를 다크웹에서 랜섬웨어 그룹이나 국가 배후 해킹 조직에 판매하여 대규모 2차 피해를 양산하는 공급망 허브 역할을 수행하고 있습니다. [Impact Assessment] 전 세계적으로 널리 사용되는 보안 장비인 FortiGate의 침해는 내부망 침투, 데이터 유출, 그리고 랜섬웨어 감염으로 직결됩니다. 약 1.1억 개의 크리덴셜 유출은 단순히 한 기업의 문제를 넘어 전 세계 네트워크 인프라에 대한 신뢰도 하락과 막대한 경제적 손실을 초래할 수 있는 심각한 사안입니다. [Recommendations] 조직은 즉시 다요소 인증(MFA)을 필수적으로 도입하고 관리 인터페이스의 공인 IP 노출을 차단해야 합니다. 또한, 비정상적인 로그인 시도를 탐지하기 위한 로그 모니터링을 강화하고, 모든 FortiGate 장비의 펌웨어를 최신 상태로 유지하며 강력한 암호 정책을 시행할 것을 권고합니다.


## References
1. MITRE ATT&CK: T1110 (Brute Force)
2. MITRE ATT&CK: T1078 (Valid Accounts)
3. FortiGuard Labs, Global Threat Landscape Report, Fortinet, 2024
4. CISA, Alert (AA22-011A): Understanding and Mitigating Russian State-Sponsored Cyber Threats to U.S. Critical Infrastructure, 2022
## Original Source
[The Hacker News](https://thehackernews.com/2026/06/fortibleed-targeted-fortigate-firewalls.html)
    