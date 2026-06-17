# Skill — Executive-Committee Financial Reporting
> Certifications: CMA (IMA), DSCG (France), PMP (PMI), SAFe LPM (Scaled Agile)
> Agent: AGENT-FINANCIAL-ANALYST.md
> Frameworks: **EVM** (ANSI/EIA-748 rev. D, SAE 2019) · **PMI Practice Standard for EVM** (2011) · **Minto Pyramid** (1987) · RAG status

## Objective
Produce concise financial reporting for the executive committee / Steering Committee — budget status, variance analysis, EVM, project-end forecast — in a 1-page decision format.

## Executive-committee financial report — 1-page template

```
FINANCIAL REPORTING — [PROJECT NAME] — [MONTH/YEAR]
For: Executive Committee | Prepared by: [NAME] | Date: [DATE]
══════════════════════════════════════════════════════════════

OVERALL STATUS: 🟢 ON TRACK / 🟡 TO WATCH / 🔴 AT RISK

BUDGET
─────────────────────────────────────────────────────────────
Approved budget      : €300,000
Committed to date    : €245,000 (82%)
Spent to date        : €180,500 (60%)
Project-end forecast : €258,000 → Saving €42,000  ✅

EVM (EARNED VALUE MANAGEMENT)
─────────────────────────────────────────────────────────────
Planned Value (PV)   : €210,000   (planned budget M5)
Earned Value (EV)    : €198,000   (work actually done)
Actual Cost (AC)     : €180,500   (actually spent)

CPI (cost efficiency)  : EV/AC = 1.10 ✅  (> 1 = under budget)
SPI (schedule eff.)    : EV/PV = 0.94 ⚠  (< 1 = slight delay)

EAC (end forecast)   : BAC / CPI = €272,700 ✅

SIGNIFICANT VARIANCE
─────────────────────────────────────────────────────────────
Vendor overrun : +€8,000 (HRIS complexity)
  Action: Fixed price negotiated Sprint 3 — validated

NEXT DECISION
─────────────────────────────────────────────────────────────
Additional UAT testing budget (€15,000) — Decision requested
Recommendation: Fund from realized savings (€42,000)
```

## EVM — Key formulas

```python
# Earned Value Management
def calculate_evm(PV, EV, AC, BAC):
    CPI = EV / AC          # Cost Performance Index (> 1 = good)
    SPI = EV / PV          # Schedule Performance Index (> 1 = ahead)
    CV  = EV - AC          # Cost Variance (positive = under budget)
    SV  = EV - PV          # Schedule Variance (positive = ahead)
    EAC = BAC / CPI        # Estimate At Completion
    ETC = EAC - AC         # Estimate To Complete
    VAC = BAC - EAC        # Variance At Completion
    
    return { "CPI": round(CPI, 2), "SPI": round(SPI, 2),
             "CV": round(CV), "SV": round(SV),
             "EAC": round(EAC), "ETC": round(ETC), "VAC": round(VAC) }
```

## Deliverables
- 1-page executive-committee financial report
- EVM calculation (CPI, SPI, EAC)
- Documented variance analysis
- Arbitration recommendations

## Output format
Specify: approved budget, spent to date, earned value (EV), physical project progress, pending decisions.

## Anti-patterns
- ❌ **EVM with no frozen baseline**: CPI/SPI uninterpretable without a reference PMB
- ❌ **Reporting with no requested decision**: an executive-committee report exists to arbitrate
- ❌ **EAC = simple linear extrapolation**: use BAC/CPI when performance is stable
- ❌ **Observed variance with no cause or action**: "+€8,000" with no explanation
- ❌ **Drowning the decision-maker in figures**: 1 page, key message on top (Minto)

## Sources
- **ANSI/EIA-748** (rev. D, SAE 2019) — *Earned Value Management Systems*
- **PMI** — *Practice Standard for Earned Value Management* (2nd ed. 2011)
- **Minto B.** — *The Pyramid Principle* (1987) — executive message structure

## See also
- [`budget-projet.md`](budget-projet.md) — source budget data
- [`../chef_projet_ia/evm-valeur-acquise.md`](../chef_projet_ia/evm-valeur-acquise.md) — detailed EVM (PM view)
- [`../chef_projet_ia/reporting-codir.md`](../chef_projet_ia/reporting-codir.md) — project reporting (PM view)
- [`roi-transformation.md`](roi-transformation.md) — ROI for the executive committee
