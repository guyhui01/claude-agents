# Skill — Data Literacy Program

> Certifications: Data Literacy Certified Educator (Data Literacy Project / Qlik) 2026, CDMP Associate (DAMA), Tableau Desktop Specialist, Google Data Analytics Professional Certificate

## Objective

Design and roll out a 4-level Data Literacy program covering data skills by role, with the matching teaching tools and an internal certification scheme.

## Data Literacy program architecture (4 levels)

### Progression model

```
LEVEL 4 — DATA STORYTELLER          ████████████ Expert
  Create and communicate insights   (Directors, CDO, Heads of)

LEVEL 3 — DATA PRACTITIONER         █████████    Advanced
  Analyze and model                 (Analysts, Data Stewards, POs)

LEVEL 2 — DATA USER                 ██████       Intermediate
  Read and interpret data           (Managers, Project leads)

LEVEL 1 — DATA AWARE                ███          Fundamentals
  Understand the basics             (All employees)
```

### Skill table by level

| Skill | N1 Aware | N2 User | N3 Practitioner | N4 Storyteller |
|-----------|---------|---------|-----------------|----------------|
| Read a simple chart | X | X | X | X |
| Understand mean/median | X | X | X | X |
| Interpret a pivot table | | X | X | X |
| Spot bias in a chart | | X | X | X |
| Build a BI dashboard | | | X | X |
| Run a correlation analysis | | | X | X |
| Do basic SQL | | | X | X |
| Design data storytelling | | | | X |
| Assess data quality | | | X | X |
| Understand basic ML concepts | | | X | X |

## Level 1 — Data Aware (all employees)

### Program (3h — self-paced e-learning)

```
MODULE 1.1 — Data in my work life (45 min)
  Content:
  - What is data? (structured, unstructured)
  - Where does my company's data live?
  - The data value chain (collection → decision)
  Exercise: Mind map "my daily data sources"

MODULE 1.2 — Reading charts without errors (60 min)
  Content:
  - The 6 chart types and their uses
  - Visual traps: truncated axes, distorted proportions
  - Choosing the right chart for your message
  Exercise: "Spot the error" — 10 charts to analyze

MODULE 1.3 — Everyday statistics (45 min)
  Content:
  - Mean, median, mode: when to use which?
  - Correlation ≠ causation (fun examples)
  - Understanding a percentage, a growth rate
  Exercise: "Fake or real?" — 5 stats to debunk

MODULE 1.4 — GDPR and personal data (30 min)
  Content:
  - What is personal data?
  - My rights and duties at work
  - The 5 golden rules (final quiz)
  Validation quiz: 10 questions (threshold: 70%)
```

## Level 2 — Data User (managers and project leads)

### Program (2 days — blended format)

```
DAY 1 — Prep e-learning (3h self-paced)
  + 4h in-person (or synchronous remote)

  In-person morning:
  - Read and challenge a dashboard (Power BI / Tableau)
  - Key questions to ask your analytics team
  - Spot an anomaly in a report

  In-person afternoon:
  - Workshop: "My strategic dashboard" (Power BI guided)
  - Case study: analyze a BU's performance
  - Exercise: frame a precise analytical question

DAY 2 — "Data-driven decision" workshop (4h in-person)
  - From gut feeling to data-backed decision
  - Cognitive biases and data antidotes
  - Simulation: make an investment decision
    with imperfect data
```

## Level 3 — Data Practitioner (analysts, Data Stewards, POs)

### Program (5 days — bootcamp or 6-week track)

```
BLOCK A — Excel/SQL for analysis (2 days)
  Advanced Excel: pivot tables, XLOOKUP, Power Query
  SQL fundamentals: SELECT, JOIN, GROUP BY, window functions
  Capstone exercise: analyze a sales dataset (CSV → insights)

BLOCK B — Visualization & Storytelling (1 day)
  Power BI / Tableau: data model, DAX basics, dashboards
  Dataviz principles (Tufte, Cairo)
  Exercise: turn an Excel table into an executive dashboard

BLOCK C — Data quality & governance (1 day)
  Quality dimensions (DAMA: completeness, accuracy, consistency)
  Data profiling (Python pandas or Great Expectations)
  Data Steward role: case studies

BLOCK D — Introduction to Machine Learning (1 day)
  Understand without coding: classification, regression, clustering
  Business use cases (churn, recommendation, fraud)
  Model evaluation: precision, recall, AUC (no math)
```

## Level 4 — Data Storyteller (directors, CDO, Heads of)

### Program (1.5 days — executive format)

```
MODULE 4.1 — Advanced Data Storytelling (4h)
  Narrative Data: the hero structure applied to insights
  "So what?" test: turn a number into a decision
  Tool: Flourish, Datawrapper for high-impact visualizations

MODULE 4.2 — Challenging your team's analyses (2h)
  10 questions to ask your Data Scientist
  Red flags in a dashboard (dubious correlations, N too small)
  Case study: assess the reliability of a predictive model

MODULE 4.3 — Presenting insights to the exec committee (2h)
  "Pyramid Principle" structure for data recommendations
  Handling objections (data uncertainty, limitations)
  Workshop: pitch an AI use case to the exec committee (simulation)
```

## Internal Data Literacy certification

### Certification scheme structure

```yaml
Internal_Data_Literacy_Certification:
  Levels: [N1_Aware, N2_User, N3_Practitioner, N4_Storyteller]

  Assessments_per_level:
    N1:
      - Online_quiz: "20 questions, 70% required"
      - Duration: "30 min"
    N2:
      - Online_quiz: "30 questions, 75% required"
      - Case_study: "Analyze a dashboard and frame 3 insights"
    N3:
      - Theory_exam: "40 questions, 75% required"
      - Practical_project: "Dashboard + SQL analysis + 10-min presentation"
    N4:
      - Defense: "Present a data recommendation to a panel"
      - Duration: "20 min presentation + 10 min Q&A"

  Digital_badge:
    platform: "Credly"
    validity: "2 years (recertification required)"
    visible_on: "LinkedIn + intranet"

  HR_recognition:
    N2: "Noted in the annual review"
    N3: "€500 training bonus + role progression"
    N4: "Access to the Data Leader program + exec-committee visibility"
```

## Recommended teaching tools by level

| Level | Exercises | BI Tool | Complementary external certification |
|--------|-----------|---------|--------------------------------------|
| N1 | Kahoot, Google Forms | — | Google Data Literacy Badge |
| N2 | Power BI Service | Power BI | Microsoft DP-900 |
| N3 | SQL Fiddle, Mode Analytics | Tableau / PBI | Google Data Analytics (Coursera) |
| N4 | Flourish, Datawrapper | Tableau | Tableau Desktop Specialist |

## Deliverables

- Full 4-level curriculum (lesson sheets, content, exercises)
- Data literacy self-assessment tool (placement questionnaire)
- Personalized learning paths by business role (path map)
- Internal certification scheme (assessments + scoring rubrics)
- Program dashboard (certification rate by level/BU)
- HR communication kit to launch the program

## Output format

Specify: **total target population** (number of employees), **breakdown by role** (operational / managers / directors), **estimated starting level** (1-4), **BI tool in place** (Power BI / Tableau / Looker / other), **available LMS**, **program budget**, **rollout horizon** (6 months / 12 months / 18 months), **HR or CDO sponsor**.

## Sources
- **DAMA International** — *DMBOK 2* (2017) — foundation for data governance and data culture
- **Edward Tufte** — *The Visual Display of Quantitative Information* (1983) — dataviz principles
- **Alberto Cairo** — *The Functional Art* (2012) / *The Truthful Art* (2016)
- **Barbara Minto** — *The Minto Pyramid Principle* (1987) — structuring the data message
- **Qlik / Data Literacy Project** & Gartner — enterprise data-literacy frameworks

## Anti-patterns
- Confusing data literacy (read / interpret / communicate) with mastering a BI tool
- Uniform program, with no differentiation by role and level (1-4)
- Misleading dataviz (truncated axes, overloaded pie charts) — anti-Tufte
- Certifying with no hands-on practice on real business data
- Citing the "Pyramid Principle" without attributing it to Barbara Minto

## See also
- [conception-parcours.md](conception-parcours.md) — structure the 4 levels (Bloom)
- [evaluation-formation.md](evaluation-formation.md) — measure literacy gains
- [`../redacteur_ia/redaction-rapport.md`](../redacteur_ia/redaction-rapport.md) — communicate data (Minto)
- [`../business_analyst/reporting-moa.md`](../business_analyst/reporting-moa.md) — data readouts on the business-analysis side
