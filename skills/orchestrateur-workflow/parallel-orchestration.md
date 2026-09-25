# Skill — Parallel vs. Sequential Orchestration
> Certifications: BPMN 2.0 OCM (OMG), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google), PMP (PMI)

## Objective
Decide and implement the optimal execution mode — parallel, sequential, or hybrid — for each step of an agentic workflow, to maximize output quality and minimize execution time.

## Decision rule — Parallel vs. Sequential

```
SEQUENTIAL if:
  ✓ Agent B needs agent A's output to work
  ✓ The scopes overlap (risk of contradictions)
  ✓ The context volume is already high (avoid overload)

PARALLEL if:
  ✓ The agents work on distinct, independent scopes
  ✓ The outputs have no hard dependency between them
  ✓ Significant time saving (>30% of the workflow)
  ✓ The outputs will be aggregated at the end of the step by the orchestrator
```

---

## Orchestration patterns

### Pattern 1 — Pure sequential
```
A → B → C → D → [RESULT]

Use case  : Scoping workflow (each step feeds the next)
Pro       : Rich cumulative context, maximum quality
Con       : Slower
```

### Pattern 2 — Fork / Join (parallel with aggregation)
```
         ┌── B ──┐
A ──►────┤   C   ├────► [JOIN] → D → [RESULT]
         └── D' ─┘

Use case  : UX + QA in parallel after scoping
Pro       : Time saving, independent scopes
Con       : Output aggregation to manage
```

### Pattern 3 — Hybrid pipeline
```
A → B ──►────┬── C ──┐
             │   D   ├──► [JOIN] → E → [RESULT]
             └── E' ─┘

Use case  : SAFe delivery (PO + DevOps + Security in parallel)
Pro       : Quality / speed balance
Con       : More complex coordination
```

### Pattern 4 — Scatter / Gather
```
A → [SCATTER: same task across N contexts]
    ├── B(context 1)
    ├── B(context 2)
    └── B(context 3)
         └──► [GATHER: synthesis] → [RESULT]

Use case  : Multi-client, multi-market, multi-team analysis
Pro       : Maximum parallelization
Con       : Complex final synthesis
```

---

## YAML template — Parallel execution

```yaml
parallel_block:
  id: "PARALLEL-01"
  workflow_id: "WF-002-SAFE-DELIVERY"
  trigger: "PO-SAFE output validated (PI Objectives)"
  
  branches:
    - id: "branch_a"
      agent: "QA-AGILE"
      input: "SAFe Features + acceptance criteria"
      expected_output: "Sprint test plan + DoD"
      estimated_duration: "15 min"
      
    - id: "branch_b"
      agent: "SECURITE-IA"
      input: "Technical architecture + processed data"
      expected_output: "OWASP audit + GDPR recommendations"
      estimated_duration: "20 min"
      
    - id: "branch_c"
      agent: "DEVOPS-CLOUD"
      input: "Tech stack + CI/CD requirements"
      expected_output: "CI/CD pipeline + environments"
      estimated_duration: "20 min"
  
  join:
    condition: "All branches completed"
    aggregation_agent: "CHEF-PROJET-IA"
    final_output: "Consolidated release plan"
```

---

## Parallel execution prompt — Template

```
PARALLEL EXECUTION — [BLOCK NAME]
────────────────────────────────────────────────────────

SHARED CONTEXT (passed to all agents):
[Workflow's overall context + previous steps' outputs]

─── AGENT 1 : [NAME] ────────────────────────────────────
Your role : [specific mission]
Input     : [data specific to this agent]
Output    : [expected deliverable — precise format]

─── AGENT 2 : [NAME] ────────────────────────────────────
Your role : [specific mission]
Input     : [data specific to this agent]
Output    : [expected deliverable — precise format]

─── AGENT 3 : [NAME] ────────────────────────────────────
Your role : [specific mission]
Input     : [data specific to this agent]
Output    : [expected deliverable — precise format]

────────────────────────────────────────────────────────
AGGREGATION : [AGENT CHEF-PROJET-IA / ORCHESTRATOR]
Consolidate the 3 outputs into [FINAL FORMAT].
```

---

## Post-parallel aggregation rules

```
AFTER A FORK/JOIN:
1. Collect all the branches' outputs
2. Check cross-branch consistency (no contradictions)
3. Resolve conflicts before aggregating
4. Pass the aggregated output to the next step

CONFLICT RESOLUTION:
  Priority 1 : JURIDIQUE-IA / SECURITE-IA (non-negotiable)
  Priority 2 : CHEF-PROJET-IA (project constraints)
  Priority 3 : PO (product vision)
  Priority 4 : DEV / QA (technical feasibility)
```

## Deliverables
- Documented execution scheme (sequential / parallel / hybrid)
- YAML parallel-block template
- Ready-to-use parallel execution prompt
- Output aggregation plan

## Output format
Specify: the agents involved, identified dependencies, time constraint, the format of the outputs to aggregate.

## Anti-patterns
- ❌ **Parallelizing dependent steps**: inconsistent results → check independence (see `dependency-mapping.md`)
- ❌ **"Gain > 30%" presented as guaranteed**: the real gain depends on the ratio of parallelizable steps → measure, don't promise
- ❌ **No aggregation strategy** for parallel outputs: ambiguous merge → aggregation rule + conflict resolution
- ❌ **No partial-failure handling** (one agent fails): the whole block collapses → `.filter(Boolean)` / graceful degradation
- ❌ **Over-parallelizing** (too many concurrent agents): cost/throughput limits → cap concurrency

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — **parallelization** pattern (sectioning + voting)
- **BPMN 2.0.2** — OMG (2013): parallel gateways (fork/join)

## See also
- [`dependency-mapping.md`](dependency-mapping.md) — identifying independent branches
- [`workflow-design.md`](workflow-design.md) — designing forks/joins
- [`output-validation.md`](output-validation.md) — validating aggregated outputs
- [`error-recovery.md`](error-recovery.md) — partial failure of a branch
