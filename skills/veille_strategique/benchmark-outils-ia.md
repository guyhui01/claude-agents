# Skill — Benchmarking and Evaluating AI Tools
> Certifications: Anthropic Claude Code in Action (2026), SIC (SCIP — Strategic Consortium of Intelligence Professionals), PMI-PBA (PMI)

## Objective
Evaluate and compare AI tools on objective criteria — performance, cost, compliance, ergonomics — to recommend the solutions best suited to Guy HUI-BON-HOA's projects and his clients.

## Universal evaluation grid — AI tools

| Criterion | Weight | Description |
|---|---|---|
| Output quality | 25% | Accuracy, relevance, creativity of responses |
| Cost / usage | 20% | Incl. tax, pricing model, real usage cost |
| GDPR compliance | 20% | Data location, DPA available, SOC2 |
| Integration / API | 15% | API available, SDK quality, documentation |
| Ergonomics / UX | 10% | Ease of use, learning curve |
| Community / Support | 10% | Docs, forum, support responsiveness |

## LLM benchmark — Frame (to fill in at each edition)

> ⚠️ **Never freeze pricing, context, or scores**: these values change in weeks (AI intelligence cycle). Fill in from the **official pricing pages** and the **public leaderboards** (LMArena / Chatbot Arena; *Open LLM Leaderboard archived since June 2024* → no longer use as a live source; Papers With Code; Artificial Analysis). Compare by **tier** (frontier / standard / eco) rather than by raw figure.

| Criterion | Model A (frontier) | Model B | Model C | Model D (eco/open) |
|---|---|---|---|---|
| Reasoning quality | [⭐ via dated leaderboard] | … | … | … |
| Cost / MTok input | [official pricing] | … | … | … |
| Max context | [vendor doc] | … | … | … |
| GDPR / EU (hosting, DPA) | [to verify] | … | … | … |
| API quality (SDK, docs) | … | … | … | … |
| Multimodal | … | … | … | … |

> **Reference anchor (to refresh)**: Anthropic family at the time of writing — Claude **Fable 5** (most capable / long-horizon), **Opus 4.8** (reasoning/agents), **Sonnet 5** (high-volume/vision), **Haiku 4.5** (fast/eco). For other vendors, cite the version + its release date (avoid labeling an older model as "2026").

## Workflow / Automation benchmark

> Prices and ratings below = indicative references to verify on the vendor sites (plans evolve).

| Tool | Usage | Strength | Limit | Price | Rating |
|---|---|---|---|---|---|
| n8n | No-code workflow | Visual, self-hosted | Complex | Free/Cloud | ⭐⭐⭐⭐ |
| Make | Automation | 1500+ integrations | Per-operation cost | €9/month+ | ⭐⭐⭐⭐ |
| Zapier | Simple automation | Easy | Expensive, limited | €20/month+ | ⭐⭐⭐ |
| LangChain | Agent dev | Flexible, Python | Dev complexity | Open source | ⭐⭐⭐ |
| Claude Code | Dev + agents | Native AI, Claude | Paid | Usage | ⭐⭐⭐⭐⭐ |

## Test sheet — Quick template

```markdown
# BENCHMARK [TOOL] — [DATE]
Tester: Guy HUI-BON-HOA

## Test cases
1. [Nominal-case test — description + result]
2. [Edge-case test — description + result]
3. [Real-use-case test — description + result]

## Scores
Quality     : [X/5] — [comment]
Cost        : [X/5] — [actual price]
GDPR        : [X/5] — [where is data hosted?]
Integration : [X/5] — [REST API/SDK available?]
Usability   : [X/5] — [learning curve]

## Verdict
[RECOMMENDED / CONDITIONAL / NOT RECOMMENDED]
Optimal use case: [description]
Alternative to consider: [other tool]
```

## Deliverables
- Complete evaluation grid per tool
- Multi-tool comparison table
- Standardized test sheet
- Reasoned recommendation with optimal use case

## Output format
Specify: the tool category (LLM / workflow / RAG / agents), the priority use case, the constraints (budget, GDPR, required integrations).

## Anti-patterns
- ❌ **Fabricated "X/5" scores** with no test protocol or date — prefer a reference to dated leaderboards and a qualified verdict.
- ❌ **Frozen pricing/context** in the skill: a table doomed to obsolescence → fill in at each edition from the official sources.
- ❌ **Comparing models of different tiers** (frontier vs. eco) without saying so: distorts the cost/quality verdict.
- ❌ **Ignoring compliance** (EU hosting, DPA, SOC2) in favor of performance alone.

## See also
- [`veille-ia-llm.md`](veille-ia-llm.md) — tracking model releases
- [`synthese-periodique.md`](synthese-periodique.md) — benchmark distribution
- `AGENT-CONSULTANT-IA.md` (`benchmark-solutions-ia`) — RFI/RFP/POC/TCO method during an engagement
- `AGENT-FINANCIAL-ANALYST.md` — TCO/ROI financial analysis (boundary)

## Sources
- **Market evaluation methods**: Gartner Magic Quadrant + Hype Cycle (1995) · Forrester Wave · IDC MarketScape · ISO/IEC 25010:2023 (software quality)
- **Public leaderboards**: LMArena / Chatbot Arena · Papers With Code · Artificial Analysis · *Open LLM Leaderboard (HuggingFace) — archived June 2024, no longer use as a live source*
- **Pricing & specs**: vendors' official pages (anthropic.com, openai.com, ai.google.dev, mistral.ai)
- **Anthropic models at the time of writing**: Fable 5 / Opus 4.8 / Sonnet 5 / Haiku 4.5 (to refresh)
