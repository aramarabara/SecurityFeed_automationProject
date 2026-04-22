
# Silex Technology SD-330AC and AMC Manager

> [Executive Overview] Silex Technology의 SD-330AC 장치 및 AMC Manager 소프트웨어에서 원격 코드 실행(RCE)과 인증 우회가 가능한 다수의 치명적인 취약점이 발견되었습니다. 전 세계 정보 기술(IT) 및 주요 인프라 분야에 배포된 해당 제품군은 공격자의 주요 표적이 될 수 있으며, 특히 산업 제어 환경에서의 보안 무결성에 심각한 위협을 가하고 있습니다. [Threat Analysis] 주요 기술적 위협은 스택 및 힙 기반의 버퍼 오버플로우(CVE-2026-32955, 32956)로, 공격자는 특수하게 조작된 패킷을 전송하여 장치 권한을 완전히 획득하고 임의 코드를 실행할 수 있습니다. 또한, 핵심 기능에 대한 인증 누락(CVE-2026-32957, 32962)과 하드코딩된 암호화 키 사용(CVE-2026-32958)은 공격자가 별도의 권한 없이도 장치 구성을 변경하거나 가짜 펌웨어를 주입할 수 있는 공격 벡터를 제공합니다. [Impact Assessment] 취약한 장치가 노출될 경우 공격자는 기밀 정보를 탈취하거나 서비스 거부(DoS) 공격을 유발하여 운영 중단을 초래할 수 있습니다. 특히 2015년에 발견된 Net-SNMP의 오래된 취약점(CVE-2015-5621)이 여전히 영향을 미치고 있어, 공급망 보안 및 타사 라이브러리 관리 부실로 인한 복합적인 피해가 예상됩니다. [Recommendations] 관리자는 즉시 SD-330AC 펌웨어를 v1.50 이상으로, AMC Manager를 v5.1.0 이상으로 업데이트해야 합니다. 즉각적인 패치가 어려운 경우 HTTP/HTTPS 및 SNMP 서비스를 비활성화하고, 웹 관리 인터페이스에 강력한 비밀번호를 설정하며 제어 시스템 네트워크를 비즈니스 네트워크로부터 논리적으로 격리할 것을 강력히 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: Remote Code Execution, Buffer Overflow, Authentication Bypass, ICS Security, Supply Chain Vulnerability

## Analysis
[Executive Overview] Silex Technology의 SD-330AC 장치 및 AMC Manager 소프트웨어에서 원격 코드 실행(RCE)과 인증 우회가 가능한 다수의 치명적인 취약점이 발견되었습니다. 전 세계 정보 기술(IT) 및 주요 인프라 분야에 배포된 해당 제품군은 공격자의 주요 표적이 될 수 있으며, 특히 산업 제어 환경에서의 보안 무결성에 심각한 위협을 가하고 있습니다. [Threat Analysis] 주요 기술적 위협은 스택 및 힙 기반의 버퍼 오버플로우(CVE-2026-32955, 32956)로, 공격자는 특수하게 조작된 패킷을 전송하여 장치 권한을 완전히 획득하고 임의 코드를 실행할 수 있습니다. 또한, 핵심 기능에 대한 인증 누락(CVE-2026-32957, 32962)과 하드코딩된 암호화 키 사용(CVE-2026-32958)은 공격자가 별도의 권한 없이도 장치 구성을 변경하거나 가짜 펌웨어를 주입할 수 있는 공격 벡터를 제공합니다. [Impact Assessment] 취약한 장치가 노출될 경우 공격자는 기밀 정보를 탈취하거나 서비스 거부(DoS) 공격을 유발하여 운영 중단을 초래할 수 있습니다. 특히 2015년에 발견된 Net-SNMP의 오래된 취약점(CVE-2015-5621)이 여전히 영향을 미치고 있어, 공급망 보안 및 타사 라이브러리 관리 부실로 인한 복합적인 피해가 예상됩니다. [Recommendations] 관리자는 즉시 SD-330AC 펌웨어를 v1.50 이상으로, AMC Manager를 v5.1.0 이상으로 업데이트해야 합니다. 즉각적인 패치가 어려운 경우 HTTP/HTTPS 및 SNMP 서비스를 비활성화하고, 웹 관리 인터페이스에 강력한 비밀번호를 설정하며 제어 시스템 네트워크를 비즈니스 네트워크로부터 논리적으로 격리할 것을 강력히 권고합니다.


## References
1. CISA Advisory: ICSA-26-111-10 Silex Technology SD-330AC and AMC Manager, 2026
2. CVE-2026-32956: Silex Technology Heap-based Buffer Overflow
3. CVE-2015-5621: net-snmp snmp_pdu_parse Denial of Service
4. MITRE ATT&CK: T1210 - Exploitation of Remote Services
5. Shoshitaishvili et al., SoK: (State of) The Art of Mainstream Binary Analysis, IEEE Symposium on Security and Privacy, 2016
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-111-10)
    