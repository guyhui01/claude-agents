# Skill — Growth Frameworks
> Certifications: Reforge Growth Series (2026), Product-Led Growth Certified (ProductLed), CXL Growth Marketing, Pragmatic Marketing Certified

## Objective
Diagnose and accelerate the growth of a digital product by applying the AARRR, HEART, North Star Metric, and ICE Scoring frameworks, and distinguishing Growth Loops from traditional Funnels.

## AARRR — Pirate Metrics

### Complete AARRR Diagnostic

```python
# aarrr_diagnostic.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class AARRRSnapshot:
    """Snapshot of AARRR metrics for a given period."""
    period: str

    # ACQUISITION
    new_visitors: int
    new_signups: int
    cac: float                        # Customer acquisition cost

    # ACTIVATION
    activated_users: int              # Reached the "aha moment"
    time_to_activation_median_h: float

    # RETENTION
    day_1_retention: float            # % returned D+1
    day_7_retention: float
    day_30_retention: float
    monthly_churn_rate: float

    # REFERRAL
    referral_signups: int
    viral_coefficient_k: float        # K-factor = invitations × conversion

    # REVENUE
    new_mrr: float
    expansion_mrr: float
    churned_mrr: float

    @property
    def signup_conversion_rate(self) -> float:
        return self.new_signups / self.new_visitors if self.new_visitors else 0

    @property
    def activation_rate(self) -> float:
        return self.activated_users / self.new_signups if self.new_signups else 0

    @property
    def net_mrr_growth(self) -> float:
        return self.new_mrr + self.expansion_mrr - self.churned_mrr

    @property
    def quick_ratio(self) -> float:
        """Quick Ratio = (New + Expansion) / Churn. > 4 = excellent."""
        return (self.new_mrr + self.expansion_mrr) / self.churned_mrr if self.churned_mrr else float("inf")

    def bottleneck(self) -> str:
        """Automatically identifies the main bottleneck."""
        scores = {
            "ACQUISITION": self.signup_conversion_rate / 0.03,      # Bench: 3%
            "ACTIVATION":  self.activation_rate / 0.40,             # Bench: 40%
            "RETENTION":   self.day_30_retention / 0.40,            # Bench: 40%
            "REFERRAL":    self.viral_coefficient_k / 0.15,          # Bench: 0.15
        }
        return min(scores, key=scores.get)

    def report(self) -> str:
        lines = [
            f"## AARRR Report — {self.period}",
            f"",
            f"### ACQUISITION",
            f"  Visitors: {self.new_visitors:,}",
            f"  Signups: {self.new_signups:,} ({self.signup_conversion_rate*100:.1f}%)",
            f"  CAC: {self.cac:.0f}€",
            f"",
            f"### ACTIVATION",
            f"  Activation rate: {self.activation_rate*100:.0f}%",
            f"  Median time: {self.time_to_activation_median_h:.0f}h",
            f"",
            f"### RETENTION",
            f"  D1: {self.day_1_retention*100:.0f}% | D7: {self.day_7_retention*100:.0f}% | D30: {self.day_30_retention*100:.0f}%",
            f"  Monthly churn: {self.monthly_churn_rate*100:.1f}%",
            f"",
            f"### REFERRAL",
            f"  K-factor: {self.viral_coefficient_k:.2f}",
            f"  Referral signups: {self.referral_signups:,}",
            f"",
            f"### REVENUE",
            f"  Net MRR growth: +{self.net_mrr_growth:,.0f}€",
            f"  Quick Ratio: {self.quick_ratio:.1f}",
            f"",
            f"### BOTTLENECK: {self.bottleneck()}",
        ]
        return "\n".join(lines)
```

## North Star Metric

### Definition and decomposition

```
NORTH STAR METRIC — SELECTION GUIDE
────────────────────────────────────────────────────────────
A good NSM must:
  ✓ Measure the VALUE delivered to users (not revenue)
  ✓ Predict long-term growth
  ✓ Be understood and influenceable by the whole team
  ✓ Be a single metric (not 2 or 3)

EXAMPLES BY PRODUCT TYPE
Product                  North Star Metric
─────────────────────────────────────────────────────────
Slack                    Messages sent per active team
Airbnb                   Nights booked
Spotify                  Listening time per active user
LinkedIn                 Useful professional connections
B2B SaaS MLOps           Models deployed to production/week
B2B SaaS HR              Qualified candidates sourced/week
E-commerce               Repeat purchases
Marketplace              Successfully completed transactions
```

```python
# nsm_decomposition.py
def decompose_nsm(nsm_name: str, nsm_value: float) -> dict:
    """
    The North Star Metric tree.
    NSM = f(input metrics) = f(lever 1, lever 2, lever 3)
    """
    # Example: NSM = "ML models deployed to production per week"
    return {
        "nsm": nsm_name,
        "current_value": nsm_value,
        "input_metrics": {
            "breadth":  "Number of active teams (width)",        # More users
            "depth":    "Models deployed per active team",        # More usage
            "frequency":"Deployment frequency per model",        # More often
            "efficiency":"% of deployments successful first time", # Less friction
        },
        "leading_indicators": [
            "Number of notebooks created this week",
            "Training pipeline completion rate",
            "Average deployment time (decreasing = good sign)",
        ],
    }
```

## ICE Scoring — Prioritizing Growth Initiatives

```python
# ice_scoring.py
from dataclasses import dataclass, field

@dataclass
class GrowthInitiative:
    id: str
    title: str
    hypothesis: str           # If X then Y because Z
    # ICE scores (1-10)
    impact: int               # Impact on the NSM if successful
    confidence: int           # Confidence level in the hypothesis
    ease: int                 # Ease of implementation (10 = very easy)
    # Metadata
    stage: str = "PROPOSED"   # PROPOSED / IN_TEST / WINNER / LOSER
    owner: str = ""
    effort_days: int = 0
    tags: list[str] = field(default_factory=list)

    @property
    def ice_score(self) -> float:
        return round((self.impact * self.confidence * self.ease) / 100, 1)

    @property
    def roi_estimate(self) -> float:
        """Simplified ROI: ICE / effort."""
        return round(self.ice_score / self.effort_days, 2) if self.effort_days else 0


def prioritize_initiatives(initiatives: list[GrowthInitiative]) -> list[GrowthInitiative]:
    return sorted(initiatives, key=lambda x: x.ice_score, reverse=True)


# Q3 Growth backlog
backlog = [
    GrowthInitiative("G-01", "Contextual onboarding tooltip",
        "If we guide users at the right moment, then activation +15%",
        impact=7, confidence=8, ease=9, effort_days=3),
    GrowthInitiative("G-02", "2-sided referral program",
        "If reward for referrer AND referee, then K-factor > 0.3",
        impact=9, confidence=5, ease=4, effort_days=15),
    GrowthInitiative("G-03", "D7 re-engagement email sequence",
        "If D+7 reminder with use case, then early churn -10%",
        impact=6, confidence=8, ease=8, effort_days=2),
    GrowthInitiative("G-04", "Native Slack integration",
        "If Slack integration, then retention +20% for Slack-active teams",
        impact=8, confidence=6, ease=3, effort_days=20),
]

for rank, init in enumerate(prioritize_initiatives(backlog), 1):
    print(f"{rank}. [{init.ice_score:4.1f}] {init.title} ({init.effort_days}d)")
# 1. [5.0] Contextual onboarding tooltip (3d)     -> (7*8*9)/100
# 2. [3.8] D7 re-engagement email sequence (2d)   -> (6*8*8)/100
# 3. [1.8] 2-sided referral program (15d)         -> (9*5*4)/100
# 4. [1.4] Native Slack integration (20d)         -> (8*6*3)/100
```

## Growth Loops vs Funnels

```
TRADITIONAL FUNNEL            GROWTH LOOP
──────────────────────────────────────────────────────────
Linear and descending         Circular and self-reinforcing
A → B → C → D (end)          A → B → C → more of A

Funnel example:               Loop example (viral):
Impression                    User uses the product
  → Click                       → Creates content/invites
    → Signup                        → New user
      → Purchase (end)                  → Uses the product (restarts)

TYPES OF GROWTH LOOPS
──────────────────────────────────────────────────────────
Viral Loop      : Usage → Invitation → New user → Usage
Content Loop    : Usage → SEO-indexed UGC → Traffic → Signup
Paid Loop       : Revenue → Ad budget → Acquisition → Revenue
Product Loop    : Feature used → Recommendation → Adoption → Revenue
```

## Deliverables
- Complete AARRR diagnostic with bottleneck identification
- Defined North Star Metric + decomposition tree
- ICE-scored backlog of growth initiatives (top 20)
- Identification of active and potential Growth Loops
- HEART Framework applied (Happiness, Engagement, Adoption, Retention, Task Success)
- Quarterly growth roadmap

## Output format
Specify: product type and business model (SaaS/marketplace/e-commerce/app), available metrics, current North Star (or to define), monthly growth budget, growth team (size), main current levers, growth objective (% ARR / new users / etc.).

## Sources
- **Dave McClure** — *Startup Metrics for Pirates (AARRR)*, 2007 (Ignite Seattle / 500 Startups)
- **Sean Ellis** — *North Star Metric* (~2010) and *ICE Scoring* (GrowthHackers); to distinguish from **Intercom**'s **RICE** (Sean McBride, 2017) which adds Reach
- **Kerry Rodden, Hilary Hutchinson, Xin Fu (Google)** — *Measuring the User Experience on a Large Scale: HEART* (CHI 2010)
- **Reforge** — *Growth Loops* (Brian Balfour, Casey Winters, Kevin Kwok); *Racecar Growth Framework* (Dan Hockenmaier & Lenny Rachitsky)
- **Quick Ratio (SaaS)** — popularized by Social Capital (Mamoon Hamid, ~2015); the benchmarks (activation, retention, K-factor, Quick Ratio > 4) are **orders of magnitude** varying by sector/stage

## Anti-patterns
- **North Star = vanity metric**: choosing an indicator that doesn't capture customer value (e.g. cumulative signups).
- **AARRR with no bottleneck**: optimizing everywhere instead of focusing effort on the leakiest stage.
- **ICE taken as absolute truth**: scores are subjective → a discussion tool, not an automatic decision.
- **Funnel-only**: ignoring growth loops (self-reinforcing loops) and reasoning solely in a linear funnel.
- **Copying benchmarks from another sector/stage** without contextualizing them.

## See also
- [product-analytics.md](product-analytics.md) — instrument and measure AARRR / North Star
- [experimentation-ab-testing.md](experimentation-ab-testing.md) — run the ICE-prioritized experiments
- [attribution-ltv-cac.md](attribution-ltv-cac.md) — link growth to unit economics
- [`../scrum/product-vision.md`](../scrum/product-vision.md) — North Star, OKRs, and product vision (PO side)
