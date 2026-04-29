
# Milesight Cameras

> [Executive Overview] Milesight AIoT 카메라에서 발견된 5개의 보안 취약점은 전 세계 상업 시설 및 핵심 인프라에 심각한 위협이 됩니다. 이 취약점들은 인증 우회부터 원격 코드 실행(RCE)까지 가능하게 하며, 특히 하드코딩된 자격 증명과 암호화 키 노출은 공격자가 장치를 완전히 제어할 수 있는 치명적인 경로를 제공합니다. [Threat Analysis] 기술적으로 가장 위험한 CVE-2026-32644(CVSS 9.8)는 하드코딩된 암호화 키를 사용하여 통신 보안을 무력화하며, CVE-2026-32649(명령어 주입)와 CVE-2026-20766(힙 기반 버퍼 오버플로우)은 공격자가 임의의 시스템 명령을 실행하거나 서비스 거부(DoS) 상태를 유발하도록 허용합니다. 이러한 다층적 취약점 구조는 공격자가 네트워크 내에서 권한을 상승시키고 횡적 이동을 수행하는 데 최적의 환경을 제공합니다. [Impact Assessment] 전 세계적으로 보급된 수십 개의 Milesight 카메라 모델이 영향을 받으며, 공격 성공 시 영상 데이터 유출, 기업 네트워크 침투를 위한 거점 마련, 물리적 보안 시스템 무력화 등의 심각한 결과가 초래될 수 있습니다. 특히 상업 시설의 감시 체계가 공격자의 손에 넘어갈 경우 사생활 침해를 넘어선 조직적 안보 위협으로 확장될 가능성이 큽니다. [Recommendations] 조직은 즉시 Milesight 공식 웹사이트를 통해 장치 시리즈별 최신 펌웨어(PE/PC/PA 시리즈 등)로 업데이트를 수행해야 합니다. 또한, CISA의 권고에 따라 제어 시스템 장치를 인터넷에 직접 노출하지 말고, 방화벽과 VPN을 통해 내부 네트워크와 격리하는 보안 계층화(Defense-in-Depth) 전략을 수립해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: IoT Security, Remote Code Execution, CISA Advisory, Firmware Vulnerability, Hard-coded Credentials

## Analysis
[Executive Overview] Milesight AIoT 카메라에서 발견된 5개의 보안 취약점은 전 세계 상업 시설 및 핵심 인프라에 심각한 위협이 됩니다. 이 취약점들은 인증 우회부터 원격 코드 실행(RCE)까지 가능하게 하며, 특히 하드코딩된 자격 증명과 암호화 키 노출은 공격자가 장치를 완전히 제어할 수 있는 치명적인 경로를 제공합니다. [Threat Analysis] 기술적으로 가장 위험한 CVE-2026-32644(CVSS 9.8)는 하드코딩된 암호화 키를 사용하여 통신 보안을 무력화하며, CVE-2026-32649(명령어 주입)와 CVE-2026-20766(힙 기반 버퍼 오버플로우)은 공격자가 임의의 시스템 명령을 실행하거나 서비스 거부(DoS) 상태를 유발하도록 허용합니다. 이러한 다층적 취약점 구조는 공격자가 네트워크 내에서 권한을 상승시키고 횡적 이동을 수행하는 데 최적의 환경을 제공합니다. [Impact Assessment] 전 세계적으로 보급된 수십 개의 Milesight 카메라 모델이 영향을 받으며, 공격 성공 시 영상 데이터 유출, 기업 네트워크 침투를 위한 거점 마련, 물리적 보안 시스템 무력화 등의 심각한 결과가 초래될 수 있습니다. 특히 상업 시설의 감시 체계가 공격자의 손에 넘어갈 경우 사생활 침해를 넘어선 조직적 안보 위협으로 확장될 가능성이 큽니다. [Recommendations] 조직은 즉시 Milesight 공식 웹사이트를 통해 장치 시리즈별 최신 펌웨어(PE/PC/PA 시리즈 등)로 업데이트를 수행해야 합니다. 또한, CISA의 권고에 따라 제어 시스템 장치를 인터넷에 직접 노출하지 말고, 방화벽과 VPN을 통해 내부 네트워크와 격리하는 보안 계층화(Defense-in-Depth) 전략을 수립해야 합니다.


## References
1. CVE-2026-32644
2. CVE-2026-32649
3. CISA, ICSA-26-113-03: Milesight Cameras Advisory, 2026
4. MITRE ATT&CK: T1190 (Exploit Public-Facing Application)
5. NIST SP 800-193: Platform Firmware Resiliency Guidelines, 2018
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-113-03)
    