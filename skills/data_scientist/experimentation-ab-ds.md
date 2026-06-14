# Skill — A/B Experimentation & Hypothesis Testing (Data Science)
> Certifications: Google Advanced Data Analytics · IBM Data Science · DeepLearning.AI ML Specialization

## Objective
Design, analyze and interpret A/B experiments with statistical rigor to guide product and business decisions.

## Rigorous experimentation process

### Step 1: Define the hypothesis
```
SMART structure:
  H0 (null)        : "Variant B does not improve metric X"
  H1 (alternative) : "Variant B improves metric X by at least Y%"

Example:
  H0: The new CTA does not change the conversion rate
  H1: The new CTA increases the conversion rate by at least 5%

Primary metric    : conversion rate
Guardrail metrics : churn rate, NPS (must not degrade)
```

### Step 2: Sample size calculation
```python
from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

def calculate_sample_size(baseline_rate: float, mde: float,
                           alpha: float = 0.05, power: float = 0.80) -> int:
    """
    baseline_rate : current conversion rate (e.g. 0.05 = 5%)
    mde           : minimum detectable effect (e.g. 0.01 = +1 point)
    alpha         : significance threshold (0.05)
    power         : statistical power (0.80)
    """
    effect_size = proportion_effectsize(baseline_rate, baseline_rate + mde)
    analysis = NormalIndPower()
    n = analysis.solve_power(effect_size=effect_size, alpha=alpha, power=power)
    return int(np.ceil(n))

# Example
n = calculate_sample_size(baseline_rate=0.05, mde=0.005)
print(f"Minimum size per group: {n:,}")
print(f"Estimated duration: {n * 2 / 1000:.0f} days at 1000 visitors/day")
```

### Step 3: Results analysis
```python
from scipy import stats
import numpy as np

def analyze_ab_test(control_conversions: int, control_visitors: int,
                     treatment_conversions: int, treatment_visitors: int,
                     alpha: float = 0.05) -> dict:

    rate_ctrl = control_conversions / control_visitors
    rate_trt  = treatment_conversions / treatment_visitors
    lift      = (rate_trt - rate_ctrl) / rate_ctrl

    # Z-test on proportions
    from statsmodels.stats.proportion import proportions_ztest
    count = np.array([treatment_conversions, control_conversions])
    nobs  = np.array([treatment_visitors, control_visitors])
    stat, p_value = proportions_ztest(count, nobs)

    # Confidence interval on the lift
    se = np.sqrt(rate_ctrl*(1-rate_ctrl)/control_visitors +
                 rate_trt*(1-rate_trt)/treatment_visitors)
    z_crit = stats.norm.ppf(1 - alpha/2)
    diff = rate_trt - rate_ctrl
    ci = (diff - z_crit*se, diff + z_crit*se)

    result = {
        'control_rate'  : f"{rate_ctrl:.2%}",
        'treatment_rate': f"{rate_trt:.2%}",
        'lift'          : f"{lift:.2%}",
        'p_value'       : f"{p_value:.4f}",
        'significant'   : p_value < alpha,
        'ci_95'         : f"[{ci[0]:.4f}, {ci[1]:.4f}]",
        'recommendation': "SHIP B" if (p_value < alpha and lift > 0) else "KEEP A"
    }
    return result
```

## Pitfalls and errors to avoid

### Peeking problem (premature stopping)
```python
# ❌ Stopping the test as soon as p < 0.05 (guaranteed false positive)

# ✅ Use Sequential Testing (alpha spending)
# Or set the duration in advance and stick to it
# Tool: Evan's A/B Test Calculator with Bonferroni correction
```

### Multiple Testing
```python
# If several variants (A/B/C/D): Bonferroni correction
alpha_corrected = 0.05 / n_tests  # n_tests = number of comparisons

# Or Benjamini-Hochberg (FDR) for more power
from statsmodels.stats.multitest import multipletests
rejected, p_corrected, _, _ = multipletests(p_values, method='fdr_bh')
```

### Network Effects (contamination effects)
```
Risk: users in group A interact with those in group B
Solution: randomize by cluster (e.g. by geography, by company)
          instead of by user
```

## Advanced experimentation

### Multi-Armed Bandit (vs. fixed A/B)
```python
# Thompson Sampling: dynamic allocation based on performance
import numpy as np

class ThompsonSampling:
    def __init__(self, n_arms):
        self.alpha = np.ones(n_arms)  # successes + 1
        self.beta  = np.ones(n_arms)  # failures + 1

    def choose_arm(self) -> int:
        samples = [np.random.beta(a, b) for a, b in zip(self.alpha, self.beta)]
        return np.argmax(samples)

    def update(self, arm: int, reward: int):
        self.alpha[arm] += reward
        self.beta[arm]  += (1 - reward)
```

## Deliverables
- Experimentation plan (hypothesis, metrics, size, duration)
- Analysis report with statistical interpretation
- Documented go/no-go recommendation
- Experiment registry (history)

## Output format
Specify: primary metric · baseline rate · MDE (minimum detectable effect) · available traffic · maximum duration · number of variants
