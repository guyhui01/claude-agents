# QA V-Model Skill — Security Testing (OWASP Top 10 + ISTQB CT-SEC)

> Certification: CT-SEC · CTAL-TTA · CTFL
> Agents: AGENT-QA-CYCLEV.md · AGENT-SECURITE-IA.md
> Methodology: V-model (applicable to Agile)

## Objective
Identify security vulnerabilities testable by a functional QA, relying on recognized standards (OWASP Top 10, CWE Top 25, NIST CSF). Detect common security bugs (injection, auth, data exposure, access control) before a specialized pentest.

> **Boundary**: this skill covers **functional security QA** (validating application controls through testing). For AI-specific security (prompt injection, model theft, OWASP LLM Top 10), see `AGENT-SECURITE-IA.md`.

## Standards used

| Standard | Source | Year | QA usage |
|---|---|---|---|
| **OWASP Top 10** | owasp.org/Top10 | 2021 (current edition) | 10 priority web vulnerabilities |
| **OWASP API Security Top 10** | owasp.org/API-Security | 2023 | Security of REST/GraphQL APIs |
| **CWE Top 25** | cwe.mitre.org/top25 | 2024 | Most Dangerous Software Weaknesses |
| **OWASP ASVS** | owasp.org/ASVS | v4.0.3 (2024) | Security verification levels 1-2-3 |
| **NIST CSF** | nist.gov/cyberframework | 2.0 (2024) | Govern / Identify / Protect / Detect / Respond / Recover |
| **ISTQB CT-SEC** | istqb.org | 2022 | Certified Tester Security syllabus |
| **OWASP LLM Top 10** | owasp.org/llm-top-10 | 2025 | (AI-specific → AGENT-SECURITE-IA) |

## OWASP Top 10 (2021) — QA mapping

| # | Vulnerability | Description | QA tests |
|---|---|---|---|
| **A01** | Broken Access Control | Faulty access control (IDOR, privilege escalation) | Direct URL to another user's resource, ID tampering in URL, horizontal/vertical escalation |
| **A02** | Cryptographic Failures | Faulty encryption (TLS, hashing, storage) | HTTPS enforced, bcrypt/argon2 hash (not MD5/SHA1), TLS ≥ 1.2 |
| **A03** | Injection | SQL/NoSQL/OS/LDAP/XSS injection | Payloads `' OR '1'='1`, `<script>`, `${jndi:ldap://...}` |
| **A04** | Insecure Design | Security architecture flaws | No threat modeling, missing design review |
| **A05** | Security Misconfiguration | Default configuration, debug in prod | Missing security headers (CSP, HSTS, X-Frame-Options), verbose errors |
| **A06** | Vulnerable Components | Outdated dependencies / known CVEs | SCA scan (Snyk, Trivy, Dependabot) |
| **A07** | Auth & Identification Failures | Weak auth, vulnerable sessions | Brute force, session fixation, unverified JWT |
| **A08** | Software & Data Integrity Failures | Compromised CI/CD pipeline, insecure deserialization | Verify dependency signatures, secure pipeline |
| **A09** | Logging & Monitoring Failures | No attack detection | SIEM connected, auth/error logs, brute-force alerting |
| **A10** | Server-Side Request Forgery (SSRF) | The server makes a request controlled by the attacker | Test internal URLs (169.254.169.254 AWS metadata, file://, gopher://) |

## OWASP API Security Top 10 (2023) — QA focus on APIs

| # | Vulnerability | QA tests |
|---|---|---|
| API1 | Broken Object Level Authorization (BOLA) | Change the ID in `/users/{id}/orders` to access another user |
| API2 | Broken Authentication | JWT without signature, refresh token leak, weak OAuth flow |
| API3 | Broken Object Property Level Auth | Modify admin fields via PATCH (mass assignment) |
| API4 | Unrestricted Resource Consumption | Missing rate limiting, unbounded pagination |
| API5 | Broken Function Level Authorization | Access `/admin/*` as a standard user |
| API6 | Unrestricted Access to Sensitive Business Flows | Massive scraping, feature abuse |
| API7 | Server Side Request Forgery (SSRF) | Same as A10 OWASP Top 10 but on APIs |
| API8 | Security Misconfiguration | Overly permissive CORS (`*`), TRACE/OPTIONS enabled |
| API9 | Improper Inventory Management | Undocumented zombie APIs, deprecated v1/v2 versions exposed |
| API10 | Unsafe Consumption of APIs | Third-party API without response validation |

## QA security test categories (OWASP alignment)

| OWASP category | Priority QA tests |
|---|---|
| **Authentication (A07)** | Account lockout after N attempts, password policy, MFA, session timeout, server-side logout |
| **Authorization (A01, API1, API5)** | Horizontal escalation (another user), vertical (admin), IDOR, direct URL access |
| **Input Validation (A03)** | SQL injection, XSS reflected/stored/DOM, command injection, LDAP, XXE, path traversal |
| **Session Management (A07)** | Fixation, token in URL, cookies without HttpOnly/Secure/SameSite, post-login regeneration |
| **Data Protection (A02)** | Hashed passwords (bcrypt/argon2 ≥ 10 rounds), HTTPS enforced, logs without sensitive data, PII masking |
| **Configuration (A05)** | CSP/HSTS/X-Frame-Options/X-Content-Type-Options headers, debug disabled in prod, generic errors |
| **Dependencies (A06)** | SCA scan in CI, blocking CVEs < 30 days, automatic updates |
| **Logging (A09)** | Failed auth attempts logged, alerting > 5/min, admin access traced |

## Security test case template

```
ID: TSEC-[XXX]
Title: [Vulnerability tested, e.g. SQLi on /api/users?id=]
OWASP: [A03 - Injection]
CWE: [CWE-89 - SQL Injection]
Risk: ☐ Critical ☐ High ☐ Medium ☐ Low
CVSS 3.1: [Vector + Score, e.g. AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8]

PRECONDITIONS:
- Environment: [pre-prod / staging]
- Test account: [standard user]
- Tool: [Burp Suite / OWASP ZAP / curl]

SCENARIO:
1. Capture the legitimate request via proxy
2. Inject the payload: ' OR 1=1--
3. Observe the server response

EXPECTED RESULT (secure):
- HTTP 400/422 (Bad Request)
- Generic error without stack trace
- SIEM alert log triggered

OBTAINED RESULT: [...]
STATUS: ☐ Pass (secure) ☐ Fail (vulnerable)

REMEDIATION (if Fail): [Parameterized queries, prepared statements, ORM]
```

## Minimal security checklist (Go/No-Go go-live)

```
🔐 Authentication & Sessions (A07)
☐ Account lockout after 5 failed attempts
☐ Password policy: ≥ 12 characters, min 3 classes
☐ MFA available (TOTP / WebAuthn) for sensitive accounts
☐ Hashing bcrypt/argon2 (never MD5, SHA1, plain SHA256)
☐ Session invalidated server-side after logout
☐ Cookie: HttpOnly + Secure + SameSite=Lax
☐ Idle timeout: 15 min admin, 30 min user

🛡️ Authorization (A01)
☐ Direct URL access to another user's resource → 403
☐ ID tampering in URL → 403
☐ APIs protected by token (Bearer/OAuth2)
☐ Effective RBAC/ABAC (rights matrix audit)
☐ No admin endpoints exposed without admin auth

💉 Input validation (A03)
☐ Parameterized SQL queries (prepared statements) — no concatenation
☐ HTML/JS escaping on all user-controlled outputs
☐ Server-side validation (never client-only)
☐ Upload: extension whitelist, antivirus, S3 isolation
☐ XXE disabled on XML parsers

🔒 Data & Crypto (A02)
☐ HTTPS enforced (HSTS preload list)
☐ TLS ≥ 1.2 (1.3 preferred)
☐ Secrets never in clear text (Vault, AWS Secrets Manager)
☐ Logs without PII / passwords / tokens
☐ GDPR: pseudonymization of analytics data

⚙️ Configuration (A05)
☐ Headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options
☐ Debug disabled in prod (verbose errors hidden)
☐ CORS: origin whitelist (never `*` in prod)
☐ HTTP methods: OPTIONS/TRACE disabled
☐ Server banner hidden (Apache/Nginx version)

📦 Dependencies (A06)
☐ SCA scan (Snyk / Trivy / Dependabot) in the CI pipeline
☐ Blocking CVEs (CVSS ≥ 7) fixed < 30 days
☐ Active libraries (no EOL version)

📊 Logging & Monitoring (A09)
☐ Failed auth logged with IP, user-agent, timestamp
☐ Brute-force alerting (> 10 failures/min/IP)
☐ Admin audit logs (user creation, rights change)
☐ Log retention ≥ 90 days
```

## QA security tools

| Type | Tool | Usage |
|---|---|---|
| **Proxy / manual pentest** | Burp Suite (Pro), OWASP ZAP (free) | Interception, fuzzing, request replay |
| **Automated DAST** | OWASP ZAP, Nessus, Acunetix, Qualys WAS | Dynamic scan of a running app |
| **SAST (static code)** | SonarQube SAST, Checkmarx, Snyk Code, Semgrep | Source code analysis in CI/CD |
| **SCA (dependencies)** | Snyk, Trivy, Dependabot (GitHub), OWASP Dependency-Check | CVE scan on libs/containers |
| **Secrets scanner** | TruffleHog, GitGuardian, git-secrets | Detect clear-text secrets in commits |
| **Container security** | Trivy, Clair, Anchore | Scan Docker images |
| **Authentication testing** | Hydra (brute force), JWT.io (decode JWT) | Targeted auth tests |
| **WAF / IDS** | ModSecurity, Cloudflare WAF, Snort | Runtime protection (not QA but to validate) |

## Security anti-patterns (absolutely avoid)

- ❌ **Late pentest** (just before go-live) — Shift-left with SAST/DAST in the CI pipeline
- ❌ **SAST/DAST missing from the pipeline** — Must fail the build on a critical CVE
- ❌ **Clear-text secrets in the code** or exposed env variables — Vault mandatory
- ❌ **Authentication based solely on a session cookie** without a CSRF token
- ❌ **Verbose errors in prod** (stack traces, exposed SQL queries)
- ❌ **Permissive CORS `Access-Control-Allow-Origin: *`** in production
- ❌ **Insecure Java/Python/PHP deserialization** (classic RCE)
- ❌ **JWT without signature verification** or with `alg: none` accepted
- ❌ **Missing rate limiting** on sensitive endpoints (login, reset password, API)
- ❌ **PII logs** (passwords, tokens, card numbers) in clear text
- ❌ **Security tested only at the end** (pure sequential V-model) — adopt DevSecOps even in a V-model
- ❌ **Dependencies never updated** ("it works, don't touch it")

## ASVS levels (OWASP Application Security Verification Standard)

- **Level 1 — Opportunistic**: protection against basic opportunistic attacks (low-risk public apps)
- **Level 2 — Standard**: protection against most risks (business apps, B2B, holding significant data)
- **Level 3 — Advanced**: critical applications (healthcare, finance, defense) — the strictest requirements

For CAC40 / banking / luxury clients: aim for **Level 2 minimum**, **Level 3 for sensitive products** (payment, structural personal data).

## QA security deliverables

- Security audit report (OWASP Top 10 mapping, identified vulnerabilities + CVSS + remediation)
- Security test catalog (test case catalog by OWASP category)
- Signed Go/No-Go go-live checklist
- CI/CD pipeline configuration (SAST + DAST + SCA integrated)
- Remediation plan by severity (P0 < 24h, P1 < 7d, P2 < 30d)
- Register of accepted residual risks (with CISO/DPO signature)

## See also

- [`AGENT-SECURITE-IA.md`](../../AGENT-SECURITE-IA.md) — AI-specific security (OWASP LLM Top 10, prompt injection, model theft, data poisoning)
- [`AGENT-DEVOPS-CLOUD.md`](../../AGENT-DEVOPS-CLOUD.md) — Integration of SAST/DAST/SCA into a DevSecOps pipeline
- [`AGENT-JURIDIQUE-IA.md`](../../AGENT-JURIDIQUE-IA.md) — GDPR, AI Act, NIS2 compliance in application security

## Sources

- **OWASP Top 10 (2021)** — owasp.org/Top10/ — the most widely used application security standard in the world
- **OWASP API Security Top 10 (2023)** — owasp.org/API-Security/editions/2023/en/0x11-t10/
- **OWASP LLM Top 10 (2025)** — genai.owasp.org/llm-top-10/ (cross-reference AGENT-SECURITE-IA)
- **CWE Top 25 (2024)** — cwe.mitre.org/top25/archive/2024/2024_cwe_top25.html
- **OWASP ASVS v4.0.3** — owasp.org/www-project-application-security-verification-standard/
- **NIST Cybersecurity Framework 2.0 (2024)** — nist.gov/cyberframework
- **ISTQB CT-SEC Security Tester Syllabus** — istqb.org/certifications/security-tester
- **CVSS 3.1 Calculator** — first.org/cvss/calculator/3.1
- **OWASP Cheat Sheets Series** — cheatsheetseries.owasp.org/ — practical guides by topic
- **Microsoft STRIDE Threat Model** — learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats
- **OWASP SAMM** (Software Assurance Maturity Model) — owaspsamm.org/
