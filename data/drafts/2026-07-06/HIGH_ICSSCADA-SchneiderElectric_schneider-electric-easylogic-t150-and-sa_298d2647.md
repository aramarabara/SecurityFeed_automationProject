
# Schneider Electric EasyLogic T150 and Saitel DP RTU

> [Executive Overview] 슈나이더 일렉트릭(Schneider Electric)의 EasyLogic T150 및 Saitel DP 원격 단말 장치(RTU)에서 중요 제조 및 에너지 산업 분야에 심각한 영향을 미칠 수 있는 두 개의 보안 취약점이 발견되었습니다. 해당 장치들은 전력망 및 산업 공정의 데이터 수집과 제어를 담당하는 핵심 인프라 구성 요소로, 이번 취약점은 장치 내 민감 정보 보호 메커니즘의 결함을 노출하고 있습니다. [Threat Analysis] 주요 위협인 CVE-2026-9650은 펌웨어나 시스템 파일 내에 자격 증명이 불충분하게 보호되는 CWE-522 결함으로, 인증되지 않은 공격자가 이를 탈취할 수 있게 합니다. 또한 CVE-2026-9651은 시스템 파일에 대한 부적절한 권한 설정(CWE-732)으로 인해 비밀번호 해시가 노출될 수 있는 위험을 수반합니다. 이러한 취약점들은 공격자가 물리적 접근권을 확보하거나 네트워크 내 권한 상승을 시도할 때 치명적인 공격 벡터로 작용합니다. [Impact Assessment] 공격자가 이 취약점을 악용할 경우, 산업 제어 시스템(ICS)에 대한 무단 접근 권한을 획득하여 중요 설비를 임의로 조작하거나 운영 데이터를 변조할 수 있습니다. 이는 에너지 공급 중단이나 제조 라인의 물리적 손상과 같은 사회경제적 파급력이 큰 사고로 이어질 수 있으며, 글로벌 공급망 전체에 걸친 보안 위협으로 평가됩니다. [Recommendations] 관리자는 슈나이더 일렉트릭이 제공하는 최신 펌웨어(v11.06.32 또는 v11.06.38 이상)를 즉시 적용해야 합니다. 또한, CISA의 권고에 따라 모든 제어 시스템 장치를 인터넷으로부터 격리하고, 원격 접속이 필요한 경우 강력한 VPN과 방화벽을 통한 심층 방어(Defense-in-Depth) 전략을 구축해야 합니다.

**Severity**: HIGH (8.7/10)
**Tags**: ICS/SCADA, Schneider Electric, Credential Exposure, Critical Infrastructure, OT Security

## Analysis
[Executive Overview] 슈나이더 일렉트릭(Schneider Electric)의 EasyLogic T150 및 Saitel DP 원격 단말 장치(RTU)에서 중요 제조 및 에너지 산업 분야에 심각한 영향을 미칠 수 있는 두 개의 보안 취약점이 발견되었습니다. 해당 장치들은 전력망 및 산업 공정의 데이터 수집과 제어를 담당하는 핵심 인프라 구성 요소로, 이번 취약점은 장치 내 민감 정보 보호 메커니즘의 결함을 노출하고 있습니다. [Threat Analysis] 주요 위협인 CVE-2026-9650은 펌웨어나 시스템 파일 내에 자격 증명이 불충분하게 보호되는 CWE-522 결함으로, 인증되지 않은 공격자가 이를 탈취할 수 있게 합니다. 또한 CVE-2026-9651은 시스템 파일에 대한 부적절한 권한 설정(CWE-732)으로 인해 비밀번호 해시가 노출될 수 있는 위험을 수반합니다. 이러한 취약점들은 공격자가 물리적 접근권을 확보하거나 네트워크 내 권한 상승을 시도할 때 치명적인 공격 벡터로 작용합니다. [Impact Assessment] 공격자가 이 취약점을 악용할 경우, 산업 제어 시스템(ICS)에 대한 무단 접근 권한을 획득하여 중요 설비를 임의로 조작하거나 운영 데이터를 변조할 수 있습니다. 이는 에너지 공급 중단이나 제조 라인의 물리적 손상과 같은 사회경제적 파급력이 큰 사고로 이어질 수 있으며, 글로벌 공급망 전체에 걸친 보안 위협으로 평가됩니다. [Recommendations] 관리자는 슈나이더 일렉트릭이 제공하는 최신 펌웨어(v11.06.32 또는 v11.06.38 이상)를 즉시 적용해야 합니다. 또한, CISA의 권고에 따라 모든 제어 시스템 장치를 인터넷으로부터 격리하고, 원격 접속이 필요한 경우 강력한 VPN과 방화벽을 통한 심층 방어(Defense-in-Depth) 전략을 구축해야 합니다.


## References
1. CISA, ICSA-26-181-04: Schneider Electric EasyLogic T150 and Saitel DP RTU, 2026
2. CVE-2026-9650
3. CVE-2026-9651
4. Stouffer et al., Guide to Industrial Control Systems (ICS) Security, NIST SP 800-82 Rev. 2, 2015
5. MITRE ATT&CK: T1552.001 - Unsecured Credentials: Credentials In Files
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-181-04)
    