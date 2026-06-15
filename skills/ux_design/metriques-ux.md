# Skill — UX Metrics (SUS, HEART, NPS, CUQ)
> Certifications: NN/g UX-C · UXQB CPUX-UT

## Objective
Measure and track the quality of the user experience quantitatively.

## Metrics frameworks

### SUS — System Usability Scale (Brooke, 1986/1996)
- 10 questions, Likert scale 1-5
- Score /100: ≈ 68 = reference average · > 80 = very good (thresholds per Sauro & Bangor)
- Used in post-test with users

### HEART (Google — Rodden et al., 2010)
| Dimension | Example metric |
|---|---|
| Happiness | SUS, NPS, satisfaction rating |
| Engagement | Sessions/day, features used |
| Adoption | New users, activation |
| Retention | Return rate at D7, D30 |
| Task Success | Completion rate, time on task |

### NPS — Net Promoter Score (Reichheld, 2003)
- "Would you recommend this product?" (0-10)
- NPS = % Promoters (9-10) − % Detractors (0-6)
- > 50 often called "excellent" — *order of magnitude, to be strongly qualified by sector and geography*

### CUQ — Chatbot Usability Questionnaire (Holmes et al., 2019)
- Specific to AI conversational interfaces
- 16 items covering naturalness, efficiency, satisfaction

## Deliverables
- Metrics dashboard (Notion / Confluence)
- Configured SUS or HEART questionnaire
- Trend report (baseline → measurement → change)

## Output format
Specify: product type · project phase · metrics already collected

## Sources
- **John Brooke** — *SUS: A "quick and dirty" usability scale* (created 1986, published 1996)
- **Jeff Sauro & James R. Lewis** — *Quantifying the User Experience* (2nd ed. 2016) — SUS thresholds and normalization
- **Kerry Rodden, Hilary Hutchinson & Xin Fu (Google)** — *Measuring the User Experience on a Large Scale: HEART* (CHI 2010)
- **Fred Reichheld** — *The One Number You Need to Grow* (HBR, 2003) — Net Promoter Score
- **Samuel Holmes et al.** — *Usability testing of a healthcare chatbot: CUQ* (British HCI, 2019)

## Anti-patterns
- Tracking a metric without a baseline or goal → an uninterpretable number
- Confusing stated satisfaction (NPS/SUS) with real behavior (task success, retention)
- Comparing an NPS across sectors/countries without accounting for cultural bias
- Measuring SUS on < 5 participants and drawing a firm conclusion
- "Vanity metrics": tracking the number of sessions without linking it to user value

## See also
- [tests-utilisateurs.md](tests-utilisateurs.md) — collecting SUS in a post-test
- [ab-testing.md](ab-testing.md) — metrics compared between variants
- [audit-ux-heuristiques.md](audit-ux-heuristiques.md) — complementary qualitative diagnosis
- [`../growth_ia/product-analytics.md`](../growth_ia/product-analytics.md) — product metrics (engagement, retention) on the growth side
