# WF-009 — IT/AI Recruitment

> Identified need → job description → sourcing → assessment → selection → offer
> Certifications mobilized: SHRM-CP · CBAP · PHR · CIPD L5 · CAP IABAC · Anthropic

---

## Identity card

```yaml
id: "WF-009"
nom: "Recrutement IT/IA"
domaine: "HR & Talent"
declencheur: "Identified IT/AI recruitment need (permanent, fixed-term, freelance, internship)"
resultat_final: "Selected candidate + offer issued + complete recruitment file"
duree_estimee: "60-90 min"
modele_recommande: "claude-sonnet-5"
modele_raison: "Operational HR workflow: offer writing, assessment grids, CV scoring. Sonnet 5 ensures sufficient quality for these standard deliverables."
modele_alternatif: "claude-opus-4-8"  # if recruiting very senior profiles (CDO, AI Architect, CISO) or a politically tense context
agents_core:
  - RH-IA               # sourcing, profile assessment, ATS scoring, anti-fraud
  - BUSINESS-ANALYST    # business-need analysis, functional profile, MOA requirements
  - CONSULTANT-IA       # AI technical profile validation, tech assessment grid
  - REDACTEUR-IA        # job-ad writing, agency brief, candidate emails
agents_optionnels:
  - CHEF-PROJET-IA      # if recruiting a project manager or integration into a program
  - CHANGE-MANAGER      # if recruitment with team or transformation stakes
  - FINANCIAL-ANALYST   # if hire TCO vs services vs freelance calculation
statut: "disponible"
version: "1.0"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | BUSINESS-ANALYST | Business-need analysis and functional profile | Need sheet + must/nice criteria |
| 2 | CONSULTANT-IA | AI technical assessment grid + level validation | Technical grid + interview questions |
| 3 | RH-IA | Sourcing, CV scoring, anti-fraud, ATS | Scored candidate shortlist |
| 4 | REDACTEUR-IA | Job-ad writing + communications | Publishable ad + candidate emails |
| opt | FINANCIAL-ANALYST | Hire TCO vs freelance vs services | Recruitment business case |
| opt | CHANGE-MANAGER | Onboarding plan for the selected candidate | Onboarding plan D1-D30 |

---

## Contextual parameters

```
RECRUITMENT CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
Role sought         : [Title / Level (junior, senior, lead, director)]
Contract type       : [Permanent / Fixed-term / Freelance / Internship / Apprenticeship]
Urgency             : [Immediate / 1 month / 3 months]
Location            : [City / Remote / Hybrid]
Must-have skills    : [Non-negotiable technologies and skills]
Nice-to-have skills : [Desired but non-blocking skills]
Salary / day rate   : [Range or "to be defined"]
Team context        : [Team size, tech stack, culture]
Assessment methods  : [Tech interview / Code test / Practical case / Reference]
Anti-fraud required : [Verify diplomas, LinkedIn, references — yes/no]
```

---

## BPMN flow diagram

```
(START — IT/AI recruitment need validated)
        │
        ▼
[STEP-01 — BUSINESS-ANALYST]
  Business-need analysis,
  functional profile and requirements,
  Must / Should / Nice criteria
        │
        ▼
═══════════════════════════════════
  PARALLEL FORK
═══════════════════════════════════
  ├── [STEP-02A — CONSULTANT-IA]
  │    Technical assessment grid,
  │    AI tech interview questions,
  │    calibrated seniority level
  │
  └── [STEP-02B — FINANCIAL-ANALYST] (optional)
       Hire TCO vs freelance vs IT services firm,
       recruitment business case
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
[STEP-03 — REDACTEUR-IA]
  Writing of the publishable job ad,
  recruitment-agency brief,
  LinkedIn outreach message
        │
        ▼
[STEP-04 — RH-IA]
  Active sourcing (LinkedIn, GitHub, Malt),
  scoring of the CVs received (ATS grid),
  CV fraud / fake-profile detection,
  shortlist of 3-5 qualified candidates
        │
        ▼
<GATEWAY — Shortlist validated?>
  ├── NO ───▶ Back to STEP-03 (adjust the ad) or STEP-04 (broaden sourcing)
  └── YES ──▶ continue
        │
        ▼
[STEP-05 — RH-IA + CONSULTANT-IA]
  Conducting the selection interviews:
  HR interview (culture fit, motivations),
  technical interview (STEP-02A grid),
  reference checks (background check)
        │
        ▼
<GATEWAY — Candidate(s) selected?>
  ├── NO ───▶ Back to sourcing or re-brief the role
  └── YES ──▶ continue
        │
        ▼
[STEP-06 — RH-IA + REDACTEUR-IA]
  Issuing the offer to the selected candidate,
  negotiation if needed,
  administrative recruitment file
        │
        ▼
(END — Offer accepted / file complete)
```

---

## Detailed steps

### STEP-01 — BUSINESS-ANALYST

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-BUSINESS-ANALYST"
  role: "Need analysis and functional profile"
  input:
    - "Recruitment request (manager, CHRO)"
    - "Project / team / stack context"
    - "Budget and timeline constraints"
  output_attendu:
    - "Structured need sheet (context, mission, expected deliverables)"
    - "MoSCoW skills grid (Must / Should / Could / Won't)"
    - "Sought personality profile / culture fit"
    - "Work environment and conditions (remote, tools, rituals)"
  duree_estimee: "15 min"
  execution: "sequential — opens the workflow"
```

### STEP-02A — CONSULTANT-IA

```yaml
etape:
  id: "STEP-02A"
  agent: "AGENT-CONSULTANT-IA"
  role: "AI technical grid and level calibration"
  input:
    - "Need sheet and must/nice skills (STEP-01)"
    - "Targeted technology stack"
  output_attendu:
    - "Technical assessment grid (6-10 criteria, 1-5 rating)"
    - "10-15 calibrated tech interview questions (junior/senior/lead)"
    - "Practical exercise / mini technical case (optional)"
    - "Market-level benchmark (2026 reference)"
  duree_estimee: "15 min"
  execution: "parallel with STEP-02B if enabled"
```

### STEP-03 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-REDACTEUR-IA"
  role: "Production of the recruitment materials"
  input:
    - "Need sheet (STEP-01)"
    - "Technical grid (STEP-02A)"
    - "Client context and company culture"
  output_attendu:
    - "Publishable job ad (attractive, inclusive, complete)"
    - "Recruitment-agency brief (if outsourced)"
    - "LinkedIn InMail outreach message (subject + body)"
    - "Application-received reply email (template)"
  duree_estimee: "10 min"
  execution: "sequential after STEP-02 JOIN"
```

### STEP-04 — RH-IA

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-RH-IA"
  role: "Sourcing, scoring and fraud detection"
  input:
    - "Published ad + role brief (STEP-01 + STEP-03)"
    - "CVs received and sourced profiles"
    - "ATS scoring grid"
  output_attendu:
    - "CVs scored against the MoSCoW grid (Must met / missing)"
    - "Fraud-detection report (inflated CV, fake LinkedIn profile)"
    - "Shortlist of 3-5 candidates with justification"
    - "Candidate comparison table (skills × criteria)"
  duree_estimee: "20 min"
  execution: "sequential after STEP-03"
```

### STEP-05 — RH-IA + CONSULTANT-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-RH-IA + AGENT-CONSULTANT-IA"
  role: "Assessment of the shortlisted candidates"
  input:
    - "Candidate shortlist (STEP-04)"
    - "Technical assessment grid (STEP-02A)"
  output_attendu:
    - "HR interview report (culture fit, motivations, compensation)"
    - "Technical grid filled in per candidate"
    - "Reference-check result (2-3 references minimum)"
    - "Final recommendation: selected candidate + arguments"
  duree_estimee: "15 min"
  execution: "sequential after STEP-04"
```

### STEP-06 — RH-IA + REDACTEUR-IA

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-RH-IA + AGENT-REDACTEUR-IA"
  role: "Issuing the offer and closing the recruitment"
  input:
    - "Selected candidate + negotiated terms"
    - "Complete candidate file"
  output_attendu:
    - "Offer letter / employment promise"
    - "Reply email to unsuccessful candidates (considerate)"
    - "Complete administrative file (pre-hire declaration, contract, IT access)"
    - "D1 onboarding sheet (handoff to WF-007 if applicable)"
  duree_estimee: "10 min"
  execution: "sequential — closes the workflow"
```

---

## Final deliverables

```
WF-009 CHECKLIST
──────────────────────────────────────────────────────
□ Structured need sheet (MoSCoW skills)
□ Calibrated AI technical assessment grid
□ [optional] Hire-vs-freelance TCO business case
□ Publishable job ad + agency brief
□ Scored candidate shortlist + anti-fraud report
□ Interview grids filled in per candidate
□ Reference-check report
□ Final recommendation with justification
□ Offer letter / employment promise
□ Reply emails to unsuccessful candidates
□ D1 onboarding sheet (link to WF-007)
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-009 from workflows/WF-009-recrutement-it-ia.md.

Recruitment context:
- Role sought: [to fill in]
- Contract type: [Permanent / Freelance / Internship]
- Must-have skills: [to fill in]
- Budget: [to fill in]
- Urgency: [to fill in]

Launch STEP-01 with AGENT-BUSINESS-ANALYST.
```
