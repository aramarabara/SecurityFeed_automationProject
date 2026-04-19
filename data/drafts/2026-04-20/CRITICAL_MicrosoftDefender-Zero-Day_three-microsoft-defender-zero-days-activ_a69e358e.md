
# Three Microsoft Defender Zero-Days Actively Exploited; Two Still Unpatched

> [Executive Overview] 최근 Microsoft Defender를 표적으로 하는 세 가지 제로데이 취약점(BlueHammer, RedSun, UnDefend)이 공개되었으며 이 중 두 가지는 여전히 패치되지 않은 상태로 실제 공격에 악용되고 있습니다. 보안 연구원 'Chaotic Eclipse'에 의해 노출된 이 취약점들은 윈도우 시스템의 기본 보안 계층인 Defender를 공격의 매개체로 활용한다는 점에서 매우 심각한 보안 위협으로 평가됩니다. [Threat Analysis] 이번 위협은 주로 로컬 권한 상승(LPE)에 집중되어 있습니다. 공격자는 이미 시스템에 침투한 상태에서 이러한 취약점들을 이용해 일반 사용자 권한을 최상위 SYSTEM 권한으로 승격시킬 수 있습니다. 특히 BlueHammer의 경우 GitHub 로그인 세션 등을 활용하는 특이한 공격 벡터를 포함하고 있으며 보안 솔루션 자체의 논리적 결함을 악용하여 탐지를 우회하는 고도의 기법을 사용합니다. [Impact Assessment] Microsoft Defender가 거의 모든 Windows 환경에 기본 설치되어 있다는 점을 감안할 때 잠재적인 피해 규모는 전 세계적입니다. 공격자가 권한 상승에 성공할 경우 엔드포인트 보안 도구를 무력화하거나 랜섬웨어를 배포하고 기업 내부 네트워크에서 측면 이동(Lateral Movement)을 수행할 수 있는 완전한 통제권을 얻게 됩니다. [Recommendations] 보안 관리자는 Microsoft의 공식 패치 배포를 긴밀히 모니터링하고 가용한 즉시 업데이트를 수행해야 합니다. 패치 적용 전까지는 Defender 관련 프로세스(MsMpEng.exe)의 비정상적인 동작을 탐지하기 위한 EDR 시그니처를 강화하고 관리자 계정에 대한 MFA 적용 및 시스템 접근 로그에 대한 정밀 분석을 수행할 것을 권고합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: Microsoft Defender, Zero-Day, Privilege Escalation, Chaotic Eclipse, LPE

## Analysis
[Executive Overview] 최근 Microsoft Defender를 표적으로 하는 세 가지 제로데이 취약점(BlueHammer, RedSun, UnDefend)이 공개되었으며 이 중 두 가지는 여전히 패치되지 않은 상태로 실제 공격에 악용되고 있습니다. 보안 연구원 'Chaotic Eclipse'에 의해 노출된 이 취약점들은 윈도우 시스템의 기본 보안 계층인 Defender를 공격의 매개체로 활용한다는 점에서 매우 심각한 보안 위협으로 평가됩니다. [Threat Analysis] 이번 위협은 주로 로컬 권한 상승(LPE)에 집중되어 있습니다. 공격자는 이미 시스템에 침투한 상태에서 이러한 취약점들을 이용해 일반 사용자 권한을 최상위 SYSTEM 권한으로 승격시킬 수 있습니다. 특히 BlueHammer의 경우 GitHub 로그인 세션 등을 활용하는 특이한 공격 벡터를 포함하고 있으며 보안 솔루션 자체의 논리적 결함을 악용하여 탐지를 우회하는 고도의 기법을 사용합니다. [Impact Assessment] Microsoft Defender가 거의 모든 Windows 환경에 기본 설치되어 있다는 점을 감안할 때 잠재적인 피해 규모는 전 세계적입니다. 공격자가 권한 상승에 성공할 경우 엔드포인트 보안 도구를 무력화하거나 랜섬웨어를 배포하고 기업 내부 네트워크에서 측면 이동(Lateral Movement)을 수행할 수 있는 완전한 통제권을 얻게 됩니다. [Recommendations] 보안 관리자는 Microsoft의 공식 패치 배포를 긴밀히 모니터링하고 가용한 즉시 업데이트를 수행해야 합니다. 패치 적용 전까지는 Defender 관련 프로세스(MsMpEng.exe)의 비정상적인 동작을 탐지하기 위한 EDR 시그니처를 강화하고 관리자 계정에 대한 MFA 적용 및 시스템 접근 로그에 대한 정밀 분석을 수행할 것을 권고합니다.


## References
1. Huntress Labs Research Team, Vulnerability Analysis of Defender Zero-Days, Huntress Blog, 2024
2. MITRE ATT&CK: T1068 (Exploitation for Privilege Escalation)
3. MITRE ATT&CK: T1562.001 (Impair Defenses: Disable or Modify Tools)
4. Microsoft Security Response Center (MSRC), Security Advisory for Microsoft Defender, 2024
## Original Source
[The Hacker News](https://thehackernews.com/2026/04/three-microsoft-defender-zero-days.html)
    