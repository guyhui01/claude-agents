# Skill — People Analytics & HR KPIs
> Certifications: PHR (HRCI) · SHRM-CP (SHRM) · CIPD Level 5 (CIPD)

## Objective
Build data-driven HR dashboards to steer IT/AI recruitment, measure HR performance, and produce actionable executive-committee reports.

## Recruitment KPIs — Framework

> ⚠️ **Indicative orders of magnitude, to validate on your scope.** The values below
> are **not sourced market benchmarks**: they serve as scoping reference points to
> recalibrate. For quantified references, rely on dated benchmarks (e.g. SHRM Recruiting
> Benchmarking — US data; APEC / Numeum for France) and **measure your own baseline**.

```
RECRUITMENT EFFICIENCY
──────────────────────────────────────────────────────
Time to Fill        : # days between role opening and offer signature
                      Indicative order of magnitude: ~45-60 days (senior longer) — to validate
Time to Hire        : # days between first candidate contact and accepted offer
                      Indicative order of magnitude: ~20-30 days — to validate
Cost per Hire       : (Internal + external costs) / # hires
                      Fully loaded cost per hire — measure your own baseline
Offer Acceptance    : % offers accepted / offers issued
                      Common internal target: > 85% (set per context)

RECRUITMENT QUALITY
──────────────────────────────────────────────────────
Quality of Hire     : Manager rating at 3 + 6 months (onboarding assessment)
                      Target score: ≥ 4/5
12-month Retention  : % of hires still present at 12 months
                      IT target: > 80%
Hiring Manager Sat. : Manager satisfaction score on the hired profile
                      Target: ≥ 4/5

SOURCING
──────────────────────────────────────────────────────
Source of Hire      : % candidates per channel (LinkedIn / referral / job board)
Pipeline conversion : Applications → shortlist → interview → offer → hire
InMail Response Rate: % replies to LinkedIn InMails
                      Order of magnitude: personalized messages clearly > generic
                      (measure your own rate; don't freeze a market figure)
```

## IT recruitment dashboard — Template

```
RECRUITMENT DASHBOARD — [Month] [Year]
──────────────────────────────────────────────────────────────────
CURRENT PIPELINE
Open roles            : [N]
Candidates in process : [N]   (Sourcing: N · Qualif: N · Interviews: N · Offer: N)
Offers issued         : [N]   Accepted: [N] ([%])

MONTH PERFORMANCE
Avg Time to Fill      : [N] days  (vs target: 60d)    [▲/▼ vs prev month]
Avg Time to Hire      : [N] days  (vs target: 25d)    [▲/▼ vs prev month]
Avg Cost per Hire     : [N] €     (vs budget: X €)     [▲/▼ vs prev month]
Quality of Hire (3m)  : [N]/5     (target: ≥ 4/5)      [▲/▼ vs prev month]

SOURCE OF HIRE
LinkedIn Recruiter    : [N] %
Referral              : [N] %
Job boards (WTTJ etc) : [N] %
Direct approach       : [N] %

ACTIONS REQUIRED
⚠ [Role X] : Time to Fill > 75d → revisit brief or widen sourcing
⚠ [Role Y] : 0 qualified candidate → adjust criteria with manager
```

## Workforce & Retention KPIs

```
TURNOVER & RETENTION
──────────────────────────────────────────────────────
Overall turnover     : (Departures / Average headcount) × 100
                       Indicative order of magnitude (to validate) — varies widely by sector/area
Voluntary turnover   : Employee-initiated departures
Involuntary turnover : Layoffs, end of assignments
Early Attrition      : % departures < 12 months (strong signal of a bad hire)
                       Target: < 10%

ABSENTEEISM
──────────────────────────────────────────────────────
Absenteeism rate     : (Days absent / Theoretical days) × 100
                       Compare to your own history and dated sector sources

ENGAGEMENT
──────────────────────────────────────────────────────
eNPS (Employee NPS)  : "Would you recommend this company?" (0-10)
                       Score > 30 = good · > 50 = excellent
Pulse satisfaction   : Short monthly survey (3-5 questions, tool: Officevibe)
```

## HR executive-committee report — Monthly template

```markdown
# HR Report — [Month YYYY]
## Executive summary (3 lines)
[Key KPI: N hires finalized / N open roles / avg time to fill]

## IT/AI recruitment
| Role | Opened | Status | Current TTH | Risk |
|---|---|---|---|---|
| Lead ML Engineer | D-45 | Interviews (3) | 45d | Low |
| Senior AI PO | D-62 | Sourcing | 62d | ⚠ High |

## Key indicators
| KPI | Month | Target | Trend |
|---|---|---|---|
| Time to Fill | 52d | 60d | ✅ |
| Offer Acceptance | 78% | 85% | ⚠ |
| Quality of Hire | 4.1/5 | 4.0/5 | ✅ |
| Turnover 12m | 18% | <20% | ✅ |

## Watch points & decisions required
- [Action 1: description + owner + deadline]
- [Action 2]

## Next-month forecast
[Roles to open, estimated budget, anticipated risks]
```

## Deliverables
- Monthly recruitment dashboard (Excel, Notion, or Power BI)
- HR executive-committee report (1-2 pages)
- Source-of-hire analysis with sourcing-budget reallocation recommendations
- Recruitment quality report (Quality of Hire at 3 and 6 months)

## Output format
Specify: recruitment volume, available HR tools (ATS, HRIS), scope (whole company or IT team), period analyzed, reporting audience (CHRO, executive committee, managers).

## Anti-patterns
- ❌ Show a quantified "France benchmark" without a dated source or a baseline measured on the scope.
- ❌ Compare KPIs without normalizing the scope (seniority, area, role type) → misleading comparisons.
- ❌ Process personal HR data without a legal basis, minimization, or retention period (GDPR).
- ❌ Steer on a single KPI (e.g. Time to Fill) at the expense of quality (Quality of Hire, retention).
- ❌ Predictive people analytics (turnover) without transparency or human oversight (bias/discrimination risk).

## Sources
- SHRM — Recruiting Benchmarking Report (US data, methodological reference) — shrm.org
- APEC / Numeum (Syntec Numérique) — France IT employment data — apec.fr · numeum.fr
- DAMA-DMBOK 2 (2017) — HR data governance and quality
- GDPR EU 2016/679 — art. 5 (minimization), art. 22 (automated decision) — cnil.fr
- eNPS — standard scale interpretation (Reichheld, *The Ultimate Question*, 2006)

## See also
- `skills/rh_ia/recrutement-sourcing-it.md` — pipeline and sourcing (source of hire)
- `skills/rh_ia/transformation-rh-ia.md` — recruitment automation and ROI
- `skills/rh_ia/benchmark-remuneration-it.md` — compensation reference points
- `skills/juridique_ia/` — GDPR compliance for HR data processing
