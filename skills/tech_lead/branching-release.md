# Skill — Branching Strategy et Release Management
> Certifications : GitHub Actions Certifications · GitHub Certifications · CKAD Linux Foundation

## Objectif
Définir et mettre en place la stratégie de branches et le processus de release : GitFlow vs Trunk-Based, semantic versioning, release notes automatisées — adapté à la taille de l'équipe et à la cadence de déploiement.

## Comparatif des stratégies de branches

```
STRATÉGIE       DESCRIPTION                          ÉQUIPE     DÉPLOIEMENT    COMPLEXITÉ
──────────────  ───────────────────────────────────  ─────────  ─────────────  ──────────
Trunk-Based     Commits directs sur main             5-15 devs  Continu (CD)   Faible
Development     Feature flags pour l'isolation        Feature    Plusieurs/jour
                Branches courtes (< 1 jour)          flags requis

GitHub Flow     main + feature branches              1-10 devs  À chaque PR    Faible
(recommandé)    PR → review → merge → deploy         Solo/petit  merged
                Simple, efficace pour CD

GitFlow         main + develop + feature             > 20 devs  Release planif. Élevée
                + release + hotfix                   Multi-équipes Mensuel/trimestr.
                Adapté aux releases cadencées

Scaled Trunk    Trunk-Based + feature flags          > 50 devs  Continu        Moyenne
(SAFe/FAANG)    Release trains, experimentation      PI / ART    Multi/jour
```

## GitHub Flow — Configuration recommandée

```bash
# Convention de nommage des branches
feat/PROJ-123-add-order-cancellation   # Nouvelle feature
fix/PROJ-456-null-pointer-checkout     # Correction de bug
refactor/cleanup-order-service         # Refactoring
docs/update-api-readme                 # Documentation
chore/upgrade-node-22                  # Maintenance

# Workflow type
git checkout -b feat/PROJ-123-description
# ... développement ...
git commit -m "feat(orders): add bulk cancellation endpoint

Closes #123
- Add POST /api/orders/bulk-cancel
- Validate all order IDs belong to authenticated user
- Emit OrderCancelled events for each order"

git push -u origin feat/PROJ-123-description
# Créer la PR → Review → Merge squash → Deploy auto
```

## Semantic Versioning (SemVer)

```
VERSION FORMAT : MAJOR.MINOR.PATCH (ex: 2.4.1)

MAJOR (X.0.0) — Breaking change
  Exemples : suppression d'un endpoint, changement de schéma DB,
             refactoring d'API incompatible en arrière
  → Nécessite migration documentée pour les clients

MINOR (X.Y.0) — Nouvelle feature rétrocompatible
  Exemples : nouvel endpoint, nouveau champ optionnel,
             nouvelle configuration facultative
  → Rétrocompatible, upgrade transparent

PATCH (X.Y.Z) — Bug fix rétrocompatible
  Exemples : correction bug, amélioration perf,
             mise à jour dépendance de sécurité
  → Déployable immédiatement, 0 risk

PRE-RELEASE : 2.4.0-alpha.1, 2.4.0-beta.3, 2.4.0-rc.1
BUILD : 2.4.1+20260526
```

## Release automatisée — semantic-release

```json
// .releaserc.json
{
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { "changelogFile": "CHANGELOG.md" }],
    ["@semantic-release/npm", { "npmPublish": false }],
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]"
    }],
    "@semantic-release/github"
  ]
}
```

## Conventional Commits — Convention obligatoire

```
FORMAT : <type>(<scope>): <description>

TYPES RECONNUS PAR semantic-release :
  feat     → bump MINOR
  fix      → bump PATCH
  BREAKING CHANGE (footer) → bump MAJOR
  perf     → bump PATCH
  refactor → pas de bump
  docs     → pas de bump
  chore    → pas de bump
  test     → pas de bump
  ci       → pas de bump

EXEMPLES :
  feat(orders): add bulk cancellation API
  fix(auth): prevent session fixation on login
  refactor(payments): extract PaymentProcessor service
  feat!: remove deprecated v1 endpoints   ← BREAKING (!)
  
  feat(orders): support recurring orders
  
  BREAKING CHANGE: RecurringOrder replaces ScheduledOrder type
```

## Protection de branches — GitHub

```yaml
# Exemple configuration via GitHub API / Terraform
branch_protection_rule:
  pattern: "main"
  required_status_checks:
    - "lint-and-type"
    - "test"
    - "security"
  required_approving_review_count: 1
  dismiss_stale_reviews: true
  require_code_owner_reviews: true
  required_linear_history: true    # Squash merge uniquement
  allow_force_pushes: false
  allow_deletions: false
```

## Livrables
- Stratégie de branches documentée (guide équipe)
- Configuration branch protection (GitHub)
- Configuration semantic-release (CHANGELOG auto)
- Workflow Git illustré (diagramme)
- Checklist pre-release (smoke tests, migration, rollback plan)
- Runbook de hotfix (procédure d'urgence)

## Format de sortie
Précise : **taille équipe** (1, 5, 20+ devs), **fréquence de déploiement** (continu, hebdo, mensuel), **contraintes** (plusieurs environnements, clients avec contrat de version, compliance), **état actuel** (chaos git ou stratégie existante à affiner).
