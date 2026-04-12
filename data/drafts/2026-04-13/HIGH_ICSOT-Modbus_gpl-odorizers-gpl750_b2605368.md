
# GPL Odorizers GPL750

> [Executive Overview] CISA는 GPL Odorizers GPL750 모델에서 발견된 심각한 보안 취약점(ICSA-26-099-02)에 대해 경고했습니다. 가스 라인에 취치제(Odorant)를 주입하는 이 장비는 에너지 및 중요 제조 분야의 핵심 자산입니다. 인증 결여로 인한 이번 취약점은 공공 안전과 직결되는 물리적 위험을 내포하고 있습니다. [Threat Analysis] CVE-2026-4436은 주요 기능에 대한 인증 누락(CWE-306) 문제로, 공격자가 Modbus 패킷을 전송하여 장치의 레지스터 값을 임의로 조작할 수 있게 합니다. 이는 Modbus 프로토콜의 보안 미비점을 악용한 것으로, 낮은 권한의 원격 공격자도 주입 로직을 변경할 수 있습니다. [Impact Assessment] 공격자가 취치제 주입량을 과다하게 조작할 경우 가스 누출 오인으로 인한 사회적 혼란과 비용이 발생하며, 반대로 주입량을 줄일 경우 실제 가스 누출 시 감지가 불가능해져 대형 폭발 사고로 이어질 수 있습니다. 이는 전 세계 가스 공급망 인프라에 대한 직접적인 물리적 위협이 됩니다. [Recommendations] 관리자는 즉시 GPL750 소프트웨어와 Horner Automation 컨트롤러 펌웨어(v15.76/v17.30 이상)를 업데이트해야 합니다. 또한, ICS 네트워크를 공용 인터넷에서 완전히 분리하고 방화벽과 VPN을 활용한 심층 방어(Defense-in-Depth) 전략을 구축하여 비정상적인 Modbus 트래픽을 모니터링해야 합니다.

**Severity**: HIGH (8.6/10)
**Tags**: ICS/OT, Modbus, CVE-2026-4436, Critical Infrastructure, CWE-306

## Analysis
[Executive Overview] CISA는 GPL Odorizers GPL750 모델에서 발견된 심각한 보안 취약점(ICSA-26-099-02)에 대해 경고했습니다. 가스 라인에 취치제(Odorant)를 주입하는 이 장비는 에너지 및 중요 제조 분야의 핵심 자산입니다. 인증 결여로 인한 이번 취약점은 공공 안전과 직결되는 물리적 위험을 내포하고 있습니다. [Threat Analysis] CVE-2026-4436은 주요 기능에 대한 인증 누락(CWE-306) 문제로, 공격자가 Modbus 패킷을 전송하여 장치의 레지스터 값을 임의로 조작할 수 있게 합니다. 이는 Modbus 프로토콜의 보안 미비점을 악용한 것으로, 낮은 권한의 원격 공격자도 주입 로직을 변경할 수 있습니다. [Impact Assessment] 공격자가 취치제 주입량을 과다하게 조작할 경우 가스 누출 오인으로 인한 사회적 혼란과 비용이 발생하며, 반대로 주입량을 줄일 경우 실제 가스 누출 시 감지가 불가능해져 대형 폭발 사고로 이어질 수 있습니다. 이는 전 세계 가스 공급망 인프라에 대한 직접적인 물리적 위협이 됩니다. [Recommendations] 관리자는 즉시 GPL750 소프트웨어와 Horner Automation 컨트롤러 펌웨어(v15.76/v17.30 이상)를 업데이트해야 합니다. 또한, ICS 네트워크를 공용 인터넷에서 완전히 분리하고 방화벽과 VPN을 활용한 심층 방어(Defense-in-Depth) 전략을 구축하여 비정상적인 Modbus 트래픽을 모니터링해야 합니다.


## References
1. CISA, ICSA-26-099-02: GPL Odorizers GPL750, CISA ICS Advisory, 2026
2. CVE-2026-4436
3. MITRE ATT&CK for ICS: T0831 (Data Modification)
4. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82 Rev. 2, 2015
5. CWE-306: Missing Authentication for Critical Function
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-099-02)
    