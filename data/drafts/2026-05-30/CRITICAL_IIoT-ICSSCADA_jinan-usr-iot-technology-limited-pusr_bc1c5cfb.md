
# Jinan USR IOT Technology Limited (PUSR) USR-W610 RS232/485 to Wi-Fi/Ethernet Converter

> [Executive Overview] Jinan USR IOT Technology (이하 PUSR)의 USR-W610 직렬-이더넷/Wi-Fi 변환기에서 심각한 보안 취약점인 CVE-2026-7786이 발견되었습니다. 이 장치는 전 세계 제조 현장의 핵심 인프라에서 레거시 직렬 장치를 현대적인 네트워크 환경에 연결하는 중추적인 교량 역할을 수행합니다. 이번 하드코딩된 자격 증명 노출은 공격자가 장치의 관리자 권한을 탈취하여 산업 현장의 물리적 프로세스에 개입할 수 있는 통로를 제공한다는 점에서 그 심각성이 매우 높습니다. [Threat Analysis] 본 취약점은 CWE-798(하드코딩된 자격 증명 사용)로 분류되며, 펌웨어 이미지 내에 관리자 인증 정보가 평문으로 포함되어 있는 것이 근본 원인입니다. 공격자는 펌웨어를 입수하여 리버스 엔지니어링을 수행함으로써 해당 정보를 손쉽게 추출할 수 있습니다. CVSS 3.1 기준 9.8의 점수는 공격자가 네트워크를 통해 특별한 권한이나 사용자 상호작용 없이도 원격으로 인증을 우회하고 장치 제어권을 획득할 수 있음을 시사합니다. [Impact Assessment] 공격자가 관리자 권한을 획득하면 직렬 통신 데이터를 가로채거나 조작할 수 있으며, 이는 제조 공정의 오작동, 설비 파괴 또는 산업 스파이 활동으로 이어질 수 있습니다. 특히 PUSR 제품이 전 세계 주요 제조 부문에 광범위하게 배포되어 있고, 현재 제조사 측의 공식적인 보안 패치가 제공되지 않고 있어 노출된 자산에 대한 즉각적인 위협이 존재합니다. [Recommendations] 벤더사의 공식 패치가 부재한 상황이므로 사용자는 방어적 네트워크 설계를 우선시해야 합니다. 제어 시스템을 인터넷으로부터 완전히 격리하고, 비즈니스 네트워크와의 물리적/논리적 분리를 위해 방화벽을 구축해야 합니다. 원격 접속이 필수적인 경우에는 다중 인증(MFA)이 적용된 VPN을 사용하고, 정기적인 취약점 스캔 및 비정상적인 로그 모니터링을 통해 미승인 접근 시도를 차단해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: IIoT, ICS/SCADA, CVE-2026-7786, Hard-coded Credentials, Critical Manufacturing

## Analysis
[Executive Overview] Jinan USR IOT Technology (이하 PUSR)의 USR-W610 직렬-이더넷/Wi-Fi 변환기에서 심각한 보안 취약점인 CVE-2026-7786이 발견되었습니다. 이 장치는 전 세계 제조 현장의 핵심 인프라에서 레거시 직렬 장치를 현대적인 네트워크 환경에 연결하는 중추적인 교량 역할을 수행합니다. 이번 하드코딩된 자격 증명 노출은 공격자가 장치의 관리자 권한을 탈취하여 산업 현장의 물리적 프로세스에 개입할 수 있는 통로를 제공한다는 점에서 그 심각성이 매우 높습니다. [Threat Analysis] 본 취약점은 CWE-798(하드코딩된 자격 증명 사용)로 분류되며, 펌웨어 이미지 내에 관리자 인증 정보가 평문으로 포함되어 있는 것이 근본 원인입니다. 공격자는 펌웨어를 입수하여 리버스 엔지니어링을 수행함으로써 해당 정보를 손쉽게 추출할 수 있습니다. CVSS 3.1 기준 9.8의 점수는 공격자가 네트워크를 통해 특별한 권한이나 사용자 상호작용 없이도 원격으로 인증을 우회하고 장치 제어권을 획득할 수 있음을 시사합니다. [Impact Assessment] 공격자가 관리자 권한을 획득하면 직렬 통신 데이터를 가로채거나 조작할 수 있으며, 이는 제조 공정의 오작동, 설비 파괴 또는 산업 스파이 활동으로 이어질 수 있습니다. 특히 PUSR 제품이 전 세계 주요 제조 부문에 광범위하게 배포되어 있고, 현재 제조사 측의 공식적인 보안 패치가 제공되지 않고 있어 노출된 자산에 대한 즉각적인 위협이 존재합니다. [Recommendations] 벤더사의 공식 패치가 부재한 상황이므로 사용자는 방어적 네트워크 설계를 우선시해야 합니다. 제어 시스템을 인터넷으로부터 완전히 격리하고, 비즈니스 네트워크와의 물리적/논리적 분리를 위해 방화벽을 구축해야 합니다. 원격 접속이 필수적인 경우에는 다중 인증(MFA)이 적용된 VPN을 사용하고, 정기적인 취약점 스캔 및 비정상적인 로그 모니터링을 통해 미승인 접근 시도를 차단해야 합니다.


## References
1. CISA, ICSA-26-148-02: Jinan USR IOT Technology Limited (PUSR) USR-W610, 2026
2. CVE-2026-7786
3. MITRE ATT&CK: T1552.001 (Unsecured Credentials: Private Keys/Hardcoded)
4. Costin et al., A Large-scale Analysis of the Security of Embedded Firmwares, USENIX Security Symposium, 2014
5. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-148-02)
    