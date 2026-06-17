# Skill — Stakeholder Management
> Certifications: PMP (PMI 2026), PRINCE2 Practitioner, Prosci Change Management Certified, ADKAR Practitioner
> Agent: AGENT-CHEF-PROJET-IA.md
> Frameworks: **Mendelow matrix** power/interest (1991) · **PROSCI ADKAR** (Hiatt 2006) · **PMBOK 7** (stakeholder engagement) · Kotter / change management coupling

## Objective
Identify, analyze, and engage all the stakeholders of an AI project — using the influence/interest matrix, a tailored communication plan, and ADKAR change-management techniques to maximize adoption.

## Stakeholder Mapping

### Influence / Interest Matrix

```python
# stakeholder_matrix.py
from dataclasses import dataclass, field
from typing import Literal

Quadrant = Literal["MANAGE_CLOSELY", "KEEP_SATISFIED", "KEEP_INFORMED", "MONITOR"]

@dataclass
class Stakeholder:
    name: str
    role: str
    influence: int    # 1-5
    interest: int     # 1-5
    current_stance: Literal["CHAMPION", "SUPPORTIVE", "NEUTRAL", "RESISTANT", "BLOCKER"]
    key_concerns: list[str] = field(default_factory=list)
    engagement_strategy: str = ""

    @property
    def quadrant(self) -> Quadrant:
        if self.influence >= 3 and self.interest >= 3:
            return "MANAGE_CLOSELY"     # Manage closely — key partners
        elif self.influence >= 3 and self.interest < 3:
            return "KEEP_SATISFIED"     # Keep satisfied — uninvolved decision-makers
        elif self.influence < 3 and self.interest >= 3:
            return "KEEP_INFORMED"      # Keep informed — users, experts
        else:
            return "MONITOR"            # Monitor — peripheral

    @property
    def priority_score(self) -> int:
        return self.influence * self.interest


def generate_engagement_plan(stakeholders: list[Stakeholder]) -> str:
    """Generate a prioritized engagement plan."""
    sorted_shs = sorted(stakeholders, key=lambda x: x.priority_score, reverse=True)

    plan = ["# Stakeholder Engagement Plan\n"]
    for sh in sorted_shs:
        plan.append(f"## {sh.name} ({sh.role})")
        plan.append(f"- Quadrant: **{sh.quadrant}**")
        plan.append(f"- Current stance: {sh.current_stance}")
        plan.append(f"- Key concerns: {', '.join(sh.key_concerns)}")
        plan.append(f"- Strategy: {sh.engagement_strategy}\n")
    return "\n".join(plan)


# AI project example
stakeholders = [
    Stakeholder("Marie D.", "CIO", 5, 4, "SUPPORTIVE",
        ["Data security", "Compliance", "Infrastructure ROI"],
        "Monthly Steering Committee, direct access in case of critical risk"),
    Stakeholder("Jean P.", "Chief Sales Officer", 5, 5, "CHAMPION",
        ["Conversion rate", "Adoption by sales reps"],
        "Co-sponsor, present at every demo, internal testimonial"),
    Stakeholder("Sophie L.", "DPO", 4, 5, "NEUTRAL",
        ["GDPR", "DPIA", "Data minimization", "Individuals' rights"],
        "Dedicated workshop W1, monthly review, DPIA draft provided in W2"),
    Stakeholder("Sales Team", "End users", 2, 4, "RESISTANT",
        ["Workload", "Fear of being replaced", "Tool complexity"],
        "Co-design workshops W3, dedicated training, internal champion identified"),
]
```

### Communication Plan

```yaml
# communication_plan.yaml
communications:
  - audience: "Steering Committee (CIO, executive mgmt, Sponsor)"
    format: "One-pager + 15 min presentation"
    frequency: "Monthly"
    channel: "In-person meeting"
    content: "RAG status, EVM, escalated risks, required decisions"
    owner: "PM"

  - audience: "Project Team"
    format: "Daily standup (15 min)"
    frequency: "Daily"
    channel: "Teams / in-person"
    content: "Progress, blockers, dependencies"
    owner: "Scrum Master"

  - audience: "Sprint Review"
    format: "Demo + feedback (1h)"
    frequency: "Bi-weekly"
    channel: "In-person + recording"
    content: "Demos of delivered features, user feedback"
    owner: "PO"

  - audience: "DPO + Legal counsel"
    format: "Compliance review (45 min)"
    frequency: "Per sprint"
    channel: "Dedicated meeting"
    content: "DPIA progress, new features to validate"
    owner: "PM + Data Scientist Lead"

  - audience: "End users (sales team)"
    format: "Project newsletter (email)"
    frequency: "Monthly"
    channel: "Email + intranet"
    content: "Progress, expected benefits, how to take part in testing"
    owner: "Change Manager"
```

## Change Management — ADKAR Model

### Applying ADKAR to the AI project

```
ADKAR — Change "Adoption of AI Scoring by the sales team"

A — AWARENESS (Awareness of the change)
   Actions: CIO + executive mgmt communication at kickoff
   Message: "AI will prioritize your leads — you'll save 30% of your time"
   Channel: All-hands meeting, newsletter, video from the exec sponsor
   Timeline: W1-W2
   Measure: 90% of the team aware the tool is coming (survey)

D — DESIRE (Desire to change)
   Actions: Co-design workshops with sales-rep ambassadors
   Message: "You co-designed this tool — your feedback was incorporated"
   Channel: Workshops, champion testimonials
   Timeline: W3-W5
   Measure: 75% want to use the tool (survey)

K — KNOWLEDGE (Knowing how to change)
   Actions: 2h training + simple user documentation
   Message: "3 clicks to see your score and the reasons"
   Channel: E-learning, quick start guide, short videos
   Timeline: W10-W11
   Measure: 80% trained, quiz score > 80%

A — ABILITY (Ability to change)
   Actions: 4-week hypercare support post go-live
   Message: "Support available — feedback reviewed every week"
   Channel: Dedicated Slack, weekly office hours, living FAQ
   Timeline: W13-W17
   Measure: Usage rate > 60% by week 4

R — REINFORCEMENT (Reinforcement)
   Actions: Sharing successes (leads converted thanks to scoring)
   Message: "Team A increased its conversion rate by 18% in 1 month"
   Channel: Newsletter, team meeting, gamification
   Timeline: W17+
   Measure: Stable usage rate > 80% at M+3
```

### Conflict & Resistance Management

```
RESISTANCE LEVEL        RECOMMENDED APPROACH
────────────────────────────────────────────────────────────
Questioning             Active listening, answering objections
(normal)                Expression workshop, structured Q&A

Moderate opposition     Identify the deep concerns
(concern)               1:1 with the direct manager, involve in testing

Active resistance       Three-way meeting (sponsor + person + PM)
(blocking)              Escalate if needed, alternative plan

Sabotage                Escalate to the sponsor, HR arbitration if needed
(rare)                  (Situation to avoid with good ADKAR)
```

## Deliverables
- Stakeholder register (mapping, stance, engagement plan)
- Influence/interest matrix (visual 2x2 format)
- Full communication plan per audience
- ADKAR plan for the impacted populations
- Post go-live adoption report (weeks 1, 4, 12)
- Conflict resolution template

## Output format
Specify: number and type of stakeholders, impacted transformation (business process, tool, organization), size of the impacted population, the team's ADKAR experience, company culture (top-down / participative), timeframe for the change.

## Anti-patterns
- ❌ **Static mapping**: the influence/interest matrix must be revised (stances evolve)
- ❌ **Uniform communication**: the same message for the exec sponsor and the end user (≠ needs)
- ❌ **Skipping an ADKAR step**: training (K) without having created desire (D) → adoption that fails
- ❌ **Ignoring resistance** instead of addressing it (untreated resistance becomes sabotage)
- ❌ **Confusing Mendelow and RACI**: power/interest (engagement) ≠ responsibilities (execution)
- ❌ **Measuring adoption only at go-live**: track L1→L4 (awareness → reinforcement at M+3)

## Sources
- **Mendelow A.L.** — power/interest matrix (*Proc. ICIS*, Cambridge MA, 1991)
- **Hiatt J.** — *ADKAR: A Model for Change* (Prosci Research, 2006)
- **PMBOK 7** (PMI 2021) — "Stakeholders" performance domain
- **Kotter J.** — *Leading Change* (HBR Press, 1996) — change management coupling

## See also
- [`cadrage-projet-ia.md`](cadrage-projet-ia.md) — initial stakeholder matrix
- [`reporting-codir.md`](reporting-codir.md) — communication tailored per audience
- [`../change_manager/`](../change_manager/) — in-depth change management (PROSCI/Kotter)
- [`../scrum/stakeholder-map.md`](../scrum/stakeholder-map.md) — mapping on the product side
- [`../juridique_ia/politique-ia-entreprise.md`](../juridique_ia/politique-ia-entreprise.md) — AI adoption & Works Council
