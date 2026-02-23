
# Jinan USR IOT Technology Limited (PUSR) USR-W610

> [Executive Overview] 최근 Jinan USR IOT Technology Limited (PUSR)의 산업용 IoT 게이트웨이 모델인 USR-W610에서 치명적인 보안 취약점 4종이 발견되었습니다. 해당 장치는 전 세계 제조 시설에서 광범위하게 사용되고 있으나, 제조사가 제품 수명 종료(End-of-Life, EoL)를 선언하며 보안 패치 제공이 불가능함을 명시함에 따라 심각한 영구적 보안 위협이 발생했습니다. 특히 CVSS 점수 9.8의 취약점을 포함하고 있어, 공격자가 별도의 인증 과정 없이 관리 권한을 획득할 가능성이 매우 높습니다. [Threat Analysis] 발견된 취약점은 인증 우회, 데이터 평문 전송, 서비스 거부(DoS) 등을 포함합니다. CVE-2026-25715는 관리자 계정을 공백으로 설정할 수 있어 인증 체계가 완전히 무력화될 수 있는 위험이 있으며, CVE-2026-24455는 HTTP 통신 시 민감 정보를 암호화하지 않아 스니핑에 취약합니다. 또한, 관리 웹 인터페이스에서 비밀번호를 평문으로 노출하거나(CVE-2026-26049), 관리 프레임 보호 부재로 인한 Wi-Fi 연결 해제 공격(CVE-2026-26048)이 가능하여 가용성과 기밀성을 모두 위협합니다. [Impact Assessment] 해당 기기는 중요 제조 인프라 분야에서 데이터 전송의 핵심적인 역할을 수행하므로, 공격 성공 시 공정 제어 시스템에 대한 무단 접근 및 조작이 가능해집니다. 이는 생산 라인 중단과 같은 물리적 손실뿐만 아니라 관리자 자격 증명 탈취를 통한 기업 내부 망으로의 측면 이동(Lateral Movement) 경로로 악용될 수 있습니다. 특히 제조사가 패치 미제공을 선언했기에 기존 사용 기업들은 지속적인 위험에 노출된 상태입니다. [Recommendations] 가장 시급한 조치는 해당 EoL 모델을 최신 보안 규격이 적용된 대체 장비로 교체하는 것입니다. 즉각적인 교체가 어려운 경우, 장치를 인터넷으로부터 완전히 격리하고 비즈니스 네트워크와 분리된 방화벽 뒤에 배치해야 합니다. 또한, 원격 접속이 필요할 시에는 최신 버전의 VPN을 사용하고, 모든 제어 시스템 프레임워크에 대해 심층 방어(Defense-in-Depth) 전략을 수립하여 외부 노출을 최소화할 것을 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: IIoT Security, End-of-Life (EoL), Authentication Bypass, Critical Infrastructure, ICS/SCADA

## Analysis
[Executive Overview] 최근 Jinan USR IOT Technology Limited (PUSR)의 산업용 IoT 게이트웨이 모델인 USR-W610에서 치명적인 보안 취약점 4종이 발견되었습니다. 해당 장치는 전 세계 제조 시설에서 광범위하게 사용되고 있으나, 제조사가 제품 수명 종료(End-of-Life, EoL)를 선언하며 보안 패치 제공이 불가능함을 명시함에 따라 심각한 영구적 보안 위협이 발생했습니다. 특히 CVSS 점수 9.8의 취약점을 포함하고 있어, 공격자가 별도의 인증 과정 없이 관리 권한을 획득할 가능성이 매우 높습니다. [Threat Analysis] 발견된 취약점은 인증 우회, 데이터 평문 전송, 서비스 거부(DoS) 등을 포함합니다. CVE-2026-25715는 관리자 계정을 공백으로 설정할 수 있어 인증 체계가 완전히 무력화될 수 있는 위험이 있으며, CVE-2026-24455는 HTTP 통신 시 민감 정보를 암호화하지 않아 스니핑에 취약합니다. 또한, 관리 웹 인터페이스에서 비밀번호를 평문으로 노출하거나(CVE-2026-26049), 관리 프레임 보호 부재로 인한 Wi-Fi 연결 해제 공격(CVE-2026-26048)이 가능하여 가용성과 기밀성을 모두 위협합니다. [Impact Assessment] 해당 기기는 중요 제조 인프라 분야에서 데이터 전송의 핵심적인 역할을 수행하므로, 공격 성공 시 공정 제어 시스템에 대한 무단 접근 및 조작이 가능해집니다. 이는 생산 라인 중단과 같은 물리적 손실뿐만 아니라 관리자 자격 증명 탈취를 통한 기업 내부 망으로의 측면 이동(Lateral Movement) 경로로 악용될 수 있습니다. 특히 제조사가 패치 미제공을 선언했기에 기존 사용 기업들은 지속적인 위험에 노출된 상태입니다. [Recommendations] 가장 시급한 조치는 해당 EoL 모델을 최신 보안 규격이 적용된 대체 장비로 교체하는 것입니다. 즉각적인 교체가 어려운 경우, 장치를 인터넷으로부터 완전히 격리하고 비즈니스 네트워크와 분리된 방화벽 뒤에 배치해야 합니다. 또한, 원격 접속이 필요할 시에는 최신 버전의 VPN을 사용하고, 모든 제어 시스템 프레임워크에 대해 심층 방어(Defense-in-Depth) 전략을 수립하여 외부 노출을 최소화할 것을 권고합니다.


## References
1. CISA Advisory ICSA-26-050-03: Jinan USR IOT Technology Limited (PUSR) USR-W610, 2026
2. CVE-2026-25715
3. MITRE ATT&CK: T0812 (Default Credentials in ICS)
4. NIST, Guide to Industrial Control Systems (ICS) Security (Special Publication 800-82), 2023
5. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-050-03)
    