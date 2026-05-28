# Skills — QA & Testing (dossier partagé)

> Dossier partagé entre `AGENT-QA-AGILE.md` et `AGENT-QA-CYCLEV.md`
> Référentiels : ISTQB Foundation Level v4.0 · CTFL-AT · CTAL-TM/TA/TTA · ISTQB Specialist (Test Automation, Performance, Security, AI Testing, Model-Based)

---

## Index des skills (23) — orientés par méthodologie

### 🚀 Orientés Agile / Sprint (10 skills)
Pour AGENT-QA-AGILE.md — shift-left, BDD/Gherkin, ATDD, tests en sprint.

| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`strategie-agile.md`](strategie-agile.md) | Stratégie de tests Agile (shift-left, continuous testing) | CTFL-AT · CTAL-ATT |
| [`bdd-gherkin.md`](bdd-gherkin.md) | Rédiger des scénarios BDD (Given/When/Then) | CTFL-AT · CTAL-ATT |
| [`atdd-sprint.md`](atdd-sprint.md) | Tests d'acceptance en sprint (ATDD) | CTFL-AT · CTAL-ATT |
| [`tests-exploratoires.md`](tests-exploratoires.md) | Tests exploratoires session-based (SBTM) | CTFL-AT · CTAL-TA |
| [`dod-qualite.md`](dod-qualite.md) | Definition of Done orientée qualité | CTFL-AT · CTAL-TM |
| [`pyramide-automatisation.md`](pyramide-automatisation.md) | Pyramide d'automatisation (unit/intégration/E2E) | ISTQB Test Automation Engineer |
| [`regression-cicd.md`](regression-cicd.md) | Tests de régression automatisés CI/CD | ISTQB Test Automation · CTAL-ATT |
| [`metriques-qualite.md`](metriques-qualite.md) | Métriques qualité Agile | CTAL-TM · CTFL-AT |
| [`retrospective-qa.md`](retrospective-qa.md) | Rétrospective QA / amélioration continue | CTFL-AT · CTAL-TM |
| [`tests-ia.md`](tests-ia.md) | Tests IA / modèles (ISTQB AI Testing) | ISTQB AI Testing · Model-Based |

### 📋 Orientés Cycle en V (12 skills)
Pour AGENT-QA-CYCLEV.md — plan formel, niveaux de test, UAT.

| Skill | Quand l'invoquer | Certification |
|---|---|---|
| [`strategie-tests.md`](strategie-tests.md) | Rédiger une stratégie de tests (formelle) | CTAL-TM · CTFL |
| [`plan-tests.md`](plan-tests.md) | Master Test Plan (IEEE 829) | CTAL-TM · CTFL |
| [`cas-de-test.md`](cas-de-test.md) | Rédiger des cas de test (steps, données) | CTAL-TA · CTFL |
| [`gestion-anomalies.md`](gestion-anomalies.md) | Cycle de vie d'une anomalie (sévérité ≠ priorité) | CTAL-TM · CTAL-TA |
| [`regression-tnr.md`](regression-tnr.md) | Tests de régression / TNR | CTAL-TA · Test Automation |
| [`tests-integration.md`](tests-integration.md) | Tests d'intégration | CTAL-TTA · CTFL |
| [`tests-systeme.md`](tests-systeme.md) | Tests système | CTAL-TA · CTFL |
| [`tests-uat.md`](tests-uat.md) | Tests d'acceptance utilisateur (UAT) | CTAL-TA · CTFL |
| [`tests-performance.md`](tests-performance.md) | Tests de performance, charge, stress | ISTQB Performance Testing · CTAL-TTA |
| [`tests-securite.md`](tests-securite.md) | Tests de sécurité (bases) | ISTQB Security Tester · CTAL-TTA |
| [`revues-inspections.md`](revues-inspections.md) | Revues et inspections (walkthrough, review) | CTFL · CTAL-TM |
| [`environnements.md`](environnements.md) | Gestion des environnements de test | CTAL-TM · CTAL-TTA |

### 🔄 Transversal (1 skill)
| [`reporting-qualite.md`](reporting-qualite.md) | Reporting qualité & métriques (Agile + V) | CTAL-TM · Expert Test Management |

---

## Choisir le bon skill — Arbre de décision

```
Tu travailles ...

  ... EN CONTEXTE AGILE / SCRUM / SAFE ?
    → Voir les 10 skills "Orientés Agile" (BDD, ATDD, exploratoires)
    → Agent rattaché : AGENT-QA-AGILE.md

  ... EN CONTEXTE CYCLE EN V / PROJET FORMEL ?
    → Voir les 12 skills "Orientés Cycle en V" (Master Test Plan, UAT)
    → Agent rattaché : AGENT-QA-CYCLEV.md

  ... TU TESTES DE L'IA / DES LLM ?
    → tests-ia.md (ISTQB AI Testing — couvre les 2 contextes)

  ... TU AS BESOIN DE TESTS NON-FONCTIONNELS ?
    → tests-performance.md / tests-securite.md (Cycle en V)
    → ou strategie-agile.md (intégration sprint)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Vision stratégique pyramide de tests, culture TDD/BDD | `AGENT-TECH-LEAD.md` skill `strategie-tests.md` | QA exécute ; TECH-LEAD définit la vision côté équipe dev |
| Tests d'acceptation (rédaction par PO) | `AGENT-PO-SCRUM.md` skill `po-acceptance-tests.md` | PO rédige AC ; QA exécute et industrialise |
| Recette MOA, plan de recette utilisateur | `AGENT-BUSINESS-ANALYST.md` skill `recette-moa.md` | BA conduit la recette métier ; QA conduit la recette technique |
| Tests de sécurité approfondis, pentest | `AGENT-SECURITE-IA.md` skills `pentest-ia.md`, `owasp-llm-top10.md` | QA = tests sécu base ISTQB ; SECURITE-IA = pentest pro |
| Évaluation LLM (RAGAs, golden dataset) | `AGENT-AI-ARCHITECT.md` skill `evaluation-llm.md` | QA = tests IA fonctionnels (ISTQB AI) ; AI-ARCHITECT = évaluation modèle |

---

## Référentiels et standards utilisés

- **ISTQB Foundation Level v4.0** (CTFL) : https://www.istqb.org/
- **ISTQB Agile Tester** (CTFL-AT) + **Advanced Agile Technical Tester** (CTAL-ATT)
- **ISTQB Advanced Test Manager / Analyst / TTA** (CTAL-TM/TA/TTA)
- **ISTQB AI Testing** : tests des systèmes basés IA
- **ISTQB Specialists** : Test Automation Engineer, Performance Testing, Security Tester, Model-Based Tester
- **IEEE 829** : standard Master Test Plan
- **BDD / Gherkin** : https://cucumber.io/docs/gherkin/
- **Session-Based Test Management (SBTM)** : James Bach
