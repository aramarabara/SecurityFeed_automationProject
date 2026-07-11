
# URGENT - Progress Tells ShareFile Customers to Shut Down Storage Zone Controllers Over Security Threat

> [Executive Overview] Progress Software는 ShareFile의 Storage Zone Controller(SZC)를 운영하는 고객들에게 윈도우 서버를 즉시 종료할 것을 권고했습니다. 이는 '신뢰할 수 있는 외부 보안 위협'에 대응하기 위한 조치로, 기업의 데이터 무결성과 가용성에 직접적인 타격을 줄 수 있는 긴급한 상황입니다. [Threat Analysis] 해당 위협은 SZC의 취약점을 악용하여 공격자가 기업 내부 네트워크나 클라우드 저장소에 무단으로 접근할 수 있게 합니다. 과거 CVE-2023-24489와 같은 사례를 비추어 볼 때, 인증되지 않은 원격 코드 실행(RCE)이나 파일 조작 가능성이 큽니다. 현재 Progress 측은 조사가 진행되는 동안 선제적으로 계정 액세스를 차단한 상태입니다. [Impact Assessment] SZC를 사용하는 모든 고객사가 잠재적 공격 대상이며, 공격 성공 시 기밀 문서 유출 및 랜섬웨어 배포를 위한 거점으로 활용될 수 있습니다. 특히 온프레미스 저장소를 직접 관리하는 대규모 엔터프라이즈 환경에서 그 피해가 극대화될 것으로 예상됩니다. [Recommendations] 조직은 즉시 모든 SZC 서버를 오프라인으로 전환하고 Progress의 향후 업데이트를 주시해야 합니다. 서버 종료 전후의 네트워크 트래픽과 로그를 분석하여 이상 징후를 파악하고, EDR(Endpoint Detection and Response) 솔루션을 통해 시스템 내 잔존 위협을 점검할 것을 강력히 권고합니다.

**Severity**: CRITICAL (8.8/10)
**Tags**: Progress ShareFile, Remote Code Execution, Zero-day, Data Breach

## Analysis
[Executive Overview] Progress Software는 ShareFile의 Storage Zone Controller(SZC)를 운영하는 고객들에게 윈도우 서버를 즉시 종료할 것을 권고했습니다. 이는 '신뢰할 수 있는 외부 보안 위협'에 대응하기 위한 조치로, 기업의 데이터 무결성과 가용성에 직접적인 타격을 줄 수 있는 긴급한 상황입니다. [Threat Analysis] 해당 위협은 SZC의 취약점을 악용하여 공격자가 기업 내부 네트워크나 클라우드 저장소에 무단으로 접근할 수 있게 합니다. 과거 CVE-2023-24489와 같은 사례를 비추어 볼 때, 인증되지 않은 원격 코드 실행(RCE)이나 파일 조작 가능성이 큽니다. 현재 Progress 측은 조사가 진행되는 동안 선제적으로 계정 액세스를 차단한 상태입니다. [Impact Assessment] SZC를 사용하는 모든 고객사가 잠재적 공격 대상이며, 공격 성공 시 기밀 문서 유출 및 랜섬웨어 배포를 위한 거점으로 활용될 수 있습니다. 특히 온프레미스 저장소를 직접 관리하는 대규모 엔터프라이즈 환경에서 그 피해가 극대화될 것으로 예상됩니다. [Recommendations] 조직은 즉시 모든 SZC 서버를 오프라인으로 전환하고 Progress의 향후 업데이트를 주시해야 합니다. 서버 종료 전후의 네트워크 트래픽과 로그를 분석하여 이상 징후를 파악하고, EDR(Endpoint Detection and Response) 솔루션을 통해 시스템 내 잔존 위협을 점검할 것을 강력히 권고합니다.


## References
1. CVE-2023-24489
2. MITRE ATT&CK: T1190
3. CISA, Alert (AA23-215A): 2022 Top Exploited Vulnerabilities, 2023
4. Progress Software, ShareFile Security Update Advisory, 2024
## Original Source
[The Hacker News](https://thehackernews.com/2026/07/urgent-progress-tells-sharefile.html)
    