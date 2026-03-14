
# Siemens RUGGEDCOM APE1808 Devices

> [Executive Overview] 지멘스(Siemens)의 산업용 컴퓨팅 플랫폼인 RUGGEDCOM APE1808 장치에서 Fortinet FortiOS와 관련된 다수의 심각한 보안 취약점이 발견되었습니다. 해당 장치는 에너지, 교통, 제조 등 국가 핵심 기반 시설의 엣지 컴퓨팅 및 네트워크 보안을 위해 전 세계적으로 사용되는 주요 OT(Operational Technology) 자산입니다. 이번 취약점은 내부적으로 탑재된 FortiOS 보안 스택의 결함에서 기인하며, 인증되지 않은 공격자가 제어 시스템에 접근할 수 있는 심각한 위험을 내포하고 있습니다. [Threat Analysis] 분석 결과, 가장 치명적인 위협은 CVE-2026-24858(CVSS 9.8)로, FortiCloud SSO 인증이 활성화된 환경에서 공격자가 다른 계정의 등록된 장치를 통해 무단으로 로그인할 수 있는 인증 우회 취약점입니다. 이와 함께 HTTP 요청 스머글링(CVE-2025-55018, CVE-2025-62439)을 통한 방화벽 정책 우회 공격과, 외부 제어 포맷 스트링(CVE-2025-64157)을 이용한 임의 코드 실행 위험이 복합적으로 존재합니다. [Impact Assessment] 이러한 취약점이 악용될 경우, 공격자는 산업용 네트워크의 경계 보안을 무너뜨리고 제어망 내부로 침투하여 물리적 공정 조작이나 서비스 거부(DoS) 상태를 유발할 수 있습니다. 특히 핵심 제조 및 에너지 부문의 설비 가동 중단은 막대한 경제적 손실과 공공 안전에 대한 위협으로 직결될 수 있어 그 파급력이 매우 높습니다. [Recommendations] 지멘스와 CISA는 즉각적인 대응을 권고하고 있습니다. 관리자는 RUGGEDCOM APE1808 장치를 최신 펌웨어로 업데이트하고, 기저에 있는 Fortigate NGFW를 V7.4.11 이상의 버전으로 패치해야 합니다. 또한, 제어 장치를 공용 인터넷으로부터 격리하고, 비즈니스 네트워크와 OT 네트워크 간에 엄격한 방화벽 규칙을 적용하는 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: ICS/OT Security, Authentication Bypass, HTTP Request Smuggling, Siemens RUGGEDCOM, Critical Infrastructure

## Analysis
[Executive Overview] 지멘스(Siemens)의 산업용 컴퓨팅 플랫폼인 RUGGEDCOM APE1808 장치에서 Fortinet FortiOS와 관련된 다수의 심각한 보안 취약점이 발견되었습니다. 해당 장치는 에너지, 교통, 제조 등 국가 핵심 기반 시설의 엣지 컴퓨팅 및 네트워크 보안을 위해 전 세계적으로 사용되는 주요 OT(Operational Technology) 자산입니다. 이번 취약점은 내부적으로 탑재된 FortiOS 보안 스택의 결함에서 기인하며, 인증되지 않은 공격자가 제어 시스템에 접근할 수 있는 심각한 위험을 내포하고 있습니다. [Threat Analysis] 분석 결과, 가장 치명적인 위협은 CVE-2026-24858(CVSS 9.8)로, FortiCloud SSO 인증이 활성화된 환경에서 공격자가 다른 계정의 등록된 장치를 통해 무단으로 로그인할 수 있는 인증 우회 취약점입니다. 이와 함께 HTTP 요청 스머글링(CVE-2025-55018, CVE-2025-62439)을 통한 방화벽 정책 우회 공격과, 외부 제어 포맷 스트링(CVE-2025-64157)을 이용한 임의 코드 실행 위험이 복합적으로 존재합니다. [Impact Assessment] 이러한 취약점이 악용될 경우, 공격자는 산업용 네트워크의 경계 보안을 무너뜨리고 제어망 내부로 침투하여 물리적 공정 조작이나 서비스 거부(DoS) 상태를 유발할 수 있습니다. 특히 핵심 제조 및 에너지 부문의 설비 가동 중단은 막대한 경제적 손실과 공공 안전에 대한 위협으로 직결될 수 있어 그 파급력이 매우 높습니다. [Recommendations] 지멘스와 CISA는 즉각적인 대응을 권고하고 있습니다. 관리자는 RUGGEDCOM APE1808 장치를 최신 펌웨어로 업데이트하고, 기저에 있는 Fortigate NGFW를 V7.4.11 이상의 버전으로 패치해야 합니다. 또한, 제어 장치를 공용 인터넷으로부터 격리하고, 비즈니스 네트워크와 OT 네트워크 간에 엄격한 방화벽 규칙을 적용하는 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-071-02: Siemens RUGGEDCOM APE1808 Devices, 2026
2. Siemens ProductCERT, SSA-975644: Vulnerabilities in FortiOS affecting RUGGEDCOM APE1808, 2026
3. CVE-2026-24858: Authentication Bypass Using an Alternate Path or Channel
4. MITRE ATT&CK, T1190: Exploit Public-Facing Application, 2024
5. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-071-02)
    