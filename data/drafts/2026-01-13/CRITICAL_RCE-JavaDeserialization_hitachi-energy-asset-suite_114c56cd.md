
# Hitachi Energy Asset Suite

> [Executive Overview] 글로벌 에너지 인프라 솔루션 기업인 히타치 에너지(Hitachi Energy)의 Asset Suite 제품에서 원격 코드 실행(RCE)이 가능한 치명적인 보안 취약점이 발견되었습니다. 이 솔루션은 전 세계 에너지 산업계의 핵심 자산 관리에 사용되고 있어, 취약점 노출 시 국가 기반 시설의 운영 연속성에 심각한 타격을 줄 수 있습니다. [Threat Analysis] 이번 보안 결함(CVE-2025-10492)은 서드파티 구성 요소인 Jaspersoft 라이브러리에서 발생하는 '신뢰할 수 없는 데이터의 역직렬화(CWE-502)' 문제에 기인합니다. 공격자는 별도의 인증 절차 없이 네트워크를 통해 특수하게 조작된 직렬화 데이터를 전송함으로써, 대상 서버에서 임의의 Java 코드를 실행할 수 있습니다. 공격 복잡도가 낮고 사용자 상호작용이 필요하지 않아 위협 수준이 매우 높습니다. [Impact Assessment] 취약점 악용 성공 시 공격자는 Asset Suite 서버의 완전한 제어권을 획득하게 됩니다. 이는 민감한 자산 데이터의 탈취, 관리 워크플로우 마비, 그리고 운영 기술(OT) 네트워크 내부로의 측면 이동(Lateral Movement)을 허용하여 에너지 공급망 전체의 가용성과 무결성을 위협하는 결과로 이어질 수 있습니다. [Recommendations] 모든 사용자는 즉시 Asset Suite 9.8 버전으로 업데이트해야 합니다. 즉각적인 패치가 불가능한 경우, 시스템 관리자가 검증한 보고서 파일만 로드되도록 설정을 제한해야 합니다. 또한 CISA의 심층 방어 전략에 따라 제어 시스템을 인터넷으로부터 물리적으로 격리하고, 원격 접속 시 보안이 강화된 VPN과 다중 인증(MFA)을 필수적으로 적용할 것을 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: RCE, Java Deserialization, ICS/SCADA, Hitachi Energy, CVE-2025-10492

## Analysis
[Executive Overview] 글로벌 에너지 인프라 솔루션 기업인 히타치 에너지(Hitachi Energy)의 Asset Suite 제품에서 원격 코드 실행(RCE)이 가능한 치명적인 보안 취약점이 발견되었습니다. 이 솔루션은 전 세계 에너지 산업계의 핵심 자산 관리에 사용되고 있어, 취약점 노출 시 국가 기반 시설의 운영 연속성에 심각한 타격을 줄 수 있습니다. [Threat Analysis] 이번 보안 결함(CVE-2025-10492)은 서드파티 구성 요소인 Jaspersoft 라이브러리에서 발생하는 '신뢰할 수 없는 데이터의 역직렬화(CWE-502)' 문제에 기인합니다. 공격자는 별도의 인증 절차 없이 네트워크를 통해 특수하게 조작된 직렬화 데이터를 전송함으로써, 대상 서버에서 임의의 Java 코드를 실행할 수 있습니다. 공격 복잡도가 낮고 사용자 상호작용이 필요하지 않아 위협 수준이 매우 높습니다. [Impact Assessment] 취약점 악용 성공 시 공격자는 Asset Suite 서버의 완전한 제어권을 획득하게 됩니다. 이는 민감한 자산 데이터의 탈취, 관리 워크플로우 마비, 그리고 운영 기술(OT) 네트워크 내부로의 측면 이동(Lateral Movement)을 허용하여 에너지 공급망 전체의 가용성과 무결성을 위협하는 결과로 이어질 수 있습니다. [Recommendations] 모든 사용자는 즉시 Asset Suite 9.8 버전으로 업데이트해야 합니다. 즉각적인 패치가 불가능한 경우, 시스템 관리자가 검증한 보고서 파일만 로드되도록 설정을 제한해야 합니다. 또한 CISA의 심층 방어 전략에 따라 제어 시스템을 인터넷으로부터 물리적으로 격리하고, 원격 접속 시 보안이 강화된 VPN과 다중 인증(MFA)을 필수적으로 적용할 것을 권고합니다.


## References
1. CISA, ICSA-26-008-01: Hitachi Energy Asset Suite, 2026
2. CVE-2025-10492
3. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
4. Frohoff and Schuck, Marshalling Pickles: how deserializing objects will ruin your day, AppSecCali, 2015
5. CWE-502: Deserialization of Untrusted Data
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-008-01)
    