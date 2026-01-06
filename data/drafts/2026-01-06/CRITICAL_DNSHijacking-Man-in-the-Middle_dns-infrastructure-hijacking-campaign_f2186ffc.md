
# DNS Infrastructure Hijacking Campaign

> [Executive Overview] 최근 미국 사이버보안 및 인프라 보안국(CISA)은 전 세계적인 DNS(Domain Name System) 인프라 하이재킹 캠페인에 대해 경고했습니다. 이 공격은 도메인 등록 기관 및 DNS 관리 계정의 자격 증명을 탈취하여 조직의 인터넷 트래픽 경로를 무단으로 변경하는 고도화된 위협입니다. 이는 인터넷 신뢰의 근간인 DNS 체계를 악용한다는 점에서 국가적 보안 위협으로 간주됩니다.

[Threat Analysis] 공격자는 먼저 피싱이나 자격 증명 스터핑 등을 통해 DNS 관리 권한이 있는 계정을 탈취합니다. 이후 A, MX, NS 레코드 등을 수정하여 웹 및 이메일 트래픽을 공격자가 제어하는 서버로 리디렉션합니다. 특히 주목할 점은, 공격자가 DNS 제어권을 가짐으로써 해당 도메인에 대한 유효한 SSL/TLS 인증서를 직접 발급받을 수 있다는 것입니다. 이를 통해 사용자에게 보안 경고를 띄우지 않고도 Man-in-the-Middle(MITM) 공격을 수행하여 암호화된 데이터를 복호화하고 탈취할 수 있습니다.

[Impact Assessment] 이 캠페인은 정부 기관, 기업 및 주요 인프라를 대상으로 광범위한 피해를 입힙니다. 유효한 인증서를 사용하기 때문에 일반 사용자는 공격 여부를 인지하기 매우 어려우며, 로그인 정보, 민감한 이메일 통신, 지적 재산 등이 대규모로 유출될 수 있습니다. 또한, DNS 리디렉션이 종료된 후에도 공격자가 발급받은 인증서가 유효하다면 장기적인 보안 위협이 지속될 수 있는 심각한 위험을 내포하고 있습니다.

[Recommendations] 조직은 모든 도메인 등록 및 DNS 관리 계정에 대해 다요소 인증(MFA)을 즉시 구현하고 비밀번호를 갱신해야 합니다. 또한 공용 DNS 레코드의 변경 사항을 정기적으로 감사하고, 인증서 투명성(CT) 로그 모니터링을 통해 무단으로 발급된 인증서가 있는지 확인해야 합니다. 만약 의심스러운 인증서가 발견될 경우 즉시 폐기 절차를 밟고 침해 사고 대응 계획을 가동해야 합니다.

**Severity**: CRITICAL (9.2/10)
**Tags**: DNS Hijacking, Man-in-the-Middle, Credential Theft, SSL/TLS Fraud

## Analysis
[Executive Overview] 최근 미국 사이버보안 및 인프라 보안국(CISA)은 전 세계적인 DNS(Domain Name System) 인프라 하이재킹 캠페인에 대해 경고했습니다. 이 공격은 도메인 등록 기관 및 DNS 관리 계정의 자격 증명을 탈취하여 조직의 인터넷 트래픽 경로를 무단으로 변경하는 고도화된 위협입니다. 이는 인터넷 신뢰의 근간인 DNS 체계를 악용한다는 점에서 국가적 보안 위협으로 간주됩니다.

[Threat Analysis] 공격자는 먼저 피싱이나 자격 증명 스터핑 등을 통해 DNS 관리 권한이 있는 계정을 탈취합니다. 이후 A, MX, NS 레코드 등을 수정하여 웹 및 이메일 트래픽을 공격자가 제어하는 서버로 리디렉션합니다. 특히 주목할 점은, 공격자가 DNS 제어권을 가짐으로써 해당 도메인에 대한 유효한 SSL/TLS 인증서를 직접 발급받을 수 있다는 것입니다. 이를 통해 사용자에게 보안 경고를 띄우지 않고도 Man-in-the-Middle(MITM) 공격을 수행하여 암호화된 데이터를 복호화하고 탈취할 수 있습니다.

[Impact Assessment] 이 캠페인은 정부 기관, 기업 및 주요 인프라를 대상으로 광범위한 피해를 입힙니다. 유효한 인증서를 사용하기 때문에 일반 사용자는 공격 여부를 인지하기 매우 어려우며, 로그인 정보, 민감한 이메일 통신, 지적 재산 등이 대규모로 유출될 수 있습니다. 또한, DNS 리디렉션이 종료된 후에도 공격자가 발급받은 인증서가 유효하다면 장기적인 보안 위협이 지속될 수 있는 심각한 위험을 내포하고 있습니다.

[Recommendations] 조직은 모든 도메인 등록 및 DNS 관리 계정에 대해 다요소 인증(MFA)을 즉시 구현하고 비밀번호를 갱신해야 합니다. 또한 공용 DNS 레코드의 변경 사항을 정기적으로 감사하고, 인증서 투명성(CT) 로그 모니터링을 통해 무단으로 발급된 인증서가 있는지 확인해야 합니다. 만약 의심스러운 인증서가 발견될 경우 즉시 폐기 절차를 밟고 침해 사고 대응 계획을 가동해야 합니다.


## References
1. CISA, Global DNS Infrastructure Hijacking Campaign, Alert (AA19-024A), 2019
2. Mandiant, Global DNS Hijacking Campaign: DNS Record Manipulation at Scale, Google Cloud Blog, 2019
3. MITRE ATT&CK: T1584.004 (Infrastructure Strategy: DNS Server)
4. Saka et al., DNS Security and Management: A Survey of Emerging Threats and Defenses, IEEE Communications Surveys & Tutorials, 2021
5. Cisco Talos, DNSpionage Campaign Targets Middle East, Cisco Talos Intelligence Group, 2018
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/cybersecurity-advisories/aa19-024a)
    