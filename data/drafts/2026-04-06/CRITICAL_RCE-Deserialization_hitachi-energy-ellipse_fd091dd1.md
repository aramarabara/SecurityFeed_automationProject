
# Hitachi Energy Ellipse

> [Executive Overview] Hitachi Energy의 자산 관리 솔루션인 Ellipse에서 Jasper Report 제3자 구성 요소와 관련된 치명적인 원격 코드 실행(RCE) 취약점(CVE-2025-10492)이 발견되었습니다. 이 취약점은 CVSS 점수 9.8로 평가되었으며, 전 세계 주요 제조 및 핵심 인프라 산업에서 널리 사용되는 제품의 보안을 심각하게 위협합니다. [Threat Analysis] 본 취약점은 CWE-502(신뢰할 수 없는 데이터의 역직렬화)로 분류됩니다. Ellipse 내부의 Jaspersoft 라이브러리가 외부에서 제공된 데이터를 처리하는 과정에서 적절한 검증을 수행하지 않아 발생하며, 공격자는 네트워크를 통해 인증 없이 악성 직렬화 객체를 주입함으로써 대상 시스템에서 임의의 코드를 실행할 수 있습니다. [Impact Assessment] 공격 성공 시 Ellipse 애플리케이션 권한으로 시스템을 완전히 제어할 수 있게 됩니다. 이는 핵심 인프라의 자산 관리 데이터 탈취, 운영 중단, 혹은 공정 제어 시스템으로의 횡적 이동을 통한 물리적 피해로 이어질 수 있는 고위험군 위협입니다. [Recommendations] 관리자는 즉시 시스템 관리자가 생성한 신뢰할 수 있는 Jasper 리포트만 로드되도록 외부 사용자 리포트 로딩 기능을 제한해야 합니다. 또한, 공정 제어 네트워크를 인터넷으로부터 물리적으로 격리하고, 최신 보안 패치 적용 및 VPN 기반의 안전한 원격 접속 체계를 유지할 것을 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: RCE, Deserialization, ICS/OT, Hitachi Energy, CVE-2025-10492

## Analysis
[Executive Overview] Hitachi Energy의 자산 관리 솔루션인 Ellipse에서 Jasper Report 제3자 구성 요소와 관련된 치명적인 원격 코드 실행(RCE) 취약점(CVE-2025-10492)이 발견되었습니다. 이 취약점은 CVSS 점수 9.8로 평가되었으며, 전 세계 주요 제조 및 핵심 인프라 산업에서 널리 사용되는 제품의 보안을 심각하게 위협합니다. [Threat Analysis] 본 취약점은 CWE-502(신뢰할 수 없는 데이터의 역직렬화)로 분류됩니다. Ellipse 내부의 Jaspersoft 라이브러리가 외부에서 제공된 데이터를 처리하는 과정에서 적절한 검증을 수행하지 않아 발생하며, 공격자는 네트워크를 통해 인증 없이 악성 직렬화 객체를 주입함으로써 대상 시스템에서 임의의 코드를 실행할 수 있습니다. [Impact Assessment] 공격 성공 시 Ellipse 애플리케이션 권한으로 시스템을 완전히 제어할 수 있게 됩니다. 이는 핵심 인프라의 자산 관리 데이터 탈취, 운영 중단, 혹은 공정 제어 시스템으로의 횡적 이동을 통한 물리적 피해로 이어질 수 있는 고위험군 위협입니다. [Recommendations] 관리자는 즉시 시스템 관리자가 생성한 신뢰할 수 있는 Jasper 리포트만 로드되도록 외부 사용자 리포트 로딩 기능을 제한해야 합니다. 또한, 공정 제어 네트워크를 인터넷으로부터 물리적으로 격리하고, 최신 보안 패치 적용 및 VPN 기반의 안전한 원격 접속 체계를 유지할 것을 권고합니다.


## References
1. CVE-2025-10492
2. CISA Advisory ICSA-26-092-03: Hitachi Energy Ellipse, 2026
3. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
4. CWE-502: Deserialization of Untrusted Data
5. Hitachi Energy PSIRT Advisory 8DBD000238, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-092-03)
    