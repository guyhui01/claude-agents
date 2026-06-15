# Skill — Planning Poker (collective estimation)

> Certification: PSM I · PSM II · CSM · A-CSM · SAFe SSM · SAFe SASM · ICAgile ICP-ATF
> Agent: AGENT-SCRUM-MASTER.md (facilitation) — used in collaboration with AGENT-PO-SCRUM.md (preparation) and AGENT-PO-SAFE.md (PI Planning)

## Objective

Run a rigorous Planning Poker session that lets the Scrum team estimate its User Stories in story points (Fibonacci), using **collective intelligence** to avoid biases (anchoring, HiPPO) and quickly converging toward a defensible consensus.

> 🔗 For overall backlog management: see `skills/scrum/po-backlog.md`
> 🔗 For US splitting (Feature → Story in SAFe): see `skills/safe/feature-to-story-splitting.md`

## Origin and principles

- Invented by **James Grenning (2002)**, popularized by **Mike Cohn / Mountain Goat Software**
- Based on the **Wideband Delphi method** (anonymity + convergence)
- 3 key principles:
  1. **Collective estimation** by the whole Dev team (not the PO alone)
  2. **Simultaneous vote** (cards revealed at the same time → anti-anchoring)
  3. **Discussion of the gaps** (collective intelligence that surfaces the unsaid)

## Fibonacci cards — Official sequence

| Card | Meaning | Typical use |
|---|---|---|
| **0** | Already done / no effort | Rare, US already covered by another |
| **1, 2, 3** | Small US | High sprint capacity, smooth |
| **5, 8** | Medium US | Core of the refined backlog |
| **13** | Large US | To watch — challenge the decomposition |
| **21, 40, 100** | US too big | Must be split |
| **? (question mark)** | Not enough info | Needs PO clarification |
| **∞ (infinity)** | Impossible to estimate | Likely needs a Spike |
| **☕ (coffee)** | Break requested | Team fatigue signal |

### Why Fibonacci (not 1-10)?

The **non-linear** gap forces the team to acknowledge that **the bigger a US, the greater the uncertainty**:
- Between 2 and 3 SP: precision is possible
- Between 13 and 21 SP: major uncertainty, better to split

---

## Facilitation procedure (30-90 min for 5-10 US)

### Preparation (before the session)

| Item | Owner | Detail |
|---|---|---|
| Refined backlog | **PO** | DoR validated for the US to estimate |
| Cards (physical or tool) | **Scrum Master** | Decks for each participant |
| Room / remote tool | **Scrum Master** | See "Remote facilitation" section |
| Reference of already-estimated US | **Scrum Master** | At least 5 past US as "calibration anchors" |

### Flow for one estimated US (5-10 min)

1. **Presentation by the PO** (1-2 min) — statement + AC + business value
2. **Clarifying questions** (1-3 min) — team questions the PO
3. **Individual, secret vote** (30 s) — each picks their card, face down
4. **Simultaneous reveal** (5 s) — facilitator says "1-2-3 reveal!"
5. **Discuss the gaps** if > 2 Fibonacci steps between min and max (2-5 min)
   - The **lowest** explains why it's simple
   - The **highest** explains why it's complex
   - Don't seek the average, seek **shared understanding**
6. **Re-vote** until convergence (max 3 rounds, then arbitration)

### Expected output

- Backlog estimated in story points
- List of US > 13 SP to split
- Spikes identified (US voted "?" or "∞")
- Open questions documented (field "Open points")

---

## Anchor US reference (calibration)

Before the first Planning Poker, the team collectively chooses **5 already-delivered US** as reference anchors:

```
CALIBRATION ANCHORS — Sprint 12

US "Add a simple 'Export PDF' button"               → 2 SP
US "Refactor the pricing component"                 → 3 SP
US "Integrate a new payment provider"               → 5 SP
US "Migrate the customer module to the new API"     → 8 SP
US "Redesign the sign-up journey UX"                → 13 SP
```

These anchors serve as a **relative reference**: does the new US to estimate look more like "5 SP" or "8 SP" among the anchors?

> 💡 Re-calibrate the reference **every 3-4 months**: the team's maturity evolves.

---

## Remote facilitation

### Dedicated tools (free or freemium)

| Tool | Type | Advantages | Limits |
|---|---|---|---|
| **Planning Poker Online** (planningpokeronline.com) | Web | Simple, free, no sign-up | Basic UX |
| **Scrum Poker** (scrumpoker.online) | Web | Per-participant stats, Jira integration | Freemium beyond 5 participants |
| **Miro / Mural** (Planning Poker template) | Whiteboard | Visual capture, parallel sticky notes | No native secret vote |
| **Discord / Slack** (Pluralsight bot, Geekbot) | Chat | Async possible | No anti-anchoring (chat visible) |
| **Visual Studio Code** (Pointing Poker extension) | IDE | Devs already in VSCode | Unsuitable for non-tech |

### Remote facilitation rules

- 🎥 **Cameras on** during the voting phase (engagement)
- 🔇 **Muted by default** except when speaking
- ⏱️ **Visible timer** on the shared screen (Pomodoro 25 min)
- ✋ **Hand-raise system** to avoid interrupting
- 📊 **Final capture**: JSON/CSV export from the tool + screenshot

### Hybrid format (on-site + remote)

- 1 dedicated facilitator for the remote side (not the main SM)
- A single tool for everyone (no physical cards + online in parallel)
- Wide-angle camera on the room for remote participants

---

## Alternatives to Planning Poker

| Method | When to use it | Frame |
|---|---|---|
| **T-shirt Sizing (XS/S/M/L/XL/XXL)** | Rough estimation, early product, Roadmap | 30 min, junior team welcome |
| **#NoEstimates** | Mature team, US always sliced to ~1 day | Cycle time monitoring required |
| **Affinity Estimation** | > 30 US to estimate in bulk | 90-min workshop, ranking by group |
| **Magic Estimation** | Cognitive offload after a long refinement | 15 min, silent sort on a table of SPs |
| **Bucket System** | Very large backlog (> 50 US), individual refinement not possible | 60-90 min, cards 0, 1, 2, 3, 5, 8, 13, 20, 40, 100 on the table |

### Quick comparison

```
            Precision    Speed      Engagement   When
            ──────────  ─────────  ───────────  ───────────────────────
Planning P. ███████      ████       ███████      Refined sprint backlog
T-shirt     ███          ███████    █████        Roadmap, early product
#NoEstim.   █            ███████    ██████       Mature team, flow >>
Affinity    █████        ██████     ████         Bulk > 30 US
Magic E.    ████         ███████    ██           Already-seen backlog
Bucket      ████         █████      █████        Very large backlog
```

---

## Anti-patterns to avoid

### During facilitation

- ❌ **Anchoring**: a senior votes "5" first → everyone follows → **secret vote mandatory**
- ❌ **Scrum Master voting**: the SM facilitates, **does not estimate**
- ❌ **PO voting**: the PO clarifies, **does not estimate either**
- ❌ **HiPPO bias**: "The CTO says it's easy" → the team must validate
- ❌ **Automatic average**: 3 + 8 = 5.5 → no, discuss and re-vote

### Beyond facilitation

- ❌ **Converting SP to hours**: "1 SP = 4h" → destroys the relative nature and the implicit NoEstimates
- ❌ **Comparing velocity between teams**: SP are **relative to the team**, not absolute
- ❌ **Bonus if velocity ↑**: a direct invitation to SP inflation
- ❌ **Estimating in silence without a Spike**: if the tech is unknown, run a Spike first
- ❌ **Revising SPs mid-sprint**: keep the initial estimate, learn for next time

---

## SAFe adaptation (PI Planning)

### Normalized Story Points

To enable **cross-team comparison at the ART level**, SAFe proposes a normalization:

```
1 Normalized Story Point = 1 person-day of work (ART average)
```

### ART calibration approach

1. Each team estimates **1 simple reference US** (e.g. "add a button") at **1 SP**
2. The other US are estimated **relative** to this common anchor
3. The initial ART velocity = number of devs × sprint days × ~0.8

> ⚠️ This normalization is **useful for PI planning** but does not replace relative team estimation.

### Planning Poker in PI Planning

| Moment | Granularity | Recommended method |
|---|---|---|
| **Pre-PI Planning** (Feature refinement) | Feature in T-shirt | T-shirt sizing |
| **PI Planning Day 1** (briefing) | Features ordered by WSJF | No estimation, presentation |
| **PI Planning Day 2** (per team) | US of the next 5 sprints | Planning Poker (fast, 3-5 US/min) |
| **Refinements during the PI** | Individual US | Classic Planning Poker |

---

## Cross-link with other skills

| If the goal is… | Go see |
|---|---|
| Manage the full backlog structure | `skills/scrum/po-backlog.md` |
| Write a well-formed US (DoR INVEST) | `skills/scrum/po-user-story.md` |
| Split a Feature into US (SAFe) | `skills/safe/feature-to-story-splitting.md` |
| Facilitate a Scrum Master workshop | `skills/scrum_master/facilitation-ateliers-sm.md` |
| Prioritize before estimating | `skills/scrum/priorisation-techniques.md` |

---

## Deliverables

- Backlog estimated in story points (export Jira / Linear / Notion)
- Anchor US reference (5 calibrated US, updated quarterly)
- List of US to split (> 13 SP)
- List of needed Spikes (votes "?" or "∞")
- Workshop notes with open points

## Output format

Specify: **number of US to estimate**, **session format** (on-site / remote / hybrid), **desired tool** (physical cards / Planning Poker Online / Miro / Scrum Poker), **team maturity** (junior / intermediate / expert), **context** (team Scrum / SAFe PI Planning).
