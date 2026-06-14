# Skill — CMS Migration (Carve-out, Replatform, Rehost)
> Certifications: Acquia Certified Developer — Drupal 10 · Adobe AEM Sites Developer · TOGAF 10 Foundation

## Objective
Plan and execute a CMS migration: audit the existing system, content mapping, migration strategy (big bang vs phased), editorial ETL, UAT and cutover — minimizing the risk of data loss and downtime.

## Migration strategies

```
STRATEGY        DESCRIPTION                          RISK      DURATION  USE CASE
──────────────  ───────────────────────────────────  ────────  ────────  ──────────────────────────
Rehost          Same CMS, new infra                  Low       Short     Cloud lift & shift
                (on-prem → cloud)

Replatform      Same CMS, major version              Medium    Medium    Drupal 7→10, AEM 6.5→Cloud
                (upgrade with refactoring)

Replatform+     CMS change                           High      Long      Drupal → Contentful, TYPO3→AEM
(Migration)     Content preserved

Rebuild         New CMS + new content                Very      Very long Total rebranding, entity
                (content selectively recreated/migr.) high                merger (carve-out)
```

## 6-phase migration plan

```
PHASE 1 — AUDIT & INVENTORY (D-90 to D-60)
  □ Exhaustive inventory: pages, assets, taxonomies, users
  □ SEO analysis: canonical URLs, existing redirects, backlinks
  □ Mapping of integrations (PIM, DAM, CRM, Analytics)
  □ Technical debt analysis (obsolete modules, customizations)

PHASE 2 — DESIGN (D-60 to D-30)
  □ Content type mapping Old CMS → New CMS
  □ Field mapping (transformations, default values)
  □ Redirect strategy (exhaustive 301 map)
  □ Validated target architecture (data models, integrations)

PHASE 3 — ETL DEVELOPMENT (D-30 to D-10)
  □ Extraction scripts (API, CSV/XML export, scraping)
  □ Transformation scripts (normalization, enrichment)
  □ Loading scripts (import to the new CMS API)
  □ Tests on a staging environment (10% sample)

PHASE 4 — UAT (D-10 to D-3)
  □ Full migration on staging
  □ Editor UAT (key content validation)
  □ SEO tests (redirects, metadata, sitemap)
  □ Performance tests (LCP, CLS, TTI)
  □ Accessibility tests (RGAA 4.1 / WCAG 2.2)

PHASE 5 — CUTOVER (D0)
  □ Final migration to production (delta or full)
  □ DNS / CDN verification
  □ Critical smoke-test validation
  □ Enable monitoring and alerts

PHASE 6 — POST-MIGRATION (D+7 to D+30)
  □ SEO monitoring (Search Console, 404 error rate)
  □ Fix residual anomalies
  □ Editorial team training
  □ Operational documentation (runbook)
```

## Content mapping — Template

```
CONTENT TYPE MAPPING
──────────────────────────────────────────────────────────────────────
Source (Old CMS)             Target (New CMS)           Transformation
───────────────────────────  ─────────────────────────  ──────────────
node/article                 Entry[content_type=article] None
field_body (text_long)       body (RichText)            HTML → Rich Text JSON
field_image (image)          heroImage (Asset)          Re-upload + auto crop
field_tags (taxonomy_term)   tags (Array<Symbol>)       Label extraction
field_author (entity_ref)    author (Entry reference)   UUID mapping
path alias (/blog/my-title)  slug (my-title)            Final path extraction
```

## ETL script Drupal → Contentful (example)

```python
import requests
import json

def migrate_article(drupal_node, contentful_space, cda_token):
    # Extraction from Drupal JSON:API
    node_data = requests.get(
        f"https://my-drupal.com/jsonapi/node/article/{drupal_node['id']}",
        params={"include": "field_image,field_author"}
    ).json()['data']

    # Transformation
    entry = {
        "fields": {
            "title":       {"en-US": node_data['attributes']['title']},
            "slug":        {"en-US": node_data['attributes']['path']['alias'].lstrip('/blog/')},
            "body":        {"en-US": html_to_rich_text(node_data['attributes']['body']['value'])},
            "publishedAt": {"en-US": node_data['attributes']['created']},
        }
    }

    # Loading via the Contentful Management API
    response = requests.post(
        f"https://api.contentful.com/spaces/{contentful_space}/entries",
        headers={"Authorization": f"Bearer {cda_token}", "X-Contentful-Content-Type": "article"},
        json=entry
    )
    return response.json()
```

## Deliverables
- Audit report of the existing system (inventory, debt, SEO)
- Detailed migration plan (phases, milestones, owners)
- Content mapping (source → target table)
- ETL scripts (extraction + transformation + loading)
- 301 redirect plan (complete CSV file)
- UAT report (UAT + SEO + performance + accessibility)
- Post-migration runbook

## Output format
Specify: **source CMS** and **target CMS**, **volume** (pages, assets, languages), **SEO constraints** (preserve URLs?), **strategy** (big bang vs phased), **timeline** and **available team**.

## Anti-patterns
- ❌ **Big bang without a tested rollback**: no way back on failure → rollback procedure + dual-run if critical
- ❌ **No exhaustive 301 redirect plan**: massive SEO loss (404, broken backlinks) → full source → target map
- ❌ **Migration without freeze + delta**: content created during UAT lost → read-only freeze + D0 delta
- ❌ **No SEO/perf/accessibility UAT** before cutover: regressions in prod → UAT + automated tests
- ❌ **Migrating the debt** (obsolete content, anarchic taxonomies): you just move the mess → clean up in phase 1
- ❌ **Drupal 7/9 or old AEM not anticipated** (EOL): security emergency → plan toward Drupal 10/11 or AEM Cloud

## Sources
- **TOGAF 10** (2022) — migration trajectory — opengroup.org
- **Migration APIs**: Drupal Migrate API / JSON:API — drupal.org · Contentful Management API — contentful.com · AEM — experienceleague.adobe.com
- **301 redirects** (HTTP, RFC 9110) · **Google Search Console** — search.google.com/search-console
- **WCAG 2.2** (W3C, 2023) — post-migration accessibility UAT

## See also
- [`drupal-developpement.md`](drupal-developpement.md) — Drupal migration (Migrate API)
- [`architecture-cms.md`](architecture-cms.md) — the migration's target architecture
- [`seo-technique-cms.md`](seo-technique-cms.md) — 301 redirect plan and SEO
- [`../dam_expert/migration-dam.md`](../dam_expert/migration-dam.md) — coordinated asset migration
