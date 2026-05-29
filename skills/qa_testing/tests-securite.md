# Skill QA Cycle V — Tests de Sécurité (OWASP Top 10 + ISTQB CT-SEC)

> Certification : CT-SEC · CTAL-TTA · CTFL
> Agents : AGENT-QA-CYCLEV.md · AGENT-SECURITE-IA.md
> Méthodologie : Cycle en V (applicable Agile)

## Objectif
Identifier les vulnérabilités de sécurité testables par un QA fonctionnel, en s'appuyant sur les référentiels reconnus (OWASP Top 10, CWE Top 25, NIST CSF). Détecter avant pentest spécialisé les bugs sécurité courants (injection, auth, exposition de données, contrôle d'accès).

> **Frontière** : ce skill couvre le **QA fonctionnel sécurité** (validation par tests des contrôles applicatifs). Pour la sécurité IA spécifique (prompt injection, model theft, OWASP LLM Top 10), voir `AGENT-SECURITE-IA.md`.

## Référentiels mobilisés

| Référentiel | Source | Année | Usage QA |
|---|---|---|---|
| **OWASP Top 10** | owasp.org/Top10 | 2021 (édition à jour) | 10 vulnérabilités web prioritaires |
| **OWASP API Security Top 10** | owasp.org/API-Security | 2023 | Sécurité des APIs REST/GraphQL |
| **CWE Top 25** | cwe.mitre.org/top25 | 2024 | Most Dangerous Software Weaknesses |
| **OWASP ASVS** | owasp.org/ASVS | v4.0.3 (2024) | Niveaux 1-2-3 de vérification sécurité |
| **NIST CSF** | nist.gov/cyberframework | 2.0 (2024) | Govern / Identify / Protect / Detect / Respond / Recover |
| **ISTQB CT-SEC** | istqb.org | 2022 | Certified Tester Security syllabus |
| **OWASP LLM Top 10** | owasp.org/llm-top-10 | 2025 | (IA spécifique → AGENT-SECURITE-IA) |

## OWASP Top 10 (2021) — Mapping QA

| # | Vulnérabilité | Description | Tests QA |
|---|---|---|---|
| **A01** | Broken Access Control | Contrôle d'accès défaillant (IDOR, élévation privilège) | URL directe ressource autre user, modification ID dans URL, escalade horizontal/vertical |
| **A02** | Cryptographic Failures | Chiffrement défaillant (TLS, hashing, stockage) | HTTPS forcé, hash bcrypt/argon2 (pas MD5/SHA1), TLS ≥ 1.2 |
| **A03** | Injection | SQL/NoSQL/OS/LDAP/XSS injection | Payloads `' OR '1'='1`, `<script>`, `${jndi:ldap://...}` |
| **A04** | Insecure Design | Défauts architecture sécurité | Threat modeling absent, design review manquant |
| **A05** | Security Misconfiguration | Configuration par défaut, debug en prod | Headers sécurité absents (CSP, HSTS, X-Frame-Options), erreurs verbeuses |
| **A06** | Vulnerable Components | Dépendances obsolètes / CVE connues | Scan SCA (Snyk, Trivy, Dependabot) |
| **A07** | Auth & Identification Failures | Auth faible, sessions vulnérables | Brute force, session fixation, JWT non vérifié |
| **A08** | Software & Data Integrity Failures | Pipeline CI/CD compromis, désérialisation non sécurisée | Vérifier signatures de dépendances, pipeline sécurisé |
| **A09** | Logging & Monitoring Failures | Pas de détection attaque | SIEM connecté, logs auth/erreurs, alerting brute force |
| **A10** | Server-Side Request Forgery (SSRF) | Le serveur fait une requête contrôlée par l'attaquant | Tester URLs internes (169.254.169.254 AWS metadata, file://, gopher://) |

## OWASP API Security Top 10 (2023) — focus QA APIs

| # | Vulnérabilité | Tests QA |
|---|---|---|
| API1 | Broken Object Level Authorization (BOLA) | Modifier l'ID dans `/users/{id}/orders` pour accéder à un autre user |
| API2 | Broken Authentication | JWT sans signature, refresh token leak, OAuth flow faible |
| API3 | Broken Object Property Level Auth | Modifier des champs admin via PATCH (mass assignment) |
| API4 | Unrestricted Resource Consumption | Rate limiting absent, pagination non bornée |
| API5 | Broken Function Level Authorization | Accéder à `/admin/*` en user standard |
| API6 | Unrestricted Access to Sensitive Business Flows | Scraping massif, abus de fonctionnalités |
| API7 | Server Side Request Forgery (SSRF) | Idem A10 OWASP Top 10 mais sur APIs |
| API8 | Security Misconfiguration | CORS trop permissif (`*`), TRACE/OPTIONS activés |
| API9 | Improper Inventory Management | API zombies non documentées, versions v1/v2 deprecated exposées |
| API10 | Unsafe Consumption of APIs | API tierce sans validation des réponses |

## Catégories de tests QA Sécurité (alignement OWASP)

| Catégorie OWASP | Tests prioritaires QA |
|---|---|
| **Authentication (A07)** | Verrouillage compte après N tentatives, politique mot de passe, MFA, session timeout, logout côté serveur |
| **Authorization (A01, API1, API5)** | Élévation horizontale (autre user), verticale (admin), IDOR, accès direct URL |
| **Input Validation (A03)** | SQL injection, XSS reflected/stored/DOM, command injection, LDAP, XXE, path traversal |
| **Session Management (A07)** | Fixation, token in URL, cookies sans HttpOnly/Secure/SameSite, regénération post-login |
| **Data Protection (A02)** | Mots de passe hashés (bcrypt/argon2 ≥ 10 rounds), HTTPS forcé, logs sans données sensibles, masquage PII |
| **Configuration (A05)** | Headers CSP/HSTS/X-Frame-Options/X-Content-Type-Options, debug désactivé prod, erreurs génériques |
| **Dependencies (A06)** | Scan SCA dans CI, CVE bloquantes < 30 jours, mise à jour automatique |
| **Logging (A09)** | Tentatives auth échouées loggées, alerting > 5/min, accès admin tracé |

## Template cas de test sécurité

```
ID : TSEC-[XXX]
Titre : [Vulnérabilité testée, ex: SQLi sur /api/users?id=]
OWASP : [A03 - Injection]
CWE : [CWE-89 - SQL Injection]
Risque : ☐ Critique ☐ Élevé ☐ Moyen ☐ Faible
CVSS 3.1 : [Vector + Score, ex: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8]

PRÉCONDITIONS :
- Environnement : [pré-prod / staging]
- Compte de test : [user standard]
- Outil : [Burp Suite / OWASP ZAP / curl]

SCÉNARIO :
1. Capturer la requête légitime via proxy
2. Injecter le payload : ' OR 1=1--
3. Observer la réponse serveur

RÉSULTAT ATTENDU (sécurisé) :
- HTTP 400/422 (Bad Request)
- Erreur générique sans stack trace
- Log d'alerte SIEM déclenché

RÉSULTAT OBTENU : [...]
STATUT : ☐ Pass (sécurisé) ☐ Fail (vulnérable)

REMEDIATION (si Fail) : [Requêtes paramétrées, prepared statements, ORM]
```

## Checklist sécurité minimale (Go/No-Go MEP)

```
🔐 Authentification & Sessions (A07)
☐ Verrouillage compte après 5 tentatives échouées
☐ Politique mot de passe : ≥ 12 caractères, 3 classes min
☐ MFA disponible (TOTP / WebAuthn) pour comptes sensibles
☐ Hashing bcrypt/argon2 (jamais MD5, SHA1, SHA256 simple)
☐ Session invalidée côté serveur après logout
☐ Cookie : HttpOnly + Secure + SameSite=Lax
☐ Timeout inactif : 15 min admin, 30 min user

🛡️ Autorisation (A01)
☐ Accès direct URL ressource autre user → 403
☐ Modification ID dans URL → 403
☐ API protégées par token (Bearer/OAuth2)
☐ RBAC/ABAC effectif (audit matrice droits)
☐ Pas d'endpoints admin exposés sans auth admin

💉 Validation entrées (A03)
☐ Requêtes SQL paramétrées (prepared statements) — pas de concaténation
☐ Échappement HTML/JS sur tous outputs user-controlled
☐ Validation côté serveur (jamais uniquement client)
☐ Upload : whitelist extensions, antivirus, isolation S3
☐ XXE désactivé sur parsers XML

🔒 Données & Crypto (A02)
☐ HTTPS forcé (HSTS preload list)
☐ TLS ≥ 1.2 (1.3 préféré)
☐ Secrets jamais en clair (Vault, AWS Secrets Manager)
☐ Logs sans PII / sans mots de passe / sans tokens
☐ RGPD : pseudonymisation données analytics

⚙️ Configuration (A05)
☐ Headers : CSP, HSTS, X-Frame-Options, X-Content-Type-Options
☐ Debug désactivé en prod (errors verbeuses cachées)
☐ CORS : whitelist origines (jamais `*` en prod)
☐ Méthodes HTTP : OPTIONS/TRACE désactivées
☐ Bannière serveur masquée (Apache/Nginx version)

📦 Dépendances (A06)
☐ Scan SCA (Snyk / Trivy / Dependabot) en pipeline CI
☐ CVE bloquantes (CVSS ≥ 7) corrigées < 30 jours
☐ Bibliothèques actives (pas de version EOL)

📊 Logging & Monitoring (A09)
☐ Auth échouées loggées avec IP, user-agent, timestamp
☐ Alerting brute force (> 10 échecs/min/IP)
☐ Audit logs admin (création user, changement droits)
☐ Rétention logs ≥ 90 jours
```

## Outils QA Sécurité

| Type | Outil | Usage |
|---|---|---|
| **Proxy / Pentest manuel** | Burp Suite (Pro), OWASP ZAP (gratuit) | Interception, fuzzing, replay requêtes |
| **DAST automatisé** | OWASP ZAP, Nessus, Acunetix, Qualys WAS | Scan dynamique app en exécution |
| **SAST (code statique)** | SonarQube SAST, Checkmarx, Snyk Code, Semgrep | Analyse code source CI/CD |
| **SCA (dépendances)** | Snyk, Trivy, Dependabot (GitHub), OWASP Dependency-Check | Scan CVE sur libs/containers |
| **Secrets scanner** | TruffleHog, GitGuardian, git-secrets | Détection secrets en clair commits |
| **Container security** | Trivy, Clair, Anchore | Scan images Docker |
| **Authentification testing** | Hydra (brute force), JWT.io (decode JWT) | Tests auth ciblés |
| **WAF / IDS** | ModSecurity, Cloudflare WAF, Snort | Protection runtime (pas QA mais à valider) |

## Anti-patterns sécurité (à éviter absolument)

- ❌ **Pentest tardif** (juste avant MEP) — Shift-left avec SAST/DAST dans le pipeline CI
- ❌ **SAST/DAST absents du pipeline** — Doit échouer le build si CVE critique
- ❌ **Secrets en clair dans le code** ou variables d'env exposées — Vault obligatoire
- ❌ **Authentification basée uniquement sur cookie session** sans CSRF token
- ❌ **Erreurs verbeuses en prod** (stack traces, requêtes SQL exposées)
- ❌ **CORS permissif `Access-Control-Allow-Origin: *`** en production
- ❌ **Désérialisation Java/Python/PHP non sécurisée** (RCE classique)
- ❌ **JWT sans vérification de signature** ou avec `alg: none` accepté
- ❌ **Rate limiting absent** sur endpoints sensibles (login, reset password, API)
- ❌ **Logs PII** (mots de passe, tokens, numéros CB) en clair
- ❌ **Sécurité testée uniquement à la fin** (cycle V séquentiel pur) — adopter DevSecOps même en cycle V
- ❌ **Dépendances jamais mises à jour** ("ça marche, on ne touche pas")

## Niveaux ASVS (OWASP Application Security Verification Standard)

- **Level 1 — Opportuniste** : protection contre attaques opportunistes basiques (apps publiques low-risk)
- **Level 2 — Standard** : protection contre la plupart des risques (apps métier, B2B, contenant données significatives)
- **Level 3 — Avancé** : applications critiques (santé, finance, défense) — exigences les plus strictes

Pour clients CAC40 / banque / luxe : viser **Level 2 minimum**, **Level 3 pour produits sensibles** (paiement, données personnelles structurelles).

## Livrables QA Sécurité

- Rapport audit sécurité (OWASP Top 10 mapping, vulnérabilités identifiées + CVSS + remediation)
- Cahier de tests sécurité (catalogue cas de test par catégorie OWASP)
- Checklist Go/No-Go MEP signée
- Configuration pipeline CI/CD (SAST + DAST + SCA intégrés)
- Plan de remediation par sévérité (P0 < 24h, P1 < 7j, P2 < 30j)
- Registre des risques résiduels acceptés (avec signature RSSI/DPO)

## Voir aussi

- [`AGENT-SECURITE-IA.md`](../../AGENT-SECURITE-IA.md) — Sécurité IA spécifique (OWASP LLM Top 10, prompt injection, model theft, data poisoning)
- [`AGENT-DEVOPS-CLOUD.md`](../../AGENT-DEVOPS-CLOUD.md) — Intégration SAST/DAST/SCA dans pipeline DevSecOps
- [`AGENT-JURIDIQUE-IA.md`](../../AGENT-JURIDIQUE-IA.md) — Conformité RGPD, AI Act, NIS2 dans la sécurité applicative

## Sources

- **OWASP Top 10 (2021)** — owasp.org/Top10/ — référentiel le plus utilisé au monde pour la sécurité applicative
- **OWASP API Security Top 10 (2023)** — owasp.org/API-Security/editions/2023/en/0x11-t10/
- **OWASP LLM Top 10 (2025)** — genai.owasp.org/llm-top-10/ (cross-référence AGENT-SECURITE-IA)
- **CWE Top 25 (2024)** — cwe.mitre.org/top25/archive/2024/2024_cwe_top25.html
- **OWASP ASVS v4.0.3** — owasp.org/www-project-application-security-verification-standard/
- **NIST Cybersecurity Framework 2.0 (2024)** — nist.gov/cyberframework
- **ISTQB CT-SEC Security Tester Syllabus** — istqb.org/certifications/security-tester
- **CVSS 3.1 Calculator** — first.org/cvss/calculator/3.1
- **OWASP Cheat Sheets Series** — cheatsheetseries.owasp.org/ — guides pratiques par sujet
- **Microsoft STRIDE Threat Model** — learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats
- **OWASP SAMM** (Software Assurance Maturity Model) — owaspsamm.org/
