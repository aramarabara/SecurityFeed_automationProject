
# Jinan USR IOT Technology Limited (PUSR) USR-W610

> Jinan USR IOT Technology Limited(PUSR)의 USR-W610 산업용 IoT 게이트웨이에서 심각한 보안 취약점 4종이 발견되었습니다. 이번 취약점은 관리자 인증 우회, 데이터 평문 전송, 자격 증명 노출, 그리고 서비스 거부(DoS) 공격을 포함하고 있으며, 특히 CVSS 9.8의 치명적 점수를 기록한 인증 결함이 포함되어 있습니다. 해당 장비는 전 세계 제조 시설의 시리얼-이더넷 통신 변환에 널리 사용되고 있어, 공격 성공 시 산업 공정의 제어권을 완전히 상실할 위험이 큽니다.

기술적 분석 결과, CVE-2026-25715 취약점을 통해 관리자 비밀번호를 공백으로 설정하여 모든 인증 절차를 무력화할 수 있으며, 암호화되지 않은 HTTP 통신(CVE-2026-24455)과 UI 내 비밀번호 평문 노출(CVE-2026-26049)은 네트워크 인접 공격자에게 자격 증명을 손쉽게 제공하는 결과를 초래합니다. 또한 Wi-Fi 관리 프레임 보호(MFP) 부재로 인한 인증 해제 공격(CVE-2026-26048)은 무선 연결을 강제로 차단하여 시스템의 가용성을 심각하게 저해할 수 있습니다.

이 위협의 가장 심각한 점은 제조사가 해당 제품의 수명 종료(EOL)를 선언하여 어떠한 보안 패치도 계획하고 있지 않다는 사실입니다. 이는 기존에 배치된 장비들이 영구적인 위협 노출 상태에 있음을 의미하며, 공격자가 이를 교두보로 삼아 내부 산업 제어 네트워크(ICS)로 침투할 경우 생산 라인 중단이나 물리적 장비 손상과 같은 막대한 경제적 피해를 입힐 수 있습니다.

따라서 보안 담당자는 해당 장비를 즉시 최신 보안 표준을 준수하는 신규 모델로 교체할 것을 강력히 권고합니다. 즉각적인 교체가 어려운 경우, 장비를 외부 인터넷으로부터 완전히 격리(Air-gapped)하고, VPN을 통한 엄격한 원격 접속 제어 및 방화벽 기반의 마이크로 세그멘테이션을 적용하여 내부 이동(Lateral Movement)을 차단하는 방어 체계를 구축해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: IoT Security, ICS/SCADA, Authentication Bypass, End-of-Life, Denial of Service

## Analysis
Jinan USR IOT Technology Limited(PUSR)의 USR-W610 산업용 IoT 게이트웨이에서 심각한 보안 취약점 4종이 발견되었습니다. 이번 취약점은 관리자 인증 우회, 데이터 평문 전송, 자격 증명 노출, 그리고 서비스 거부(DoS) 공격을 포함하고 있으며, 특히 CVSS 9.8의 치명적 점수를 기록한 인증 결함이 포함되어 있습니다. 해당 장비는 전 세계 제조 시설의 시리얼-이더넷 통신 변환에 널리 사용되고 있어, 공격 성공 시 산업 공정의 제어권을 완전히 상실할 위험이 큽니다.

기술적 분석 결과, CVE-2026-25715 취약점을 통해 관리자 비밀번호를 공백으로 설정하여 모든 인증 절차를 무력화할 수 있으며, 암호화되지 않은 HTTP 통신(CVE-2026-24455)과 UI 내 비밀번호 평문 노출(CVE-2026-26049)은 네트워크 인접 공격자에게 자격 증명을 손쉽게 제공하는 결과를 초래합니다. 또한 Wi-Fi 관리 프레임 보호(MFP) 부재로 인한 인증 해제 공격(CVE-2026-26048)은 무선 연결을 강제로 차단하여 시스템의 가용성을 심각하게 저해할 수 있습니다.

이 위협의 가장 심각한 점은 제조사가 해당 제품의 수명 종료(EOL)를 선언하여 어떠한 보안 패치도 계획하고 있지 않다는 사실입니다. 이는 기존에 배치된 장비들이 영구적인 위협 노출 상태에 있음을 의미하며, 공격자가 이를 교두보로 삼아 내부 산업 제어 네트워크(ICS)로 침투할 경우 생산 라인 중단이나 물리적 장비 손상과 같은 막대한 경제적 피해를 입힐 수 있습니다.

따라서 보안 담당자는 해당 장비를 즉시 최신 보안 표준을 준수하는 신규 모델로 교체할 것을 강력히 권고합니다. 즉각적인 교체가 어려운 경우, 장비를 외부 인터넷으로부터 완전히 격리(Air-gapped)하고, VPN을 통한 엄격한 원격 접속 제어 및 방화벽 기반의 마이크로 세그멘테이션을 적용하여 내부 이동(Lateral Movement)을 차단하는 방어 체계를 구축해야 합니다.


## References
1. CISA Advisory ICSA-26-050-03: Jinan USR IOT Technology Limited (PUSR) USR-W610, 2026
2. CVE-2026-25715
3. MITRE ATT&CK: T1552 - Unsecured Credentials
4. S. S. Hussain et al., Security of Industrial Internet of Things: Vulnerabilities, Attacks, and Defenses, IEEE Communications Surveys & Tutorials, 2021
5. MITRE ATT&CK: T0806 - ICS: Loss of Availability
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-03)
    