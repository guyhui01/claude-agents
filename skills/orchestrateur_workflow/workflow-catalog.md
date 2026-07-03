# Skill — Workflow Catalog Management
> Certifications: TOGAF 10 (The Open Group), SAFe LPM (Scaled Agile), PMP (PMI), ITIL 4 Foundation (Axelos)

## Objective
Reference, document, and maintain the catalog of available agentic workflows — to enable fast selection of the right workflow based on client context and the reuse of proven patterns.

## Workflow catalog — Current state

### WF-001 — AI Product Scoping
```yaml
id: "WF-001"
name: "AI Product Scoping"
domain: "Agile & Product"
estimated_duration: "45-90 min"
recommended_model: "Sonnet 5"
certifications: ["PSPO1", "SAFe 6", "PMI-ACP"]
usage_context: "Client brief → prioritized backlog + acceptance criteria"
agents:
  - BUSINESS-ANALYST
  - PO-SCRUM
  - UX-DESIGNER
  - QA-AGILE
deliverables:
  - "Business needs map"
  - "Initial backlog (8-15 US)"
  - "Acceptance criteria (Gherkin)"
  - "Key wireframes (if UX needed)"
status: "available"
```

### WF-002 — Agile SAFe Delivery
```yaml
id: "WF-002"
name: "Agile SAFe Delivery"
domain: "Agile & Product"
estimated_duration: "60-120 min"
recommended_model: "Sonnet 5"
certifications: ["SAFe6 POPM", "SAFe6 Agilist", "SAFe LPM"]
usage_context: "PI Planning → sprint backlog → progress reporting"
agents:
  - PO-SAFE
  - SCRUM-MASTER
  - QA-AGILE
  - CHEF-PROJET-IA
deliverables:
  - "PI Objectives"
  - "Prioritized Program Backlog (WSJF)"
  - "Sprint plan"
  - "Executive-committee reporting"
status: "available"
```

### WF-003 — AI Application Launch
```yaml
id: "WF-003"
name: "AI Application Launch"
domain: "Dev & Technical"
estimated_duration: "90-180 min"
recommended_model: "Sonnet 5"
certifications: ["AWS SA", "TOGAF 10", "PMP"]
usage_context: "Idea → architecture → code → deployment → security audit"
agents:
  - AI-ARCHITECT
  - DEV-PYTHON-IA
  - DEVOPS-CLOUD
  - SECURITE-IA
deliverables:
  - "System architecture (diagram)"
  - "Documented source code"
  - "CI/CD pipeline"
  - "Security audit report"
status: "available"
```

### WF-004 — AI Consulting Engagement
```yaml
id: "WF-004"
name: "AI Consulting Engagement"
domain: "Management & Consulting"
estimated_duration: "60-90 min"
recommended_model: "Sonnet 5"
certifications: ["PMP", "PROSCI", "CAP IABAC"]
usage_context: "AI maturity audit → strategy → training plan → deliverables"
agents:
  - CONSULTANT-IA
  - CDO-DIRECTEUR-IA
  - FORMATEUR-IA
  - REDACTEUR-IA
deliverables:
  - "AI maturity audit report"
  - "Strategic AI roadmap (12-24 months)"
  - "Team training plan"
  - "Executive summary (1 page)"
status: "available"
```

### WF-005 — Intelligence & Growth
```yaml
id: "WF-005"
name: "Strategic Intelligence & Growth"
domain: "Management & Consulting"
estimated_duration: "30-60 min"
recommended_model: "Sonnet 5"
certifications: ["PMI-ACP", "SAFe LPM"]
usage_context: "AI/tech intelligence → thought-leadership content → contractual review"
agents:
  - GROWTH-IA
  - REDACTEUR-IA
  - JURIDIQUE-IA
deliverables:
  - "AI intelligence digest (weekly / monthly)"
  - "Articles / LinkedIn posts"
  - "Contractual compliance review"
status: "available"
```

### WF-006 — Pre-sales / Commercial Proposal
```yaml
id: "WF-006"
name: "Pre-sales / Commercial Proposal"
domain: "Management & Consulting"
estimated_duration: "75-120 min"
recommended_model: "Opus 4.8"
model_rationale: "Strategic, high-commercial-stakes workflow (GO/NO-GO qualification, target architecture, person-day costing, pricing, prospect ROI) — Opus 4.8 recommended for CAC40/GAFA/unicorn clients"
certifications: ["PMP", "CBAP", "TOGAF 10", "CFA", "CAP IABAC"]
usage_context: "RFP received → qualification → scoping → architecture → planning → costing → commercial proposal"
agents:
  - CONSULTANT-IA
  - BUSINESS-ANALYST
  - AI-ARCHITECT
  - CHEF-PROJET-IA
  - FINANCIAL-ANALYST
  - REDACTEUR-IA
deliverables:
  - "Qualified GO/NO-GO grid"
  - "Functional scoping + use cases"
  - "Target architecture (diagram)"
  - "Planning + person-day breakdown"
  - "Costing + pricing + prospect ROI"
  - "Complete technical-commercial proposal"
status: "available"
```

### WF-007 — Client Engagement Onboarding D1-D5
```yaml
id: "WF-007"
name: "Client Engagement Onboarding D1-D5"
domain: "Management & Consulting"
estimated_duration: "45-75 min"
recommended_model: "Sonnet 5"
certifications: ["PMP", "CBAP", "PROSCI"]
usage_context: "Engagement signed → client context → kickoff plan → D1 deliverables → D5 scoping"
agents:
  - CHEF-PROJET-IA
  - BUSINESS-ANALYST
  - CHANGE-MANAGER
  - REDACTEUR-IA
deliverables:
  - "Validated kickoff plan (D1-D5)"
  - "IS map + client processes"
  - "D1 kit delivered (client sheet, deck, plan)"
  - "D5 scoping completed"
  - "D1 minutes"
status: "available"
```

### WF-008 — AI Act / GDPR Compliance Audit
```yaml
id: "WF-008"
name: "AI Act / GDPR Compliance Audit"
domain: "Compliance & Governance"
estimated_duration: "90-150 min"
recommended_model: "Opus 4.8"
model_rationale: "Very-high-stakes regulatory workflow (AI Act risk-tier qualification, multi-article GDPR analysis, threat modeling, AI governance) — a qualification error = exposure to penalties of up to 7% of global revenue under the AI Act"
certifications: ["CIPP/E", "DPO", "ISO 42001", "ISO 27001", "CISSP", "CDMP", "TOGAF 10"]
usage_context: "AI system to audit → obligations mapping → architecture review → security → data → governance → report + remediation plan"
agents:
  - JURIDIQUE-IA
  - AI-ARCHITECT
  - SECURITE-IA
  - DATA-ENGINEER
  - CDO-DIRECTEUR-IA
  - CHANGE-MANAGER
  - REDACTEUR-IA
deliverables:
  - "AI Act / GDPR / NIS2 obligations mapping"
  - "Compliance audit report"
  - "Risk mapping"
  - "Prioritized remediation plan"
  - "Target AI governance (ethics committee, bodies)"
status: "available"
```

### WF-009 — IT/AI Recruitment
```yaml
id: "WF-009"
name: "IT/AI Recruitment"
domain: "HR & Talent"
estimated_duration: "60-90 min"
recommended_model: "Sonnet 5"
certifications: ["SHRM-CP", "CBAP", "PHR", "CIPD L5", "CAP IABAC"]
usage_context: "Need identified → job description → sourcing → assessment → selection → offer"
agents:
  - RH-IA
  - BUSINESS-ANALYST
  - CONSULTANT-IA
  - REDACTEUR-IA
deliverables:
  - "Job description written + anti-bias checklist"
  - "Multichannel sourcing plan"
  - "Technical + behavioral assessment grid"
  - "ATS CV scoring + fraud detection"
  - "Job offer issued + recruitment file"
status: "available"
```

### WF-010 — Project Post-mortem / Lessons Learned
```yaml
id: "WF-010"
name: "Project Post-mortem / Lessons Learned"
domain: "Management & Consulting"
estimated_duration: "45-75 min"
recommended_model: "Sonnet 5"
certifications: ["PMP", "PRINCE2", "PROSCI", "ISTQB"]
usage_context: "Project closed or major incident → collection → root-cause analysis → lessons-learned report → improvement plan"
agents:
  - CHEF-PROJET-IA
  - QA-AGILE
  - CHANGE-MANAGER
  - REDACTEUR-IA
deliverables:
  - "Project timeline + collected facts"
  - "Root-cause analysis (5 Whys / Ishikawa)"
  - "Complete lessons-learned report"
  - "Prioritized improvement plan"
  - "Knowledge-capture memo"
status: "available"
```

---

## Workflow selection grid

```
STEP 1 — What is the main objective?
  ○ Define / scope a product or service          → WF-001
  ○ Plan / steer an Agile delivery               → WF-002
  ○ Build / deploy an AI app                     → WF-003
  ○ Advise / transform a client                  → WF-004
  ○ Communicate / grow the business              → WF-005
  ○ Respond to an RFP / commercial proposal      → WF-006
  ○ Start a client engagement (D1-D5)            → WF-007
  ○ Audit AI Act / GDPR compliance               → WF-008
  ○ Recruit an IT/AI profile                     → WF-009
  ○ Project or incident post-mortem              → WF-010

STEP 2 — Are there specific constraints?
  ○ SAFe / multi-team context                    → WF-002 priority
  ○ Personal data / GDPR                         → Add JURIDIQUE-IA or WF-008
  ○ Short-term delivery (< 1 week)               → Max parallel mode
  ○ Executive-committee report required          → Add CHEF-PROJET-IA
  ○ CAC40 / GAFA / unicorn client                → Opus 4.8 model recommended
  ○ Security incident / LLM vulnerability        → WF-010 + SECURITE-IA
```

---

## New-workflow creation template

```yaml
id: "WF-00X"
name: "[WORKFLOW NAME]"
domain: "[Dev & Technical / Agile & Product / Management & Consulting]"
estimated_duration: "[X-Y min]"
recommended_model: "Sonnet 5"
certifications: []
usage_context: "[Trigger → final result in 1 line]"
agents: []
deliverables: []
workflow_dependencies: []  # If this workflow chains another one
status: "draft"  # draft / available / archived
creation_date: "YYYY-MM-DD"
version: "1.0"
```

## Deliverables
- Complete workflow card (YAML)
- Catalog update
- Updated selection grid

## Output format
Specify: the business goal, the agents to involve, deadline constraints, and client context.

## Anti-patterns
- ❌ **Cataloged workflow with no selection criteria**: you don't know when to use it → selection grid (questions)
- ❌ **Over-specified model/certifications** per workflow: rigidity → recommend, don't impose
- ❌ **No estimated duration or ROI**: impossible to arbitrate → duration range + expected value
- ❌ **Unmaintained catalog** (obsolete workflows): confusion → periodic review
- ❌ **Duplicating near-identical workflows**: maintenance → factor out/parameterize

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — typology of agentic workflows
- **TOGAF 10** (2022) · **SAFe LPM** (Scaled Agile) — workflow portfolio governance

## See also
- [`workflow-design.md`](workflow-design.md) — designing a new workflow
- [`agent-routing.md`](agent-routing.md) — agent selection per workflow
- [`dependency-mapping.md`](dependency-mapping.md) — internal sequencing
- [`workflow-monitoring.md`](workflow-monitoring.md) — catalog KPIs
