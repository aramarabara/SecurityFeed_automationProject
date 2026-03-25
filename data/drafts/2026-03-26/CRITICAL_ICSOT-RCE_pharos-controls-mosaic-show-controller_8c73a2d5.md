
# Pharos Controls Mosaic Show Controller

> [Executive Overview] Pharos Controls의 Mosaic Show Controller에서 발견된 CVE-2026-2417 취약점은 전 세계 상업 시설에서 널리 사용되는 조명 및 쇼 제어 시스템의 보안을 심각하게 위협하는 요소입니다. 공격자가 인증 없이 장치에 대한 루트 권한을 획득할 수 있다는 점에서 이 취약점은 물리적 기반 시설의 통제권 상실로 이어질 수 있는 중대한 사안입니다. [Threat Analysis] 해당 결함은 CWE-306(중요 기능에 대한 인증 누락)으로 정의되며, 펌웨어 2.15.3 버전에 존재합니다. 공격자는 네트워크를 통해 낮은 복잡도로 인증 절차를 우회하여 임의의 명령을 실행할 수 있습니다. 특히 권한 상승이 필요 없는 원격 코드 실행(RCE)이 가능하여, 공격자가 시스템 내에서 최고 관리자(root) 권한으로 동작할 수 있다는 점이 기술적 핵심입니다. [Impact Assessment] 영향 범위는 전 세계 상업 시설 및 엔터테인먼트 산업을 포함하며, 공격 성공 시 시설 관리 시스템의 완전한 마비, 하드웨어 오작동 유도, 그리고 내부 네트워크 침투를 위한 거점(Pivot)으로 활용될 위험이 큽니다. 이는 물리적 자산의 손실뿐만 아니라 공공 장소의 안전 사고로도 직결될 수 있습니다. [Recommendations] 최우선 조치 사항은 제조사가 배포한 펌웨어 버전 2.16 이상으로의 즉각적인 업데이트입니다. 또한 Defense-in-Depth 원칙에 따라 제어 장치를 인터넷으로부터 격리하고, 불가피한 원격 접속 시 MFA가 적용된 VPN을 사용해야 합니다. 네트워크 세분화를 통해 OT 자산과 비즈니스 네트워크 간의 트래픽을 엄격히 제한할 것을 강력히 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: ICS/OT, RCE, CWE-306, PharosControls, FirmwarePatch

## Analysis
[Executive Overview] Pharos Controls의 Mosaic Show Controller에서 발견된 CVE-2026-2417 취약점은 전 세계 상업 시설에서 널리 사용되는 조명 및 쇼 제어 시스템의 보안을 심각하게 위협하는 요소입니다. 공격자가 인증 없이 장치에 대한 루트 권한을 획득할 수 있다는 점에서 이 취약점은 물리적 기반 시설의 통제권 상실로 이어질 수 있는 중대한 사안입니다. [Threat Analysis] 해당 결함은 CWE-306(중요 기능에 대한 인증 누락)으로 정의되며, 펌웨어 2.15.3 버전에 존재합니다. 공격자는 네트워크를 통해 낮은 복잡도로 인증 절차를 우회하여 임의의 명령을 실행할 수 있습니다. 특히 권한 상승이 필요 없는 원격 코드 실행(RCE)이 가능하여, 공격자가 시스템 내에서 최고 관리자(root) 권한으로 동작할 수 있다는 점이 기술적 핵심입니다. [Impact Assessment] 영향 범위는 전 세계 상업 시설 및 엔터테인먼트 산업을 포함하며, 공격 성공 시 시설 관리 시스템의 완전한 마비, 하드웨어 오작동 유도, 그리고 내부 네트워크 침투를 위한 거점(Pivot)으로 활용될 위험이 큽니다. 이는 물리적 자산의 손실뿐만 아니라 공공 장소의 안전 사고로도 직결될 수 있습니다. [Recommendations] 최우선 조치 사항은 제조사가 배포한 펌웨어 버전 2.16 이상으로의 즉각적인 업데이트입니다. 또한 Defense-in-Depth 원칙에 따라 제어 장치를 인터넷으로부터 격리하고, 불가피한 원격 접속 시 MFA가 적용된 VPN을 사용해야 합니다. 네트워크 세분화를 통해 OT 자산과 비즈니스 네트워크 간의 트래픽을 엄격히 제한할 것을 강력히 권고합니다.


## References
1. CISA, ICSA-26-083-01: Pharos Controls Mosaic Show Controller, 2026
2. CVE-2026-2417
3. MITRE ATT&CK: T0812 - Default Credentials and Missing Authentication in ICS, 2023
4. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82 Rev. 2, 2015
5. MITRE CWE-306: Missing Authentication for Critical Function
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-083-01)
    