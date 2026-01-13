
# Rockwell Automation FactoryTalk DataMosaix Private Cloud

> [Executive Overview] Rockwell Automation의 FactoryTalk DataMosaix Private Cloud 솔루션에서 심각한 보안 취약점인 CVE-2025-12807이 발견되었습니다. 이 제품은 산업 데이터 분석 및 가시화에 사용되는 핵심 플랫폼으로, 본 취약점 악용 시 공격자가 제조 공정의 민감 데이터베이스에 직접 접근하거나 조작할 위험이 있습니다. [Threat Analysis] 해당 취약점은 CWE-89(SQL Injection)로 분류되며, 노출된 API 엔드포인트를 통해 특수하게 조작된 SQL 명령어를 삽입함으로써 발생합니다. 특히 낮은 권한(Low Privilege)을 가진 사용자도 인증된 API를 통해 공격을 수행할 수 있어 내부 위협에 취약합니다. 공격자는 이를 통해 데이터베이스 내 기밀 정보를 탈취하거나 무단으로 레코드를 수정 및 삭제할 수 있습니다. [Impact Assessment] 취약점의 영향도는 CVSS 8.8(High)로 평가되었습니다. 공격 성공 시 제조 공정 데이터의 무결성이 훼손되어 품질 문제가 발생하거나 생산 중단 사태로 이어질 수 있습니다. 전 세계 핵심 제조(Critical Manufacturing) 분야에서 널리 사용되는 솔루션인 만큼 광범위한 공급망 위협이 존재합니다. [Recommendations] 사용자는 즉시 FactoryTalk DataMosaix Private Cloud를 버전 8.01.02 이상으로 업데이트해야 합니다. 즉시 패치가 어려운 경우 제어 시스템 네트워크를 인터넷에서 분리하고, 방화벽을 통한 업무망과의 격리 조치 및 VPN 기반의 안전한 원격 접속을 구현할 것을 강력히 권고합니다.

**Severity**: HIGH (8.8/10)
**Tags**: ICS/OT, SQL Injection, CVE-2025-12807, Critical Manufacturing, API Security

## Analysis
[Executive Overview] Rockwell Automation의 FactoryTalk DataMosaix Private Cloud 솔루션에서 심각한 보안 취약점인 CVE-2025-12807이 발견되었습니다. 이 제품은 산업 데이터 분석 및 가시화에 사용되는 핵심 플랫폼으로, 본 취약점 악용 시 공격자가 제조 공정의 민감 데이터베이스에 직접 접근하거나 조작할 위험이 있습니다. [Threat Analysis] 해당 취약점은 CWE-89(SQL Injection)로 분류되며, 노출된 API 엔드포인트를 통해 특수하게 조작된 SQL 명령어를 삽입함으로써 발생합니다. 특히 낮은 권한(Low Privilege)을 가진 사용자도 인증된 API를 통해 공격을 수행할 수 있어 내부 위협에 취약합니다. 공격자는 이를 통해 데이터베이스 내 기밀 정보를 탈취하거나 무단으로 레코드를 수정 및 삭제할 수 있습니다. [Impact Assessment] 취약점의 영향도는 CVSS 8.8(High)로 평가되었습니다. 공격 성공 시 제조 공정 데이터의 무결성이 훼손되어 품질 문제가 발생하거나 생산 중단 사태로 이어질 수 있습니다. 전 세계 핵심 제조(Critical Manufacturing) 분야에서 널리 사용되는 솔루션인 만큼 광범위한 공급망 위협이 존재합니다. [Recommendations] 사용자는 즉시 FactoryTalk DataMosaix Private Cloud를 버전 8.01.02 이상으로 업데이트해야 합니다. 즉시 패치가 어려운 경우 제어 시스템 네트워크를 인터넷에서 분리하고, 방화벽을 통한 업무망과의 격리 조치 및 VPN 기반의 안전한 원격 접속을 구현할 것을 강력히 권고합니다.


## References
1. CISA, ICSA-26-013-02 Rockwell Automation FactoryTalk DataMosaix Private Cloud, 2026
2. CVE-2025-12807
3. MITRE ATT&CK: T1190 Exploit Public-Facing Application
4. CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-013-02)
    