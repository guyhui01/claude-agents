# Skill — Earned Value Management (EVM) for AI Projects
> Certifications: PMP (PMI 2026), PMI-SP (Scheduling Professional), PMI-ACP, Certified Agile Value Engineer
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **ANSI/EIA-748** (rev. D, SAE 2019 — 32 EVMS guidelines) · **PMI Practice Standard for EVM** (2nd ed. 2011) · **PMBOK 7** (PMI 2021)

## Objective
Track an AI project's real progress with EVM indicators — detect cost and schedule drifts early, forecast the finish date and cost, and present the data to the Steering Committee.

## EVM Concepts & Formulas

### The 3 fundamental quantities

```
EARNED VALUE MANAGEMENT — CALCULATION
─────────────────────────────────────────────────────────────
PV  (Planned Value)    = BAC × % planned to date
     → What we SHOULD HAVE spent for the planned work

EV  (Earned Value)     = BAC × % of work actually completed
     → What we HAVE PRODUCED (in value)

AC  (Actual Cost)      = Actual costs spent to date
     → What we HAVE SPENT

BAC (Budget At Completion) = Total project budget
```

### Full EVM calculations

```python
# evm_calculator.py
from dataclasses import dataclass
from typing import Optional
import math

@dataclass
class EVMSnapshot:
    """EVM snapshot at a point in time."""
    project_name: str
    date: str
    bac: float          # Budget At Completion
    pv: float           # Planned Value
    ev: float           # Earned Value
    ac: float           # Actual Cost
    eac_method: str = "CPI"  # EAC forecasting method

    # ── Variances ──────────────────────────────────────────
    @property
    def cv(self) -> float:
        """Cost Variance = EV - AC. Negative = overrun."""
        return self.ev - self.ac

    @property
    def sv(self) -> float:
        """Schedule Variance = EV - PV. Negative = behind schedule."""
        return self.ev - self.pv

    # ── Performance indices ─────────────────────────────────
    @property
    def cpi(self) -> float:
        """Cost Performance Index. < 1 = cost overrun."""
        return self.ev / self.ac if self.ac else float("inf")

    @property
    def spi(self) -> float:
        """Schedule Performance Index. < 1 = behind schedule."""
        return self.ev / self.pv if self.pv else float("inf")

    # ── Forecasts ──────────────────────────────────────────
    @property
    def eac(self) -> float:
        """Estimate At Completion — forecast of the final cost."""
        if self.eac_method == "CPI":
            # Assumption: future performance = past performance (pessimistic)
            return self.bac / self.cpi
        elif self.eac_method == "ACTUAL":
            # Assumption: the rest will be done on budget (optimistic)
            return self.ac + (self.bac - self.ev)
        elif self.eac_method == "CPI_SPI":
            # Cost and schedule combination (realistic)
            return self.ac + (self.bac - self.ev) / (self.cpi * self.spi)
        return self.bac

    @property
    def etc(self) -> float:
        """Estimate To Complete = EAC - AC."""
        return self.eac - self.ac

    @property
    def vac(self) -> float:
        """Variance At Completion = BAC - EAC. Negative = forecast overrun."""
        return self.bac - self.eac

    @property
    def tcpi(self) -> float:
        """To-Complete Performance Index — efficiency required to finish on budget.
        > 1.1 = very hard, > 1.2 = practically impossible
        """
        remaining_work = self.bac - self.ev
        remaining_budget = self.bac - self.ac
        return remaining_work / remaining_budget if remaining_budget else float("inf")

    @property
    def percent_complete(self) -> float:
        """Real progress (EV-based)."""
        return (self.ev / self.bac) * 100 if self.bac else 0

    def summary(self) -> dict:
        return {
            "project": self.project_name,
            "date": self.date,
            # Progress
            "percent_complete": f"{self.percent_complete:.1f}%",
            # Budget
            "bac": f"€{self.bac:,.0f}",
            "ac":  f"€{self.ac:,.0f}",
            "ev":  f"€{self.ev:,.0f}",
            "pv":  f"€{self.pv:,.0f}",
            # Variances
            "cv":  f"€{self.cv:,.0f} ({'OK' if self.cv >= 0 else 'OVERRUN'})",
            "sv":  f"€{self.sv:,.0f} ({'OK' if self.sv >= 0 else 'LATE'})",
            # Indices
            "cpi": f"{self.cpi:.3f} ({'OK' if self.cpi >= 1 else 'ALERT'})",
            "spi": f"{self.spi:.3f} ({'OK' if self.spi >= 1 else 'ALERT'})",
            # Forecasts
            "eac":  f"€{self.eac:,.0f}",
            "etc":  f"€{self.etc:,.0f}",
            "vac":  f"€{self.vac:,.0f}",
            "tcpi": f"{self.tcpi:.3f} ({'FEASIBLE' if self.tcpi <= 1.1 else 'HARD'})",
        }


# Real example — AI Project, Sprint 6 of 10
snapshot = EVMSnapshot(
    project_name="AI Conversion Scoring",
    date="2026-05-19",
    bac=180_000,    # Total budget: €180k
    pv=108_000,     # 60% of the schedule elapsed → PV = 60% × 180k
    ev=90_000,      # Only 50% of the work done → EV = 50% × 180k
    ac=99_000,      # Actual costs spent: €99k
    eac_method="CPI",
)

for k, v in snapshot.summary().items():
    print(f"{k:25s} {v}")

# Output:
# percent_complete          50.0%
# cpi                       0.909 (ALERT)  → cost overrun
# spi                       0.833 (ALERT)  → 17% behind schedule
# eac                       €198,000        → final forecast +10%
# vac                       €-18,000        → forecast overrun
# tcpi                      1.100 (HARD)    → recovery very hard
```

### Interpreting the indicators

| CPI / SPI | Meaning | Action |
|-----------|--------------|--------|
| CPI > 1, SPI > 1 | Ahead and under budget | Capitalize |
| CPI < 1, SPI < 1 | Behind and over budget | Immediate escalation |
| CPI < 1, SPI > 1 | Ahead but expensive | Review unit costs |
| CPI > 1, SPI < 1 | Behind but economical | Accelerate at no cost |

### Simplified EVM Reporting (Agile EVM)

```python
# agile_evm.py — EVM adapted to sprints
def agile_evm_from_sprints(
    sprint_budgets: list[float],        # Budget per sprint
    sprint_velocities: list[float],     # % completed per sprint (0-1)
    actual_costs: list[float],          # Actual costs per sprint
    planned_velocities: list[float],    # % planned per sprint
) -> dict:
    """Compute Agile EVM from sprint data."""
    bac = sum(sprint_budgets)
    pv = sum(b * p for b, p in zip(sprint_budgets, planned_velocities))
    ev = sum(b * v for b, v in zip(sprint_budgets, sprint_velocities))
    ac = sum(actual_costs)

    snapshot = EVMSnapshot("Agile Project", "today", bac, pv, ev, ac)
    return snapshot.summary()
```

## Deliverables
- Monthly EVM report (CPI/SPI/EAC/VAC table)
- S-curves (PV, EV, AC) over the full project duration
- Excel/Notion dashboard with automatic calculations
- Drift analysis and corrective recommendations
- Final cost forecasts (3 EAC methods compared)
- Steering Committee slides: EVM status on 1 page

## Output format
Specify: total budget (BAC), project duration (weeks/sprints), reference date, available data (current PV, EV, AC), accounting method (per sprint, per work package, per milestone), reporting frequency.

## Anti-patterns
- ❌ **EVM without a frozen baseline (PMB)**: with no measurement reference, the CPI/SPI indices mean nothing
- ❌ **Confusing EV (earned value) and AC (actual cost)**: EV = % completed × BAC, not the spend
- ❌ **Declarative % progress** ("90% syndrome") instead of EV measured on objective milestones
- ❌ **Optimistic EAC ignoring past CPI**: if CPI < 1 persistently, EAC = BAC/CPI (not hope)
- ❌ **Agile EVM without conversion**: mapping story points → value (BAC) with no explicit rule
- ❌ **Reporting CPI/SPI without action**: a red index not followed by a decision is governance theater

## Sources
- **ANSI/EIA-748** — *Earned Value Management Systems* (rev. D, SAE International 2019) — 32 guidelines (rev. E in preparation)
- **PMI** — *Practice Standard for Earned Value Management* (2nd ed., 2011)
- **PMBOK 7** — *A Guide to the PMBOK* (PMI, 7th ed. 2021) — "Measurement" performance domain

## See also
- [`reporting-codir.md`](reporting-codir.md) — executive read-out of the EVM indices (1 page)
- [`gestion-risques-projet.md`](gestion-risques-projet.md) — contingency budget (VAC ↔ reserve link)
- [`planification-hybride.md`](planification-hybride.md) — schedule/cost baseline, source of PV
- [`../financial_analyst/reporting-financier.md`](../financial_analyst/reporting-financier.md) — EVM from the management-control side
- [`gouvernance-portefeuille.md`](gouvernance-portefeuille.md) — multi-project EVM aggregation
