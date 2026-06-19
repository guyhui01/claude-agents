# Skill — CV Fraud & Fake Profile Detection
> Certifications: PHR (HRCI) · SHRM-CP (SHRM) · CIPD Level 5 (CIPD)

## Objective
Identify fraudulent CVs, over-optimized or AI-generated professional profiles, and background inconsistencies to protect the recruitment process and the client from risky hires.

## CV fraud typologies

```
TYPE 1 — CLASSIC EMBELLISHMENT
──────────────────────────────────────────────────────
· Inflated job titles ("Lead" instead of "junior dev")
· Stretched assignment dates to mask gaps
· Real companies but a fictional or exaggerated role
· Partial degrees presented as completed

TYPE 2 — AI-GENERATED / AI-REWRITTEN CV
──────────────────────────────────────────────────────
· Uniform, flawless style with no human rough edges
· Bullet points tuned to ATS keywords (keyword stuffing)
· No concrete details (project names, volumes, teams)
· Vague metrics: "X% improvement" with no context
· Detectable: GPTZero, Originality.ai, Copyleaks

TYPE 3 — FAKE LINKEDIN PROFILES
──────────────────────────────────────────────────────
· AI-generated profile photo (too-perfect face, uniform background blur)
· Network < 50 connections with 5 years of seniority
· Generic recommendations with no operational detail
· All connections recent or concentrated in one period
· No activity (likes, posts, comments) despite seniority

TYPE 4 — FAKE GITHUB / STACK OVERFLOW PROFILES
──────────────────────────────────────────────────────
· Commits clustered over 2-3 weeks (simulated activity)
· Code perfectly commented in English by an LLM
· Repos with no issues, no forks, no collaborators
· Contributions graph "too regular" or empty then suddenly dense
· No answers to complex community issues
```

## CV analysis grid — Warning signals

| Signal | Risk level | Action |
|---|---|---|
| Unexplained employment gaps > 6 months | Medium | Ask in the interview |
| Job title ≠ level of responsibilities described | High | Check manager reference |
| Unknown or unverifiable schools (outside grandes écoles) | High | Check on RNCP / school site |
| Repeated very short assignments (< 3 months) | Medium | Freelance context? Verify |
| High-density ATS keywords, little context | High | Mandatory technical test |
| ChatGPT style (tuned sentences, zero typos) | Medium | Compare with a handwritten letter |
| Metrics without context ("30% improvement") | Medium | Ask for detail in the interview |
| Companies with no verifiable web presence | Very high | SIREN / LinkedIn check |

## CV verification protocol — 3 levels

```
LEVEL 1 — QUICK CHECK (5 min, all candidates)
──────────────────────────────────────────────────────
□ Date consistency (no overlaps, gaps explained)
□ Verifiable companies (LinkedIn / Societe.com / SIREN)
□ Degree verifiable on the school site or RNCP
□ AI scan: GPTZero or Originality.ai (if AI-style suspicion)

LEVEL 2 — IN-DEPTH CHECK (shortlist)
──────────────────────────────────────────────────────
□ Direct manager reference call (see verification-references skill)
□ LinkedIn check: profile age, network, activity
□ GitHub / Portfolio: commit analysis, code quality, creation date
□ Cross-check CV ↔ LinkedIn ↔ interview (inconsistencies between versions)

LEVEL 3 — FORMAL CHECK (offer accepted)
──────────────────────────────────────────────────────
□ Full background check (see verification-references-background-check skill)
□ Degree verification with the institution
□ Identity verification (Veriff or Persona if high stakes)
```

## AI-detection tools for documents

| Tool | Use | Price |
|---|---|---|
| **GPTZero** | LLM-generated text detection | Free (limited) / subscription |
| **Originality.ai** | CVs + cover letters | subscription / usage-based |
| **Copyleaks** | Plagiarism + AI detection | subscription |
| **Winston AI** | Multilingual AI detection (FR/EN) | subscription |
| **HireEZ Signal** | LinkedIn + GitHub profile analysis | Custom quote |

> ⚠️ **Limited reliability**: AI text detectors produce **high false positives** (a polished CV
> or one written by a non-native speaker can be wrongly flagged). **Never reject a candidate on a
> detector's score alone** — it's a signal to corroborate, not proof. Indicative subscription
> pricing, to verify with each vendor.

## LinkedIn profile analysis — Checklist

```
AUTHENTIC PROFILE — positive signals
──────────────────────────────────────────────────────
✓ Real photo (natural background, spontaneous expression)
✓ Named recommendations with operational details
✓ Regular activity (posts, comments, shares)
✓ Network consistent with the sector and seniority
✓ CV ↔ LinkedIn consistency on titles, dates, companies
✓ Interactions with former colleagues on the profile

SUSPICIOUS PROFILE — warning signals
──────────────────────────────────────────────────────
⚠ Too-perfect photo (test: facecheck.id or Google Image)
⚠ Profile created < 6 months ago with 10+ years of claimed experience
⚠ All recommendations in the same month (campaign?)
⚠ Job descriptions copy-pasted from job postings
⚠ No reaction / comment over 2 years of declared activity
```

## Deliverables
- CV analysis report with a reliability score (Low / Medium / High)
- Per-candidate warning-signal sheet for the client
- Recommendation: Go / Conditional Go (further verification) / No-Go fraud
- Completed verification checklist (level 1-2-3 per stakes)

## Output format
Specify: candidate's CV (text or PDF), associated LinkedIn profile, target role, role criticality level (sensitive data access? management? etc.).

## ⚖️ Compliance
- **Presumption of good faith** of the candidate (French Labor Code **L1221-6**): a warning signal calls for verification, not an accusation.
- Consulting **professional social networks** related to the role = allowed; **personal** networks with no link and no disclosure = excluded (CNIL, GDPR).
- Any check must be **proportionate** to the role and **disclosed** to the candidate (L1221-8/9).
- No fraud "inferred" from an accent, a name, or an origin (**L1132-1**).

## Anti-patterns
- ❌ Reject a candidate on an AI detector's score alone (high false positives).
- ❌ Treat a warning signal as proof of fraud without a contradictory check.
- ❌ Dig into private life / personal networks unrelated to the role and without disclosure.
- ❌ Associate fraud suspicion with an origin or a name's sound (L1132-1).
- ❌ Fail to document the signals and the decision → non-auditable process.

## Sources
- French Labor Code — L1221-6 (good faith), L1221-8/9 (prior disclosure), L1132-1 (non-discrimination) — legifrance.gouv.fr
- CNIL — Recruitment guide (social media, proportionality) — cnil.fr/fr/le-guide-du-recrutement
- Limits of AI text detectors — literature on false positives (OpenAI withdrew its own detector in 2023)
- RNCP / France Compétences — certification verification — francecompetences.fr

## See also
- `skills/rh_ia/verification-references-background-check.md` — formal background verification
- `skills/rh_ia/detection-deepfake-entretien.md` — remote-interview fraud
- `skills/rh_ia/cv-parsing-ats-scoring.md` — keyword stuffing and ATS scoring
- `skills/juridique_ia/` — GDPR framework and non-discrimination
