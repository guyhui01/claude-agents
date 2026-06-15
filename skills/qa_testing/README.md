# Skills — QA & Testing (shared folder)

> Folder shared between `AGENT-QA-AGILE.md` and `AGENT-QA-CYCLEV.md`
> Standards: ISTQB Foundation Level v4.0 · CTFL-AT · CTAL-TM/TA/TTA · ISTQB Specialist (Test Automation, Performance, Security, AI Testing, Model-Based)

---

## Skills index (23) — organized by methodology

### 🚀 Agile / Sprint oriented (10 skills)
For AGENT-QA-AGILE.md — shift-left, BDD/Gherkin, ATDD, in-sprint testing.

| Skill | When to invoke it | Certification |
|---|---|---|
| [`strategie-agile.md`](strategie-agile.md) | Agile test strategy (shift-left, continuous testing) | CTFL-AT · CTAL-ATT |
| [`bdd-gherkin.md`](bdd-gherkin.md) | Write BDD scenarios (Given/When/Then) | CTFL-AT · CTAL-ATT |
| [`atdd-sprint.md`](atdd-sprint.md) | In-sprint acceptance testing (ATDD) | CTFL-AT · CTAL-ATT |
| [`tests-exploratoires.md`](tests-exploratoires.md) | Session-based exploratory testing (SBTM) | CTFL-AT · CTAL-TA |
| [`dod-qualite.md`](dod-qualite.md) | Quality-oriented Definition of Done | CTFL-AT · CTAL-TM |
| [`pyramide-automatisation.md`](pyramide-automatisation.md) | Automation pyramid (unit/integration/E2E) | ISTQB Test Automation Engineer |
| [`regression-cicd.md`](regression-cicd.md) | Automated CI/CD regression testing | ISTQB Test Automation · CTAL-ATT |
| [`metriques-qualite.md`](metriques-qualite.md) | Agile quality metrics | CTAL-TM · CTFL-AT |
| [`retrospective-qa.md`](retrospective-qa.md) | QA retrospective / continuous improvement | CTFL-AT · CTAL-TM |
| [`tests-ia.md`](tests-ia.md) | AI / model testing (ISTQB AI Testing) | ISTQB AI Testing · Model-Based |

### 📋 V-model oriented (12 skills)
For AGENT-QA-CYCLEV.md — formal plan, test levels, UAT.

| Skill | When to invoke it | Certification |
|---|---|---|
| [`strategie-tests.md`](strategie-tests.md) | Write a (formal) test strategy | CTAL-TM · CTFL |
| [`plan-tests.md`](plan-tests.md) | Master Test Plan (IEEE 829) | CTAL-TM · CTFL |
| [`cas-de-test.md`](cas-de-test.md) | Write test cases (steps, data) | CTAL-TA · CTFL |
| [`gestion-anomalies.md`](gestion-anomalies.md) | Defect lifecycle (severity ≠ priority) | CTAL-TM · CTAL-TA |
| [`regression-tnr.md`](regression-tnr.md) | Regression testing / NRT | CTAL-TA · Test Automation |
| [`tests-integration.md`](tests-integration.md) | Integration testing | CTAL-TTA · CTFL |
| [`tests-systeme.md`](tests-systeme.md) | System testing | CTAL-TA · CTFL |
| [`tests-uat.md`](tests-uat.md) | User Acceptance Testing (UAT) | CTAL-TA · CTFL |
| [`tests-performance.md`](tests-performance.md) | Performance, load, stress testing | ISTQB Performance Testing · CTAL-TTA |
| [`tests-securite.md`](tests-securite.md) | Security testing (foundations) | ISTQB Security Tester · CTAL-TTA |
| [`revues-inspections.md`](revues-inspections.md) | Reviews and inspections (walkthrough, review) | CTFL · CTAL-TM |
| [`environnements.md`](environnements.md) | Test environment management | CTAL-TM · CTAL-TTA |

### 🔄 Cross-cutting (1 skill)
| [`reporting-qualite.md`](reporting-qualite.md) | Quality reporting & metrics (Agile + V) | CTAL-TM · Expert Test Management |

---

## Choosing the right skill — Decision tree

```
You are working ...

  ... IN AN AGILE / SCRUM / SAFE CONTEXT?
    → See the 10 "Agile oriented" skills (BDD, ATDD, exploratory)
    → Attached agent: AGENT-QA-AGILE.md

  ... IN A V-MODEL / FORMAL PROJECT CONTEXT?
    → See the 12 "V-model oriented" skills (Master Test Plan, UAT)
    → Attached agent: AGENT-QA-CYCLEV.md

  ... TESTING AI / LLMs?
    → tests-ia.md (ISTQB AI Testing — covers both contexts)

  ... NEED NON-FUNCTIONAL TESTS?
    → tests-performance.md / tests-securite.md (V-model)
    → or strategie-agile.md (sprint integration)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| Strategic test pyramid vision, TDD/BDD culture | `AGENT-TECH-LEAD.md` skill `strategie-tests.md` | QA executes; TECH-LEAD defines the vision on the dev team side |
| Acceptance tests (written by the PO) | `AGENT-PO-SCRUM.md` skill `po-acceptance-tests.md` | PO writes the ACs; QA executes and industrializes |
| Business UAT, user acceptance test plan | `AGENT-BUSINESS-ANALYST.md` skill `recette-moa.md` | BA runs the business UAT; QA runs the technical testing |
| In-depth security testing, pentest | `AGENT-SECURITE-IA.md` skills `pentest-ia.md`, `owasp-llm-top10.md` | QA = ISTQB-foundation security tests; SECURITE-IA = pro pentest |
| LLM evaluation (RAGAs, golden dataset) | `AGENT-AI-ARCHITECT.md` skill `evaluation-llm.md` | QA = functional AI testing (ISTQB AI); AI-ARCHITECT = model evaluation |

---

## Standards and frameworks used

- **ISTQB Foundation Level v4.0** (CTFL): https://www.istqb.org/
- **ISTQB Agile Tester** (CTFL-AT) + **Advanced Agile Technical Tester** (CTAL-ATT)
- **ISTQB Advanced Test Manager / Analyst / TTA** (CTAL-TM/TA/TTA)
- **ISTQB AI Testing**: testing AI-based systems
- **ISTQB Specialists**: Test Automation Engineer, Performance Testing, Security Tester, Model-Based Tester
- **IEEE 829**: Master Test Plan standard
- **BDD / Gherkin**: https://cucumber.io/docs/gherkin/
- **Session-Based Test Management (SBTM)**: James Bach
