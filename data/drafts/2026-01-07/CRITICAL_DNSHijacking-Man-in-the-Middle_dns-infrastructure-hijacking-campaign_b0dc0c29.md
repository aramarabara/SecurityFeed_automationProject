
# DNS Infrastructure Hijacking Campaign

> [Executive Overview] 최근 CISA(NCCIC)는 전 세계적인 DNS 인프라 하이재킹 캠페인에 대한 분석을 발표했습니다. 이 캠페인은 조직의 DNS 관리 계정 정보를 탈취하여 도메인 레코드 설정을 무단으로 변경하고, 트래픽을 공격자 서버로 유도하는 고도화된 위협입니다. DNS는 인터넷 통신의 근간이 되는 인프라이므로, 해당 공격은 국가 기관 및 글로벌 기업에 심각한 보안 위협을 초래하고 있습니다. [Threat Analysis] 주요 공격 기법은 계정 탈취를 통한 A, MX, NS 레코드의 변조입니다. 공격자는 이를 통해 가로챈 트래픽에 대해 유효한 SSL/TLS 인증서를 발급받아 중간자 공격(MitM)을 수행합니다. 이 과정에서 공격자는 암호화된 통신을 복호화하여 내용을 열람할 수 있으며, 사용자는 브라우저에서 보안 경고를 받지 않기 때문에 공격 여부를 인지하기가 매우 어렵습니다. [Impact Assessment] 웹 서비스 및 이메일 트래픽의 리다이렉션은 민감한 비즈니스 데이터 및 관리자 크리덴셜 유출로 직결됩니다. 특히 메일 서버(MX) 레코드 변조는 기업의 기밀 통신을 완전히 장악할 수 있게 하며, 공격 기간이 끝난 후에도 탈취된 인증서를 통한 지속적인 위협이 존재할 수 있습니다. [Recommendations] 보안 강화를 위해 모든 DNS 관리 계정에 다요소 인증(MFA)을 필수 적용하고 비밀번호를 즉시 변경해야 합니다. 또한 정기적으로 공용 DNS 레코드를 감사하여 의도치 않은 IP 변경을 모니터링하고, 인증서 투명성(CT) 로그를 통해 부정 발급된 인증서를 식별하여 즉시 폐기(Revocation)할 것을 권고합니다.

**Severity**: CRITICAL (8.5/10)
**Tags**: DNS Hijacking, Man-in-the-Middle, Credential Compromise, DNSpionage

## Analysis
[Executive Overview] 최근 CISA(NCCIC)는 전 세계적인 DNS 인프라 하이재킹 캠페인에 대한 분석을 발표했습니다. 이 캠페인은 조직의 DNS 관리 계정 정보를 탈취하여 도메인 레코드 설정을 무단으로 변경하고, 트래픽을 공격자 서버로 유도하는 고도화된 위협입니다. DNS는 인터넷 통신의 근간이 되는 인프라이므로, 해당 공격은 국가 기관 및 글로벌 기업에 심각한 보안 위협을 초래하고 있습니다. [Threat Analysis] 주요 공격 기법은 계정 탈취를 통한 A, MX, NS 레코드의 변조입니다. 공격자는 이를 통해 가로챈 트래픽에 대해 유효한 SSL/TLS 인증서를 발급받아 중간자 공격(MitM)을 수행합니다. 이 과정에서 공격자는 암호화된 통신을 복호화하여 내용을 열람할 수 있으며, 사용자는 브라우저에서 보안 경고를 받지 않기 때문에 공격 여부를 인지하기가 매우 어렵습니다. [Impact Assessment] 웹 서비스 및 이메일 트래픽의 리다이렉션은 민감한 비즈니스 데이터 및 관리자 크리덴셜 유출로 직결됩니다. 특히 메일 서버(MX) 레코드 변조는 기업의 기밀 통신을 완전히 장악할 수 있게 하며, 공격 기간이 끝난 후에도 탈취된 인증서를 통한 지속적인 위협이 존재할 수 있습니다. [Recommendations] 보안 강화를 위해 모든 DNS 관리 계정에 다요소 인증(MFA)을 필수 적용하고 비밀번호를 즉시 변경해야 합니다. 또한 정기적으로 공용 DNS 레코드를 감사하여 의도치 않은 IP 변경을 모니터링하고, 인증서 투명성(CT) 로그를 통해 부정 발급된 인증서를 식별하여 즉시 폐기(Revocation)할 것을 권고합니다.


## References
1. CISA, Alert (AA19-024A): DNS Infrastructure Hijacking Campaign, 2019
2. Mandiant, Global DNS Hijacking Campaign: DNS Record Manipulation at Scale, Google Cloud Blog, 2019
3. Cisco Talos, DNSpionage Campaign Targets Middle East, Talos Intelligence, 2018
4. MITRE ATT&CK: T1584.004 (Compromise Infrastructure: DNS Server), 2023
## Original Source
[CISA US-CERT](https://www.cisa.gov/news-events/cybersecurity-advisories/aa19-024a)
    