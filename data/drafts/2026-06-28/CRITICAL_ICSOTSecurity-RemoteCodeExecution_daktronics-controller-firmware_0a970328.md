
# Daktronics Controller Firmware

> [Executive Overview] Daktronics의 DMP-5000 및 DMP-8000 시리즈 컨트롤러 펌웨어에서 발견된 다수의 취약점은 산업 제어 시스템(ICS) 환경에 심각한 보안 위협을 제기합니다. 이 취약점들은 원격의 비인증 공격자가 타겟 시스템의 완전한 루트 수준 권한을 획득할 수 있게 하며, 이는 전 세계적으로 배포된 상업 시설, 의료, 비상 서비스 인프라의 가용성과 신뢰성을 직접적으로 위협합니다. [Threat Analysis] 주요 위협은 경로 탐색(CVE-2026-28701), 위험한 파일의 무제한 업로드(CVE-2026-33560), 그리고 하드코딩된 자격 증명 사용(CVE-2026-31928)의 세 가지 벡터로 구성됩니다. 특히 기본 관리자 계정을 이용해 인증을 우회한 후, 검증되지 않은 실행 파일이나 스크립트를 업로드함으로써 원격 코드 실행(RCE)을 수행할 수 있는 공격 시나리오가 가능합니다. [Impact Assessment] 취약점 악용 성공 시 공격자는 전광판 및 제어 시스템을 완전히 장악하여 대중에게 허위 정보를 유포하거나, 주요 공공 인프라의 운영을 중단시킬 수 있습니다. 특히 의료 및 비상 서비스 섹션에서의 시스템 오작동은 인명 피해나 사회적 혼란으로 이어질 수 있는 고위험군으로 분류됩니다. [Recommendations] 자산 운영자는 즉시 Daktronics에서 권고하는 패치 버전(v8.117.0.x, v9.43.0.x, v10.34.0.x 이상)으로 펌웨어를 업데이트해야 합니다. 또한 모든 기본 패스워드를 강력한 고유 암호로 교체하고, 제어 시스템 네트워크를 인터넷으로부터 격리하며, 원격 접속 시 MFA가 적용된 VPN을 사용하는 등의 심층 방어 전략을 수립해야 합니다.

**Severity**: CRITICAL (9.3/10)
**Tags**: ICS/OT Security, Remote Code Execution, Path Traversal, Default Credentials, Critical Infrastructure

## Analysis
[Executive Overview] Daktronics의 DMP-5000 및 DMP-8000 시리즈 컨트롤러 펌웨어에서 발견된 다수의 취약점은 산업 제어 시스템(ICS) 환경에 심각한 보안 위협을 제기합니다. 이 취약점들은 원격의 비인증 공격자가 타겟 시스템의 완전한 루트 수준 권한을 획득할 수 있게 하며, 이는 전 세계적으로 배포된 상업 시설, 의료, 비상 서비스 인프라의 가용성과 신뢰성을 직접적으로 위협합니다. [Threat Analysis] 주요 위협은 경로 탐색(CVE-2026-28701), 위험한 파일의 무제한 업로드(CVE-2026-33560), 그리고 하드코딩된 자격 증명 사용(CVE-2026-31928)의 세 가지 벡터로 구성됩니다. 특히 기본 관리자 계정을 이용해 인증을 우회한 후, 검증되지 않은 실행 파일이나 스크립트를 업로드함으로써 원격 코드 실행(RCE)을 수행할 수 있는 공격 시나리오가 가능합니다. [Impact Assessment] 취약점 악용 성공 시 공격자는 전광판 및 제어 시스템을 완전히 장악하여 대중에게 허위 정보를 유포하거나, 주요 공공 인프라의 운영을 중단시킬 수 있습니다. 특히 의료 및 비상 서비스 섹션에서의 시스템 오작동은 인명 피해나 사회적 혼란으로 이어질 수 있는 고위험군으로 분류됩니다. [Recommendations] 자산 운영자는 즉시 Daktronics에서 권고하는 패치 버전(v8.117.0.x, v9.43.0.x, v10.34.0.x 이상)으로 펌웨어를 업데이트해야 합니다. 또한 모든 기본 패스워드를 강력한 고유 암호로 교체하고, 제어 시스템 네트워크를 인터넷으로부터 격리하며, 원격 접속 시 MFA가 적용된 VPN을 사용하는 등의 심층 방어 전략을 수립해야 합니다.


## References
1. CISA Advisory, ICSA-26-176-04: Daktronics Controller Firmware, 2026
2. CVE-2026-28701
3. CVE-2026-31928
4. MITRE ATT&CK: T0812 (Default Credentials)
5. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST SP 800-82, 2015
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-176-04)
    