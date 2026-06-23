# WF-008 — AI Act / GDPR Compliance Audit

> AI system to audit → obligations mapping → architecture review → security → data → governance → report + remediation plan
> Certifications mobilized: CIPP/E · DPO · ISO 42001 · ISO 27001 · CISSP · CDMP · TOGAF 10 · PROSCI

---

## Identity card

```yaml
id: "WF-008"
nom: "AI Act / GDPR Compliance Audit"
domaine: "Compliance & Governance"
declencheur: "Request for a compliance audit of an AI system (production or project) — regulatory pressure, CNIL/AI Office inspection, M&A due diligence"
resultat_final: "Compliance audit report + risk mapping + prioritized remediation plan + target governance"
duree_estimee: "90-150 min"
modele_recommande: "claude-opus-4-8"
modele_raison: "Very high-stakes regulatory workflow: AI Act risk-tier qualification, multi-article GDPR analysis, threat modeling, AI governance. A qualification error = exposure to penalties (up to 7% of worldwide turnover under the AI Act). Opus 4.8 is essential for the reliability of multi-framework legal-technical reasoning."
modele_alternatif: "claude-sonnet-4-6"  # only for express pre-audits (limited-risk AI system, scope < 1 use case)
agents_core:
  - JURIDIQUE-IA           # AI Act / GDPR / NIS2 obligations mapping
  - AI-ARCHITECT           # architecture review (transparency, explainability, monitoring)
  - SECURITE-IA            # threat modeling, adversarial robustness, technical measures
  - DATA-ENGINEER          # data lineage, data quality, training bias
  - CDO-DIRECTEUR-IA       # target AI governance, ethics committee, bodies
  - CHANGE-MANAGER         # governance rollout plan + team awareness
  - REDACTEUR-IA           # final audit report + prioritized remediation plan
agents_optionnels:
  - CONSULTANT-IA          # if a strategic / business-impact angle is to be assessed
  - FINANCIAL-ANALYST      # if remediation-cost estimation is required
  - DATA-SCIENTIST         # if an in-depth model audit (bias, fairness, drift) is required
  - AUDIT-METHODO-IA       # independent methodology counter-review of the audit (high-stakes: inspection, M&A, high-risk tier) — challenges rigor, not the legal substance
statut: "disponible"
version: "1.0"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | JURIDIQUE-IA | Mapping of applicable obligations | AI Act + GDPR + NIS2 obligations matrix |
| 2 | AI-ARCHITECT | AI architecture review (transparency, monitoring) | Architecture compliance report |
| 3 | SECURITE-IA | Threat modeling + technical measures | AI security report + controls plan |
| 4 | DATA-ENGINEER | Data lineage + data quality + bias | Data report + correction plan |
| 5 | CDO-DIRECTEUR-IA | Target AI governance + bodies | Governance framework + RACI |
| 6 | CHANGE-MANAGER | Governance rollout plan + awareness | AI compliance ADKAR plan |
| 7 | REDACTEUR-IA | Final audit report + remediation plan | Audit report + prioritized plan |
| opt | DATA-SCIENTIST | Model audit (bias, fairness, drift) | ML model audit report |
| opt | FINANCIAL-ANALYST | Remediation-cost estimation | Compliance business case |
| opt | AUDIT-METHODO-IA | Independent methodology counter-review of the audit (rigor, biases, exit criteria) | Counter-review report + bias log + validation gate |

---

## Contextual parameters

```
COMPLIANCE AUDIT CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
Client              : [Name / Sector / Size / Geographic footprint]
AI system audited   : [Name / Use case / Prod or project status]
Audit origin        : [Preventive / CNIL or AI Office inspection / M&A due diligence / Incident]
Suspected AI Act tier: [Unacceptable / High-risk / Limited risk / Minimal risk — to confirm in STEP-01]
Data processed      : [Personal yes/no / Sensitive yes/no / GDPR Art. 9 categories]
Volumes             : [# of individuals concerned / Training data volume]
Geography           : [EU only / EU + transfers outside EU / Outside EU with EU impact]
AI model            : [External LLM / Proprietary model / Fine-tuned model / GenAI / Classic ML]
Targeted frameworks : [AI Act only / + GDPR / + NIS2 / + ISO 42001 / + sectoral (HDS, DORA, etc.)]
Compliance deadline : [Urgent / 3-6 months / 12 months]
Expected deliverables: [Audit report / Remediation plan / Executive-board presentation / CNIL filing]
```

---

## BPMN flow diagram

```
(START — AI compliance audit request)
        │
        ▼
[STEP-01 — JURIDIQUE-IA]
  Mapping of applicable obligations:
  AI Act tier qualification,
  impacted GDPR articles,
  NIS2 / sectoral obligations
        │
        ▼
<GATEWAY — AI Act tier = "Unacceptable"?>
  ├── YES ──▶ [IMMEDIATE STOP — Recommend cessation]
  │            Specific report + alternatives
  │            (early END)
  └── NO ───▶ continue audit
        │
        ▼
═══════════════════════════════════
  PARALLEL FORK
═══════════════════════════════════
  ├── [STEP-02 — AI-ARCHITECT]
  │    Architecture review:
  │    transparency, explainability,
  │    monitoring, logs, traceability
  │
  ├── [STEP-03 — SECURITE-IA]
  │    AI threat modeling,
  │    adversarial robustness,
  │    OWASP LLM Top 10 technical measures
  │
  └── [STEP-04 — DATA-ENGINEER]
       Data lineage,
       training data quality,
       bias and representativeness
═══════════════════════════════════
  JOIN
═══════════════════════════════════
        │
        ▼
<GATEWAY — In-depth ML model audit required?>
  ├── YES ──▶ [STEP-04B — DATA-SCIENTIST]
  │            Model audit: fairness,
  │            drift, performance by subgroup
  └── NO ───▶ (bypass)
        │
        ▼
[STEP-05 — CDO-DIRECTEUR-IA]
  Target AI governance,
  AI ethics committee,
  compliance RACI,
  AI Act lead / DPO
        │
        ▼
[STEP-06 — CHANGE-MANAGER]
  AI compliance ADKAR plan,
  team awareness,
  lead training,
  internal communication
        │
        ▼
<GATEWAY — Remediation-cost estimation required?>
  ├── YES ──▶ [STEP-06B — FINANCIAL-ANALYST]
  │            Compliance business case
  └── NO ───▶ (bypass)
        │
        ▼
<GATEWAY — High-stakes audit? (CNIL / AI Office inspection, M&A due diligence, high-risk tier)>
  ├── YES ──▶ [STEP-06C — AUDIT-METHODO-IA]
  │            Independent methodology counter-review:
  │            tier → obligations → measures consistency,
  │            cognitive biases, ISTQB exit criteria,
  │            validation gate before the report
  │            (challenges rigor, NOT the legal substance)
  └── NO ───▶ (bypass)
        │
        ▼
[STEP-07 — REDACTEUR-IA]
  Full compliance audit report,
  prioritized remediation plan,
  executive-board summary,
  regulator-specific notes
        │
        ▼
(END — Compliance report delivered)
```

---

## Detailed steps

### STEP-01 — JURIDIQUE-IA

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-JURIDIQUE-IA"
  role: "Mapping of applicable regulatory obligations"
  input:
    - "Description of the audited AI system (use case, model, data)"
    - "Geography of operation and concerned populations"
    - "Frameworks targeted by the audit (AI Act / GDPR / NIS2 / sectoral)"
  output_attendu:
    - "AI Act tier qualification (Unacceptable / High-risk / Limited risk / Minimal)"
    - "Matrix of applicable AI Act obligations by tier"
    - "Impacted GDPR articles (notably Art. 5, 6, 9, 22, 25, 32, 35)"
    - "NIS2 obligations if essential/important entity"
    - "Applicable sectoral obligations (HDS, DORA, MiCA, EHDS, etc.)"
    - "Summary of the penalties incurred in case of non-compliance"
  condition_passage: "AI Act tier validated by the user before the technical audit"
  duree_estimee: "20 min"
  execution: "sequential — opens the workflow"
```

### STEP-02 — AI-ARCHITECT

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-AI-ARCHITECT"
  role: "Compliance review of the AI architecture"
  input:
    - "AI Act obligations matrix (STEP-01)"
    - "Current architecture diagram of the AI system"
    - "Existing logs, monitoring, traceability mechanisms"
  output_attendu:
    - "Transparency audit: user information, GenAI watermarking (Art. 50)"
    - "Explainability audit: ability to justify decisions"
    - "Monitoring audit: drift detection, continuous performance (Art. 15)"
    - "Traceability audit: decision logs, retention, integrity (Art. 12)"
    - "Human-oversight audit: human-in-the-loop, kill switch (Art. 14)"
    - "Architecture gaps vs. AI Act requirements + technical recommendations"
  duree_estimee: "20 min"
  execution: "parallel with STEP-03 and STEP-04"
```

### STEP-03 — SECURITE-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-SECURITE-IA"
  role: "Threat modeling and technical security measures"
  input:
    - "AI architecture and attack surface (STEP-02 in parallel)"
    - "Sensitive data processed and impact in case of a leak"
    - "Applicable security frameworks (ISO 27001, OWASP LLM Top 10, ENISA)"
  output_attendu:
    - "STRIDE threat modeling adapted to AI"
    - "OWASP LLM Top 10 audit (prompt injection, data leakage, supply chain, etc.)"
    - "Adversarial robustness audit (evasion, poisoning, extraction)"
    - "Technical controls plan (Art. 15 robustness, Art. 9 risk management)"
    - "Cybersecurity audit (encryption, IAM, audit logs, BCP)"
    - "Red teaming and penetration testing recommendations"
  duree_estimee: "25 min"
  execution: "parallel with STEP-02 and STEP-04"
```

### STEP-04 — DATA-ENGINEER

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-DATA-ENGINEER"
  role: "Audit of training and operational data"
  input:
    - "Data sources and flows (current data lineage)"
    - "Training / fine-tuning / RAG datasets"
    - "Applicable GDPR articles (STEP-01)"
  output_attendu:
    - "End-to-end data lineage mapping"
    - "Data quality audit: completeness, relevance, representativeness (Art. 10 AI Act)"
    - "Bias audit: statistical analysis by protected subgroups"
    - "GDPR data audit: legal basis, minimization, retention periods, rights"
    - "Transfers-outside-EU audit (TIA, BCR, contractual clauses)"
    - "Data correction plan and target data governance"
  duree_estimee: "20 min"
  execution: "parallel with STEP-02 and STEP-03"
```

### STEP-04B — DATA-SCIENTIST (optional)

```yaml
etape:
  id: "STEP-04B"
  agent: "AGENT-DATA-SCIENTIST"
  role: "In-depth ML model audit (bias, fairness, drift)"
  input:
    - "Model in production and current metrics"
    - "Evaluation datasets and results by subgroup"
    - "Chosen fairness definition (demographic parity, equalized odds, etc.)"
  output_attendu:
    - "Fairness report: metrics by protected subgroup"
    - "Drift detection: data drift + concept drift + model drift"
    - "Performance compared by sub-population"
    - "Mitigation recommendations (rebalancing, reweighting, post-processing)"
    - "Continuous fairness + drift monitoring plan"
  duree_estimee: "20 min"
  execution: "conditional — if an in-depth ML model audit is required"
```

### STEP-05 — CDO-DIRECTEUR-IA

```yaml
etape:
  id: "STEP-05"
  agent: "AGENT-CDO-DIRECTEUR-IA"
  role: "Target AI governance and bodies"
  input:
    - "Technical reports (STEP-02, STEP-03, STEP-04, STEP-04B)"
    - "AI Act governance obligations (Art. 17 quality management system)"
    - "Client's current organization"
  output_attendu:
    - "Target AI governance framework (ISO 42001 aligned)"
    - "AI ethics committee: composition, frequency, mandates"
    - "AI compliance RACI: DPO, CISO, AI Officer, Business, IT"
    - "Appointment of an AI Act lead and articulation with the DPO"
    - "Compliance evaluation process before production (gate)"
    - "Enterprise AI policy (use charter, restrictions, escalation)"
  duree_estimee: "15 min"
  execution: "sequential after the technical JOIN"
```

### STEP-06 — CHANGE-MANAGER

```yaml
etape:
  id: "STEP-06"
  agent: "AGENT-CHANGE-MANAGER"
  role: "Governance rollout + team awareness"
  input:
    - "Target governance framework (STEP-05)"
    - "Impacted populations (Business, IT, Data, Leadership)"
    - "Client's current compliance maturity"
  output_attendu:
    - "AI compliance ADKAR assessment per population"
    - "Internal communication plan on AI compliance"
    - "Training program: AI Act leads, Data teams, Business"
    - "Relay-mobilization plan (compliance champions)"
    - "Governance adoption KPIs with measurable milestones"
  duree_estimee: "15 min"
  execution: "sequential after STEP-05"
```

### STEP-06B — FINANCIAL-ANALYST (optional)

```yaml
etape:
  id: "STEP-06B"
  agent: "AGENT-FINANCIAL-ANALYST"
  role: "Compliance business case"
  input:
    - "Consolidated technical remediation plan (STEP-02 to STEP-04B)"
    - "Governance and change plan (STEP-05 and STEP-06)"
    - "Penalties avoided (STEP-01) and cost of an incident"
  output_attendu:
    - "Remediation-cost estimation per workstream (CAPEX + OPEX)"
    - "Compliance cost vs. penalties incurred comparison"
    - "Economic prioritization of the workstreams (cost × risk)"
    - "Compliance scenarios (legal minimum / target / best-in-class)"
  duree_estimee: "15 min"
  execution: "conditional — if costing is required"
```

### STEP-06C — AUDIT-METHODO-IA (optional)

```yaml
etape:
  id: "STEP-06C"
  agent: "AGENT-AUDIT-METHODO-IA"
  role: "Independent methodology counter-review of the audit (rigor, not legal substance)"
  input:
    - "All audit outputs (STEP-01 to STEP-06B)"
    - "Audit origin and stakes (inspection / M&A due diligence / high-risk tier)"
    - "Penalties summary and AI Act tier qualification (STEP-01)"
  output_attendu:
    - "Consistency review of the reasoning chain: tier → obligations → architecture/security/data measures (gaps, logical shortcuts)"
    - "Completeness check against the audit scope (no impacted framework or article silently dropped)"
    - "Cognitive-bias log: overconfidence, blind spots, tier minimized to avoid client friction (anti-theater)"
    - "ISTQB exit criteria applied to the audit deliverable (traceability, evidence, reproducibility)"
    - "Verdict: report cleared for delivery / returned with documented reservations — never cleared by default"
  condition_passage: "Audit cleared, or returned with documented reservations, before the final report (STEP-07)"
  perimetre: "Challenges the methodological rigor of the audit; does NOT re-qualify the legal substance — AI Act / GDPR qualification remains AGENT-JURIDIQUE-IA (STEP-01)"
  duree_estimee: "20 min"
  execution: "conditional — after STEP-06B, before STEP-07, if the audit is high-stakes"
```

### STEP-07 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-07"
  agent: "AGENT-REDACTEUR-IA"
  role: "Final audit report and remediation plan"
  input:
    - "All outputs from STEP-01 to STEP-06C"
    - "Expected format (internal report / regulator filing / executive-board presentation)"
    - "Confidentiality level"
  output_attendu:
    - "2-page executive summary (compliance verdict + top 5 risks + investment)"
    - "Full audit report (40-80 pages) structured by framework"
    - "Prioritized remediation plan (impact × effort × legal deadline)"
    - "Compliance roadmap with quarterly milestones"
    - "Executive-board presentation (15-20 slides) if needed"
    - "Regulator note if a CNIL / AI Office filing is required"
  duree_estimee: "25 min"
  execution: "sequential — closes the workflow"
```

---

## Final deliverables

```
WF-008 CHECKLIST
──────────────────────────────────────────────────────
□ AI Act tier qualification + obligations matrix
□ List of impacted GDPR articles + NIS2 obligations
□ Architecture audit (transparency, explainability, monitoring, oversight)
□ Threat modeling + OWASP LLM Top 10 audit + adversarial robustness
□ Data audit (lineage, quality, bias, GDPR, transfers)
□ [optional] Model audit (fairness, drift by subgroup)
□ Target AI governance framework + compliance RACI
□ Compliance ADKAR plan + training program
□ [optional] Compliance business case (CAPEX/OPEX)
□ [optional] Independent methodology counter-review + bias log + cleared audit (high-stakes)
□ 2-page executive summary
□ Full audit report (40-80 pages)
□ Prioritized remediation plan + milestone roadmap
□ Executive-board presentation if required
□ Regulator note (CNIL / AI Office) if filing
```

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-008 from workflows/WF-008-audit-conformite-ia-act-rgpd.md.

Compliance audit context:
- Client: [to fill in]
- AI system audited: [to fill in]
- Audit origin: [Preventive / Inspection / Due diligence]
- Data processed: [Personal / Sensitive / Art. 9 categories]
- AI model: [LLM / Proprietary / Fine-tuned / GenAI]
- Targeted frameworks: [AI Act / GDPR / NIS2 / sectoral]
- Expected deliverables: [Report / Remediation plan / Executive-board presentation]

Launch STEP-01 with AGENT-JURIDIQUE-IA.
```
