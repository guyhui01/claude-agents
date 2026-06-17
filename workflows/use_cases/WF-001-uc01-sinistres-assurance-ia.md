# WF-001 — Use Case UC-01 — Insurance AI claim digitalization

> Workflow: `WF-001-cadrage-produit-ia.md`
> Sector: Insurance · Fictional client: Prévalistest Assurances
> Simulated execution time: 75 min · Agents activated: BA · UX · PO · QA · JURIDIQUE-IA

---

## Client brief (workflow input)

```
CLIENT       : Prévalistest Assurances — regional mutual, 280,000 policyholders
SECTOR       : P&C insurance (Auto, Home, Health)
PRODUCT      : Online AI claim-filing assistant
TRIGGER      : Web claim-filing abandonment rate: 67% — Average handling time: 8 days
OBJECTIVE    : Cut the time to < 48h and abandonment to < 20% via an AI-guided journey
CONSTRAINTS  : GDPR · AI Act (Article 6 — limited-risk AI system) · Legacy IS integration
               Sprint 0 budget: 15 person-days · MVP delivery: 12 weeks
TEAM         : 1 Scrum squad (5 dev · 1 PO · 1 SM) · Scrum method
LANGUAGE     : French
LEVEL        : Full scoping — multi-sprint backlog
```

---

## STEP-01 — BUSINESS-ANALYST · Business analysis

### Needs map (job-to-be-done)

| Persona | Main job | Current frustration | Expected gain |
|---------|--------------|----------------------|--------------|
| Policyholder with a claim (Marie, 42) | Quickly file her auto claim from her phone | 47-field form, no contextual help, abandons midway | Smart guidance, < 10 min, immediate confirmation |
| Claims handler (Mike) | Process cases without chasing the client | 40% of cases incomplete on receipt — time-consuming manual follow-ups | Complete case from filing, AI pre-qualified |
| Compliance officer (Isabelle) | Ensure GDPR and AI Act traceability | No automatic register of AI decisions | Automatic log of AI suggestions + explicit consent |

### Functional scope

| In scope | Out of scope |
|----------|-------------|
| Auto and Home claim filing | Health claims (phase 2) |
| AI guidance by claim type | Automatic computation of the payout amount |
| Photo / document upload | Telephony integration (CTI) |
| Case status notification | Handler back-office (phase 2) |
| Inline GDPR consent | Broker portal |

### AS-IS process (simplified BPMN)

```
[Policyholder] → Web form access → Filling 47 fields (no help) →
Submission → Manual check D+1 → Incomplete case? → Email follow-up →
[Handler] → Processing → Decision → Letter D+8
```

### Open questions

- Q1: Can the AI suggest an indicative payout amount? → AI Act Article 6 impact
- Q2: What level of AI autonomy? Suggestion vs decision
- Q3: Legacy IS integration (AS/400): REST API available or batch flow?

---

## STEP-02 — UX-DESIGNER · User journey

### Main persona — Marie Dupont

```
First name  : Marie Dupont
Age         : 47
Situation   : Retail employee, driver's license for 25 years, not at ease with digital
Device      : Mobile 80% of the time (iPhone SE)
Context     : Parking fender-bender — stressed, wants it sorted out fast
Quote       : "I never know what to put in these forms, I'm afraid of filling them
               in wrong and the insurer refusing. I usually give up and call."
JTBD        :
  1. File in < 10 min from the claim location
  2. Know immediately whether her case is admissible
  3. Not have to call back to find out where her case stands
```

### User Journey Map — AI claim filing

```
Step           : 1. Access      2. Identification  3. AI guidance  4. Upload      5. Confirmation
─────────────────────────────────────────────────────────────────────────────────────────────────
Marie's action : Opens the app  Policyholder       Answers the     Photo of the   Receives case no.
                                login              AI questions    vehicle        + estimated time
─────────────────────────────────────────────────────────────────────────────────────────────────
Emotion        : 😟 Stressed     😐 Neutral          🙂 Guided        😌 Relieved     😊 Reassured
─────────────────────────────────────────────────────────────────────────────────────────────────
Friction points: Finding the    Password?          Too-technical   Photo format   No immediate
                 filing link                        questions       rejected       PDF recap
─────────────────────────────────────────────────────────────────────────────────────────────────
AI opportunity : Deep-link push  SSO or magic link  Adaptive NLP    Auto mobile    Auto-generated
                 notification                       questions       compression    PDF + email
```

### Key wireframes (lo-fi)

**Screen 1 — Claim type selection**
```
┌──────────────────────────────┐
│  🛡️ Prévalistest — My claim   │
├──────────────────────────────┤
│  Hello Marie,                │
│  What type of claim?         │
│                              │
│  ┌──────────┐  ┌──────────┐  │
│  │ 🚗 Auto  │  │ 🏠 Home  │  │
│  └──────────┘  └──────────┘  │
│                              │
│  ┌──────────────────────────┐│
│  │ 📞 Emergency — Call      ││
│  └──────────────────────────┘│
└──────────────────────────────┘
```

**Screen 2 — AI guidance (adaptive question)**
```
┌──────────────────────────────┐
│  🚗 Auto claim — Step 2/5    │
│  ────────────────            │
│                              │
│  Does the accident involve   │
│  another vehicle?            │
│                              │
│  ┌──────────┐  ┌──────────┐  │
│  │  ✅ Yes  │  │  ❌ No   │  │
│  └──────────┘  └──────────┘  │
│                              │
│  ℹ️ If yes, you'll need the  │
│  accident report form        │
└──────────────────────────────┘
```

---

## STEP-03 — PO-SCRUM · Initial backlog

### Epics

> WSJF prioritization (SAFe) — CoD = BV + TC + RR/OE · WSJF = CoD / Size · relative rating, smallest = 1 per column · Fibonacci: 1·2·3·5·8·13
> BV: Business Value · TC: Time Criticality · RR/OE: Risk Reduction / Opportunity Enablement

| ID | Label | BV | TC | RR/OE | CoD | Size | WSJF | Rank |
|----|---------|----|----|-------|-----|------|------|------|
| EP-04 | GDPR + AI Act compliance | 8 | 13 | 13 | 34 | 3 | **11.3** | #1 |
| EP-03 | Tracking and notification | 1 | 1 | 1 | 3 | 1 | **3.0** | #2 |
| EP-02 | Claim document management | 5 | 3 | 3 | 11 | 5 | **2.2** | #3 |
| EP-01 | AI-guided claim-filing journey | 13 | 8 | 5 | 26 | 13 | **2.0** | #4 |

### User Stories — Prioritized initial backlog

| ID | User Story | Epic | MoSCoW | SP |
|----|-----------|------|--------|----|
| US-01 | As a policyholder, I want to choose the claim type (Auto/Home) so that I reach the matching journey | EP-01 | Must | 3 |
| US-02 | As a policyholder, I want to answer AI-guided questions so that I fill in my claim without errors | EP-01 | Must | 8 |
| US-03 | As a policyholder, I want to upload photos from my phone so that I document the damage with no extra step | EP-02 | Must | 5 |
| US-04 | As a policyholder, I want to receive a case number and an estimated time at submission so that I know where I stand | EP-03 | Must | 3 |
| US-05 | As a policyholder, I want to receive a confirmation email with a PDF recap so that I have proof of my filing | EP-03 | Should | 5 |
| US-06 | As a policyholder, I want to give explicit consent to the use of AI so that I am informed of my rights | EP-04 | Must | 3 |
| US-07 | As a handler, I want to receive an AI pre-qualified case so that I process it without chasing the client | EP-01 | Must | 8 |
| US-08 | As a DPO, I want an automatic log of every AI suggestion so that I meet the AI Act requirements | EP-04 | Must | 5 |
| US-09 | As a policyholder, I want to track my case status in real time so that I avoid calling customer service | EP-03 | Could | 5 |
| US-10 | As a policyholder, I want to file in < 10 min on mobile so that I don't waste time at the claim location | EP-01 | Must | 13 |

**Estimated velocity**: ~40 SP sprint 1 · MVP in 3 sprints (12 weeks)

---

## STEP-04 — QA-AGILE · Gherkin acceptance criteria

### US-02 — AI claim-filing guidance

```gherkin
Feature: AI guidance for auto claim filing
  As a mobile policyholder,
  I want to be guided by adaptive questions
  So that I complete my claim filing without errors in under 10 minutes.

  Background:
    Given Marie is logged into her policyholder account
    And she has selected "Auto claim"

  Scenario: Nominal journey — claim with no third party
    When she answers "No" to "Does it involve another vehicle?"
    Then the form does not display the "Third-party details" fields
    And the next step asks "Do you have any witnesses?"
    And the progress bar shows "Step 2/4"

  Scenario: Journey with third party — accident report required
    When she answers "Yes" to "Does it involve another vehicle?"
    Then the AI displays the message "You will need the accident report form"
    And an upload field "Accident report (PDF or photo)" is enabled
    And the journey counts 5 steps instead of 4

  Scenario: Abandon and resume
    When Marie closes the app after step 2
    And she returns to the claim filing within 24h
    Then she sees the message "Resume your claim in progress"
    And her answers to steps 1 and 2 are preserved
```

### US-06 — GDPR + AI Act consent

```gherkin
Feature: AI-use consent
  As a policyholder,
  I want to give explicit, informed consent
  So that I understand how the AI processes my data.

  Scenario: Consent shown before AI guidance
    Given Marie accesses the guided claim-filing journey
    When the AI module is about to be activated
    Then a consent screen is shown BEFORE any AI suggestion
    And it states: "The AI suggests fields to fill in — it does not make decisions"
    And two buttons are offered: "Accept" and "File without AI"

  Scenario: Consent refusal — standard form accessible
    When Marie clicks "File without AI"
    Then she reaches the standard form (no AI guidance)
    And no data is sent to the AI engine
    And a "consent_refused" log is recorded (with no personal data)
```

### US-08 — AI Act log

```gherkin
Feature: AI Act traceability — AI suggestion log
  As Prévalistest's DPO,
  I want an automatic register of every AI interaction
  So that I meet the AI Act Article 13 obligations.

  Scenario: Log created on each AI suggestion
    Given Marie uses AI guidance with consent granted
    When the AI generates a suggestion (e.g. "third-party field required")
    Then a log is created with: timestamp · anonymized policyholder hash · suggestion_type · AI_model · version
    And this log is accessible to the DPO from the compliance back-office
    And it is retained for 5 years (legal obligation)

  Scenario: No log if consent refused
    Given Marie refused AI consent
    When she submits her claim via the standard form
    Then no AI log is created for this filing
```

---

## Optional STEP — JURIDIQUE-IA · AI Act analysis

> Activated because US-08 involves an AI Act classification.

**System classification**: Limited risk (Article 6 — no automated decision on individual rights)
**Obligations**: Mandatory transparency (consent + information) · No reinforced compliance required
**Recommendation**: Document in the GDPR processing register (Article 30) + mention in the ToS

---

## WF-001 final deliverables — Checklist

```
✅ Business needs map (3 personas · AS-IS · in/out scope)
✅ Marie user journey map — 5 steps · emotion curve · friction points
✅ 2 lo-fi mobile wireframes (claim-type screen · AI guidance)
✅ Initial backlog: 10 US ordered by value · epics · SP estimates
✅ Gherkin acceptance criteria: US-02 · US-06 · US-08 (3 features · 8 scenarios)
✅ AI Act analysis: limited-risk classification · transparency obligations
⬜ [optional] Sprint 1 test plan (not activated in this use case)
⬜ [optional] ADKAR assessment (no major organizational transformation)
```

---

## Execution summary

| Indicator | Value |
|-----------|--------|
| Total duration | 75 min |
| Agents activated | 5 (BA · UX · PO · QA · JURIDIQUE-IA) |
| US produced | 10 US · 4 epics |
| Gherkin scenarios | 8 scenarios across 3 priority US |
| Wireframes | 2 lo-fi mobile screens |
| Documented decisions | 3 (scope · AI Act · consent) |
| Key value demonstrated | Journey cut from 47 fields → 5 guided steps · AI compliance built in from scoping |

---

*Fictional use case · WF-001 v1.2 · Generated with Claude Code · 2026-05-26*
