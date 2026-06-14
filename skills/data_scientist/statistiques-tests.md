# Skill — Statistics & Hypothesis Testing
> Certifications: Google Advanced Data Analytics · IBM Data Science · SAS Statistical Business Analyst

## Objective
Apply statistical tools to validate hypotheses, measure effects and make data-driven decisions.

## Statistical tests — selection guide
| Question | Test | Conditions |
|---|---|---|
| 2 independent means | Student's t-test | Normality, equal variance |
| 2 paired means | Paired t-test | Before/after same subject |
| > 2 groups | ANOVA | Normality, homoscedasticity |
| Proportions (A/B test) | z-test for proportions | n > 30 |
| Non-normal distribution | Mann-Whitney U | Non-parametric alternative to the t-test |
| Categorical variables | Chi-2 | Expected frequencies > 5 |
| Correlation | Pearson (linear) / Spearman (rank) | Depending on distribution |

## A/B Testing (experimentation)
```python
from scipy import stats
import numpy as np

# A/B test data
control = [0, 1, 0, 0, 1, ...]   # Group A (n_A)
treatment = [1, 1, 0, 1, 1, ...]  # Group B (n_B)

# Conversion rates
conv_A = sum(control) / len(control)
conv_B = sum(treatment) / len(treatment)

# z-test on proportions
from statsmodels.stats.proportion import proportions_ztest
count = np.array([sum(treatment), sum(control)])
nobs = np.array([len(treatment), len(control)])
stat, p_value = proportions_ztest(count, nobs)

print(f"Lift: {(conv_B - conv_A) / conv_A:.1%}")
print(f"p-value: {p_value:.4f}")
print(f"Significant: {'Yes' if p_value < 0.05 else 'No'}")
```

## Sample size calculation (A/B test)
```python
from statsmodels.stats.power import NormalIndPower

analysis = NormalIndPower()
n = analysis.solve_power(
    effect_size=0.1,    # Minimum detectable lift
    alpha=0.05,         # Significance threshold
    power=0.8,          # Statistical power
    alternative='two-sided'
)
print(f"Minimum size per group: {int(n)}")
```

## Confidence intervals
```python
import scipy.stats as stats

# CI on the mean (t-distribution)
data = [12.3, 11.8, 13.1, 12.7, 11.9]
ci = stats.t.interval(0.95, df=len(data)-1,
                       loc=np.mean(data),
                       scale=stats.sem(data))
print(f"95% CI: [{ci[0]:.2f}, {ci[1]:.2f}]")
```

## Linear regression — inference
```python
import statsmodels.api as sm

X = sm.add_constant(X)
model = sm.OLS(y, X).fit()
print(model.summary())
# Interpret: coefficients, p-values, R², F-statistic
```

## Classic statistical pitfalls
| Pitfall | Description | Solution |
|---|---|---|
| p-hacking | Testing until p < 0.05 | Pre-register the hypothesis |
| Multiple testing | False positives if > 1 test | Bonferroni / FDR correction |
| Causation/correlation confusion | High r ≠ causation | Experimental design, IV |
| Survivorship bias | Analyzing only the successes | Include all cases |
| Simpson's paradox | Trend reversed by aggregation | Stratify the analysis |

## Deliverables
- Statistical analysis report (method, results, decision)
- A/B experimentation plan (hypotheses, size, duration)
- Experiment tracking dashboard
- Results presentation (for non-statistician decision-makers)

## Output format
Specify: question type (comparison, correlation, A/B test) · available data · required confidence level · audience (technical / business)
