# Skill — LLM & Agent Evaluation
> Certifications: Google Professional ML Engineer · DeepLearning.AI

## Objective
Objectively measure the quality of an LLM, a RAG pipeline or an agentic system.

## Evaluation dimensions

### 1. LLM response quality
| Metric | Description | Tool |
|---|---|---|
| **Faithfulness** | Is the answer faithful to the sources? | RAGAs, RAGAS |
| **Answer Relevance** | Does the answer address the question? | RAGAs |
| **Hallucination Rate** | % of invented facts | DeepEval, TruLens |
| **Coherence** | Internal logic of the answer | LangSmith |
| **Toxicity** | Harmful content, bias | Perspective API |

### 2. RAG-specific evaluation (RAGAs framework)
- **Context Precision**: is the retrieved context relevant?
- **Context Recall**: is all the necessary info retrieved?
- **Answer Faithfulness**: is the answer grounded in the context?
- **Answer Relevance**: is the answer useful to the question?

### 3. Agent evaluation
- **Task Completion Rate**: % of tasks completed successfully
- **Steps Efficiency**: number of steps to complete the task
- **Tool Usage Accuracy**: right tools called with the right parameters
- **Human Escalation Rate**: % of cases requiring human intervention

## Reference public benchmarks (2025-2026)

| Benchmark | What it measures | State in 2026 |
|---|---|---|
| **GPQA Diamond** | PhD-level reasoning (bio/physics/chemistry) | Active — reasoning reference |
| **IFEval** | Following complex instructions | Active — control capability |
| **MMLU-Pro** | MMLU + reasoning (replaces classic MMLU) | Active |
| **HumanEval+** / **LiveCodeBench** | Code generation (saturated on plain HumanEval) | Active — code |
| **TruthfulQA** | Resistance to popular misconceptions | Active |
| **SWE-bench Verified** | Ability to solve real GitHub issues | Code-agent reference |
| **τ-bench** (Tau-Bench) | Agentic tasks with tools (airline, retail) | Agent reference 2025+ |
| **LMArena Elo** | Comparative human preferences | Vibes reference |
| **MMLU** / **HumanEval** | ⚠ Saturated (2023) — avoid as a primary metric | Obsolete |

## Evaluation tools (2026)

| Tool | Use | Note |
|---|---|---|
| **RAGAs** | RAG pipelines (faithfulness, context_recall) | De facto standard |
| **DeepEval** | LLM tests (pytest-like, ~40 metrics) | For CI/CD |
| **Braintrust** | Eval + logging + dataset management | SaaS, recommended for prod |
| **LangSmith** | Tracing + LangChain evaluation | Coupled with LangChain |
| **Promptfoo** | Prompt comparison (matrix tests) | Lightweight CLI |
| **Inspect AI** (UK AISI) | Security / red-team evaluations | Open source |
| **OpenAI Evals** | OpenAI test framework | If on an OpenAI stack |

## Golden Dataset — Template

A golden dataset is the **ground truth** you measure the system against. Manually curated, versioned in git.

```yaml
# golden_dataset.yaml — versioned in git, reviewed by a domain expert
version: "2026.05"
domain: "insurance_customer_support"
samples:
  - id: "GS-001"
    category: "simple_claim"
    difficulty: "easy"
    question: "How do I report water damage?"
    expected_answer_contains:        # required keywords
      - "online form"
      - "claim statement"
      - "5 business days"
    must_cite_source: "art-L113-2"   # expected legal reference
    must_not_contain:                # guardrails (hallucination)
      - "immediate reimbursement"
      - "100% covered"
  - id: "GS-002"
    category: "edge_case"
    difficulty: "hard"
    question: "Does my insurance cover a claim abroad while working remotely?"
    expected_answer_contains:
      - "territorial extension"
      - "policy verification"
    must_escalate_to_human: true     # the system must trigger an escalation
```

**Recommended size**: 50 cases minimum (POC), 200-500 (production), with 20-30% edge cases.

## Monthly report format

```
EVAL REPORT — [System] — [Month]
====================================
Model       : claude-sonnet-4-6
Dataset     : golden_v2026.05 (N=247)

SCORES:
  Faithfulness         : 0.91 (target ≥ 0.90)  ✓
  Context Recall       : 0.84 (target ≥ 0.80)  ✓
  Answer Relevancy     : 0.88 (target ≥ 0.85)  ✓
  Hallucination Rate   : 3.2% (target ≤ 5%)    ✓
  Escalation Precision : 0.76 (target ≥ 0.80)  ✗ → action plan

REGRESSIONS vs MONTH-1:
  - 4 degraded cases (cf. cases_regressed.csv)

ACTIONS:
  1. Improve the escalation prompt (see PR #142)
  2. Enrich the golden set with 15 new remote-work edge cases
```

## Deliverables
- Evaluation report with scores per dimension
- Reference golden dataset (50-200 Q/A)
- Continuous metrics dashboard
- Improvement recommendations (prompt, RAG, model)

## Output format
Specify: system type (LLM only, RAG, agent) · use case · priority metrics · evaluation frequency
