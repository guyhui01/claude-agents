# Skill — A/B Testing & Multivariate Tests
> Certifications: IDF · Google UX Design Certificate

## Objective
Compare two versions of an interface to determine which performs better on a target metric.

## Test types
- **A/B test**: 2 versions, 1 variable changed
- **A/B/n test**: n versions simultaneously
- **Multivariate test**: several combined variables (requires high traffic)
- **Split URL**: 2 distinct pages compared

## Steps
1. Define the hypothesis (if I change X, then Y will increase by Z%)
2. Choose the primary metric (CTR, conversion, time on task)
3. Calculate the sample size (significance 95%, power 80%)
4. Run the test (min duration: 2 weeks / 1 business cycle)
5. Analyze the results (p-value, confidence interval)
6. Decide: ship A, ship B, or re-run

## Tools
VWO · Optimizely · AB Tasty · Statsig · GrowthBook (open-source) — *Google Optimize shut down on 2023-09-30*

## Deliverables
- Test brief (hypothesis, variants, metrics, duration)
- Results report (statistics + recommendation)

## Output format
Specify: element to test · target metric · available monthly traffic · tool used

## Sources
- **Ron Kohavi, Diane Tang & Ya Xu** — *Trustworthy Online Controlled Experiments* (Cambridge University Press, 2020) — reference on online experimentation
- **Jacob Cohen** — *Statistical Power Analysis for the Behavioral Sciences* (2nd ed., 1988) — origin of the 80% statistical power (conventional threshold)
- **Ronald A. Fisher** — *The Design of Experiments* (1935) — p < 0.05 significance threshold
- Product documentation: Optimizely Stats Engine, VWO SmartStats (sequential inference vs fixed test)

## Anti-patterns
- **Peeking**: stopping the test as soon as a result "wins" before the calculated sample size → false positives
- Running a multivariate test without enough traffic (the combinatorics dilute the power)
- Concluding on a proxy metric (CTR) without checking the business metric (conversion, retention)
- Ignoring seasonality: test < 1 full business cycle (weekdays vs weekend)
- **HARKing**: forming the hypothesis *after* seeing the data

## See also
- [metriques-ux.md](metriques-ux.md) — define the target metric and its baseline
- [tests-utilisateurs.md](tests-utilisateurs.md) — qualitative complement to the quantitative A/B
- [audit-ux-heuristiques.md](audit-ux-heuristiques.md) — generate the hypotheses to test
- [`../growth_ia/experimentation-ab-testing.md`](../growth_ia/experimentation-ab-testing.md) — experimentation on the acquisition/activation side
