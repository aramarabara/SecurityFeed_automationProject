
# Schneider Electric devices using CODESYS Runtime

> [Executive Overview] 슈나이더 일렉트릭(Schneider Electric)의 다양한 산업용 컨트롤러 및 HMI 제품군에 내장된 CODESYS Runtime V3 통신 서버에서 다수의 중대한 보안 취약점이 발견되었습니다. 이 위협은 전 세계 에너지, 제조, 상업 시설 등 주요 인프라에 광범위하게 사용되는 장비들을 대상으로 하며, 공격자가 시스템 권한을 획득하거나 운영 프로세스를 중단시킬 수 있는 심각한 위험을 내포하고 있습니다.

[Threat Analysis] 기술적 분석 결과, 공격자는 특수하게 조작된 통신 요청을 통해 스택 기반 버퍼 오버플로우(CVE-2022-47380 등) 및 부적절한 입력 유효성 검사 결함을 악용할 수 있습니다. 특히 CVE-2022-4046과 같은 취약점은 인증된 공격자가 컨트롤러의 전체 RAM 메모리에 접근하여 런타임 프로세스의 민감한 데이터를 읽거나 쓸 수 있게 하며, 체크섬 검증 우회(CVE-2023-28355)를 통해 악성 애플리케이션 코드를 실행 중인 제어 로직에 주입할 수 있는 공격 벡터를 제공합니다.

[Impact Assessment] 영향을 받는 제품군은 Modicon M241, M251, M262, PacDrive 3 컨트롤러 및 Harmony(구 Magelis) HMI 시리즈를 포함하여 매우 방대합니다. 공격이 성공할 경우 서비스 거부(DoS)로 인한 가용성 상실은 물론, 임의 코드 실행(RCE)을 통한 물리적 공정 제어권 탈취라는 치명적인 결과로 이어질 수 있습니다. 특히 수명 종료(End-of-Life)가 선언된 Magelis XBT 및 Modicon M218 등의 제품은 보안 패치가 제공되지 않아 공격자의 우선 표적이 될 가능성이 높습니다.

[Recommendations] 조직은 즉시 Schneider Electric Software Update(SESU)를 통해 Machine Expert v2.2 및 Vijeo Designer v6.3.1 이상의 최신 펌웨어로 업데이트해야 합니다. 패치 적용이 불가능한 노후 장비는 최신 모델로 교체하고, 프로그래밍 포트(UDP/1740, TCP/11740 등)에 대한 네트워크 접근을 엄격히 제한해야 합니다. 또한 방화벽과 VPN을 활용한 네트워크 격리 및 강력한 비밀번호 정책 적용을 포함한 방어 심층(Defense-in-Depth) 전략 수립이 필수적입니다.

**Severity**: HIGH (8.8/10)
**Tags**: ICS/OT Security, Remote Code Execution, Industrial Control Systems, Buffer Overflow, Schneider Electric

## Analysis
[Executive Overview] 슈나이더 일렉트릭(Schneider Electric)의 다양한 산업용 컨트롤러 및 HMI 제품군에 내장된 CODESYS Runtime V3 통신 서버에서 다수의 중대한 보안 취약점이 발견되었습니다. 이 위협은 전 세계 에너지, 제조, 상업 시설 등 주요 인프라에 광범위하게 사용되는 장비들을 대상으로 하며, 공격자가 시스템 권한을 획득하거나 운영 프로세스를 중단시킬 수 있는 심각한 위험을 내포하고 있습니다.

[Threat Analysis] 기술적 분석 결과, 공격자는 특수하게 조작된 통신 요청을 통해 스택 기반 버퍼 오버플로우(CVE-2022-47380 등) 및 부적절한 입력 유효성 검사 결함을 악용할 수 있습니다. 특히 CVE-2022-4046과 같은 취약점은 인증된 공격자가 컨트롤러의 전체 RAM 메모리에 접근하여 런타임 프로세스의 민감한 데이터를 읽거나 쓸 수 있게 하며, 체크섬 검증 우회(CVE-2023-28355)를 통해 악성 애플리케이션 코드를 실행 중인 제어 로직에 주입할 수 있는 공격 벡터를 제공합니다.

[Impact Assessment] 영향을 받는 제품군은 Modicon M241, M251, M262, PacDrive 3 컨트롤러 및 Harmony(구 Magelis) HMI 시리즈를 포함하여 매우 방대합니다. 공격이 성공할 경우 서비스 거부(DoS)로 인한 가용성 상실은 물론, 임의 코드 실행(RCE)을 통한 물리적 공정 제어권 탈취라는 치명적인 결과로 이어질 수 있습니다. 특히 수명 종료(End-of-Life)가 선언된 Magelis XBT 및 Modicon M218 등의 제품은 보안 패치가 제공되지 않아 공격자의 우선 표적이 될 가능성이 높습니다.

[Recommendations] 조직은 즉시 Schneider Electric Software Update(SESU)를 통해 Machine Expert v2.2 및 Vijeo Designer v6.3.1 이상의 최신 펌웨어로 업데이트해야 합니다. 패치 적용이 불가능한 노후 장비는 최신 모델로 교체하고, 프로그래밍 포트(UDP/1740, TCP/11740 등)에 대한 네트워크 접근을 엄격히 제한해야 합니다. 또한 방화벽과 VPN을 활용한 네트워크 격리 및 강력한 비밀번호 정책 적용을 포함한 방어 심층(Defense-in-Depth) 전략 수립이 필수적입니다.


## References
1. CISA, ICSA-26-020-02: Schneider Electric devices using CODESYS Runtime, 2026
2. CVE-2022-47379
3. NIST NVD, CVE-2022-4046: CODESYS Control runtime process RAM access, 2022
4. MITRE ATT&CK: T0814 - Control Device Peripherals
5. Schneider Electric, SEVD-2023-192-04 Security Notification, 2025
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-020-02)
    