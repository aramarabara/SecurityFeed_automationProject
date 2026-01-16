
# AVEVA Process Optimization

> [Executive Overview] 글로벌 산업 자동화 소프트웨어 리더인 AVEVA의 Process Optimization 제품군에서 총 7개의 치명적인 보안 취약점이 발견되었습니다. 가장 위험한 CVE-2025-61937은 CVSS 점수 10.0 만점을 기록한 원격 코드 실행(RCE) 취약점으로, 전 세계 제조 분야 인프라의 핵심 제어 시스템에 심각한 위협을 초래하고 있습니다.

[Threat Analysis] 공격 벡터는 매우 다양하며, 인증되지 않은 공격자가 'taoimr' 서비스를 통해 OS 시스템 권한을 획득하거나 SQL 인젝션(CVE-2025-61943)을 통해 데이터베이스 서버를 완전히 장악할 수 있습니다. 또한, 통신 채널의 평문 전송 문제(CVE-2025-64769)는 중간자 공격(MitM)을 통한 데이터 탈취를 가능하게 하며, 잘못된 검색 경로 설정(CWE-427)을 이용한 권한 상승 공격도 가능합니다.

[Impact Assessment] 취약점이 성공적으로 악용될 경우 모델 애플리케이션 서버와 SQL 서버의 완전한 통제권이 공격자에게 넘어갑니다. 이는 민감한 공정 정보 유출뿐만 아니라 제조 공정의 임의 조작이나 생산 라인 중단과 같은 물리적 파급 효과로 이어질 수 있어, 제조업 기반의 핵심 국가 인프라에 치명적인 타격을 입힐 수 있습니다.

[Recommendations] 가장 효과적인 대응은 AVEVA Process Optimization v2025 최신 버전으로 업데이트하는 것입니다. 즉각적인 패치가 어려운 경우, 호스트/네트워크 방화벽을 사용해 포트 8888/8889 접근을 신뢰할 수 있는 소스로만 제한해야 합니다. 또한 프로젝트 데이터 폴더에 대한 ACL(접근 제어 목록)을 강화하고, 제어 시스템 네트워크를 업무 망 및 외부 인터넷으로부터 철저히 격리하는 방어 지침을 준수해야 합니다.

**Severity**: CRITICAL (10/10)
**Tags**: ICS/SCADA, Remote Code Execution, SQL Injection, AVEVA, Critical Infrastructure

## Analysis
[Executive Overview] 글로벌 산업 자동화 소프트웨어 리더인 AVEVA의 Process Optimization 제품군에서 총 7개의 치명적인 보안 취약점이 발견되었습니다. 가장 위험한 CVE-2025-61937은 CVSS 점수 10.0 만점을 기록한 원격 코드 실행(RCE) 취약점으로, 전 세계 제조 분야 인프라의 핵심 제어 시스템에 심각한 위협을 초래하고 있습니다.

[Threat Analysis] 공격 벡터는 매우 다양하며, 인증되지 않은 공격자가 'taoimr' 서비스를 통해 OS 시스템 권한을 획득하거나 SQL 인젝션(CVE-2025-61943)을 통해 데이터베이스 서버를 완전히 장악할 수 있습니다. 또한, 통신 채널의 평문 전송 문제(CVE-2025-64769)는 중간자 공격(MitM)을 통한 데이터 탈취를 가능하게 하며, 잘못된 검색 경로 설정(CWE-427)을 이용한 권한 상승 공격도 가능합니다.

[Impact Assessment] 취약점이 성공적으로 악용될 경우 모델 애플리케이션 서버와 SQL 서버의 완전한 통제권이 공격자에게 넘어갑니다. 이는 민감한 공정 정보 유출뿐만 아니라 제조 공정의 임의 조작이나 생산 라인 중단과 같은 물리적 파급 효과로 이어질 수 있어, 제조업 기반의 핵심 국가 인프라에 치명적인 타격을 입힐 수 있습니다.

[Recommendations] 가장 효과적인 대응은 AVEVA Process Optimization v2025 최신 버전으로 업데이트하는 것입니다. 즉각적인 패치가 어려운 경우, 호스트/네트워크 방화벽을 사용해 포트 8888/8889 접근을 신뢰할 수 있는 소스로만 제한해야 합니다. 또한 프로젝트 데이터 폴더에 대한 ACL(접근 제어 목록)을 강화하고, 제어 시스템 네트워크를 업무 망 및 외부 인터넷으로부터 철저히 격리하는 방어 지침을 준수해야 합니다.


## References
1. CISA, Advisory ICSA-26-015-01: AVEVA Process Optimization, 2026
2. CVE-2025-61937
3. CVE-2025-61943
4. MITRE ATT&CK: T0806 (External Remote Services)
5. AVEVA Security Bulletin, AVEVA-2026-001, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-015-01)
    