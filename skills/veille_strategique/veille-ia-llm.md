# Skill — AI and LLM Intelligence
> Certifications: Anthropic Claude Code in Action (2026), SIC (SCIP — Strategic Consortium of Intelligence Professionals)

## Objective
Continuously monitor the AI and LLM ecosystem — new models, tools, frameworks, lab trends (Anthropic, OpenAI, Google, Meta) — to anticipate developments and feed strategic and commercial decisions.

## AI intelligence sources — Catalog

```
PRIMARY SOURCES (official announcements)
────────────────────────────────────────────────────────────
Anthropic  : anthropic.com/news · X @AnthropicAI
OpenAI     : openai.com/blog · X @OpenAI
Google AI  : blog.google/technology/ai · X @GoogleDeepMind
Meta AI    : ai.meta.com/blog
Mistral AI : mistral.ai/news

SECONDARY SOURCES (analyses and digests)
────────────────────────────────────────────────────────────
The Batch (deeplearning.ai)    : Andrew Ng weekly newsletter
AI Breakfast (Ben's Bites)     : Daily newsletter
Import AI (Jack Clark)         : Deep technical analysis
Stratechery                    : Strategic and business analysis
The Information                : Exclusive tech investigations

TECHNICAL SOURCES
────────────────────────────────────────────────────────────
ArXiv cs.AI/cs.CL              : Research papers
Papers With Code               : Benchmarks and SOTA
Hugging Face Hub               : Open source models
GitHub Trending (AI)           : Emerging frameworks
LMArena / Chatbot Arena        : Vote-based ranking (live leaderboard)
⚠ Open LLM Leaderboard (HF)    : ARCHIVED since June 2024 — history only

COMMUNITIES
────────────────────────────────────────────────────────────
Reddit r/MachineLearning
Twitter/X : AI lists (LeCun, Karpathy, Altman, Pichai)
LinkedIn : #GenAI #LLM #ArtificialIntelligence
```

## LLM intelligence table — Monthly template

> ⚠️ **Fill in at each edition** with each vendor's current version and its **actual release date** (don't label an older model with the intelligence date). Cross-check against live leaderboards (LMArena). Reason by **tier**: *frontier* (reasoning/agents), *standard* (high-volume/vision), *eco/open* (cost, local).

| Model | Vendor | Release | Context | Tier | Relevance |
|---|---|---|---|---|---|
| Claude Opus 4.8 | Anthropic | [YYYY-MM] | [doc] | frontier | ⭐⭐⭐ |
| Claude Sonnet 4.6 | Anthropic | [YYYY-MM] | [doc] | standard | ⭐⭐⭐ |
| [current version] | OpenAI | [YYYY-MM] | [doc] | … | … |
| [current version] | Google | [YYYY-MM] | [doc] | … | … |
| [open version] | Meta / Mistral | [YYYY-MM] | [doc] | eco/open | … |

> *Anthropic anchor at the time of writing (to refresh)*: Opus 4.8 · Sonnet 4.6 · Haiku 4.5.

## Monthly AI digest — Template

```markdown
# AI INTELLIGENCE — [MONTH YEAR]
Prepared by: Guy HUI-BON-HOA | Source: Anthropic, OpenAI, ArXiv

## 🔥 THE 3 KEY FACTS OF THE MONTH
1. **[FACT 1]** — [Short description + link]
   → Impact for our projects: [concrete implication]

2. **[FACT 2]** — [Short description]
   → Impact: [implication]

3. **[FACT 3]** — [Short description]
   → Impact: [implication]

## 📊 LLM BENCHMARK EVOLUTION
| Model | MMLU | HumanEval | Trend |
|---|---|---|---|
| [Model A] | [score] | [score] | ↑ |

## 💡 TRENDS TO WATCH
- [Trend 1: e.g. Rise of multimodal AI agents]
- [Trend 2: e.g. AI Act regulation — timeline]

## 🚀 IDENTIFIED OPPORTUNITIES
- [Opportunity for Guy's engagements]

## ⚠ RISKS / WARNING SIGNALS
- [Business or technical risk]
```

## Deliverables
- Monthly AI digest (Markdown / LinkedIn post)
- Updated LLM comparison table
- Alerts on critical developments
- Actionable recommendations for ongoing projects

## Output format
Specify: the intelligence scope (models / tools / regulation), the desired frequency, the distribution format (internal note / LinkedIn / newsletter).

## Anti-patterns
- ❌ **Frozen model table** with dates/contexts stamped on the intelligence day → obsolete in weeks; fill in from the vendor docs.
- ❌ **Benchmark scores copied with no date or source** (cf. the archived Open LLM Leaderboard) — always date and link them.
- ❌ **Intelligence = collection without triage**: with no hierarchy (facts / trends / weak signals), the stream drowns the signal.
- ❌ **Digest with no recommendation**: each intelligence piece closes with 2-3 concrete actions.

## See also
- [`benchmark-outils-ia.md`](benchmark-outils-ia.md) — tooled comparative evaluation
- [`analyse-tendances.md`](analyse-tendances.md) — macro perspective (Hype Cycle)
- [`synthese-periodique.md`](synthese-periodique.md) — distribution format
- `AGENT-PROMPT-ENGINEER.md` — leveraging model updates
- `AGENT-JURIDIQUE-IA.md` (`veille-reglementaire`) — AI Act / GDPR aspect

## Sources
- **Primary lab sources**: anthropic.com/news · openai.com/blog · blog.google/technology/ai · ai.meta.com/blog · mistral.ai/news
- **Leaderboards**: LMArena / Chatbot Arena · Papers With Code · Artificial Analysis · *Open LLM Leaderboard (HF) — archived June 2024*
- **Analyses**: The Batch (deeplearning.ai) · Import AI (Jack Clark) · Stratechery
- **Research**: ArXiv cs.AI / cs.CL · Hugging Face Hub
