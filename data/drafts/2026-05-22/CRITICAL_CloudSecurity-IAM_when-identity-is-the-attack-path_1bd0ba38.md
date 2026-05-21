
# When Identity is the Attack Path

> [Executive Overview] 본 보고서는 엔드포인트에 저장된 단일 자격 증명이 기업 전체 클라우드 인프라의 붕괴로 이어지는 '정체성 기반 공격 경로(Identity-based Attack Path)'의 위험성을 분석합니다. 표준적인 AWS 작동 방식에 따라 윈도우 시스템에 캐시된 액세스 키는 별도의 설정 오류 없이도 공격자에게 클라우드 환경의 98%에 달하는 자원에 대한 접근 권한을 제공할 수 있는 치명적인 취약점이 됩니다. [Threat Analysis] 공격자는 초기 침투 후 로컬 파일 시스템(~/.aws/credentials)에 저장된 정적 액세스 키를 탈취합니다. 이는 MITRE ATT&CK의 'T1552.001' 기법에 해당하며, 특히 장기 보관용 정적 키(Static Keys)를 사용하는 환경에서 빈번하게 발생합니다. 공격자는 탈취한 키를 이용해 온프레미스에서 클라우드로 권한을 상승시키며, 이는 복잡한 취약점 공격 없이도 유효한 계정을 통한 수평 이동을 가능케 합니다. [Impact Assessment] 영향도는 하이브리드 클라우드를 운영하는 전 산업군에 걸쳐 매우 광범위합니다. 단일 사용자의 단말기가 침해될 경우, 클라우드 내 데이터베이스, 컴퓨팅 인스턴스, 스토리지 등 거의 모든 엔티티가 노출될 수 있습니다. 이는 대규모 데이터 유출, 랜섬웨어 유포, 서비스 중단 등으로 이어져 기업의 비즈니스 연속성에 심각한 타격을 입힙니다. [Recommendations] 최우선적으로 정적 액세스 키 사용을 금지하고 AWS IAM Identity Center를 통한 단기 자격 증명(Temporary Credentials) 체계로 전환해야 합니다. 또한, 클라우드 자원 접근 시 MFA(다요소 인증)를 강제하고, 엔드포인트 탐지 및 대응(EDR) 솔루션을 통해 로컬 자격 증명 파일에 대한 비정상적인 접근을 실시간 모니터링해야 합니다. 최소 권한 원칙(PoLP)에 따른 IAM 정책 재검토도 필수적입니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: Cloud Security, IAM, Credential Access, Lateral Movement, AWS

## Analysis
[Executive Overview] 본 보고서는 엔드포인트에 저장된 단일 자격 증명이 기업 전체 클라우드 인프라의 붕괴로 이어지는 '정체성 기반 공격 경로(Identity-based Attack Path)'의 위험성을 분석합니다. 표준적인 AWS 작동 방식에 따라 윈도우 시스템에 캐시된 액세스 키는 별도의 설정 오류 없이도 공격자에게 클라우드 환경의 98%에 달하는 자원에 대한 접근 권한을 제공할 수 있는 치명적인 취약점이 됩니다. [Threat Analysis] 공격자는 초기 침투 후 로컬 파일 시스템(~/.aws/credentials)에 저장된 정적 액세스 키를 탈취합니다. 이는 MITRE ATT&CK의 'T1552.001' 기법에 해당하며, 특히 장기 보관용 정적 키(Static Keys)를 사용하는 환경에서 빈번하게 발생합니다. 공격자는 탈취한 키를 이용해 온프레미스에서 클라우드로 권한을 상승시키며, 이는 복잡한 취약점 공격 없이도 유효한 계정을 통한 수평 이동을 가능케 합니다. [Impact Assessment] 영향도는 하이브리드 클라우드를 운영하는 전 산업군에 걸쳐 매우 광범위합니다. 단일 사용자의 단말기가 침해될 경우, 클라우드 내 데이터베이스, 컴퓨팅 인스턴스, 스토리지 등 거의 모든 엔티티가 노출될 수 있습니다. 이는 대규모 데이터 유출, 랜섬웨어 유포, 서비스 중단 등으로 이어져 기업의 비즈니스 연속성에 심각한 타격을 입힙니다. [Recommendations] 최우선적으로 정적 액세스 키 사용을 금지하고 AWS IAM Identity Center를 통한 단기 자격 증명(Temporary Credentials) 체계로 전환해야 합니다. 또한, 클라우드 자원 접근 시 MFA(다요소 인증)를 강제하고, 엔드포인트 탐지 및 대응(EDR) 솔루션을 통해 로컬 자격 증명 파일에 대한 비정상적인 접근을 실시간 모니터링해야 합니다. 최소 권한 원칙(PoLP)에 따른 IAM 정책 재검토도 필수적입니다.


## References
1. MITRE ATT&CK: T1552.001 (Unsecured Credentials: Credentials In Files)
2. MITRE ATT&CK: T1078.004 (Valid Accounts: Cloud Accounts)
3. AWS, Security best practices for IAM, AWS Documentation, 2024
4. S. S. Shaji et al., A Review on Identity and Access Management in Cloud Computing, IJCRT, 2020
5. Mandiant, M-Trends 2023 Special Report on Cloud Security, 2023
## Original Source
[The Hacker News](https://thehackernews.com/2026/05/when-identity-is-attack-path.html)
    