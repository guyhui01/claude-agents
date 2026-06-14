# MCP Servers — Claude Code CLI integrations

> 3 MCP servers connecting Claude Code CLI to Jira, Confluence, and a mission log  
> Requirements: Node.js 18+ · npm · Claude Code CLI

---

## Available servers

| Server | Tools | Main use |
|---|---|---|
| [mcp-jira](mcp-jira/) | 5 tools | Create user stories, backlog, epics from WF-001 and WF-002 |
| [mcp-confluence](mcp-confluence/) | 4 tools | Publish reports and deliverables from WF-004 |
| [mcp-workflow-log](mcp-workflow-log/) | 4 tools | Mission logbook, monthly summary |

---

## Installation

### Step 1 — Install dependencies (once per server)

```bash
# Jira
cd /Users/guyhui/CLAUDE/claude-agents/mcp-servers/mcp-jira
npm install

# Confluence
cd /Users/guyhui/CLAUDE/claude-agents/mcp-servers/mcp-confluence
npm install

# Workflow Log (no external dependencies)
cd /Users/guyhui/CLAUDE/claude-agents/mcp-servers/mcp-workflow-log
npm install
```

### Step 2 — Get an Atlassian API token

If you use **Jira Cloud / Confluence Cloud** (`.atlassian.net` domain):
1. Go to: https://id.atlassian.com/manage-profile/security/api-tokens
2. Create a new token → copy it
3. The same token works for both Jira AND Confluence Cloud

### Step 3 — Configure Claude Code CLI

Copy the `claude_code_settings.json` file into the global Claude folder:

```bash
# Create the folder if it doesn't exist
mkdir -p ~/.claude

# Copy the config (WARNING: overwrites any existing settings.json — back it up first)
cp "/Users/guyhui/CLAUDE/claude-agents/mcp-servers/claude_code_settings.json" ~/.claude/settings.json
```

Then edit `~/.claude/settings.json` and replace:
- `<your-domain>` with your Atlassian domain (e.g. `mycompany`)
- `<your-email>` with your Atlassian account email
- `<your-jira-api-token>` and `<your-confluence-api-token>` with your API token
- `<PROJECT-KEY>` with your Jira project key (e.g. `PROJ`)
- `<SPACE-KEY>` with your Confluence space key (e.g. `CONSULT`)

> **If you already have a settings.json**, add only the `"mcpServers"` key to the existing JSON rather than overwriting it.

### Step 4 — Verify the installation

```bash
# List configured MCP servers
claude mcp list

# Test the Jira server (should respond within a few seconds)
claude mcp test jira
```

---

## Usage in Claude Code CLI

Once configured, the tools are available directly in your Claude Code sessions:

### Example — WF-001 → Jira in one command

After running the WF-001 workflow and obtaining the backlog:

```
Create these 10 user stories in Jira with jira_bulk_create_backlog:
[paste the backlog produced by WF-001 here]
```

### Example — WF-004 → Confluence in one command

After running the WF-004 workflow:

```
Publish this mission report to Confluence with confluence_publish_report,
space: CONSULT, client: ClientA, status: Draft:
[paste the report produced by WF-004 here]
```

### Example — Log a mission

```
Log this mission with log_workflow_run:
- Workflow: WF-004
- Client: Large CAC40 group
- Deliverables: AI maturity audit, 12-month roadmap, training plan
- Duration: 75 min
- Jira: CA-142, CA-143
```

---

## Available tools per server

### mcp-jira

| Tool | Description |
|---|---|
| `jira_create_story` | Creates a user story (title, description, acceptance criteria, points) |
| `jira_bulk_create_backlog` | Creates multiple stories in one operation from the WF-001 backlog |
| `jira_create_epic` | Creates an epic to group stories |
| `jira_get_project_info` | Returns the project's boards and metadata |
| `jira_search_issues` | JQL search (active sprint, epics, filters) |

### mcp-confluence

| Tool | Description |
|---|---|
| `confluence_create_page` | Creates a page from Markdown (automatic conversion) |
| `confluence_update_page` | Updates an existing page (by ID) |
| `confluence_search_page` | Searches pages by title — returns IDs |
| `confluence_publish_report` | Publishes a mission report with an author/date/status header |

### mcp-workflow-log

| Tool | Description |
|---|---|
| `log_workflow_run` | Logs a run (workflow, client, deliverables, duration) |
| `get_workflow_history` | Filterable history (workflow, client, month) |
| `get_client_history` | All workflows for a given client |
| `get_monthly_summary` | Monthly activity summary (missions, clients, deliverables) |

---

## Troubleshooting

**`npx tsx not found` error**  
```bash
npm install -g tsx
```

**Jira 401 Unauthorized error**  
- Make sure the API token is the one from https://id.atlassian.com (not the password)
- On Jira Server, use a password or Personal Access Token

**Jira 400 error on issue creation**  
- Make sure `JIRA_PROJECT_KEY` is correct (case-sensitive)
- Make sure the "Story" or "Epic" issue type exists in your project
- For Next-gen projects, `customfield_10014` (Epic Link) may not exist — remove epic_key

**Confluence 404 error**  
- Make sure the Confluence space exists and the account has write access
- On Confluence Cloud, the URL must be `https://domain.atlassian.net` (without `/wiki`)

**Servers won't start**  
```bash
# Test manually from the server folder
cd /Users/guyhui/CLAUDE/claude-agents/mcp-servers/mcp-jira
npx tsx server.ts
# Should stay waiting with no error (stdio transport)
```

---

## Mission log file

The journal is stored in:
```
mcp-servers/mcp-workflow-log/workflow_log.json
```

JSON format — viewable directly or via the MCP tools. Add it to `.gitignore` if the data is sensitive.
