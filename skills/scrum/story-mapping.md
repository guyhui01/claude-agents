# Skill — User Story Mapping (Jeff Patton method)

> Certification: PSPO II · PSU-I · ICAgile ICP-APO
> Agent: AGENT-PO-SCRUM.md

## Objective

Build a collaborative Story Map that reveals the **full user journey** (horizontal axis = activities) and supports **slicing the MVP and releases** (vertical axis = priority), to align team + stakeholders on the value delivered at each increment.

## When to use Story Mapping

| Situation | Suitable? |
|---|---|
| Discovering a new product / module | ✅ Essential |
| Identifying the MVP of a rebuild | ✅ Very suitable |
| Onboarding a new team onto the product | ✅ Excellent teaching tool |
| Aligning business + tech + UX | ✅ Creates a shared language |
| Backlog to prioritize on a single feature | ❌ Too heavy, prefer Value/Effort |
| Bug fixing or pure technical debt | ❌ Not the right tool |

## Theory in 3 minutes (Jeff Patton)

The flat backlog is a lie: it loses the **user narrative**. The Story Map restores the structure:
- **Horizontal axis (Backbone)**: tells the user story, left → right, in the chronological order of use
- **Vertical axis**: breaks each activity into tasks/stories, from the most essential (top) to the most optional (bottom)
- **Horizontal lines = releases**: successive deliverable slices, each a complete user journey

> *"Cut the cake horizontally, not vertically."* — Jeff Patton

---

## Workshop preparation

### Logistics

| Parameter | On-site | Remote |
|---|---|---|
| Duration | 2-4 h | 2 × 90 min (with a break) |
| Participants | 5-9 (PO, dev, QA, UX, business) | Same, max 7-8 to stay manageable |
| Materials | Wall or board, 4-color sticky notes, markers | Miro / FigJam / Mural |
| Prerequisites | Validated personas, aligned product vision | Same |

### Recommended color code

| Color | Use |
|---|---|
| 🟧 Orange | User activities (Backbone) |
| 🟦 Blue | User tasks (sub-steps) |
| 🟨 Yellow | User Stories |
| 🟩 Green | Business annotations / business value |
| 🟥 Red | Risks, dependencies, open questions |

---

## Step-by-step method (6 steps)

### Step 1 — Define the user and their goal (15 min)

```
TARGET PERSONA   : [Sophie, SMB marketing manager]
PRIMARY GOAL     : [Launch an email campaign in under 30 min]
USAGE CONTEXT    : [From the office, 1× per week, sometimes under pressure]
```

> 💡 If multiple personas → do one Story Map per persona or differentiate by color.

### Step 2 — Identify user activities — the Backbone (30 min)

Key question: *"What does the user do, in what order, to reach their goal?"*

E-commerce example:

```
[Discover]→[Choose]→[Buy]→[Receive]→[Rate]→[Reuse]
```

Rules:
- User action verbs (no "the system…")
- Coarse granularity (5-10 activities max)
- Typical chronological order

### Step 3 — Break down into user tasks (45 min)

For each activity, list the concrete tasks:

```
[Buy]
   ├── Add to cart
   ├── Enter delivery address
   ├── Choose payment method
   ├── Confirm order
   └── Receive confirmation
```

### Step 4 — Detail into User Stories (60 min)

Under each task, list the possible stories, **from the most essential (top) to enrichment (bottom)**:

```
[Choose payment method]
   ├── 🟨 US01 — Pay by credit card (essential)
   ├── 🟨 US02 — Pay with PayPal
   ├── 🟨 US03 — Save my card for reuse
   ├── 🟨 US04 — Pay in 3 installments
   └── 🟨 US05 — Pay in cryptocurrency (nice-to-have)
```

### Step 5 — Draw the Walking Skeleton (MVP) (30 min)

Draw a **horizontal line** under the minimum needed for the user to **complete their entire journey**:

```
Backbone:    [Discover]    [Choose]    [Buy]        [Receive]
             ─────────────────────────────────────────────────────
WALKING       US 1 essent.  US 2 essent. US 3 essent. US 4 essent.   ← Walking Skeleton (MVP)
SKELETON     ─────────────────────────────────────────────────────
             US 5          US 6         US 7         US 8           ← Release 2
             US 9          US 10        US 11        US 12          ← Release 3
```

> ⚠️ The MVP = a **complete end-to-end journey**, not an isolated feature. This is Story Mapping mistake #1.

### Step 6 — Define the releases (30 min)

Draw 2-3 more lines for the following iterations:

| Release | Goal | Expected outcome |
|---|---|---|
| **R1 (MVP)** | Usable end-to-end journey | Validate the primary hypothesis |
| **R2** | Value enrichment | Increased adoption / NPS |
| **R3** | Optimization and differentiation | Retention, monetization, wow effect |

---

## Full ASCII visual template

```
                  ┌──────────── BACKBONE (Activities) ────────────┐
                  ▼              ▼              ▼              ▼
                  Discover     Choose        Buy          Receive
                  ──────────────────────────────────────────────────
USER tasks           Search      Filter         Pay         Track
                     Compare     Configure      Confirm     Receive
                  ──────────────────────────────────────────────────
🚶 WALKING SKELETON  US essent.  US essent.    US essent.   US essent.
                  ──────────────────────────────────────────────────
📦 RELEASE 1 (MVP)   …           …             …            …
                  ──────────────────────────────────────────────────
📦 RELEASE 2         US enrich.  US enrich.    US enrich.   US enrich.
                  ──────────────────────────────────────────────────
📦 RELEASE 3         US wow      US wow        US wow       US wow
```

---

## Remote workshop (Miro / FigJam / Mural)

### Recommended Miro template

1. Main "Story Map" frame (5000 × 2500 px)
2. Orange sticky notes at the top (Backbone) — size L
3. Blue sticky notes under each activity (Tasks) — size M
4. Yellow sticky notes stacked (Stories) — size S
5. Dashed horizontal lines for the releases
6. Side "Parking lot" frame for unplaced ideas

### Remote facilitation rules

- 1 dedicated facilitator (not the PO)
- Strict timeboxing (Pomodoro 25 min × 4)
- Camera-off breaks every 50 min
- Final capture as .png + structured export (Miro → CSV → Jira)

---

## Common anti-patterns

- ❌ **Too technical**: "System validates JWT" is not a user activity
- ❌ **Backbone too fine**: 50 activities → that's already a backlog, not a story map
- ❌ **An MVP that isn't a journey**: "We just ship sign-up as the MVP" → the user can't do anything with it
- ❌ **Frozen Story Map**: it must live, be updated at each refinement
- ❌ **PO building it alone**: the collaborative workshop is the essence of the method
- ❌ **Confusing Story Mapping and Backlog**: the Story Map is the view, the backlog derives from it

---

## From Story Map to Backlog

### Conversion steps

1. **Photograph / export** the Story Map (visual source of truth)
2. **Enter Release 1 as Epics + US in Jira/Linear**:
   - 1 Backbone activity = 1 Epic
   - 1 user task = 1 Feature (or a direct Story if simple)
   - 1 essential US = 1 User Story in the backlog
3. **Link each US to its Story Map Epic** (custom field "Story Map Area")
4. **Keep the Story Map up to date** as the overview (updated at each refinement)

### Maintenance over time

- Story Map review **every 4-6 weeks** (or at each PI in SAFe)
- Add the new activities identified during a release
- Remove/archive delivered US (keep them visible ✅ for memory)

---

## Deliverables

- Visual Story Map (Miro / FigJam or a photo if on-site)
- Explicit definition of the Walking Skeleton (list of R1 US)
- Derived roadmap (Now / Next / Later) aligned with the releases
- Workshop notes with decisions and open points
- Backlog imported into the tool (Jira / Linear / Notion)

## Output format

Specify: **target persona** (role + primary goal), **depth level** (Backbone only / Backbone + Tasks / full with stories), **format** (on-site workshop / remote Miro / Markdown export), **release horizon** (MVP only / 3 releases / 6 months).
