# Skill — DPIA (Impact Assessment) for AI Systems

> Certifications: CIPP/E · CIPM · Certified DPO CNIL · ISO/IEC 27701 Lead Implementer
> Agent: AGENT-JURIDIQUE-IA.md
> Frameworks: **GDPR EU 2016/679 art. 35** · **EDPB/WP29 WP248 rev.01** (9 criteria) · **CNIL** decision no. 2018-327 (Oct. 11, 2018, DPIA list) · **AI Act 2024/1689** coupling (art. 6 + Annex III)

## Objective

Carry out the **data protection impact assessments (DPIA)** required for AI systems likely to result in a high risk to the rights and freedoms of individuals (GDPR art. 35).

## Frameworks mobilized

| Framework | Contribution |
|---|---|
| **GDPR art. 35** | DPIA obligation if "high risk"; minimum content (art. 35.7) |
| **EDPB/WP29 WP248 rev.01** | **9 criteria**; DPIA generally required if **≥ 2 criteria** met |
| **CNIL decision 2018-327** (Oct. 11, 2018) | List of **14 types** of processing requiring a DPIA (non-exhaustive list) |
| **AI Act art. 6 + Annex III** | High-risk AI systems almost systematically trigger a DPIA |

## When is a DPIA mandatory?

```
Basis: GDPR art. 35 + 9 EDPB criteria (WP248 rev.01) — DPIA required if ≥ 2 criteria:

  1. Evaluation / scoring (including profiling)
  2. Automated decision with legal / significant effect (art. 22)
  3. Systematic monitoring
  4. Sensitive data (art. 9) or highly personal data
  5. Data processed at large scale
  6. Matching / combining datasets
  7. Data of vulnerable individuals (minors, patients, employees)
  8. Innovative use / new technology (← AI typically falls under this)
  9. Processing that prevents a right / a contract

+ CNIL decision 2018-327: 14 types of processing for which a DPIA is
  mandatory in France (e.g. large-scale profiling, HR monitoring
  processing, etc.).
```
> **AI = almost always ≥ 2 criteria** (innovative use #8 + often scoring #1 or large scale #5). The DPIA must be carried out **before** the processing and is an **iterative** process.

## Structure of an AI DPIA (GDPR art. 35.7 content)

### Section 1 — Processing description
```
1.1 Context and objectives: purpose(s), functional/geographic scope, stakeholders
1.2 Data: categories, sensitivity (art. 9/10), source, volume, frequency
1.3 Flows: collection → processing → storage → deletion; transfers outside the EU (mechanism)
1.4 AI specifics: model type, training data, decisions (automated/assisted),
    identified biases + mitigation
```

### Section 2 — Necessity and proportionality (art. 35.7.b)
```
2.1 Legal basis (art. 6) + justification (balancing test if legitimate interest)
2.2 Proportionality: legitimate purpose? necessary? less intrusive alternatives?
2.3 Individuals' rights: information, access, objection/withdrawal, portability (deadlines art. 12.3)
```

### Section 3 — Risks (Probability × Impact rating, 1-4 scale)
```
R1 Discrimination / bias            → bias audit, fairness tests, human oversight
R2 Personal data leak               → encryption, restricted access, DLP
R3 Impactful erroneous decision     → right of recourse, human review, confidence threshold
R4 Opacity / lack of explainability → XAI (SHAP/LIME), explanation art. 22 / AI Act art. 86
R5 Re-identification (pseudonymized) → k-anonymity, differential privacy
```

### Section 4 — Measures and conclusion
```
Action plan: | Risk | Measure | Owner | Deadline | Status |
DPO opinion: Favorable / Favorable with reservations / Unfavorable
Prior CNIL consultation (art. 36) if uncontrolled high residual risk.
Review: the CNIL recommends a reassessment at least every 3 years, or on any
significant change to the processing.
```

## Example — partial DPIA of automated CV screening (HR, AI Act high-risk)

| Element | Value |
|---|---|
| Processing | Automated pre-screening of applications (CV scoring) |
| EDPB criteria met | #1 scoring · #2 automated decision · #7 (candidates) · #8 AI → **4 criteria ⇒ mandatory DPIA** |
| Legal basis | Legitimate interest (art. 6.1.f) + documented balancing test |
| AI Act | Annex III §4 (employment) → **high-risk** ⇒ human oversight art. 14 |
| Risk R1 (bias) | P=3 / I=4 → **12** → mitigation: fairness test by sex/age/origin, never a 100% automated rejection (art. 22) |
| DPO opinion | Favorable with reservations (deployment after bias test + candidate notice art. 13) |

## Anti-patterns

- ❌ **DPIA carried out after deployment**: it must precede the processing (art. 35)
- ❌ **"Only 1 criterion so no DPIA"**: a single criterion can suffice in case of high risk; and AI often stacks ≥ 2
- ❌ **Action plan with no owner or deadline**: the DPIA becomes a dead document
- ❌ **Forgetting the CNIL consultation (art. 36)** when the residual risk remains high
- ❌ **Confusing DPIA (data) and ethics EIA / AI Act assessment**: three distinct, complementary objects
- ❌ **Re-identification not addressed**: pseudonymization presented as anonymization
- ❌ **Frozen DPIA**: no reassessment on significant change (or > 3 years)

## Deliverables
- Complete DPIA (structured per art. 35.7) + DPIA register
- Risk mitigation plan (owner + deadline)
- Documented DPO opinion
- Review procedure (≤ 3 years / significant change)

## Output format
Specify: AI system described · data processed (sensitive?) · purpose · number of individuals · automated decisions (yes/no) · transfers outside the EU · AI Act classification.

## Sources
- **GDPR** — Regulation (EU) 2016/679, **art. 35** (DPIA) + art. 36 (prior consultation) — eur-lex.europa.eu
- **EDPB / WP29** — *Guidelines on DPIA (WP248 rev.01)* — 9 high-risk criteria — ec.europa.eu (Article 29 WP)
- **CNIL** — Decision no. **2018-327 of October 11, 2018** (list of processing requiring a DPIA) + DPIA frameworks — cnil.fr / legifrance.gouv.fr
- **AI Act** — Regulation (EU) 2024/1689 (art. 6 + Annex III high-risk, art. 14 oversight, art. 86 explanation)
- **CNIL** — AI Recommendations (2024-2025)

## See also
- [`rgpd-ia.md`](rgpd-ia.md) — GDPR applied to AI (legal bases, rights)
- [`ai-act-conformite.md`](ai-act-conformite.md) — high-risk (DPIA trigger)
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — ethics EIA (complementary to the DPIA)
- [`audit-conformite-ia.md`](audit-conformite-ia.md) — checks the existence and quality of DPIAs
- [`../data_scientist/ethique-ia-biais.md`](../data_scientist/ethique-ia-biais.md) — technical bias measurement (risk R1)
