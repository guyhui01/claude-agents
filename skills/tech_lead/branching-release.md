# Skill — Branching Strategy and Release Management
> Certifications: GitHub Actions Certifications · GitHub Certifications · CKAD Linux Foundation

## Objective
Define and roll out the branching strategy and release process: GitFlow vs Trunk-Based, semantic versioning, automated release notes — tailored to team size and deployment cadence.

## Branching strategies — Comparison

```
STRATEGY        DESCRIPTION                          TEAM       DEPLOYMENT     COMPLEXITY
──────────────  ───────────────────────────────────  ─────────  ─────────────  ──────────
Trunk-Based     Direct commits to main               5-15 devs  Continuous (CD) Low
Development     Feature flags for isolation           Feature    Several/day
                Short branches (< 1 day)             flags required

GitHub Flow     main + feature branches              1-10 devs  On each PR      Low
(recommended)   PR → review → merge → deploy         Solo/small  merged
                Simple, effective for CD

GitFlow         main + develop + feature             > 20 devs  Planned release High
                + release + hotfix                   Multi-teams  Monthly/quarterly
                Suited to cadenced releases

Scaled Trunk    Trunk-Based + feature flags          > 50 devs  Continuous      Medium
(SAFe/FAANG)    Release trains, experimentation      PI / ART    Multiple/day
```

## GitHub Flow — Recommended configuration

```bash
# Branch naming convention
feat/PROJ-123-add-order-cancellation   # New feature
fix/PROJ-456-null-pointer-checkout     # Bug fix
refactor/cleanup-order-service         # Refactoring
docs/update-api-readme                 # Documentation
chore/upgrade-node-22                  # Maintenance

# Typical workflow
git checkout -b feat/PROJ-123-description
# ... development ...
git commit -m "feat(orders): add bulk cancellation endpoint

Closes #123
- Add POST /api/orders/bulk-cancel
- Validate all order IDs belong to authenticated user
- Emit OrderCancelled events for each order"

git push -u origin feat/PROJ-123-description
# Open the PR → Review → Squash merge → Auto deploy
```

## Semantic Versioning (SemVer)

```
VERSION FORMAT: MAJOR.MINOR.PATCH (e.g. 2.4.1)

MAJOR (X.0.0) — Breaking change
  Examples: removing an endpoint, DB schema change,
            backward-incompatible API refactoring
  → Requires documented migration for clients

MINOR (X.Y.0) — Backward-compatible new feature
  Examples: new endpoint, new optional field,
            new optional configuration
  → Backward-compatible, transparent upgrade

PATCH (X.Y.Z) — Backward-compatible bug fix
  Examples: bug fix, perf improvement,
            security dependency update
  → Immediately deployable, 0 risk

PRE-RELEASE: 2.4.0-alpha.1, 2.4.0-beta.3, 2.4.0-rc.1
BUILD: 2.4.1+20260526
```

## Automated release — semantic-release

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

## Conventional Commits — Mandatory convention

```
FORMAT: <type>(<scope>): <description>

TYPES RECOGNIZED BY semantic-release:
  feat     → bump MINOR
  fix      → bump PATCH
  BREAKING CHANGE (footer) → bump MAJOR
  perf     → bump PATCH
  refactor → no bump
  docs     → no bump
  chore    → no bump
  test     → no bump
  ci       → no bump

EXAMPLES:
  feat(orders): add bulk cancellation API
  fix(auth): prevent session fixation on login
  refactor(payments): extract PaymentProcessor service
  feat!: remove deprecated v1 endpoints   ← BREAKING (!)

  feat(orders): support recurring orders

  BREAKING CHANGE: RecurringOrder replaces ScheduledOrder type
```

## Branch protection — GitHub

```yaml
# Example configuration via GitHub API / Terraform
branch_protection_rule:
  pattern: "main"
  required_status_checks:
    - "lint-and-type"
    - "test"
    - "security"
  required_approving_review_count: 1
  dismiss_stale_reviews: true
  require_code_owner_reviews: true
  required_linear_history: true    # Squash merge only
  allow_force_pushes: false
  allow_deletions: false
```

## Deliverables
- Documented branching strategy (team guide)
- Branch protection configuration (GitHub)
- semantic-release configuration (auto CHANGELOG)
- Illustrated Git workflow (diagram)
- Pre-release checklist (smoke tests, migration, rollback plan)
- Hotfix runbook (emergency procedure)

## Output format
Specify: **team size** (1, 5, 20+ devs), **deployment frequency** (continuous, weekly, monthly), **constraints** (multiple environments, clients with version contracts, compliance), **current state** (git chaos or existing strategy to refine).
