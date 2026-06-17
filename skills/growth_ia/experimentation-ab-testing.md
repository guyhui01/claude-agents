# Skill — Experimentation Culture & A/B Testing
> Certifications: Optimizely Certified Partner (2026), LaunchDarkly Certified, Google Analytics 4 Certified, Lean Experimentation (EXIN)

## Objective
Establish a data-driven experimentation culture — rigorous test design, correct statistical sample-size calculation, results analysis, and feature-flag infrastructure for progressive rollout.

## Experiment Design

### Sample Size Calculation

```python
# sample_size_calculator.py
import numpy as np
from scipy import stats
from scipy.stats import norm

def calculate_sample_size(
    baseline_rate: float,    # Current conversion rate (e.g. 0.05 = 5%)
    minimum_effect: float,   # Minimum detectable effect (e.g. 0.01 = +1pp absolute)
    alpha: float = 0.05,     # Alpha risk (false positive) — 5%
    power: float = 0.80,     # Statistical power (1-beta) — 80%
    test_type: str = "two_sided",  # two_sided or one_sided
) -> dict:
    """
    Compute the sample size for an A/B test.
    Method: Pearson proportion test.
    """
    z_alpha = norm.ppf(1 - alpha / (2 if test_type == "two_sided" else 1))
    z_beta  = norm.ppf(power)

    p1 = baseline_rate
    p2 = baseline_rate + minimum_effect
    p_pooled = (p1 + p2) / 2

    n = ((z_alpha * np.sqrt(2 * p_pooled * (1 - p_pooled)) +
          z_beta  * np.sqrt(p1 * (1-p1) + p2 * (1-p2))) /
         (p2 - p1)) ** 2

    n_per_variant = int(np.ceil(n))

    # Estimated duration
    return {
        "n_per_variant": n_per_variant,
        "n_total": n_per_variant * 2,
        "baseline_rate_pct": f"{baseline_rate * 100:.1f}%",
        "target_rate_pct":   f"{p2 * 100:.1f}%",
        "mde_relative_pct":  f"{minimum_effect / baseline_rate * 100:.0f}%",
        "alpha": alpha,
        "power": power,
        "confidence_level": f"{(1-alpha)*100:.0f}%",
    }


def estimate_test_duration(
    n_per_variant: int,
    daily_visitors: int,
    traffic_split: float = 0.5,  # 50% in the test
) -> dict:
    """Estimate the test duration needed."""
    daily_in_test = daily_visitors * traffic_split / 2  # Per variant
    days_needed = np.ceil(n_per_variant / daily_in_test)
    weeks_needed = days_needed / 7

    return {
        "days_needed": int(days_needed),
        "weeks_needed": round(weeks_needed, 1),
        "min_duration_weeks": max(2, int(np.ceil(weeks_needed))),  # Min 2 weeks
        "warning": "Too long (>8 weeks) — increase the MDE" if weeks_needed > 8 else None,
    }


# Concrete example: test a new CTA
result = calculate_sample_size(
    baseline_rate=0.035,  # 3.5% current conversion
    minimum_effect=0.007,  # Detect +0.7pp (i.e. +20% relative)
    alpha=0.05,
    power=0.80,
)
print(f"Per-variant size: {result['n_per_variant']:,}")  # 11,858 per variant
duration = estimate_test_duration(result["n_per_variant"], daily_visitors=800)
print(f"Estimated duration: {duration['weeks_needed']} weeks")  # 8.6 weeks
print(duration["warning"])  # "Too long (>8 weeks) — increase the MDE"
# Lesson: detecting +20% relative on a 3.5% base with 800 visitors/day
# takes ~9 weeks → the guardrail triggers. Prefer increasing the targeted
# MDE (more ambitious target) or the allocated traffic rather than stretching duration.
```

### Results Analysis

```python
# ab_test_analysis.py
from scipy.stats import chi2_contingency, norm
import numpy as np
from dataclasses import dataclass

@dataclass
class ABTestResult:
    test_name: str
    control_visitors: int
    control_conversions: int
    variant_visitors: int
    variant_conversions: int

    @property
    def control_rate(self) -> float:
        return self.control_conversions / self.control_visitors

    @property
    def variant_rate(self) -> float:
        return self.variant_conversions / self.variant_visitors

    @property
    def relative_lift(self) -> float:
        return (self.variant_rate - self.control_rate) / self.control_rate

    def analyze(self, alpha: float = 0.05) -> dict:
        # Pearson chi-square test
        contingency = [
            [self.control_conversions, self.control_visitors - self.control_conversions],
            [self.variant_conversions, self.variant_visitors - self.variant_conversions],
        ]
        chi2, p_value, _, _ = chi2_contingency(contingency, correction=False)

        # Confidence interval on the difference
        diff = self.variant_rate - self.control_rate
        se = np.sqrt(
            self.control_rate * (1 - self.control_rate) / self.control_visitors +
            self.variant_rate * (1 - self.variant_rate) / self.variant_visitors
        )
        z = norm.ppf(1 - alpha / 2)
        ci_lower, ci_upper = diff - z * se, diff + z * se

        is_significant = p_value < alpha
        winner = "VARIANT" if (is_significant and diff > 0) else "CONTROL" if (is_significant and diff < 0) else "INCONCLUSIVE"

        return {
            "test": self.test_name,
            "control_rate_pct": f"{self.control_rate*100:.2f}%",
            "variant_rate_pct": f"{self.variant_rate*100:.2f}%",
            "relative_lift_pct": f"{self.relative_lift*100:+.1f}%",
            "absolute_diff_pp": f"{diff*100:+.2f}pp",
            "ci_95": f"[{ci_lower*100:+.2f}pp, {ci_upper*100:+.2f}pp]",
            "p_value": round(p_value, 4),
            "significant": is_significant,
            "winner": winner,
            "recommendation": f"Deploy VARIANT" if winner == "VARIANT" else "Keep CONTROL",
        }


# Example
test = ABTestResult("Red vs. green CTA", 3200, 112, 3150, 142)
result = test.analyze()
for k, v in result.items():
    print(f"{k:25s}: {v}")
# relative_lift_pct       : +28.8%
# p_value                 : 0.0404
# winner                  : VARIANT
```

## Feature Flags — LaunchDarkly / OpenFeature

### Feature Flag configuration (OpenFeature + Flagd)

```typescript
// feature-flags.ts — OpenFeature SDK
import { OpenFeature, InMemoryProvider } from "@openfeature/server-sdk"

// Initialization with provider (LaunchDarkly, Flagd, ConfigCat...)
await OpenFeature.setProviderAndWait(
  new LaunchDarklyProvider(process.env.LD_SDK_KEY!)
)

const client = OpenFeature.getClient()

// Evaluating a flag with user context
const context = {
  targetingKey: user.id,
  email: user.email,
  plan: user.plan,
  country: user.country,
  percentile: user.abTestBucket,  // 0-100
}

// Simple boolean flag
const showNewCheckout = await client.getBooleanValue(
  "new-checkout-flow", false, context
)

// Flag with variant (multivariate)
const ctaVariant = await client.getStringValue(
  "cta-button-test", "control", context
)
// Possible values: "control" | "red-button" | "bigger-text" | "urgency-copy"

// Numeric flag (price, limits)
const discountPct = await client.getNumberValue(
  "welcome-discount-pct", 0, context
)
```

## Experimentation Best Practices

### Pre-launch test checklist

```yaml
pre_launch_checklist:
  statistical:
    - Sample size calculated (>80% power)
    - Minimum 2-week duration (weekly cycles)
    - Single primary metric defined BEFORE the test
    - Maximum 3 secondary metrics
    - No peeking (looking at results before the end)

  technical:
    - Smoke test on the variant
    - QA on the main browsers/devices
    - Prior AA test (check group equality)
    - Event logging in analytics

  organizational:
    - Documented hypothesis (if X then Y because Z)
    - No other simultaneous changes on the same page
    - Clear schedule (start and end date)
    - Person responsible for the analysis

common_mistakes:
  - "Stopping the test as soon as significance appears" → peeking bias
  - "Testing 10 variants at once" → Bonferroni correction needed
  - "Changing the primary metric after analysis" → HARKing (Hypothesizing After Results Known)
  - "Ignoring practical significance" → a +0.1% lift statistically sig but of no business interest
  - "Underestimating the novelty effect" → too short a duration
```

| Platform | Ideal for | Setup complexity | Cost |
|-----------|------------|-----------------|------|
| Optimizely | Websites + apps, complex A/B | Medium | High |
| LaunchDarkly | Feature flags, devs, microservices | Low | Medium |
| AB Tasty | Websites, non-technical | Low | Medium |
| VWO | E-commerce, heatmaps | Low | Medium |
| Statsig | Apps + backend, advanced stats | Medium | Free/Paid |
| Flagsmith | Open source, self-hosted | High | Free |

## Deliverables
- Quarterly experimentation plan (prioritized test roadmap)
- Sample-size and test-duration calculator
- Results-analysis template with statistical tests
- Feature-flag configuration (LaunchDarkly / Flagd)
- Repository of past experiments (hypothesis, result, learning)
- Team training (avoiding common biases)

## Output format
Specify: the primary metric to improve (conversion, retention, NPS), available monthly traffic, current experimentation platform, the team's statistical capabilities, tooling budget, objective (quick wins or long-term experimentation).

## Sources
- **Ronald A. Fisher** — *The Design of Experiments* (1935) — foundations of hypothesis testing and randomization
- **Neyman & Pearson** (1933) — type I (α) / type II (β) error framework and power
- **Carlo Bonferroni** (1936) — multiple-comparison correction
- **Kohavi, Tang & Xu** — *Trustworthy Online Controlled Experiments* (Cambridge, 2020) — reference for large-scale A/B testing (peeking, SRM, novelty effect)
- **Official documentation**: Optimizely, Statsig, LaunchDarkly / OpenFeature (feature flags), GA4 (experiments)

## Anti-patterns
- **Peeking / optional stopping**: stopping the test at the 1st observed significance inflates the false-positive rate.
- **HARKing**: redefining the primary metric or hypothesis after seeing the data.
- **Uncorrected multiple comparisons**: testing N variants/metrics without Bonferroni (or equivalent).
- **Sample Ratio Mismatch (SRM)**: actual split ≠ 50/50 → assignment bias, invalid test.
- **Confusing statistical and practical significance**: a "significant" +0.1% lift with no business value.
- **Under-sizing / ignoring the novelty effect**: too short a duration (see the calculator's >8-week guardrail).

## See also
- [product-analytics.md](product-analytics.md) — define the metrics and funnel to test
- [growth-frameworks.md](growth-frameworks.md) — prioritize experiments (ICE) and link to the North Star
- [`../data_scientist/experimentation-ab-ds.md`](../data_scientist/experimentation-ab-ds.md) — data-science-side experimentation (power, advanced tests)
