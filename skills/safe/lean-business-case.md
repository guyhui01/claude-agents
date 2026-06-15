# Skill — Lean Business Case for SAFe Portfolio Epics

> Certification: SAFe LPM · SAFe POPM 6
> Agent: AGENT-PO-SAFE.md

## Objective
Build a Lean Business Case (LBC) to submit a Portfolio Epic to the Portfolio Kanban and obtain the funding go/no-go.

## SAFe Lean Business Case structure

### Official SAFe 6 template

```
PORTFOLIO EPIC — [Epic name]
Benefit Hypothesis:
"By delivering [capability], we expect [business outcome]
 measured by [KPI] with a target of [value] by [date]."

═══════════════════════════════════════════════════════

1. CONTEXT AND OPPORTUNITY
   Problem/Opportunity: [concise description]
   Impacted users: [segments]
   Strategic alignment: [relevant SAFe strategic theme]

2. PROPOSED SOLUTION
   Description: [what we will build / change]
   MVP scope: [minimum viable version]
   Out of scope: [what we won't do]

3. VALUE ANALYSIS
   Potential revenue: [€ / % growth]
   Potential savings: [€ / % cost reduction]
   Risk of not doing it: [impact if we don't act]

4. COST ANALYSIS
   Effort estimate: [number of teams × number of sprints]
   Estimated cost: [€ excl. tax]
   Estimated time to market: [PI(s) needed]

5. WSJF SCORE (relative scoring, smallest = 1 per column — cf. skills/safe/wsjf.md)
   CoD = Business Value + Time Criticality + RR/OE (Fibonacci 1·2·3·5·8·13·20)
   Job Size: [Fibonacci]
   WSJF = CoD / Job Size = [final score]

6. KEY RISKS
   | Risk | Probability | Impact | Mitigation |
   |------|-------------|--------|------------|
   | [R1] | Medium      | High   | [action]   |

7. GO / NO-GO CRITERIA
   Go if: [measurable success conditions]
   No-go if: [stop signals]
   Decision point: after [MVP / PI N]
```

## Portfolio Kanban process

```
Epic idea → LBC analysis → LPM review → Approval → In progress → Done
              (2-4 weeks)   (Bi-weekly)  (Funding)
```

### Entry criteria into the Portfolio Kanban
- [ ] Benefit Hypothesis written
- [ ] Complete cost/benefit analysis
- [ ] WSJF computed
- [ ] Strategic alignment confirmed
- [ ] Risks identified + mitigation

## Computing the WSJF for an Epic

### Cost of Delay (CoD) — 3 components (cf. skills/safe/wsjf.md)

> **Relative** scoring, **smallest = 1 per column**, independent columns, Fibonacci (1·2·3·5·8·13·20).

| Component | Description |
|---|---|
| Business Value | Direct impact on revenue/customer |
| Time Criticality | Opportunity window (penalty if late) |
| Risk Reduction / Opportunity Enablement | Reduces a risk or opens an opportunity |

**CoD = Business Value + Time Criticality + RR/OE**

```
WSJF = CoD / Job Size (relative T-shirt size: XS=1, S=2, M=3, L=5, XL=8, XXL=13)
```

## Presentation at the Portfolio Sync

**Recommended format: 10 min per Epic**
- 2 min: context + problem
- 3 min: proposed solution + MVP
- 3 min: value analysis + WSJF
- 2 min: risks + go/no-go criteria
