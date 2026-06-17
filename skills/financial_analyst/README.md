# Skills — Financial Analyst

> Folder attached to `AGENT-FINANCIAL-ANALYST.md`
> Frameworks: CFA Level I (CFA Institute) · CMA (IMA) · DSCG (France) · PMI-PBA · PMP · SAFe LPM · FRM (GARP) · ISO/IEC 42001:2023

---

## Skill index (6)

| # | Skill | When to invoke | Certification |
|---|---|---|---|
| 1 | [`business-case-ia.md`](business-case-ia.md) | Build a complete AI business case (NPV, IRR, payback) | CFA · PMI-PBA · PMP · SAFe LPM |
| 2 | [`roi-transformation.md`](roi-transformation.md) | Calculate the ROI of a digital transformation (Time-to-Value included) | CFA · CMA · SAFe LPM · PMP |
| 3 | [`budget-projet.md`](budget-projet.md) | Manage the budget of an IT/AI project (forecast + tracking) | PMP · DSCG · CMA · PMI-PBA |
| 4 | [`cost-benefit-analysis.md`](cost-benefit-analysis.md) | Cost/benefit analysis and TCO (build vs. buy vs. cloud) | CFA · CMA · PMI-PBA · FRM |
| 5 | [`reporting-financier.md`](reporting-financier.md) | Executive-committee financial reporting (1-page summary, variance analysis) | CMA · DSCG · PMP · SAFe LPM |
| 6 | [`investment-scoring.md`](investment-scoring.md) | Score and prioritize investments (WSJF, multi-criteria) | SAFe LPM · CFA · PMI-PBA · FRM |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... JUSTIFY AN AI INVESTMENT?
    → business-case-ia.md (NPV + IRR + payback + scenarios)
    → roi-transformation.md (ROI + TTV)
    → cost-benefit-analysis.md (TCO build vs. buy vs. cloud)

  ... PRIORITIZE SEVERAL INVESTMENTS?
    → investment-scoring.md (WSJF + multi-criteria scoring)

  ... STEER AN ONGOING BUDGET?
    → budget-projet.md (forecast + tracking + variance)
    → reporting-financier.md (monthly 1-page executive committee)

  ... SCORE SAFe (Portfolio)?
    → investment-scoring.md (WSJF + LBC)
    → see AGENT-PO-SAFE.md skill `lean-business-case.md`
```

---

## Boundaries with other agents

| Adjacent topic | Agent concerned | Boundary |
|---|---|---|
| Quick ROI estimate (upstream consulting) | `AGENT-CONSULTANT-IA.md` skill `estimation-roi-rapide.md` | CONSULTANT = quick ROI; FINANCIAL = full analysis |
| Detailed project planning | `AGENT-CHEF-PROJET-IA.md` | FINANCIAL = financial analysis; CHEF-PROJET = steering |
| SAFe backlog prioritization (Features) | `AGENT-PO-SAFE.md` skill `wsjf.md` | FINANCIAL = investment scoring; PO-SAFE = WSJF Features |
| SAFe Lean Business Case (Epics) | `AGENT-PO-SAFE.md` skill `lean-business-case.md` | FINANCIAL = full format; PO-SAFE = official SAFe format |
| Data-AI strategy & overall budget | `AGENT-CDO-DIRECTEUR-IA.md` skill `budget-investissement-ia.md` | FINANCIAL = project; CDO = portfolio |
| Statutory accounting (balance sheet, tax) | Out of catalog scope | Chartered accountant / CFO |

---

## Frameworks and standards used

- **CFA Level I**: https://www.cfainstitute.org/programs/cfa
- **CMA (IMA)**: https://www.imanet.org/cma-certification
- **PMI-PBA**: https://www.pmi.org/certifications/business-analysis-pba
- **SAFe LPM**: https://framework.scaleagilesoftware.com/lpm
- **FRM (GARP)**: https://www.garp.org/frm
- **DCF** (Discounted Cash Flow), **NPV**, **IRR**, **Payback Period**: standard financial methods
- **TOTVS / Activity-Based Costing (ABC)**: for TCO
- **EVM** (Earned Value Management — PMI): for project tracking
