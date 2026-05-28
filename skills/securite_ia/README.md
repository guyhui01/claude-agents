# Skills — Sécurité IA & Cybersécurité

> Dossier rattaché à `AGENT-SECURITE-IA.md`
> Référentiels : OWASP LLM Top 10 (2025) · NIST AI RMF 1.0 · ISO/IEC 42001:2023 · ISO 27001 · MITRE ATT&CK

---

## Index des skills

| # | Skill | Quand l'invoquer | Référence |
|---|---|---|---|
| 1 | [`owasp-llm-top10.md`](owasp-llm-top10.md) | Auditer un LLM contre les 10 vulnérabilités critiques 2025 + scoring CVSS | OWASP 2025 |
| 2 | [`pentest-ia.md`](pentest-ia.md) | Conduire un test d'intrusion offensif sur un système IA (Red Team) | CEH v13 · OSCP |
| 3 | [`devsecops.md`](devsecops.md) | Intégrer SAST/DAST/SCA dans le pipeline CI/CD | AWS Security · AZ-500 |
| 4 | [`zero-trust.md`](zero-trust.md) | Architecturer un système Zero Trust (mTLS, IAM, micro-segmentation) | CISSP · NIST 800-207 |
| 5 | [`iam-gestion-acces.md`](iam-gestion-acces.md) | Implémenter RBAC/ABAC, JWT, gestion des secrets et révocation | CISSP · AZ-500 |
| 6 | [`chiffrement-donnees.md`](chiffrement-donnees.md) | Chiffrer at-rest (AES-256-GCM, KMS) et in-transit (TLS 1.3) + Differential Privacy | CISSP · ISO 27001 |
| 7 | [`soc-siem.md`](soc-siem.md) | Déployer un SOC/SIEM avec règles Sigma et playbooks de détection | CISM · AWS Security |
| 8 | [`threat-modeling.md`](threat-modeling.md) | Modéliser les menaces avec STRIDE + PASTA + MITRE ATT&CK | CISSP · CEH v13 |
| 9 | [`securite-api.md`](securite-api.md) | Sécuriser une API contre les OWASP API Top 10 (auth, rate limit, WAF) | GIAC GWEB · OSCP |
| 10 | [`incident-response.md`](incident-response.md) | Conduire la réponse à un incident (PICERL + 6 runbooks LLM-spécifiques) | CISSP · CISM |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... AUDITER un système IA existant ?
    → owasp-llm-top10.md (audit conformité)
    → threat-modeling.md (modélisation amont)
    → pentest-ia.md (validation par attaque)

  ... CONSTRUIRE un système IA sécurisé ?
    → zero-trust.md (architecture cible)
    → iam-gestion-acces.md (contrôle d'accès)
    → chiffrement-donnees.md (protection des données)
    → securite-api.md (couche d'exposition)

  ... INDUSTRIALISER la sécurité dans la chaîne dev ?
    → devsecops.md (CI/CD sécurisé)

  ... DÉTECTER & RÉPONDRE aux incidents ?
    → soc-siem.md (détection)
    → incident-response.md (réponse + runbooks)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Sensibilisation OWASP basique côté équipe dev | `AGENT-TECH-LEAD.md` skill `securite-applicative.md` | TECH-LEAD diffuse les basics ; SECURITE-IA conduit l'audit professionnel |
| Conformité réglementaire (AI Act, RGPD) | `AGENT-JURIDIQUE-IA.md` | SECURITE-IA = contrôles techniques ; JURIDIQUE = obligations légales |
| Sécurité infrastructure cloud | `AGENT-DEVOPS-CLOUD.md` skill `securite-devops.md` | DEVOPS sécurise l'infra ; SECURITE-IA audite et conduit le red team |
| Architecture IA globale | `AGENT-AI-ARCHITECT.md` skill `secure-by-design.md` | AI-ARCHITECT intègre la sécurité dès le design ; SECURITE-IA valide a posteriori |

---

## Référentiels et standards utilisés

- **OWASP LLM Top 10 (2025)** : https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **NIST AI RMF 1.0 (2023)** : https://www.nist.gov/itl/ai-risk-management-framework
- **ISO/IEC 42001:2023** : AI Management System (AIMS)
- **ISO/IEC 27001:2022** : Information Security Management
- **MITRE ATT&CK + MITRE ATLAS** : tactiques et techniques d'attaque sur les systèmes IA
- **CVSS 3.1** : scoring des vulnérabilités (https://www.first.org/cvss/calculator/3.1)
- **CWE** : taxonomie des faiblesses (https://cwe.mitre.org)
