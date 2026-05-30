
# Jinan USR IOT Technology Limited (PUSR) USR-W610 RS232/485 to Wi-Fi/Ethernet Converter

> [Executive Overview] CISA는 중국 Jinan USR IOT Technology(PUSR)사의 USR-W610 산업용 컨버터에서 발견된 치명적인 보안 취약점(CVE-2026-7786)에 대해 경고했습니다. 이 장치는 RS232/485 직렬 통신을 Wi-Fi 또는 이더넷으로 변환하는 핵심적인 산업 IoT(IIoT) 구성 요소로, 전 세계 제조 및 중요 인프라 분야에 널리 배포되어 있어 이번 취약점의 파급력이 매우 큽니다.

[Threat Analysis] 해당 취약점은 CWE-798(하드코딩된 자격 증명 사용)에 해당하며, 펌웨어 내에 평문으로 관리자 계정 정보가 포함되어 있는 것이 핵심입니다. 공격자는 펌웨어 이미지를 추출 및 분석하여 이 정보를 손쉽게 획득할 수 있으며, 이를 통해 장치의 네트워크 서비스에 관리자 권한으로 무단 인증할 수 있습니다. 특히 제조사가 CISA의 보안 조정 요청에 응답하지 않아 공식 패치가 부재한 상태에서 위협이 지속되고 있습니다.

[Impact Assessment] 공격자가 관리자 권한을 획득할 경우, 산업 현장의 제어 시스템 간의 통신을 가로채거나 변조할 수 있습니다. 이는 생산 공정 중단, 오작동 유발, 혹은 내부 망으로 침투하기 위한 거점으로 악용될 수 있어 치명적인 물리적 피해나 정보 유출로 이어질 수 있습니다. 영향 범위는 전 세계 제조 시설에 걸쳐 있으며, 특히 망 분리가 불완전한 환경에서 위험도가 극대화됩니다.

[Recommendations] 현재 공식 패치가 없으므로, 운영자는 즉시 해당 장치를 공용 인터넷으로부터 격리하고 방화벽 뒤에 배치해야 합니다. 원격 액세스가 필요한 경우 반드시 최신 버전의 VPN을 사용하고, 허가되지 않은 관리자 페이지 접근 시도를 모니터링하는 침입 탐지 시스템(IDS)을 가동해야 합니다. 장기적으로는 보안 업데이트가 보장되는 대체 장비로의 교체를 검토할 것을 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: CWE-798, IIoT Security, Hard-coded Credentials, CISA Advisory, Critical Manufacturing

## Analysis
[Executive Overview] CISA는 중국 Jinan USR IOT Technology(PUSR)사의 USR-W610 산업용 컨버터에서 발견된 치명적인 보안 취약점(CVE-2026-7786)에 대해 경고했습니다. 이 장치는 RS232/485 직렬 통신을 Wi-Fi 또는 이더넷으로 변환하는 핵심적인 산업 IoT(IIoT) 구성 요소로, 전 세계 제조 및 중요 인프라 분야에 널리 배포되어 있어 이번 취약점의 파급력이 매우 큽니다.

[Threat Analysis] 해당 취약점은 CWE-798(하드코딩된 자격 증명 사용)에 해당하며, 펌웨어 내에 평문으로 관리자 계정 정보가 포함되어 있는 것이 핵심입니다. 공격자는 펌웨어 이미지를 추출 및 분석하여 이 정보를 손쉽게 획득할 수 있으며, 이를 통해 장치의 네트워크 서비스에 관리자 권한으로 무단 인증할 수 있습니다. 특히 제조사가 CISA의 보안 조정 요청에 응답하지 않아 공식 패치가 부재한 상태에서 위협이 지속되고 있습니다.

[Impact Assessment] 공격자가 관리자 권한을 획득할 경우, 산업 현장의 제어 시스템 간의 통신을 가로채거나 변조할 수 있습니다. 이는 생산 공정 중단, 오작동 유발, 혹은 내부 망으로 침투하기 위한 거점으로 악용될 수 있어 치명적인 물리적 피해나 정보 유출로 이어질 수 있습니다. 영향 범위는 전 세계 제조 시설에 걸쳐 있으며, 특히 망 분리가 불완전한 환경에서 위험도가 극대화됩니다.

[Recommendations] 현재 공식 패치가 없으므로, 운영자는 즉시 해당 장치를 공용 인터넷으로부터 격리하고 방화벽 뒤에 배치해야 합니다. 원격 액세스가 필요한 경우 반드시 최신 버전의 VPN을 사용하고, 허가되지 않은 관리자 페이지 접근 시도를 모니터링하는 침입 탐지 시스템(IDS)을 가동해야 합니다. 장기적으로는 보안 업데이트가 보장되는 대체 장비로의 교체를 검토할 것을 권고합니다.


## References
1. CVE-2026-7786
2. CISA, ICSA-26-148-02: Jinan USR IOT Technology Limited (PUSR) USR-W610, 2026
3. MITRE ATT&CK: T1552.001 - Unsecured Credentials: Hardcoded Credentials
4. Zhu et al., Security Analysis of Industrial IoT Devices and Protocols, IEEE Xplore, 2021
5. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-148-02)
    