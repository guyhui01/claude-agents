# WF-005 — Strategic Intelligence & Growth

> Market signal / weekly cadence → qualified synthesis → thought-leadership content → publication  
> Certifications mobilized: SIC (SCIP) · HubSpot Content Marketing · Google Analytics · PMI-ACP

---

## Identity card

```yaml
id: "WF-005"
nom: "Strategic Intelligence & Growth"
domaine: "Management & Consulting"
declencheur: "Weekly / monthly cadence or detected market signal"
resultat_final: "Qualified intelligence synthesis + thought-leadership content ready to publish"
duree_estimee: "30-60 min"
modele_recommande: "claude-sonnet-4-6"
modele_raison: "Light workflow: 3 agents, collection, qualification, and editorial writing tasks. Sonnet 4.6 is sufficient and optimal — speed and controlled cost for a weekly cadence."
modele_alternatif: "claude-opus-4-8"  # if an in-depth monthly strategic synthesis with PESTEL trend analysis
agents_core:
  - VEILLE-STRATEGIQUE   # collection, qualification, intelligence synthesis
  - GROWTH-IA            # content strategy, SEO, acquisition
  - REDACTEUR-IA         # writing and adaptation of publication formats
agents_optionnels:
  - JURIDIQUE-IA         # if contractual verification or compliance is required
  - FINANCIAL-ANALYST    # if scoring of engagement opportunities
  - CONSULTANT-IA        # if in-depth analysis of a strategic signal
statut: "disponible"
version: "1.1"
```

---

## Agents mobilized

| Step | Agent | Role in the workflow | Output |
|---|---|---|---|
| 1 | VEILLE-STRATEGIQUE | Collection, filtering, signal qualification | Qualified intelligence radar |
| 2 | GROWTH-IA | Distribution strategy, editorial calendar | Content plan + SEO |
| 3 | REDACTEUR-IA | Synthesis writing + LinkedIn posts | Content ready to publish |
| opt | JURIDIQUE-IA | Contractual clause or compliance verification | Legal note |
| opt | FINANCIAL-ANALYST | Scoring of identified engagement opportunities | Engagement scoring table |

---

## Contextual parameters

```
INTELLIGENCE CONTEXT (to fill in before starting)
──────────────────────────────────────────────────────
Target format      : [Weekly flash / Monthly synthesis / LinkedIn post / Strategic note]
Intelligence scope : [AI/LLM / AI consulting / Job market / Regulatory / Tech stack]
Audience           : [Public LinkedIn / Client newsletter / Personal network / Internal use]
Tone               : [Technical expert / Plain-language / Thought leader / Neutral]
Horizon            : [3 months / 12 months / 3 years]
Sources to prioritize: [ArXiv / GitHub / LinkedIn / RFP / Trade press]
Opportunity focus  : [CAC40 engagements / Training / Partnerships / Positioning]
```

---

## BPMN flow diagram

```
(START — Weekly cadence / detected signal)
        │
        ▼
[STEP-01 — VEILLE-STRATEGIQUE]
  Multi-source collection,
  3-criteria SCIP filtering,
  weak/strong signal qualification
        │
        ▼
<GATEWAY — Strong signal identified with an engagement opportunity?>
  ├── YES ──▶ [STEP-01B — FINANCIAL-ANALYST] (optional)
  │            Opportunity scoring, estimated engagement ROI
  └── NO ───▶ (bypass)
        │
        ▼
[STEP-02 — GROWTH-IA]
  Distribution strategy,
  channel selection (LinkedIn / newsletter / blog),
  weekly/monthly content plan
        │
        ▼
[STEP-03 — REDACTEUR-IA]
  Writing:
  - Intelligence synthesis (target format)
  - LinkedIn post(s) ready to publish
  - Internal note if applicable
        │
        ▼
<GATEWAY — Contractual or compliance verification required?>
  ├── YES ──▶ [STEP-04 — JURIDIQUE-IA]
  │            Clause verification, compliance note
  └── NO ───▶ (bypass)
        │
        ▼
(END — Content validated, ready to publish)
```

---

## Detailed steps

### STEP-01 — VEILLE-STRATEGIQUE

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-VEILLE-STRATEGIQUE"
  role: "Collection and qualification of intelligence signals"
  input:
    - "Intelligence scope: [domains to monitor]"
    - "Sources available this week"
    - "Context: recent signals already identified"
    - "Focus horizon: [short / medium / long term]"
  output_attendu:
    - "Top 5 highlights ranked by impact (High / Medium / Low)"
    - "Weak-signal radar: emerging opportunities"
    - "1-2 tools or technologies to monitor / test"
    - "PESTEL trend analysis if monthly synthesis"
    - "Identified engagement opportunities with qualification"
  condition_passage: "Signals qualified and ranked before writing"
  duree_estimee: "15-20 min"
  execution: "sequential — opens the workflow"
```

### STEP-02 — GROWTH-IA

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-GROWTH-IA"
  role: "Content strategy and distribution plan"
  input:
    - "Qualified signals and highlights (STEP-01)"
    - "Target audience and available channels"
    - "Growth objectives: awareness / engagement / engagement leads"
    - "Existing editorial calendar"
  output_attendu:
    - "Selection of topics to cover this week (1-3 max)"
    - "Recommended format per topic (LinkedIn post / article / newsletter)"
    - "Editorial angle and hook for each piece of content"
    - "Hashtags and mentions to use (LinkedIn SEO)"
    - "Best publication timing (day / time)"
  duree_estimee: "10 min"
  execution: "sequential after STEP-01"
```

### STEP-03 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-REDACTEUR-IA"
  role: "Writing of the intelligence content"
  input:
    - "Qualified signals (STEP-01)"
    - "Content strategy and editorial angles (STEP-02)"
    - "Target format: [weekly flash / monthly / LinkedIn / internal note]"
    - "Tone: [expert / plain-language / thought leader]"
  output_attendu:
    - "Intelligence synthesis in the requested format (Markdown)"
    - "1-3 LinkedIn posts ready to copy-paste"
    - "Internal note if executive-committee / newsletter use"
    - "Quote of the week for engagement"
  duree_estimee: "15 min"
  execution: "sequential after STEP-02"
```

### STEP-04 — JURIDIQUE-IA (optional)

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-JURIDIQUE-IA"
  condition_activation: "Contractual verification or content with legal implications"
  role: "Compliance and contractual-clause verification"
  input:
    - "Written content (STEP-03)"
    - "Contractual document to verify (if applicable)"
    - "Specific compliance question"
  output_attendu:
    - "Verification note (green / amber / red)"
    - "GDPR / AI Act points of attention if applicable"
    - "Recommended changes to the content"
  duree_estimee: "10 min"
  execution: "sequential — optional before publication"
```

---

## Content templates — Format reminders

### Weekly flash (20 min of writing)

```markdown
# AI INTELLIGENCE — Week [N] — [DATE]
*By Guy HUI-BON-HOA | 5 min read*

## The highlight
**[CATCHY TITLE]**
[3-4 lines. Source: [LINK]]
→ What it changes: [concrete implication]

## 3 news items to remember
1. **[NEWS 1]** — [Source] — Impact: High/Medium/Low
2. **[NEWS 2]** — [Source] — Impact: ...
3. **[NEWS 3]** — [Source] — Impact: ...

## 1 tool to try
**[NAME]** — [1-line description]
Use case: [How to use it concretely]

## Quote of the week
*"[QUOTE]"* — [Author]
```

### LinkedIn post (hook + analysis)

```
🔍 AI INTELLIGENCE — [TOPIC]

[Punchy 1-line hook]

[2-3 short paragraphs — facts + analysis]

💡 What it means for product teams:
→ [Implication 1]
→ [Implication 2]
→ [Implication 3]

Have you experienced this? Share in the comments 👇

#AI #ProductManagement #GenAI #Claude #SAFe #Anthropic
```

---

## Final deliverables

```
WF-005 CHECKLIST
──────────────────────────────────────────────────────
□ Top 5 qualified highlights (High/Medium/Low)
□ Weak-signal radar (emerging opportunities)
□ Intelligence synthesis in the requested format (weekly or monthly)
□ 1-3 LinkedIn posts ready to publish
□ Publication plan (channels + timing)
□ [optional] Legal / compliance note
□ [optional] Engagement-opportunity scoring
```

---

## Recommended cadence

| Frequency | Format | Main agent | Time |
|---|---|---|---|
| Monday morning | Weekly flash + 1 LinkedIn post | VEILLE-STRATEGIQUE + REDACTEUR-IA | 30 min |
| 1st of the month | Full monthly synthesis | Full WF-005 workflow | 60 min |
| On a strong signal | Quick strategic note | VEILLE-STRATEGIQUE + CONSULTANT-IA | 20 min |
| Quarterly | In-depth trend analysis | VEILLE-STRATEGIQUE + CDO-DIRECTEUR-IA | 90 min |

---

## Quick-start command

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on the orchestrator role.
Confirm you are ready, then load workflow WF-005 from workflows/WF-005-veille-growth.md.

Intelligence context:
- Target format: [Weekly flash / Monthly synthesis / LinkedIn post]
- Scope: [AI/LLM / AI consulting / Market / Regulatory]
- Audience: [LinkedIn / Newsletter / Internal]

Launch STEP-01 with AGENT-VEILLE-STRATEGIQUE.
```
