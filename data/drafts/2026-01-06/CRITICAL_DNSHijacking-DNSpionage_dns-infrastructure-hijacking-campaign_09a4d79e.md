
# DNS Infrastructure Hijacking Campaign

> [Executive Overview] 최근 CISA(Cybersecurity and Infrastructure Security Agency)는 전 세계적으로 발생하는 광범위한 DNS 인프라 하이재킹 캠페인(일명 DNSpionage)에 대해 경고했습니다. 공격자는 도메인 관리 계정의 자격 증명을 탈취하여 DNS 레코드를 임의로 수정하며, 이를 통해 조직의 웹 및 메일 트래픽을 공격자가 제어하는 서버로 우회시킵니다. 이 공격은 단순한 트래픽 유도를 넘어 암호화된 통신의 신뢰성을 근본적으로 파괴하는 고도로 정교한 위협입니다. [Threat Analysis] 공격 단계는 도메인 등록 기관 또는 DNS 관리 계정의 탈취에서 시작됩니다. 공격자는 획득한 권한으로 A, MX, NS 레코드를 수정하여 사용자 트래픽을 가로챕니다. 특히, 공격자는 하이재킹한 도메인을 이용해 유효한 암호화 인증서(SSL/TLS)를 발급받을 수 있습니다. 이를 통해 중간자 공격(MitM)을 수행하며, 사용자는 브라우저 경고 없이 정상적인 사이트에 접속한 것으로 신뢰하게 되어 사용자 데이터와 로그인 정보가 실시간으로 노출됩니다. [Impact Assessment] 이 캠페인은 중동 지역을 포함한 전 세계 정부 기관 및 민간 기업을 광범위하게 겨냥하고 있습니다. 암호화된 데이터가 복호화되어 노출됨으로써 기밀 정보 유출, 이메일 탈취, 추가적인 네트워크 침투가 가능해집니다. 특히 공격이 종료된 이후에도 탈취된 인증서와 정보를 바탕으로 지속적인 위협이 존재하며, 인터넷 인프라의 신뢰 모델을 무너뜨린다는 점에서 그 파급력이 매우 큽니다. [Recommendations] 조직은 최우선적으로 도메인 관리 및 DNS 설정을 변경할 수 있는 모든 계정에 다요소 인증(MFA)을 즉시 도입해야 합니다. 또한, DNS 레코드를 정기적으로 감사하여 의도하지 않은 변경 사항이 있는지 확인하고, 인증서 투명성(CT) 로그를 모니터링하여 부정 발급된 인증서가 있는지 식별 후 즉시 폐기해야 합니다. 모든 도메인 관련 관리 계정의 비밀번호를 주기적으로 갱신하는 보안 습관도 필수적입니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: DNS Hijacking, DNSpionage, Man-in-the-Middle, Credential Theft

## Analysis
[Executive Overview] 최근 CISA(Cybersecurity and Infrastructure Security Agency)는 전 세계적으로 발생하는 광범위한 DNS 인프라 하이재킹 캠페인(일명 DNSpionage)에 대해 경고했습니다. 공격자는 도메인 관리 계정의 자격 증명을 탈취하여 DNS 레코드를 임의로 수정하며, 이를 통해 조직의 웹 및 메일 트래픽을 공격자가 제어하는 서버로 우회시킵니다. 이 공격은 단순한 트래픽 유도를 넘어 암호화된 통신의 신뢰성을 근본적으로 파괴하는 고도로 정교한 위협입니다. [Threat Analysis] 공격 단계는 도메인 등록 기관 또는 DNS 관리 계정의 탈취에서 시작됩니다. 공격자는 획득한 권한으로 A, MX, NS 레코드를 수정하여 사용자 트래픽을 가로챕니다. 특히, 공격자는 하이재킹한 도메인을 이용해 유효한 암호화 인증서(SSL/TLS)를 발급받을 수 있습니다. 이를 통해 중간자 공격(MitM)을 수행하며, 사용자는 브라우저 경고 없이 정상적인 사이트에 접속한 것으로 신뢰하게 되어 사용자 데이터와 로그인 정보가 실시간으로 노출됩니다. [Impact Assessment] 이 캠페인은 중동 지역을 포함한 전 세계 정부 기관 및 민간 기업을 광범위하게 겨냥하고 있습니다. 암호화된 데이터가 복호화되어 노출됨으로써 기밀 정보 유출, 이메일 탈취, 추가적인 네트워크 침투가 가능해집니다. 특히 공격이 종료된 이후에도 탈취된 인증서와 정보를 바탕으로 지속적인 위협이 존재하며, 인터넷 인프라의 신뢰 모델을 무너뜨린다는 점에서 그 파급력이 매우 큽니다. [Recommendations] 조직은 최우선적으로 도메인 관리 및 DNS 설정을 변경할 수 있는 모든 계정에 다요소 인증(MFA)을 즉시 도입해야 합니다. 또한, DNS 레코드를 정기적으로 감사하여 의도하지 않은 변경 사항이 있는지 확인하고, 인증서 투명성(CT) 로그를 모니터링하여 부정 발급된 인증서가 있는지 식별 후 즉시 폐기해야 합니다. 모든 도메인 관련 관리 계정의 비밀번호를 주기적으로 갱신하는 보안 습관도 필수적입니다.


## References
1. CISA, Alert (AA19-024A): DNS Infrastructure Hijacking Campaign, 2019
2. M. Hellwig et al., Global DNS Hijacking Campaign: DNS Record Manipulation at Scale, Mandiant, 2019
3. Cisco Talos, DNSpionage Campaign Targets Middle East, Cisco, 2018
4. MITRE ATT&CK: T1584.002 (Compromise Infrastructure: DNS Server)
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/cybersecurity-advisories/aa19-024a)
    