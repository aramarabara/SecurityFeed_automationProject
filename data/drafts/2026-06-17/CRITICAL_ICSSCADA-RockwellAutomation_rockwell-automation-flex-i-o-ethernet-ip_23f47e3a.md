
# Rockwell Automation FLEX I/O EtherNet/IP Adapters

> [Executive Overview] Rockwell Automation의 FLEX I/O EtherNet/IP 어댑터(1794-AENTR 및 1794-AENTRXT)에서 발견된 두 개의 보안 취약점은 전 세계 임계 제조업(Critical Manufacturing) 분야에 심각한 위협을 초래할 수 있습니다. 특히 이 어댑터들은 산업 제어 시스템(ICS) 환경 내에서 PLC와 입출력 장치 간의 통신을 매개하는 핵심 구성 요소로, 공격 시 물리적 공정 중단이나 제어권 상실로 이어질 수 있습니다.

[Threat Analysis] 분석 결과, CVE-2026-0647은 임베디드 웹 서버의 인증 메커니즘 부재(CWE-306)를 악용하여 특수하게 조작된 HTTP GET 요청만으로 관리자 비밀번호를 변경할 수 있게 합니다. 이는 인증되지 않은 외부 공격자가 장치의 제어권을 완전히 장악할 수 있음을 의미합니다. 또한 CVE-2026-0646은 CIP(Common Industrial Protocol) 요청 처리 중 발생하는 메모리 관리 오류(CWE-401)를 통해 서비스 거부(DoS) 공격을 가능하게 하며, 장치가 폴트(Fault) 상태에 빠질 경우 수동 리셋이 필요합니다.

[Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 장치에 대한 무단 액세스 및 계정 탈취를 달성할 수 있으며, 이는 I/O 모듈과의 연결 손실로 직결됩니다. 이는 제조 공정의 가용성 저하뿐만 아니라 가동 중단에 따른 막대한 경제적 손실, 더 나아가 하위 제어 루프의 이상 동작으로 인한 안전 사고 위험을 내포하고 있습니다.

[Recommendations] 가장 효과적인 대응책은 영향을 받는 어댑터의 펌웨어를 V2.013 이상으로 즉시 업데이트하는 것입니다. 기술적으로 업데이트가 불가능한 환경에서는 제어 시스템 네트워크를 비즈니스 네트워크와 물리적/논리적으로 격리(Purdue 모델 준수)하고, 웹 인터페이스에 대한 불필요한 노출을 차단하며, 원격 접속 시 강력한 인증이 포함된 VPN을 사용해야 합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: ICS/SCADA, Rockwell Automation, CVE-2026-0647, Account Takeover, Denial of Service

## Analysis
[Executive Overview] Rockwell Automation의 FLEX I/O EtherNet/IP 어댑터(1794-AENTR 및 1794-AENTRXT)에서 발견된 두 개의 보안 취약점은 전 세계 임계 제조업(Critical Manufacturing) 분야에 심각한 위협을 초래할 수 있습니다. 특히 이 어댑터들은 산업 제어 시스템(ICS) 환경 내에서 PLC와 입출력 장치 간의 통신을 매개하는 핵심 구성 요소로, 공격 시 물리적 공정 중단이나 제어권 상실로 이어질 수 있습니다.

[Threat Analysis] 분석 결과, CVE-2026-0647은 임베디드 웹 서버의 인증 메커니즘 부재(CWE-306)를 악용하여 특수하게 조작된 HTTP GET 요청만으로 관리자 비밀번호를 변경할 수 있게 합니다. 이는 인증되지 않은 외부 공격자가 장치의 제어권을 완전히 장악할 수 있음을 의미합니다. 또한 CVE-2026-0646은 CIP(Common Industrial Protocol) 요청 처리 중 발생하는 메모리 관리 오류(CWE-401)를 통해 서비스 거부(DoS) 공격을 가능하게 하며, 장치가 폴트(Fault) 상태에 빠질 경우 수동 리셋이 필요합니다.

[Impact Assessment] 취약점이 성공적으로 악용될 경우, 공격자는 장치에 대한 무단 액세스 및 계정 탈취를 달성할 수 있으며, 이는 I/O 모듈과의 연결 손실로 직결됩니다. 이는 제조 공정의 가용성 저하뿐만 아니라 가동 중단에 따른 막대한 경제적 손실, 더 나아가 하위 제어 루프의 이상 동작으로 인한 안전 사고 위험을 내포하고 있습니다.

[Recommendations] 가장 효과적인 대응책은 영향을 받는 어댑터의 펌웨어를 V2.013 이상으로 즉시 업데이트하는 것입니다. 기술적으로 업데이트가 불가능한 환경에서는 제어 시스템 네트워크를 비즈니스 네트워크와 물리적/논리적으로 격리(Purdue 모델 준수)하고, 웹 인터페이스에 대한 불필요한 노출을 차단하며, 원격 접속 시 강력한 인증이 포함된 VPN을 사용해야 합니다.


## References
1. CISA, ICSA-26-167-05: Rockwell Automation FLEX I/O EtherNet/IP Adapters, 2026
2. CVE-2026-0646
3. CVE-2026-0647
4. MITRE ATT&CK: T0806 (Exploitation of Remote Services)
5. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-167-05)
    