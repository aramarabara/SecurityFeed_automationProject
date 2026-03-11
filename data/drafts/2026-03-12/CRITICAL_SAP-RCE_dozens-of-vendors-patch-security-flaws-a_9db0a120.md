
# Dozens of Vendors Patch Security Flaws Across Enterprise Software and Network Devices

> [Executive Overview] 최근 SAP는 기업용 소프트웨어 및 네트워크 장비에서 발견된 다수의 보안 취약점에 대한 패치를 발표했습니다. 특히 SAP Quotation Management Insurance(FS-QUO) 애플리케이션에서 발견된 코드 주입 및 역직렬화 취약점은 원격 코드 실행(RCE)을 가능하게 하여 기업 인프라에 심각한 보안 위협을 초래합니다. [Threat Analysis] CVE-2019-17571은 Apache Log4j 1.2의 SocketServer 클래스 내 코드 주입 취약점으로, 특수하게 조작된 데이터를 통해 공격자가 대상 시스템에서 권한 없이 코드를 실행할 수 있게 합니다. CVE-2026-27685는 안전하지 않은 역직렬화(Insecure Deserialization) 취약점으로, 객체 복원 과정에서 악성 페이로드를 실행할 수 있는 구조적 결함을 악용합니다. [Impact Assessment] 이러한 취약점이 악용될 경우 공격자는 서버의 완전한 제어권을 획득할 수 있습니다. 이는 민감한 보험 계약 데이터의 유출, 시스템 중단, 그리고 기업 내부망으로의 측면 이동(Lateral Movement)으로 이어질 수 있어 비즈니스 연속성에 치명적인 영향을 미칩니다. [Recommendations] 모든 조직은 SAP에서 제공하는 최신 보안 업데이트를 즉시 적용해야 합니다. 특히 구버전 Log4j 라이브러리 의존성을 전수 조사하고, 네트워크 분리 및 침입 탐지 시스템(IDS)을 강화하여 비정상적인 소켓 통신이나 트래픽 패턴을 실시간으로 모니터링할 것을 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: SAP, RCE, Insecure Deserialization, Code Injection, Patch Management

## Analysis
[Executive Overview] 최근 SAP는 기업용 소프트웨어 및 네트워크 장비에서 발견된 다수의 보안 취약점에 대한 패치를 발표했습니다. 특히 SAP Quotation Management Insurance(FS-QUO) 애플리케이션에서 발견된 코드 주입 및 역직렬화 취약점은 원격 코드 실행(RCE)을 가능하게 하여 기업 인프라에 심각한 보안 위협을 초래합니다. [Threat Analysis] CVE-2019-17571은 Apache Log4j 1.2의 SocketServer 클래스 내 코드 주입 취약점으로, 특수하게 조작된 데이터를 통해 공격자가 대상 시스템에서 권한 없이 코드를 실행할 수 있게 합니다. CVE-2026-27685는 안전하지 않은 역직렬화(Insecure Deserialization) 취약점으로, 객체 복원 과정에서 악성 페이로드를 실행할 수 있는 구조적 결함을 악용합니다. [Impact Assessment] 이러한 취약점이 악용될 경우 공격자는 서버의 완전한 제어권을 획득할 수 있습니다. 이는 민감한 보험 계약 데이터의 유출, 시스템 중단, 그리고 기업 내부망으로의 측면 이동(Lateral Movement)으로 이어질 수 있어 비즈니스 연속성에 치명적인 영향을 미칩니다. [Recommendations] 모든 조직은 SAP에서 제공하는 최신 보안 업데이트를 즉시 적용해야 합니다. 특히 구버전 Log4j 라이브러리 의존성을 전수 조사하고, 네트워크 분리 및 침입 탐지 시스템(IDS)을 강화하여 비정상적인 소켓 통신이나 트래픽 패턴을 실시간으로 모니터링할 것을 권고합니다.


## References
1. CVE-2019-17571
2. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
3. SAP Security Note 2865958
4. NIST National Vulnerability Database, CVE-2019-17571 Detail, 2019
5. Munoz et al., Friday the 13th: JSON Attacks, Black Hat USA, 2017
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/dozens-of-vendors-patch-security-flaws.html)
    