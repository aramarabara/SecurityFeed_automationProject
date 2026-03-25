
# Schneider Electric Plant iT/Brewmaxx

> [Executive Overview] 슈나이더 일렉트릭(Schneider Electric)의 산업 공정 제어 시스템인 Plant iT/Brewmaxx에서 원격 코드 실행(RCE) 및 권한 상승으로 이어질 수 있는 다수의 치명적인 취약점이 발견되었습니다. 이 시스템은 에너지, 핵심 제조 및 상업 시설 등 전 세계 주요 기반 시설에서 광범위하게 사용되고 있어, 공격 성공 시 국가적 수준의 산업 피해를 야기할 수 있는 심각한 위협으로 평가됩니다.

[Threat Analysis] 이번 위협의 핵심은 시스템 내부에 통합된 오픈소스 인메모리 데이터베이스인 Redis(v8.2.1 이하)의 취약점 악용에 있습니다. 공격자는 인증된 세션을 통해 정교하게 제작된 Lua 스크립트를 주입함으로써 Use-After-Free(CVE-2025-49844) 및 정수 오버플로(CVE-2025-46817)를 유발할 수 있습니다. 특히 가비지 컬렉터 조작을 통한 메모리 오염은 공격자가 시스템 컨텍스트에서 임의의 코드를 실행하고, 다른 사용자의 권한을 탈취하는 핵심 벡터로 작용합니다.

[Impact Assessment] 해당 취약점은 Plant iT/Brewmaxx 9.60 이상의 모든 버전에 영향을 미치며, 전 세계 산업 현장에 배포된 자산에 대한 제어권 상실, 데이터 변조, 서비스 거부(DoS) 공격을 초래할 수 있습니다. CVSS 점수 9.9에 달하는 임계치는 공격자가 특수 권한 없이도 네트워크를 통해 시스템 전체를 장악할 수 있음을 시사하며, 이는 생산 라인 중단과 같은 물리적 파급 효과로 이어질 수 있습니다.

[Recommendations] 조직은 즉시 ProLeiT-2025-001 패치를 적용하고, 패치 설명서에 따라 Redis의 `eval` 명령어를 비활성화해야 합니다. 또한, 산업 제어 시스템(ICS) 네트워크를 비즈니스망으로부터 완전히 격리하고 외부 접근 시 반드시 최신 버전의 VPN을 사용해야 합니다. 물리적 접근 제어 강화와 더불어 제어 시스템을 'Program' 모드에 방치하지 않는 등 운영 기술(OT) 보안 모범 사례를 준수할 것을 권고합니다.

**Severity**: CRITICAL (9.9/10)
**Tags**: ICS/OT Security, Remote Code Execution (RCE), Redis Vulnerability, Supply Chain Risk, Critical Infrastructure

## Analysis
[Executive Overview] 슈나이더 일렉트릭(Schneider Electric)의 산업 공정 제어 시스템인 Plant iT/Brewmaxx에서 원격 코드 실행(RCE) 및 권한 상승으로 이어질 수 있는 다수의 치명적인 취약점이 발견되었습니다. 이 시스템은 에너지, 핵심 제조 및 상업 시설 등 전 세계 주요 기반 시설에서 광범위하게 사용되고 있어, 공격 성공 시 국가적 수준의 산업 피해를 야기할 수 있는 심각한 위협으로 평가됩니다.

[Threat Analysis] 이번 위협의 핵심은 시스템 내부에 통합된 오픈소스 인메모리 데이터베이스인 Redis(v8.2.1 이하)의 취약점 악용에 있습니다. 공격자는 인증된 세션을 통해 정교하게 제작된 Lua 스크립트를 주입함으로써 Use-After-Free(CVE-2025-49844) 및 정수 오버플로(CVE-2025-46817)를 유발할 수 있습니다. 특히 가비지 컬렉터 조작을 통한 메모리 오염은 공격자가 시스템 컨텍스트에서 임의의 코드를 실행하고, 다른 사용자의 권한을 탈취하는 핵심 벡터로 작용합니다.

[Impact Assessment] 해당 취약점은 Plant iT/Brewmaxx 9.60 이상의 모든 버전에 영향을 미치며, 전 세계 산업 현장에 배포된 자산에 대한 제어권 상실, 데이터 변조, 서비스 거부(DoS) 공격을 초래할 수 있습니다. CVSS 점수 9.9에 달하는 임계치는 공격자가 특수 권한 없이도 네트워크를 통해 시스템 전체를 장악할 수 있음을 시사하며, 이는 생산 라인 중단과 같은 물리적 파급 효과로 이어질 수 있습니다.

[Recommendations] 조직은 즉시 ProLeiT-2025-001 패치를 적용하고, 패치 설명서에 따라 Redis의 `eval` 명령어를 비활성화해야 합니다. 또한, 산업 제어 시스템(ICS) 네트워크를 비즈니스망으로부터 완전히 격리하고 외부 접근 시 반드시 최신 버전의 VPN을 사용해야 합니다. 물리적 접근 제어 강화와 더불어 제어 시스템을 'Program' 모드에 방치하지 않는 등 운영 기술(OT) 보안 모범 사례를 준수할 것을 권고합니다.


## References
1. CISA Advisory ICSA-26-083-03: Schneider Electric Plant iT/Brewmaxx, 2026
2. CVE-2025-49844
3. MITRE ATT&CK: T0807 (Functional Association)
4. Stouffer et al., NIST SP 800-82 Rev. 2: Guide to Industrial Control Systems (ICS) Security, 2015
5. Schneider Electric Security Notification SEVD-2026-013-01, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-083-03)
    