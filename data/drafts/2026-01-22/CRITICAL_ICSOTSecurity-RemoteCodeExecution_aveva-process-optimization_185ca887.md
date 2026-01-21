
# AVEVA Process Optimization

> [Executive Overview] 전 세계 주요 제조 설비 및 산업 공정 최적화에 사용되는 AVEVA Process Optimization 솔루션에서 원격 코드 실행(RCE)을 포함한 다수의 치명적인 취약점이 발견되었습니다. 특히 가장 심각한 취약점인 CVE-2025-61937은 CVSS 10.0의 최고 점수를 기록하며, 국가 핵심 인프라 운영 기술(OT) 환경에 즉각적이고 심각한 위험을 초래할 수 있습니다. [Threat Analysis] 기술적으로 이번 위협은 'taoimr' 서비스의 부적절한 코드 생성 제어, SQL 인젝션, 제어되지 않은 검색 경로(DLL 하이재킹) 등 7가지 경로를 포함합니다. 공격자는 인증 없이도 시스템 권한을 획득하여 원격에서 악성 코드를 실행하거나, 데이터베이스 쿼리를 조작하여 SQL 서버 전체를 장악할 수 있는 능력을 갖게 됩니다. 또한 기본 설정된 통신 채널이 암호화되지 않아 중간자 공격(MitM)을 통한 민감 정보 탈취가 가능합니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 산업 현장의 공정 최적화 모델을 관리하는 Application Server가 완전히 침해됩니다. 이는 단순히 데이터 유출에 그치지 않고 실제 생산 공정의 매개변수를 조작하여 물리적 피해를 야기하거나, 제조 공정의 효율을 떨어뜨리는 등 경제적 손실과 인명 안전 문제로 직결될 수 있습니다. [Recommendations] 조직은 즉시 AVEVA Process Optimization v2025 최신 버전으로 업데이트를 수행해야 합니다. 패치 적용 전 임시 조치로 포트 8888 및 8889(TLS)에 대한 네트워크 방화벽 규칙을 강화하고, 프로젝트 파일에 대한 엄격한 ACL 관리와 접근 통제를 시행해야 합니다. 또한 외부 인터넷으로부터 OT 망을 완전히 격리하고 VPN 사용 시 최신 보안 업데이트를 유지할 것을 권고합니다.

**Severity**: CRITICAL (10/10)
**Tags**: ICS/OT Security, Remote Code Execution, SQL Injection, AVEVA, Critical Infrastructure

## Analysis
[Executive Overview] 전 세계 주요 제조 설비 및 산업 공정 최적화에 사용되는 AVEVA Process Optimization 솔루션에서 원격 코드 실행(RCE)을 포함한 다수의 치명적인 취약점이 발견되었습니다. 특히 가장 심각한 취약점인 CVE-2025-61937은 CVSS 10.0의 최고 점수를 기록하며, 국가 핵심 인프라 운영 기술(OT) 환경에 즉각적이고 심각한 위험을 초래할 수 있습니다. [Threat Analysis] 기술적으로 이번 위협은 'taoimr' 서비스의 부적절한 코드 생성 제어, SQL 인젝션, 제어되지 않은 검색 경로(DLL 하이재킹) 등 7가지 경로를 포함합니다. 공격자는 인증 없이도 시스템 권한을 획득하여 원격에서 악성 코드를 실행하거나, 데이터베이스 쿼리를 조작하여 SQL 서버 전체를 장악할 수 있는 능력을 갖게 됩니다. 또한 기본 설정된 통신 채널이 암호화되지 않아 중간자 공격(MitM)을 통한 민감 정보 탈취가 가능합니다. [Impact Assessment] 취약점이 성공적으로 악용될 경우, 산업 현장의 공정 최적화 모델을 관리하는 Application Server가 완전히 침해됩니다. 이는 단순히 데이터 유출에 그치지 않고 실제 생산 공정의 매개변수를 조작하여 물리적 피해를 야기하거나, 제조 공정의 효율을 떨어뜨리는 등 경제적 손실과 인명 안전 문제로 직결될 수 있습니다. [Recommendations] 조직은 즉시 AVEVA Process Optimization v2025 최신 버전으로 업데이트를 수행해야 합니다. 패치 적용 전 임시 조치로 포트 8888 및 8889(TLS)에 대한 네트워크 방화벽 규칙을 강화하고, 프로젝트 파일에 대한 엄격한 ACL 관리와 접근 통제를 시행해야 합니다. 또한 외부 인터넷으로부터 OT 망을 완전히 격리하고 VPN 사용 시 최신 보안 업데이트를 유지할 것을 권고합니다.


## References
1. CISA Advisory, ICSA-26-015-01: AVEVA Process Optimization, 2026
2. CVE-2025-61937
3. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82, 2015
4. MITRE ATT&CK for ICS: T0806 (Exploitation of Remote Services)
5. AVEVA Security Bulletin, AVEVA-2026-001, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-015-01)
    