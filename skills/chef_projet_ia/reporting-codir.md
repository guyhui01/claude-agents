# Skill — Executive Committee Reporting for AI Projects
> Certifications: PMP (PMI 2026), PMI-ACP, Executive Presentation Skills, Storytelling with Data (Nussbaumer Knaflic)
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **Minto Pyramid** (1987) · **Storytelling with Data** (Knaflic, Wiley 2015) · **EVM** (CPI/SPI/EAC) · RAG status

## Objective
Produce clear, decision-oriented executive committee reports for AI projects — RAG one-pager, KPI dashboard, progress visualization, and risk escalation in under 5 minutes of reading.

## Status One-Pager — RAG Template

### AI Project One-Pager structure

```
AI PROJECT: [NAME]    Status: GREEN     Date: 2026-05-19
PM: [Name]            Budget: 120k Euros      Sprint: 6/10
PROGRESS       |     BUDGET        |   ACTIVE RISKS
   75%         |  Spent:  80k      |   RED   Data quality
   SPI: 1.05   |  Planned: 90k     |   AMBER Validation delay
   CPI: 0.98   |  Variance: -10k   |   GREEN AWS infra
```

### One-Pager Markdown Template

```markdown
# AI Project Reporting - [Project Name]
Date: 2026-05-19 | PM: [Name] | Sponsor: [Name]

## Overall Status: AMBER

| Axis | Status | Detail |
|-----|--------|--------|
| Schedule | AMBER | SPI 0.91 — 1 week behind, recoverable |
| Budget | GREEN | CPI 0.98 — under control |
| Quality | GREEN | AUC 0.87 > target 0.85 |
| Risks | AMBER | R-02 (DPO validation) in progress |
| Team | GREEN | No departures |

## Sprint 6/10 progress — 55% completed (vs 60% planned)
- Done: Optimized model (SHAP integrated), API v1.2 deployed to staging
- In progress: Load testing (target 500 rps), technical documentation
- Blocked: Access to historical B2B segment data (CIO ticket 4521)

## Key Indicators
| KPI | Current | Target | Variance |
|-----|--------|----------|-------|
| AUC-ROC | 0.87 | 0.85 | +2% OK |
| P99 latency | 185ms | 200ms | -8% OK |
| Test coverage | 91% | 90% | +1% OK |
| Budget consumed | 89k euros | 90k euros | -1% OK |

## Escalated Risks
| # | Risk | Severity | Action required from the executive committee |
|---|--------|----------|---------------------|
| R-02 | DPO delay | AMBER | Approve CIO escalation if no response by W7 |

## Expected Decisions
1. Additional budget of 15k euros for external data enrichment
2. Go-live date: confirm June 28 vs July 5 (Salesforce maintenance)

## Next Steering Committee: 2026-06-02
```

## Multi-Project Executive Committee Dashboard

### AI Portfolio Dashboard (Executive Committee View)

```python
# codir_dashboard_generator.py
from dataclasses import dataclass
from typing import Literal

Status = Literal["GREEN", "AMBER", "RED"]
RAG_LABEL = {"GREEN": "GREEN", "AMBER": "AMBER", "RED": "RED"}

@dataclass
class ProjectStatus:
    id: str
    name: str
    pm: str
    budget_total: float
    budget_consumed: float
    progress_pct: float
    planned_progress_pct: float
    go_live: str
    overall_status: Status
    key_risk: str
    decision_needed: str = ""

def generate_codir_table(projects: list[ProjectStatus]) -> str:
    lines = [
        "# AI Portfolio Dashboard",
        "",
        "| Project | Status | Progress | Budget | Go-Live | Key risk |",
        "|--------|--------|-----------|--------|---------|-----------|",
    ]
    for p in projects:
        budget_pct = (p.budget_consumed / p.budget_total) * 100
        lines.append(
            f"| {p.name} | {RAG_LABEL[p.overall_status]} "
            f"| {p.progress_pct:.0f}% (/{p.planned_progress_pct:.0f}%) "
            f"| {budget_pct:.0f}% ({p.budget_consumed/1000:.0f}k/{p.budget_total/1000:.0f}k) "
            f"| {p.go_live} | {p.key_risk} |"
        )
    decisions = [p for p in projects if p.decision_needed]
    if decisions:
        lines += ["", "## Decisions Required from the Executive Committee", ""]
        for p in decisions:
            lines.append(f"- {p.name}: {p.decision_needed}")
    return "\n".join(lines)
```

### RAG Status Definition Rules

| Status | Schedule (SPI) | Budget (CPI) | Risks | Quality |
|--------|---------------|-------------|---------|---------|
| GREEN | SPI >= 0.95 | CPI >= 0.95 | No active critical | KPIs OK |
| AMBER | SPI 0.85-0.95 | CPI 0.85-0.95 | High risk managed | 1 KPI behind |
| RED | SPI < 0.85 | CPI < 0.85 | Critical risk | Blocking KPI |

## Deliverables
- Monthly one-pager per project (PDF/Notion/PowerPoint format)
- Multi-project executive committee dashboard (RAG + EVM)
- Escalation report for RED projects
- Quarterly executive summary (2-3 slides max)
- Automatable template (Python + jinja2 or Notion API)

## Output format
Specify: number of projects to report on, executive committee frequency, expected format (slide/PDF/Notion/email), audience (CDO only / full executive committee), the sponsor's priority metrics, the company's RAG thresholds, available visualization tools.

## Anti-patterns
- ❌ **One-pager that overflows**: an executive committee report fits on 1 page readable in < 5 min
- ❌ **Technical jargon at the executive committee** (AUC, RPS, OOM) without translation into business impact
- ❌ **Reporting with no requested decision**: an executive committee meets to decide, not just to be informed
- ❌ **RAG with no objective thresholds**: an optimistic "green" not backed by SPI/CPI
- ❌ **Burying the bad under the good** (anti-Minto): the bad news must come up front
- ❌ **Overloaded charts**: 1 message per visual (Knaflic)

## Sources
- **Minto B.** — *The Pyramid Principle* (Pearson, 1987) — answer → arguments → data
- **Nussbaumer Knaflic C.** — *Storytelling with Data* (Wiley, 2015)
- **PMI** — EVM (CPI/SPI/EAC) for progress reporting
- **Few S.** — *Information Dashboard Design* (O'Reilly, 2006)

## See also
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — computation of the reported indices (CPI/SPI/EAC)
- [`gouvernance-portefeuille.md`](gouvernance-portefeuille.md) — multi-project dashboard
- [`stakeholder-management.md`](stakeholder-management.md) — tailor the message per audience
- [`../redacteur_ia/synthese-executive.md`](../redacteur_ia/synthese-executive.md) — Minto/SCQA executive summary
- [`../financial_analyst/reporting-financier.md`](../financial_analyst/reporting-financier.md) — financial part of the reporting
