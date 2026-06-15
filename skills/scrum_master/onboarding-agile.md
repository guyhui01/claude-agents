# Skill — Agile Onboarding (Scrum Master)
> Certifications: PSM I · CSM (Certified Scrum Master) · ICAgile ICP-ATF · SAFe Scrum Master

## Objective
Design and roll out an Agile onboarding program that quickly integrates new team members into the Scrum culture, practices and tools.

## Onboarding in 3 phases

### Phase 1 — Before day one (D-7 to D-1)
```
PRE-ONBOARDING CHECKLIST:
  ☐ Tool access created (Jira, Confluence, GitHub, Slack)
  ☐ Invitation to the first sprint's Scrum events
  ☐ Buddy assigned from among the team members
  ☐ Welcome kit sent (links, guides, glossary)
  ☐ First SM/newcomer 1-on-1 scheduled on D+1

WELCOME KIT (contents):
  → Product vision (Product Vision Board)
  → The team's Scrum setup (who does what)
  → Current backlog + current Sprint Goal
  → The team's Working Agreement
  → Domain glossary (if a specialized domain)
  → Tool links and access
```

### Phase 2 — Week 1: Discovery
```
D+1 (1h) : SM 1-on-1 → welcome, questions, mutual expectations
D+1 (2h) : Team tour (introductions + roles + product context)
D+2      : Shadow the events (observe without actively participating)
D+3      : Jira/Confluence deep-dive with the Buddy
D+4      : First contribution (simple ticket, paired with the Buddy)
D+5      : Onboarding retro (week-1 feedback)

Week-1 goal: Understand without the pressure to produce
```

### Phase 3 — Weeks 2-4: Progressive integration
```
Week 2: Actively participate in the events
        Contribute to 2-3 simple US
        Meet the key stakeholders

Week 3: Autonomy on assigned US
        Speak up at the Daily
        Propose 1 idea in the retro

Week 4: Full integration into the team's velocity
        30-day review (SM + PO + Buddy)
        Personal development plan
```

## Agile onboarding program

### Initial training (2h on D+2)
```
MODULE 1 — Scrum fundamentals (45 min)
  → The 3 pillars: Transparency, Inspection, Adaptation
  → The 5 Scrum values: Courage, Focus, Commitment, Respect, Openness
  → The 3 accountabilities: SM, PO, Developers
  → The 5 events: Sprint, Planning, Daily, Review, Retro

MODULE 2 — Our way of working (45 min)
  → The team's workflow (from "To Do" to "Done")
  → Definition of Ready and Definition of Done
  → Git branch naming rules
  → Code review process (PR, checklist)

MODULE 3 — Tools (30 min)
  → Jira: columns, filters, sprint board
  → Confluence: structure of the team space
  → Slack: channels and etiquette
  → GitHub/GitLab: branch workflow
```

### Working Agreement (founding document)
```markdown
# Collaboration Agreement — Team [Name]
Approved on: [Date] | Revised at each quarterly retro

## How we work
- Core hours: 9am-5pm (guaranteed presence for collaboration)
- Daily: 9:30am — 15 min max, standing, no problem-solving in session
- Pull Requests: review within 4h during core hours
- Jira tickets: updated at the end of each day

## Communication
- Technical questions: #tech channel (no private DMs by default)
- Emergencies: @channel if blocked for > 2h
- Important decisions: documented in Confluence, not just Slack

## Meetings
- Any meeting > 30 min: agenda sent 24h in advance
- Two-feet rule: you can leave if you're not adding value
- No meetings between 12pm and 2pm (protected slot)

## Quality
- No merge without a peer review
- Minimum coverage: 80% (checked in CI)
- Prod bug = systematic post-mortem (blame-free)
```

## 30-60-90 day plan

### Individual template
```
30 DAYS — Understand
  ☐ Know the team members and their expertise
  ☐ Understand the product and the end users
  ☐ Master the tools and the workflow
  ☐ Deliver 3-5 simple US autonomously
  KPI: onboarding score > 7/10 (self-assessment)

60 DAYS — Contribute
  ☐ Contribute to velocity at 70% of a senior
  ☐ Do at least 1 code review per day
  ☐ Propose an improvement in the retro
  ☐ Master the team's business domain
  KPI: Buddy + SM satisfaction > 7/10

90 DAYS — Perform
  ☐ Individual velocity on par with peers
  ☐ Able to run the Daily in the SM's absence
  ☐ Contribute to Refinement (questions, slicing)
  ☐ Identify and remove their own impediments
  KPI: full integration in the 90-day retro
```

## Onboarding metrics
| Indicator | Target |
|---|---|
| Time-to-first-commit | < 3 days |
| Time-to-first-US-delivered | < 7 days |
| 30-day satisfaction (1-10) | ≥ 7 |
| 90-day satisfaction (1-10) | ≥ 8 |
| Turnover during the trial period | 0% |

## Deliverables
- Personalized welcome kit
- Structured onboarding program (3 phases)
- Team Working Agreement
- Individual 30-60-90 day plan
- Integration review (30 and 90 days)

## Output format
Specify: team size · business domain · tools in place · the team's Agile maturity level · type of profile being onboarded (tech, product, QA...)
