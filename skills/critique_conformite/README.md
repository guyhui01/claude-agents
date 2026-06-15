# Skills — Control & Challenge of AI deliverables

> Folder attached to `AGENT-AUDIT-METHODO-IA.md`
> Frameworks: SAFe 6 (SA, POPM, SSM, SASM, RTE) · Scrum Guide 2020 · PSM I/II/III · PSPO I/II · ISTQB CTFL/CTAL · PMI PMBOK 7 · ISO 9001:2015 · CMMI · ISO/IEC 42001:2023

---

## Skill index (4)

| # | Skill | When to use it | Framework |
|---|---|---|---|
| 1 | [`audit-conformite-methodo.md`](audit-conformite-methodo.md) | Audit method compliance (SAFe/Scrum/ISTQB/PMI checklists) | SAFe 6 · Scrum Guide 2020 · CTFL · PMBOK 7 · ISO 9001 |
| 2 | [`challenge-raisonnement.md`](challenge-raisonnement.md) | Challenge the reasoning (cognitive biases, devil's advocate, red-team) | CTAL-TM · PMI-ACP · ISO 9001 §9.3 |
| 3 | [`gate-validation-livrable.md`](gate-validation-livrable.md) | Validation gate before promoting a deliverable (4 DoD levels) | SAFe DoD · ISTQB Exit Criteria · CMMI · PMI Quality Gate |
| 4 | [`audit-qualite-catalogue.md`](audit-qualite-catalogue.md) | Audit the quality of a **catalog skill** (v2.8 grid autonomously) | ISO 19011:2018 · ISO 9001:2015 §9.2 · CMMI V3.0 SCAMPI · v2.8 grid |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... CHECK A DELIVERABLE'S METHOD COMPLIANCE?
    → audit-conformite-methodo.md (certifying checklists)
       · Scrum Guide 2020 (single Sprint Goal, self-managed Developers)
       · SAFe 6 (relative WSJF, MoSCoW = US only, PI Obj committed/uncommitted)
       · ISTQB (entry/exit criteria, severity ≠ priority)
       · PMBOK 7 (performance domains)

  ... DETECT BIASES OR REASONING WEAKNESSES?
    → challenge-raisonnement.md
       · 8 cognitive biases (confirmation, anchoring, halo, Dunning-Kruger, AI overconfidence, complacency...)
       · Devil's advocate (thesis / counter-thesis / synthesis / verdict)
       · Red-team (5 attack vectors)

  ... VALIDATE A DELIVERABLE BEFORE PROMOTION?
    → gate-validation-livrable.md
       · Gate 1: Story DoD (Scrum 2020 + SAFe 6)
       · Gate 2: Feature DoD (SAFe 6)
       · Gate 3: PI / Release DoD (SAFe 6 + ISTQB Exit Criteria)
       · Gate 4: AI deliverable (method audit + challenge + biases)

  ... AUDIT THE QUALITY OF A CATALOG SKILL (.md file)?
    → audit-qualite-catalogue.md (v2.8 grid autonomously)
       · Auto routing agent → group → §3.x variant
       · Explore extraction (standard brief) + D1/D2/D3 scoring
       · Standardized report + V1/V2/V3 wave recommendation
```

> ⚠️ **Internal boundary**: `audit-conformite-methodo.md` audits a **runtime deliverable** (User Story, Feature, PI, AI output); `audit-qualite-catalogue.md` audits a **catalog skill file** with the v2.8 quality grid. Don't confuse the two.

---

## Golden rules applied

1. **Anti-theater rule**: never validate a deliverable to avoid friction. False positives > unfounded rejections.
2. **Honesty about blind spots**: on the same LLM model, biases are correlated → propose cross-validation on a different model for high-stakes matters.
3. **Distinguish a method error** (certification non-compliance) **from a design choice** (legitimate freedom).
4. **Each critique in 3 parts**: finding · certifying reference · concrete recommendation.

---

## Boundaries with other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| Functional / BDD / automation testing | `AGENT-QA-AGILE.md` / `AGENT-QA-CYCLEV.md` | AUDIT-METHODO = method/reasoning; QA = test execution |
| Writing User Stories | `AGENT-PO-SCRUM.md` | AUDIT-METHODO checks; PO-SCRUM writes |
| AI technical architecture | `AGENT-AI-ARCHITECT.md` | AUDIT-METHODO checks; AI-ARCHITECT designs |
| Technical security audit (OWASP, pentest) | `AGENT-SECURITE-IA.md` | AUDIT-METHODO = method; SECURITE-IA = technical security audit |

---

## Frameworks and standards used

- **Scrum Guide 2020**: https://scrumguides.org/scrum-guide.html
- **SAFe 6**: https://framework.scaleagilesoftware.com/
- **ISTQB**: Foundation Level v4.0 + Advanced Test Manager
- **PMBOK 7** (PMI): performance domains
- **ISO 9001:2015** + **ISO/IEC 42001:2023** (AI Management System)
- **CMMI**: Capability Maturity Model Integration
- **Kahneman & Tversky**: cognitive-bias reference
- **MITRE ATT&CK**: for red-team vectors
