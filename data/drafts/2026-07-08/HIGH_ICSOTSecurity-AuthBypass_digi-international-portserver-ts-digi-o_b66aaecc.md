
# Digi International PortServer TS, Digi One SP IA

> [Executive Overview] Digi International의 산업용 시리얼 서버 제품군인 PortServer TS 및 Digi One 시리즈에서 심각한 보안 취약점이 발견되었습니다. 해당 장치들은 제조, 통신, 교통 등 주요 국가 기반 시설에서 시리얼 통신 장비를 IP 네트워크에 연결하는 핵심 브릿지 역할을 수행하므로, 취약점 노출 시 산업 공정 전반에 걸친 심각한 보안 위협이 될 수 있습니다. [Threat Analysis] 주요 취약점은 두 가지로 구분됩니다. CVE-2026-12352(부적절한 권한 부여)는 인증되지 않은 공격자가 장치의 제한된 자원에 접근할 수 있게 하며, CVSS 4.0 기준 8.2의 높은 위험도를 기록했습니다. CVE-2026-12948(저장형 XSS)은 관리자 설정 페이지에 악성 스크립트를 삽입하여 세션 탈취나 권한 상승을 유도합니다. 특히 공격자가 네트워크를 통해 원격으로 인증을 우회할 수 있다는 점이 기술적 위협의 핵심입니다. [Impact Assessment] 전 세계 Critical Manufacturing 및 IT 분야에 배포된 하드웨어가 공격 대상이며, 공격 성공 시 산업 제어 시스템(ICS)의 설정 변경, 자격 증명 유출, 장치 가동 중단 등의 결과로 이어질 수 있습니다. 특히 일부 모델은 수명 종료(EOL) 단계에 진입하여 제조사의 직접적인 패치 제공이 제한적이라는 점이 잠재적 위험을 가중시킵니다. [Recommendations] Digi International은 장기적으로 Digi Connect EZ로의 하드웨어 업그레이드를 강력히 권고합니다. 즉각적인 조치로는 웹 관리 인터페이스 비활성화, HTTPS 프로토콜 강제 적용, VPN 및 방화벽을 통한 관리망 격리가 필수적입니다. 또한 네트워크 세분화를 통해 인터넷으로부터의 직접 접근을 차단하는 심층 방어(Defense-in-Depth) 전략을 구축해야 합니다.

**Severity**: HIGH (8.2/10)
**Tags**: ICS/OT Security, Auth Bypass, CVE-2026-12352, Stored XSS, Critical Infrastructure

## Analysis
[Executive Overview] Digi International의 산업용 시리얼 서버 제품군인 PortServer TS 및 Digi One 시리즈에서 심각한 보안 취약점이 발견되었습니다. 해당 장치들은 제조, 통신, 교통 등 주요 국가 기반 시설에서 시리얼 통신 장비를 IP 네트워크에 연결하는 핵심 브릿지 역할을 수행하므로, 취약점 노출 시 산업 공정 전반에 걸친 심각한 보안 위협이 될 수 있습니다. [Threat Analysis] 주요 취약점은 두 가지로 구분됩니다. CVE-2026-12352(부적절한 권한 부여)는 인증되지 않은 공격자가 장치의 제한된 자원에 접근할 수 있게 하며, CVSS 4.0 기준 8.2의 높은 위험도를 기록했습니다. CVE-2026-12948(저장형 XSS)은 관리자 설정 페이지에 악성 스크립트를 삽입하여 세션 탈취나 권한 상승을 유도합니다. 특히 공격자가 네트워크를 통해 원격으로 인증을 우회할 수 있다는 점이 기술적 위협의 핵심입니다. [Impact Assessment] 전 세계 Critical Manufacturing 및 IT 분야에 배포된 하드웨어가 공격 대상이며, 공격 성공 시 산업 제어 시스템(ICS)의 설정 변경, 자격 증명 유출, 장치 가동 중단 등의 결과로 이어질 수 있습니다. 특히 일부 모델은 수명 종료(EOL) 단계에 진입하여 제조사의 직접적인 패치 제공이 제한적이라는 점이 잠재적 위험을 가중시킵니다. [Recommendations] Digi International은 장기적으로 Digi Connect EZ로의 하드웨어 업그레이드를 강력히 권고합니다. 즉각적인 조치로는 웹 관리 인터페이스 비활성화, HTTPS 프로토콜 강제 적용, VPN 및 방화벽을 통한 관리망 격리가 필수적입니다. 또한 네트워크 세분화를 통해 인터넷으로부터의 직접 접근을 차단하는 심층 방어(Defense-in-Depth) 전략을 구축해야 합니다.


## References
1. CISA, ICSA-26-188-07: Digi International PortServer TS and Digi One, 2026
2. CVE-2026-12352
3. CVE-2026-12948
4. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82 Rev. 2, 2015
5. MITRE ATT&CK: T0812 - Default Credentials
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-188-07)
    