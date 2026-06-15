# Skill — Product Backlog Management

> Certification: PSPO I · PSPO II
> Agent: AGENT-PO-SCRUM.md

## Objective

Keep a **living, ordered, just-detailed-enough** Product Backlog that serves as the single source of truth between the PO, the team and stakeholders — without becoming a pile of stale tickets.

> 🔗 For **prioritization** (MoSCoW, RICE, Kano…): see `priorisation-techniques.md`
> 🔗 For **slicing by user journey**: see `story-mapping.md`

## Hierarchical structure

```
Product Vision
   └── Product Goal (Sprint Goal accumulated over 1-3 months)
         └── Epics (large functional chunks, 2-3 months)
               └── Features (coherent deliverable lots, 2-4 sprints)
                     └── User Stories (deliverable within 1 sprint)
                           └── Technical tasks (person-days)
```

### Depth rules

| Horizon | Expected level of detail |
|---|---|
| **Current sprint** | Full US, DoR validated, AC written, estimated |
| **Sprint N+1** | US identified, DoR to validate in refinement |
| **2-3 months** | Features decomposed, US sketched |
| **> 3 months** | Epics only, value intentions |

> 💡 **Anti-pattern**: having 200 detailed US in the backlog → 80% will become obsolete.

## Definition of Ready (DoR) — sprint-entry checklist

A User Story is ready to enter a sprint if:

- [ ] **I**ndependent (or dependencies made explicit and resolved)
- [ ] **N**egotiable (not a frozen contract, the conversation stays open)
- [ ] **V**aluable (clear business or user value)
- [ ] **E**stimable (the team can give a rough order of magnitude)
- [ ] **S**mall (deliverable within the sprint, max 1/3 of team capacity)
- [ ] **T**estable (acceptance criteria written and understandable)
- [ ] UX mockup available if relevant
- [ ] Technical / API dependencies identified
- [ ] Required data accessible (test dataset)

## Estimation — the PO's role

The PO **does not estimate**: they clarify the US, answer the team's questions during the workshop and ensure the DoR is valid so estimation can happen. The Dev team estimates collectively, the Scrum Master facilitates.

**Reference method: Planning Poker (Fibonacci 1, 2, 3, 5, 8, 13, 21, ?, ∞).**

> 🔗 Facilitation details + alternatives (T-shirt, #NoEstimates, Affinity, Magic Estimation, Bucket System) + SAFe adaptation + remote tools: see `skills/scrum_master/planning-poker.md`

## Backlog Refinement (Grooming)

### Cadence and format

| Parameter | Recommendation |
|---|---|
| Frequency | 1× per sprint (mid) — or 2× for a junior team |
| Max duration | 10% of the sprint (1h for a 2-week sprint) |
| Participants | PO + full team + Scrum Master |
| PO prep | 30 min beforehand to propose the US to refine |

### Typical agenda (1h)

1. **Backlog overview** (5 min) — state of the upcoming sprints
2. **Clarify priority US** (30 min) — team questions → PO
3. **Planning Poker estimation** (15 min) — on 3-5 US
4. **Identify dependencies/risks** (5 min)
5. **DoR validation** (5 min) — which US move to "Ready"

### Expected output

After refinement: **2 sprints ahead** with DoR validated for the PO.

## Backlog health checklist (monthly review)

- [ ] **Ordered** by priority (a single order, not "all Must-Have")
- [ ] **2 sprints ahead** with DoR validated
- [ ] **Obsolete US archived** ("Rejected" status with a reason)
- [ ] **Cross-team dependencies traced** (custom field or label)
- [ ] **Estimates up to date** (no US older than 3 months without a re-challenge)
- [ ] **Epics linked to Product Goals** (value traceability)
- [ ] **Tech-debt / value ratio**: 15-20% of capacity reserved for debt
- [ ] **Last review documented**: [date]

## Quarterly Roadmap template

```
QUARTER Q[X] — Product Goal: [measurable objective]

Sprint N      | [Feature 1]       | [Feature 2]      | [Debt]
Sprint N+1    | [Feature 3]       | [Feature 4]      | [R&D Spike]
Sprint N+2    | [Feature 5]       | [Polish R1]      | [Debt]
Sprint N+3    | RELEASE 1 stabilized — exec demo

Target KPIs (Outcome):
  - [Metric 1]: [baseline] → [target]
  - [Metric 2]: [baseline] → [target]

Hypotheses validated by end of quarter:
  - [Hypothesis 1]: yes / no / partially
  - [Hypothesis 2]: yes / no / partially
```

## Recommended management tools

| Context | Tool |
|---|---|
| Team < 10, simple | Linear, Notion, Trello |
| Mid-market, classic Scrum | Jira Cloud, Azure DevOps |
| SAFe Program | Jira Align, Targetprocess |
| Persistent visual Story Map | Avion, StoriesOnBoard, Miro |

## Anti-patterns

- ❌ Backlog = dumping ground for every idea → it will never be cleaned up
- ❌ PO as sole manager → lack of team visibility
- ❌ US detailed 6 months ahead → guaranteed obsolescence
- ❌ No DoR → planning poker impossible, chaotic sprint
- ❌ Refinement cancelled for "lack of time" → cumulative clarification debt
- ❌ More than 50% of the backlog at "High" priority → prioritization didn't happen

## Deliverables

- Ordered, refined backlog in the tool (Jira / Linear / Notion)
- Refinement notes (US discussed, decisions, open points)
- Visual quarterly roadmap (1-page exec-ready)
- Backlog health note (monthly, 1 page) with KPIs and actions

## Output format

Specify: **target tool** (Jira / Linear / Notion / other), **horizon** (current sprint / quarter / half-year), **level of detail** (Epics only / Features / full US), **expected deliverable** (backlog import, visual roadmap, health note).
