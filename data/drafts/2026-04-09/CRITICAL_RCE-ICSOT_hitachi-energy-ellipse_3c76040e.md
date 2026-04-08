
# Hitachi Energy Ellipse

> [Executive Overview] Hitachi Energy의 자산 관리 솔루션인 Ellipse에서 타사 구성 요소인 JasperReports 라이브러리의 심각한 취약점이 발견되었습니다. 이 취약점은 전 세계 핵심 제조 인프라에 배포된 시스템을 대상으로 원격 코드 실행(RCE)을 허용할 수 있어 보안 관리자의 즉각적인 대응이 요구됩니다. [Threat Analysis] CVE-2025-10492로 식별된 이 결함은 신뢰할 수 없는 데이터의 역직렬화(CWE-502)로 인해 발생합니다. 공격자는 특수하게 조작된 보고서 데이터를 전송하여 Jaspersoft 라이브러리를 사용하는 시스템에서 인증 없이 임의의 명령을 실행할 수 있습니다. 특히 CVSS 9.8의 높은 점수는 공격의 용이성과 파괴적인 잠재력을 시사합니다. [Impact Assessment] 해당 취약점 악용 성공 시, 공격자는 Ellipse 서버에 대한 전체 제어권을 획득할 수 있습니다. 이는 민감한 자산 데이터의 탈취는 물론, 산업 제어 시스템(ICS) 환경 내에서의 측면 이동(Lateral Movement)을 통해 생산 공정에 직접적인 타격을 줄 수 있는 위험을 내포합니다. [Recommendations] 최우선 조치로 시스템 관리자가 생성한 신뢰할 수 있는 Jasper 보고서만 로드되도록 외부 사용자 정의 보고서 기능을 제한해야 합니다. 또한 CISA의 권고에 따라 제어 시스템 네트워크를 인터넷에서 격리하고, 방화벽을 통한 포트 최소화 및 VPN 사용 시 다요소 인증(MFA)을 적용하는 등 심층 방어 전략을 강화해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: RCE, ICS/OT, Deserialization, Hitachi Energy, CVE-2025-10492

## Analysis
[Executive Overview] Hitachi Energy의 자산 관리 솔루션인 Ellipse에서 타사 구성 요소인 JasperReports 라이브러리의 심각한 취약점이 발견되었습니다. 이 취약점은 전 세계 핵심 제조 인프라에 배포된 시스템을 대상으로 원격 코드 실행(RCE)을 허용할 수 있어 보안 관리자의 즉각적인 대응이 요구됩니다. [Threat Analysis] CVE-2025-10492로 식별된 이 결함은 신뢰할 수 없는 데이터의 역직렬화(CWE-502)로 인해 발생합니다. 공격자는 특수하게 조작된 보고서 데이터를 전송하여 Jaspersoft 라이브러리를 사용하는 시스템에서 인증 없이 임의의 명령을 실행할 수 있습니다. 특히 CVSS 9.8의 높은 점수는 공격의 용이성과 파괴적인 잠재력을 시사합니다. [Impact Assessment] 해당 취약점 악용 성공 시, 공격자는 Ellipse 서버에 대한 전체 제어권을 획득할 수 있습니다. 이는 민감한 자산 데이터의 탈취는 물론, 산업 제어 시스템(ICS) 환경 내에서의 측면 이동(Lateral Movement)을 통해 생산 공정에 직접적인 타격을 줄 수 있는 위험을 내포합니다. [Recommendations] 최우선 조치로 시스템 관리자가 생성한 신뢰할 수 있는 Jasper 보고서만 로드되도록 외부 사용자 정의 보고서 기능을 제한해야 합니다. 또한 CISA의 권고에 따라 제어 시스템 네트워크를 인터넷에서 격리하고, 방화벽을 통한 포트 최소화 및 VPN 사용 시 다요소 인증(MFA)을 적용하는 등 심층 방어 전략을 강화해야 합니다.


## References
1. CVE-2025-10492
2. CISA, ICSA-26-092-03: Hitachi Energy Ellipse, 2026
3. MITRE ATT&CK: T1210 - Exploitation of Remote Services
4. Frohoff and Schreck, Marshalling Pickles: how deserializing objects can ruin your day, AppSecCali, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-092-03)
    