
# Trane Tracer SC, Tracer SC+, and Tracer Concierge

> [Executive Overview] Trane의 건물 자동화 컨트롤러 제품군인 Tracer SC, Tracer SC+, 그리고 Tracer Concierge에서 루트 권한 획득 및 서비스 거부(DoS)를 유발할 수 있는 다수의 보안 취약점이 발견되었습니다. 해당 장비들은 전 세계 핵심 제조 시설의 에너지 및 환경 제어 시스템에 널리 배포되어 있으며, 공격자가 이를 악용할 경우 산업 제어 시스템(ICS) 환경에 심각한 운영 중단을 초래할 수 있습니다. [Threat Analysis] 이번에 식별된 취약점들은 취약한 암호화 알고리즘(CVE-2026-28252), 과도한 메모리 할당(CVE-2026-28253), 하드코딩된 자격 증명(CVE-2026-28255) 등 다양한 공격 벡터를 포함합니다. 공격자는 이를 통해 인증 과정을 우회하고 장치에 대한 루트 수준의 접근 권한을 획득하거나, 조작된 요청을 전송하여 시스템을 마비시킬 수 있습니다. 특히 인증되지 않은 외부 공격자가 네트워크를 통해 접근 가능한 경우 그 위험성이 극대화됩니다. [Impact Assessment] 취약점 노출 시 공격자는 관리자 계정을 탈취하거나 민감한 운영 데이터를 유출할 수 있으며, 최악의 경우 HVAC 시스템의 제어권을 장악하여 물리적인 설비 손상이나 제조 공정의 전면 중단을 야기할 수 있습니다. 이는 핵심 인프라 보안에 있어 가용성과 무결성 모두에 치명적인 영향을 미치는 사안입니다. [Recommendations] 관리자는 즉시 영향을 받는 장비의 펌웨어를 최신 버전인 v6.30.2313 이상으로 업데이트해야 합니다. 또한, 제어 네트워크를 인터넷으로부터 논리적으로 격리하고, 원격 접속 시 반드시 보안이 강화된 VPN과 다요소 인증(MFA)을 적용할 것을 권고합니다. 심층 방어 전략에 따라 방화벽을 통한 불필요한 포트 차단과 지속적인 트래픽 모니터링이 병행되어야 합니다.

**Severity**: HIGH (8.1/10)
**Tags**: ICS/OT Security, Authentication Bypass, Trane Tracer, CISA Advisory, CWE-327

## Analysis
[Executive Overview] Trane의 건물 자동화 컨트롤러 제품군인 Tracer SC, Tracer SC+, 그리고 Tracer Concierge에서 루트 권한 획득 및 서비스 거부(DoS)를 유발할 수 있는 다수의 보안 취약점이 발견되었습니다. 해당 장비들은 전 세계 핵심 제조 시설의 에너지 및 환경 제어 시스템에 널리 배포되어 있으며, 공격자가 이를 악용할 경우 산업 제어 시스템(ICS) 환경에 심각한 운영 중단을 초래할 수 있습니다. [Threat Analysis] 이번에 식별된 취약점들은 취약한 암호화 알고리즘(CVE-2026-28252), 과도한 메모리 할당(CVE-2026-28253), 하드코딩된 자격 증명(CVE-2026-28255) 등 다양한 공격 벡터를 포함합니다. 공격자는 이를 통해 인증 과정을 우회하고 장치에 대한 루트 수준의 접근 권한을 획득하거나, 조작된 요청을 전송하여 시스템을 마비시킬 수 있습니다. 특히 인증되지 않은 외부 공격자가 네트워크를 통해 접근 가능한 경우 그 위험성이 극대화됩니다. [Impact Assessment] 취약점 노출 시 공격자는 관리자 계정을 탈취하거나 민감한 운영 데이터를 유출할 수 있으며, 최악의 경우 HVAC 시스템의 제어권을 장악하여 물리적인 설비 손상이나 제조 공정의 전면 중단을 야기할 수 있습니다. 이는 핵심 인프라 보안에 있어 가용성과 무결성 모두에 치명적인 영향을 미치는 사안입니다. [Recommendations] 관리자는 즉시 영향을 받는 장비의 펌웨어를 최신 버전인 v6.30.2313 이상으로 업데이트해야 합니다. 또한, 제어 네트워크를 인터넷으로부터 논리적으로 격리하고, 원격 접속 시 반드시 보안이 강화된 VPN과 다요소 인증(MFA)을 적용할 것을 권고합니다. 심층 방어 전략에 따라 방화벽을 통한 불필요한 포트 차단과 지속적인 트래픽 모니터링이 병행되어야 합니다.


## References
1. CISA, ICSA-26-071-01: Trane Tracer SC, Tracer SC+, and Tracer Concierge, 2026
2. CVE-2026-28252
3. MITRE ATT&CK for ICS: T0812 (Default Credentials)
4. Noam Moshe et al., "Security Vulnerabilities in Industrial Building Automation Systems", Claroty Team82 Research, 2026
5. NIST SP 800-82 Rev. 3, Guide to Industrial Control Systems (ICS) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-071-01)
    