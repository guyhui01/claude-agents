# Skill — Scaling Product Ownership

> Certification: PSPO III · SAFe POPM 6
> Agent: AGENT-PRODUCT-MANAGER-SAFE.md

## Objective
Coordinate the Product Owner function across several Scrum teams working on the same product or platform.

## PO scaling patterns

### 1. Chief Product Owner (CPO / PO Proxy)
```
Product Manager (vision, strategy, global prioritization)
         │
         ├── PO Team A (Feature Team 1)
         ├── PO Team B (Feature Team 2)
         └── PO Team C (Feature Team 3)
```
- PM = stakeholder interface, cross-team prioritization
- PO = backlog refinement, acceptance, team events

### 2. Area Product Owner (LeSS / Nexus)
```
Product Owner (single backlog, global priorities)
         │
         ├── Area PO — Domain A (partial delegation)
         ├── Area PO — Domain B
         └── Area PO — Domain C
```

### 3. Feature Teams vs Component Teams
```
Feature Team ✅ (recommended)        Component Team ⚠️
─────────────────────────────        ─────────────────────
End-to-end delivery of a feature     Isolated technical component
Cross-functional (UX+Dev+QA)         Technical silo
1 PO per team, own backlog           Strong inter-team dependencies
```

## Multi-team coordination

### Multi-team backlog — Rules
1. **A single Product Backlog** (source of truth) — no silos
2. Teams "pull" the US per capacity and specialty
3. Shared DoR — validated by all POs
4. Joint refinement for shared US (weekly — 60 min)

### PO Sync (coordination event)
- Frequency: weekly — 30 min
- Participants: all POs + Product Manager
- Agenda:
  1. Blocking dependencies (10 min)
  2. Cross-team prioritization (10 min)
  3. Risks and decisions (10 min)

### Program Board (visual dependencies)
```
           TEAM A    TEAM B    TEAM C
Sprint 1  [US-001]  [US-004]  [US-007]
                      ↓ depends on
Sprint 2  [US-002]  [US-005]  [US-008]
           ↓ delivered to
Sprint 3  [US-003]
```

## Common challenges and solutions

| Challenge | Solution |
|---|---|
| Conflicting prioritization between POs | WSJF + decision escalated to the PM |
| Shared US not refined | Mandatory joint refinement before Sprint N |
| Technical debt ignored | 20% of capacity systematically reserved |
| Stakeholder bypassing the PO | Formalized process + management support |
| Uneven velocity between teams | Temporary reallocation + coaching |

## PO scaling health metrics

| Metric | Target |
|---|---|
| Blocking dependencies / sprint | < 2 |
| Average dependency resolution time | < 1 sprint |
| Multi-team US rate / total | < 15% |
| PO satisfaction (1-10) | > 7 |
