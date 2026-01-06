# CodeQL Security Analysis Report

**Repository**: Zero-attacker

**Analysis Date**: 2026-01-05

**Language**: python

---

## 📊 Executive Summary

- **Total Files Analyzed**: 14
- **Lines of Code**: N/A
- **Lines of User Code**: N/A
- **Total Queries Executed**: 50
- **Vulnerabilities Found**: 12
  - 🔴 Critical (error): 0
  - 🟠 Warning: 12
  - 🔵 Note: 0

---

## 🗄️ Database Information

- **Language**: python
- **Source Location**: data/temp_scan/Zero-attacker
- **Database Version**: unknown

---

## 📈 Code Statistics

### Extracted Files (14)

1. `Zero-Tool/ip-lookup.py`
2. `Zero-Tool/phone-locator.py`
3. `zero-tool.py`
4. `Zero-Tool/email-bomber.py`
5. `Zero-Tool/nuke-bot/main.py`
6. `Zero-Tool/zero-tool.py`
7. `Zero-Tool/discord-token-grabber.py`
8. `info.py`
9. `Zero-Tool/ddos.py`
10. `Zero-Tool/Subdirectory-scanner/main.py`
11. `zero.py`
12. `Zero-Tool/subdomain/main.py`
13. `Zero-Tool/port-scanner.py`
14. `Zero-Tool/nuke-bot/index.js`

---

## 🔍 Query Results

### Executed Queries (50)

1. ✅ `py/code-injection` - 0 result(s)
2. ✅ `py/stack-trace-exposure` - 0 result(s)
3. ✅ `py/url-redirection` - 0 result(s)
4. ✅ `py/samesite-none-cookie` - 0 result(s)
5. ✅ `py/weak-crypto-key` - 0 result(s)
6. ✅ `py/http-response-splitting` - 0 result(s)
7. ✅ `py/nosql-injection` - 0 result(s)
8. ✅ `py/insecure-default-protocol` - 0 result(s)
9. ✅ `py/weak-cryptographic-algorithm` - 0 result(s)
10. ✅ `py/insecure-protocol` - 0 result(s)
11. ✅ `py/weak-sensitive-data-hashing` - 0 result(s)
12. ✅ `py/full-ssrf` - 0 result(s)
13. ✅ `py/pam-auth-bypass` - 0 result(s)
14. ✅ `py/insecure-cookie` - 0 result(s)
15. ✅ `py/sql-injection` - 0 result(s)
16. ✅ `py/template-injection` - 0 result(s)
17. ✅ `py/incomplete-hostname-regexp` - 0 result(s)
18. ✅ `py/cookie-injection` - 0 result(s)
19. ✅ `py/incomplete-url-substring-sanitization` - 0 result(s)
20. ✅ `py/overly-large-range` - 0 result(s)
21. ✅ `py/flask-debug` - 0 result(s)
22. ✅ `py/ldap-injection` - 0 result(s)
23. ✅ `py/bind-socket-all-network-interfaces` - 0 result(s)
24. ✅ `py/paramiko-missing-host-key-validation` - 0 result(s)
25. ✅ `py/insecure-temporary-file` - 0 result(s)
26. ✅ `py/bad-tag-filter` - 0 result(s)
27. ✅ `py/xml-bomb` - 0 result(s)
28. ✅ `py/clear-text-storage-sensitive-data` - 0 result(s)
29. 🔴 `py/clear-text-logging-sensitive-data` - 12 result(s)
30. ✅ `py/csrf-protection-disabled` - 0 result(s)
31. ✅ `py/unsafe-deserialization` - 0 result(s)
32. ✅ `py/regex-injection` - 0 result(s)
33. ✅ `py/redos` - 0 result(s)
34. ✅ `py/polynomial-redos` - 0 result(s)
35. ✅ `py/client-exposed-cookie` - 0 result(s)
36. ✅ `py/path-injection` - 0 result(s)
37. ✅ `py/xxe` - 0 result(s)
38. ✅ `py/command-line-injection` - 0 result(s)
39. ✅ `py/xpath-injection` - 0 result(s)
40. ✅ `py/reflective-xss` - 0 result(s)
41. ✅ `py/use-of-input` - 0 result(s)
42. ✅ `py/partial-ssrf` - 0 result(s)
43. ✅ `py/overly-permissive-file` - 0 result(s)
44. ✅ `py/request-without-cert-validation` - 0 result(s)
45. ✅ `py/log-injection` - 0 result(s)
46. ✅ `py/tarslip` - 0 result(s)
47. ✅ `py/shell-command-constructed-from-input` - 0 result(s)
48. ✅ `py/jinja2/autoescape-false` - 0 result(s)
49. ✅ `py/summary/lines-of-code` - 0 result(s)
50. ✅ `py/summary/lines-of-user-code` - 0 result(s)

---

## 🌳 AST Code Flows (Data Flow Analysis)


This section shows the AST traversal paths for each vulnerability, demonstrating how data flows through the code.


### 1. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/ip-lookup.py` | 14 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 23 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/ip-lookup.py` | 23 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/ip-lookup.py` | 25 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/ip-lookup.py` | 14 | 11 | ControlFlowNode for Fstring |

### 2. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/ip-lookup.py` | 15 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 23 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/ip-lookup.py` | 23 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/ip-lookup.py` | 25 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/ip-lookup.py` | 15 | 11 | ControlFlowNode for Fstring |

### 3. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/ip-lookup.py` | 16 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 23 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/ip-lookup.py` | 23 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/ip-lookup.py` | 25 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/ip-lookup.py` | 16 | 11 | ControlFlowNode for Fstring |

### 4. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/ip-lookup.py` | 17 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 23 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/ip-lookup.py` | 23 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/ip-lookup.py` | 25 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/ip-lookup.py` | 17 | 11 | ControlFlowNode for Fstring |

### 5. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/ip-lookup.py` | 18 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 23 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/ip-lookup.py` | 23 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/ip-lookup.py` | 25 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/ip-lookup.py` | 18 | 11 | ControlFlowNode for Fstring |

### 6. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/ip-lookup.py` | 19 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/ip-lookup.py` | 23 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/ip-lookup.py` | 23 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/ip-lookup.py` | 25 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/ip-lookup.py` | 3 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/ip-lookup.py` | 4 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/ip-lookup.py` | 8 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/ip-lookup.py` | 9 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/ip-lookup.py` | 10 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/ip-lookup.py` | 25 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/ip-lookup.py` | 25 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/ip-lookup.py` | 26 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/ip-lookup.py` | 12 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/ip-lookup.py` | 19 | 11 | ControlFlowNode for Fstring |

### 7. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 16 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 16 | 11 | ControlFlowNode for Fstring |

#### Flow Path 3


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 16 | 11 | ControlFlowNode for Fstring |

#### Flow Path 4


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 16 | 11 | ControlFlowNode for Fstring |

### 8. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 17 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 17 | 11 | ControlFlowNode for Fstring |

#### Flow Path 3


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 17 | 11 | ControlFlowNode for Fstring |

#### Flow Path 4


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 17 | 11 | ControlFlowNode for Fstring |

### 9. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 18 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 18 | 11 | ControlFlowNode for Fstring |

#### Flow Path 3


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 18 | 11 | ControlFlowNode for Fstring |

#### Flow Path 4


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 18 | 11 | ControlFlowNode for Fstring |

### 10. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 19 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 19 | 11 | ControlFlowNode for Fstring |

#### Flow Path 3


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 19 | 11 | ControlFlowNode for Fstring |

#### Flow Path 4


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 19 | 11 | ControlFlowNode for Fstring |

### 11. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 20 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 20 | 11 | ControlFlowNode for Fstring |

#### Flow Path 3


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 20 | 11 | ControlFlowNode for Fstring |

#### Flow Path 4


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 20 | 11 | ControlFlowNode for Fstring |

### 12. py/clear-text-logging-sensitive-data

**Message**: This expression logs [sensitive data (private)](1) as clear text.
This expression logs [sensitive da...


#### Flow Path 1


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 21 | 11 | ControlFlowNode for Fstring |

#### Flow Path 2


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 2 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 3 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 4 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 5 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 6 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 7 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 8 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 9 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 10 | `Zero-Tool/phone-locator.py` | 21 | 11 | ControlFlowNode for Fstring |

#### Flow Path 3


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 21 | 11 | ControlFlowNode for Fstring |

#### Flow Path 4


**Thread Flow 1**:


| Step | File | Line | Column | AST Node |
|------|------|------|--------|---------|
| 1 | `Zero-Tool/phone-locator.py` | 55 | 16 | ControlFlowNode for input() |
| 2 | `Zero-Tool/phone-locator.py` | 55 | 0 | ControlFlowNode for phone_number |
| 3 | `Zero-Tool/phone-locator.py` | 57 | 31 | ControlFlowNode for phone_number |
| 4 | `Zero-Tool/phone-locator.py` | 5 | 19 | ControlFlowNode for phone_number |
| 5 | `Zero-Tool/phone-locator.py` | 6 | 5 | ControlFlowNode for url |
| 6 | `Zero-Tool/phone-locator.py` | 10 | 5 | ControlFlowNode for response |
| 7 | `Zero-Tool/phone-locator.py` | 11 | 5 | ControlFlowNode for data |
| 8 | `Zero-Tool/phone-locator.py` | 12 | 12 | ControlFlowNode for data |
| 9 | `Zero-Tool/phone-locator.py` | 57 | 17 | ControlFlowNode for phone_locator() |
| 10 | `Zero-Tool/phone-locator.py` | 57 | 0 | ControlFlowNode for phone_details |
| 11 | `Zero-Tool/phone-locator.py` | 58 | 21 | ControlFlowNode for phone_details |
| 12 | `Zero-Tool/phone-locator.py` | 14 | 25 | ControlFlowNode for phone_details |
| 13 | `Zero-Tool/phone-locator.py` | 21 | 11 | ControlFlowNode for Fstring |

---

## 🚨 Vulnerability Summary


### By Severity

- **Error**: 0
- **Warning**: 12
- **Note**: 0

### By Query Type

- `py/clear-text-logging-sensitive-data`: 12 result(s)

---

## 📎 Additional Information


This report is generated from CodeQL analysis results. For complete details including:
- Full AST node information
- Complete code flow paths
- All SARIF metadata

Please refer to the `rawSarif` field in the original JSON file.


---


*Generated by SecurityFeed AI - CodeQL Analysis System*