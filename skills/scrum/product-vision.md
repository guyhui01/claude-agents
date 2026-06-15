# Skill — Product Vision & Product Strategy

> Certifications: **PSPO II · PSPO III** (Scrum.org) · **ICAgile ICP-APO** · **Pragmatic Marketing** · SVPG Coach Influences (Cagan)
> Agent: AGENT-PO-SCRUM.md

## Objective

Define an **inspiring, actionable product vision** (2-5 years), break it down into an annual **strategy**, a **themes-based roadmap** and measurable **OKRs** — drawing on modern Product Management frameworks (**Cagan SVPG**, **Pichler**, **Moore Crossing the Chasm**, **Christensen JTBD**, **Sinek Golden Circle**, **Kim & Mauborgne Blue Ocean**) and Metrics & Discovery frameworks (**North Star** · **AARRR** · **HEART** · **Continuous Discovery Torres** · **PMF Sean Ellis**).

## Frameworks used

| Domain | Frameworks |
|---|---|
| **Narrative vision** | Sinek Golden Circle · Pichler Product Vision Board · Cagan Inspired/Empowered |
| **Market strategy** | Moore Crossing the Chasm · Christensen Disruption · Kim & Mauborgne Blue Ocean |
| **Discovery** | Torres Continuous Discovery · Ulwick ODI · Christensen JTBD · Cagan 4 risks |
| **Validation** | Andreessen/Ellis PMF · Maurya Lean Canvas · Ries Lean Startup |
| **Roadmap** | Pichler GO Roadmap · Now/Next/Later (Sutherland) · Wodtke Radical Focus |
| **Metrics** | North Star Framework (Amplitude) · AARRR McClure · HEART Google · OKR Doerr |

## Sinek Golden Circle (2009) — Start With Why

Every product vision starts with the **WHY** (purpose), before the HOW and the WHAT. An inversion of the classic features-first approach.

```
              WHY
        (purpose, cause,
           belief)
              ↑
             HOW
       (differentiating
        process, method)
              ↑
            WHAT
      (products, services,
         features)
```

**Anti-pattern**: starting with WHAT ("we're building a task-management app") → a soulless, copyable vision that doesn't mobilize. **Best practice**: "We believe every team deserves to focus on what truly matters (WHY) — by automating the orchestration of scattered tools (HOW) — through a unified collaborative-productivity platform (WHAT)."

## Pichler Product Vision Board (Strategize, 2016)

A 1-page canvas condensing the product vision into **5 sections + 1 founding one**:

```
┌─────────────────────────────────────────────────────────────────┐
│  VISION (1 ambitious, motivating, long-term sentence)           │
├──────────────┬──────────────┬──────────────┬───────────────────┤
│ TARGET GROUP │    NEEDS     │   PRODUCT    │  BUSINESS GOALS   │
│ (users       │  (unsolved   │  (category,  │ (revenue, market  │
│  + buyers)   │   problems)  │   features,  │  share, NPS,     │
│              │              │   differentiat.)│ strategic)      │
└──────────────┴──────────────┴──────────────┴───────────────────┘
```

The **Extended Vision Board** adds 4 sections: **Business Model · Competitors · Market & Trends · Key technologies**.

**AI variant** (cf. [po-ai-product.md](po-ai-product.md)): add a "Why AI" justifying why AI beats a deterministic rule + an "AI Risks & Mitigation" section (NIST AI RMF + AI Act).

## Cagan Product Vision Type (Inspired 2017 / Empowered 2020)

SVPG reference (Silicon Valley Product Group) — product vision = **the empowered team's mission**, not a document.

### 4 major product risks to address in Discovery
| Risk | Question | Primary owner |
|---|---|---|
| **Value Risk** | Will customers buy / use it? | Product Manager |
| **Usability Risk** | Will users know how to use it? | Product Designer |
| **Feasibility Risk** | Can we build it? | Tech Lead / Engineers |
| **Business Viability Risk** | Does it work for our business? (legal, marketing, sales, finance, ops) | Product Manager + Stakeholders |

**Continuous Discovery** = iterative tests on these 4 risks before any build (vs V-model gates).

## Moore Crossing the Chasm (1991, 2014 ed.)

### Technology Adoption Lifecycle — 5 segments

```
Innovators (2.5%) → Early Adopters (13.5%) → [CHASM] → Early Majority (34%) → Late Majority (34%) → Laggards (16%)
```

**The Chasm** is the psychological break between Early Adopters (visionaries) and Early Majority (pragmatists) — many products die there.

### Bowling Alley strategy (post-Chasm)
1. **Pin head**: target 1 fully dominatable niche (1 vertical segment × 1 precise use case)
2. **Whole Product**: offer a complete solution (not just the core product), customer references, partners
3. **Adjacent pins**: leverage references to conquer adjacent niches
4. **Tornado**: massive Early Majority adoption, fast scaling
5. **Main Street**: Late Majority, established market leader

## Christensen Innovator's Dilemma (1997) — Sustaining vs Disruptive

| Innovation | Target | Trajectory | Example |
|---|---|---|---|
| **Sustaining** | Existing top customers | Performance improvement of the dominant product | iPhone → iPhone 15 |
| **Disruptive low-end** | Over-served low-end customers | A "worse" but accessible/simple product | Salesforce vs Siebel (1999) |
| **Disruptive new-market** | Non-customers (who don't buy the category) | Creation of a new market | Notion vs Confluence (early days) |

**The dilemma**: sustaining leaders (Kodak, Blockbuster, Nokia) miss disruptions because they don't serve their best customers. **PO action**: maintain 2 horizons (Horizon 1 sustaining + Horizon 3 exploratory disruptive).

## Kim & Mauborgne Blue Ocean Strategy (2005, expanded 2015)

### Red Ocean (fierce competition) vs Blue Ocean (uncontested space)

**6 Paths to Reconstruct Market Boundaries**:
1. Look across **Alternative Industries** (cinema vs restaurants vs streaming)
2. Look across **Strategic Groups** (Toyota Lexus vs Mercedes vs Honda)
3. Look across **Buyer Chain** (user vs buyer vs influencer)
4. Look across **Complementary Offerings** (broadened offer)
5. Look across **Functional-Emotional Appeal** (Cirque du Soleil)
6. Look across **Time Trends** (anticipate long-term trends)

### ERRC Grid (Eliminate-Reduce-Raise-Create)
```
┌──────────────────┬──────────────────┐
│  ELIMINATE       │  CREATE          │
│  Which factors   │  Which factors   │
│  taken for       │  never offered   │
│  granted remove? │  to create?      │
├──────────────────┼──────────────────┤
│  REDUCE          │  RAISE           │
│  Which factors   │  Which factors   │
│  reduce well     │  raise well      │
│  below standard? │  above standard? │
└──────────────────┴──────────────────┘
```

## JTBD — Christensen-Ulwick (Jobs-to-be-Done)

### Christensen JTBD narrative (*Competing Against Luck*, 2016)
**Job Story format**: *When [situation], I want to [motivation], so I can [expected outcome]*.

Example: *When [I have to prepare a steering committee in 24h from 12 data sources], I want to [automatically aggregate the KPIs into a dashboard], so I can [focus on strategic analysis instead of copy-paste]*.

### Ulwick ODI — Outcome-Driven Innovation
- Identify atomic **Desired Outcomes** (e.g. "Minimize the time it takes to identify a leaking pipe")
- Measure **Importance (1-10)** + **Satisfaction (1-10)** per outcome
- **Opportunity Score = Importance + max(0, Importance - Satisfaction)**
- Prioritize outcomes with Opportunity Score > 10 (high importance + low satisfaction)

**Major anti-pattern**: replacing JTBD with demographic personas ("Sophie, 32, urban, upper-income") — demographics don't predict jobs. JTBD = causation, persona = correlation.

## Lean Canvas (Maurya 2012) — adapted startup vs BMC

```
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│  PROBLEM     │  SOLUTION    │ UNIQUE VALUE │ UNFAIR ADV.  │  CUSTOMER    │
│  (top 3)     │              │ PROPOSITION  │              │  SEGMENTS    │
│              │              │              │              │              │
├──────────────┴──────────────┼──────────────┼──────────────┴──────────────┤
│  EXISTING ALTERNATIVES      │ HIGH-LEVEL   │  EARLY ADOPTERS             │
│  (in Problem)               │  CONCEPT     │  (in Customer Segments)     │
├─────────────────────────────┼──────────────┼─────────────────────────────┤
│  KEY METRICS                │  CHANNELS    │                             │
├─────────────────────────────┴──────────────┴─────────────────────────────┤
│  COST STRUCTURE                       │  REVENUE STREAMS                 │
└───────────────────────────────────────┴──────────────────────────────────┘
```

Differences vs Business Model Canvas (Osterwalder): Problem + Solution + Unfair Advantage + Key Metrics (vs Key Partners, Key Activities, Key Resources, Customer Relationships).

## Product-Market Fit (Andreessen 2007 + Sean Ellis 40% Rule)

### Andreessen definition
*"The only thing that matters is getting to product/market fit."* — Marc Andreessen (Pmarchive, June 25, 2007)

### Sean Ellis PMF Survey (measurable method)
A single question to active users: **"How would you feel if you could no longer use [product]?"**
- Very disappointed
- Somewhat disappointed
- Not disappointed
- N/A — I no longer use [product]

**PMF threshold**: ≥ **40% "Very disappointed"** = established PMF signal. < 40% = no PMF, don't scale.

### Complementary PMF signals
- Organic growth (referrals, word-of-mouth)
- Flat retention curves (vs declining) at 30/60/90d
- NPS > 30 (consumer) / > 50 (B2B)
- Churn < 5%/month B2C / < 1%/month B2B SaaS

## Continuous Discovery (Teresa Torres 2021)

**Habit** = continuous weekly discovery (vs ad hoc sprint discovery).

### Opportunity Solution Tree
```
                    Desired OUTCOME (business)
                              │
              ┌───────────────┼───────────────┐
        OPPORTUNITY     OPPORTUNITY     OPPORTUNITY
        (job, pain,     (user need)     (problem)
        gain)
           │                  │                │
      ┌────┼────┐        ┌────┼────┐      ┌────┼────┐
   SOLUTION SOLUTION   SOLUTION SOLUTION SOLUTION SOLUTION
      │       │           │       │         │       │
   ASSUMPTION TESTS  ASSUMPTION TESTS   ASSUMPTION TESTS
```

**Cadence**: 3-5 interviews/week + 1 assumption test/week + Tree updated weekly.

## Strategic hierarchy — Vision → Strategy → Themes → OKR → Backlog

```
PRODUCT VISION (2-5 years, inspiring narrative)
    ↓
PRODUCT STRATEGY (annual, focus on 3-5 axes)
    ↓
THEMES (quarterly, problems/opportunities to solve)
    ↓
OKR (Objective + 3-5 Key Results per theme)
    ↓
INITIATIVES / EPICS (multi-sprint)
    ↓
FEATURES / USER STORIES (sprint)
```

**Cagan rule**: a product strategy only holds on 3-5 axes — not 15. The PO constantly arbitrates what fits within those axes.

## Themes-based roadmap (Pichler GO Roadmap + Now/Next/Later)

### Pichler GO Product Roadmap
| Date | Name (Theme) | Goal | Features | Metrics |
|---|---|---|---|---|
| Q1 | Onboarding Excellence | Activation rate 40%→65% | 3-step wizard, interactive tutorial, sample data | Time-to-Activation < 5 min |
| Q2 | Collaborative Workspaces | Weekly engagement +30% | Real-time co-edit, comments, mentions | WAU/MAU > 0.55 |
| Q3 | Enterprise Readiness | 5 deals > €100k ARR | SAML SSO, audit logs, SLA 99.9%, SOC 2 cert | Enterprise pipeline +200% |

### Now / Next / Later (Sutherland, prefer date-less roadmap)
| NOW (in progress) | NEXT (3-6 months) | LATER (6-18 months) |
|---|---|---|
| Theme 1 + KR | Theme 2 + KR | Theme 3 (hypotheses to validate) |

**Anti-pattern**: a fixed-date 18-month roadmap (Gantt-roadmap) → unsustainable commitment, a source of team stress.

## Metrics Framework

### North Star Framework (Amplitude / Cutler / Taylor 2018+)
**One North Star Metric** reflecting the **value delivered to users** AND correlated with business growth.

Sector North Star examples:
- Airbnb: Nights Booked
- Spotify: Time spent listening
- Slack: Daily Active Workspaces with ≥ 2 messages
- Facebook: DAU
- Amazon: Number of purchases per Prime member

**Input Metrics** (3-5) = actionable drivers that move the North Star.

### AARRR Pirate Metrics (Dave McClure, 500 Startups, 2007)
**A**cquisition → **A**ctivation → **R**etention → **R**eferral → **R**evenue

### HEART Framework (Google, Rodden et al. CHI 2010)
**H**appiness · **E**ngagement · **A**doption · **R**etention · **T**ask success

### OKR (Doerr 2018 — *Measure What Matters*)
- **Objective**: qualitative, motivating, ambitious (action verb)
- **3-5 Key Results**: quantitative, measurable, aggressive (hitting 70% = success)

**Anti-pattern**: confusing KPI (continuous measures) and OKR (quarterly ambitions) — an OKR should be a little "scary".

## Worked sector example — European B2B SaaS vendor, Series B

**Anonymized context**: European B2B SaaS vendor, Series B (~150 employees, €15M ARR, ~1,200 SMB-mid-market customers, founded 2019). Product: a collaborative project-management platform for hybrid teams. Mission: **product-vision overhaul at T+12 months** following the arrival of a new CPO, ex-Atlassian.

**Initial diagnosis (before the overhaul)**:
- PMF Sean Ellis survey: **47%** "Very disappointed" (just under the 40% threshold, but fragile on Early Majority)
- Fuzzy North Star (MAU + Revenue mixed on the executive dashboard)
- Roadmap = fixed 18-month Gantt, 47 planned features, sense of an overloaded team
- OKRs cascaded top-down (anti-pattern), 60% missed in the prior Q
- Ad hoc discovery (1 round of user tests / quarter)

**Product-vision overhaul (method applied)**:

1. **Sinek Golden Circle**:
   - WHY: "We believe modern hybrid teams deserve a workspace as natural as physical presence"
   - HOW: "By unifying scattered artifacts (Slack, Notion, Jira, Email) into a per-project contextual view"
   - WHAT: "A contextual project-management SaaS platform for hybrid teams of 10-500 people"

2. **Pichler Product Vision Board**:
   - **Target**: Product Managers + Engineering Managers of hybrid teams of 10-500p
   - **Needs**: remove 2-4h/day of juggling across 8-12 tools per PM
   - **Product**: 1 contextual view per project aggregating Slack/Jira/Notion/Email with an AI assistant
   - **Business Goals**: ARR €15M → €28M at T+18 (+87%), B2B NPS 38 → 60, Net Revenue Retention 105% → 120%

3. **Moore Crossing the Chasm — diagnosis**: the current base is **tech-savvy Early Adopters** (CTO/dev-led). The Chasm is ahead: we must conquer the **Early Majority of mid-market Product Managers** (pragmatic, ROI-focused). **Bowling Alley** strategy: pin head = PMs in tech scale-ups of 50-200p.

4. **Blue Ocean ERRC Grid**:
   - ELIMINATE: complex initial configuration (>2h setup)
   - REDUCE: number of settings screens (47 → 12)
   - RAISE: onboarding quality (onboarding NPS 5.2 → 8.5)
   - CREATE: "Project Pulse" AI assistant that automatically detects project risks from the aggregated artifacts (unique differentiation)

5. **JTBD interviews** (15 interviews with target mid-market PMs):
   - Primary job: *When my CEO asks "where are we on Project X?", I want to give a confident answer in 30 seconds, so I can stop dreading these moments*
   - Secondary job: *When a deadline slips, I want to know it 2 weeks before, so I can re-plan without firefighting*

6. **Q4 OKRs**:
   - **Objective**: "Become the Product Pulse reference for tech scale-ups of 50-200p"
   - KR1: PMF Sean Ellis → **62%** (vs 47% baseline)
   - KR2: 20 new tech scale-up logos of 50-200p (with average ARR ≥ €30k)
   - KR3: North Star "Weekly Active Workspaces with ≥ 3 contributors": 380 → **620**
   - KR4: onboarding NPS ≥ 8 out of 10

7. **Now/Next/Later roadmap** (vs the removed fixed 18-month Gantt):
   - **NOW**: "Onboarding Excellence" theme (Time-to-Value < 15 min)
   - **NEXT**: "Project Pulse AI Assistant" theme (Blue Ocean differentiation)
   - **LATER**: "Enterprise Readiness" theme (SSO, SOC 2, audit logs — prepare the crossing beyond the Chasm)

**Measured gains at T+12 months**:
- PMF Sean Ellis: 47% → **64%** (KR1 target exceeded)
- ARR: €15M → €22M (+47% in 12 months, on track for €28M at T+18)
- Scale-up logos 50-200p: 18 → **34** acquired over the year (vs 20 KR)
- B2B NPS: 38 → **52**
- Net Revenue Retention: 105% → **117%**
- Product-team velocity: +35% (team aligned on 3 themes vs 47 scattered features)

## 8 Product Vision & Strategy anti-patterns

- ❌ **Vision = feature list** ("we'll add SSO, audit logs, dark mode...") → not a vision, it's a backlog
- ❌ **Vision changed every quarter** → no stability, disoriented team — the vision should hold for 2-5 years
- ❌ **Fixed-date 18-month Gantt roadmap** → unsustainable commitment, a source of overcommitment and stress
- ❌ **North Star = Revenue or MAU with no link to user value** → vanity metric, doesn't guide prioritization
- ❌ **JTBD replaced by demographic personas** ("Sophie, 32, urban, upper-income") → demographics don't predict jobs
- ❌ **Rigid top-down cascaded OKRs** (CEO → departments → teams) → disempowered teams, OKRs misaligned with the field
- ❌ **PMF confused with initial Early Adopter adoption** → false signal, Crossing the Chasm will be brutal without preparation
- ❌ **Skipping the "Bowling Alley" phase of Crossing the Chasm** (jumping straight to mainstream) → blocked growth, many products die there

## Tools

- **Vision Board / Lean Canvas**: Miro (templates) · Mural · Strategyzer · Canvanizer · Notion
- **OKR & Strategy**: Ally.io (Microsoft Viva Goals) · Perdoo · Gtmhub (Quantive) · Atlassian Jira Align · Workboard
- **Themes-based roadmap**: ProductPlan · Aha! · Productboard · Roadmunk · GitHub Projects
- **JTBD & Discovery**: Productboard Insights · Dovetail · Notion · Airtable · Maze · UserTesting
- **PMF Survey**: Sean Ellis Pyramid (old survey.io) · Typeform · Hotjar · Pendo
- **Metrics & North Star**: Amplitude · Mixpanel · Heap · PostHog · Segment + Looker / Power BI dashboards
- **Continuous Discovery (Torres)**: Productboard · Dovetail (research repository) · User Interviews · Maze · Lookback

## Deliverables

- **Product Vision Statement** (1 ambitious 2-5 year sentence, Sinek Why format)
- **Pichler Product Vision Board** completed (5 sections + Extended if relevant)
- **Blue Ocean ERRC Grid** + 6 Paths analysis (if a differentiation strategy)
- **JTBD Map**: primary job + secondary jobs + ODI Outcome Statements
- **Lean Canvas** or **Business Model Canvas** (depending on product maturity)
- **Sean Ellis PMF Survey** (baseline measure at T0 + T+6/+12)
- **Vision → Strategy → Themes → OKR hierarchy** documented (1-page executive)
- **GO Product Roadmap themes-based** (3-5 themes max) or Now/Next/Later
- **North Star Framework**: 1 NSM + 3-5 Input Metrics
- **Quarterly OKRs**: Objective + 3-5 KR per theme
- **AARRR funnel + HEART scorecard** (depending on B2C/B2B context)

## Output format

For each product-vision engagement, specify:
- **Product stage**: 0→1 (idea validation) · PMF search · post-PMF scaling · mature (optimization) · reinvention
- **Market type**: Blue Ocean (category creation) · Red Ocean (fierce competition) · low-end disruption · new-market disruption
- **Target segment** (Moore): Innovators · Early Adopters · Early Majority · Late Majority · Laggards · multi-segment
- **Business model**: B2C · B2B SaaS · B2B2C · marketplace · platform · hardware + service · open source + commercial
- **Level of formality**: startup (Lean Canvas + intuition) · scale-up (Vision Board + OKR + themes-based Roadmap) · late scale-up/mid-market (full Cagan/Pichler formality) · large enterprise (SAFe Solution/Portfolio Vision)

## Sources

- **Cagan M.** — *Inspired: How to Create Tech Products Customers Love* (SVPG / Wiley, 2008, 2nd ed. 2017) · *Empowered: Ordinary People, Extraordinary Products* (Wiley, 2020)
- **Pichler R.** — *Strategize: Product Strategy and Product Roadmap Practices for the Digital Age* (Pichler Consulting, 2016)
- **Moore G.A.** — *Crossing the Chasm* (HarperBusiness, 1991, 3rd ed. 2014)
- **Christensen C.M.** — *The Innovator's Dilemma* (HBR Press, 1997) · *Competing Against Luck: The Story of Innovation and Customer Choice* (HBR Press, 2016)
- **Sinek S.** — *Start With Why: How Great Leaders Inspire Everyone to Take Action* (Portfolio Penguin, 2009)
- **Kim W.C., Mauborgne R.** — *Blue Ocean Strategy: How to Create Uncontested Market Space* (HBR Press, 2005, expanded 2015)
- **Torres T.** — *Continuous Discovery Habits: Discover Products that Create Customer Value and Business Value* (Product Talk, 2021)
- **Ulwick A.W.** — *What Customers Want: Using Outcome-Driven Innovation* (McGraw-Hill, 2005) — ODI framework
- **Andreessen M.** — *The only thing that matters* (Pmarchive blog, June 25, 2007) — Product-Market Fit definition
- **Ellis S.** — PMF Survey methodology (survey.io, 2009-2010) — 40% "Very disappointed" rule
- **Maurya A.** — *Running Lean: Iterate from Plan A to a Plan That Works* (O'Reilly, 2012, 3rd ed. 2022)
- **Ries E.** — *The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses* (Crown Business, 2011)
- **Doerr J.** — *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs* (Portfolio Penguin, 2018)
- **McClure D.** — *Pirate Metrics: AARRR* (500 Startups Master Class, 2007)
- **Rodden K., Hutchinson H., Fu X.** — *Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications* (CHI 2010) — Google HEART Framework
- **Wodtke C.** — *Radical Focus: Achieving Your Most Important Goals with Objectives and Key Results* (Cucina Media, 2016, 2nd ed. 2021)

## See also

- [po-backlog.md](po-backlog.md) — feeding the backlog from themes & initiatives
- [product-metrics-ebm.md](product-metrics-ebm.md) — Evidence-Based Management (Scrum.org), pairing business metrics + outcomes
- [customer-discovery.md](customer-discovery.md) — JTBD interviews + assumption tests (Torres Continuous Discovery)
- [business-model-canvas.md](business-model-canvas.md) — Osterwalder BMC, complementary to the Lean Canvas
- [hypothesis-driven.md](hypothesis-driven.md) — Build-Measure-Learn, Lean Startup (Ries 2011)
- [story-mapping.md](story-mapping.md) — Jeff Patton User Story Mapping to break vision down → backlog
- [lean-ux.md](lean-ux.md) — Lean UX discovery paired with Continuous Discovery
- [po-ai-product.md](po-ai-product.md) — AI product vision (Vision Board extension + Cagan's 4 risks adapted to AI)
- [coaching-pos.md](coaching-pos.md) — coaching other POs on vision framing (PSPO III)
- [`../business_analyst/cadrage-projet.md`](../business_analyst/cadrage-projet.md) — bridge with V-model project scoping (agile Vision ↔ PMBOK Business Case)
