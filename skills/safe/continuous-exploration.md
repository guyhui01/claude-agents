# Skill — Continuous Exploration (CE) in the SAFe Continuous Delivery Pipeline

> Certification: SAFe POPM 6 · SAFe DevOps Practitioner
> Agent: AGENT-PO-SAFE.md

## Objective
Drive the Continuous Exploration phase of the SAFe Continuous Delivery Pipeline to continuously feed the Program Backlog with validated, prioritized features.

## The SAFe Continuous Delivery Pipeline

```
CONTINUOUS    →  CONTINUOUS    →  CONTINUOUS    →  CONTINUOUS
EXPLORATION      INTEGRATION      DEPLOYMENT       RELEASE
(CE)             (CI)             (CD)             (CR)

[Need]           [Build + Test]   [Auto Deploy]    [Release]
[Hypothesis]     [Integration]    [Staging]        [Production]
[Feature]        [Quality]        [Monitoring]     [Feedback]

← PM/PO role →  ← Dev/DevOps role ───────────────────────────→
```

## The 4 Continuous Exploration activities

### 1. Hypothesize
- Analyze market trends and customer feedback
- Formulate product hypotheses (cf. hypothesis-driven.md skill)
- Align with the Portfolio's Strategic Themes

### 2. Collaborate & Research
- User Research: interviews, observations, surveys
- Competitive benchmarking
- Product data analysis (analytics, NPS, support)
- Design Thinking workshops (cross-functional)
- Technical spikes to validate feasibility

### 3. Architect & Design
- Define the SAFe Features (title + Benefit Hypothesis + AC)
- Prepare the architectural enablers (in coordination with the Architect)
- Wireframing / Prototyping (increasing fidelity)
- User validation (prototype testing)

### 4. Synthesize (→ Program Backlog)
- Prioritize by WSJF
- Write the Features ready for PI Planning
- Update the Roadmap
- Communicate to stakeholders (Vision + PI Objectives)

## CE cadence within the PI

```
PI (10 weeks = 4 Iterations + 1 IP)

Week 1-2   : CE Iteration N (hypotheses + research)
Week 3-4   : CE Iteration N+1 (design + validation)
Week 5-6   : CE Iteration N+2 (synthesis + features ready)
Week 7     : PI Planning prep (Program Backlog finalized)
Week 8-10  : Delivery + feedback → new CE cycle
```

## Program Backlog — Features from CE

### Feature DoR (Definition of Ready)
- [ ] Title in the "Verb + Object + Value" format
- [ ] Benefit Hypothesis written
- [ ] Acceptance Criteria defined (minimum 3)
- [ ] WSJF computed and score documented
- [ ] Dependencies identified
- [ ] Architectural enablers identified if needed
- [ ] T-shirt estimate validated by the ART

## CE metrics

| Metric | Description | Target |
|---|---|---|
| Feature validation rate | % features validated with users before dev | > 60% |
| Discovery lead time | Time from idea → feature ready for PI Planning | < 1 PI |
| Hypothesis confirmation rate | % hypotheses confirmed in production | Measure (baseline) |
| Research to backlog ratio | % research insights → backlog features | > 30% |
