
# LeakNet Ransomware Uses ClickFix via Hacked Sites, Deploys Deno In-Memory Loader

> [Executive Overview] 최근 LeakNet 랜섬웨어 그룹이 'ClickFix'라 불리는 사회공학적 기법을 도입하여 초기 침투 방식을 혁신하고 있습니다. 이는 단순한 자격 증명 탈취를 넘어 사용자의 직접적인 조작을 유도한다는 점에서 기존의 보안 경계 방어 체계에 심각한 위협이 됩니다. 특히 합법적인 웹사이트를 변조하여 배포되므로 신뢰 기반의 웹 필터링 시스템을 효과적으로 우회하는 특성을 보입니다. [Threat Analysis] ClickFix 공격은 사용자가 해킹된 웹사이트를 방문할 때 브라우저 오류나 업데이트 필요 메시지를 표시하여 특정 악성 명령어를 복사한 뒤 실행하도록 유도합니다. 이 과정에서 PowerShell 명령이 활용되며 최종적으로 Deno 런타임을 기반으로 한 인메모리 로더(In-memory Loader)가 실행됩니다. Deno는 악성 파일이 디스크에 남지 않고 메모리 상에서만 동작하게 하여 기존 시그니처 기반 백신의 탐지망을 정밀하게 회피합니다. [Impact Assessment] 이 공격은 기업의 전반적인 IT 인프라에 침투하여 민감 데이터 유출 및 시스템 암호화를 초래합니다. 특히 Deno와 같은 비전통적인 런타임 사용은 엔드포인트 탐지 및 대응(EDR) 솔루션의 프로세스 감시를 회피할 가능성을 높여 탐지 지연을 유발하며 결과적으로 복구 불가능한 데이터 손실과 비즈니스 중단이라는 치명적인 결과를 낳습니다. [Recommendations] 조직은 임직원을 대상으로 ClickFix 기법에 대한 보안 인식 교육을 강화하고 PowerShell의 비인가 실행을 차단하는 그룹 정책(GPO)을 엄격히 적용해야 합니다. 또한 Deno와 같은 비정상적인 런타임 실행 프로세스를 상시 모니터링하고 메모리 포렌식 기능을 갖춘 차세대 EDR 도입을 통해 인메모리 기반 위협에 대한 방어력을 확보해야 합니다.

**Severity**: HIGH (8.5/10)
**Tags**: Ransomware, ClickFix, Social Engineering, In-memory Loader, Deno

## Analysis
[Executive Overview] 최근 LeakNet 랜섬웨어 그룹이 'ClickFix'라 불리는 사회공학적 기법을 도입하여 초기 침투 방식을 혁신하고 있습니다. 이는 단순한 자격 증명 탈취를 넘어 사용자의 직접적인 조작을 유도한다는 점에서 기존의 보안 경계 방어 체계에 심각한 위협이 됩니다. 특히 합법적인 웹사이트를 변조하여 배포되므로 신뢰 기반의 웹 필터링 시스템을 효과적으로 우회하는 특성을 보입니다. [Threat Analysis] ClickFix 공격은 사용자가 해킹된 웹사이트를 방문할 때 브라우저 오류나 업데이트 필요 메시지를 표시하여 특정 악성 명령어를 복사한 뒤 실행하도록 유도합니다. 이 과정에서 PowerShell 명령이 활용되며 최종적으로 Deno 런타임을 기반으로 한 인메모리 로더(In-memory Loader)가 실행됩니다. Deno는 악성 파일이 디스크에 남지 않고 메모리 상에서만 동작하게 하여 기존 시그니처 기반 백신의 탐지망을 정밀하게 회피합니다. [Impact Assessment] 이 공격은 기업의 전반적인 IT 인프라에 침투하여 민감 데이터 유출 및 시스템 암호화를 초래합니다. 특히 Deno와 같은 비전통적인 런타임 사용은 엔드포인트 탐지 및 대응(EDR) 솔루션의 프로세스 감시를 회피할 가능성을 높여 탐지 지연을 유발하며 결과적으로 복구 불가능한 데이터 손실과 비즈니스 중단이라는 치명적인 결과를 낳습니다. [Recommendations] 조직은 임직원을 대상으로 ClickFix 기법에 대한 보안 인식 교육을 강화하고 PowerShell의 비인가 실행을 차단하는 그룹 정책(GPO)을 엄격히 적용해야 합니다. 또한 Deno와 같은 비정상적인 런타임 실행 프로세스를 상시 모니터링하고 메모리 포렌식 기능을 갖춘 차세대 EDR 도입을 통해 인메모리 기반 위협에 대한 방어력을 확보해야 합니다.


## References
1. MITRE ATT&CK: T1204.001 (User Execution: Malicious Link)
2. MITRE ATT&CK: T1059.001 (Command and Scripting Interpreter: PowerShell)
3. Proofpoint Research, The Rise of ClickFix: Social Engineering via Browser Fake Errors, 2024
4. Sekoia.io Intelligence Team, Ransomware Operations using In-memory Loaders, 2024
5. NIST SP 800-83 Rev. 1, Guide to Malware Incident Prevention and Handling for Desktops and Laptops, 2013
## Original Source
[The Hacker News](https://thehackernews.com/2026/03/leaknet-ransomware-uses-clickfix-via.html)
    