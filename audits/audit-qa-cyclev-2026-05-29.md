# Audit qualité — AGENT-QA-CYCLEV (8ème agent groupe Agile/Produit)

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8 Agile/Produit
> **Périmètre** : 13 skills spécifiques QA-CYCLEV dans le dossier mutualisé `skills/qa_testing/`
> **Méthode** : extraction factuelle Explore + cotation expert Claude principal

---

## 1. Synthèse exécutive

**Verdict global QA-CYCLEV** : Patrimoine documentaire solide (Master Test Plan IEEE 829, PV recette, KPIs perf, RACI environnements) mais **même pattern systémique que QA-AGILE** : 12/13 sans certification déclarée. **1 bug critique sécurité** : `tests-securite.md` sans OWASP Top 10 ni CT-SEC 2022. `environnements.md` est le seul à avoir certif → modèle à dupliquer.

| Métrique | QA-CYCLEV | Comparaison |
|---|---|---|
| Skills audités | 13/13 | — |
| Skills ✓ purs | 0/13 | — |
| Skills P3 | 0/13 | — |
| Skills P2 | 1/13 (environnements) | — |
| Skills P1 | **12/13 (92%)** ⚠️ | quasi-record (QA-AGILE 100%) |
| Skills P0 | 0/13 | — |
| Skills sans certif en en-tête | **12/13 (92%)** | identique QA-AGILE |
| Skills avec source datée | 0/13 | — |
| Skills avec anti-pattern explicite | 1/13 (environnements seul "problèmes fréquents") | — |

**Constats clés** :
- 🔴 **Bug critique sécurité** : `tests-securite.md` sans OWASP Top 10, CT-SEC 2022, NIST CSF — ironique pour un skill sécurité chez des clients CAC40 (CHANEL, Crédit Agricole, Orange)
- 🔴 **Bug structurel systémique** : 12/13 skills sans certif (QA-CYCLEV revendique 8 certs ISTQB)
- ⭐ **`environnements.md`** (137L, certif + agent déclarés) = **modèle pour duplication** — seul skill QA-CYCLEV "propre" structurellement
- 🟡 **ISO/IEC/IEEE 29119** (standard de référence testing) **absent partout**
- 🟡 **CT-PT Performance Testing 2018** absent dans `tests-performance.md` (outils JMeter/Gatling/k6 listés sans URL)
- 🟡 **CT-SEC Security Tester 2022** absent dans `tests-securite.md` (anomalie majeure)
- 🟢 Templates riches : Master Test Plan IEEE 829 (9 sections), template cas test (8 champs), PV de Recette UAT complet, rapport qualité final

---

## 2. Tableau récapitulatif (13 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict | Note |
|---|---|---:|---|:---:|:---:|:---:|:---:|---|
| 1 | strategie-tests.md | 76 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Sans certif |
| 2 | plan-tests.md | 72 | ❌ | ⚠ | ✓ | ⚠ | **P1** | IEEE 829 sans 2008 |
| 3 | cas-de-test.md | 64 | ❌ | ✓ | ✓ | ⚠ | **P1** | Techniques ISTQB conformes |
| 4 | gestion-anomalies.md | 68 | ❌ | ✓ | ✓ | ⚠ | **P1** | Sévérités ISTQB conformes |
| 5 | regression-tnr.md | 59 | ❌ | ⚠ | ✓ | ⚠ | **P1** | Stratégies + matrice impact |
| 6 | tests-integration.md | 53 | ❌ | ⚠ | ✓ | ⚠ | **P1** | 4 approches + cas test API |
| 7 | tests-systeme.md | 47 | ❌ | ⚠ | ✓ | ⚠ | **P1** | 47L pour tests système |
| 8 | tests-uat.md | 74 | ❌ | ⚠ | ✓ | ⚠ | **P1** | PV recette + critères MEP |
| 9 | tests-performance.md | 47 | ❌ | ⚠ | ✓ | ⚠ | **P1** | 🔴 CT-PT 2018 absent |
| 10 | tests-securite.md | 58 | ❌ | **✗** | ⚠ | **✗** | **P1** | 🔴🔴 **OWASP Top 10 ABSENT + CT-SEC 2022 absent** |
| 11 | revues-inspections.md | 51 | ❌ | ⚠ | ✓ | ⚠ | **P1** | IEEE 1028 sans date |
| 12 | reporting-qualite.md | 65 | ❌ | ✓ | ✓ | ⚠ | **P1** | Métriques ISTQB conformes |
| 13 | **environnements.md** | 137 | ✓ | ⚠ | ✓ | ⚠ | **P2** | ⭐ **Seul skill avec certif + agent déclarés** |

---

## 3. Bug critique — `tests-securite.md` (58L)

### Symptôme
Skill sécurité **sans aucune référence sécurité reconnue** :
- **OWASP Top 10** (référentiel n°1 mondial sécurité applicative) — ABSENT
- **CT-SEC Security Tester 2022** (cert ISTQB revendiquée par l'agent) — ABSENT
- **NIST Cybersecurity Framework** — ABSENT
- **OWASP ASVS** (Application Security Verification Standard) — ABSENT
- **CWE Top 25** (Most Dangerous Software Weaknesses) — ABSENT

### Impact business
Tu interviens chez des clients **CAC40/banque/luxe** (Crédit Agricole CIB, CHANEL, EDF, MBDA, Orange). Un skill QA Sécurité **sans OWASP Top 10** = signal d'alerte immédiat pour un RSSI ou un DPO. Risque réputationnel max.

### Corrections (V2 prioritaire)
- Déclarer en-tête : `> Certification : CT-SEC · CTAL-TTA · CTAL-TA`
- Référencer **OWASP Top 10 (2021)** + OWASP API Security Top 10 (2023) — owasp.org/Top10/
- Référencer **CWE Top 25 (2024)** — cwe.mitre.org/top25/
- Référencer NIST CSF 2.0 (2024) — nist.gov/cyberframework
- Référencer OWASP ASVS 4.0
- Citer outils : Burp Suite, OWASP ZAP, Nessus, SonarQube SAST, Snyk
- Lien explicite vers `AGENT-SECURITE-IA.md` (frontière sécurité applicative vs IA)
- Anti-patterns sécurité : "Pentest tardif", "Pas de SAST/DAST en pipeline", "Secrets en clair en code", "Authentification basée uniquement sur cookie session"

---

## 4. Skill modèle : `environnements.md` ⭐

**Pourquoi c'est le seul P2 (vs 12 P1)** :
- ✅ Certifs déclarées en en-tête L.4 : `ISTQB® CTAL-TM · ISTQB® CTAL-TTA`
- ✅ Agent déclaré L.5 : `AGENT-QA-CYCLEV.md`
- ✅ Volumétrie correcte (137L vs 47-76L des autres)
- ✅ 5 anti-patterns implicites L.90-94 (problèmes fréquents)
- ✅ RACI complet, métriques monitoring, RACI 4 rôles

**Action P2 (cosmétique)** :
- Citer ISO/IEC/IEEE 29119-4 (Test techniques and design for test environments)
- Ajouter URLs outils (Faker, Mockaroo, TestContainers, Delphix, Terraform, Ansible, Grafana, Datadog)
- Cross-link vers AGENT-DEVOPS-CLOUD.md (Infrastructure as Code)

**Conclusion architecturale** : `environnements.md` confirme que le pattern "certif + agent en en-tête" est tout à fait possible et résoudrait instantanément 12 P1.

---

## 5. V1 unifiée qa_testing (23 skills) — Plan d'action

Le dossier `qa_testing/` est **mutualisé** entre QA-AGILE (10 skills) et QA-CYCLEV (13 skills). V1 unique recommandée :

### Mapping certifs/agents (extraction depuis AGENT-QA-AGILE.md + AGENT-QA-CYCLEV.md tables)

**Skills QA-AGILE (10)** :
| Skill | Certif | Agent |
|---|---|---|
| strategie-agile.md | CTFL-AT · CTAL-ATT | AGENT-QA-AGILE.md |
| bdd-gherkin.md | CTFL-AT · CTAL-ATT | AGENT-QA-AGILE.md |
| tests-exploratoires.md | CTFL-AT · CTAL-TA | AGENT-QA-AGILE.md (CTAL-TA donc potentiellement QA-CYCLEV aussi) |
| dod-qualite.md | CTFL-AT · CTAL-TM | AGENT-QA-AGILE.md |
| pyramide-automatisation.md | CT-TAE · CTAL-ATT | AGENT-QA-AGILE.md |
| atdd-sprint.md | CTFL-AT · CTAL-ATT | AGENT-QA-AGILE.md |
| regression-cicd.md | CT-TAE · CTAL-ATT | AGENT-QA-AGILE.md |
| metriques-qualite.md | CTAL-TM · CTFL-AT | AGENT-QA-AGILE.md |
| retrospective-qa.md | CTFL-AT · CTAL-TM | AGENT-QA-AGILE.md |
| tests-ia.md | CT-AI · CT-MBT | AGENT-QA-AGILE.md |

**Skills QA-CYCLEV (12, environnements déjà OK)** :
| Skill | Certif | Agent |
|---|---|---|
| strategie-tests.md | CTAL-TM · CTFL | AGENT-QA-CYCLEV.md |
| plan-tests.md | CTAL-TM · CTFL | AGENT-QA-CYCLEV.md |
| cas-de-test.md | CTAL-TA · CTFL | AGENT-QA-CYCLEV.md |
| gestion-anomalies.md | CTAL-TM · CTAL-TA | AGENT-QA-CYCLEV.md |
| regression-tnr.md | CTAL-TA · CT-TAE | AGENT-QA-CYCLEV.md (CT-TAE partagé QA-AGILE) |
| tests-integration.md | CTAL-TTA · CTFL | AGENT-QA-CYCLEV.md |
| tests-systeme.md | CTAL-TA · CTFL | AGENT-QA-CYCLEV.md |
| tests-uat.md | CTAL-TA · CTFL | AGENT-QA-CYCLEV.md |
| tests-performance.md | CT-PT · CTAL-TTA | AGENT-QA-CYCLEV.md |
| tests-securite.md | CT-SEC · CTAL-TTA | AGENT-QA-CYCLEV.md · AGENT-SECURITE-IA.md |
| revues-inspections.md | CTFL · CTAL-TM | AGENT-QA-CYCLEV.md |
| reporting-qualite.md | CTAL-TM · Expert TM | AGENT-QA-CYCLEV.md |

### Impact attendu V1 unifiée
- 22 éditions mécaniques (10 QA-AGILE + 12 QA-CYCLEV — environnements déjà OK)
- 22 P1 → **22 P2** (le contenu reste à enrichir mais la structure devient conforme)
- Temps estimé : ~45-60 min

---

## 6. Findings P2 latents (après V1 unifiée — pour V3)

### Référentiels canoniques absents partout
- **OWASP Top 10** — à ajouter dans tests-securite.md (critique)
- **ISO/IEC/IEEE 29119** — standard testing absent
- **ISO/IEC 25010:2011** — Software Quality Model absent
- **IEEE 829-2008** — cité dans plan-tests.md sans année
- **IEEE 1028** — cité dans revues-inspections.md sans année (1997 ? 2008 ? 2024 ?)
- **Boris Beizer "Software Testing Techniques" (1990)** — référence académique testing absente
- **Lee Copeland "A Practitioner's Guide to Software Test Design" (2003)** — absent

### Sources outils à compléter
- JMeter, Gatling, k6, LoadRunner (performance) — pas d'URL
- Burp Suite, OWASP ZAP (sécurité) — absents
- HP ALM, Jira, Xray, TestRail (test management) — cités sans détails

### Anti-patterns CycleV à ajouter
- "UAT en mode pompier" (pas de plan)
- "Plan figé sans suivi" (MTP non revu)
- "Tests système sans intégration" (anti-pattern Big Bang)
- "Sécurité testée tardivement" (vs DevSecOps)
- "Anomalies sans cycle de vie clos"
- "Métriques sans baseline"

---

## 7. Findings transversaux QA-CYCLEV

### 🔴 T1 — Bug critique sécurité (tests-securite.md)
OWASP Top 10 + CT-SEC 2022 absents. À traiter en V2 prioritaire.

### 🔴 T2 — Pattern systémique 12/13 sans certif (identique QA-AGILE)
**Action V1 unifiée** : 22 éditions mécaniques cumulées (10 QA-AGILE + 12 QA-CYCLEV).

### 🟢 T3 — environnements.md = modèle structurel à dupliquer
Seul skill avec certif + agent en en-tête. Pattern à propager.

### 🟡 T4 — Templates IEEE 829 / IEEE 1028 / RACI bien faits
Le patrimoine documentaire est solide. Le problème est uniquement structurel (en-têtes) + sourcing.

### 🟡 T5 — Aucun renvoi inter-agent
- `tests-securite.md` → AGENT-SECURITE-IA.md (frontière manquante)
- `tests-performance.md` → AGENT-DEVOPS-CLOUD.md (DORA, infra perf)
- `environnements.md` → AGENT-DEVOPS-CLOUD.md (IaC)
- `tests-uat.md` → AGENT-BUSINESS-ANALYST.md (recette-moa.md partage le sujet)
- `revues-inspections.md` → AGENT-AUDIT-METHODO-IA.md (gates de validation)

---

## 8. Bilan groupe Agile/Produit (8/9 agents audités)

| Métrique | PO-SAFE | PO-SCRUM | PM-SAFE | SM | RTE | BA | QA-AGILE | QA-CYCLEV | **Cumul 8** |
|---|---|---|---|---|---|---|---|---|---|
| Skills audités | 25 | 30 | 10 | 20 | 7 | 10 | 10 | 13 | **125** |
| ✓ purs | 0 | 1 ⭐ | 0 | 1 ⭐⭐ | 0 | 0 | 0 | 0 | **2** |
| % P1 | 24% | 27% | 20% | 25% | 14% | 40% | 100% | **92%** | 45% |
| % sans certif | 28% | 37% | 0% | 20% | 0% | 0% | 100% | **92%** | 30% |

**Pattern QA (QA-AGILE + QA-CYCLEV cumul 23 skills)** :
- 22 P1 (96%)
- 22 sans certif (96%)
- Tous résolubles par V1 mécanique unifiée

**Apprentissages pour le 9ème et dernier agent Agile** (CHANGE-MANAGER) :
- Anticiper triplon thématique : `business_analyst/analyse-impact.md` (BA) + `scrum_master/change-management-agile.md` (SM) + `change_manager/?` (à découvrir)
- Référentiels PROSCI ADKAR, Kotter à exiger explicitement

---

## 9. Prochaines étapes

- [ ] **V1 unifiée qa_testing** (22 skills, ~45-60 min) → 22 P1 → 22 P2
- [ ] Audit CHANGE-MANAGER (9ème et dernier agent Agile)
- [ ] Commit v2.8.4 (audits QA-AGILE + QA-CYCLEV + V1 unifiée + audit CHANGE-MANAGER + V1 si nécessaire) OU découper en commits intermédiaires
- [ ] Bilan complet groupe Agile/Produit (9/9 agents)
- [ ] Roadmap V2 (P1 résiduels par profondeur de contenu, hors structure)
