
# ThreatsDay Bulletin: PAN-OS RCE, Mythos cURL Bug, AI Tokenizer Attacks, and 10+ Stories

> [Executive Overview] 최근 보안 위협 지형은 Palo Alto Networks의 PAN-OS RCE 취약점과 같은 전통적인 네트워크 인프라 공격과 AI Tokenizer 공격과 같은 차세대 기술 위협이 결합된 고위험 국면에 진입했습니다. 특히 공급망 공격의 상업화와 사회공학적 기법의 정교화는 기존 보안 방어 체계의 허점을 파고들고 있으며, 이는 기업과 정부 기관 모두에 심각한 보안 위기를 초래하고 있습니다. [Threat Analysis] 기술적 관점에서 PAN-OS 취약점(CVE-2024-3400 등)은 인증되지 않은 공격자가 원격에서 루트 권한을 획득할 수 있는 치명적인 명령 주입(Command Injection) 경로를 제공합니다. 동시에 등장한 AI Tokenizer 공격은 거대언어모델(LLM)이 텍스트를 처리하는 토큰화 과정을 악용하여 보안 필터를 우회하거나 간접 프롬프트 주입(Indirect Prompt Injection)을 수행합니다. 이 외에도 악성 패키지를 통한 공급망 오염과 가짜 헬프데스크를 이용한 자격 증명 탈취가 복합적으로 발생하고 있습니다. [Impact Assessment] 이러한 위협은 글로벌 네트워크 인프라를 운영하는 조직의 내부망 전체 장악으로 이어질 수 있습니다. 특히 AI 기반 서비스를 운영하는 기업은 데이터 유출 및 모델 무결성 훼손이라는 새로운 형태의 피해를 입을 수 있으며, 공급망 공격은 신뢰 기반의 소프트웨어 생태계 전반에 걸쳐 연쇄적인 침해 사고를 유도하여 천문학적인 복구 비용과 신뢰도 하락을 야기합니다. [Recommendations] 대응을 위해 조직은 PAN-OS를 포함한 노출된 자산에 대해 즉각적인 패치를 적용하고 외부 노출 면을 최소화해야 합니다. AI 시스템 도입 시에는 입출력 토큰에 대한 엄격한 검증 로직을 구현하고, 제로 트러스트(Zero Trust) 원칙에 기반한 네트워크 격리 및 다요소 인증(MFA)을 강화해야 합니다. 또한 정기적인 공급망 무결성 점검과 임직원 대상의 사회공학적 공격 예방 교육이 필수적입니다.

**Severity**: CRITICAL (9.2/10)
**Tags**: PAN-OS, Remote Code Execution, AI Security, Supply Chain Attack, CVE-2024-3400

## Analysis
[Executive Overview] 최근 보안 위협 지형은 Palo Alto Networks의 PAN-OS RCE 취약점과 같은 전통적인 네트워크 인프라 공격과 AI Tokenizer 공격과 같은 차세대 기술 위협이 결합된 고위험 국면에 진입했습니다. 특히 공급망 공격의 상업화와 사회공학적 기법의 정교화는 기존 보안 방어 체계의 허점을 파고들고 있으며, 이는 기업과 정부 기관 모두에 심각한 보안 위기를 초래하고 있습니다. [Threat Analysis] 기술적 관점에서 PAN-OS 취약점(CVE-2024-3400 등)은 인증되지 않은 공격자가 원격에서 루트 권한을 획득할 수 있는 치명적인 명령 주입(Command Injection) 경로를 제공합니다. 동시에 등장한 AI Tokenizer 공격은 거대언어모델(LLM)이 텍스트를 처리하는 토큰화 과정을 악용하여 보안 필터를 우회하거나 간접 프롬프트 주입(Indirect Prompt Injection)을 수행합니다. 이 외에도 악성 패키지를 통한 공급망 오염과 가짜 헬프데스크를 이용한 자격 증명 탈취가 복합적으로 발생하고 있습니다. [Impact Assessment] 이러한 위협은 글로벌 네트워크 인프라를 운영하는 조직의 내부망 전체 장악으로 이어질 수 있습니다. 특히 AI 기반 서비스를 운영하는 기업은 데이터 유출 및 모델 무결성 훼손이라는 새로운 형태의 피해를 입을 수 있으며, 공급망 공격은 신뢰 기반의 소프트웨어 생태계 전반에 걸쳐 연쇄적인 침해 사고를 유도하여 천문학적인 복구 비용과 신뢰도 하락을 야기합니다. [Recommendations] 대응을 위해 조직은 PAN-OS를 포함한 노출된 자산에 대해 즉각적인 패치를 적용하고 외부 노출 면을 최소화해야 합니다. AI 시스템 도입 시에는 입출력 토큰에 대한 엄격한 검증 로직을 구현하고, 제로 트러스트(Zero Trust) 원칙에 기반한 네트워크 격리 및 다요소 인증(MFA)을 강화해야 합니다. 또한 정기적인 공급망 무결성 점검과 임직원 대상의 사회공학적 공격 예방 교육이 필수적입니다.


## References
1. CVE-2024-3400: Palo Alto Networks PAN-OS Command Injection Vulnerability
2. Greshake et al., Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection, arXiv, 2023
3. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
4. Palo Alto Networks Unit 42, Research on OS Command Injection in GlobalProtect Gateway, 2024
## Original Source
[The Hacker News](https://thehackernews.com/2026/05/threatsday-bulletin-pan-os-rce-mythos.html)
    