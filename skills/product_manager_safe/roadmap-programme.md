# Skill — Program-Level Roadmap (ART)
> Certifications: SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile), SAFe SPC (Scaled Agile)

## Objective
Build and steer the product roadmap at the SAFe Program level — Feature sequencing over 2-4 PIs, release milestones, capacity dependencies — to align the ART and stakeholders on a realistic delivery plan.

## Program roadmap structure

```
HORIZON 1 — Current PI (10 weeks) — Committed
  Features defined, estimated, prioritized (WSJF)
  Allocated capacity known

HORIZON 2 — PI+1 (10 weeks) — Likely
  Features identified, roughly estimated
  May evolve per I&A and market feedback

HORIZON 3 — PI+2 and beyond — Possible / Vision
  Capabilities and Epics
  Indicative order per the strategy
  Subject to significant changes
```

## Program roadmap — YAML template

```yaml
program_roadmap:
  product: "HR AI Solution"
  version: "v2.0"
  last_updated: "2026-05-22"

  pi_12:
    horizon: "Committed"
    period: "2026-04 → 2026-06"
    pi_objective: "Launch the candidate-scoring module"
    features:
      - id: "F-01"
        title: "Automatic CV scoring"
        business_value: 10
        wsjf: 5.0
        status: "In Progress"
        team: "Team Alpha"
      - id: "F-02"
        title: "HR Analytics dashboard"
        business_value: 8
        wsjf: 4.0
        status: "Planned"
        team: "Team Beta"
    release: "Release 2.0 — Sprint 4 PI-12"

  pi_13:
    horizon: "Likely"
    period: "2026-07 → 2026-09"
    pi_objective: "Extend the interview module + HRIS integration"
    features:
      - id: "F-05"
        title: "AI interview transcription and summary"
        business_value: 9
        wsjf: 4.5
        status: "Backlog"
      - id: "F-06"
        title: "HRIS connector API (SAP HCM)"
        business_value: 7
        wsjf: 3.5
        status: "Backlog"

  future_horizons:
    - id: "CAP-01"
      type: "Capability"
      title: "AI-based turnover prediction"
      estimated_pi: "PI-14"
    - id: "EPIC-01"
      type: "Epic"
      title: "AI skills training and development module"
      estimated_pi: "PI-15 to PI-16"
```

## Visual roadmap — Simplified Gantt format

```
PROGRAM ROADMAP — HR AI Solution
─────────────────────────────────────────────────────────────────────
                    │ PI-12 (Apr-Jun) │ PI-13 (Jul-Sep) │ PI-14 (Oct)
─────────────────────────────────────────────────────────────────────
F-01 CV scoring     │ ████████████    │                 │
F-02 HR dashboard   │       ████████  │                 │
F-05 Transcription  │                 │ ████████████    │
F-06 HRIS API       │                 │       ████████  │
CAP-01 Prediction   │                 │                 │ ────────►
─────────────────────────────────────────────────────────────────────
Releases            │ R2.0 (Sprint 4) │ R2.1 (Sprint 4) │
─────────────────────────────────────────────────────────────────────
```

## Deliverables
- Program YAML roadmap (3 horizons)
- Simplified Gantt for stakeholder communication
- Documented WSJF prioritization of features
- Release plan aligned with the PIs

## Output format
Specify: identified features (with BV if available), capacity constraints, business milestones, desired planning horizon.
