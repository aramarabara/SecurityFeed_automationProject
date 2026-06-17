
# Rockwell Automation Logix 5370 & 5570 Controllers Vulnerable To Denial of Service Via CIP

> Executive Overview: Rockwell Automation의 Logix 5370 및 5570 컨트롤러 시리즈에서 발견된 CVE-2026-11317 취약점은 산업 제어 시스템(ICS)의 가용성을 심각하게 위협하는 요소입니다. 전 세계 제조 현장에서 광범위하게 사용되는 이 장치들은 CIP(Common Industrial Protocol) 통신을 통해 제어 명령을 주고받는데, 이 과정에서 발생하는 취약점은 기반 시설의 운영 중단을 야기할 수 있습니다. Threat Analysis: 이 취약점은 특수하게 조작된 CIP 메시지를 수신할 때 발생하는 자원 관리 오류(CWE-404)에 기인합니다. 공격자가 네트워크를 통해 해당 메시지를 전송하면 장치는 '치명적 비복구 오류(MNRF)' 상태로 진입합니다. 특히 메모리 자원이 제한적인 환경일수록 공격에 더 취약하며, 공격 성공 시 단순한 장치 재시작만으로는 서비스 복구가 불가능하다는 특징이 있습니다. Impact Assessment: 영향권에 있는 장치들은 전 세계 제조 및 에너지 산업의 핵심 로직을 담당하고 있습니다. MNRF 상태가 발생하면 제어 로직이 완전히 중단되어 생산 공정이 멈추게 되며, 관리자가 직접 프로그램을 재다운로드해야만 정상화가 가능합니다. 이는 단순 가동 중단을 넘어 복구 과정에서의 운영 비용과 시간 손실을 극대화합니다. Recommendations: 가장 시급한 조치는 각 모델별로 벤더가 배포한 최신 보안 패치(예: CompactLogix 5370 v34.016 이상)를 적용하는 것입니다. 또한, 산업용 네트워크를 기업망에서 분리(Air-gapping)하고, 포트 차단 및 심층 패킷 분석(DPI)을 통해 비정상적인 CIP 트래픽을 모니터링하는 방어 심층 전략(Defense-in-Depth)이 필요합니다.

**Severity**: HIGH (7.5/10)
**Tags**: ICS/OT Security, Rockwell Automation, CVE-2026-11317, Denial of Service, CIP Protocol

## Analysis
Executive Overview: Rockwell Automation의 Logix 5370 및 5570 컨트롤러 시리즈에서 발견된 CVE-2026-11317 취약점은 산업 제어 시스템(ICS)의 가용성을 심각하게 위협하는 요소입니다. 전 세계 제조 현장에서 광범위하게 사용되는 이 장치들은 CIP(Common Industrial Protocol) 통신을 통해 제어 명령을 주고받는데, 이 과정에서 발생하는 취약점은 기반 시설의 운영 중단을 야기할 수 있습니다. Threat Analysis: 이 취약점은 특수하게 조작된 CIP 메시지를 수신할 때 발생하는 자원 관리 오류(CWE-404)에 기인합니다. 공격자가 네트워크를 통해 해당 메시지를 전송하면 장치는 '치명적 비복구 오류(MNRF)' 상태로 진입합니다. 특히 메모리 자원이 제한적인 환경일수록 공격에 더 취약하며, 공격 성공 시 단순한 장치 재시작만으로는 서비스 복구가 불가능하다는 특징이 있습니다. Impact Assessment: 영향권에 있는 장치들은 전 세계 제조 및 에너지 산업의 핵심 로직을 담당하고 있습니다. MNRF 상태가 발생하면 제어 로직이 완전히 중단되어 생산 공정이 멈추게 되며, 관리자가 직접 프로그램을 재다운로드해야만 정상화가 가능합니다. 이는 단순 가동 중단을 넘어 복구 과정에서의 운영 비용과 시간 손실을 극대화합니다. Recommendations: 가장 시급한 조치는 각 모델별로 벤더가 배포한 최신 보안 패치(예: CompactLogix 5370 v34.016 이상)를 적용하는 것입니다. 또한, 산업용 네트워크를 기업망에서 분리(Air-gapping)하고, 포트 차단 및 심층 패킷 분석(DPI)을 통해 비정상적인 CIP 트래픽을 모니터링하는 방어 심층 전략(Defense-in-Depth)이 필요합니다.


## References
1. CVE-2026-11317
2. CISA Advisory ICSA-26-167-03, Rockwell Automation Logix 5370 and 5570 Controllers, 2026
3. Rockwell Automation Security Advisory SD1772
4. MITRE ATT&CK: T0814 - Denial of Service
5. CWE-404: Improper Resource Shutdown or Release
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-167-03)
    