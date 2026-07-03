
# Gardyn IoT Hub

> [Executive Overview] 미국 스마트 가드닝 전문 기업 Gardyn의 IoT 허브 제품군에서 심각한 보안 취약점이 발견되었습니다. CISA(미국 사이버보안 및 인프라 보안국)는 특히 하드코딩된 자격 증명을 이용해 장치 제어권을 탈취할 수 있는 CVE-2026-13768에 대해 CVSS 최고 점수인 10.0을 부여하며 그 위험성을 경고했습니다. 식료품 및 농업 인프라와 관련된 해당 기기들은 이번 취약점으로 인해 대규모 공격의 표적이 될 가능성이 농후합니다.[Threat Analysis] 이번 위협은 세 가지 주요 경로를 통해 발생합니다. 첫째, 'iothubowner'라는 특권 키가 하드코딩되어 노출됨에 따라 공격자가 모든 연결 기기의 상태 정보를 조회하고 임의의 명령을 실행할 수 있습니다. 둘째, 인증 없이 Azure Blob Storage에 접근하여 민감한 시스템 로그를 열람할 수 있는 정보 노출 취약점이 존재합니다. 마지막으로 관리자 패널의 HTTP 보안 헤더 부재로 인해 클릭재킹 및 교차 사이트 스크립팅(XSS) 공격이 가능합니다. 공격자는 이를 통해 사용자 네트워크 내부로 침투하는 거점을 마련할 수 있습니다.[Impact Assessment] 영향을 받는 대상은 Gardyn Home 및 Studio 펌웨어를 사용하는 모든 가정용 스마트 기기입니다. 공격자가 장치 제어권을 획득할 경우 사용자의 생활 패턴 정보 유출은 물론, 동일 네트워크에 연결된 다른 PC나 스마트 기기로의 횡적 이동(Lateral Movement)을 통한 추가 피해가 우려됩니다. 이는 개인 프라이버시 침해를 넘어 가정 내 IT 인프라 전체의 붕괴로 이어질 수 있는 중대한 사안입니다.[Recommendations] Gardyn은 이미 클라우드 인프라 업데이트를 배포했습니다. 사용자들은 즉시 장치의 인터넷 연결을 확인하여 최신 펌웨어(master.627 버전 이상) 및 모바일 앱 업데이트가 자동으로 수행되도록 조치해야 합니다. 또한, CISA는 IoT 장치를 비즈니스 또는 개인 주 네트워크와 분리된 별도의 VLAN에 배치하고, 방화벽 및 VPN을 활용하여 외부 인터넷으로부터의 노출을 최소화할 것을 강력히 권고합니다.

**Severity**: CRITICAL (10/10)
**Tags**: IoT Security, Hard-coded Credentials, CISA Advisory, Remote Code Execution, Supply Chain Security

## Analysis
[Executive Overview] 미국 스마트 가드닝 전문 기업 Gardyn의 IoT 허브 제품군에서 심각한 보안 취약점이 발견되었습니다. CISA(미국 사이버보안 및 인프라 보안국)는 특히 하드코딩된 자격 증명을 이용해 장치 제어권을 탈취할 수 있는 CVE-2026-13768에 대해 CVSS 최고 점수인 10.0을 부여하며 그 위험성을 경고했습니다. 식료품 및 농업 인프라와 관련된 해당 기기들은 이번 취약점으로 인해 대규모 공격의 표적이 될 가능성이 농후합니다.[Threat Analysis] 이번 위협은 세 가지 주요 경로를 통해 발생합니다. 첫째, 'iothubowner'라는 특권 키가 하드코딩되어 노출됨에 따라 공격자가 모든 연결 기기의 상태 정보를 조회하고 임의의 명령을 실행할 수 있습니다. 둘째, 인증 없이 Azure Blob Storage에 접근하여 민감한 시스템 로그를 열람할 수 있는 정보 노출 취약점이 존재합니다. 마지막으로 관리자 패널의 HTTP 보안 헤더 부재로 인해 클릭재킹 및 교차 사이트 스크립팅(XSS) 공격이 가능합니다. 공격자는 이를 통해 사용자 네트워크 내부로 침투하는 거점을 마련할 수 있습니다.[Impact Assessment] 영향을 받는 대상은 Gardyn Home 및 Studio 펌웨어를 사용하는 모든 가정용 스마트 기기입니다. 공격자가 장치 제어권을 획득할 경우 사용자의 생활 패턴 정보 유출은 물론, 동일 네트워크에 연결된 다른 PC나 스마트 기기로의 횡적 이동(Lateral Movement)을 통한 추가 피해가 우려됩니다. 이는 개인 프라이버시 침해를 넘어 가정 내 IT 인프라 전체의 붕괴로 이어질 수 있는 중대한 사안입니다.[Recommendations] Gardyn은 이미 클라우드 인프라 업데이트를 배포했습니다. 사용자들은 즉시 장치의 인터넷 연결을 확인하여 최신 펌웨어(master.627 버전 이상) 및 모바일 앱 업데이트가 자동으로 수행되도록 조치해야 합니다. 또한, CISA는 IoT 장치를 비즈니스 또는 개인 주 네트워크와 분리된 별도의 VLAN에 배치하고, 방화벽 및 VPN을 활용하여 외부 인터넷으로부터의 노출을 최소화할 것을 강력히 권고합니다.


## References
1. CISA Advisory ICSA-26-183-03: Gardyn IoT Hub, 2026
2. CVE-2026-13768
3. CVE-2026-55726
4. MITRE ATT&CK: T1552.001 Unsecured Credentials: Hard-coded Credentials
5. S. S. Hasan et al., Security Analysis of IoT Devices: A Survey, IEEE Access, 2022
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-183-03)
    