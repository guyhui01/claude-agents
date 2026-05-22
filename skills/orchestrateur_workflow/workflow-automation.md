# Skill — Automatisation de Workflows (GitHub Actions, n8n, Make)
> Certifications : AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google), Anthropic Claude Code in Action (2026), ITIL 4 Foundation (Axelos)

## Objectif
Implémenter des déclencheurs techniques réels pour les workflows agentiques — automatisation via GitHub Actions, n8n, Make (ex-Integromat) et webhooks — pour exécuter les workflows sans intervention manuelle.

## GitHub Actions — Déclencheur de workflow agentique

```yaml
# .github/workflows/run-agent-workflow.yml
name: Run Agent Workflow

on:
  # Déclencheur manuel avec paramètres
  workflow_dispatch:
    inputs:
      workflow_id:
        description: "ID du workflow (WF-001, WF-002...)"
        required: true
        default: "WF-001"
      brief_client:
        description: "Brief client ou contexte"
        required: true
      methodologie:
        description: "Méthodologie"
        required: false
        default: "scrum"

  # Déclencheur sur issue GitHub (nouveau brief = nouveau workflow)
  issues:
    types: [labeled]

jobs:
  run-workflow:
    runs-on: ubuntu-latest
    if: github.event.label.name == 'agent-workflow'

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Run Agent Workflow
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          WORKFLOW_ID: ${{ github.event.inputs.workflow_id || 'WF-001' }}
          BRIEF_CLIENT: ${{ github.event.inputs.brief_client || github.event.issue.body }}
        run: |
          node scripts/run-workflow.js \
            --workflow "$WORKFLOW_ID" \
            --context "$BRIEF_CLIENT"

      - name: Save outputs to artifacts
        uses: actions/upload-artifact@v4
        with:
          name: workflow-outputs-${{ github.run_id }}
          path: outputs/
          retention-days: 30

      - name: Post results to issue
        if: github.event_name == 'issues'
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('outputs/report.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## Résultats du workflow agentique\n\n${report}`
            });
```

## Script d'exécution Node.js

```typescript
// scripts/run-workflow.js
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const client = new Anthropic();
const args = parseArgs(process.argv.slice(2));

const WORKFLOWS: Record<string, WorkflowStep[]> = {
  "WF-001": [
    { agent: "BUSINESS-ANALYST", agentFile: "AGENT-BUSINESS-ANALYST.md" },
    { agent: "PO-SCRUM", agentFile: "AGENT-PO-SCRUM.md" },
    { agent: "QA-AGILE", agentFile: "AGENT-QA-AGILE.md" },
  ],
};

async function main() {
  const workflow = WORKFLOWS[args.workflow];
  if (!workflow) throw new Error(`Workflow inconnu : ${args.workflow}`);

  mkdirSync("outputs", { recursive: true });
  const outputs = new Map<string, string>();
  outputs.set("context", args.context);

  for (const step of workflow) {
    const systemPrompt = readFileSync(step.agentFile, "utf8");
    const userMessage = buildMessage(step.agent, outputs);

    console.log(`[ORCHESTRATEUR] → ${step.agent}`);
    const result = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: userMessage }],
    });

    const output = result.content[0].type === "text" ? result.content[0].text : "";
    outputs.set(step.agent, output);
    writeFileSync(`outputs/${step.agent.toLowerCase()}.md`, output);
    console.log(`[${step.agent}] ✅`);
  }

  writeFileSync("outputs/report.md", buildReport(outputs));
}

main().catch(console.error);
```

## n8n — Workflow visuel avec agents IA

```json
{
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "agent-workflow",
        "responseMode": "responseNode"
      }
    },
    {
      "name": "Business Analyst",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "method": "POST",
        "url": "https://api.anthropic.com/v1/messages",
        "headers": {
          "x-api-key": "={{ $env.ANTHROPIC_API_KEY }}",
          "anthropic-version": "2023-06-01",
          "content-type": "application/json"
        },
        "body": {
          "model": "claude-sonnet-4-6",
          "max_tokens": 4096,
          "system": "Tu es un Business Analyst expert...",
          "messages": [
            {
              "role": "user",
              "content": "Analyse ce brief : {{ $json.brief }}"
            }
          ]
        }
      }
    },
    {
      "name": "PO Scrum",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "body": {
          "model": "claude-sonnet-4-6",
          "max_tokens": 4096,
          "system": "Tu es un Product Owner Scrum Expert...",
          "messages": [
            {
              "role": "user",
              "content": "Rédige 8 US à partir de : {{ $node['Business Analyst'].json.content[0].text }}"
            }
          ]
        }
      }
    },
    {
      "name": "Save to Notion / Confluence",
      "type": "n8n-nodes-base.notion",
      "parameters": {
        "operation": "create",
        "databaseId": "{{ $env.NOTION_DB_ID }}",
        "properties": {
          "Title": "Workflow WF-001 — {{ $now }}",
          "Content": "={{ $node['PO Scrum'].json.content[0].text }}"
        }
      }
    }
  ]
}
```

## Make (ex-Integromat) — Scénario d'automatisation

```
SCÉNARIO MAKE — Déclencheur Jira → Workflow Agentique

1. WATCH JIRA ISSUES
   Déclencheur : Nouveau ticket avec label "agent-workflow"
   ↓
2. HTTP REQUEST — Anthropic API (Business Analyst)
   URL    : https://api.anthropic.com/v1/messages
   Body   : { model, system: [agent BA], messages: [brief du ticket] }
   ↓
3. HTTP REQUEST — Anthropic API (PO Scrum)
   Body   : { model, system: [agent PO], messages: [output étape 2] }
   ↓
4. CREATE JIRA SUBTASKS
   Créer une sous-tâche Jira par User Story générée
   ↓
5. POST SLACK MESSAGE
   Notifier #product-team avec le résumé du workflow
```

## Webhook — Déclencheur externe universel

```typescript
// Serveur Express — Endpoint webhook pour déclencher un workflow
import express from "express";
import crypto from "crypto";

const app = express();
app.use(express.json());

// Vérification signature webhook (sécurité)
function verifyWebhookSignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac("sha256", process.env.WEBHOOK_SECRET!);
  const digest = "sha256=" + hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

app.post("/webhook/workflow", async (req, res) => {
  const signature = req.headers["x-webhook-signature"] as string;
  if (!verifyWebhookSignature(JSON.stringify(req.body), signature)) {
    return res.status(401).json({ error: "Signature invalide" });
  }

  const { workflowId, context, metadata } = req.body;

  // Exécuter le workflow en arrière-plan
  res.status(202).json({ message: "Workflow démarré", workflowId });

  // Lancer le workflow (async, ne bloque pas la réponse)
  runWorkflow(workflowId, context).then((outputs) => {
    notifyCompletion(metadata.callbackUrl, outputs);
  });
});

app.listen(3000, () => console.log("Webhook server running on port 3000"));
```

## Variables d'environnement — Template .env

```bash
# Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# Webhooks
WEBHOOK_SECRET=your-secret-key

# Intégrations
NOTION_API_KEY=secret_...
NOTION_DB_ID=...
JIRA_API_TOKEN=...
JIRA_BASE_URL=https://your-company.atlassian.net
SLACK_BOT_TOKEN=xoxb-...
SLACK_CHANNEL_ID=C...

# Workflow config
DEFAULT_MODEL=claude-sonnet-4-6
MAX_TOKENS=4096
LOG_LEVEL=info
```

## Livrables
- GitHub Actions workflow YAML opérationnel
- Script d'exécution Node.js/TypeScript
- Scénario n8n exportable (JSON)
- Configuration Make (blueprint)
- Serveur webhook Express sécurisé
- Template .env documenté

## Format de sortie
Précise : outil d'automatisation cible (GitHub Actions / n8n / Make / webhook), déclencheur souhaité, intégrations requises (Jira, Notion, Slack), modèle Claude à utiliser.
