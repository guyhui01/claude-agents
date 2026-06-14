# CLAUDE.md — Claude Agents Library project instructions

> This file is read automatically by Claude Code when this directory is opened.
> It holds the repo's conventions, architecture, and behavior rules.

---

## Project identity

A library of **38 specialized AI agents** + **37 skill folders** + **10 agentic workflows** + **3 MCP servers**, used by Guy HUI-BON-HOA (freelance AI Product Owner) for his IT/AI consulting engagements with CAC40, GAFA, unicorn, scale-up, and SME clients.

---

## Architecture

```
claude-agents/
├── AGENT-*.md          # 38 agents (roles + associated skills)
├── skills/             # 37 actionable skill folders (one per agent)
├── workflows/          # 10 orchestrated BPMN workflows
├── mcp-servers/        # Jira / Confluence / mission log integrations
├── memory/             # Project memory (local CLAUDE.md)
├── backup/             # Backups (gitignored)
├── sandbox/            # Test area (gitignored)
├── projects/           # Client projects (gitignored — separate claude-projects repo)
├── schema/             # Sidecar contract (pinned 1.0.0 copy — SSOT = runtime)
├── tools/              # Node tooling: sidecar generator (ADR-0003)
├── sidecar.json        # Machine-readable catalog index (generated, validated in CI)
├── README.md           # Full catalog
├── START.md            # Quick-start hub
└── CLAUDE.md           # This file
```

---

## Conventions

- **File naming**: `snake_case.md` for skills, `AGENT-NAME-UPPERCASE.md` for agents
- **Working language**: French in chat; all written artifacts (files, commits, PRs, docs) in US English
- **Encoding**: UTF-8
- **Date format**: ISO 8601 (`YYYY-MM-DD`) in memories
- **Agent structure**: identity + certifications · scope ✅❌ · rules · skills table · activation
- **Skill structure**: objective · actionable content · deliverables · output format
- **Workflow structure**: YAML identity card · BPMN diagram · contextual parameters · per-step sheets · deliverables

---

## Behavior rules

- Always **explain what you are about to do** before doing it
- Always **ask for confirmation** before modifying a file
- Always **ask for confirmation** before pushing to GitHub (`git push`)
- **Commits OK without asking**, but push only on explicit approval
- **Concise responses**, in French (chat)
- For destructive or irreversible actions (`rm -rf`, `git reset --hard`, force push) → ask first
- Mechanical edits (Sonnet 4.6 is enough); architecture trade-offs (Opus 4.8)

---

## Model choice

| Task | Recommended model |
|---|---|
| Audit, complex reasoning, architecture trade-offs | **Opus 4.8** |
| Targeted edits, mechanical refactoring, skill generation | **Sonnet 4.6** |
| Bulk boilerplate generation, simple scripts | **Haiku 4.5** |

---

## Entry points

- **Quick start**: see `START.md`
- **Full catalog**: see `README.md`
- **Workflows**: see `workflows/README.md`
- **MCP servers**: see `mcp-servers/README.md`
- **Global user memory**: `~/.claude/CLAUDE.md`
- **Conversational auto memory**: `~/.claude/projects/.../memory/MEMORY.md`

---

## Repository governance

- **claude-agents** (this repo, public): generic agents + skills + workflows + MCP
- **claude-projects** (separate): fictional/showcase client projects
- **Future real client projects**: dedicated private repo per engagement

---

## Git workflow & versioning

### Hybrid strategy (solo)

| Type of work | Branch? | Tag? | GitHub Release? |
|---|---|---|---|
| Typo, minor fix, README sync | `main` directly | No | No |
| 1 skill added or changed | `main` directly | No | No |
| New workflow (WF-006…) | `feature/wf-<id>-<topic>` | Patch (vX.Y.**Z**) | No |
| New agent (AGENT-…) | `feature/agent-<name>` | Minor (vX.**Y**.0) | Optional |
| Audit + recommendations | `audit/<topic>-<date>` | Major (v**X**.0.0) | **Yes** |
| Multi-agent refactor (> 5 files) | `refactor/<topic>` | Minor | Optional |

### Versioning convention (SemVer)

- **Major (X.0.0)** — full audit, large structural refactor, breaking change
- **Minor (X.Y.0)** — new agent, new workflow, new skill folder, major enrichment
- **Patch (X.Y.Z)** — point fixes, renames, minor adjustments

### Commit convention (Conventional Commits)

```
<type>(<scope>): <description>

[optional body]

[optional footer — Co-Authored-By, CHANGELOG refs]
```

Types: `feat` · `fix` · `refactor` · `chore` · `docs` · `test` · `ci`

### Annotated tags

```bash
git tag -a vX.Y.Z <commit> -m "Short description matching the CHANGELOG"
git push origin --tags
```

### GitHub Releases

For each Major tag (and important Minor), create a Release:
```bash
gh release create vX.Y.Z --title "vX.Y.Z — <title>" --notes-file <changelog-excerpt.md>
```

### Pre-commit checklist (manual)

- [ ] Counters consistent (README, START.md, AGENT-ORCHESTRATEUR-WORKFLOW.md)
- [ ] No orphan references (grep old paths if refactoring)
- [ ] AGENT files updated if skills added/moved/removed
- [ ] CHANGELOG.md updated with a dated entry
- [ ] Local backup before a major refactor (`backup/claudecode_backup_<date>.zip`)

### Push & branches — golden rules

- Push to `main` **only after explicit approval** from the user
- Never `git push --force` on `main`
- Never `--no-verify` without explicit approval
- Squash merge by default on feature branches (1 clean commit on main)
- Local branch deleted after merge (`git branch -d feature/...`)

### Branch protection (configured via API — 2026-05-26)

For the `main` repo:
- ✅ Require linear history (squash only)
- ✅ Do not allow force pushes
- ✅ Do not allow deletions
- ✅ Secret scanning + push protection enabled
- ⚠️ Require pull request reviews → skipped in solo (self-review impossible)

### GitHub authentication — SSH

Remote configured over SSH: `git@github.com:guyhui01/claude-agents.git`
No token needed for `git push` / `git pull` operations.

```bash
# Check the SSH connection
ssh -T git@github.com
```

---

## Quick activation

```
Read the file AGENT-ORCHESTRATEUR-WORKFLOW.md and take on this role.
Then load workflows/WF-<XXX>.md and start the workflow.
```

or for a single agent:

```
Read the file AGENT-<NAME>.md and take on this role.
Confirm you are ready by listing the available skills.
```
