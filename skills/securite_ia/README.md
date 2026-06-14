# Skills — AI Security & Cybersecurity

> Folder attached to `AGENT-SECURITE-IA.md`
> Frameworks: OWASP LLM Top 10 (2025) · NIST AI RMF 1.0 · ISO/IEC 42001:2023 · ISO 27001 · MITRE ATT&CK

---

## Skill index

| # | Skill | When to invoke it | Reference |
|---|---|---|---|
| 1 | [`owasp-llm-top10.md`](owasp-llm-top10.md) | Audit an LLM against the 10 critical 2025 vulnerabilities + CVSS scoring | OWASP 2025 |
| 2 | [`pentest-ia.md`](pentest-ia.md) | Run an offensive penetration test on an AI system (Red Team) | CEH v13 · OSCP |
| 3 | [`devsecops.md`](devsecops.md) | Integrate SAST/DAST/SCA into the CI/CD pipeline | AWS Security · AZ-500 |
| 4 | [`zero-trust.md`](zero-trust.md) | Architect a Zero Trust system (mTLS, IAM, micro-segmentation) | CISSP · NIST 800-207 |
| 5 | [`iam-gestion-acces.md`](iam-gestion-acces.md) | Implement RBAC/ABAC, JWT, secrets management and revocation | CISSP · AZ-500 |
| 6 | [`chiffrement-donnees.md`](chiffrement-donnees.md) | Encrypt at rest (AES-256-GCM, KMS) and in transit (TLS 1.3) + Differential Privacy | CISSP · ISO 27001 |
| 7 | [`soc-siem.md`](soc-siem.md) | Deploy a SOC/SIEM with Sigma rules and detection playbooks | CISM · AWS Security |
| 8 | [`threat-modeling.md`](threat-modeling.md) | Model threats with STRIDE + PASTA + MITRE ATT&CK | CISSP · CEH v13 |
| 9 | [`securite-api.md`](securite-api.md) | Secure an API against the OWASP API Top 10 (auth, rate limit, WAF) | GIAC GWEB · OSCP |
| 10 | [`incident-response.md`](incident-response.md) | Run incident response (PICERL + 6 LLM-specific runbooks) | CISSP · CISM |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... AUDIT an existing AI system?
    → owasp-llm-top10.md (compliance audit)
    → threat-modeling.md (upstream modeling)
    → pentest-ia.md (validation through attack)

  ... BUILD a secure AI system?
    → zero-trust.md (target architecture)
    → iam-gestion-acces.md (access control)
    → chiffrement-donnees.md (data protection)
    → securite-api.md (exposure layer)

  ... INDUSTRIALIZE security in the dev chain?
    → devsecops.md (secure CI/CD)

  ... DETECT & RESPOND to incidents?
    → soc-siem.md (detection)
    → incident-response.md (response + runbooks)
```

---

## Boundaries with other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| Basic OWASP awareness on the dev-team side | `AGENT-TECH-LEAD.md` skill `securite-applicative.md` | TECH-LEAD spreads the basics; SECURITE-IA runs the professional audit |
| Regulatory compliance (AI Act, GDPR) | `AGENT-JURIDIQUE-IA.md` | SECURITE-IA = technical controls; JURIDIQUE = legal obligations |
| Cloud infrastructure security | `AGENT-DEVOPS-CLOUD.md` skill `securite-devops.md` | DEVOPS secures the infrastructure; SECURITE-IA audits and runs the red team |
| Overall AI architecture | `AGENT-AI-ARCHITECT.md` skill `secure-by-design.md` | AI-ARCHITECT builds security in from design; SECURITE-IA validates after the fact |

---

## Frameworks and standards used

- **OWASP LLM Top 10 (2025)**: https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **NIST AI RMF 1.0 (2023)**: https://www.nist.gov/itl/ai-risk-management-framework
- **ISO/IEC 42001:2023**: AI Management System (AIMS)
- **ISO/IEC 27001:2022**: Information Security Management
- **MITRE ATT&CK + MITRE ATLAS**: attack tactics and techniques on AI systems
- **CVSS 3.1**: vulnerability scoring (https://www.first.org/cvss/calculator/3.1)
- **CWE**: weakness taxonomy (https://cwe.mitre.org)
