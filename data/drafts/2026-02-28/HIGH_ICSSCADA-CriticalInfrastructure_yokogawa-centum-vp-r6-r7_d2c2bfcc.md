
# Yokogawa CENTUM VP R6, R7

> Executive Overview: 글로벌 산업 자동화 선도 기업인 Yokogawa의 분산 제어 시스템(DCS) CENTUM VP R6 및 R7 버전에서 중대한 보안 취약점이 발견되었습니다. 해당 시스템은 전 세계 에너지, 제조, 농업 등 국가 핵심 인프라의 공정 제어를 담당하고 있어, 취약점 악용 시 산업 현장의 가동 중단이나 물리적 안전 사고로 이어질 가능성이 큽니다. Threat Analysis: 이번 보고된 6개의 취약점(CVE-2025-1924 포함)은 Vnet/IP 소프트웨어 스택이 조작된 네트워크 패킷을 처리할 때 발생합니다. 주요 기술적 결함으로는 경계 외 쓰기(CWE-787), 도달 가능한 어설션(CWE-617), 정수 언더플로우(CWE-191) 등이 식별되었습니다. 공격자는 인접 네트워크에서 악성 패킷을 주입하여 제어 통신 프로세스를 강제 종료(DoS)하거나 특정 환경에서 임의 코드를 실행(ACE)할 수 있습니다. Impact Assessment: 취약점이 노출된 Vnet/IP 인터페이스 패키지는 DCS의 핵심 통신 경로를 담당하므로, 공격 성공 시 공정 모니터링 기능 상실 및 제어 명령 전달 불능 상태에 빠질 수 있습니다. 이는 생산 라인의 중단뿐만 아니라 고위험 공정의 제어권 상실로 인한 심각한 경제적 피해와 인명 사고를 초래할 수 있는 위협입니다. Recommendations: 자산 운영자는 Yokogawa에서 배포한 최신 보안 패치(R1.08.00)를 즉시 적용해야 합니다. 패치 적용 전까지는 제어 네트워크를 인터넷과 완전히 격리하고, 비즈니스 망과의 접점에 강력한 방화벽을 구성하는 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다. 또한 원격 접속 시 보안이 강화된 VPN을 사용하고 트래픽 이상 징후를 실시간으로 모니터링할 것을 권고합니다.

**Severity**: HIGH (7.5/10)
**Tags**: ICS/SCADA, Critical Infrastructure, Vnet/IP, Dos, Yokogawa

## Analysis
Executive Overview: 글로벌 산업 자동화 선도 기업인 Yokogawa의 분산 제어 시스템(DCS) CENTUM VP R6 및 R7 버전에서 중대한 보안 취약점이 발견되었습니다. 해당 시스템은 전 세계 에너지, 제조, 농업 등 국가 핵심 인프라의 공정 제어를 담당하고 있어, 취약점 악용 시 산업 현장의 가동 중단이나 물리적 안전 사고로 이어질 가능성이 큽니다. Threat Analysis: 이번 보고된 6개의 취약점(CVE-2025-1924 포함)은 Vnet/IP 소프트웨어 스택이 조작된 네트워크 패킷을 처리할 때 발생합니다. 주요 기술적 결함으로는 경계 외 쓰기(CWE-787), 도달 가능한 어설션(CWE-617), 정수 언더플로우(CWE-191) 등이 식별되었습니다. 공격자는 인접 네트워크에서 악성 패킷을 주입하여 제어 통신 프로세스를 강제 종료(DoS)하거나 특정 환경에서 임의 코드를 실행(ACE)할 수 있습니다. Impact Assessment: 취약점이 노출된 Vnet/IP 인터페이스 패키지는 DCS의 핵심 통신 경로를 담당하므로, 공격 성공 시 공정 모니터링 기능 상실 및 제어 명령 전달 불능 상태에 빠질 수 있습니다. 이는 생산 라인의 중단뿐만 아니라 고위험 공정의 제어권 상실로 인한 심각한 경제적 피해와 인명 사고를 초래할 수 있는 위협입니다. Recommendations: 자산 운영자는 Yokogawa에서 배포한 최신 보안 패치(R1.08.00)를 즉시 적용해야 합니다. 패치 적용 전까지는 제어 네트워크를 인터넷과 완전히 격리하고, 비즈니스 망과의 접점에 강력한 방화벽을 구성하는 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다. 또한 원격 접속 시 보안이 강화된 VPN을 사용하고 트래픽 이상 징후를 실시간으로 모니터링할 것을 권고합니다.


## References
1. CISA Advisory ICSA-26-057-09, Yokogawa CENTUM VP R6 R7, 2026
2. CVE-2025-1924
3. MITRE ATT&CK: T0881 (Service Stop)
4. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, NIST, 2023
5. Yokogawa Security Advisory YSAR-26-0002, 2026
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-09)
    