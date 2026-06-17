# Skill — AI Project Risk Management
> Certifications: PMP (PMI 2026), PMI-RMP (Risk Management Professional), ISO 31000 Lead Risk Manager, EU AI Act Compliance Specialist
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **ISO 31000:2018** (risk management) · **ISO/IEC 31010:2019** (techniques) · **PMBOK 7** + **PMI-RMP** · **AI Act 2024/1689 art. 9** (risk management system) · EMV (PMBOK) · Fairlearn (Microsoft)

## Objective
Proactively identify, assess, and manage the risks specific to AI projects — technical, ethical, regulatory, and business — via a structured RAID log and actionable response plans.

## RAID Log — Full Template

### RAID Log structure

```yaml
# raid_log.yaml — versioned with the project
project: "AI Conversion Scoring"
last_updated: "2026-05-19"
owner: "PM - Guy H."

risks:
  - id: R-01
    category: "Technical"
    title: "Insufficient CRM data quality"
    description: "Conversion data < 2023 may be incomplete or mislabeled"
    probability: high         # high / medium / low
    impact: critical          # critical / high / medium / low
    score: 16                 # Probability × Impact (5x5 matrix)
    status: "ACTIVE"
    owner: "Data Engineer Lead"
    response: "MITIGATE"
    action_plan: |
      1. Data quality audit in Sprint 0 (W2)
      2. Automated profiling with Great Expectations
      3. If error rate > 15%: manual cleanup on a sample
      4. Define a minimum quality threshold before training
    progress_indicator: "Data quality report approved in W3"
    deadline: "2026-06-10"

  - id: R-02
    category: "Regulatory"
    title: "DPO delay validating the DPIA"
    description: "The DPO is engaged on 3 other projects, risk of delay on the DPIA"
    probability: medium
    impact: critical
    score: 12
    status: "ACTIVE"
    owner: "PM"
    response: "MITIGATE"
    action_plan: |
      1. Launch the DPIA from W1 (in parallel with scoping)
      2. Prepare a complete draft for the DPO
      3. Escalate to the CIO if no response by W4
    progress_indicator: "DPIA submitted W2, approved W5"

  - id: R-03
    category: "AI Ethics"
    title: "Discriminatory bias in the model"
    description: "The model could score leads differently by gender or age"
    probability: medium
    impact: high
    score: 9
    status: "MONITORING"
    owner: "Data Scientist Lead"
    response: "MITIGATE"
    action_plan: |
      1. Fairness analysis (Fairlearn) on the test data
      2. Equal Opportunity Difference metric < 0.05
      3. Disparate impact test for protected variables
      4. If bias detected: remove correlated features
    progress_indicator: "Fairness report approved in Sprint 2"

assumptions:
  - id: A-01
    description: "CRM data available since Jan 2022 (36 months of history)"
    status: "VALIDATED"
    validated_by: "CRM Manager"
    validation_date: "2026-05-05"

  - id: A-02
    description: "AWS infrastructure already in place — no setup time"
    status: "TO VALIDATE"
    owner: "Tech Lead"
    deadline: "2026-05-25"

issues:
  - id: I-01
    title: "Salesforce API under maintenance on 2026-05-28"
    description: "48h Salesforce maintenance window — blocks data access"
    severity: "HIGH"
    status: "IN PROGRESS"
    owner: "Data Engineer"
    resolution: "Use a data snapshot as of 2026-05-27"
    deadline: "2026-05-30"

dependencies:
  - id: D-01
    description: "DPIA validation by the DPO before production deployment"
    type: "EXTERNAL"
    status: "IN PROGRESS"
    impact_if_delayed: "Go Live slips by 2 weeks"
    owner: "DPO"

  - id: D-02
    description: "AWS SageMaker access approved by the CIO"
    type: "INTERNAL"
    status: "VALIDATED"
    owner: "CIO"
```

## AI Risk Matrix (5×5)

```python
# risk_matrix.py
from dataclasses import dataclass, field
from enum import IntEnum

class Probability(IntEnum):
    VERY_LOW  = 1   # < 10%
    LOW       = 2   # 10-25%
    MEDIUM    = 3   # 25-50%
    HIGH      = 4   # 50-75%
    VERY_HIGH = 5   # > 75%

class Impact(IntEnum):
    NEGLIGIBLE = 1
    LOW        = 2
    MEDIUM     = 3
    HIGH       = 4
    CRITICAL   = 5

@dataclass
class Risk:
    id: str
    category: str
    title: str
    probability: Probability
    impact: Impact
    owner: str
    response: str = "MITIGATE"
    actions: list = field(default_factory=list)

    @property
    def score(self) -> int:
        return self.probability * self.impact

    @property
    def severity(self) -> str:
        if self.score >= 15:    return "CRITICAL"
        elif self.score >= 9:   return "HIGH"
        elif self.score >= 5:   return "MEDIUM"
        else:                   return "LOW"

    @property
    def response_strategy(self) -> str:
        mapping = {
            "AVOID":     "Eliminate the cause of the risk",
            "MITIGATE":  "Reduce probability or impact",
            "TRANSFER":  "Insurance, contractual SLA",
            "ACCEPT":    "Monitor, contingency budget",
        }
        return mapping.get(self.response, "Undefined")

# AI-specific risk register
AI_RISK_TAXONOMY = {
    "Technical": [
        "Model drift (data drift, concept drift)",
        "Insufficient performance (AUC, F1 below thresholds)",
        "Inference latency outside SLA",
        "Dependency on an unmaintained ML library",
        "Insufficient/biased training data",
    ],
    "Ethics": [
        "Discriminatory bias (gender, age, origin)",
        "Lack of explainability (black box)",
        "Dehumanization of the decision",
        "Misuse of the model",
    ],
    "Regulatory": [
        "EU AI Act non-compliance (high-risk system)",
        "GDPR violation (consent, minimization)",
        "No approved DPIA",
        "Data transfer outside the EU",
    ],
    "Business": [
        "ROI not achieved (disappointing KPIs)",
        "User resistance to change",
        "AI vendor dependency (vendor lock-in)",
        "Departure of key data experts",
    ],
}

def prioritize_risks(risks: list[Risk]) -> list[Risk]:
    return sorted(risks, key=lambda r: r.score, reverse=True)
```

### Contingency Budget Calculation

```python
# contingency_budget.py
def calculate_contingency(
    total_budget: float,
    risks: list[Risk],
    confidence_level: float = 0.80,  # 80% chance of not overrunning
) -> dict:
    """
    EMV (Expected Monetary Value) method for the contingency budget.
    Heuristic: the probability class (1-5) is converted to an approximate
    probability via the 0.1 factor (class 1≈10% ... class 5≈50%), and impact
    to a fraction of the budget via (impact/5). These coefficients are starting
    assumptions TO BE CALIBRATED against the organization's history (not a standard).
    """
    emv_total = sum(
        risk.probability * 0.1 * total_budget * (risk.impact / 5)
        for risk in risks
        if risk.response in ("ACCEPT", "MITIGATE")
    )

    contingency_pct = min(emv_total / total_budget, 0.20)  # Max 20%

    return {
        "budget_base": total_budget,
        "emv_total": round(emv_total, 0),
        "contingency_reserve": round(emv_total * confidence_level, 0),
        "contingency_pct": round(contingency_pct * 100, 1),
        "total_budget_with_contingency": round(total_budget + emv_total, 0),
    }
```

## Risk Management Best Practices

| Practice | Frequency | Owner |
|----------|-----------|-------------|
| RAID Log review | Every sprint | PM |
| Top 5 risks at Steering Committee | Monthly | PM + Sponsor |
| Matrix reassessment | After each incident | PM + Team |
| Contingency plan test | Before each milestone | Tech Lead |
| AI compliance audit (AI Act) | Quarterly | DPO + PM |

## Deliverables
- Initial RAID Log (versioned YAML format on Git)
- 5×5 risk matrix with a visual heatmap
- Documented response plans for all HIGH+ risks
- Contingency budget calculated (EMV method)
- Monthly risk report for the Steering Committee
- Risk dashboard in the executive committee reporting

## Output format
Specify: AI project type (NLP, MLOps, LLM, Vision), industry (health, finance, HR — EU AI Act high-risk systems), total budget, team, critical dependencies identified, history of similar incidents, the sponsor's risk appetite.

## Anti-patterns
- ❌ **RAID log created then never reviewed**: the register must live every sprint
- ❌ **Risk with no owner or response plan**: an unassigned risk is not managed
- ❌ **Probability × impact without a defined scale**: rating without a calibrated matrix = pretense
- ❌ **Forgetting AI-specific risks**: drift, bias, explainability, AI Act non-compliance
- ❌ **Arbitrary, undocumented EMV coefficient**: contingency factors must be justified/calibrated
- ❌ **Fairness threshold set without justification** (e.g. "Equal Opportunity Difference < 0.05"): define it per context and risk

## Sources
- **ISO 31000:2018** — *Risk management — Guidelines* — iso.org
- **ISO/IEC 31010:2019** — *Risk assessment techniques* (31 techniques)
- **PMBOK 7** (PMI 2021) + **PMI-RMP** — *Risk Management Professional*
- **AI Act** — Regulation (EU) 2024/1689, **art. 9** (risk management system for high-risk AI)
- **Fairlearn** — open-source ML fairness toolkit (Microsoft) — fairlearn.org

## See also
- [`cadrage-projet-ia.md`](cadrage-projet-ia.md) — major risks identified at scoping
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — contingency reserve ↔ VAC
- [`gouvernance-portefeuille.md`](gouvernance-portefeuille.md) — risk aggregation at portfolio level
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — risk management on the Agile/product side (ISO 31000 + ROAM)
- [`../juridique_ia/dpia-systemes-ia.md`](../juridique_ia/dpia-systemes-ia.md) — risks to individuals (DPIA)
- [`../data_scientist/ethique-ia-biais.md`](../data_scientist/ethique-ia-biais.md) — technical bias measurement (Fairlearn)
