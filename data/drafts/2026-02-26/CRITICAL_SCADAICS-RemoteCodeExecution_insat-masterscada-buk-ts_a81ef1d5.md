
# InSAT MasterSCADA BUK-TS

> Executive Overview: 러시아 InSAT사의 MasterSCADA BUK-TS 솔루션에서 발견된 심각한 보안 취약점(CVE-2026-21410, CVE-2026-22553)은 에너지, 제조, 수자원 등 국가 핵심 기반 시설에 중대한 위협을 제기하고 있습니다. 특히 제조사가 CISA의 보안 조치 협조 요청에 응답하지 않아 현재 공식 패치가 없는 상태이며, 이는 전 세계 산업 현장에 심각한 제로데이 리스크를 초래하고 있습니다. Threat Analysis: 기술적으로 이번 취약점은 웹 인터페이스의 SQL 인젝션과 MMadmServ 관리 인터페이스의 OS 커맨드 인젝션으로 분류됩니다. 공격자는 특수하게 조작된 입력값을 통해 인증 없이 데이터베이스에 접근하거나 운영체제 명령어를 직접 실행할 수 있습니다. 이는 최종적으로 원격 코드 실행(RCE)으로 이어지며, 공격자가 제어 시스템의 커널 또는 관리자 권한을 획득할 수 있는 경로를 제공합니다. Impact Assessment: 취약점 악용 성공 시 공격자는 SCADA 시스템의 운영 권한을 완전히 탈탈취하여 물리적 공정의 임의 조작, 서비스 거부(DoS), 또는 국가 기밀에 준하는 데이터 탈취를 수행할 수 있습니다. 기반 시설의 가동 중단은 경제적 손실뿐만 아니라 공공 안전에도 치명적인 영향을 미칠 수 있는 중대 사안입니다. Recommendations: 공식 패치가 배포될 때까지 제어 시스템을 공용 인터넷으로부터 완전히 격리하는 망 분리 정책을 즉각 시행해야 합니다. 원격 접속이 필요한 경우 최신 버전의 VPN과 다요소 인증(MFA)을 필수 적용하고, CISA의 심층 방어(Defense-in-Depth) 전략에 따라 비정상 트래픽 및 시스템 로그에 대한 실시간 모니터링 체계를 강화할 것을 권고합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: SCADA/ICS, Remote Code Execution, Critical Infrastructure, SQL Injection, Supply Chain Security

## Analysis
Executive Overview: 러시아 InSAT사의 MasterSCADA BUK-TS 솔루션에서 발견된 심각한 보안 취약점(CVE-2026-21410, CVE-2026-22553)은 에너지, 제조, 수자원 등 국가 핵심 기반 시설에 중대한 위협을 제기하고 있습니다. 특히 제조사가 CISA의 보안 조치 협조 요청에 응답하지 않아 현재 공식 패치가 없는 상태이며, 이는 전 세계 산업 현장에 심각한 제로데이 리스크를 초래하고 있습니다. Threat Analysis: 기술적으로 이번 취약점은 웹 인터페이스의 SQL 인젝션과 MMadmServ 관리 인터페이스의 OS 커맨드 인젝션으로 분류됩니다. 공격자는 특수하게 조작된 입력값을 통해 인증 없이 데이터베이스에 접근하거나 운영체제 명령어를 직접 실행할 수 있습니다. 이는 최종적으로 원격 코드 실행(RCE)으로 이어지며, 공격자가 제어 시스템의 커널 또는 관리자 권한을 획득할 수 있는 경로를 제공합니다. Impact Assessment: 취약점 악용 성공 시 공격자는 SCADA 시스템의 운영 권한을 완전히 탈탈취하여 물리적 공정의 임의 조작, 서비스 거부(DoS), 또는 국가 기밀에 준하는 데이터 탈취를 수행할 수 있습니다. 기반 시설의 가동 중단은 경제적 손실뿐만 아니라 공공 안전에도 치명적인 영향을 미칠 수 있는 중대 사안입니다. Recommendations: 공식 패치가 배포될 때까지 제어 시스템을 공용 인터넷으로부터 완전히 격리하는 망 분리 정책을 즉각 시행해야 합니다. 원격 접속이 필요한 경우 최신 버전의 VPN과 다요소 인증(MFA)을 필수 적용하고, CISA의 심층 방어(Defense-in-Depth) 전략에 따라 비정상 트래픽 및 시스템 로그에 대한 실시간 모니터링 체계를 강화할 것을 권고합니다.


## References
1. CVE-2026-21410
2. CVE-2026-22553
3. CISA Advisory ICSA-26-055-01, InSAT MasterSCADA BUK-TS, 2026
4. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
5. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST Special Publication 800-82 Rev. 2, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-055-01)
    