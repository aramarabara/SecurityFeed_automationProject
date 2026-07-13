
# OpenPLC v3

> ### Executive Overview
OpenPLC v3는 제조, 에너지, 운송 및 수처리 등 핵심 인프라 분야에서 널리 사용되는 오픈 소스 산업 제어 시스템(ICS) 런타임입니다. 최근 발견된 CVE-2026-14480 취약점은 인증된 공격자가 시스템의 파일 시스템에 임의의 파일을 작성하고, 이를 통해 최종적으로 원격 코드 실행(RCE)까지 가능하게 하는 심각한 보안 위협을 초래합니다. 해당 제품이 주요 기반 시설에서 작동한다는 점을 고려할 때, 이 취약점의 악용은 물리적 공정 중단이나 장비 손상과 같은 치명적인 결과로 이어질 수 있습니다.

### Threat Analysis
본 취약점은 레거시 웹 UI의 프로그램 업로드 워크플로우 내에서 발생합니다. 응용 프로그램이 업로드된 파일의 경로를 검증하지 않고 Python의 'os.path.join()' 함수를 사용함에 따라, 공격자는 절대 경로를 조작하여 원하는 위치에 파일을 저장할 수 있는 '임의 파일 쓰기(CWE-73)' 공격을 수행할 수 있습니다. 특히 OpenPLC의 빌드 파이프라인은 코어 디렉토리 내의 모든 C++ 소스 파일을 자동으로 컴파일하므로, 악성 .cpp 파일을 해당 경로에 삽입할 경우 정상적인 컴파일 과정 중에 공격자의 코드가 실행 엔진에 통합되어 실행되게 됩니다.

### Impact Assessment
성공적인 공격이 수행될 경우, 공격자는 OpenPLC 런타임 사용자의 권한으로 임의의 네이티브 코드를 실행할 수 있게 됩니다. 이는 단순한 데이터 유출을 넘어 실제 산업 현장의 PLC 로직을 변경하거나 물리적 하드웨어를 제어하는 결과로 이어질 수 있습니다. 영향을 받는 산업 분야에는 주요 제조 및 에너지 그리드가 포함되어 있어, 국가적 차원의 서비스 가용성 저하 및 안전 사고의 위험성이 매우 높습니다.

### Recommendations
현재 OpenPLC v3는 수명 종료(EOL) 상태로, 보안 패치나 업데이트가 더 이상 제공되지 않습니다. 따라서 최우선적인 권고 사항은 OpenPLC v4로 즉시 업그레이드하는 것입니다. 또한, 제어 시스템을 인터넷으로부터 격리하고 방화벽 뒤에 위치시키는 네트워크 분리 전략이 필수적입니다. 원격 접속이 필요한 경우에는 취약점이 해결된 최신 버전의 VPN을 사용하고, 정기적인 취약점 분석 및 심층 방어(Defense-in-Depth) 전략을 구축해야 합니다.

**Severity**: CRITICAL (9.9/10)
**Tags**: ICS/OT Security, Remote Code Execution, Arbitrary File Write, CVE-2026-14480, Critical Infrastructure

## Analysis
### Executive Overview
OpenPLC v3는 제조, 에너지, 운송 및 수처리 등 핵심 인프라 분야에서 널리 사용되는 오픈 소스 산업 제어 시스템(ICS) 런타임입니다. 최근 발견된 CVE-2026-14480 취약점은 인증된 공격자가 시스템의 파일 시스템에 임의의 파일을 작성하고, 이를 통해 최종적으로 원격 코드 실행(RCE)까지 가능하게 하는 심각한 보안 위협을 초래합니다. 해당 제품이 주요 기반 시설에서 작동한다는 점을 고려할 때, 이 취약점의 악용은 물리적 공정 중단이나 장비 손상과 같은 치명적인 결과로 이어질 수 있습니다.

### Threat Analysis
본 취약점은 레거시 웹 UI의 프로그램 업로드 워크플로우 내에서 발생합니다. 응용 프로그램이 업로드된 파일의 경로를 검증하지 않고 Python의 'os.path.join()' 함수를 사용함에 따라, 공격자는 절대 경로를 조작하여 원하는 위치에 파일을 저장할 수 있는 '임의 파일 쓰기(CWE-73)' 공격을 수행할 수 있습니다. 특히 OpenPLC의 빌드 파이프라인은 코어 디렉토리 내의 모든 C++ 소스 파일을 자동으로 컴파일하므로, 악성 .cpp 파일을 해당 경로에 삽입할 경우 정상적인 컴파일 과정 중에 공격자의 코드가 실행 엔진에 통합되어 실행되게 됩니다.

### Impact Assessment
성공적인 공격이 수행될 경우, 공격자는 OpenPLC 런타임 사용자의 권한으로 임의의 네이티브 코드를 실행할 수 있게 됩니다. 이는 단순한 데이터 유출을 넘어 실제 산업 현장의 PLC 로직을 변경하거나 물리적 하드웨어를 제어하는 결과로 이어질 수 있습니다. 영향을 받는 산업 분야에는 주요 제조 및 에너지 그리드가 포함되어 있어, 국가적 차원의 서비스 가용성 저하 및 안전 사고의 위험성이 매우 높습니다.

### Recommendations
현재 OpenPLC v3는 수명 종료(EOL) 상태로, 보안 패치나 업데이트가 더 이상 제공되지 않습니다. 따라서 최우선적인 권고 사항은 OpenPLC v4로 즉시 업그레이드하는 것입니다. 또한, 제어 시스템을 인터넷으로부터 격리하고 방화벽 뒤에 위치시키는 네트워크 분리 전략이 필수적입니다. 원격 접속이 필요한 경우에는 취약점이 해결된 최신 버전의 VPN을 사용하고, 정기적인 취약점 분석 및 심층 방어(Defense-in-Depth) 전략을 구축해야 합니다.


## References
1. CISA Advisory ICSA-26-190-01, OpenPLC v3, 2026
2. CVE-2026-14480
3. Alves et al., OpenPLC: An Open Source Programmable Logic Controller for Cybersecurity Research, ACM Workshop on Cyber-Physical Systems Security and Privacy, 2016
4. MITRE ATT&CK: T0843 - Program Download
5. MITRE ATT&CK: T1210 - Exploitation of Remote Services
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/ics-advisories/icsa-26-190-01)
    