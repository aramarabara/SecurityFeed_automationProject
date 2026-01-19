
# New StackWarp Hardware Flaw Breaks AMD SEV-SNP Protections on Zen 1–5 CPUs

> [Executive Overview] StackWarp은 AMD Zen 1에서 Zen 5 아키텍처를 사용하는 CPU 전반에서 발견된 새로운 하드웨어 취약점으로, 독일에 위치한 CISPA Helmholtz 보안 센터 연구진에 의해 공개되었습니다. 이 결함은 AMD의 핵심 기밀 컴퓨팅 기술인 SEV-SNP(Secure Encrypted Virtualization-Secure Nested Paging)의 하드웨어 기반 보안 보장을 무력화할 수 있어, 클라우드 환경의 신뢰 기반에 심각한 위협이 됩니다. [Threat Analysis] StackWarp 취약점은 CPU의 투기적 실행(Speculative Execution) 과정에서 스택 포인터가 업데이트되는 방식을 악용합니다. 하이퍼바이저에 대한 특권 권한을 가진 공격자는 스택 조작을 통해 기밀 가상 머신(CVM)의 메모리 격리 보호를 우회하고, 보호된 영역 내부에서 임의의 코드를 실행하거나 민감한 데이터를 유출할 수 있습니다. 이는 전통적인 부채널 공격보다 한 단계 진화된 형태의 하드웨어 설계상 결함을 타겟팅합니다. [Impact Assessment] 영향 범위는 초기 Zen 모델부터 최신 Zen 5까지 거의 모든 최신 AMD 프로세서 라인업을 포함합니다. 특히 Confidential Computing 서비스를 제공하는 클라우드 사업자(CSP)와 민감한 데이터를 처리하는 금융, 공공 부문의 멀티 테넌트 인프라에 직접적인 타격을 줄 수 있습니다. 하드웨어 수준의 신뢰 루트(Root of Trust)가 손상됨에 따라 가상화 환경의 데이터 기밀성과 무결성이 근본적으로 위협받습니다. [Recommendations] 시스템 관리자와 CSP는 AMD에서 배포하는 최신 마이크로코드 업데이트와 BIOS 패치를 즉시 적용해야 합니다. 또한, 운영 체제 및 커널 수준에서 제공되는 소프트웨어적 완화 조치를 병행하고, 보안 감사 시 기밀 컴퓨팅 환경의 워크로드 격리 상태를 재검토할 것을 권고합니다.

**Severity**: HIGH (8.2/10)
**Tags**: AMD SEV-SNP, StackWarp, Hardware Vulnerability, Confidential Computing, Speculative Execution

## Analysis
[Executive Overview] StackWarp은 AMD Zen 1에서 Zen 5 아키텍처를 사용하는 CPU 전반에서 발견된 새로운 하드웨어 취약점으로, 독일에 위치한 CISPA Helmholtz 보안 센터 연구진에 의해 공개되었습니다. 이 결함은 AMD의 핵심 기밀 컴퓨팅 기술인 SEV-SNP(Secure Encrypted Virtualization-Secure Nested Paging)의 하드웨어 기반 보안 보장을 무력화할 수 있어, 클라우드 환경의 신뢰 기반에 심각한 위협이 됩니다. [Threat Analysis] StackWarp 취약점은 CPU의 투기적 실행(Speculative Execution) 과정에서 스택 포인터가 업데이트되는 방식을 악용합니다. 하이퍼바이저에 대한 특권 권한을 가진 공격자는 스택 조작을 통해 기밀 가상 머신(CVM)의 메모리 격리 보호를 우회하고, 보호된 영역 내부에서 임의의 코드를 실행하거나 민감한 데이터를 유출할 수 있습니다. 이는 전통적인 부채널 공격보다 한 단계 진화된 형태의 하드웨어 설계상 결함을 타겟팅합니다. [Impact Assessment] 영향 범위는 초기 Zen 모델부터 최신 Zen 5까지 거의 모든 최신 AMD 프로세서 라인업을 포함합니다. 특히 Confidential Computing 서비스를 제공하는 클라우드 사업자(CSP)와 민감한 데이터를 처리하는 금융, 공공 부문의 멀티 테넌트 인프라에 직접적인 타격을 줄 수 있습니다. 하드웨어 수준의 신뢰 루트(Root of Trust)가 손상됨에 따라 가상화 환경의 데이터 기밀성과 무결성이 근본적으로 위협받습니다. [Recommendations] 시스템 관리자와 CSP는 AMD에서 배포하는 최신 마이크로코드 업데이트와 BIOS 패치를 즉시 적용해야 합니다. 또한, 운영 체제 및 커널 수준에서 제공되는 소프트웨어적 완화 조치를 병행하고, 보안 감사 시 기밀 컴퓨팅 환경의 워크로드 격리 상태를 재검토할 것을 권고합니다.


## References
1. Wikner et al., StackWarp: Breaking Confidential Computing with Speculative Stack Pointer Manipulation, CISPA Helmholtz Center, 2024
2. AMD Product Security Advisory: Speculative Stack Pointer Manipulation, AMD-SN-3001, 2024
3. MITRE ATT&CK: T1611 - Escape to Host
4. MITRE ATT&CK: T1068 - Exploitation for Privilege Escalation
## Original Source
[The Hacker News](https://thehackernews.com/2026/01/new-stackwarp-hardware-flaw-breaks-amd.html)
    