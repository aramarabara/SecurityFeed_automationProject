
# Mitsubishi Electric MELSEC iQ-R Series

> [Executive Overview] Mitsubishi Electric의 MELSEC iQ-R 시리즈 PLC에서 발견된 CVE-2025-15080 취약점은 전 세계 핵심 제조 인프라에 매우 심각한 보안 위협을 제기합니다. 이 취약점은 CVSS 9.4의 치명적인(CRITICAL) 점수를 기록하였으며, 공격자가 원격에서 산업 제어 시스템의 무결성과 가용성을 완전히 훼손할 수 있는 잠재력을 가지고 있습니다. [Threat Analysis] 본 취약점은 Mitsubishi 고유 프로토콜 및 SLMP(Seamless Message Protocol) 통신 시 입력 데이터의 수량 검증이 부적절하게 이루어지는 CWE-1284 결함에 기인합니다. 공격자는 정교하게 조작된 명령 패킷을 네트워크를 통해 전송함으로써, 별도의 인증 권한 없이도 제어 프로그램의 일부를 판독하거나 장치 데이터를 변조하고, 서비스 거부(DoS) 상태를 유발할 수 있습니다. [Impact Assessment] 취약점이 악용될 경우 산업 현장의 생산 공정 중단은 물론, 잘못된 제어 명령 주입을 통한 물리적 설비 파손이나 안전 사고 등 심각한 2차 피해가 발생할 수 있습니다. 특히 글로벌 제조 기업들의 표준 PLC로 널리 사용되는 제품군인 만큼, 공급망 전반에 걸친 생산성 손실과 경제적 타격이 예상됩니다. [Recommendations] 최우선적으로 영향을 받는 모든 제품의 펌웨어를 버전 49 이상으로 업데이트할 것을 권고합니다. 즉각적인 업데이트가 어려운 환경에서는 산업용 방화벽 및 VPN을 활용해 신뢰할 수 없는 네트워크로부터의 접근을 차단하고, 장치 고유의 IP 필터링 기능을 활성화하여 허가된 호스트만 통신할 수 있도록 심층 방어 전략을 적용해야 합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: ICS/OT Security, Mitsubishi Electric, PLC Vulnerability, CVE-2025-15080

## Analysis
[Executive Overview] Mitsubishi Electric의 MELSEC iQ-R 시리즈 PLC에서 발견된 CVE-2025-15080 취약점은 전 세계 핵심 제조 인프라에 매우 심각한 보안 위협을 제기합니다. 이 취약점은 CVSS 9.4의 치명적인(CRITICAL) 점수를 기록하였으며, 공격자가 원격에서 산업 제어 시스템의 무결성과 가용성을 완전히 훼손할 수 있는 잠재력을 가지고 있습니다. [Threat Analysis] 본 취약점은 Mitsubishi 고유 프로토콜 및 SLMP(Seamless Message Protocol) 통신 시 입력 데이터의 수량 검증이 부적절하게 이루어지는 CWE-1284 결함에 기인합니다. 공격자는 정교하게 조작된 명령 패킷을 네트워크를 통해 전송함으로써, 별도의 인증 권한 없이도 제어 프로그램의 일부를 판독하거나 장치 데이터를 변조하고, 서비스 거부(DoS) 상태를 유발할 수 있습니다. [Impact Assessment] 취약점이 악용될 경우 산업 현장의 생산 공정 중단은 물론, 잘못된 제어 명령 주입을 통한 물리적 설비 파손이나 안전 사고 등 심각한 2차 피해가 발생할 수 있습니다. 특히 글로벌 제조 기업들의 표준 PLC로 널리 사용되는 제품군인 만큼, 공급망 전반에 걸친 생산성 손실과 경제적 타격이 예상됩니다. [Recommendations] 최우선적으로 영향을 받는 모든 제품의 펌웨어를 버전 49 이상으로 업데이트할 것을 권고합니다. 즉각적인 업데이트가 어려운 환경에서는 산업용 방화벽 및 VPN을 활용해 신뢰할 수 없는 네트워크로부터의 접근을 차단하고, 장치 고유의 IP 필터링 기능을 활성화하여 허가된 호스트만 통신할 수 있도록 심층 방어 전략을 적용해야 합니다.


## References
1. CVE-2025-15080
2. CISA, ICSA-26-036-02: Mitsubishi Electric MELSEC iQ-R Series, 2026
3. MITRE ATT&CK: T0828 (Loss of Control)
4. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST SP 800-82r3, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-036-02)
    