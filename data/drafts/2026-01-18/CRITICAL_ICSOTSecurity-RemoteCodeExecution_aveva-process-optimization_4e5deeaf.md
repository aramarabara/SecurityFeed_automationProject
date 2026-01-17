
# AVEVA Process Optimization

> Executive Overview: 산업용 소프트웨어 전문 기업인 AVEVA의 Process Optimization 제품군에서 원격 코드 실행(RCE)을 포함한 다수의 치명적인 보안 취약점이 발견되었습니다. 특히 CVE-2025-61937은 CVSS 10.0의 최고 위험도를 기록하고 있으며, 전 세계 제조 설비의 운영을 최적화하는 핵심 시스템을 무력화할 수 있는 심각한 잠재력을 지니고 있습니다. Threat Analysis: 기술적 분석 결과, 공격자는 'taoimr' 서비스를 통해 인증 없이 OS System 권한으로 코드를 실행하거나, Captive Historian 구성 요소에 SQL 인젝션 공격을 수행하여 데이터베이스 관리자 권한을 획득할 수 있습니다. 또한, 부적절한 검색 경로 설정(DLL 하이재킹 유사) 및 OLE 개체 임베딩 기능을 악용하여 일반 사용자의 권한을 시스템 권한으로 상승시키는 복합적인 공격 시나리오가 가능합니다. Impact Assessment: 이번 취약점은 전 세계 제조 분야의 모델 애플리케이션 서버에 직접적인 영향을 미칩니다. 공격 성공 시 시스템의 완전한 제어권 상실, 민감한 공정 데이터 탈취, 그리고 물리적 생산 라인의 중단과 같은 막대한 경제적 손실 및 안전 사고를 유발할 수 있습니다. Recommendations: 조직은 최신 보안 패치가 포함된 v2025 버전으로 즉시 업데이트를 수행해야 합니다. 즉각적인 업데이트가 어려운 경우, 호스트 및 네트워크 방화벽을 통해 8888/8889 포트 접근을 엄격히 제한하고, 설치 및 데이터 폴더에 대한 ACL 설정을 강화하여 신뢰할 수 있는 사용자만 접근하도록 조치해야 합니다.

**Severity**: CRITICAL (10/10)
**Tags**: ICS/OT Security, Remote Code Execution, SQL Injection, Privilege Escalation, Critical Manufacturing

## Analysis
Executive Overview: 산업용 소프트웨어 전문 기업인 AVEVA의 Process Optimization 제품군에서 원격 코드 실행(RCE)을 포함한 다수의 치명적인 보안 취약점이 발견되었습니다. 특히 CVE-2025-61937은 CVSS 10.0의 최고 위험도를 기록하고 있으며, 전 세계 제조 설비의 운영을 최적화하는 핵심 시스템을 무력화할 수 있는 심각한 잠재력을 지니고 있습니다. Threat Analysis: 기술적 분석 결과, 공격자는 'taoimr' 서비스를 통해 인증 없이 OS System 권한으로 코드를 실행하거나, Captive Historian 구성 요소에 SQL 인젝션 공격을 수행하여 데이터베이스 관리자 권한을 획득할 수 있습니다. 또한, 부적절한 검색 경로 설정(DLL 하이재킹 유사) 및 OLE 개체 임베딩 기능을 악용하여 일반 사용자의 권한을 시스템 권한으로 상승시키는 복합적인 공격 시나리오가 가능합니다. Impact Assessment: 이번 취약점은 전 세계 제조 분야의 모델 애플리케이션 서버에 직접적인 영향을 미칩니다. 공격 성공 시 시스템의 완전한 제어권 상실, 민감한 공정 데이터 탈취, 그리고 물리적 생산 라인의 중단과 같은 막대한 경제적 손실 및 안전 사고를 유발할 수 있습니다. Recommendations: 조직은 최신 보안 패치가 포함된 v2025 버전으로 즉시 업데이트를 수행해야 합니다. 즉각적인 업데이트가 어려운 경우, 호스트 및 네트워크 방화벽을 통해 8888/8889 포트 접근을 엄격히 제한하고, 설치 및 데이터 폴더에 대한 ACL 설정을 강화하여 신뢰할 수 있는 사용자만 접근하도록 조치해야 합니다.


## References
1. CISA, Advisory ICSA-26-015-01: AVEVA Process Optimization, 2026
2. CVE-2025-61937
3. MITRE ATT&CK: T0819 (Data from Information Repository)
4. Stouffer et al., NIST SP 800-82 Rev. 3: Guide to Operational Technology (OT) Security, 2023
5. AVEVA Security Bulletin: AVEVA-2026-001, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-015-01)
    