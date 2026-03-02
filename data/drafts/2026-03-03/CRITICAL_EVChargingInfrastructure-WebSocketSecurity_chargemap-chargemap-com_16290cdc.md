
# Chargemap chargemap.com

> Executive Overview: 프랑스의 전기차(EV) 충전 서비스 기업인 Chargemap의 플랫폼에서 관리자 권한 탈취 및 서비스 거부(DoS)를 유발할 수 있는 다수의 취약점이 발견되었습니다. 이 결함은 에너지 및 교통 시스템과 같은 국가 중요 인프라에 심각한 위협이 되며, 전 세계적으로 배포된 충전 스테이션의 가용성과 데이터 무결성을 훼손할 수 있는 잠재력을 지니고 있습니다. 특히 제조사가 CISA의 보안 조정 요청에 응답하지 않아 공식 패치가 부재한 상황이므로 위협의 시급성이 높습니다.

Threat Analysis: 주요 위협 벡터는 WebSocket 엔드포인트의 인증 결여(CVE-2026-25851)입니다. 공격자는 웹 기반 매핑 플랫폼을 통해 공개된 충전 스테이션 식별자(CVE-2026-20791)를 획득한 후, OCPP 프로토콜을 사용하는 백엔드 시스템에 정상적인 충전기로 위장하여 접속할 수 있습니다. 또한 세션 식별자 예측이 가능해 세션 하이재킹(CVE-2026-25711)이 용이하며, 인증 시도 횟수 제한 부재(CVE-2026-20792)로 인해 무차별 대입 공격 및 DoS 공격에 노출되어 있습니다.

Impact Assessment: 취약점 악용 성공 시 공격자는 충전 인프라에 대한 비인가 관리 제어권을 획득할 수 있습니다. 이는 충전 데이터 조작, 허위 정보 보고, 그리고 물리적인 충전 서비스의 전면 중단으로 이어질 수 있습니다. 에너지 섹터와 밀접하게 연결된 산업 특성상, 공격자가 충전기 네트워크를 통해 상위 전력망 제어 시스템으로 침투를 시도할 가능성도 존재하며 이는 광범위한 사회적 혼란을 야기할 수 있습니다.

Recommendations: 현재 제조사의 보안 업데이트가 없으므로, 자산 운영자는 즉각적인 방어 조치를 시행해야 합니다. 제어 시스템을 공용 인터넷에서 격리하고 방화벽 및 VPN을 통한 엄격한 접근 제어를 적용해야 합니다. 또한 CISA의 ICS 방어 전략(ICS-TIP-12-146-01B)에 따라 심층 방어(Defense-in-Depth) 체계를 구축하고, 비정상적인 네트워크 트래픽 및 WebSocket 세션 생성에 대한 실시간 모니터링을 강화할 것을 권고합니다.

**Severity**: CRITICAL (9.4/10)
**Tags**: EV Charging Infrastructure, WebSocket Security, Broken Authentication, Critical Infrastructure, ICS/SCADA

## Analysis
Executive Overview: 프랑스의 전기차(EV) 충전 서비스 기업인 Chargemap의 플랫폼에서 관리자 권한 탈취 및 서비스 거부(DoS)를 유발할 수 있는 다수의 취약점이 발견되었습니다. 이 결함은 에너지 및 교통 시스템과 같은 국가 중요 인프라에 심각한 위협이 되며, 전 세계적으로 배포된 충전 스테이션의 가용성과 데이터 무결성을 훼손할 수 있는 잠재력을 지니고 있습니다. 특히 제조사가 CISA의 보안 조정 요청에 응답하지 않아 공식 패치가 부재한 상황이므로 위협의 시급성이 높습니다.

Threat Analysis: 주요 위협 벡터는 WebSocket 엔드포인트의 인증 결여(CVE-2026-25851)입니다. 공격자는 웹 기반 매핑 플랫폼을 통해 공개된 충전 스테이션 식별자(CVE-2026-20791)를 획득한 후, OCPP 프로토콜을 사용하는 백엔드 시스템에 정상적인 충전기로 위장하여 접속할 수 있습니다. 또한 세션 식별자 예측이 가능해 세션 하이재킹(CVE-2026-25711)이 용이하며, 인증 시도 횟수 제한 부재(CVE-2026-20792)로 인해 무차별 대입 공격 및 DoS 공격에 노출되어 있습니다.

Impact Assessment: 취약점 악용 성공 시 공격자는 충전 인프라에 대한 비인가 관리 제어권을 획득할 수 있습니다. 이는 충전 데이터 조작, 허위 정보 보고, 그리고 물리적인 충전 서비스의 전면 중단으로 이어질 수 있습니다. 에너지 섹터와 밀접하게 연결된 산업 특성상, 공격자가 충전기 네트워크를 통해 상위 전력망 제어 시스템으로 침투를 시도할 가능성도 존재하며 이는 광범위한 사회적 혼란을 야기할 수 있습니다.

Recommendations: 현재 제조사의 보안 업데이트가 없으므로, 자산 운영자는 즉각적인 방어 조치를 시행해야 합니다. 제어 시스템을 공용 인터넷에서 격리하고 방화벽 및 VPN을 통한 엄격한 접근 제어를 적용해야 합니다. 또한 CISA의 ICS 방어 전략(ICS-TIP-12-146-01B)에 따라 심층 방어(Defense-in-Depth) 체계를 구축하고, 비정상적인 네트워크 트래픽 및 WebSocket 세션 생성에 대한 실시간 모니터링을 강화할 것을 권고합니다.


## References
1. CISA Advisory ICSA-26-057-05: Chargemap chargemap.com, 2026
2. CVE-2026-25851
3. CVE-2026-20792
4. MITRE ATT&CK: T1190 - Exploit Public-Facing Application
5. G. G. Dagher et al., Security of the Electric Vehicle Charging Infrastructure: Vulnerabilities and Attack Scenarios, IEEE, 2021
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-057-05)
    