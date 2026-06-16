# Skill — Project Scoping Note
> Certifications: HubSpot Content Marketing · Google Digital Garage · PMP (Project Management)

## Objective
Write clear, complete scoping notes that align all stakeholders on a project's scope, objectives, and constraints from the start.

## Definition and role
```
The scoping note is the founding document of a project.
It answers 5 questions:
  WHY    → Business stakes and objectives
  WHAT   → Scope included AND excluded
  WHO    → Stakeholders and roles
  HOW    → Approach and constraints
  WHEN   → Milestones and deadline
```

## Full structure

### Scoping note template
```markdown
# SCOPING NOTE — [Project Name]
**Version**: 1.0 | **Date**: [Date] | **Status**: [Draft / Approved]
**Sponsor**: [Name] | **Project manager**: [Name]

---

## 1. Context and stakes
[Current situation that justifies this project — 2-3 paragraphs]
[Identified problem or opportunity]
[Link to the company strategy]

## 2. Project objectives

### Business objectives (SMART)
| Objective | Indicator | Target | Deadline |
|----------|-----------|-------|----------|
| [Obj 1] | [KPI] | [Value] | [Date] |
| [Obj 2] | [KPI] | [Value] | [Date] |

### Out-of-scope objectives (explicit exclusions)
- [What this project does NOT do — important to avoid scope creep]

## 3. Scope

### In scope
- [Feature / domain / process 1]
- [Feature / domain / process 2]

### Out of scope
- [What is excluded, with a reason if needed]

### Interfaces and dependencies
- [System or team this project interfaces with]

## 4. Stakeholders
| Stakeholder | Role | Expectations | Involvement level |
|-----------------|------|----------|----------------------|
| [Name/Entity] | [Role] | [Expectations] | [High / Medium / Info] |

## 5. Budget and resources

### Estimated budget
| Item | Estimated amount | Notes |
|-------|---------------|-------|
| Internal resources | [€] | [FTE × duration] |
| Contractors | [€] | [Detail] |
| Infrastructure / Licenses | [€] | [Detail] |
| **TOTAL** | **[€]** | |

### Human resources
- [Profile 1]: [Allocated time] — [Name if known]
- [Profile 2]: [Allocated time] — [Name if known]

## 6. Provisional schedule
| Phase | Start | End | Deliverable |
|-------|-------|-----|----------|
| Scoping | [Date] | [Date] | Approved scoping note |
| [Phase 2] | [Date] | [Date] | [Deliverable] |
| [Phase N] | [Date] | [Date] | [Final deliverable] |

## 7. Identified risks
| Risk | Probability | Impact | Mitigation |
|--------|-------------|--------|------------|
| [Risk 1] | [L/M/H] | [L/M/H] | [Preventive action] |
| [Risk 2] | [L/M/H] | [L/M/H] | [Preventive action] |

## 8. Assumptions and constraints

### Assumptions (what we rely on without certainty)
- [Assumption 1: to validate before [date]]
- [Assumption 2]

### Constraints (non-negotiable)
- **Deadline**: [Non-negotiable cutoff date and reason]
- **Budget**: [Maximum envelope]
- **Technical**: [IT / architecture constraint]
- **Regulatory**: [GDPR, security, audit...]

## 9. Project governance
- **Steering committee**: [Members, frequency]
- **Project committee**: [Members, frequency]
- **Reporting**: [Format, recipients, frequency]
- **Decision process**: [Who approves what?]

## 10. Success criteria
- [Measurable criterion 1: how will we know the project succeeded?]
- [Measurable criterion 2]

---

## Signatures and approval
| Role | Name | Date | Signature |
|------|-----|------|-----------|
| Sponsor | | | |
| Project manager | | | |
| [Other approver] | | | |
```

## Writing tips

### Scope: the explicit-exclusions rule
```
A poorly defined scope = the main source of conflict.
For each project, list EXPLICITLY what is excluded.

Examples of typical exclusions:
  "Historical data migration is out of scope for V1"
  "Interfaces with legacy system X will be handled in phase 2"
  "End-user training is not included in this project"
```

### Objectives: the SMART test *(George T. Doran, 1981)*
```
Before approving an objective, apply the test:
  Specific   → "Improve the experience" ❌ vs "Reduce response time" ✅
  Measurable → Which indicator? Which baseline value?
  Achievable → Realistic with the planned resources?
  Relevant   → Aligned with the strategy?
  Time-bound → Which measurement date?
```

## Deliverables
- Scoping note (Word / Confluence / PDF)
- Assumption-tracking dashboard
- Initial risk matrix
- Macro schedule (simplified Gantt)

## Output format
Specify: project name and nature · sponsor · approximate budget · known constraints · main stakeholders · approval deadline

## Anti-patterns
- ❌ **Scope without explicit exclusions** — listing only what's included → scope creep, conflicts over what's "out of scope".
- ❌ **Non-SMART objectives** — "improve the experience" with no indicator, target, or deadline → impossible to measure success.
- ❌ **Forgotten stakeholders** — incomplete mapping → opponents discovered mid-way, blockers.
- ❌ **Untracked assumptions** — building on unvalidated suppositions without making them explicit → drift if they turn out false.
- ❌ **Unsigned scoping note** — no formal sponsor approval → misalignment revealed too late.

## Sources
- **George T. Doran** — *There's a S.M.A.R.T. Way to Write Management's Goals and Objectives*, Management Review, vol. 70, no. 11 (November 1981) — SMART criteria
- **PMI** — *PMBOK Guide, 7th Edition* (2021) — Project Charter, stakeholders
- **PRINCE2 7** — PeopleCert/Axelos (2023) — Project Brief, Business Case
- **Mendelow** — *Stakeholder Mapping* (1991) — stakeholder power/interest matrix

## See also
- [`../business_analyst/cadrage-projet.md`](../business_analyst/cadrage-projet.md) — in-depth MOA project scoping (charter, business case)
- [redaction-rapport.md](redaction-rapport.md) — structured writing of the document
- [presentation-pitch.md](presentation-pitch.md) — project kickoff presentation
- [synthese-executive.md](synthese-executive.md) — summary of the note for the sponsor
