
# Mustang Panda Uses Zoho WorkDrive as Command Channel in Indian Government Attacks

> [요약] Executive Overview: 중국 연계 위협 그룹인 'Mustang Panda'가 인도 정부 및 수력 발전 부문을 겨냥한 고도화된 사이버 스파이 캠페인을 전개하고 있습니다. 이번 공격은 Zoho WorkDrive와 같은 합법적인 클라우드 서비스를 명령 및 제어(C2) 채널로 악용하여 기존 보안 탐지 체계를 우회한다는 점에서 전략적 중요성을 가집니다. Threat Analysis: 공격자는 'Living off Trusted Sites(LoTS)' 기법을 활용합니다. Zoho WorkDrive API를 통해 악성 데이터를 송수신함으로써 보안 솔루션이 정상적인 클라우드 트래픽과 악성 통신을 구분하기 어렵게 만듭니다. 분석 결과, 고위 행정 직원의 기기 내에 새로운 유형의 악성코드가 배포되었으며 이는 장기적인 정보 탈취 및 지속적인 거점 확보를 목적으로 설계되었습니다. Impact Assessment: 국가 정책을 결정하는 고위 관리자와 국가 기간 시설인 수력 발전소가 공격 대상이 됨에 따라 국가 안보 및 에너지 인프라 안정성에 심대한 위협이 가해지고 있습니다. 민감한 행정 문서 유출은 물론, 향후 에너지 공급망에 대한 물리적 방해 공격으로 이어질 수 있는 정찰 정보가 수집되었을 위험이 매우 높습니다. Recommendations: 조직은 공인된 클라우드 저장소 서비스에서 발생하는 비정상적인 API 호출 패턴을 모니터링해야 합니다. EDR(엔드포인트 탐지 및 대응) 솔루션을 강화하여 신뢰할 수 있는 프로세스에서 발생하는 이상 행위를 실시간 식별하고, Zero Trust 원칙에 따라 허가되지 않은 클라우드 서비스 접근을 엄격히 제한하며 관리자 계정에 대한 다요소 인증(MFA)을 필수화해야 합니다.

**Severity**: HIGH (8.5/10)
**Tags**: Mustang Panda, Zoho WorkDrive, APT, Espionage, Living off Trusted Sites

## Analysis
[요약] Executive Overview: 중국 연계 위협 그룹인 'Mustang Panda'가 인도 정부 및 수력 발전 부문을 겨냥한 고도화된 사이버 스파이 캠페인을 전개하고 있습니다. 이번 공격은 Zoho WorkDrive와 같은 합법적인 클라우드 서비스를 명령 및 제어(C2) 채널로 악용하여 기존 보안 탐지 체계를 우회한다는 점에서 전략적 중요성을 가집니다. Threat Analysis: 공격자는 'Living off Trusted Sites(LoTS)' 기법을 활용합니다. Zoho WorkDrive API를 통해 악성 데이터를 송수신함으로써 보안 솔루션이 정상적인 클라우드 트래픽과 악성 통신을 구분하기 어렵게 만듭니다. 분석 결과, 고위 행정 직원의 기기 내에 새로운 유형의 악성코드가 배포되었으며 이는 장기적인 정보 탈취 및 지속적인 거점 확보를 목적으로 설계되었습니다. Impact Assessment: 국가 정책을 결정하는 고위 관리자와 국가 기간 시설인 수력 발전소가 공격 대상이 됨에 따라 국가 안보 및 에너지 인프라 안정성에 심대한 위협이 가해지고 있습니다. 민감한 행정 문서 유출은 물론, 향후 에너지 공급망에 대한 물리적 방해 공격으로 이어질 수 있는 정찰 정보가 수집되었을 위험이 매우 높습니다. Recommendations: 조직은 공인된 클라우드 저장소 서비스에서 발생하는 비정상적인 API 호출 패턴을 모니터링해야 합니다. EDR(엔드포인트 탐지 및 대응) 솔루션을 강화하여 신뢰할 수 있는 프로세스에서 발생하는 이상 행위를 실시간 식별하고, Zero Trust 원칙에 따라 허가되지 않은 클라우드 서비스 접근을 엄격히 제한하며 관리자 계정에 대한 다요소 인증(MFA)을 필수화해야 합니다.


## References
1. Acronis Threat Research Unit, Mustang Panda's Recent Campaign Analysis, Acronis, 2024
2. MITRE ATT&CK: T1102.002 (Web Service: Bidirectional Communication)
3. MITRE ATT&CK: T1567.002 (Exfiltration to Cloud Storage)
4. Li et al., Detection of Cloud-based C2 Channels using Traffic Analysis, IEEE Access, 2023
## Original Source
[The Hacker News](https://thehackernews.com/2026/06/mustang-panda-uses-zoho-workdrive-as.html)
    