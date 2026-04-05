
# $285 Million Drift Hack Traced to Six-Month DPRK Social Engineering Operation

> [Executive Overview] 2026년 4월 1일, Solana 기반의 탈중앙화 거래소(DEX)인 Drift에서 발생한 2억 8,500만 달러 규모의 자산 탈취 사고는 북한(DPRK) 연계 해커 조직이 6개월간 치밀하게 준비한 사회공학적 공격의 결과로 밝혀졌습니다. 2025년 가을부터 시작된 이 작전은 단순한 시스템 취약점 공격을 넘어, 조직 내부의 인적 취약점을 장기간에 걸쳐 공략한 국가 지원 해킹의 전형적인 사례로 평가됩니다. [Threat Analysis] 이번 공격은 Lazarus 또는 BlueNoroff와 같은 북한 정찰총국 산하 조직의 정교한 기법을 활용했습니다. 공격자들은 개발자나 파트너사 관계자로 위장하여 신뢰를 쌓은 뒤, 악성 코드가 포함된 협업 도구나 업데이트 파일을 배포하는 'Spearphishing(T1566)' 및 'Supply Chain Compromise(T1195)' 기법을 병행했습니다. 특히 6개월이라는 긴 시간 동안 잠복하며 내부 권한을 점진적으로 탈취하여 최종적으로 스마트 컨트랙트 제어권이나 다중 서명(Multi-sig) 키를 확보한 것으로 분석됩니다. [Impact Assessment] 금전적 피해는 약 3,800억 원(2억 8,500만 달러)에 달하며, 이는 Solana 생태계의 유동성과 신뢰도에 막대한 타격을 입혔습니다. 탈취된 자금은 믹싱 서비스와 복잡한 세탁 과정을 거쳐 북한의 대량살상무기(WMD) 개발 재원으로 유입될 가능성이 커 국제 안보 위협으로 직결됩니다. 또한, DeFi 산업 전반에 걸쳐 고도화된 사회공학적 공격에 대한 보안 경각심을 고취시켰습니다. [Recommendations] 조직은 'Zero Trust' 원칙을 강화하고, 모든 내부 시스템 접근에 하드웨어 기반의 다중 인증(MFA)을 의무화해야 합니다. 또한, 임직원을 대상으로 실전과 유사한 사회공학적 공격 대응 훈련을 주기적으로 실시하고, 코드 배포 및 권한 승인 프로세스에 대한 독립적인 다중 감사 체계를 구축하여 내부 위협 및 권한 오남용을 방지해야 합니다.

**Severity**: CRITICAL (9/10)
**Tags**: Social Engineering, DPRK, DeFi Hack, Spearphishing, Lazarus Group

## Analysis
[Executive Overview] 2026년 4월 1일, Solana 기반의 탈중앙화 거래소(DEX)인 Drift에서 발생한 2억 8,500만 달러 규모의 자산 탈취 사고는 북한(DPRK) 연계 해커 조직이 6개월간 치밀하게 준비한 사회공학적 공격의 결과로 밝혀졌습니다. 2025년 가을부터 시작된 이 작전은 단순한 시스템 취약점 공격을 넘어, 조직 내부의 인적 취약점을 장기간에 걸쳐 공략한 국가 지원 해킹의 전형적인 사례로 평가됩니다. [Threat Analysis] 이번 공격은 Lazarus 또는 BlueNoroff와 같은 북한 정찰총국 산하 조직의 정교한 기법을 활용했습니다. 공격자들은 개발자나 파트너사 관계자로 위장하여 신뢰를 쌓은 뒤, 악성 코드가 포함된 협업 도구나 업데이트 파일을 배포하는 'Spearphishing(T1566)' 및 'Supply Chain Compromise(T1195)' 기법을 병행했습니다. 특히 6개월이라는 긴 시간 동안 잠복하며 내부 권한을 점진적으로 탈취하여 최종적으로 스마트 컨트랙트 제어권이나 다중 서명(Multi-sig) 키를 확보한 것으로 분석됩니다. [Impact Assessment] 금전적 피해는 약 3,800억 원(2억 8,500만 달러)에 달하며, 이는 Solana 생태계의 유동성과 신뢰도에 막대한 타격을 입혔습니다. 탈취된 자금은 믹싱 서비스와 복잡한 세탁 과정을 거쳐 북한의 대량살상무기(WMD) 개발 재원으로 유입될 가능성이 커 국제 안보 위협으로 직결됩니다. 또한, DeFi 산업 전반에 걸쳐 고도화된 사회공학적 공격에 대한 보안 경각심을 고취시켰습니다. [Recommendations] 조직은 'Zero Trust' 원칙을 강화하고, 모든 내부 시스템 접근에 하드웨어 기반의 다중 인증(MFA)을 의무화해야 합니다. 또한, 임직원을 대상으로 실전과 유사한 사회공학적 공격 대응 훈련을 주기적으로 실시하고, 코드 배포 및 권한 승인 프로세스에 대한 독립적인 다중 감사 체계를 구축하여 내부 위협 및 권한 오남용을 방지해야 합니다.


## References
1. MITRE ATT&CK: T1566.002 (Spearphishing Link)
2. Mandiant, 'Operation Dream Job: North Korean Cyber Espionage via Social Engineering', 2023
3. CISA/FBI/NSA Joint Advisory, 'North Korean State-Sponsored Cyber Actors Target Blockchain/Crypto Assets', AA22-108A, 2022
4. Park et al., 'Targeted Attacks on Cryptocurrency Exchanges: A Study on DPRK Tactics', Journal of Cyber Policy, 2024
## Original Source
[The Hacker News](https://thehackernews.com/2026/04/285-million-drift-hack-traced-to-six.html)
    