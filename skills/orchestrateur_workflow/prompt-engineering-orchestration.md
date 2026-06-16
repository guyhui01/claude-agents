# Skill — Prompt Engineering for Orchestration
> Certifications: Anthropic Claude Code in Action (2026), Claude Code 101 (2026), Claude 101 (2026), PMI-ACP (PMI)

## Objective
Write and optimize the technical prompts of an agentic workflow orchestrator — agent system prompts, context-handoff prompts, decision prompts, and validation prompts — to maximize output quality and reliability.

## Anatomy of an agent system prompt

```
OPTIMAL STRUCTURE (order recommended by Anthropic)
────────────────────────────────────────────────────────
1. IDENTITY     → Who you are, what your expertise is
2. SCOPE        → What you do / don't do
3. RULES        → How you must behave
4. CONTEXT      → Information about the working environment
5. FORMAT       → How to structure your responses
6. EXAMPLES     → Few-shot if needed (optional)
────────────────────────────────────────────────────────
TARGET LENGTH : 300-800 tokens (enable caching if > 1024)
```

## System prompt template — Specialized agent

```
You are a [PRECISE ROLE] expert with the following certifications:
- [CERTIFICATION 1]
- [CERTIFICATION 2]

You assist [USER NAME] in [SPECIFIC DOMAIN].

## What you do
- [CAPABILITY 1]
- [CAPABILITY 2]
- [CAPABILITY 3]

## What you don't do
- [LIMIT 1] → redirect to [OTHER AGENT]
- [LIMIT 2]

## Behavior rules
- Always respond in English
- Explain what you are about to do before doing it
- Ask for confirmation before creating or modifying a file
- Use the exact vocabulary of [FRAMEWORK/METHOD]
- Produce deliverables ready to copy-paste into [TOOL]
- If anything is ambiguous, ask A SINGLE question before acting

## Default output format
[DESCRIBE THE EXPECTED FORMAT]
```

## Orchestrator prompt template — Routing decision

```
You are the orchestrator of an agentic workflow.
You have access to the following agents: [AGENT LIST].

Analyze the following request and decide:
1. Which agent to call FIRST and why
2. Which agents to call in PARALLEL (if applicable)
3. Which agent to call LAST for the synthesis

REQUEST : {user_request}

CLIENT CONTEXT :
- Industry : {sector}
- Methodology : {methodology}
- Constraints : {constraints}

Respond in strict JSON format:
{
  "main_agent": "AGENT_NAME",
  "reason": "explanation in 1 sentence",
  "parallel_agents": ["AGENT_A", "AGENT_B"],
  "synthesis_agent": "AGENT_NAME",
  "sequence": ["STEP-01", "STEP-02", "STEP-03"]
}
```

## Context-handoff prompt template

```
## WORKFLOW CONTEXT
You operate in the workflow "{workflow_name}" at step {step_number}/{total_steps}.

## WHAT WAS DONE BEFORE YOU
{previous_agent} produced:
---
{previous_output}
---

## YOUR MISSION
{specific_instructions}

## EXPECTED OUTPUT FORMAT
{output_format}

## SPECIFIC CONSTRAINTS
{specific_constraints}

Start by confirming in 1 sentence that you understood the context,
then produce the requested deliverable.
```

## Prompt optimization techniques

### 1. Positioning long context
```
# ❌ Bad — context buried in the mass
You are an expert. Here are 3000 tokens of context... Your mission is X.

# ✅ Good — mission BEFORE the long context
Your mission: write 8 User Stories.
Context to use:
---
{long_context}
---
Now produce the 8 US.
```

### 2. Explicit negative constraints
```
# ❌ Vague
Produce quality User Stories.

# ✅ Precise with negative constraints
Produce 8 User Stories in INVEST format.
DO NOT:
- Write epics (> 1 sprint)
- Omit acceptance criteria
- Use technical jargon in titles
- Exceed 3 acceptance criteria per US
```

### 3. Structured output format (JSON/YAML)
```
# Force a structured format to ease parsing
Respond ONLY in the following YAML format, with no text before or after:

```yaml
user_stories:
  - id: "US-01"
    title: "..."
    role: "As a..."
    action: "I want..."
    benefit: "so that..."
    criteria:
      - "Given... When... Then..."
    points: 3
    priority: "Must Have"
```
```

### 4. Chain-of-thought for complex decisions
```
# For complex routing or architecture decisions
Before answering, reason step by step:
1. Identify the main domain of the request
2. List the candidate agents and their scopes
3. Assess the dependencies between steps
4. Decide on the optimal sequencing
5. Formulate your final answer

Show your reasoning before the final decision.
```

### 5. Few-shot for critical formats
```
# Concrete examples for non-standard formats
Here are 2 examples of the expected format:

EXAMPLE 1 :
Input  : "User wants to filter products"
Output : US-01 | As a customer | I want to filter by category | so I can find quickly | AC: Given products displayed When I click filter Then filtered list | 3pts | Must Have

EXAMPLE 2 :
Input  : "Admin wants to export data"
Output : US-02 | As an admin | I want to export to CSV | so I can analyze sales | AC: Given report displayed When I click export Then CSV downloaded | 2pts | Should Have

Now produce the US for: {context}
```

## Anti-patterns to avoid

```
❌ Prompt too vague
   "Do a good analysis of this brief"
   → Specify: what kind of analysis, what format, what length

❌ Contradictory instructions
   "Be concise" + "Provide all the details"
   → Pick one instruction, define a target length

❌ Duplicated context
   Repeating the same context in system + user prompt
   → Put stable context in system (with cache), variable context in user

❌ No output format
   The agent freely picks its format → hard to parse
   → Always specify the exact format with an example

❌ Multiple requests in a single prompt
   "Write the US, create the test plan, and do the reporting"
   → Split into 3 distinct agent calls
```

## Deliverables
- Optimized agent system prompts
- Orchestrator routing prompts (JSON output)
- Context-handoff prompts
- Library of few-shot patterns
- Anti-pattern checklist

## Output format
Specify: the type of prompt to write (system / routing / handoff / validation), the target agent, the expected output format, specific constraints.

## Sources
- **Anthropic — Prompt Engineering Guide** (docs.anthropic.com/prompt-engineering) — system prompt structure, prompt caching (> 1024 tokens), recommended order
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, Dec. 2024) — orchestration prompts (routing, workers)
- **Chain-of-Thought** — Wei et al., *NeurIPS 2022* (arXiv 2201.11903) · **Few-shot** — Brown et al., *NeurIPS 2020* (arXiv 2005.14165)

## See also
- [`agent-routing.md`](agent-routing.md) — structured routing prompt
- [`context-handoff.md`](context-handoff.md) — context-handoff prompt
- [`output-validation.md`](output-validation.md) — validation prompt (LLM-as-judge)
- [`../prompt_engineer/system-prompt-design.md`](../prompt_engineer/system-prompt-design.md) — system prompt design
