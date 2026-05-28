# Skill — IA dans les Workflows de Développement
> Certifications : Claude Code 101 (Anthropic 2026) · Claude Code in Action — Certified AI Workflow Engineer (Anthropic 2026) · GitHub Actions

## Objectif
Intégrer l'IA générative dans les workflows de développement : Claude Code, GitHub Copilot, revue de code IA, génération de tests, documentation assistée — pour multiplier la productivité sans dégrader la qualité.

## Outils IA par phase du cycle de développement

```
PHASE               OUTIL IA                    USAGE CONCRET
──────────────────  ──────────────────────────  ────────────────────────────────────────
Analyse & Design    Claude (claude.ai/code)     Concevoir l'architecture, rédiger ADR
                    ChatGPT / Gemini            Benchmarker des approches

Coding              Claude Code (CLI)           Implémenter features, refactoring, debug
                    GitHub Copilot              Autocomplétion inline dans l'IDE
                    Cursor                      IA dans l'éditeur (chat + inline)

Tests               Claude Code                 Générer les tests unitaires depuis le code
                    CodiumAI                    Tests automatiques basés sur le code

Code Review         Claude Code /review         Revue automatique des PRs
                    GitHub Copilot PR Review    Suggestions inline sur les PRs

Documentation       Claude Code                 Générer ADR, README, runbooks depuis le code
                    Mintlify Doc Writer         Docstrings depuis les signatures

CI/CD               GitHub Actions + Claude     Analyse automatique des rapports de tests
                    Sentry AI                   Résolution suggérée pour les erreurs
```

## Claude Code — Skills essentiels Tech Lead

Claude Code expose des **skills** (slash commands) invocables dans la session interactive :

```bash
# Lancer Claude Code dans le repo
claude

# Une fois dans la session, invoquer les skills built-in :
/code-review                    # Revue du diff courant (correctness + simplifications)
/code-review --fix              # Revue + applique les corrections au working tree
/code-review --comment          # Poste les findings en commentaires PR
/code-review ultra <PR#>        # Revue multi-agents cloud (Opus 4.7)

/simplify                       # Équivalent à /code-review --fix (refactor uniquement)
/verify                         # Lance l'app, teste le comportement réel
/security-review                # Audit sécurité du diff (OWASP, secrets, injections)
/init                           # Crée le CLAUDE.md du projet
```

Et en prompt libre, demander à Claude :

```
Génère des tests Jest pour src/services/order.service.ts, couvre tous les cas d'erreur
Refactore cette méthode pour réduire sa complexité cyclomatique à < 10
Rédige un ADR pour la décision d'utiliser BullMQ comme queue de jobs
Analyse la PR #142 (sécurité, perf, correctness) et liste les blockers
```

> ℹ️ Voir `claude --help` ou la liste des skills affichée en session (system reminders). Les skills sont définis dans `~/.claude/skills/*.md`.

## Hooks Claude Code — Pre-commit automatisé

```json
// .claude/settings.json — Hooks de vérification automatique
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{
          "type": "command",
          "command": "echo 'Commande Bash détectée : vérification sécurité'",
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

## GitHub Actions — Revue IA automatique sur PR

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

## Prompt Engineering pour la revue de code

```python
# scripts/ai_review.py
import anthropic

REVIEW_PROMPT = """Tu es un Tech Lead expert. Revois ce diff de code Pull Request.

Ton analyse doit couvrir :
1. [MUST] Bugs potentiels et erreurs logiques
2. [MUST] Problèmes de sécurité (OWASP Top 10)
3. [SUGGEST] Améliorations de lisibilité et maintenabilité
4. [NIT] Style et conventions (si pertinent)

Sois concis. Si le code est bon, dis-le clairement.
Maximum 10 commentaires. Chaque commentaire inclut le fichier et la ligne.

DIFF :
{diff}
"""

client = anthropic.Anthropic()

def review_pr(diff: str) -> str:
    message = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=2048,
        messages=[{"role": "user", "content": REVIEW_PROMPT.format(diff=diff)}]
    )
    return message.content[0].text
```

## Bonnes pratiques IA en équipe dev

```
FAIRE ✅                                    NE PAS FAIRE ❌
───────────────────────────────────────    ──────────────────────────────────────────────
Revoir TOUT le code généré par IA          Copier-coller sans lire (ownership du dev)
Utiliser l'IA pour les tests first         Laisser l'IA gérer les secrets ou credentials
Documenter les prompts réutilisables       Pousser du code IA sans tests
Former l'équipe aux bonnes pratiques       Utiliser l'IA sur des données client réelles
Mesurer l'impact (vélocité, qualité)       Considérer l'IA comme infaillible
```

## Livrables
- Guide d'intégration IA dans le workflow (équipe)
- Prompts réutilisables pour revue, tests, docs (library)
- Configuration hooks Claude Code (.claude/settings.json)
- GitHub Action de revue IA automatique
- Métriques d'adoption et d'impact (vélocité avant/après)

## Format de sortie
Précise : **stack et IDE** (VS Code, JetBrains, terminal…), **phase prioritaire** (coding, tests, revue, docs), **taille équipe**, **contraintes** (données sensibles, conformité, budget API), **objectif** (gain productivité, qualité, onboarding).
