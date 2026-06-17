# Skill — AI Portfolio Governance
> Certifications: PfMP (Portfolio Management Professional 2026), SAFe Program Consultant (SPC), Gartner PPM Certified
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **PMI Standard for Portfolio Management** (4th ed. 2017) · **SAFe Lean Portfolio Management** + **WSJF** (POPM) · **Gartner PPM** · AI Act 2024/1689 coupling (compliance criterion)

## Objective
Manage an AI project portfolio with objective prioritization (WSJF), multi-criteria scoring, structured portfolio reviews, and clear visibility into delivered value and available capacity.

## Prioritization Frameworks

### WSJF — Weighted Shortest Job First (SAFe)

```python
# wsjf_calculator.py
from dataclasses import dataclass
from typing import List

@dataclass
class Initiative:
    id: str
    title: str
    # Components of economic value
    user_business_value: int        # Fibonacci 1·2·3·5·8·13·20
    time_criticality: int           # Fibonacci — rated relatively
    risk_reduction_opportunity: int  # Fibonacci — RR/OE combined
    # Size (effort)
    job_size: int                   # Fibonacci (T-shirt) — smallest = 1 per column (see skills/safe/wsjf.md)
    # Metadata
    team: str = ""
    status: str = "PROPOSED"
    quarter: str = ""

    @property
    def cost_of_delay(self) -> int:
        """CoD = sum of the 3 value components."""
        return self.user_business_value + self.time_criticality + self.risk_reduction_opportunity

    @property
    def wsjf(self) -> float:
        """WSJF = CoD / Job Size."""
        return round(self.cost_of_delay / self.job_size, 2) if self.job_size else 0


def prioritize_portfolio(initiatives: List[Initiative]) -> List[Initiative]:
    return sorted(initiatives, key=lambda x: x.wsjf, reverse=True)


def print_wsjf_table(initiatives: List[Initiative]):
    sorted_list = prioritize_portfolio(initiatives)
    print(f"{'#':<3} {'ID':<8} {'Title':<35} {'CoD':<5} {'Size':<6} {'WSJF':<6} {'Status'}")
    print("-" * 80)
    for rank, init in enumerate(sorted_list, 1):
        print(f"{rank:<3} {init.id:<8} {init.title[:34]:<35} {init.cost_of_delay:<5} "
              f"{init.job_size:<6} {init.wsjf:<6} {init.status}")


# Example AI portfolio 2026 Q3 — rated relatively, smallest = 1 per column (see wsjf.md)
portfolio = [
    Initiative("IA-01", "Customer support chatbot (LLM)",     user_business_value=5, time_criticality=3, risk_reduction_opportunity=3, job_size=3),
    Initiative("IA-02", "Real-time fraud scoring",            user_business_value=8, time_criticality=5, risk_reduction_opportunity=8, job_size=5),
    Initiative("IA-03", "Product recommendations",            user_business_value=3, time_criticality=2, risk_reduction_opportunity=2, job_size=2),
    Initiative("IA-04", "Churn prediction",                   user_business_value=3, time_criticality=2, risk_reduction_opportunity=5, job_size=3),
    Initiative("IA-05", "OCR document processing",            user_business_value=1, time_criticality=1, risk_reduction_opportunity=1, job_size=1),
    Initiative("IA-06", "Dynamic price optimization",         user_business_value=5, time_criticality=3, risk_reduction_opportunity=3, job_size=8),
]

print_wsjf_table(portfolio)
# Result: IA-02 (Fraud scoring) leads — CoD 21, WSJF 4.2
```

### Multi-Criteria Scoring — Decision Matrix

```python
# portfolio_scoring.py
from dataclasses import dataclass, field
from typing import Dict

CRITERIA_WEIGHTS = {
    "business_value":        0.30,   # Revenue/savings impact
    "strategic_alignment":   0.25,   # Fit with the company's AI roadmap
    "technical_feasibility": 0.20,   # Tech maturity + skills available
    "ai_act_compliance":     0.15,   # EU AI Act regulatory risks
    "time_to_value":         0.10,   # Time to first value
}

@dataclass
class PortfolioItem:
    id: str
    title: str
    scores: Dict[str, int]  # Score 1-5 per criterion

    def weighted_score(self, weights: Dict[str, float] = CRITERIA_WEIGHTS) -> float:
        return sum(
            self.scores.get(criterion, 0) * weight
            for criterion, weight in weights.items()
        )

    def category(self) -> str:
        score = self.weighted_score()
        if score >= 4.0:   return "PRIORITY"
        elif score >= 3.0: return "PLANNED"
        elif score >= 2.0: return "BACKLOG"
        else:              return "DROPPED"


# Portfolio review Q3 2026
items = [
    PortfolioItem("IA-02", "Fraud scoring", {
        "business_value": 5, "strategic_alignment": 5,
        "technical_feasibility": 4, "ai_act_compliance": 3, "time_to_value": 3
    }),
    PortfolioItem("IA-06", "Dynamic pricing", {
        "business_value": 5, "strategic_alignment": 4,
        "technical_feasibility": 2, "ai_act_compliance": 2, "time_to_value": 2
    }),
]

for item in sorted(items, key=lambda x: x.weighted_score(), reverse=True):
    score = item.weighted_score()
    print(f"{item.id} | {item.title:<35} | Score: {score:.2f} | {item.category()}")
```

## Portfolio Review — Meeting Format

### Typical agenda (90 minutes)

```
AI PORTFOLIO REVIEW — Q3 2026
─────────────────────────────────────────────────────────────
Frequency: Quarterly
Attendees: CDO, CIO, project sponsors, PM leads

[00-15 min]  Portfolio dashboard — RAG status
             → 1 slide per active project: progress, budget, risks
             → Projects in red: priority discussion

[15-35 min]  Capacity analysis
             → Available teams vs. Q4 demand
             → Bottleneck identification

[35-60 min]  New requests
             → WSJF scoring presentation
             → Go/No-Go vote on proposed initiatives

[60-80 min]  Portfolio trade-offs
             → Projects to accelerate / slow down / stop
             → Resource reallocation

[80-90 min]  Decisions & actions
             → Q4 portfolio approved
             → Owners and delivery dates
```

### Portfolio Dashboard

```yaml
# portfolio_dashboard.yaml — monthly update
portfolio_summary:
  date: "2026-05-19"
  total_budget_engaged: 580_000
  total_budget_planned: 950_000
  active_projects: 4
  on_hold: 1
  completed_ytd: 2

projects:
  - id: IA-01
    name: "Customer Support Chatbot"
    status: GREEN          # GREEN / AMBER / RED
    progress_pct: 75
    budget_consumed: 85_000
    budget_total: 120_000
    cpi: 0.98
    spi: 1.05
    go_live: "2026-06-30"
    risks: "No critical risk"

  - id: IA-02
    name: "Real-Time Fraud Scoring"
    status: AMBER
    progress_pct: 45
    budget_consumed: 110_000
    budget_total: 200_000
    cpi: 0.89
    spi: 0.83
    go_live: "2026-09-15"
    risks: "Insufficient data — action plan W12"

capacity_heatmap:
  data_scientists:
    available_q3: 4
    allocated_q3: 3.5
    buffer: 0.5
  ml_engineers:
    available_q3: 3
    allocated_q3: 3
    buffer: 0            # BOTTLENECK
```

## Deliverables
- Portfolio register (WSJF scores + multi-criteria scores)
- Quarterly dashboard with RAG status
- Capacity report and resource heatmap
- Portfolio review minutes
- 12-month rolling AI roadmap
- Simplified business cases for new initiatives

## Output format
Specify: number of active/proposed AI projects, total portfolio budget, available teams (DataScience, MLEng, DataEng), planning horizon (quarter/year), PPM tools used (Jira Portfolio, Planview, Notion), the company's strategic criteria.

## Anti-patterns
- ❌ **Absolute WSJF**: rating in monetary value instead of relatively per column (smallest = 1) — violates the SAFe method
- ❌ **Portfolio without capacity analysis**: prioritizing without checking available resources (bottlenecks)
- ❌ **Multi-criteria scoring without explicit weights**: summing ratings with no strategic weighting
- ❌ **No project ever stopped**: a healthy portfolio kills low-WSJF initiatives (kill criteria)
- ❌ **Declarative RAG status** with no objective thresholds (SPI/CPI) → surface-level optimism
- ❌ **Portfolio review without a decision**: an information meeting instead of Go/No-Go arbitration

## Sources
- **PMI** — *The Standard for Portfolio Management* (4th ed., 2017)
- **SAFe** — *Lean Portfolio Management* + **WSJF** (scaledagileframework.com)
- **Gartner** — *PPM Magic Quadrant* / Adaptive Project Management (gartner.com)
- **Reinertsen D.** — *The Principles of Product Development Flow* (2009) — Cost of Delay

## See also
- [`../safe/wsjf.md`](../safe/wsjf.md) — detailed WSJF method (relative rating per column)
- [`cadrage-projet-ia.md`](cadrage-projet-ia.md) — business case feeding the portfolio scoring
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — EVM aggregation of the portfolio's projects
- [`reporting-codir.md`](reporting-codir.md) — multi-project portfolio dashboard
- [`../financial_analyst/investment-scoring.md`](../financial_analyst/investment-scoring.md) — investment scoring (financial view)
