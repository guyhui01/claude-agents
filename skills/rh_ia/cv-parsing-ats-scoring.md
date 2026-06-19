# Skill — CV Parsing & ATS Scoring
> Certifications: SHRM-CP (SHRM) · PHR (HRCI) · ATD CPTD (ATD)

## Objective
Understand and optimize how ATS parse, score, and rank CVs — both on the recruiter side (criteria configuration) and the candidate side (CV optimization) — to maximize matching quality and avoid false positives/negatives.

## ⚖️ Compliance — ATS scoring = HIGH-RISK system

> Automated scoring/filtering of applications is **explicitly classified high-risk**
> by the **AI Act (EU Regulation 2024/1689, art. 6 §2 + Annex III pt 4 "Employment")**.
> Deployer obligations apply from **2 August 2026**.

- **Transparency**: inform the candidate that an automated tool is used (GDPR art. 22 + French Labor Code **L1221-8**: prior disclosure of recruitment methods/techniques, results kept confidential).
- **Human oversight**: no purely automated rejection decision — a recruiter validates (human-in-the-loop); candidate's right to human intervention (GDPR art. 22).
- **Non-discrimination**: audit criteria and rejections for indirect bias (French Labor Code **L1132-1**); document it.
- **Minimization & direct relevance**: only score criteria with a **direct and necessary link** to the role (French Labor Code **L1221-6**).
- **CNIL**: follow the Recruitment guide (candidate disclosure, DPIA if high-risk processing).

## How ATS parsing works

```
CV PROCESSING PIPELINE IN AN ATS
──────────────────────────────────────────────────────
STEP 1 — PARSING (data extraction)
  · Structured extraction: name, contact, dates, companies,
    job titles, skills, degrees, languages
  · Common engines: Textkernel, Sovren/Affinda, RChilli
  · Limits: graphical PDF (columns, tables) poorly parsed
            Infographics = lost data
            Non-standard fonts = corrupted characters

STEP 2 — NORMALIZATION
  · "Sw. dev." → "Software Developer" (stemming)
  · "LLM" → linked to "Large Language Model", "generative AI"
  · Dates normalized: "since 2022" → 2022-present
  · Job titles mapped to a standard taxonomy

STEP 3 — SCORING / MATCHING
  · Comparison with the job criteria (keywords, level, experience)
  · Score of 0-100% per each ATS's own algorithm
  · Possible weighting: "must have" vs "nice to have" criteria
  · Some ATS use ML models (Eightfold, Beamery)

STEP 4 — RANKING
  · Automatic sort by descending score
  · Exclusion filters (e.g. location, experience level)
  · Result: automatic shortlist visible to the recruiter
```

## Scoring criteria — What the ATS evaluates

> ⚠️ **Configurable weights, example configuration** — each ATS and each job sets its own
> weightings. The values below are an **illustrative starting point**, not a market standard.
> Make sure each criterion has a direct link to the role (L1221-6).

| ATS criterion | Example weight | Optimization |
|---|---|---|
| Technical keywords (stack) | 30-40% | Use the exact terms from the posting |
| Job title | 20-25% | Align with the target title |
| Years of experience | 15-20% | State durations clearly |
| Degree / education level | 10-15% | Official spelling of the school |
| Location | 5-10% | Precise city or "Remote" mention |
| Certifications | 5-10% | Exact certification name |

## ATS-compatible CV formats

```
RECOMMENDED FORMATS (optimal parsing)
──────────────────────────────────────────────────────
✓ Native-text PDF (generated from Word/Google Docs → Save as PDF)
✓ DOCX / DOC (Microsoft Word)
✓ Linear structure: single column, no tables
✓ Standard fonts: Arial, Calibri, Times New Roman, Helvetica
✓ Clearly named sections: "Experience", "Skills", "Education"
✓ Consistent date format: MM/YYYY or YYYY

FORMATS TO AVOID
──────────────────────────────────────────────────────
✗ Image PDF (scan) → text not readable by ATS
✗ Multi-column CVs or complex tables → erratic parsing
✗ Infographics / icons for skills → lost data
✗ Headers / footers for key information → often ignored
✗ Decorative fonts, embedded logos
✗ JPEG, PNG, PowerPoint files
```

## CV optimization for ATS — Recruiter checklist

```
RECRUITER-SIDE CONFIGURATION (ATS setup)
──────────────────────────────────────────────────────
□ Define "must have" keywords (knockout) separately
  from "nice to have" (bonus)
□ Avoid overly restrictive criteria (e.g. "5 years on X"
  for a tech only 3 years old)
□ Plan for synonyms: "React" / "ReactJS" / "React.js"
□ Weight sector experience vs pure skill
□ Test scoring on 5 "model" CVs before activation
□ Review exclusion thresholds (indirect-discrimination risk)
□ Monthly audit of automatically rejected CVs (ATS bias)

CANDIDATE-SIDE OPTIMIZATION (advice to sourced candidates)
──────────────────────────────────────────────────────
□ Reuse the exact keywords from the posting in the CV
□ Dedicated, readable "Technical skills" section (no icons)
□ CV title = target job title or close to it
□ Each role: exact title + dates + company + 3-5 bullets
□ Certifications: full name + issuing body + year
□ Save as native-text PDF (no scan)
```

## ATS diagnostics — Parsing rate by popular ATS

| ATS | FR parsing | AI score | Weaknesses |
|---|---|---|---|
| **Greenhouse** | ★★★★☆ | Basic | Complex CVs poorly parsed |
| **Lever** | ★★★★☆ | Medium | Non-standard job titles |
| **SmartRecruiters** | ★★★★★ | Advanced | Configuration takes time |
| **Workable** | ★★★☆☆ | Basic | Limits on graphical PDFs |
| **Eightfold AI** | ★★★★★ | Advanced ML | High cost |
| **Recruitee** | ★★★☆☆ | Basic | Not well-suited to highly specialized tech profiles |
| **Talentsoft (CSOD)** | ★★★☆☆ | Medium | Legacy ATS, dated parsing |

## ATS testing tools

| Tool | Use | Price |
|---|---|---|
| **Jobscan** | Scan a CV vs a posting, simulated ATS score | monthly subscription |
| **Resume Worded** | CV analysis + ATS score + recommendations | monthly subscription |
| **SkillSyncer** | CV ↔ posting matching (missing keywords) | Free (limited) + paid |
| **Rezi.ai** | AI-optimized ATS CV writing | monthly subscription |
| **EnhanCV** | ATS compatibility analysis + score | monthly subscription |

> Indicative subscription pricing (order of magnitude ~$15-30/month) — verify on each vendor's site.

## Detecting CVs over-optimized for ATS (keyword-stuffing fraud)

```
SIGNALS OF A KEYWORD-STUFFED CV
──────────────────────────────────────────────────────
· "Skills" section with 30+ technologies listed without context
· Keywords in white font on white background (old-school trick)
· Repetition of the posting's keywords in every bullet without nuance
· Very generic experience: "Worked on Python, SQL, AWS, Docker..."
  with no concrete project or measurable result
· High ATS score (90%) but very weak interview

ACTION: Always complement the ATS score with a technical test
        before validating a profile into the shortlist
```

## Recommended ATS workflow — IT/AI recruitment

```
D0   → Role opening: enter ATS criteria (must have / nice to have)
D1-5 → Incoming applications: automatic parsing, ATS scoring
D5   → Human review: validate/reject top 20% of the scoring
D6-8 → HR qualification: 15-min call (grid: see recrutement-sourcing-it)
D8+  → Shortlist 3-5 profiles: technical interview + scorecard
→ ATS feedback: adjust criteria if the shortlist is insufficient or low-quality
```

## Deliverables
- Audit of the client's current ATS configuration (scoring, filters, keywords)
- Recommendations to optimize matching criteria
- Candidate guide: 1-page "How to optimize your CV for our ATS"
- Monthly report: ATS false positive/negative rates detected

## Output format
Specify: ATS used (or to select), monthly application volume, main tech profiles recruited, problem identified (too many CVs rejected / too many irrelevant CVs passing / inconsistent scoring).

## Anti-patterns
- ❌ Automatic rejection of applications without human review (forbidden for a high-risk system + GDPR art. 22).
- ❌ Scoring criteria with no direct link to the role (L1221-6) or potentially discriminatory (L1132-1).
- ❌ Failing to inform the candidate that an automated tool is used (L1221-8, AI Act transparency).
- ❌ Never auditing rejected CVs → invisible ATS biases that accumulate.
- ❌ Presenting criterion weights as a fixed, quantified market standard.

## Sources
- EU Regulation 2024/1689 (AI Act) — art. 6 §2 + Annex III pt 4 (employment, high-risk) — artificialintelligenceact.eu
- GDPR EU 2016/679 — art. 22 (automated decision) — cnil.fr
- French Labor Code — L1132-1 (non-discrimination), L1221-6 (direct link/good faith), L1221-8 (prior disclosure) — legifrance.gouv.fr
- CNIL — Recruitment guide (candidate disclosure, DPIA) — cnil.fr/fr/le-guide-du-recrutement

## See also
- `skills/rh_ia/detection-fraude-cv-profils.md` — detecting keyword stuffing / AI-generated CVs
- `skills/rh_ia/recrutement-sourcing-it.md` — human qualification after scoring
- `skills/rh_ia/transformation-rh-ia.md` — ethics framework and AI ATS compliance
- `skills/juridique_ia/` — AI Act / GDPR / non-discrimination compliance
