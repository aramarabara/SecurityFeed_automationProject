
# Fortinet Confirms Active FortiCloud SSO Bypass on Fully Patched FortiGate Firewalls

> [Executive Overview] 최근 Fortinet은 최신 패치가 완료된 FortiGate 방화벽에서도 FortiCloud SSO를 통한 인증 우회 취약점이 악용되고 있음을 공식 확인했습니다. 이는 기존 보안 패치를 우회하는 제로데이(Zero-day) 성격의 공격 가능성을 시사하며, 기업 네트워크의 최전방 방어 체계인 방화벽 자체의 신뢰성을 위협하는 심각한 보안 이슈로 부상하고 있습니다. [Threat Analysis] 공격자는 FortiGate 장비와 FortiCloud 서비스 간의 단일 로그인(SSO) 인증 프로토콜 내에 존재하는 논리적 결함을 악용합니다. 특히 이미 알려진 CVE-2024-47575(일명 FortiJump)에 대한 패치가 적용된 시스템에서도 새로운 형태의 우회 공격이 관찰되고 있다는 점은, 공격자들이 기존 방어 기법을 무력화하는 변종 공격 벡터를 확보했음을 시사합니다. [Impact Assessment] 해당 취약점의 성공적인 악용은 관리자 권한 획득으로 이어지며, 공격자는 이를 통해 방화벽 규칙 수정, VPN 세션 탈취, 내부 네트워크로의 측면 이동(Lateral Movement) 및 데이터 유출을 수행할 수 있습니다. 대규모 엔터프라이즈 및 정부 기관에서 FortiGate를 널리 사용하는 만큼, 그 영향은 전 세계적인 인프라 위기로 확산될 잠재력이 큽니다. [Recommendations] 즉각적인 대응책으로 FortiCloud SSO 기능을 일시적으로 비활성화하고 로컬 관리자 계정에 대한 강력한 다요소 인증(MFA)을 강제해야 합니다. 또한 관리 인터페이스 접근을 특정 IP 대역으로만 제한하는 화이트리스트 정책을 강화하고, Fortinet의 공식 긴급 패치 릴리스를 상시 모니터링하여 발표 즉시 적용해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: Authentication Bypass, FortiGate, Zero-day, FortiCloud SSO, Network Infrastructure

## Analysis
[Executive Overview] 최근 Fortinet은 최신 패치가 완료된 FortiGate 방화벽에서도 FortiCloud SSO를 통한 인증 우회 취약점이 악용되고 있음을 공식 확인했습니다. 이는 기존 보안 패치를 우회하는 제로데이(Zero-day) 성격의 공격 가능성을 시사하며, 기업 네트워크의 최전방 방어 체계인 방화벽 자체의 신뢰성을 위협하는 심각한 보안 이슈로 부상하고 있습니다. [Threat Analysis] 공격자는 FortiGate 장비와 FortiCloud 서비스 간의 단일 로그인(SSO) 인증 프로토콜 내에 존재하는 논리적 결함을 악용합니다. 특히 이미 알려진 CVE-2024-47575(일명 FortiJump)에 대한 패치가 적용된 시스템에서도 새로운 형태의 우회 공격이 관찰되고 있다는 점은, 공격자들이 기존 방어 기법을 무력화하는 변종 공격 벡터를 확보했음을 시사합니다. [Impact Assessment] 해당 취약점의 성공적인 악용은 관리자 권한 획득으로 이어지며, 공격자는 이를 통해 방화벽 규칙 수정, VPN 세션 탈취, 내부 네트워크로의 측면 이동(Lateral Movement) 및 데이터 유출을 수행할 수 있습니다. 대규모 엔터프라이즈 및 정부 기관에서 FortiGate를 널리 사용하는 만큼, 그 영향은 전 세계적인 인프라 위기로 확산될 잠재력이 큽니다. [Recommendations] 즉각적인 대응책으로 FortiCloud SSO 기능을 일시적으로 비활성화하고 로컬 관리자 계정에 대한 강력한 다요소 인증(MFA)을 강제해야 합니다. 또한 관리 인터페이스 접근을 특정 IP 대역으로만 제한하는 화이트리스트 정책을 강화하고, Fortinet의 공식 긴급 패치 릴리스를 상시 모니터링하여 발표 즉시 적용해야 합니다.


## References
1. CVE-2024-47575
2. MITRE ATT&CK: T1190
3. Fortinet PSIRT Advisory: FG-IR-24-423
4. CISA Known Exploited Vulnerabilities Catalog, 2024
5. Mandiant, Uncovering FortiJump: Advanced Persistent Threats Exploiting Network Appliances, 2024
## Original Source
[The Hacker News](https://thehackernews.com/2026/01/fortinet-confirms-active-forticloud-sso.html)
    