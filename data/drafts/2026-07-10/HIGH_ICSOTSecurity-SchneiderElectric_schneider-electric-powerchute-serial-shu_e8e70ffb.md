
# Schneider Electric PowerChute Serial Shutdown

> 슈나이더 일렉트릭(Schneider Electric)의 전원 관리 소프트웨어인 PowerChute Serial Shutdown에서 다수의 보안 취약점이 발견되었습니다. 이 소프트웨어는 에너지, 제조, 헬스케어 등 전 세계 주요 임계 인프라(Critical Infrastructure)에서 UPS 및 전원 장치의 안전한 셧다운을 관리하는 핵심 요소로, 취약점 노출 시 운영 중단과 같은 직접적인 타격을 입을 수 있어 주의가 요구됩니다. 

주요 기술적 위협으로는 경로 탐색(CVE-2026-2399)을 통한 시스템 파일 변조, 과도한 인증 시도 제한 부재(CVE-2026-2402), 그리고 CRLF 인젝션(CVE-2026-2400) 등이 포함됩니다. 공격자는 이를 복합적으로 활용하여 로그 데이터를 위조하거나 시스템 설정을 임의로 수정할 수 있으며, 자원 고갈을 유도하는 서비스 거부(DoS) 공격도 가능합니다. 특히 로그 정보의 삭제나 민감 정보 유출은 공격 후 흔적 제거 및 사후 대응을 어렵게 만드는 기술적 특징을 보입니다.

해당 취약점은 버전 1.4 이하의 모든 설치본에 영향을 미치며, 윈도우 및 리눅스 환경에서 모두 발생합니다. 공격 성공 시 시스템 관리 권한 획득, 자격 증명 재설정, 그리고 감사 데이터의 무결성 훼손으로 이어질 수 있습니다. 이는 물리적 자산의 예기치 못한 셧다운으로 인한 경제적 손실 및 공공 안전 위협을 초래할 수 있는 심각한 위협입니다.

대응 방안으로 관리자는 즉시 PowerChute Serial Shutdown을 최신 보안 패치가 적용된 버전 1.5로 업데이트해야 합니다. 또한, CISA의 권고에 따라 ICS 네트워크를 외부 인터넷으로부터 완전히 격리하고, 방화벽 및 VPN을 통한 엄격한 접근 제어를 실시해야 합니다. 슈나이더 일렉트릭에서 제공하는 보안 핸드북을 참조하여 엔드포인트 하드닝 조치를 병행할 것을 권고합니다.

**Severity**: HIGH (7/10)
**Tags**: ICS/OT Security, Schneider Electric, Path Traversal, CVE-2026-2399, Critical Infrastructure

## Analysis
슈나이더 일렉트릭(Schneider Electric)의 전원 관리 소프트웨어인 PowerChute Serial Shutdown에서 다수의 보안 취약점이 발견되었습니다. 이 소프트웨어는 에너지, 제조, 헬스케어 등 전 세계 주요 임계 인프라(Critical Infrastructure)에서 UPS 및 전원 장치의 안전한 셧다운을 관리하는 핵심 요소로, 취약점 노출 시 운영 중단과 같은 직접적인 타격을 입을 수 있어 주의가 요구됩니다. 

주요 기술적 위협으로는 경로 탐색(CVE-2026-2399)을 통한 시스템 파일 변조, 과도한 인증 시도 제한 부재(CVE-2026-2402), 그리고 CRLF 인젝션(CVE-2026-2400) 등이 포함됩니다. 공격자는 이를 복합적으로 활용하여 로그 데이터를 위조하거나 시스템 설정을 임의로 수정할 수 있으며, 자원 고갈을 유도하는 서비스 거부(DoS) 공격도 가능합니다. 특히 로그 정보의 삭제나 민감 정보 유출은 공격 후 흔적 제거 및 사후 대응을 어렵게 만드는 기술적 특징을 보입니다.

해당 취약점은 버전 1.4 이하의 모든 설치본에 영향을 미치며, 윈도우 및 리눅스 환경에서 모두 발생합니다. 공격 성공 시 시스템 관리 권한 획득, 자격 증명 재설정, 그리고 감사 데이터의 무결성 훼손으로 이어질 수 있습니다. 이는 물리적 자산의 예기치 못한 셧다운으로 인한 경제적 손실 및 공공 안전 위협을 초래할 수 있는 심각한 위협입니다.

대응 방안으로 관리자는 즉시 PowerChute Serial Shutdown을 최신 보안 패치가 적용된 버전 1.5로 업데이트해야 합니다. 또한, CISA의 권고에 따라 ICS 네트워크를 외부 인터넷으로부터 완전히 격리하고, 방화벽 및 VPN을 통한 엄격한 접근 제어를 실시해야 합니다. 슈나이더 일렉트릭에서 제공하는 보안 핸드북을 참조하여 엔드포인트 하드닝 조치를 병행할 것을 권고합니다.


## References
1. CVE-2026-2399
2. CISA Advisory ICSA-26-190-02, Schneider Electric PowerChute Serial Shutdown, 2026
3. Schneider Electric CPCERT, SEVD-2026-104-01: Multiple Vulnerabilities on PowerChute Serial Shutdown, 2026
4. MITRE ATT&CK: T0866 (Exploitation of Remote Services)
5. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-190-02)
    