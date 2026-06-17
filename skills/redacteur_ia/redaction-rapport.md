# Skill — Professional Report Writing
> Certifications: HubSpot Content Marketing · Google Digital Garage · CQFD Written Communication

## Objective
Write clear, structured, actionable professional reports for internal or external audiences — project reports, audit reports, activity reports.

## Universal structure of a professional report

### 7-part architecture
```
1. COVER PAGE
   → Title, author, date, version, recipients, classification

2. EXECUTIVE SUMMARY (1 page max)
   → Context (2 sentences) → Main findings → Key recommendations
   → Readable on its own, without the rest of the report

3. TABLE OF CONTENTS
   → Navigable, with page numbers, max 3 levels deep

4. INTRODUCTION
   → Context and stakes → Scope and limits → Methodology used

5. BODY (main report)
   → Objective findings (facts > opinions)
   → Analyses and interpretations
   → Evidence (data, tables, verbatims)

6. CONCLUSIONS & RECOMMENDATIONS
   → Summary of major findings
   → Prioritized recommendations (Impact / Effort)
   → Action plan with owners and deadlines

7. APPENDICES
   → Raw data, detailed methodology, glossary, bibliography
```

## Executive summary — template
```markdown
## Executive summary

**Context**: [Problem or question behind the report — 2 sentences max]

**Main findings**:
1. [Finding 1 — factual, quantified if possible]
2. [Finding 2]
3. [Finding 3]

**Recommendations**:
- [Priority action 1] → Owner: [Name] | Deadline: [Date]
- [Priority action 2] → Owner: [Name] | Deadline: [Date]

**Expected impact**: [Measurable business benefit]
```

## Writing findings — the STAR method
```
SITUATION  → Factual context (what exists, what was observed)
TASK/TEST  → What was analyzed or tested
ACTION     → What was done / what happens
RESULT     → What follows (with quantified data)

Example (audit report):
  SITUATION  : The customer-data validation process involves 3 teams
  TASK       : Analysis of processing times over 6 months (Jan-Jun 2026)
  ACTION     : The average validation time is 4.3 days
  RESULT     : 12% of cases exceed the contractual 3-day SLA,
               generating 47 customer complaints over the period
```

## Register by recipient
| Audience | Style | Jargon | Length |
|---|---|---|---|
| Exec committee / Management | Assertive, concise | Minimal | 1-3 pages + appendices |
| Business team | Accessible, practical | Domain-fluent | 5-10 pages |
| Technical expert | Precise, dense | Full technical | Unlimited |
| External client | Clear, flattering | Zero internal jargon | 3-7 pages |

## Professional formatting

### Readability rules
```
Paragraphs : 5-7 lines max
Sentences  : 25 words max (clarity)
Headings   : Informative, not generic
             ❌ "Data analysis"
             ✅ "The data reveals a 23% gap in lead times"
Lists      : Always at least 3 items, never more than 7
Data       : In a table or chart, never in a dense paragraph
```

### Recommended charts by data type
```
Change over time        → Line chart
Category comparison     → Horizontal bars (bar chart)
Composition / share     → Pie if ≤ 5 categories (pie chart)
Correlation             → Scatter plot
Progress                → Gauge or progress bar
Geographic map          → Choropleth for geographic distribution
```

## Proofreading — quality checklist
```
CONTENT:
  ☐ Every finding is backed by evidence (data, sources)
  ☐ Recommendations follow logically from the findings
  ☐ No unsupported personal opinion
  ☐ The stated scope is respected

FORM:
  ☐ Executive summary readable on its own
  ☐ No spelling or grammar mistakes
  ☐ Every acronym is spelled out on first use
  ☐ Page, figure, and table numbering
  ☐ Sources and dates of cited data

IMPACT:
  ☐ The reader understands what to do after reading
  ☐ Recommendations are realistic and quantified where possible
  ☐ Deadlines and owners identified for each action
```

## Deliverables
- Complete report (Word / PDF) with table of contents
- Standalone executive summary (1 page)
- Source data file (Excel / CSV) in appendix
- "Lightweight" mobile version (if needed)

## Output format
Specify: report type (audit, activity, project, incident) · main audience · scope · available data · target length · deadline

## Anti-patterns
- ❌ **An executive summary that isn't one** — a summary that requires reading the report to be understood → decision-makers lost. It must be self-standing (Minto principle).
- ❌ **Findings drowned in opinions** — mixing facts and unsupported interpretations → loss of credibility, contestable conclusions.
- ❌ **Unprioritized recommendations** — piling up actions with no Impact/Effort or owner/deadline → non-actionable report.
- ❌ **Data in a dense paragraph** — numbers buried in text instead of a table/chart → unreadable (cf. Tufte).
- ❌ **Wrong chart choice** — a 12-slice pie, truncated axes → distorted message. Choose the type to fit the data.

## Sources
- **Barbara Minto** — *The Minto Pyramid Principle* (Pearson, 1987) — "answer first" structure, SCQA, MECE grouping
- **Edward Tufte** — *The Visual Display of Quantitative Information* (Graphics Press, 1983; 2nd ed. 2001) — chart choice and integrity
- **Joseph Williams** — *Style: Lessons in Clarity and Grace* (1981) — writing clarity, sentence length
- **STAR method** — from behavioral interviewing (US Army / behavioral interviewing, ~1970s) — adapted here to writing factual findings

## See also
- [synthese-executive.md](synthese-executive.md) — self-standing executive summary (Minto pyramid)
- [compte-rendu-pro.md](compte-rendu-pro.md) — meeting decision log
- [note-cadrage.md](note-cadrage.md) — upstream founding document
- [`../ux_design/storytelling-stakeholders.md`](../ux_design/storytelling-stakeholders.md) — storytelling with data (Tufte)
