# Skill — AI in Development Workflows
> Certifications: Claude Code 101 (Anthropic 2026) · Claude Code in Action — Certified AI Workflow Engineer (Anthropic 2026) · GitHub Actions

## Objective
Integrate generative AI into development workflows: Claude Code, GitHub Copilot, AI code review, test generation, assisted documentation — to multiply productivity without degrading quality.

## AI tools by development-cycle phase

```
PHASE               AI TOOL                     CONCRETE USE
──────────────────  ──────────────────────────  ────────────────────────────────────────
Analysis & Design   Claude (claude.ai/code)     Design the architecture, write ADRs
                    ChatGPT / Gemini            Benchmark approaches

Coding              Claude Code (CLI)           Implement features, refactoring, debug
                    GitHub Copilot              Inline autocomplete in the IDE
                    Cursor                      AI in the editor (chat + inline)

Tests               Claude Code                 Generate unit tests from the code
                    CodiumAI                    Automatic tests based on the code

Code Review         Claude Code /review         Automatic PR review
                    GitHub Copilot PR Review    Inline suggestions on PRs

Documentation       Claude Code                 Generate ADRs, READMEs, runbooks from the code
                    Mintlify Doc Writer         Docstrings from signatures

CI/CD               GitHub Actions + Claude     Automatic analysis of test reports
                    Sentry AI                   Suggested fix for errors
```

## Claude Code — Essential Tech Lead skills

Claude Code exposes **skills** (slash commands) you can invoke in the interactive session:

```bash
# Launch Claude Code in the repo
claude

# Once in the session, invoke the built-in skills:
/code-review                    # Review the current diff (correctness + simplifications)
/code-review --fix              # Review + apply fixes to the working tree
/code-review --comment          # Post findings as PR comments
/code-review ultra <PR#>        # Multi-agent cloud review (Opus 4.8)

/simplify                       # Equivalent to /code-review --fix (refactor only)
/verify                         # Launch the app, test real behavior
/security-review                # Security audit of the diff (OWASP, secrets, injections)
/init                           # Create the project's CLAUDE.md
```

And with a free-form prompt, ask Claude:

```
Generate Jest tests for src/services/order.service.ts, cover all error cases
Refactor this method to bring its cyclomatic complexity below 10
Write an ADR for the decision to use BullMQ as the job queue
Analyze PR #142 (security, perf, correctness) and list the blockers
```

> ℹ️ See `claude --help` or the skills list shown in-session (system reminders). Skills are defined in `~/.claude/skills/*.md`.

## Claude Code hooks — Automated pre-commit

```json
// .claude/settings.json — Automatic verification hooks
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{
          "type": "command",
          "command": "echo 'Bash command detected: running security check'",
          "timeout": 5000
        }]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [{
          "type": "command",
          "command": "npm run lint:fix",
          "timeout": 30000
        }]
      }
    ]
  }
}
```

## GitHub Actions — Automatic AI review on PR

```yaml
# .github/workflows/ai-review.yml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
      contents: read
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }

      - name: Get diff
        id: diff
        run: |
          git diff ${{ github.event.pull_request.base.sha }}...${{ github.sha }} > diff.txt
          echo "diff_size=$(wc -c < diff.txt)" >> $GITHUB_OUTPUT

      - name: AI Review via Claude API
        if: steps.diff.outputs.diff_size < 50000
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          python scripts/ai_review.py \
            --diff diff.txt \
            --pr-number ${{ github.event.pull_request.number }} \
            --repo ${{ github.repository }}
```

## Prompt engineering for code review

```python
# scripts/ai_review.py
import anthropic

REVIEW_PROMPT = """You are an expert Tech Lead. Review this Pull Request code diff.

Your analysis must cover:
1. [MUST] Potential bugs and logic errors
2. [MUST] Security issues (OWASP Top 10)
3. [SUGGEST] Readability and maintainability improvements
4. [NIT] Style and conventions (when relevant)

Be concise. If the code is good, say so clearly.
Maximum 10 comments. Each comment includes the file and the line.

DIFF:
{diff}
"""

client = anthropic.Anthropic()

def review_pr(diff: str) -> str:
    message = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=2048,
        messages=[{"role": "user", "content": REVIEW_PROMPT.format(diff=diff)}]
    )
    return message.content[0].text
```

## AI best practices in a dev team

```
DO ✅                                       DON'T ❌
───────────────────────────────────────    ──────────────────────────────────────────────
Review ALL AI-generated code               Copy-paste without reading (dev keeps ownership)
Use AI for tests first                      Let AI handle secrets or credentials
Document reusable prompts                   Push AI code without tests
Train the team on best practices            Run AI on real client data
Measure the impact (velocity, quality)      Treat AI as infallible
```

## Deliverables
- AI integration guide for the workflow (team)
- Reusable prompts for review, tests, docs (library)
- Claude Code hooks configuration (.claude/settings.json)
- Automatic AI review GitHub Action
- Adoption and impact metrics (velocity before/after)

## Output format
Specify: **stack and IDE** (VS Code, JetBrains, terminal…), **priority phase** (coding, tests, review, docs), **team size**, **constraints** (sensitive data, compliance, API budget), **goal** (productivity, quality, onboarding).
