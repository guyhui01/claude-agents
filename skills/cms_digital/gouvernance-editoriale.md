# Skill — Editorial governance and publishing workflows
> Certifications: Adobe AEM Sites Business Practitioner · Acquia Certified Site Builder — Drupal 10

## Objective
Define and set up the editorial governance of a CMS platform: contributor roles and rights, publishing workflows, taxonomies and naming conventions, training and documentation.

## Editorial RACI model

```
ROLE                  DESCRIPTION                          TYPICAL CMS RIGHTS
────────────────────  ───────────────────────────────────  ──────────────────────────────
Contributor           Creates and edits draft content      Create, Edit own content
Editor                Validates and publishes content      + Publish, Edit any content
Section lead          Manages their section's taxonomy     + Create taxonomy terms, Manage menus
CMS administrator     Configures the CMS, manages users    All permissions except superadmin
Superadmin            Full access (infra + CMS)            All
Preview reader        Access to unpublished content        View unpublished content only
```

## Publishing workflow — 4 typical steps

```
┌──────────────┐    ┌─────────────┐    ┌──────────────┐    ┌────────────┐
│   DRAFT      │───▶│  IN REVIEW  │───▶│  APPROVED   │───▶│ PUBLISHED  │
│ (Contributor)│    │  (Editor)   │    │(Section lead)│    │   (Live)   │
└──────────────┘    └─────────────┘    └──────────────┘    └────────────┘
       │                   │                  │
       ▼                   ▼                  ▼
  [Notification]    [Change request]    [Schedule date]
```

## Drupal 10 workflow configuration (Content Moderation)

```yaml
# config/install/workflows.workflow.editorial.yml
id: editorial
type: content_moderation
label: 'Editorial workflow'
type_settings:
  states:
    draft:      { label: 'Draft',      published: false, default_revision: false }
    review:     { label: 'In review',  published: false, default_revision: true  }
    approved:   { label: 'Approved',   published: false, default_revision: true  }
    published:  { label: 'Published',  published: true,  default_revision: true  }
    archived:   { label: 'Archived',   published: false, default_revision: false }
  transitions:
    submit_for_review: { from: [draft],    to: review,    label: 'Submit'          }
    request_changes:   { from: [review],   to: draft,     label: 'Send back'       }
    approve:           { from: [review],   to: approved,  label: 'Approve'         }
    publish:           { from: [approved], to: published, label: 'Publish'         }
    archive:           { from: [published],to: archived,  label: 'Archive'         }
  entity_types:
    node: [article, page, news]
```

## Taxonomy — Best practices

```
PRINCIPLE                   EXAMPLE APPLICATION
──────────────────────────  ─────────────────────────────────────────────
Hierarchy limited to 2-3    Topics > Subtopics (no more)
  levels max

Lowercase, normalized       "artificial-intelligence" (not "AI", "A.I.", "Artificial Intelligence")
  terms

Controlled by reference     Contributors cannot create new terms
  editors

Synchronized multilingual   FR/EN/DE created simultaneously, not as catch-up

Quarterly audit             Remove orphan terms (0 associated content)
```

## Naming guide and editorial conventions

```
ASSET FILES
  Web images   : [section]-[topic]-[format]-[date].jpg  → hero-genai-16x9-2026.jpg
  Documents    : [type]-[title-kebab]-[version].pdf     → guide-migration-cms-v2.pdf
  Videos       : [brand]-[topic]-[lang]-[duration].mp4  → brand-ai-tutorial-en-3min.mp4

PAGES / SLUGS
  Blog         : /blog/[year]/[title-slug]              → /blog/2026/migration-drupal-contentful
  Products     : /products/[category]/[product-name]    → /products/software/my-product
  Events       : /events/[year]-[month]-[slug]          → /events/2026-06-paris-ai-summit
```

## Deliverables
- Editorial RACI matrix (roles × rights)
- Publishing workflow configuration (YAML or specs)
- Structured taxonomy (term trees)
- Naming guide and editorial conventions
- Contributor training (slides or video tutorial)
- CMS administrator documentation

## Output format
Specify: **CMS used** (AEM, Drupal, Contentful…), **number of contributors** and **profiles**, site **languages**, **publishing frequency**, **regulatory constraints** (legal sign-off, GDPR, image rights).

## Anti-patterns
- ❌ **Workflow without clear roles** (R/A not distinct): blockers and content published without validation → explicit RACI
- ❌ **Contributors creating free taxonomy terms**: anarchic taxonomy → terms controlled by reference editors
- ❌ **Taxonomy too deep** (> 2-3 levels): unreadable navigation and maintenance
- ❌ **Multilingual as catch-up** (not synchronized): misaligned language versions → simultaneous creation
- ❌ **No contributor training**: workarounds and errors → guide + training
- ❌ **No archiving of obsolete content**: the site accumulates dead content → "archived" state + review

## Sources
- **Drupal Content Moderation / Workflows** — drupal.org (Workspaces for staging)
- **BPMN 2.0.2** — OMG (2013) — editorial workflow modeling — omg.org/spec/BPMN
- **RACI model** — responsibility matrix · **AEM Workflows** — experienceleague.adobe.com

## See also
- [`drupal-developpement.md`](drupal-developpement.md) — workflow configuration (Content Moderation)
- [`accessibilite-numerique.md`](accessibilite-numerique.md) — accessible editor contribution
- [`seo-technique-cms.md`](seo-technique-cms.md) — SEO naming/slug conventions
- [`../dam_expert/workflow-validation-assets.md`](../dam_expert/workflow-validation-assets.md) — validation of associated assets
