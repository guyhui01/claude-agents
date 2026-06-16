# Skill — IT/AI Project Budget Management
> Certifications: PMP (PMI), DSCG (France), CMA (IMA), PMI-PBA (PMI)
> Agent: AGENT-FINANCIAL-ANALYST.md
> Frameworks: **PMBOK 7** (PMI 2021 — *Cost Management*) · **CAPEX/OPEX** distinction (accounting framework) · **EVM** (variance analysis) · contingency reserve (PMI)

## Objective
Build, track, and steer the budget of an IT/AI project — CAPEX/OPEX breakdown, spend tracking, variance analysis, monthly reporting — to keep the project within the validated envelope.

## Project budget — Financial WBS template

```yaml
project_budget:
  name: "AI HR Project — Scoring Module"
  version: "v1.2 — Validated by Steering Committee"
  validation_date: "2026-04-01"
  sponsor: "CIO / CHRO"
  project_manager: "Guy HUI-BON-HOA"
  
  total_envelope: 300_000  # €
  
  capex:
    internal_development:
      person_days: 150
      avg_day_rate: 900
      total: 135_000
      
    external_vendors:
      hris_integration: 45_000
      ai_expertise: 30_000
      total: 75_000
      
    tool_licenses:
      anthropic_api: 12_000
      cloud_infrastructure: 18_000
      total: 30_000
      
    total_capex: 240_000
    
  annual_opex:
    maintenance_evolution: 30_000
    infrastructure: 18_000
    support: 12_000
    total_opex: 60_000
```

## Budget tracking — Monthly dashboard

| Line item | Budget | Committed | Spent | Remaining | % Spent | Status |
|---|---|---|---|---|---|---|
| Internal dev | 135,000 | 135,000 | 94,500 | 40,500 | 70% | ✅ On track |
| Vendors | 75,000 | 75,000 | 60,000 | 15,000 | 80% | ⚠ Watch |
| Licenses | 30,000 | 30,000 | 21,000 | 9,000 | 70% | ✅ On track |
| Risk reserve | 20,000 | 5,000 | 5,000 | 15,000 | 25% | ✅ |
| **TOTAL** | **260,000** | **245,000** | **180,500** | **79,500** | **69%** | **✅** |

## Variance Analysis — Monthly template

```
BUDGET REPORTING — [PROJECT NAME] — [MONTH]
══════════════════════════════════════════════════════════

FINANCIAL SUMMARY
─────────────────────────────────────────────────────────
Total budget    : €260,000
Committed       : €245,000 (94%)
Spent M5        : €180,500 (69%)
End forecast    : €255,000 (−€5,000 vs. budget)

SIGNIFICANT VARIANCES
─────────────────────────────────────────────────────────
Vendors         : +€8,000 vs. plan
  Cause   : HRIS API integration complexity > estimated
  Action  : Fixed-price negotiation Sprint 3 (D+3)
  Impact  : Budget absorbed by the risk reserve

Internal dev    : −€12,000 vs. plan (ahead)
  Cause   : Reuse of existing components
  Action  : None — welcome saving

PROJECT-END FORECAST
─────────────────────────────────────────────────────────
Realistic scenario : €255,000 (−€5,000 vs. budget) ✅
Risk scenario      : €270,000 (+€10,000) if testing > estimated
```

## Deliverables
- Complete financial WBS budget (YAML / Excel)
- Monthly spend dashboard
- Variance analysis
- Steering Committee financial report

## Output format
Specify: identified budget line items, committed vs. spent amounts, observed variances, forecast closing date.

## Anti-patterns
- ❌ **Budget with no contingency reserve**: no margin for identified risks
- ❌ **Confusing committed and spent**: a line committed at 100% may only be 60% spent
- ❌ **Confusing CAPEX and OPEX**: affects taxation and amortization
- ❌ **No variance analysis**: observing the variance without explaining its cause or action
- ❌ **Frozen budget with no re-forecast**: not revising the end forecast mid-project

## Sources
- **PMBOK 7** (PMI 2021) — *Cost Management* / budget planning
- **EVM** — *ANSI/EIA-748 rev. D* (SAE 2019) — variance analysis (see `reporting-financier.md`)
- **CAPEX/OPEX** accounting framework (fixed assets vs. expenses)

## See also
- [`reporting-financier.md`](reporting-financier.md) — EVM and executive-committee budget reporting
- [`business-case-ia.md`](business-case-ia.md) — budget derived from the business case
- [`cost-benefit-analysis.md`](cost-benefit-analysis.md) — TCO feeding the budget
- [`../chef_projet_ia/evm-valeur-acquise.md`](../chef_projet_ia/evm-valeur-acquise.md) — earned value management
