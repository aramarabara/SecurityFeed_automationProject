
# Lazarus Campaign Plants Malicious Packages in npm and PyPI Ecosystems

> Executive Overview: 북한 연계 위협 조직인 Lazarus 그룹이 'graphalgo'라는 코드명으로 npm 및 PyPI 오픈소스 생태계를 겨냥한 대규모 악성 패키지 유포 캠페인을 전개하고 있습니다. 이번 공격은 가짜 채용 제안을 미끼로 개발자를 유도하여 악성 코드를 설치하게 하는 정교한 사회 공학적 기법을 특징으로 하며, 소프트웨어 공급망의 신뢰성을 심각하게 훼손하고 있습니다. Threat Analysis: 공격자는 2025년 5월부터 활동을 시작하여 npm과 PyPI 저장소에 'graphalgo'를 포함한 다수의 악성 패키지를 배포했습니다. Lazarus는 링크드인 등 소셜 미디어 플랫폼에서 채용 담당자로 위장하여 타겟 개발자에게 접근한 뒤, 기술 면접이나 프로젝트 협업을 구실로 악성 패키지가 포함된 코드를 다운로드하고 실행하도록 유도합니다. 설치된 악성 패키지는 시스템 내에서 실행되어 정보를 수집하고 공격자의 원격 명령 제어 서버와 통신을 시도합니다. Impact Assessment: 이번 공격의 주요 대상은 전 세계의 소프트웨어 개발자 및 관련 기업입니다. 성공적으로 침투할 경우 소스 코드 유출, 기업 기밀 데이터 탈취, 내부 망 이동을 통한 추가 인프라 장악 등 파괴적인 결과를 초래할 수 있습니다. 특히 공급망 공격 특성상 개발 단계에서 보안이 뚫리면 최종 사용자에게까지 영향이 미칠 수 있는 고위험군 위협입니다. Recommendations: 조직은 패키지 관리 정책을 강화하여 검증되지 않은 외부 라이브러리 사용을 엄격히 제한해야 합니다. 개발자는 채용 제안 시 상대방의 프로필과 제안 내용을 교차 검증하고, 테스트 코드는 반드시 메인 워크스테이션과 격리된 샌드박스 환경에서 실행해야 합니다. 또한, 조직 전체적으로 엔드포인트 탐지 및 대응(EDR) 솔루션을 도입하여 비정상적인 프로세스 실행 및 외부 통신을 실시간으로 감시해야 합니다.

**Severity**: HIGH (8.5/10)
**Tags**: Supply Chain Attack, Lazarus Group, npm, PyPI, Social Engineering

## Analysis
Executive Overview: 북한 연계 위협 조직인 Lazarus 그룹이 'graphalgo'라는 코드명으로 npm 및 PyPI 오픈소스 생태계를 겨냥한 대규모 악성 패키지 유포 캠페인을 전개하고 있습니다. 이번 공격은 가짜 채용 제안을 미끼로 개발자를 유도하여 악성 코드를 설치하게 하는 정교한 사회 공학적 기법을 특징으로 하며, 소프트웨어 공급망의 신뢰성을 심각하게 훼손하고 있습니다. Threat Analysis: 공격자는 2025년 5월부터 활동을 시작하여 npm과 PyPI 저장소에 'graphalgo'를 포함한 다수의 악성 패키지를 배포했습니다. Lazarus는 링크드인 등 소셜 미디어 플랫폼에서 채용 담당자로 위장하여 타겟 개발자에게 접근한 뒤, 기술 면접이나 프로젝트 협업을 구실로 악성 패키지가 포함된 코드를 다운로드하고 실행하도록 유도합니다. 설치된 악성 패키지는 시스템 내에서 실행되어 정보를 수집하고 공격자의 원격 명령 제어 서버와 통신을 시도합니다. Impact Assessment: 이번 공격의 주요 대상은 전 세계의 소프트웨어 개발자 및 관련 기업입니다. 성공적으로 침투할 경우 소스 코드 유출, 기업 기밀 데이터 탈취, 내부 망 이동을 통한 추가 인프라 장악 등 파괴적인 결과를 초래할 수 있습니다. 특히 공급망 공격 특성상 개발 단계에서 보안이 뚫리면 최종 사용자에게까지 영향이 미칠 수 있는 고위험군 위협입니다. Recommendations: 조직은 패키지 관리 정책을 강화하여 검증되지 않은 외부 라이브러리 사용을 엄격히 제한해야 합니다. 개발자는 채용 제안 시 상대방의 프로필과 제안 내용을 교차 검증하고, 테스트 코드는 반드시 메인 워크스테이션과 격리된 샌드박스 환경에서 실행해야 합니다. 또한, 조직 전체적으로 엔드포인트 탐지 및 대응(EDR) 솔루션을 도입하여 비정상적인 프로세스 실행 및 외부 통신을 실시간으로 감시해야 합니다.


## References
1. MITRE ATT&CK: T1195.002 (Supply Chain Compromise: Compromise Software Dependencies)
2. MITRE ATT&CK: T1566.003 (Phishing: Spearphishing Service)
3. Mandiant, 'Operation Dream Job: Lazarus Group Social Engineering Campaign', Google Cloud Blog, 2024
4. Kaspersky, 'Lazarus Group targets developers with fake job offers', Securelist, 2023
## Original Source
[The Hacker News](https://thehackernews.com/2026/02/lazarus-campaign-plants-malicious.html)
    