
# AISURU/Kimwolf Botnet Launches Record-Setting 31.4 Tbps DDoS Attack

> [Executive Overview] 2025년 4분기, AISURU/Kimwolf 봇넷에 의한 31.4 Tbps 규모의 기록적인 초고용량(Hyper-volumetric) HTTP DDoS 공격이 발생했습니다. Cloudflare에 의해 탐지 및 완화된 이 공격은 불과 35초라는 짧은 시간 동안 진행되었으나, 단일 공격으로는 역사상 최대 규모를 기록하며 현대 네트워크 인프라에 대한 위협 수위가 새로운 국면에 접어들었음을 보여주었습니다.[Threat Analysis] AISURU/Kimwolf 봇넷은 고성능 서버와 대규모 IoT 기기를 결합한 하이브리드 인프라를 활용하여 공격 효율을 극대화했습니다. 특히 이번 공격은 HTTP/2 및 HTTP/3 프로토콜의 멀티플렉싱 특성을 악용하여 단시간에 폭발적인 트래픽을 생성하는 '버스트(Burst)' 방식을 채택했습니다. 이는 기존의 점진적 임계치 기반 탐지 로직을 우회하고, 방어 시스템이 반응하기 전에 목표 서버의 가용 자원을 즉각적으로 고갈시키는 고도로 정교화된 기술력을 시사합니다.[Impact Assessment] 31.4 Tbps에 달하는 공격 트래픽은 개별 기업의 보안 장비뿐만 아니라 국가적 수준의 인터넷 교환 지점(IXP) 및 상위 인터넷 서비스 제공업체(ISP)의 백본 대역폭까지 위협할 수 있는 수준입니다. 서비스 중단으로 인한 직접적인 경제적 손실은 물론, 금융 및 의료와 같은 필수 서비스 인프라가 공격 대상이 될 경우 심각한 사회적 혼란과 안전상의 문제를 야기할 가능성이 매우 높습니다.[Recommendations] 기업은 대규모 트래픽을 수용하고 분산 처리할 수 있는 클라우드 기반 자동 DDoS 완화 솔루션을 반드시 도입해야 합니다. 또한, 최신 HTTP 취약점에 대응하기 위해 웹 서버 및 로드 밸런서의 패치를 최신 상태로 유지하고, AI 기반의 실시간 트래픽 분석 시스템을 통해 비정상적인 버스트 트래픽에 대한 즉각적인 차단 정책을 수립해야 합니다. 인프라 측면에서는 상위 ISP와의 긴밀한 협력을 통한 업스트림 필터링 체계를 구축할 것을 권고합니다.

**Severity**: CRITICAL (9.5/10)
**Tags**: DDoS, Botnet, Hyper-volumetric, Network Infrastructure, HTTP/2 Rapid Reset

## Analysis
[Executive Overview] 2025년 4분기, AISURU/Kimwolf 봇넷에 의한 31.4 Tbps 규모의 기록적인 초고용량(Hyper-volumetric) HTTP DDoS 공격이 발생했습니다. Cloudflare에 의해 탐지 및 완화된 이 공격은 불과 35초라는 짧은 시간 동안 진행되었으나, 단일 공격으로는 역사상 최대 규모를 기록하며 현대 네트워크 인프라에 대한 위협 수위가 새로운 국면에 접어들었음을 보여주었습니다.[Threat Analysis] AISURU/Kimwolf 봇넷은 고성능 서버와 대규모 IoT 기기를 결합한 하이브리드 인프라를 활용하여 공격 효율을 극대화했습니다. 특히 이번 공격은 HTTP/2 및 HTTP/3 프로토콜의 멀티플렉싱 특성을 악용하여 단시간에 폭발적인 트래픽을 생성하는 '버스트(Burst)' 방식을 채택했습니다. 이는 기존의 점진적 임계치 기반 탐지 로직을 우회하고, 방어 시스템이 반응하기 전에 목표 서버의 가용 자원을 즉각적으로 고갈시키는 고도로 정교화된 기술력을 시사합니다.[Impact Assessment] 31.4 Tbps에 달하는 공격 트래픽은 개별 기업의 보안 장비뿐만 아니라 국가적 수준의 인터넷 교환 지점(IXP) 및 상위 인터넷 서비스 제공업체(ISP)의 백본 대역폭까지 위협할 수 있는 수준입니다. 서비스 중단으로 인한 직접적인 경제적 손실은 물론, 금융 및 의료와 같은 필수 서비스 인프라가 공격 대상이 될 경우 심각한 사회적 혼란과 안전상의 문제를 야기할 가능성이 매우 높습니다.[Recommendations] 기업은 대규모 트래픽을 수용하고 분산 처리할 수 있는 클라우드 기반 자동 DDoS 완화 솔루션을 반드시 도입해야 합니다. 또한, 최신 HTTP 취약점에 대응하기 위해 웹 서버 및 로드 밸런서의 패치를 최신 상태로 유지하고, AI 기반의 실시간 트래픽 분석 시스템을 통해 비정상적인 버스트 트래픽에 대한 즉각적인 차단 정책을 수립해야 합니다. 인프라 측면에서는 상위 ISP와의 긴밀한 협력을 통한 업스트림 필터링 체계를 구축할 것을 권고합니다.


## References
1. Cloudflare, Cloudflare Global Threat Report: Q4 2025, Cloudflare Blog, 2025
2. MITRE ATT&CK: T1498.001 (Network Denial of Service: Direct Cloud Flood)
3. CVE-2023-44487 (HTTP/2 Rapid Reset Attack)
4. Bertino et al., Botnets and IoT: The New Frontier of DDoS Attacks, IEEE Communications Surveys & Tutorials, 2023
## Original Source
[The Hacker News](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html)
    