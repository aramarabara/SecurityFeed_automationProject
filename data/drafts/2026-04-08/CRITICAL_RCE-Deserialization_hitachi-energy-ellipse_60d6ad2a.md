
# Hitachi Energy Ellipse

> [Executive Overview] Hitachi Energy의 자산 관리 및 전사적 자원 관리(ERP) 솔루션인 Ellipse에서 매우 심각한 수준의 원격 코드 실행(RCE) 취약점이 발견되었습니다. 이 취약점은 전 세계 핵심 제조 및 인프라 시설에서 사용되는 산업 제어 시스템(ICS) 환경에 직접적인 위협을 가하며, 타사 구성 요소인 Jasper Report 라이브러리의 보안 결함으로 인해 발생했습니다. [Threat Analysis] 본 취약점(CVE-2025-10492)은 CWE-502(신뢰할 수 없는 데이터의 역직렬화)로 분류됩니다. Jaspersoft 라이브러리 내에서 외부 데이터를 부적절하게 처리함에 따라, 공격자는 인증 없이도 특수하게 조작된 데이터를 전송하여 대상 시스템에서 임의의 코드를 실행할 수 있습니다. CVSS 점수 9.8에서 알 수 있듯이, 공격의 복잡성이 낮고 원격에서 네트워크를 통해 즉시 실행 가능하다는 점이 기술적인 핵심입니다. [Impact Assessment] Ellipse 버전 9.0.50 및 그 이전 버전을 사용하는 전 세계 모든 중요 제조 시설이 영향권에 있습니다. 공격자가 이 취약점을 악용할 경우 시스템 제어권을 완전히 획득할 수 있으며, 이는 산업 자산 데이터의 탈취, 랜섬웨어 유포, 또는 물리적 생산 공정의 중단으로 이어질 수 있는 파괴적인 잠재력을 가지고 있습니다. [Recommendations] 즉각적인 조치로 시스템 관리자가 생성한 신뢰할 수 있는 보고서 외에 외부 사용자가 생성한 사용자 지정 Jasper 보고서의 로딩을 엄격히 제한해야 합니다. 또한, CISA의 권고에 따라 ICS 네트워크를 인터넷으로부터 물리적 또는 논리적으로 격리하고, VPN 사용 시 최신 보안 패치를 적용하며 방화벽을 통해 노출된 포트를 최소화하는 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다.

**Severity**: CRITICAL (9.8/10)
**Tags**: RCE, Deserialization, ICS/OT, CVE-2025-10492, Hitachi Energy

## Analysis
[Executive Overview] Hitachi Energy의 자산 관리 및 전사적 자원 관리(ERP) 솔루션인 Ellipse에서 매우 심각한 수준의 원격 코드 실행(RCE) 취약점이 발견되었습니다. 이 취약점은 전 세계 핵심 제조 및 인프라 시설에서 사용되는 산업 제어 시스템(ICS) 환경에 직접적인 위협을 가하며, 타사 구성 요소인 Jasper Report 라이브러리의 보안 결함으로 인해 발생했습니다. [Threat Analysis] 본 취약점(CVE-2025-10492)은 CWE-502(신뢰할 수 없는 데이터의 역직렬화)로 분류됩니다. Jaspersoft 라이브러리 내에서 외부 데이터를 부적절하게 처리함에 따라, 공격자는 인증 없이도 특수하게 조작된 데이터를 전송하여 대상 시스템에서 임의의 코드를 실행할 수 있습니다. CVSS 점수 9.8에서 알 수 있듯이, 공격의 복잡성이 낮고 원격에서 네트워크를 통해 즉시 실행 가능하다는 점이 기술적인 핵심입니다. [Impact Assessment] Ellipse 버전 9.0.50 및 그 이전 버전을 사용하는 전 세계 모든 중요 제조 시설이 영향권에 있습니다. 공격자가 이 취약점을 악용할 경우 시스템 제어권을 완전히 획득할 수 있으며, 이는 산업 자산 데이터의 탈취, 랜섬웨어 유포, 또는 물리적 생산 공정의 중단으로 이어질 수 있는 파괴적인 잠재력을 가지고 있습니다. [Recommendations] 즉각적인 조치로 시스템 관리자가 생성한 신뢰할 수 있는 보고서 외에 외부 사용자가 생성한 사용자 지정 Jasper 보고서의 로딩을 엄격히 제한해야 합니다. 또한, CISA의 권고에 따라 ICS 네트워크를 인터넷으로부터 물리적 또는 논리적으로 격리하고, VPN 사용 시 최신 보안 패치를 적용하며 방화벽을 통해 노출된 포트를 최소화하는 심층 방어(Defense-in-Depth) 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-092-03: Hitachi Energy Ellipse, 2026
2. CVE-2025-10492
3. MITRE ATT&CK: T1190 (Exploit Public-Facing Application)
4. Frohoff and Schwenk, Marshalling Pickles: how deserialization objects can lead to remote code execution, AppSecCali, 2015
5. NIST NVD, CWE-502: Deserialization of Untrusted Data, 2025
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-092-03)
    