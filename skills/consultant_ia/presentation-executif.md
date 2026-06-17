# Skill — C-level & Executive Committee Presentation
> Certifications: PROSCI · CAP IABAC

## Objective
Prepare and deliver **punchy, decision-oriented presentations** for decision-makers (CEO, CIO, CDO, executive committee, COMEX): go straight to the recommendation, back it with quantified evidence, anticipate objections, and obtain a decision. An executive gives a few minutes of attention: the structure must deliver the conclusion **before** the demonstration.

## Methodological framework
- **Minto Pyramid Principle** (Barbara Minto, *The Pyramid Principle: Logic in Writing and Thinking*, 1987) — structure all communication as a pyramid: **one governing idea at the top**, supported by mutually exclusive and collectively exhaustive (MECE) argument groups. Top-down: the answer first, the details after.
- **SCQA** (Situation – Complication – Question – Answer, Minto) — logical introduction hook:
  - *Situation*: fact known and accepted by the audience.
  - *Complication*: what has changed / the problem calling for action.
  - *Question*: the question that follows in the decision-maker's mind.
  - *Answer*: your recommendation = top of the pyramid.
- **BLUF** (Bottom Line Up Front) — state the conclusion and the requested decision on the very 1st slide.
- **Storytelling with Data** (Cole Nussbaumer Knaflic, Wiley, 2015) — data-viz in service of the message: 1 message per chart, declutter, direct attention (color/contrast), avoid pie charts and misleading axes.
- **Nancy Duarte** (*slide:ology*, *Resonate*) — narration by *what is / what could be* contrast; the audience is the hero, the presenter is the mentor.

## Golden rules for a C-level presentation
1. **1 slide = 1 idea** — no overload.
2. **Start with the conclusion** (BLUF) — executives won't wait for the end.
3. **Quantify everything** — "−30% costs" > "significant improvement"; each figure traced to its assumption.
4. **Anticipate the 3 questions** they will inevitably ask (cost, risk, alternative).
5. **Ask for a decision** — every presentation ends with an explicit "What do you approve?"

## Pyramid structure applied (Minto / SCQA)
```
Situation    → Accepted current context (1 slide)
Complication → Problem or opportunity forcing the decision (1 slide)
Question     → The decision-maker's implicit question (built in)
Answer       → Our recommendation (1 slide) ← top of the pyramid
Arguments    → MECE evidence and details (3-5 slides)
Call to action → Requested decision + next steps (1 slide)
```

## AI executive-committee template (10 slides max)
```
1.  Title + date + attendees
2.  Executive summary / BLUF (3 bullets: context, recommendation, ROI + requested decision)
3.  Context: why AI now?
4.  Current state: where do we stand? (maturity, constraints)
5.  The 3 priority opportunities
6.  Our recommendation (chosen option + why vs alternatives)
7.  Macro roadmap (18 months) + AI Act compliance milestones
8.  Investment and expected ROI (NPV / payback, scenarios)
9.  Risks and mitigation
10. Requested decision + next steps
```

## Tailor to the decision-maker's profile
| Profile | Language | Focus | Main fear |
|---|---|---|---|
| **CEO** | Business, impact | ROI, competitive advantage | Reputational risk |
| **CIO** | Technical, integration | Architecture, security | Technical debt |
| **CDO** | Data, AI | Maturity, governance | Data quality |
| **CHRO** | People, change | Adoption, training | Team resistance |
| **CFO** | Costs, ROI | TCO, business case | Budget overrun |

## Example — Executive-committee presentation, insurance / mutual sector (anonymized)
**Context**: health mutual (~3,200 employees). Topic: recommend launching an AI assistant to support claims handling. Time allotted: 20 min, decision = Phase 1 budget approval.
- **Slide 2 (BLUF)**: "We recommend investing €0.6M over 12 months in an AI claims-handling assistant — estimated payback 16 months, subject to AI Act compliance. Requested decision: approval of the Phase 1 budget."
- **SCQA**: *Situation* — claims-handling times rising; *Complication* — volume +18%, member satisfaction declining; *Question* — how to absorb it without extra HR cost? ; *Answer* — AI assistant on simple claims.
- **Anticipation of the 3 questions**: "What about AI Act compliance / health data?", "What happens to the handlers?", "Why not a market solution?" → answers prepared in Q&A.

> **Illustrative** figures: to be recalibrated on the real business case.

## Anti-patterns
- **"Tunnel" / suspense effect**: keeping the conclusion for the end → the decision-maker disengages.
- **Text-overloaded slides**: people read instead of listening; the presenter becomes useless.
- **Decorative or misleading charts**: 8-slice pie charts, truncated axes (see Knaflic) → loss of credibility.
- **Technical jargon in front of a CEO/CFO**: tailor the language to the profile (table above).
- **No requested decision**: a "for information" presentation that moves nothing forward.
- **Untraceable figures**: an ROI with no documented assumption gets demolished in the room.
- **No plan B**: not having anticipated the alternative (build vs buy, do nothing).

## Deliverables
- Deck (PowerPoint / Google Slides), 10 slides max, pyramid structure
- Presentation notes (1 page per slide)
- One-pager summary / BLUF (for those absent)
- Anticipated Q&A (10 questions / answers, including the 3 inevitable ones)

## Output format
Specify: target audience (CEO, CIO, executive committee…) · topic · time allotted · **expected decision** · level of formality.

## Sources
- **Minto B.** — *The Pyramid Principle: Logic in Writing and Thinking* (1987) — MECE pyramid structure + SCQA
- **Nussbaumer Knaflic C.** — *Storytelling with Data: A Data Visualization Guide for Business Professionals*, Wiley (2015)
- **Duarte N.** — *slide:ology* and *Resonate* — narration and presentation design
- **BLUF concept** (Bottom Line Up Front) — executive communication practice (origin: US military communication)

## See also
- [estimation-roi-rapide.md](estimation-roi-rapide.md) — costing of the ROI presented to the executive committee
- [feuille-route-ia.md](feuille-route-ia.md) — macro roadmap of slide 7
- [proposition-commerciale.md](proposition-commerciale.md) — executive summary of an offer (same pyramid logic)
- [diagnostic-maturite-ia.md](diagnostic-maturite-ia.md) — current state of slide 4
- [`../chef_projet_ia/reporting-codir.md`](../chef_projet_ia/reporting-codir.md) — recurring executive-committee reporting (delivery tracking)
- [`../redacteur_ia/storytelling-ia.md`](../redacteur_ia/storytelling-ia.md) — storytelling and narration
- [`../ux_design/storytelling-stakeholders.md`](../ux_design/storytelling-stakeholders.md) — stakeholder pitch and storytelling
