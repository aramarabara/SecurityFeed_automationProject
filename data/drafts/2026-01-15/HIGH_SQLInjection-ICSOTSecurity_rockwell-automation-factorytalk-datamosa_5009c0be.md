
# Rockwell Automation FactoryTalk DataMosaix Private Cloud

> [Executive Overview] Rockwell Automation의 FactoryTalk DataMosaix Private Cloud에서 심각한 보안 취약점인 CVE-2025-12807이 보고되었습니다. 해당 제품은 산업 현장의 데이터를 통합하고 분석하는 핵심적인 OT 플랫폼으로, 이번에 발견된 SQL 인젝션 취약점은 전 세계 중요 제조 시설의 운영 안정성에 상당한 위협을 가할 수 있습니다. [Threat Analysis] 본 취약점(CWE-89)은 노출된 API 엔드포인트에서 특수 요소를 부적절하게 처리함으로써 발생합니다. CVSS 3.1 기준 8.8점으로 평가된 이 위협은 공격자가 낮은 권한의 계정만으로도 원격에서 악성 SQL 쿼리를 주입할 수 있게 합니다. 이를 통해 데이터베이스 내의 민감한 정보를 탈취하거나 무단으로 수정 및 삭제하는 행위가 가능해집니다. [Impact Assessment] 공격이 성공할 경우 기업의 핵심 제조 데이터 무결성이 손상되거나 지적 재산권이 유출될 위험이 큽니다. 특히 데이터베이스 운영 장애를 유발하여 생산 공정 전체의 다운타임을 초래할 수 있으며, 이는 곧 경제적 손실과 직결됩니다. 현재까지 알려진 실제 악용 사례는 보고되지 않았으나 잠재적 영향력은 매우 높습니다. [Recommendations] 관리자는 즉시 FactoryTalk DataMosaix Private Cloud를 최신 보안 버전인 8.01.02 이상으로 업데이트해야 합니다. 즉각적인 패치가 어려운 경우 외부 네트워크와의 접점을 최소화하고, 제어 시스템을 방화벽 뒤에 배치하여 비즈니스망과 물리적으로 격리하는 '심층 방어' 전략을 적용해야 합니다.

**Severity**: HIGH (8.8/10)
**Tags**: SQL Injection, ICS/OT Security, CVE-2025-12807, Critical Manufacturing, Patch Management

## Analysis
[Executive Overview] Rockwell Automation의 FactoryTalk DataMosaix Private Cloud에서 심각한 보안 취약점인 CVE-2025-12807이 보고되었습니다. 해당 제품은 산업 현장의 데이터를 통합하고 분석하는 핵심적인 OT 플랫폼으로, 이번에 발견된 SQL 인젝션 취약점은 전 세계 중요 제조 시설의 운영 안정성에 상당한 위협을 가할 수 있습니다. [Threat Analysis] 본 취약점(CWE-89)은 노출된 API 엔드포인트에서 특수 요소를 부적절하게 처리함으로써 발생합니다. CVSS 3.1 기준 8.8점으로 평가된 이 위협은 공격자가 낮은 권한의 계정만으로도 원격에서 악성 SQL 쿼리를 주입할 수 있게 합니다. 이를 통해 데이터베이스 내의 민감한 정보를 탈취하거나 무단으로 수정 및 삭제하는 행위가 가능해집니다. [Impact Assessment] 공격이 성공할 경우 기업의 핵심 제조 데이터 무결성이 손상되거나 지적 재산권이 유출될 위험이 큽니다. 특히 데이터베이스 운영 장애를 유발하여 생산 공정 전체의 다운타임을 초래할 수 있으며, 이는 곧 경제적 손실과 직결됩니다. 현재까지 알려진 실제 악용 사례는 보고되지 않았으나 잠재적 영향력은 매우 높습니다. [Recommendations] 관리자는 즉시 FactoryTalk DataMosaix Private Cloud를 최신 보안 버전인 8.01.02 이상으로 업데이트해야 합니다. 즉각적인 패치가 어려운 경우 외부 네트워크와의 접점을 최소화하고, 제어 시스템을 방화벽 뒤에 배치하여 비즈니스망과 물리적으로 격리하는 '심층 방어' 전략을 적용해야 합니다.


## References
1. CISA, ICSA-26-013-02: Rockwell Automation FactoryTalk DataMosaix Private Cloud, 2026
2. CVE-2025-12807
3. MITRE ATT&CK: T1190 (Exploit Public-Facing Application)
4. CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-013-02)
    