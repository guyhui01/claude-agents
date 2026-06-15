# Skill — AI Product PO (Responsible AI Ownership)

> Certification: PSPO-AI (Scrum.org 2024) · PSPO II
> Agent: AGENT-PO-SCRUM.md

## Objective

Manage the backlog and strategy of a product that embeds generative AI or ML in a regulated context (EU AI Act 2025-2026, NIST AI RMF, ISO 42001) — i.e. move from deterministic acceptance to **probabilistic**, measured and traced acceptance.

## Regulatory & normative framework (to know before any AI backlog)

| Framework | Year | Scope | PO impact |
|---|---|---|---|
| **EU AI Act** (Reg. 2024/1689) | 2024, application 2025-2027 | 4 risk levels: prohibited, high, limited, minimal | Classify each AI feature, plan for transparency (art. 50), human oversight (art. 14) |
| **NIST AI RMF 1.0** | Jan. 2023 | 4 functions: Govern, Map, Measure, Manage | Structures the AI Risk Register and lifecycle steering |
| **ISO/IEC 42001** | 2023 | AIMS (certifiable AI Management System) | AI product governance framework |
| **ISO/IEC 23894** | 2023 | AI risk management | Risk taxonomy + treatment |
| **PSPO-AI Guide** | Scrum.org 2024 | 5 PO responsibilities in an AI context | Role framework |

## PO posture in AI — What changes

- **Probabilistic, not deterministic outputs** → acceptance criteria = **statistical thresholds** (precision, recall, p95 latency) rather than "must return X"
- **Fuzzy value at the start** → reinforced discovery, hypotheses tested with A/B + shadow mode before rollout
- **Versioned models** (LLM v1 vs v2, fine-tuning) → version the expected behaviors in the DoD (cf. [dor-dod.md](dor-dod.md))
- **Regulation = a backlog requirement**, not an annex → the AI Act introduces mandatory items (logging, transparency, fallback)

## 5 PSPO-AI responsibilities (Scrum.org 2024)

1. **AI Vision** — Demonstrate why AI beats a deterministic business rule (otherwise don't deploy it)
2. **AI Ethics** — Fairness, transparency, privacy, non-harm (alignment with AI Act art. 5)
3. **AI Backlog** — Stories tailored to uncertainty (cf. [ai-user-stories.md](ai-user-stories.md))
4. **AI Value** — Measure business value + model metrics, never one without the other
5. **AI Risk** — Identification, mitigation, continuous monitoring (cf. [gestion-risques.md](gestion-risques.md))

## AI Risk Register — NIST AI RMF structure

| NIST function | Question to address | PO deliverable |
|---|---|---|
| **Govern** | Who is accountable, which policies, what compliance? | AI product charter, RACI, decision traceability |
| **Map** | What context, which actors, what tolerable risk? | Use-case mapping, AI Act classification |
| **Measure** | How to quantify risks and performance? | Metrics dashboard (cf. next section) |
| **Manage** | How to treat, monitor, gracefully degrade? | Mitigation plan, fallback, kill switch |

**AI risk taxonomy**: hallucination · bias (gender, age, origin) · prompt injection (OWASP LLM01) · data leak · model drift · LLM-vendor dependency · compliance (AI Act, GDPR, sector-specific) · unpredictable compute cost.

## AI metrics — Probabilistic acceptance

| Metric | Definition | Source / reference | Indicative threshold |
|---|---|---|---|
| `hallucination_rate` | % factually wrong answers | FActScore (Min et al. 2023) | ≤ 2% (consumer use) |
| `factuality_score` | Benchmark truthfulness score | TruthfulQA (Lin et al. 2022) | ≥ 0.7 |
| `disparate_impact_ratio` | Acceptance ratio protected group / majority | EEOC 4/5ths rule (1978), echoed by the AI Act | ≥ 0.8 (US legal threshold, EU alert) |
| `confidence_calibration` | Expected Calibration Error (ECE) | Guo et al. 2017 | ECE ≤ 0.05 |
| `latence_p95` / `p99` | Response time at the 95th / 99th percentile | Google SRE (Beyer et al. 2016) | p95 ≤ 500ms (interactive UX) |
| `precision` / `recall` / `F1` | Classification performance | ML standard | Depends on use case (cf. example) |
| `human_override_rate` | % of outputs corrected by the user | Perceived-quality signal | < 10% (otherwise revisit the model) |

## Worked example — "AI product recommendation" feature (retail e-commerce)

**User Story**: *As a logged-in buyer, I want to receive 3 personalized product recommendations on the product page, so that I can discover relevant complementary items.*

**Acceptance criteria** (excerpt — full version in [po-acceptance-tests.md](po-acceptance-tests.md)):

| AC | Threshold |
|---|---|
| Precision@3 (click) | ≥ 0.70 measured over a rolling 7 days |
| Recall@10 (catalog covered) | ≥ 0.60 |
| Inference p95 latency | ≤ 500 ms |
| `hallucination_rate` (recommended product in stock) | ≤ 1% (blocker) |
| `disparate_impact_ratio` (gender / age bracket) | ≥ 0.8 |
| **Non-AI fallback**: if latency > 800 ms or model unavailable → category top 3 sellers | Mandatory |
| "Personalized AI suggestions" transparency notice visible | AI Act art. 50 compliance |
| Decision logging (inputs, model version, output) | 6-month retention |

## AI Act → PO backlog mapping

| Risk level | Examples | Mandatory backlog items |
|---|---|---|
| **Prohibited** (art. 5) | Social scoring, behavioral manipulation | Do not develop |
| **High risk** (art. 6, Annex III) | Recruitment, credit scoring, biometrics | Technical documentation, effective human oversight, logging, robustness, data quality — dedicated backlog items |
| **Limited risk** (art. 50) | Chatbot, deepfake, generated content | Transparency: the user is informed they're interacting with AI |
| **Minimal risk** | Spam filter, basic product rec | Recommended best practices, no strict legal obligation |

## AI PO anti-patterns

- ❌ **AI feature with no non-AI fallback** — a model down = product down (service-continuity breach)
- ❌ **No user-confidence measurement** — `human_override_rate` not instrumented = no drift signal
- ❌ **Prompt-injection security ignored** — OWASP LLM01 not covered, attack surface open
- ❌ **Training data not documented** — Datasheets for Datasets (Gebru et al. 2021) missing, AI Act art. 10 compliance impossible
- ❌ **Acceptance criteria without statistical thresholds** — "the model works well" is not an AC, it's a wish
- ❌ **No transparency** — "AI magic" presented without a notice = AI Act art. 50 breach
- ❌ **No model versioning** — impossible to reproduce a past behavior, impossible to audit a contested decision
- ❌ **Value measure = "feature shipped"** instead of business outcome (revenue uplift, NPS, click rate) — output ≠ outcome (cf. [product-metrics-ebm.md](product-metrics-ebm.md))

## Deliverables

- **AI Product Vision Statement** — Product Vision Board extension (Pichler) with a "Why AI" section
- **Versioned AI Backlog** — each story carries the expected model version
- **AI Risk Register** — structured by NIST AI RMF (Govern/Map/Measure/Manage)
- **Model Card** (Mitchell et al. 2019) + **Datasheet for Datasets** (Gebru et al. 2021)
- **Metrics dashboard** — pairs model metrics + business metrics

## Output format

For each AI feature, specify:
- **AI type**: generative LLM · classic ML · computer vision · RAG · agent
- **Use case**: description + target user
- **AI Act risk level**: prohibited / high / limited / minimal (justify)
- **Regulatory constraints**: GDPR, AI Act, sector-specific (DSA, DORA banking, MDR health…)

## Sources

- **PSPO-AI Guide** — Scrum.org (2024) — https://www.scrum.org/resources/professional-scrum-product-owner-pspo-ai-guide
- **EU AI Act** — Regulation (EU) 2024/1689 of June 13, 2024 — OJ L 2024/1689
- **NIST AI Risk Management Framework 1.0** — NIST (Jan. 2023)
- **ISO/IEC 42001:2023** — AI Management System
- **ISO/IEC 23894:2023** — AI Risk Management
- **OWASP Top 10 for LLM Applications** — OWASP (2024, v2)
- Gebru et al. — *Datasheets for Datasets* (Comm. ACM, 2021)
- Mitchell et al. — *Model Cards for Model Reporting* (FAT*, 2019)
- Min et al. — *FActScore: Fine-grained Atomic Evaluation of Factual Precision* (EMNLP 2023)
- Lin, Hilton, Evans — *TruthfulQA* (ACL 2022)
- Guo et al. — *On Calibration of Modern Neural Networks* (ICML 2017)
- Beyer et al. — *Site Reliability Engineering* (Google / O'Reilly 2016) — on p95/p99

## See also

- [ai-user-stories.md](ai-user-stories.md) — user story formats tailored to AI uncertainty
- [dor-dod.md](dor-dod.md) — embed AI criteria (bias, hallucination, fallback) in the DoD
- [gestion-risques.md](gestion-risques.md) — project risk management, articulation with the AI Risk Register
- [product-metrics-ebm.md](product-metrics-ebm.md) — value measurement (EBM) — pairing business + model metrics
- [product-vision.md](product-vision.md) — Product Vision Board, basis of the AI Vision Statement
- [`../securite_ia/owasp-llm-top10.md`](../securite_ia/owasp-llm-top10.md) — detailed OWASP LLM Top 10 (prompt injection, data leak)
- [`../juridique_ia/ai-act-conformite.md`](../juridique_ia/ai-act-conformite.md) — EU AI Act — operational compliance guide
