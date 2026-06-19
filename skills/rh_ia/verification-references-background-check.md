# Skill — Reference Checks & Background Check
> Certifications: PHR (HRCI) · SHRM-CP (SHRM) · CIPD Level 5 (CIPD)

## Objective
Structure and run professional reference checks and background checks within the French legal framework, to confirm the authenticity of a candidate's background before hiring or starting an engagement.

## French legal framework — Background Check

```
WHAT IS LEGAL (with candidate consent)
──────────────────────────────────────────────────────
✓ Degree verification (with the institutions)
✓ Identity verification (ID document)
✓ Professional reference calls (with prior consent)
✓ B3 criminal record (only if the role legally requires it:
   education, security, regulated finance — article L133-6 CASF)
✓ Company-existence check (public SIREN/SIRET)
✓ Credential / certification check (e.g. AWS, Anthropic)

WHAT IS ILLEGAL
──────────────────────────────────────────────────────
✗ Checking personal social media without consent
✗ Requesting the B2 record (reserved for the judiciary)
✗ Questions about private life, health, family situation
✗ Creditworthiness checks except specific finance roles
✗ References without the candidate's prior written consent
✗ Criminal-history checks unrelated to the role

GDPR & LABOR CODE BASIS
──────────────────────────────────────────────────────
· Explicit consent required before any background check
· Data collected = strictly necessary for the role (direct link, L1221-6)
· Prior disclosure to the candidate of verification methods (L1221-8);
  results confidential and not shared with unauthorized third parties
· No collection via a device not disclosed to them (L1221-9)
· Retention period: 2 years max (unsuccessful application)
· Candidate's right of access and rectification guaranteed
```

## Reference-call script — 15-min structure

```
INTRODUCTION (2 min)
──────────────────────────────────────────────────────
"Hello [First name], I'm [Name] from [Firm/Company].
[Candidate X] gave us your details as a reference for
a [title] role. Do you have 10-15 minutes to answer
a few questions? Your answers will remain confidential."

CONTEXT QUESTIONS (3 min)
──────────────────────────────────────────────────────
1. "What was your relationship with [candidate]? Direct manager?"
2. "Over what period did you work together?"
3. "What was their exact role in your team?"

SUBSTANTIVE QUESTIONS (8 min)
──────────────────────────────────────────────────────
4. "How would you describe their technical skills on [stack]?"
5. "On which projects did you see them perform? Concrete results?"
6. "How did they handle pressure or unexpected situations?"
7. "What is their greatest strength? Their main area for growth?"
8. "Would you rehire them if the chance arose? Why?"

CLOSING QUESTION (2 min)
──────────────────────────────────────────────────────
9. "Is there anything important I should know
    about how they work that we haven't covered?"
```

## Reference scoring grid

| Criterion | Score (1-5) | Comment |
|---|---|---|
| Confirmation of role and dates | | |
| Level of technical skill described | | |
| Quality of collaboration / teamwork | | |
| Reliability and autonomy | | |
| Would they make the same hire again? | | |
| **Average** | **/5** | |

```
INTERPRETATION
──────────────────────────────────────────────────────
≥ 4.0 / 5  → Very positive reference — strengthens the Go
3.0 - 3.9  → Neutral reference — dig deeper with a 2nd reference
< 3.0      → Negative signal — escalate to the client before deciding
Reference declined → warning signal to document
```

## Degree verification

```
VERIFICATION METHODS
──────────────────────────────────────────────────────
FRANCE
  · Grandes écoles / universities: contact the registrar directly
  · RNCP: search on France Compétences (francecompetences.fr)
  · Professional certifications: verify on the issuer's site
    (AWS: aws.amazon.com/verification, Google: skillshop, Anthropic...)
  · Baccalauréat + national diplomas: AIFE verification (secure portal)

INTERNATIONAL
  · Foreign diplomas: ENIC-NARIC France (recognition)
  · Verification via providers: Veriff, Kroll, HireRight

IT/AI CERTIFICATIONS (direct verification)
  · AWS Certified: verify.aws.training
  · Google Cloud: partner.cloudskillsboost.google
  · Anthropic (Claude): verifiable PDF certificate
  · PMI (PMP, CAPM): ccrs.pmi.org
  · Scrum (PSM, PSPO): scrum.org/user/verify
  · SAFe: scaledagile.com/verify-certificate
```

## Background Check — Providers

| Provider | Scope | Indicative price | Turnaround |
|---|---|---|---|
| **Veriff** | Identity + liveness check | per check (low unit cost) | Immediate |
| **Persona** | Identity + documents | per check (low unit cost) | Immediate |
| **Kroll** | Full background (degrees, references, criminal record) | per case (custom quote) | 5-10 days |
| **HireRight** | International background check | per case (custom quote) | 3-7 days |
| **Preventeo** | France: B3 record, degrees, references | per case (custom quote) | 3-5 days |
| **Certn** | Europe + international | per case (custom quote) | 2-5 days |

> Indicative pricing and turnaround (orders of magnitude), to confirm with each provider at scoping time.

## Background-check checklist — By role level

```
STANDARD ROLE (developer, analyst, PO)
──────────────────────────────────────────────────────
□ Identity verification (ID document)
□ 2 professional references (direct managers)
□ Main degree verification
□ Consistency CV ↔ LinkedIn ↔ interview statements

SENSITIVE ROLE (client data access, finance, HR)
──────────────────────────────────────────────────────
□ Everything in standard +
□ B3 record check (if legally applicable)
□ Level-2 identity verification (Veriff/Persona)
□ 3 references + call to previous employer
□ Verification of critical certifications

DIRECTOR / LEAD / CTO ROLE
──────────────────────────────────────────────────────
□ Everything in sensitive +
□ Full background check (Kroll / HireRight)
□ Verification of corporate offices held (Infogreffe)
□ Verification of publications / public speaking
□ C-level reference if available
```

## Deliverables
- Reference-call write-up (structured, timestamped)
- Degree and certification verification report
- Full background-check report (if applicable)
- Go / Conditional Go / No-Go summary with documented justification

## Output format
Specify: candidate name, target role, role level (standard / sensitive / director), contact details of the references provided, degrees to verify, declared certifications, deadline required for the decision.

## Anti-patterns
- ❌ Launch a background check without the candidate's explicit prior consent.
- ❌ Call a reference not provided/authorized by the candidate (e.g. current employer without their knowledge).
- ❌ Verify items with no direct link to the role (L1221-6) or pertaining to private life.
- ❌ Request a B2 record (reserved for the judiciary) or B3 outside the legally provided cases (L133-6 CASF).
- ❌ Share verification results with unauthorized third parties (confidentiality, L1221-8).

## Sources
- French Labor Code — L1221-6 (direct link/good faith), L1221-8 (prior disclosure, confidentiality), L1221-9 (disclosed device) — legifrance.gouv.fr
- French Social Action and Families Code — L133-6 (B3 record, roles in contact with minors/vulnerable groups) — legifrance.gouv.fr
- CNIL — Recruitment guide (proportionality, consent, retention) — cnil.fr/fr/le-guide-du-recrutement
- ENIC-NARIC France — recognition of foreign diplomas — enic-naric.fr · France Compétences (RNCP) — francecompetences.fr

## See also
- `skills/rh_ia/detection-fraude-cv-profils.md` — detecting inconsistencies upstream
- `skills/rh_ia/detection-deepfake-entretien.md` — identity verification during the interview
- `skills/rh_ia/evaluation-profils-techniques.md` — skills assessment
- `skills/juridique_ia/` — GDPR legal framework / candidate privacy
