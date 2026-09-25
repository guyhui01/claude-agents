# Skill — ART and SAFe Flow Metrics
> Certifications: SAFe RTE (Scaled Agile), SAFe POPM 6 (Scaled Agile), SAFe LPM (Scaled Agile)

## Objective
Collect, compute and interpret the ART's key metrics — PI Predictability, Flow Metrics (DORA), Business Value — to steer the train's performance and identify areas for improvement.

## PI Predictability — Key RTE indicator

```
PI PREDICTABILITY = (actual BV / planned BV) × 100

DETAILED CALCULATION
────────────────────────────────────────────────────────────
Planned BV = Sum of the Business Values of the committed PI Objectives
Actual BV  = Sum of the Business Values of the delivered PI Objectives

EXAMPLE PI-12
────────────────────────────────────────────────────────────
Team Alpha  : planned BO 24pts → delivered BO 22pts → 91.7%
Team Beta   : planned BO 18pts → delivered BO 18pts → 100%
Team Gamma  : planned BO 20pts → delivered BO 15pts → 75%
────────────────────────────────────────────────────────────
ART Total   : 62pts planned → 55pts delivered → 88.7%

SAFe TARGET: 80% minimum considered healthy
```

## SAFe Flow Metrics (DORA + Flow)

```yaml
flow_metrics:
  pi: "PI-12"
  team: "The whole ART"

  # DORA Metrics
  deployment_frequency: "2 times per sprint"    # target: multiple/day
  lead_time_for_changes: "8 days"               # target: < 1 week
  change_failure_rate: "12%"                    # target: < 15%
  mean_time_to_restore: "4 hours"               # target: < 1 hour

  # SAFe Flow Metrics
  flow_velocity: 38                             # average story points/sprint
  flow_efficiency: "42%"                        # active time vs wait time
  flow_load: 95                                 # % of capacity used
  flow_time: "6.5 days"                         # average cycle time of a US
  flow_distribution:
    features: "35%"
    enablers: "20%"
    defects: "15%"
    risk_reduction: "30%"
```

## ART metrics dashboard

```
ART METRICS — PI-12 — Review
══════════════════════════════════════════════════════════
PI PREDICTABILITY
─────────────────────────────────────────────────────────
Team Alpha  : 91.7% ✅  Team Beta  : 100% ✅
Team Gamma  : 75%   ⚠   Team Delta : 85%  ✅
ART TOTAL   : 88.7% ✅  (target ≥ 80%)

QUALITY
─────────────────────────────────────────────────────────
Escaped-defect rate     : 8%  (target < 10%) ✅
Change Failure Rate     : 12% (target < 15%) ✅
MTTR                    : 4h  (target < 1h)  ⚠

FLOW
─────────────────────────────────────────────────────────
Flow Velocity    : 38pts/sprint  → trend +5% ✅
Flow Efficiency  : 42%           → trend stable ⚠
Lead Time        : 8 days        → target 5d   ⚠

IDENTIFIED IMPROVEMENT AREAS
─────────────────────────────────────────────────────────
1. MTTR too high → invest in automatic monitoring
2. Low Flow Efficiency → reduce the validation wait time
3. Team Gamma PI Predictability < 80% → PI Planning coaching
```

## Deliverables
- ART metrics dashboard (YAML + table)
- PI Predictability computation per team
- Flow Metrics collected and analyzed
- I&A improvement recommendations

## Output format
Specify: current PI, number of teams, PI Objectives and planned/delivered BV, production incidents, team velocities.
