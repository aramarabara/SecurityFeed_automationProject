
# Jinan USR IOT Technology Limited (PUSR) USR-W610

> [Executive Overview] Jinan USR IOT Technology Limited(PUSR)의 USR-W610 산업용 IoT 게이트웨이에서 인증 우회 및 서비스 거부(DoS)를 포함한 다수의 심각한 취약점이 발견되었습니다. 이 장치는 전 세계 제조 현장의 핵심 인프라에 널리 배포되어 있으나, 현재 제조사로부터 단종(EOL)된 상태로 공식적인 보안 패치 계획이 없어 산업 제어 시스템(ICS) 환경에 매우 심각한 보안 위협을 제공합니다. [Threat Analysis] 핵심 취약점인 CVE-2026-25715는 관리자 암호를 공백으로 설정할 수 있게 하여 웹 및 Telnet 인터페이스의 인증을 사실상 무력화하며, 공격자가 장치의 모든 제어권을 획득하게 합니다. 추가로 HTTP 기본 인증 사용에 따른 평문 전송(CVE-2026-24455)과 Wi-Fi 관리 프레임 보호(MFP) 부재로 인한 무선 연결 강제 해제 공격(CVE-2026-26048)이 가능하여 기밀성과 가용성을 동시에 심각하게 저해합니다. [Impact Assessment] 공격자가 이 취약점들을 악용할 경우 산업용 네트워크 내부로 침투하여 생산 공정을 방해하거나 민감한 데이터를 탈취할 수 있습니다. 특히 전 세계 제조 부문에 광범위하게 배포된 특성상 공급망 공격의 기점으로 활용될 가능성이 크며, 패치 부재로 인해 노출된 장치는 지속적인 위험 요소가 됩니다. [Recommendations] 사용자는 즉시 해당 장치를 외부 인터넷으로부터 격리하고 강력한 방화벽 정책을 통해 산업 제어망을 비즈니스 네트워크와 분리해야 합니다. 패치가 불가능한 상황이므로 보안 기능이 강화된 최신 장비로의 교체를 검토해야 하며, 불가피한 유지 시에는 VPN 사용 및 관리 프레임 보호가 가능한 무선 환경 구축이 필수적입니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: ICS/OT Security, Authentication Bypass, End-of-Life (EOL), IoT Vulnerability, CISA Advisory

## Analysis
[Executive Overview] Jinan USR IOT Technology Limited(PUSR)의 USR-W610 산업용 IoT 게이트웨이에서 인증 우회 및 서비스 거부(DoS)를 포함한 다수의 심각한 취약점이 발견되었습니다. 이 장치는 전 세계 제조 현장의 핵심 인프라에 널리 배포되어 있으나, 현재 제조사로부터 단종(EOL)된 상태로 공식적인 보안 패치 계획이 없어 산업 제어 시스템(ICS) 환경에 매우 심각한 보안 위협을 제공합니다. [Threat Analysis] 핵심 취약점인 CVE-2026-25715는 관리자 암호를 공백으로 설정할 수 있게 하여 웹 및 Telnet 인터페이스의 인증을 사실상 무력화하며, 공격자가 장치의 모든 제어권을 획득하게 합니다. 추가로 HTTP 기본 인증 사용에 따른 평문 전송(CVE-2026-24455)과 Wi-Fi 관리 프레임 보호(MFP) 부재로 인한 무선 연결 강제 해제 공격(CVE-2026-26048)이 가능하여 기밀성과 가용성을 동시에 심각하게 저해합니다. [Impact Assessment] 공격자가 이 취약점들을 악용할 경우 산업용 네트워크 내부로 침투하여 생산 공정을 방해하거나 민감한 데이터를 탈취할 수 있습니다. 특히 전 세계 제조 부문에 광범위하게 배포된 특성상 공급망 공격의 기점으로 활용될 가능성이 크며, 패치 부재로 인해 노출된 장치는 지속적인 위험 요소가 됩니다. [Recommendations] 사용자는 즉시 해당 장치를 외부 인터넷으로부터 격리하고 강력한 방화벽 정책을 통해 산업 제어망을 비즈니스 네트워크와 분리해야 합니다. 패치가 불가능한 상황이므로 보안 기능이 강화된 최신 장비로의 교체를 검토해야 하며, 불가피한 유지 시에는 VPN 사용 및 관리 프레임 보호가 가능한 무선 환경 구축이 필수적입니다.


## References
1. CISA, ICSA-26-050-03: Jinan USR IOT Technology Limited (PUSR) USR-W610, 2026
2. CVE-2026-25715
3. MITRE ATT&CK: T0812 (Default Directional Flow)
4. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
5. Abhishek Pandey et al., Vulnerability Research on Industrial IoT Gateways, Payatu Security Consulting, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-03)
    