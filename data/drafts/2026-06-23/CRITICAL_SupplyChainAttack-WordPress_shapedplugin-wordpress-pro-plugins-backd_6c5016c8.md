
# ShapedPlugin WordPress Pro Plugins Backdoored in Supply Chain Attack

> [Executive Overview] ShapedPlugin의 워드프레스 Pro 플러그인 배포 파이프라인이 침해되어 공식 업데이트 채널을 통해 백도어가 유포되는 심각한 공급망 공격이 발생했습니다. 이는 신뢰할 수 있는 소프트웨어 업데이트 메커니즘을 공격 도구로 악용한 사례로, 유료 라이선스 사용자들을 직접적인 위협에 노출시켰습니다. [Threat Analysis] 공격자는 벤더의 빌드 및 배포 시스템을 장악하여 소스 코드 내부에 악성 백도어를 직접 주입했습니다. Wordfence 분석에 따르면, 이 백도어는 공식 라이선스 업데이트 경로를 통해 유통되었으며, 원격의 공격자가 감염된 웹사이트에 대한 제어권을 획득하거나 임의의 명령을 실행할 수 있는 기능을 포함하고 있습니다. 이는 전형적인 MITRE ATT&CK T1195.002 기법에 해당합니다. [Impact Assessment] 이번 공격의 영향은 ShapedPlugin의 유료 버전을 사용하는 모든 웹사이트에 미칩니다. 공격자는 백도어를 통해 민감한 고객 데이터를 탈취하거나 사이트를 악성코드 유포지로 변조할 수 있으며, 관리자 권한 탈취로 인해 비즈니스 운영이 전면 중단될 위험이 큽니다. 특히 유료 사용자를 대상으로 했다는 점에서 기업형 웹사이트의 피해가 클 것으로 예상됩니다. [Recommendations] 모든 사용자는 즉시 ShapedPlugin 관련 플러그인을 최신 보안 버전으로 업데이트해야 합니다. 관리자는 파일 무결성 검사를 수행하여 비정상적인 코드 삽입 여부를 확인하고, 서버 로그를 통해 미심쩍은 원격 접속 기록을 조사해야 합니다. 또한, 침해 가능성을 염두에 두고 관리자 계정 비밀번호와 API 키를 전면 재설정하며, 벤더 측은 빌드 시스템의 다요소 인증(2FA) 강화와 코드 서명 절차를 도입해야 합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: Supply Chain Attack, WordPress, Backdoor, Malware, Web Security

## Analysis
[Executive Overview] ShapedPlugin의 워드프레스 Pro 플러그인 배포 파이프라인이 침해되어 공식 업데이트 채널을 통해 백도어가 유포되는 심각한 공급망 공격이 발생했습니다. 이는 신뢰할 수 있는 소프트웨어 업데이트 메커니즘을 공격 도구로 악용한 사례로, 유료 라이선스 사용자들을 직접적인 위협에 노출시켰습니다. [Threat Analysis] 공격자는 벤더의 빌드 및 배포 시스템을 장악하여 소스 코드 내부에 악성 백도어를 직접 주입했습니다. Wordfence 분석에 따르면, 이 백도어는 공식 라이선스 업데이트 경로를 통해 유통되었으며, 원격의 공격자가 감염된 웹사이트에 대한 제어권을 획득하거나 임의의 명령을 실행할 수 있는 기능을 포함하고 있습니다. 이는 전형적인 MITRE ATT&CK T1195.002 기법에 해당합니다. [Impact Assessment] 이번 공격의 영향은 ShapedPlugin의 유료 버전을 사용하는 모든 웹사이트에 미칩니다. 공격자는 백도어를 통해 민감한 고객 데이터를 탈취하거나 사이트를 악성코드 유포지로 변조할 수 있으며, 관리자 권한 탈취로 인해 비즈니스 운영이 전면 중단될 위험이 큽니다. 특히 유료 사용자를 대상으로 했다는 점에서 기업형 웹사이트의 피해가 클 것으로 예상됩니다. [Recommendations] 모든 사용자는 즉시 ShapedPlugin 관련 플러그인을 최신 보안 버전으로 업데이트해야 합니다. 관리자는 파일 무결성 검사를 수행하여 비정상적인 코드 삽입 여부를 확인하고, 서버 로그를 통해 미심쩍은 원격 접속 기록을 조사해야 합니다. 또한, 침해 가능성을 염두에 두고 관리자 계정 비밀번호와 API 키를 전면 재설정하며, 벤더 측은 빌드 시스템의 다요소 인증(2FA) 강화와 코드 서명 절차를 도입해야 합니다.


## References
1. Wordfence Intelligence, ShapedPlugin Supply Chain Attack Analysis, Wordfence Report, 2024
2. Ohm et al., Backstabber’s Knife Collection: A Review of Open Source Software Supply Chain Attacks, USENIX Security, 2020
3. MITRE ATT&CK: T1195.002 (Supply Chain Compromise: Compromise Software Dependencies and Development Tools)
4. CISA, Defending Against Software Supply Chain Attacks, Government Advisory, 2021
## Original Source
[The Hacker News](https://thehackernews.com/2026/06/shapedplugin-wordpress-pro-plugins.html)
    