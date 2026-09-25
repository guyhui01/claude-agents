# Skill — Workflow Automation (GitHub Actions, n8n, Make)
> Certifications: AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google), Anthropic Claude Code in Action (2026), ITIL 4 Foundation (Axelos)

## Objective
Implement real technical triggers for agentic workflows — automation via GitHub Actions, n8n, Make (formerly Integromat), and webhooks — to run workflows with no manual intervention.

## GitHub Actions — Agentic workflow trigger

```yaml
# .github/workflows/run-agent-workflow.yml
name: Run Agent Workflow

on:
  # Manual trigger with parameters
  workflow_dispatch:
    inputs:
      workflow_id:
        description: "Workflow ID (WF-001, WF-002...)"
        required: true
        default: "WF-001"
      brief_client:
        description: "Client brief or context"
        required: true
      methodologie:
        description: "Methodology"
        required: false
        default: "scrum"

  # Trigger on a GitHub issue (new brief = new workflow)
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
              body: `## Agentic workflow results\n\n${report}`
            });
```

## Node.js execution script

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
  if (!workflow) throw new Error(`Unknown workflow: ${args.workflow}`);

  mkdirSync("outputs", { recursive: true });
  const outputs = new Map<string, string>();
  outputs.set("context", args.context);

  for (const step of workflow) {
    const systemPrompt = readFileSync(step.agentFile, "utf8");
    const userMessage = buildMessage(step.agent, outputs);

    console.log(`[ORCHESTRATOR] → ${step.agent}`);
    const result = await client.messages.create({
      model: "claude-sonnet-5",
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

## n8n — Visual workflow with AI agents

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
          "model": "claude-sonnet-5",
          "max_tokens": 4096,
          "system": "You are an expert Business Analyst...",
          "messages": [
            {
              "role": "user",
              "content": "Analyze this brief: {{ $json.brief }}"
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
          "model": "claude-sonnet-5",
          "max_tokens": 4096,
          "system": "You are a Product Owner Scrum Expert...",
          "messages": [
            {
              "role": "user",
              "content": "Write 8 US from: {{ $node['Business Analyst'].json.content[0].text }}"
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

## Make (formerly Integromat) — Automation scenario

```
MAKE SCENARIO — Jira trigger → Agentic Workflow

1. WATCH JIRA ISSUES
   Trigger: New ticket with the "agent-workflow" label
   ↓
2. HTTP REQUEST — Anthropic API (Business Analyst)
   URL    : https://api.anthropic.com/v1/messages
   Body   : { model, system: [BA agent], messages: [ticket brief] }
   ↓
3. HTTP REQUEST — Anthropic API (PO Scrum)
   Body   : { model, system: [PO agent], messages: [step 2 output] }
   ↓
4. CREATE JIRA SUBTASKS
   Create one Jira subtask per generated User Story
   ↓
5. POST SLACK MESSAGE
   Notify #product-team with the workflow summary
```

## Webhook — Universal external trigger

```typescript
// Express server — Webhook endpoint to trigger a workflow
import express from "express";
import crypto from "crypto";

const app = express();
app.use(express.json());

// Webhook signature verification (security)
function verifyWebhookSignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac("sha256", process.env.WEBHOOK_SECRET!);
  const digest = "sha256=" + hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

app.post("/webhook/workflow", async (req, res) => {
  const signature = req.headers["x-webhook-signature"] as string;
  if (!verifyWebhookSignature(JSON.stringify(req.body), signature)) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  const { workflowId, context, metadata } = req.body;

  // Run the workflow in the background
  res.status(202).json({ message: "Workflow started", workflowId });

  // Launch the workflow (async, does not block the response)
  runWorkflow(workflowId, context).then((outputs) => {
    notifyCompletion(metadata.callbackUrl, outputs);
  });
});

app.listen(3000, () => console.log("Webhook server running on port 3000"));
```

## Environment variables — .env template

```bash
# Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# Webhooks
WEBHOOK_SECRET=your-secret-key

# Integrations
NOTION_API_KEY=secret_...
NOTION_DB_ID=...
JIRA_API_TOKEN=...
JIRA_BASE_URL=https://your-company.atlassian.net
SLACK_BOT_TOKEN=xoxb-...
SLACK_CHANNEL_ID=C...

# Workflow config
DEFAULT_MODEL=claude-sonnet-5
MAX_TOKENS=4096
LOG_LEVEL=info
```

## Deliverables
- Operational GitHub Actions workflow YAML
- Node.js/TypeScript execution script
- Exportable n8n scenario (JSON)
- Make configuration (blueprint)
- Secured Express webhook server
- Documented .env template

## Output format
Specify: the target automation tool (GitHub Actions / n8n / Make / webhook), the desired trigger, the required integrations (Jira, Notion, Slack), the Claude model to use.

## Anti-patterns
- ❌ **Cleartext secrets** (API key in the YAML/code): leak → environment variables / CI secrets
- ❌ **Unsecured webhook** (no signature verification): fraudulent trigger → HMAC/secret
- ❌ **No retry or idempotency**: double execution or loss → retry queue + idempotency key
- ❌ **Unpinned SDK** (`@anthropic-ai/sdk` with no version): breakage → fixed version
- ❌ **No monitoring** of the automation: silent failures → alerting (see `workflow-monitoring.md`)

## Sources
- **GitHub Actions** — docs.github.com/actions · **n8n** — docs.n8n.io · **Make** — make.com
- **Anthropic SDK / Messages API** — docs.anthropic.com (header `anthropic-version: 2023-06-01`, current) · model `claude-sonnet-5` for high-volume runtime

## See also
- [`trigger-management.md`](trigger-management.md) — triggers and events
- [`workflow-monitoring.md`](workflow-monitoring.md) — automation supervision
- [`mcp-orchestration.md`](mcp-orchestration.md) — orchestration via MCP
- [`claude-api-integration.md`](claude-api-integration.md) — Anthropic SDK integration
