
# Turla Turns Kazuar Backdoor Into Modular P2P Botnet for Persistent Access

> [Executive Overview] 러시아 연방보안국(FSB)의 'Center 16'과 연계된 위협 그룹 Turla가 자사의 Kazuar 백도어를 모듈형 P2P(Peer-to-Peer) 봇넷으로 진화시켰습니다. 이는 국가 배후의 고도화된 위협 행위자가 탐지 회피와 장기적인 지속성(Persistence)을 확보하기 위해 네트워크 인프라를 얼마나 정교하게 재설계하고 있는지를 보여주는 중대한 사례입니다.

[Threat Analysis] Kazuar의 이번 업데이트는 중앙 집중식 명령 제어(C2) 서버의 한계를 극복하기 위해 P2P 아키텍처를 도입한 것이 핵심입니다. 각 감염된 호스트는 독자적인 노드 역할을 수행하며 명령을 전파하고 데이터를 중계할 수 있어, 특정 서버가 차단되더라도 전체 봇넷 인프라가 유지되는 탄력성을 갖췄습니다. 또한 모듈형 구조를 채택하여 공격자가 실시간으로 새로운 공격 도구나 기능을 추가할 수 있으며, 고도의 암호화와 난독화 기술을 사용해 정적 및 동적 분석을 무력화합니다.

[Impact Assessment] 주요 타겟은 정부 기관, 외교 조직, 국방 연구소 및 주요 인프라 운영체입니다. P2P 봇넷 특성상 사고 대응팀이 위협의 전체 범위를 파악하고 완전히 제거하는 것이 매우 어려우며, 장기적인 기밀 데이터 유출과 중요 시스템에 대한 비인가 접근 권한 유지가 지속될 수 있는 심각한 위험이 존재합니다.

[Recommendations] 조직은 네트워크 세분화(Segmentation)를 통해 내부망 이동을 차단하고, 비정상적인 P2P 트래픽과 암호화된 통신 패턴을 식별할 수 있는 행동 기반 탐지 시스템을 강화해야 합니다. 또한 CISA와 같은 정보기관의 Turla 관련 침투 지표(IoC)를 보안 관제 솔루션에 즉각 반영하고, 제로 트러스트 아키텍처를 도입하여 엔드포인트 보안을 극대화할 것을 권고합니다.

**Severity**: HIGH (8.5/10)
**Tags**: Turla, Kazuar, P2P Botnet, APT, Persistent Access

## Analysis
[Executive Overview] 러시아 연방보안국(FSB)의 'Center 16'과 연계된 위협 그룹 Turla가 자사의 Kazuar 백도어를 모듈형 P2P(Peer-to-Peer) 봇넷으로 진화시켰습니다. 이는 국가 배후의 고도화된 위협 행위자가 탐지 회피와 장기적인 지속성(Persistence)을 확보하기 위해 네트워크 인프라를 얼마나 정교하게 재설계하고 있는지를 보여주는 중대한 사례입니다.

[Threat Analysis] Kazuar의 이번 업데이트는 중앙 집중식 명령 제어(C2) 서버의 한계를 극복하기 위해 P2P 아키텍처를 도입한 것이 핵심입니다. 각 감염된 호스트는 독자적인 노드 역할을 수행하며 명령을 전파하고 데이터를 중계할 수 있어, 특정 서버가 차단되더라도 전체 봇넷 인프라가 유지되는 탄력성을 갖췄습니다. 또한 모듈형 구조를 채택하여 공격자가 실시간으로 새로운 공격 도구나 기능을 추가할 수 있으며, 고도의 암호화와 난독화 기술을 사용해 정적 및 동적 분석을 무력화합니다.

[Impact Assessment] 주요 타겟은 정부 기관, 외교 조직, 국방 연구소 및 주요 인프라 운영체입니다. P2P 봇넷 특성상 사고 대응팀이 위협의 전체 범위를 파악하고 완전히 제거하는 것이 매우 어려우며, 장기적인 기밀 데이터 유출과 중요 시스템에 대한 비인가 접근 권한 유지가 지속될 수 있는 심각한 위험이 존재합니다.

[Recommendations] 조직은 네트워크 세분화(Segmentation)를 통해 내부망 이동을 차단하고, 비정상적인 P2P 트래픽과 암호화된 통신 패턴을 식별할 수 있는 행동 기반 탐지 시스템을 강화해야 합니다. 또한 CISA와 같은 정보기관의 Turla 관련 침투 지표(IoC)를 보안 관제 솔루션에 즉각 반영하고, 제로 트러스트 아키텍처를 도입하여 엔드포인트 보안을 극대화할 것을 권고합니다.


## References
1. CISA, AA23-129A: Hunting Russian State-Sponsored Threat Actor Turla, 2023
2. Palo Alto Networks Unit 42, Kazuar: Multiplatform Espionage Backdoor with API Access, 2024
3. MITRE ATT&CK: G0010 (Turla Group)
4. MITRE ATT&CK: T1071.001 (Application Layer Protocol: Web Protocols)
5. Stanciu et al., Advanced P2P Botnet Detection using Graph-based Features, IEEE, 2021
## Original Source
[The Hacker News](https://thehackernews.com/2026/05/turla-turns-kazuar-backdoor-into.html)
    