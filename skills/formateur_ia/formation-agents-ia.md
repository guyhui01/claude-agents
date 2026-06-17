# Skill — Training on AI Agents and Agentic Architectures

> Certifications: Anthropic Claude Code in Action (2026), CAP IABAC, AWS Certified AI Practitioner (AIF-C01), DeepLearning.AI — AI Agents in LangGraph

## Objective

Design and deliver a training module on AI agents: agentic architectures, multi-agent patterns, MCP/A2A protocols, orchestration, and deployment — for technical profiles (dev, architect, MLOps) and semi-technical ones (PO, tech lead, AI project manager).

## Modular program

### Module 1 — Understanding AI agents (2h — all levels)

```
SEQUENCE                                     TIME     FORMAT
─────────────────────────────────────────   ──────   ──────────────
What is an AI agent? (vs plain LLM)          30 min   Mini-lecture + demo
The 5 agent patterns (ReAct, Tool Use…)      30 min   Slides + concrete examples
Live demo: Claude agent with tools           20 min   Demonstration
Workshop: map an agent use case              30 min   Group lab
Wrap-up + Q&A                                10 min   Plenary
```

### Module 2 — Multi-agent architectures (3h — tech/semi-tech profiles)

```
SEQUENCE                                     TIME     FORMAT
─────────────────────────────────────────   ──────   ──────────────
Orchestration patterns (seq., parallel)      30 min   Slides + diagrams
MCP — Model Context Protocol (concepts)      30 min   Diagram + MCP tool demo
A2A — Agent-to-Agent (Google protocol)       20 min   Presentation + case
Workshop: design a multi-agent workflow      60 min   Lab on a real business case
Selection criteria: LangGraph vs CrewAI      30 min   Comparison
Lessons learned: pitfalls & good practices   10 min   Guided discussion
```

### Module 3 — Building an agent with Claude (half-day — tech profiles)

```
SEQUENCE                                     TIME     FORMAT
─────────────────────────────────────────   ──────   ──────────────
Anthropic API: tool use and function calling 30 min   Code + demo
Prompt engineering for agents (system prompt) 30 min   Workshop
Context and agent memory management          20 min   Explanation + code
Guided lab: build an agent step by step      90 min   Hands-on Claude Code
Evaluating and testing an AI agent           20 min   Metrics + evals
Deployment and monitoring (concepts)         10 min   Presentation
```

## Key teaching content

### The 5 fundamental agent patterns

```
PATTERN          DESCRIPTION                              USE CASE
──────────────   ──────────────────────────────────────   ──────────────────────
ReAct            Reason + Act in a loop (observation)     Search + computation
Tool Use         Calling external tools (API, DB, code)   Task automation
Reflexion        Self-critique & iterative improvement    Writing, code review
Planning         Breaking a task into subtasks            Complex projects
Multi-agent      Orchestrate several specialized agents   Complex workflows
```

### 2026 agent frameworks comparison

```
FRAMEWORK      STRENGTH                 LIMITATION           TARGET
──────────────  ──────────────────────  ───────────────────  ──────────────────
LangGraph       Fine-grained flow ctrl   Learning curve       Advanced tech
CrewAI          Simple API, roles        Less control         PO/PM/junior dev
AutoGen         Microsoft, multi-agent   Azure dependency     MS context
Claude SDK      Anthropic-native cache   Single LLM           Claude ecosystem
n8n/Make        Low-code, visual         Limited scalability  Non-tech
```

## Hands-on activities

### Workshop "Design an agent for my role" (60 min)

```
STEP 1 — Identify the use case (15 min)
→ Which repetitive, attention-costly process?
→ What are the inputs / the possible actions?
→ When is a human-in-the-loop needed?

STEP 2 — Architect the agent (20 min)
→ Which tools must this agent call? (search, DB, API, code)
→ What is the decision logic?
→ How to handle errors and edge cases?

STEP 3 — Write the agent system prompt (15 min)
→ Agent role and instructions
→ Output format
→ Constraints and safety rules

STEP 4 — Present and critique (10 min)
→ 2-min presentation per group
→ Peer feedback: relevance, risks, feasibility
```

## Training deliverables

- "5 AI agent patterns" guide (laminated A3, for workshops)
- 2026 agent frameworks comparison (double-sided sheet)
- Agent system prompt template (Confluence template)
- Annotated hands-on labs (with answer keys) — 3 difficulty levels
- Additional resources: Anthropic, LangGraph, CrewAI docs

## Output format

Specify: **participant profile** (dev / PO / architect / mixed), **available duration** (2h / half-day / full day), **target framework** (Claude SDK / LangGraph / CrewAI / no preference), **available business case** (optional for the lab), **current AI level** (1-5).

## Sources
- **Anthropic** — *Building Effective Agents* (2024) — workflow & agent patterns
- **Anthropic** — *Model Context Protocol (MCP)* (2024) — tool connection
- **Wei et al.** — *Chain-of-Thought Prompting* (NeurIPS 2022); **Yao et al.** — *ReAct* (2023)
- **LangGraph** (LangChain), **CrewAI**, **AutoGen** (Microsoft) documentation

## Anti-patterns
- Teaching frameworks (LangGraph/CrewAI) before the fundamental patterns (ReAct, tool use)
- "Agent" lab with no guardrails (costs, infinite loops, observability)
- Presenting patterns (ReAct, CoT) without attributing them to the papers
- Multi-agent by default when a single prompt would do (over-engineering)
- Not evaluating or monitoring the agent built in the lab

## See also
- [formation-claude-code.md](formation-claude-code.md) — Claude Code / API foundation
- [prompt-engineering-formation.md](prompt-engineering-formation.md) — agent prompts
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — frame an agent's behavior
- [`../prompt_engineer/chain-of-thought.md`](../prompt_engineer/chain-of-thought.md) — structured reasoning
