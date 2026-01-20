
# Schneider Electric devices using CODESYS Runtime

> [Executive Overview] 슈나이더 일렉트릭(Schneider Electric)은 전 세계 산업 현장에서 광범위하게 사용되는 CODESYS Runtime V3 통신 서버에서 발견된 다수의 취약점에 대해 보안 권고를 발표했습니다. 이번 위협은 에너지, 제조 및 상업 시설 등 주요 인프라 분야에서 사용되는 Modicon 및 PacDrive 컨트롤러를 포함한 다양한 OT(운영 기술) 장비에 영향을 미치며, 공격자가 장비의 제어권을 획득하거나 산업 프로세스를 중단시킬 수 있는 중대한 위험을 내포하고 있습니다. [Threat Analysis] 발견된 취약점들은 메모리 버퍼 범위 제한 미흡(CWE-119), 스택 기반 버퍼 오버플로우(CWE-121), 신뢰할 수 없는 포인터 역참조(CWE-822) 등 심각한 기술적 결함을 포함하고 있습니다. 특히 CmpApp, CmpTraceMgr, CmpFiletransfer와 같은 핵심 컴포넌트들이 조작된 통신 요청을 처리할 때 비정상적인 메모리 접근을 허용합니다. 인증된 공격자는 이를 악용하여 권한을 상승시키거나, 임의의 원격 코드 실행(RCE) 및 서비스 거부(DoS) 상태를 유발할 수 있습니다. 또한, 통신 채널 내 메시지 무결성 검증 부족(CWE-924)을 통한 중간자 공격(MITM) 위협도 확인되었습니다. [Impact Assessment] 영향을 받는 제품군은 Modicon M241, M251, M262 컨트롤러와 PacDrive 3, Harmony HMI 시리즈 등 슈나이더 일렉트릭의 주력 OT 솔루션을 포괄합니다. 취약점이 성공적으로 악용될 경우, 생산 라인의 비정상적인 작동 유발, 공정 데이터 탈취, 또는 전체 제어 시스템의 가용성 상실과 같은 치명적인 결과를 초래할 수 있습니다. 이는 물리적 자산의 손상이나 환경적 사고로 이어질 수 있는 고위험군 위협으로 평가됩니다. [Recommendations] 관리자는 즉시 영향을 받는 장비의 펌웨어를 최신 버전(Machine Expert v2.2 이상 등)으로 업데이트해야 합니다. 업데이트가 불가능한 구형 장비(Magelis XBT 등)의 경우 최신 모델로의 마이그레이션이 강력히 권고됩니다. 네트워크 측면에서는 프로그래밍 포트(UDP/1740, TCP/11740, TCP/1105 등)에 대한 접근을 엄격히 제한하고, 산업용 방화벽을 통한 네트워크 분리 및 원격 접속 시 보안 VPN 사용 등 심층 방어 전략을 수립해야 합니다.

**Severity**: HIGH (8.8/10)
**Tags**: ICS/SCADA, Remote Code Execution, CODESYS, Firmware Patch, Critical Infrastructure

## Analysis
[Executive Overview] 슈나이더 일렉트릭(Schneider Electric)은 전 세계 산업 현장에서 광범위하게 사용되는 CODESYS Runtime V3 통신 서버에서 발견된 다수의 취약점에 대해 보안 권고를 발표했습니다. 이번 위협은 에너지, 제조 및 상업 시설 등 주요 인프라 분야에서 사용되는 Modicon 및 PacDrive 컨트롤러를 포함한 다양한 OT(운영 기술) 장비에 영향을 미치며, 공격자가 장비의 제어권을 획득하거나 산업 프로세스를 중단시킬 수 있는 중대한 위험을 내포하고 있습니다. [Threat Analysis] 발견된 취약점들은 메모리 버퍼 범위 제한 미흡(CWE-119), 스택 기반 버퍼 오버플로우(CWE-121), 신뢰할 수 없는 포인터 역참조(CWE-822) 등 심각한 기술적 결함을 포함하고 있습니다. 특히 CmpApp, CmpTraceMgr, CmpFiletransfer와 같은 핵심 컴포넌트들이 조작된 통신 요청을 처리할 때 비정상적인 메모리 접근을 허용합니다. 인증된 공격자는 이를 악용하여 권한을 상승시키거나, 임의의 원격 코드 실행(RCE) 및 서비스 거부(DoS) 상태를 유발할 수 있습니다. 또한, 통신 채널 내 메시지 무결성 검증 부족(CWE-924)을 통한 중간자 공격(MITM) 위협도 확인되었습니다. [Impact Assessment] 영향을 받는 제품군은 Modicon M241, M251, M262 컨트롤러와 PacDrive 3, Harmony HMI 시리즈 등 슈나이더 일렉트릭의 주력 OT 솔루션을 포괄합니다. 취약점이 성공적으로 악용될 경우, 생산 라인의 비정상적인 작동 유발, 공정 데이터 탈취, 또는 전체 제어 시스템의 가용성 상실과 같은 치명적인 결과를 초래할 수 있습니다. 이는 물리적 자산의 손상이나 환경적 사고로 이어질 수 있는 고위험군 위협으로 평가됩니다. [Recommendations] 관리자는 즉시 영향을 받는 장비의 펌웨어를 최신 버전(Machine Expert v2.2 이상 등)으로 업데이트해야 합니다. 업데이트가 불가능한 구형 장비(Magelis XBT 등)의 경우 최신 모델로의 마이그레이션이 강력히 권고됩니다. 네트워크 측면에서는 프로그래밍 포트(UDP/1740, TCP/11740, TCP/1105 등)에 대한 접근을 엄격히 제한하고, 산업용 방화벽을 통한 네트워크 분리 및 원격 접속 시 보안 VPN 사용 등 심층 방어 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-020-02: Schneider Electric Devices using CODESYS Runtime, 2026
2. Schneider Electric, Security Notification SEVD-2023-192-04, 2023
3. CVE-2022-47379
4. MITRE ATT&CK: T0806 (Exploitation of Remote Services)
5. NIST SP 800-82 Rev. 3, Guide to Industrial Control Systems (ICS) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-020-02)
    