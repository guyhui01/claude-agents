# Skills — Business Analyst / MOA / AMOA

> Folder attached to `AGENT-BUSINESS-ANALYST.md`
> Standards: IIBA CBAP / CCBA / AAC · PMI-PBA · PMP · PRINCE2 · BCS International Diploma · TOGAF 10 · ISO 21500 · BPMN 2.0 · UML 2.5

---

## Skills index (11)

| # | Skill | When to invoke it | Certification |
|---|---|---|---|
| 1 | [`elicitation-besoins.md`](elicitation-besoins.md) | Elicit needs (interviews, workshops, observation) | IIBA CBAP · CCBA |
| 2 | [`modelisation-processus.md`](modelisation-processus.md) | Model processes (BPMN 2.0, UML, use cases) | IIBA CBAP · BCS Diploma · OCEB 2 |
| 3 | [`specification-fonctionnelle.md`](specification-fonctionnelle.md) | Write specifications (FRS, FRD, requirements specification) | IIBA CBAP · PMI-PBA |
| 4 | [`recette-moa.md`](recette-moa.md) | Prepare and run MOA UAT (plan, test book, report) | IIBA CBAP · BCS Diploma |
| 5 | [`cadrage-projet.md`](cadrage-projet.md) | Scope a project (PMBOK charter, Business Case, TELOS feasibility) | PMI-PBA · PRINCE2 · IIBA CBAP |
| 6 | [`pilotage-projet.md`](pilotage-projet.md) | Steer the project (WBS, Gantt/CPM, PRINCE2 tolerances, EVM, closure, lessons learned) | PMI-PBA · PMP · PRINCE2 · ISO 21500 |
| 7 | [`cartographie-si.md`](cartographie-si.md) | Map the IS (TOGAF 10, ArchiMate 3.2, C4, APM TIME) | TOGAF 10 · IIBA CBAP |
| 8 | [`gestion-exigences.md`](gestion-exigences.md) | Manage requirements (traceability, coverage matrix) | IIBA CBAP · PMI-PBA |
| 9 | [`analyse-impact.md`](analyse-impact.md) | Analyze impacts and manage change (Kotter, ADKAR, McKinsey 7S) | PROSCI · ACMP CCMP · IIBA AAC |
| 10 | [`animation-atelier-metier.md`](animation-atelier-metier.md) | Facilitate a business workshop (co-construction, validation) | IIBA AAC · ICAgile |
| 11 | [`reporting-moa.md`](reporting-moa.md) | MOA reporting + committee governance (COMEX/COSTRAT/COPIL/COTECH/CCB/CDP) | IIBA CBAP · PMI-PBA · PRINCE2 |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... START AN MOA PROJECT?
    → cadrage-projet.md (PMBOK charter + Business Case + TELOS feasibility)
    → cartographie-si.md (IS assessment)

  ... STEER THE PROJECT (V-model or hybrid)?
    → pilotage-projet.md (WBS, Gantt/CPM, PRINCE2 tolerances, EVM, closure, lessons learned)
    → reporting-moa.md (governance COMEX→COSTRAT→COPIL→COTECH→CCB→CDP, project OKRs, RAG)

  ... UNDERSTAND THE BUSINESS NEED?
    → elicitation-besoins.md (elicitation techniques, BABOK KA #10)
    → animation-atelier-metier.md (co-construction workshops)

  ... MODEL AND SPECIFY?
    → modelisation-processus.md (BPMN 2.0, UML 2.5, DMN, CMMN)
    → specification-fonctionnelle.md (FRS/FRD/requirements specification, V-model)
    → gestion-exigences.md (requirements → tests traceability)

  ... VALIDATE A DELIVERY?
    → recette-moa.md (test plan + test book + acceptance report)

  ... MANAGE CHANGE?
    → analyse-impact.md (Kotter, Lewin, Bridges, PROSCI ADKAR, McKinsey 7S, Mendelow)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| Scrum backlog, user stories, DoR/DoD | `AGENT-PO-SCRUM.md` | BA = business analysis; PO = product backlog |
| SAFe backlog (Features, PI, ART) | `AGENT-PO-SAFE.md` | BA = business analysis; PO-SAFE = ART backlog |
| AI technical architecture (RAG, agents) | `AGENT-AI-ARCHITECT.md` | BA = functional analysis; AI-ARCHITECT = tech stack |
| Formal QA testing (UAT, acceptance) | `AGENT-QA-CYCLEV.md` / `AGENT-QA-AGILE.md` | BA runs the business MOA UAT; QA runs the technical testing |
| Cross-cutting enterprise architecture | `AGENT-SOLUTIONS-ARCHITECT.md` | BA = local functional analysis; SOLUTIONS = global TOGAF IS view |
| Organizational change management | `AGENT-CHANGE-MANAGER.md` | BA = project impact analysis; CHANGE-MANAGER = org. adoption |

---

## Standards and frameworks used

- **IIBA BABOK v3**: https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/
- **CBAP** (gold standard): https://www.iiba.org/business-analysis-certifications/cbap/
- **PMI-PBA**: https://www.pmi.org/certifications/business-analysis-pba
- **BCS Diploma** (UK reference)
- **BPMN 2.0**: https://www.omg.org/spec/BPMN/2.0/
- **UML 2.5**: https://www.omg.org/spec/UML/
- **TOGAF 10**: for IS mapping
- **PROSCI ADKAR**: for change management
