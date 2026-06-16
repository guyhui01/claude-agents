# Skill — Anthropic SDK Integration and Prompt Chaining
> Certifications: Anthropic Claude Code in Action (2026), Claude Code 101 (2026), AWS Certified Solutions Architect (Amazon)

## Objective
Technically implement agent orchestration via the Anthropic SDK — chained API calls, tool use, prompt caching, streaming, token management — to build performant and cost-efficient agentic workflows.

## Anthropic SDK setup

```typescript
// TypeScript — Installation
// npm install @anthropic-ai/sdk

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Python — Installation
// pip install anthropic

import anthropic
client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
```

## Simple agent call — Template

```typescript
async function callAgent(
  agentRole: string,
  agentInstructions: string,
  userMessage: string,
  model = "claude-sonnet-4-6"
): Promise<string> {
  const response = await client.messages.create({
    model,
    max_tokens: 4096,
    system: agentInstructions,
    messages: [{ role: "user", content: userMessage }],
  });

  return response.content[0].type === "text" ? response.content[0].text : "";
}

// Usage
const output = await callAgent(
  "PO-SCRUM",
  "You are a PSPO1-certified Product Owner Scrum Expert...",
  `Write 8 User Stories from this brief: ${brief}`
);
```

## Prompt Chaining — Sequential orchestration

```typescript
interface ChainStep {
  agent: string;
  systemPrompt: string;
  buildUserMessage: (previousOutputs: Map<string, string>) => string;
}

async function runSequentialChain(
  steps: ChainStep[],
  initialContext: string
): Promise<Map<string, string>> {
  const outputs = new Map<string, string>();
  outputs.set("initial_context", initialContext);

  for (const step of steps) {
    console.log(`[ORCHESTRATOR] → ${step.agent}`);

    const userMessage = step.buildUserMessage(outputs);
    const result = await callAgent(step.agent, step.systemPrompt, userMessage);
    outputs.set(step.agent, result);

    console.log(`[${step.agent}] ✅ Output produced (${result.length} chars)`);
  }

  return outputs;
}

// Example WF-001 AI Product Scoping
const wf001Steps: ChainStep[] = [
  {
    agent: "BUSINESS-ANALYST",
    systemPrompt: "You are an expert Business Analyst...",
    buildUserMessage: (outputs) =>
      `Analyze this client brief: ${outputs.get("initial_context")}`,
  },
  {
    agent: "PO-SCRUM",
    systemPrompt: "You are a PSPO1-certified Product Owner Scrum Expert...",
    buildUserMessage: (outputs) =>
      `Write 8 US from this analysis: ${outputs.get("BUSINESS-ANALYST")}`,
  },
  {
    agent: "QA-AGILE",
    systemPrompt: "You are an ISTQB-certified QA Expert...",
    buildUserMessage: (outputs) =>
      `Write the acceptance criteria for these US: ${outputs.get("PO-SCRUM")}`,
  },
];

const results = await runSequentialChain(wf001Steps, clientBrief);
```

## Prompt Caching — Cost optimization

```typescript
// The agent's system prompt is cached (5 min TTL)
// Saving: up to 90% on repeated input tokens

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 4096,
  system: [
    {
      type: "text",
      text: longAgentSystemPrompt, // > 1024 tokens to enable the cache
      cache_control: { type: "ephemeral" }, // Cache enabled
    },
  ],
  messages: [{ role: "user", content: userMessage }],
});

// Check the cache hit in the metrics
console.log("Cache read tokens:", response.usage.cache_read_input_tokens);
console.log("Cache write tokens:", response.usage.cache_creation_input_tokens);
```

## Tool Use — Agent with tools

```typescript
const tools: Anthropic.Tool[] = [
  {
    name: "save_user_story",
    description: "Saves a structured User Story",
    input_schema: {
      type: "object" as const,
      properties: {
        title: { type: "string" },
        as_a: { type: "string" },
        i_want: { type: "string" },
        so_that: { type: "string" },
        acceptance_criteria: { type: "array", items: { type: "string" } },
        story_points: { type: "number" },
      },
      required: ["title", "as_a", "i_want", "so_that", "acceptance_criteria"],
    },
  },
];

async function callAgentWithTools(systemPrompt: string, userMessage: string) {
  let messages: Anthropic.MessageParam[] = [
    { role: "user", content: userMessage },
  ];

  // Agentic loop — continue until stop_reason = "end_turn"
  while (true) {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: systemPrompt,
      tools,
      messages,
    });

    if (response.stop_reason === "end_turn") break;

    if (response.stop_reason === "tool_use") {
      const toolResults: Anthropic.ToolResultBlockParam[] = [];

      for (const block of response.content) {
        if (block.type === "tool_use") {
          const result = await executeTool(block.name, block.input);
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: JSON.stringify(result),
          });
        }
      }

      messages = [
        ...messages,
        { role: "assistant", content: response.content },
        { role: "user", content: toolResults },
      ];
    }
  }
}
```

## Streaming — Real-time feedback

```typescript
async function streamAgent(systemPrompt: string, userMessage: string) {
  const stream = await client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  process.stdout.write("[AGENT] ");
  for await (const chunk of stream) {
    if (
      chunk.type === "content_block_delta" &&
      chunk.delta.type === "text_delta"
    ) {
      process.stdout.write(chunk.delta.text);
    }
  }
  console.log("\n[AGENT] ✅ Done");

  return await stream.finalMessage();
}
```

## Token management and limits

```typescript
// Estimate tokens before sending (estimate)
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4); // ~4 chars per token
}

// Guardrails for long workflows
// Claude Sonnet 4.6 / Opus 4.8 = 200K context window (2026)
// For extended context (if enabled), increase to 1M tokens
const MAX_CONTEXT_TOKENS = 200_000;
const SAFETY_MARGIN_TOKENS = 8_192; // Safety margin for response + tools

// Anthropic Batch API: for asynchronous non-interactive workflows
// → -50% cost via batch processing (up to 24h delay)
// → ideal for: bulk audits, offline generation, evaluation suites
// → docs.anthropic.com/claude/docs/batch-api

function buildSafeContextPacket(
  systemPrompt: string,
  previousOutputs: string[],
  currentMessage: string
): string {
  const systemTokens = estimateTokens(systemPrompt);
  const messageTokens = estimateTokens(currentMessage);
  let availableTokens = MAX_CONTEXT_TOKENS - systemTokens - messageTokens - SAFETY_MARGIN_TOKENS;

  // Truncate previous outputs if needed (oldest first)
  const truncatedOutputs: string[] = [];
  for (const output of previousOutputs.reverse()) {
    const outputTokens = estimateTokens(output);
    if (availableTokens - outputTokens > 0) {
      truncatedOutputs.unshift(output);
      availableTokens -= outputTokens;
    } else {
      break;
    }
  }

  return truncatedOutputs.join("\n\n---\n\n") + "\n\n" + currentMessage;
}
```

## Deliverables
- TypeScript / Python SDK setup
- Operational sequential prompt chaining
- Prompt caching enabled (cost saving)
- Tool use with an agentic loop
- Streaming for real-time feedback
- Token-limit management

## Output format
Specify: the language (TypeScript / Python), the target model, the number of agents to chain, the need for tool use or streaming.

## Anti-patterns
- ❌ **API key exposed client-side**: leak → server-side calls only
- ❌ **Hardcoded model** scattered around: maintenance → centralize the ID (Opus 4.8 for reasoning / Sonnet 4.6 for runtime)
- ❌ **No retry/backoff** on `RateLimitError`: failures at peak → exponential backoff + jitter
- ❌ **Ignoring prompt caching** on large system prompts (> 1024 tokens): extra cost → ephemeral `cache_control`
- ❌ **Estimating tokens loosely with no margin**: window overflow → safety margin (8K) + real counting

## Sources
- **Anthropic API** — docs.anthropic.com (Messages, **prompt caching** read ≈0.1× input, **Batch API** −50%, tool use, streaming) · header `anthropic-version: 2023-06-01` (current)
- Models: **`claude-opus-4-8`** (reasoning) · **`claude-sonnet-4-6`** (runtime, 200K context)

## See also
- [`langgraph-crewai-patterns.md`](langgraph-crewai-patterns.md) — orchestration patterns on this SDK
- [`mcp-orchestration.md`](mcp-orchestration.md) — expose/consume agents via MCP
- [`workflow-automation.md`](workflow-automation.md) — production integration
- [`../prompt_engineer/prompt-optimization.md`](../prompt_engineer/prompt-optimization.md) — caching, batch, model selection
