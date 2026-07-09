
# OpenPLC v3

> [Executive Overview] 전 세계 주요 인프라(제조, 에너지, 운송 등)에서 널리 사용되는 오픈 소스 논리 제어 장치인 OpenPLC v3에서 심각한 원격 코드 실행(RCE) 취약점이 발견되었습니다. 이 취약점(CVE-2026-14480)은 인증된 공격자가 시스템 권한을 획득하고 물리적 공정을 제어할 수 있는 위험을 내포하고 있어, 산업 제어 시스템(ICS) 환경에 막대한 위협이 됩니다.

[Threat Analysis] 기술적으로 이 문제는 레거시 웹 UI의 프로그램 업로드 워크플로우 내에서 파일 경로 검증이 미흡하여 발생합니다(CWE-73). 공격자가 파일 이름 필드(prog_file)에 절대 경로를 삽입할 경우, Python의 os.path.join() 함수가 이를 그대로 수용하여 임의의 위치에 파일을 작성할 수 있게 됩니다. 특히 OpenPLC의 빌드 파이프라인이 런타임 코어 디렉토리 내의 모든 .cpp 파일을 자동으로 컴파일한다는 점을 악용하여, 악성 소스 코드를 주입하고 정상적인 컴파일 과정을 통해 네이티브 코드를 실행하는 공격 기법을 사용합니다.

[Impact Assessment] 해당 취약점은 CVSS 9.9의 치명적인 점수를 기록하고 있으며, 공격 성공 시 OpenPLC 런타임 사용자 권한으로 코드를 실행할 수 있습니다. 이는 PLC가 제어하는 실제 산업 현장의 가동 중단, 장비 파손 또는 전체 OT 네트워크로의 측면 이동(Lateral Movement)으로 이어질 수 있습니다. 특히 OpenPLC v3가 단종(EOL) 상태여서 보안 패치가 제공되지 않는다는 점이 위험을 가중시킵니다.

[Recommendations] 가장 확실한 대응책은 보안 업데이트가 지원되는 OpenPLC v4로 즉시 업그레이드하는 것입니다. 즉각적인 업그레이드가 불가능한 환경에서는 제어 시스템 네트워크를 업무 망 및 외부 인터넷으로부터 완전히 격리하고, 원격 접속이 필요한 경우 반드시 보안이 강화된 VPN을 사용해야 합니다. 또한, CISA의 권고에 따라 방화벽을 통한 네트워크 세분화 및 불필요한 네트워크 노출 최소화 전략을 수립해야 합니다.

**Severity**: CRITICAL (9.9/10)
**Tags**: ICS/SCADA, RCE, OpenPLC, Industrial Security, CVE-2026-14480

## Analysis
[Executive Overview] 전 세계 주요 인프라(제조, 에너지, 운송 등)에서 널리 사용되는 오픈 소스 논리 제어 장치인 OpenPLC v3에서 심각한 원격 코드 실행(RCE) 취약점이 발견되었습니다. 이 취약점(CVE-2026-14480)은 인증된 공격자가 시스템 권한을 획득하고 물리적 공정을 제어할 수 있는 위험을 내포하고 있어, 산업 제어 시스템(ICS) 환경에 막대한 위협이 됩니다.

[Threat Analysis] 기술적으로 이 문제는 레거시 웹 UI의 프로그램 업로드 워크플로우 내에서 파일 경로 검증이 미흡하여 발생합니다(CWE-73). 공격자가 파일 이름 필드(prog_file)에 절대 경로를 삽입할 경우, Python의 os.path.join() 함수가 이를 그대로 수용하여 임의의 위치에 파일을 작성할 수 있게 됩니다. 특히 OpenPLC의 빌드 파이프라인이 런타임 코어 디렉토리 내의 모든 .cpp 파일을 자동으로 컴파일한다는 점을 악용하여, 악성 소스 코드를 주입하고 정상적인 컴파일 과정을 통해 네이티브 코드를 실행하는 공격 기법을 사용합니다.

[Impact Assessment] 해당 취약점은 CVSS 9.9의 치명적인 점수를 기록하고 있으며, 공격 성공 시 OpenPLC 런타임 사용자 권한으로 코드를 실행할 수 있습니다. 이는 PLC가 제어하는 실제 산업 현장의 가동 중단, 장비 파손 또는 전체 OT 네트워크로의 측면 이동(Lateral Movement)으로 이어질 수 있습니다. 특히 OpenPLC v3가 단종(EOL) 상태여서 보안 패치가 제공되지 않는다는 점이 위험을 가중시킵니다.

[Recommendations] 가장 확실한 대응책은 보안 업데이트가 지원되는 OpenPLC v4로 즉시 업그레이드하는 것입니다. 즉각적인 업그레이드가 불가능한 환경에서는 제어 시스템 네트워크를 업무 망 및 외부 인터넷으로부터 완전히 격리하고, 원격 접속이 필요한 경우 반드시 보안이 강화된 VPN을 사용해야 합니다. 또한, CISA의 권고에 따라 방화벽을 통한 네트워크 세분화 및 불필요한 네트워크 노출 최소화 전략을 수립해야 합니다.


## References
1. CISA, ICSA-26-190-01: OpenPLC v3, 2026
2. CVE-2026-14480
3. MITRE ATT&CK: T0843 (Program Download)
4. M. McLaughlin et al., The Case for PLC Security, IEEE Security & Privacy, 2016
5. NIST SP 800-82 Rev. 3, Guide to Operational Technology (OT) Security, 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-190-01)
    