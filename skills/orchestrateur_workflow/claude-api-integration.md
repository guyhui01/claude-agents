# Skill — Intégration Anthropic SDK et Prompt Chaining
> Certifications : Anthropic Claude Code in Action (2026), Claude Code 101 (2026), AWS Certified Solutions Architect (Amazon)

## Objectif
Implémenter techniquement l'orchestration d'agents via l'Anthropic SDK — appels API chaînés, tool use, prompt caching, streaming, gestion des tokens — pour construire des workflows agentiques performants et économiques.

## Setup Anthropic SDK

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

## Appel agent simple — Template

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
  "Tu es un Product Owner Scrum Expert certifié PSPO1...",
  `Rédige 8 User Stories à partir de ce brief : ${brief}`
);
```

## Prompt Chaining — Orchestration séquentielle

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
    console.log(`[ORCHESTRATEUR] → ${step.agent}`);

    const userMessage = step.buildUserMessage(outputs);
    const result = await callAgent(step.agent, step.systemPrompt, userMessage);
    outputs.set(step.agent, result);

    console.log(`[${step.agent}] ✅ Output produit (${result.length} chars)`);
  }

  return outputs;
}

// Exemple WF-001 Cadrage Produit IA
const wf001Steps: ChainStep[] = [
  {
    agent: "BUSINESS-ANALYST",
    systemPrompt: "Tu es un Business Analyst expert...",
    buildUserMessage: (outputs) =>
      `Analyse ce brief client : ${outputs.get("initial_context")}`,
  },
  {
    agent: "PO-SCRUM",
    systemPrompt: "Tu es un Product Owner Scrum Expert certifié PSPO1...",
    buildUserMessage: (outputs) =>
      `Rédige 8 US à partir de cette analyse : ${outputs.get("BUSINESS-ANALYST")}`,
  },
  {
    agent: "QA-AGILE",
    systemPrompt: "Tu es un QA Expert certifié ISTQB...",
    buildUserMessage: (outputs) =>
      `Rédige les critères d'acceptation pour ces US : ${outputs.get("PO-SCRUM")}`,
  },
];

const results = await runSequentialChain(wf001Steps, briefClient);
```

## Prompt Caching — Optimisation coûts

```typescript
// Le system prompt de l'agent est mis en cache (TTL 5 min)
// Économie : jusqu'à 90% sur les tokens d'entrée répétés

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 4096,
  system: [
    {
      type: "text",
      text: longAgentSystemPrompt, // > 1024 tokens pour activer le cache
      cache_control: { type: "ephemeral" }, // Cache activé
    },
  ],
  messages: [{ role: "user", content: userMessage }],
});

// Vérifier le cache hit dans les métriques
console.log("Cache read tokens:", response.usage.cache_read_input_tokens);
console.log("Cache write tokens:", response.usage.cache_creation_input_tokens);
```

## Tool Use — Agent avec outils

```typescript
const tools: Anthropic.Tool[] = [
  {
    name: "save_user_story",
    description: "Sauvegarde une User Story structurée",
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

  // Boucle agentic — continue jusqu'à stop_reason = "end_turn"
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

## Streaming — Feedback temps réel

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
  console.log("\n[AGENT] ✅ Terminé");

  return await stream.finalMessage();
}
```

## Gestion des tokens et limites

```typescript
// Calculer les tokens avant envoi (estimation)
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4); // ~4 chars par token
}

// Garde-fous pour les workflows longs
// Claude Sonnet 4.6 / Opus 4.7 = 200K context window (2026)
// Pour Opus 4.7 contexte étendu, augmenter à 1M tokens si activé
const MAX_CONTEXT_TOKENS = 200_000;
const SAFETY_MARGIN_TOKENS = 8_192; // Marge de sécurité pour réponse + tools

// Anthropic BatchAPI : pour workflows asynchrones non-interactifs
// → coûts -50% via batch processing (jusqu'à 24h délai)
// → idéal pour : audits de masse, génération offline, evaluation suites
// → docs.anthropic.com/claude/docs/batch-api

function buildSafeContextPacket(
  systemPrompt: string,
  previousOutputs: string[],
  currentMessage: string
): string {
  const systemTokens = estimateTokens(systemPrompt);
  const messageTokens = estimateTokens(currentMessage);
  let availableTokens = MAX_CONTEXT_TOKENS - systemTokens - messageTokens - SAFETY_MARGIN_TOKENS;

  // Tronquer les outputs précédents si nécessaire (les plus anciens en premier)
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

## Livrables
- Setup SDK TypeScript / Python
- Prompt chaining séquentiel opérationnel
- Prompt caching activé (économie coûts)
- Tool use avec boucle agentic
- Streaming pour feedback temps réel
- Gestion des limites de tokens

## Format de sortie
Précise : langage (TypeScript / Python), modèle cible, nombre d'agents à chaîner, besoin de tool use ou streaming.
