# Audit qualité — Groupe Dev/CMS (5 agents)

> **Date** : 2026-05-29
> **Modèle** : Claude Opus 4.7
> **Version grille** : v2.8.3 Dev/CMS (formalisée 2026-05-29, cf. `audits/audit-grilles-v2.8.md` §3.4)
> **Périmètre** : 55 skills sur 5 agents (DEV-TYPESCRIPT-IA, DEV-DRUPAL-PHP, CMS-DIGITAL, PIM-EXPERT, DAM-EXPERT)
> **Méthode** : extraction factuelle déléguée à 5 sous-agents Explore en parallèle (format standard Phase 1.1) + cotation expert Claude principal sur grille v2.8.3
> **Format** : rapport consolidé groupe (cohérent [[feedback-triptyque-qualite]] règle 1)

---

## 1. Synthèse exécutive

**Verdict global groupe Dev/CMS** : **Meilleur profil qualité du chantier sur les 4 groupes audités**. 55 skills, ~5545L cumulées. **5% P1 seulement** (vs 28% Data/Tech, 25% Agile/Produit) et **38% P3** (record positif). Patrimoine concret, code abondant, certifications spécialistes (Acquia, Adobe AEM, Anthropic MCP, Cloudinary, Bynder, IPTC). **Mais 3 P1 critiques** dont 1 bug sécurité (Twig XSS absent) et 1 bug conformité majeur (RGPD sans source légale chez DAM).

| Métrique | Dev/CMS | Data/Tech | Conseil/Dir | Agile/Produit |
|---|---|---|---|---|
| Agents audités | 5/5 | 5/5 | 6/6 | 9/9 |
| Skills audités | **55** | 54 | 44 | 55 |
| Vol. moyen / skill | ~101L | ~110L | ~117L | ~85L |
| Skills ✓ purs (3 dim) | **1/55 (2%)** ⭐ accessibilite-numerique | 1/54 (2%) | 0/44 | 3/55 (5%) |
| **Skills P3 (proche ✓)** | **~21/55 (38%)** 🏆 record | 8/54 (15%) | 10/44 (23%) | 12/55 (22%) |
| Skills P2 (enrichissement) | ~30/55 (55%) | 30/54 (55%) | 31/44 (70%) | 26/55 (47%) |
| **Skills P1 (bloquant)** | **3/55 (5%)** 🏆 record positif | 15/54 (28%) | 3/44 (7%) | 14/55 (25%) |
| Skills sans certif | 0/55 ✅ | 0/54 ✅ | 0/44 ✅ | 17/55 (31%) |
| Skills avec anti-patterns explicites | ~22/55 (40%) | 18/54 (33%) | 10/44 (23%) | 20/55 (36%) |
| Skills avec ≥1 source URL/auteur datée | ~10/55 (18%) | 5/54 (9%) | 3/44 (7%) | 5/55 (9%) |
| Cross-links inter-skills | 0/55 (0%) | 0/54 (0%) | 0/44 (0%) | 6/55 (11%) |

**Constats clés** :
- 🏆 **Meilleur profil qualité du chantier** : 5% P1 (record bas) + 38% P3 (record haut)
- ⭐ **2ème ✓ pur du chantier hors Agile/Produit** : `cms_digital/accessibilite-numerique.md` (WCAG 2.2 + RGAA 4.1 + ARIA 1.2 + 12 critères + Pa11y CI/CD + 12 anti-patterns) — **modèle de référence accessibilité**
- 🔴 **3 P1 critiques** dont **2 bugs sécurité/conformité majeurs** :
  - `drupal-theming-twig.md` : Twig XSS/autoescape Drupal absent (bug sécurité)
  - `dam_expert/gestion-droits-licences.md` : RGPD cité dans 6 skills DAM **sans aucune source légale** (bug conformité critique pour clients régulés)
  - `pim_expert/gouvernance-donnees-produit.md` : DAMA-DMBOK 2 cité sans année + GS1 absent + MDM patterns absents
- 🟡 **Drupal 11 ABSENT** sur 10/10 skills DEV-DRUPAL-PHP (skills calés sur Drupal 10, sortie H2 2022, EOL prévue 2026 — risque obsolescence)
- 🟡 **TYPO3 + WordPress ABSENTS** du groupe CMS-DIGITAL alors que 2 CMS majeurs (10% parts marché EU pour TYPO3)
- 🟡 **GS1 sous-intégré** : 2/12 skills PIM-EXPERT alors que standard universel e-commerce (Amazon GTIN obligatoire)
- 🟡 **DEV-TYPESCRIPT-IA** : 0/9 sources externes URLs (carence sourcing structurelle)

---

## 2. Méthodologie

Application stricte de la **grille v2.8.3 Dev/CMS** (cf. `audits/audit-grilles-v2.8.md` §3.4, formalisée 2026-05-29).

**Référentiels attendus** (par sous-domaine, cf. grille v2.8.3) :
- **TypeScript/Frontend IA** : TypeScript Handbook (Hejlsberg/Microsoft), React 18+, Next.js 14+, Anthropic SDK, Vercel AI SDK, **MCP — Model Context Protocol** (Anthropic 2024), Edge Functions, Streaming SSE/WebSockets
- **Drupal/PHP** : Drupal 10/11 (Drupal Association), Drupal Commerce 2.x, Twig (SensioLabs), PHPUnit (Bergmann), Behat, CMI, Migrate API, PSR-12, PHP 8.x, JSON:API, BigPipe
- **CMS digital** : Adobe AEM 6.5+ / Cloud Service, Drupal 10/11, WordPress 6.x, Typo3 12, Headless (Strapi, Contentful, Sanity), **WCAG 2.2** (W3C 2023), Schema.org, **Core Web Vitals** (Google 2020+), Atomic Design (Frost 2016)
- **PIM** : Akeneo PIM, SAP Hybris PCM, Stibo STEP, **GS1** (GTIN/GPC/GLN/GDSN), Schema.org Product, MDM (Inmon/Ladley), DAMA-DMBOK 2 (2017)
- **DAM** : Bynder, Cloudinary, Aprimo, Adobe AEM Assets, **IPTC** (2024+), **XMP** (ISO 16684-1), IIIF, EXIF, Dublin Core, MAM standards
- **Standards web** : HTTP/2/3, OAuth 2.1, OpenAPI 3.1, GraphQL, OWASP Top 10

**Spécificité Dev/CMS** : ajout d'un axe d'analyse **« sécurité Web (XSS, RGPD, secrets, SSO)»** détecté comme pattern critique transverse.

---

## 3. Tableau récapitulatif consolidé (55 skills, 5 agents)

### 3.1 — DEV-TYPESCRIPT-IA (9 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 1 | chat-ui-streaming.md | 92 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 2 | edge-functions-ia.md | 90 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 3 | integration-apis-llm-ts.md | 84 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 4 | mcp-server-dev.md | 91 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 5 | nextjs-ia.md | 84 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 6 | react-patterns-ia.md | 98 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 7 | tool-use-frontend.md | 101 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 8 | typescript-avance-ia.md | 82 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 9 | vercel-ai-sdk.md | 97 | ✓ | ⚠ | ✓ | ⚠ | **P2** |

### 3.2 — DEV-DRUPAL-PHP (10 skills, dossier `skills/dev_drupal/`)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 10 | drupal-api-rest.md | 81 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 11 | drupal-commerce-catalog.md | 80 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 12 | drupal-commerce-checkout.md | 85 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 13 | drupal-config-yaml.md | 79 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 14 | drupal-integration-api-tierce.md | 123 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 15 | drupal-module-custom.md | 86 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 16 | drupal-performance.md | 80 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 17 | drupal-tests-phpunit-behat.md | 111 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 18 | **drupal-theming-twig.md** | 85 | ✓ | ⚠ | ✓ | ✗ | **P1** 🔴 (Twig XSS) |
| 19 | drupal-user-roles.md | 98 | ✓ | ⚠ | ✓ | ✓ | **P3** |

### 3.3 — CMS-DIGITAL (12 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 20 | **accessibilite-numerique.md** | 124 | ✓ | ✓ | ✓ | ✓ | **✓ pur** ⭐ |
| 21 | aem-sites-assets.md | 122 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 22 | architecture-cms.md | 117 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 23 | cms-headless.md | 120 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 24 | drupal-developpement.md | 141 | ✓ | ✓ | ✓ | ⚠ | **P3** |
| 25 | gouvernance-editoriale.md | 126 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 26 | integration-pim-dam.md | 135 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 27 | migration-cms.md | 157 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 28 | performance-web.md | 124 | ✓ | ✓ | ✓ | ✓ | **P3** (proche ✓) |
| 29 | personnalisation-segmentation.md | 121 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 30 | rebranding-digital.md | 126 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 31 | seo-technique-cms.md | 130 | ✓ | ✓ | ✓ | ⚠ | **P3** |

### 3.4 — PIM-EXPERT (12 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 32 | enrichissement-produit.md | 86 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 33 | **gouvernance-donnees-produit.md** | 88 | ✓ | ✗ | ✓ | ⚠ | **P1** 🔴 |
| 34 | syndication-canaux.md | 102 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 35 | localisation-i18n.md | 88 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 36 | integration-erp-pim.md | 90 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 37 | scoring-qualite-produit.md | 85 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 38 | migration-pim.md | 77 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 39 | portail-fournisseurs.md | 76 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 40 | onboarding-donnees-produit.md | 88 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 41 | pim-augmente-ia.md | 100 | ✓ | ⚠ | ✓ | ✓ | **P3** |
| 42 | kpis-catalogue.md | 76 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 43 | modelisation-catalogue.md | n/a | ✓ | ⚠ | ✓ | ⚠ | **P2** (cot. prélim.) |

### 3.5 — DAM-EXPERT (12 skills)

| # | Skill | Vol. (L) | Certif | Conf. | Action. | Prof. | Verdict |
|---|---|---:|:---:|:---:|:---:|:---:|:---:|
| 44 | taxonomie-assets.md | 78 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 45 | workflow-validation-assets.md | 73 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 46 | **gestion-droits-licences.md** | 69 | ✓ | ✗ | ✓ | ✗ | **P1** 🔴 (RGPD sans source) |
| 47 | distribution-multicanal.md | 67 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 48 | transformation-formats.md | 110 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 49 | integration-dam-cms.md | 93 | ✓ | ⚠ | ⚠ | ✗ | **P2** |
| 50 | brand-portal.md | 92 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 51 | gouvernance-dam.md | 86 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 52 | migration-dam.md | 118 | ✓ | ⚠ | ✓ | ⚠ | **P2** |
| 53 | dam-augmente-ia.md | 119 | ✓ | ⚠ | ✓ | ⚠ | **P3** |
| 54 | analytics-assets.md | 99 | ✓ | ⚠ | ✓ | ✗ | **P2** |
| 55 | naming-convention.md | 116 | ✓ | ⚠ | ✓ | ⚠ | **P3** |

---

## 4. Findings P1 — Bugs bloquants (3 skills, 5% — taux record bas)

### 🔴 P1.1 — `dev_drupal/drupal-theming-twig.md` (85L) — **Bug sécurité XSS**
**Symptôme** : Skill Twig templating Drupal montre `{{ variation.price.0.number }}` et conditionnels HTML mais **aucune mention de Twig escaping, `|safe`, `autoescape`, ou prévention XSS**. Drupal 10 active autoescape par défaut MAIS les contributeurs/théméurs doivent connaître les patterns dangereux (`|raw`, `|safe_join`, `t()` avec args).

**Corrections (V2 priorité haute, candidat différenciateur compétitif)** :
- Section dédiée `## Sécurité Twig & XSS prevention`
- Citer Twig (Fabien Potencier, SensioLabs, twig.symfony.com)
- Distinguer `{{ var }}` (auto-escapé) vs `{{ var|raw }}` (DANGEREUX — XSS si user input) vs `{{ var|safe }}` (alias)
- Patterns Drupal sécurisés : `{{ url('route') }}`, `{{ path('route') }}`, `{{ link(label, url) }}`
- Anti-patterns Twig : "`|raw` sur user input = XSS", "Pas de `Html::escape()` avant injection", "URLs en dur sans `path()` = risque path traversal"
- Cross-link `drupal-user-roles.md` (Access Control) et `drupal-api-rest.md` (API security)

### 🔴 P1.2 — `dam_expert/gestion-droits-licences.md` (69L) — **Bug conformité RGPD critique**
**Symptôme** : Skill cite RGPD dans 6 des 12 skills DAM (workflow, droits, taxonomie, dam-ia, gouvernance, naming) mais **AUCUNE source légale fournie** (CNIL, Règlement UE 2016/679, jurisprudence). Creative Commons cité sans URL creativecommons.org. Distinction Model Release US vs Droit à l'image France/EU absente. Procédure "Droit à l'oubli" mentionne 72h sans procédure technique. Risque conformité majeur pour clients régulés (banque CIB, luxe, défense).

**Corrections (V2 priorité haute, candidat différenciateur compétitif)** :
- Citer RGPD UE 2016/679 art. 6 (bases légales), 9 (données sensibles), 17 (droit à l'oubli), 35 (DPIA)
- Citer Code de la propriété intellectuelle français (CPI art. L121-1 droit moral, L131-3 droits patrimoniaux)
- Distinction Model Release (USA) vs Droit à l'image (France — Civil Code art. 9) vs GDPR Image rights (UE)
- AI Act UE 2024/1689 art. 50 (transparence GenAI) pour assets IA générés
- Procédure technique "Droit à l'oubli" : DELETE physique vs anonymisation vs flagging
- Cross-link `juridique_ia/dpia-systemes-ia.md` + `juridique_ia/rgpd-ia.md` (groupe Conseil/Direction déjà audité)
- Anti-patterns : "RGPD = juste un flag binaire", "Pas de Model Release = exposition juridique"

### 🔴 P1.3 — `pim_expert/gouvernance-donnees-produit.md` (88L) — **Référentiels gouvernance absents**
**Symptôme** : DAMA-DMBOK 2 cité dans certif mais **sans année (2017)**, **GS1 absent** (GTIN, GLN, GDSN — standards universels PIM), **MDM patterns** (Inmon, Ladley, Kimball) absents, **Microsoft CDM** absent. Skill clé "gouvernance" sans framework gouvernance datable.

**Corrections (V2)** :
- DAMA International (2017) *DAMA-DMBOK 2*, Technics Publications — citer édition 2 + 6 piliers DAMA officiels
- GS1 (gs1.org) — GTIN-13 (EAN-13), GPC (Global Product Classification), GLN (Global Location Number), GDSN (Global Data Synchronization Network)
- MDM patterns : Inmon W. *Master Data Management* (2008), Ladley J. *Making EIM Work* (2010)
- Microsoft CDM (learn.microsoft.com/common-data-model)
- Cross-link `data_engineer/gouvernance-data.md` (Data/Tech — DAMA partagé)
- Anti-patterns : "MDM = juste un PIM", "Gouvernance sans framework reconnu", "GTIN non validé"

---

## 5. Findings P2 — Enrichissements (~30 skills)

Approche commune (bundles thématiques pour Phase 3) :
- Section `## Sources` datée systématique (~50 skills concernés tous groupes confondus)
- Section `## Anti-patterns` (3-5 bullets) — particulièrement DAM-EXPERT (8/12 sans), DEV-TYPESCRIPT-IA (8/9 sans)
- Versions précises pour les frameworks (Bynder, Cloudinary, SDK Anthropic, dbt, Drupal, AEM)
- Cross-links inter-skills (0/55 actuellement)

### Cas notables P2

#### P2.A — Bundle DEV-TYPESCRIPT-IA (9 P2 sur 9 — patrimoine 100% en P2)
0/9 source externe URL · versions SDK absentes systématiquement (`@anthropic-ai/sdk`, `@ai-sdk/anthropic`, `ai`, `react`, `next`, `zod`, `@modelcontextprotocol/sdk`). Modèles hardcodés (`claude-opus-4-5`) sans constante centrale. Fonctions implicites (`anthropic()`, `toast`, `confluenceClient`) sans imports déclarés.
**Action V3 bundle** : "Sources Anthropic/Vercel SDK Dev/CMS" — ajouter URLs docs.anthropic.com, sdk.vercel.ai, modelcontextprotocol.io, react.dev, nextjs.org sur 9 skills + versions npm `^X.Y.Z`.

#### P2.B — Bundle DAM-EXPERT (9 P2 sur 12) — Sourcing IPTC/XMP technique
IPTC/XMP exploités (préfixes Iptc4xmpCore, xmpRights, exif:, dc:) mais sans URL iptc.org, sans version IPTC Core 2024 / IPTC Extension, sans ISO 16684-1 (XMP). Bynder/Cloudinary/AEM SDKs sans versions. Tokens Bearer en dur dans code exemple.
**Action V3 bundle** : URLs IPTC + versions SDK + secrets en env vars.

#### P2.C — Bundle CMS-DIGITAL (6 P2 sur 12) — TYPO3 + WordPress absents + DXP absent
2 CMS majeurs (TYPO3 12+ Drupal Association, WordPress 6.x Automattic) absents. DXP Forrester Wave absent dans `architecture-cms.md`. Atomic Design (Frost 2016) absent dans `rebranding-digital.md`.
**Action V2 candidat** : créer `cms_digital/typo3-developpement.md` + `cms_digital/wordpress-developpement.md` (mais cohérent règle 1 "consolidation > multiplication" : préférer ajouter sections TYPO3/WP dans `architecture-cms.md` plutôt que skills standalone).

#### P2.D — Bundle PIM-EXPERT — GS1 sous-intégré
GS1 cité dans 2/12 skills (syndication-canaux, onboarding-donnees-produit) — devrait être dans 6/12 minimum (gouvernance, scoring, integration-erp, modelisation, kpis, pim-ia). Schema.org Product absent (structured data e-commerce critique).
**Action V3 bundle** : "Standards GS1 PIM" — propager GTIN/GPC/GDSN sur ~10 skills.

#### P2.E — Bundle DEV-DRUPAL-PHP — Drupal 11 absent
10/10 skills ciblent Drupal 10 (sortie H2 2022, EOL prévue 2026) sans aucune mention Drupal 11 (latest stable, sortie H2 2024). Migrate API mentionné en périmètre agent mais aucun skill ne le couvre.
**Action V2 candidat (Phase 2)** : ajouter section Drupal 11 compatibility + skill `drupal-migrate-api.md` OU enrichir `drupal-module-custom.md` avec section Migrate API (cohérent règle 1 consolidation).

---

## 6. Findings P3 — Cosmétique (~21 skills, 38% — record positif du chantier)

Skills solides nécessitant compléments sources et anti-patterns.

| Skill | Action |
|---|---|
| `drupal-commerce-checkout.md` | Citer Drupal Commerce 2.x documentation, exemple Guard Plugin |
| `drupal-config-yaml.md` | URL drupalcommerce.org, citer Drupal Key module pour secrets |
| `drupal-integration-api-tierce.md` | Préciser PSR-3 (Logger Interface), retry logic exponential backoff + jitter |
| `drupal-module-custom.md` | Citer Drupal Coding Standards URL, ajouter exemple EventSubscriber complet |
| `drupal-performance.md` | URL Blackfire.io, exemple ESI Varnish, Cloudflare Workers Drupal |
| `drupal-tests-phpunit-behat.md` | Citer Bergmann S. *PHPUnit Manual*, Behat docs URL behat.org |
| `drupal-user-roles.md` | Citer Group module Drupal, AttributeAPI (D10+) |
| `cms_digital/drupal-developpement.md` | Mêmes que dev_drupal/* mais déjà bien sourcé Acquia + drupal.org |
| `cms_digital/gouvernance-editoriale.md` | Citer PMBOK pour RACI, Volere pour exigences contributeurs |
| `cms_digital/migration-cms.md` | Citer TOGAF 10 phase F/G (Migration Planning + Implementation Governance) |
| `cms_digital/performance-web.md` | Proche ✓ pur — citer Beyer et al. *SRE* (2016) pour SLI/SLO, GTmetrix |
| `cms_digital/seo-technique-cms.md` | Préciser Schema.org URL canonique, JSON-LD vs Microdata vs RDFa |
| `pim_expert/syndication-canaux.md` | URL gs1.org explicite, version GS1 (GDSN release 3.1+) |
| `pim_expert/localisation-i18n.md` | Citer ISO 639-1, ISO 3166-1, Unicode CLDR explicitement |
| `pim_expert/scoring-qualite-produit.md` | Ajouter GS1 GTIN dans règles métier |
| `pim_expert/onboarding-donnees-produit.md` | Clarifier GTIN-13 = EAN-13 (même standard GS1) |
| `pim_expert/pim-augmente-ia.md` | URL anthropic.com docs, version SDK Anthropic Python |
| `dam_expert/dam-augmente-ia.md` | Version SDK Anthropic explicite, pHash threshold (ex : 0.95) |
| `dam_expert/naming-convention.md` | Ajouter procédure batch rename, edge cases regex underscores |

---

## 7. Skill exemplaire : `cms_digital/accessibilite-numerique.md` ⭐

**2ème skill ✓ pur du chantier hors Agile/Produit** (après `archimate-modeling.md` Data/Tech).

**Pourquoi il sort du lot** :
- **WCAG 2.2** (W3C 2023) explicitement cité avec niveaux A/AA/AAA
- **RGAA 4.1** (DINUM 2024) — obligation légale France citée
- **POUR** framework (Perceptible, Utilisable, Compréhensible, Robuste)
- ARIA 1.2 patterns explicites (4 cas d'usage : nav, modal, button, skip-link)
- Ratios de contraste chiffrés (4,5:1)
- 12 critères RGAA prioritaires P1 avec test rapide
- 12 anti-patterns inverses listés (alt vide, contraste faible, scripts non clavier, etc.)
- Outils intégrés CI/CD : Pa11y, axe DevTools, WAVE
- Lecteurs d'écran : NVDA, VoiceOver, JAWS cités
- Déclaration d'Accessibilité DINUM template

**Reste à parfaire** (P3 cosmétique léger) : ajouter URLs W3C WCAG 2.2 + DINUM RGAA 4.1, lien WAI-ARIA Authoring Practices.

**À dupliquer** : modèle de référence accessibilité/conformité du catalogue. Pattern "obligation légale + critères chiffrés + outils + anti-patterns" à propager.

---

## 8. Findings transversaux (patterns globaux groupe)

### 🔴 T1 — DEV-TYPESCRIPT-IA : 0/9 sources externes URLs (carence sourcing structurelle)
9 skills cités frameworks (Anthropic SDK, Vercel AI SDK, MCP, React, Next.js, Zod, Edge Runtime) mais **aucune URL** docs.anthropic.com / sdk.vercel.ai / modelcontextprotocol.io / react.dev / nextjs.org. Versions npm absentes systématiquement (`@ai-sdk/anthropic@latest` au lieu de `^X.Y.Z`). Risque reproductibilité.
**Action V3 bundle** : URLs + versions npm sur 9 skills (~30 min mécanique).

### 🔴 T2 — DEV-DRUPAL-PHP : Drupal 11 ABSENT (10/10 skills)
Tous skills ciblent Drupal 10 sans aucune mention Drupal 11 (sortie 2024). EOL Drupal 10 prévue 2026 — risque obsolescence imminente.
**Action V2 candidat Phase 2** : section "Drupal 11 migration path" + deprecations D10→D11.

### 🔴 T3 — Migrate API et Drupal Twig XSS absents (DEV-DRUPAL-PHP)
- Migrate API : déclaré périmètre agent mais 0 skill ne le couvre
- Twig XSS / autoescape : absent de `drupal-theming-twig.md` (P1 ci-dessus)
**Action** : V2 priorité haute Twig XSS + section Migrate API dans `drupal-module-custom.md` ou skill dédié.

### 🔴 T4 — CMS-DIGITAL : TYPO3 + WordPress absents
2 CMS majeurs marché EU/global non couverts. TYPO3 ~10% parts marché EU, WordPress 43% parts marché global.
**Action** : créer sections TYPO3/WP dans `architecture-cms.md` (cohérent règle 1 consolidation) ou créer 2 skills dédiés (cohérent règle 2 méthode standard).

### 🔴 T5 — DAM-EXPERT : RGPD sans source légale (6 skills)
Pattern P1.2 identifié : RGPD cité dans workflow-validation, gestion-droits, taxonomie, dam-augmente-ia, gouvernance-dam, naming-convention SANS source légale. Risque conformité majeur pour clients régulés.
**Action V2 priorité haute** : refonte `gestion-droits-licences.md` avec RGPD UE 2016/679 articles + cross-link `juridique_ia/rgpd-ia.md`.

### 🔴 T6 — PIM-EXPERT : GS1 sous-intégré (2/12 skills)
GS1 = standard universel e-commerce (Amazon GTIN obligatoire, GDSN syndication retail). Présent dans seulement 2 skills (syndication, onboarding).
**Action V3 bundle** : "Standards GS1 PIM" propagé sur 10 skills (gouvernance, scoring, integration-erp, modelisation, migration, kpis, pim-ia, portail).

### 🟡 T7 — Versions SDK absentes systématiquement (~30 skills)
Bynder, Cloudinary, Anthropic SDK, ai SDK, @ai-sdk/anthropic, @modelcontextprotocol/sdk, dbt, Drupal Commerce, AEM, Akeneo — tous cités sans versions précises. Risque maintenance long terme.
**Action V3 bundle** : versions test frontmatter (~30 skills).

### 🟡 T8 — Incohérence nommage dossier DEV-DRUPAL-PHP
Agent : `AGENT-DEV-DRUPAL-PHP.md` · Dossier réel : `skills/dev_drupal/` (pas `dev_drupal_php/`). Confirmé non bloquant car références internes cohérentes mais légère incohérence cosmétique.
**Action V1 (différée)** : décider renommage dossier vers `dev_drupal_php/` (impact cross-refs) OU renommer agent vers `AGENT-DEV-DRUPAL.md` (impact convention nommage). À arbitrer si V3 bundle.

### 🟡 T9 — Anti-patterns absents DAM-EXPERT (8/12)
DAM-EXPERT : 0 anti-patterns explicites sur 8 skills (taxonomie, workflow-validation, droits, distribution, transformation, integration-cms, brand-portal, analytics). Approche purement prescriptive sans pédagogie contre-exemples.
**Action V3 bundle** : "Anti-patterns DAM" — 3-5 par skill (RGPD non tracé, distribution sans préfixe canal, formats sans optimisation, etc.).

### 🟡 T10 — 0 cross-link inter-skills (cohérent groupes Conseil/Direction + Data/Tech)
Frontières évidentes non documentées :
- `dam_expert/gestion-droits-licences.md` ↔ `juridique_ia/rgpd-ia.md` (RGPD partagé)
- `pim_expert/gouvernance-donnees-produit.md` ↔ `data_engineer/gouvernance-data.md` (DAMA partagée)
- `cms_digital/accessibilite-numerique.md` ↔ `juridique_ia/ai-act-conformite.md` (accessibilité réglementaire)
- `dev_typescript_ia/mcp-server-dev.md` ↔ `scrum/po-ai-product.md` (PSPO-AI + MCP)
**Action V3 bundle** : cross-links inter-agents (~150 liens estimés sur 55 skills).

---

## 9. Plan d'action recommandé (4 vagues)

### V1 — Mass cosmétique transverse Dev/CMS (~30 min)
Vu le faible taux P1 (5%) et le record P3 (38%), V1 minimal :
1. **T8 (cosmétique)** : décider renommage dossier `dev_drupal/` vs agent (à arbitrer)
- **Impact V1** : aucun P1 ne régresse (les 3 P1 sont profonds, pas cosmétiques)
- **État après V1** : 1 ✓ / ~21 P3 / ~30 P2 / **3 P1** (identique)

### V2 — Bugs bloquants P1 (~3-4h, à différer en Phase 2 transversale)
3 P1 identifiés — selon stratégie hybride (max 1-2 V2 d'exception), candidats top priorité :
- 🔴 **Priorité haute Phase 2** : `drupal-theming-twig.md` (Twig XSS — bug sécurité)
- 🔴 **Priorité haute Phase 2** : `gestion-droits-licences.md` (RGPD source légale — bug conformité)
- 🟡 **Priorité moyenne Phase 2** : `gouvernance-donnees-produit.md` (DAMA + GS1 + MDM patterns)

### V3 — Bundles thématiques cross-agents (Phase 3, ~6-8h)
- **Bundle "Sources Frameworks Dev/CMS"** — URLs + versions npm/SDK sur ~30 skills (T1 + T7)
- **Bundle "Anti-patterns Dev/CMS"** — ajouter sur ~25 skills sans (T9)
- **Bundle "Cross-links Voir aussi"** — ~150 liens cross-agents (T10)
- **Bundle "Standards GS1 PIM"** — propagation sur 10 skills PIM (T6)
- **Bundle "Drupal 11 compatibility"** — section sur 10 skills DRUPAL-PHP (T2)
- **Bundle "TYPO3 + WordPress"** — sections dans `architecture-cms.md` (T4)
- **Bundle "Versions SDK"** — frontmatter sur ~30 skills (T7)

### V4 — Cosmétique P3 (~3h, optionnel)
~21 skills P3 proches ✓ : ajout sources + 1-2 anti-patterns chacun.

---

## 10. Bilan groupe Dev/CMS & méta-observations méthode v2.8.3

### Comparaison inter-groupes (4/5 groupes audités)

| Métrique | Agile/Produit | Conseil/Direction | Data/Tech | **Dev/CMS** |
|---|---|---|---|---|
| Agents | 9 | 6 | 5 | 5 |
| Skills | 55 | 44 | 54 | **55** |
| Vol. cumulé | ~4700L | ~5141L | ~5950L | ~5545L |
| % ✓ purs | 5% (3) | 0% | 2% (1) | 2% (1) ⭐ |
| % P3 | 22% | 23% | 15% | **38%** 🏆 |
| % P2 | 47% | 70% | 55% | 55% |
| % P1 | 25% | 7% | 28% | **5%** 🏆 |
| % sans certif | 31% | 0% | 0% | 0% |
| % anti-patterns | 36% | 23% | 33% | 40% |
| % cross-links | 11% | 0% | 0% | 0% |

**Méta-observations méthode v2.8.3** :
- ✅ Grille v2.8.3 Dev/CMS **applicable sans ajustement** depuis formalisation (4ème déclinaison rodée)
- ✅ Délégation extraction Explore × 5 en parallèle (méthode standard intacte [[feedback-no-degradation-qualite]]) = ~15-20 min wall-time pour 55 skills
- ✅ **Application disciplinée test #3 triptyque** : refus complaisance sur signaux Explore non vérifiés (cf. méta-leçon v2.11.0 Data/Tech faux positif Delta)
- ✅ **Profil qualité du groupe = inverse de Data/Tech** : Dev/CMS = 5% P1 / 38% P3 vs Data/Tech 28% P1 / 15% P3. Pattern dominant Dev/CMS = "code abondant + certifs spécialistes + outils mainstream bien intégrés" (Bynder, Cloudinary, AEM, Drupal, Akeneo, Anthropic MCP)
- ⚠️ **Pattern P1 dominant nouveau** : "skill sécurité/conformité avec gap critique" (Twig XSS, RGPD sans source) — distinct du pattern P1 "référentiels académiques fondateurs absents" (Data/Tech)
- ⚠️ Sécurité Web (XSS, RGPD, secrets) = axe critique transverse à intégrer en grille v2.8

### Spécificités groupe Dev/CMS
- Patrimoine **techniquement opérationnel** (55 skills, code abondant, certifications spécialistes valides Acquia/Adobe/Anthropic/Bynder/Cloudinary/IPTC/Henry Stewart)
- Meilleur ratio qualité du chantier — confirmation que skills "outils mainstream" (Drupal/AEM/Bynder) ont déjà été enrichis sur expérience terrain
- 2 ✓ purs candidats identifiés (`accessibilite-numerique.md` ✓ + `performance-web.md` proche)
- Sécurité Web faible : 2 P1 sur 3 sont des bugs sécurité/conformité — différenciateur compétitif Phase 2 majeur

---

## Annexes

### A. Sources attendues complémentaires (Dev/CMS)

**TypeScript / Frontend IA** :
- Microsoft (2012+) *TypeScript Handbook*, typescriptlang.org/docs
- Meta *React 18+ documentation*, react.dev
- Vercel *Next.js 14+ documentation*, nextjs.org
- Anthropic *Claude API documentation*, docs.anthropic.com
- Vercel *AI SDK documentation*, sdk.vercel.ai
- Anthropic (2024) *Model Context Protocol*, modelcontextprotocol.io
- W3C *Server-Sent Events*, html.spec.whatwg.org/multipage/server-sent-events.html

**Drupal / PHP** :
- Drupal Association *Drupal 10/11 documentation*, drupal.org
- Drupal Commerce *Commerce 2.x docs*, drupalcommerce.org
- Fabien Potencier (SensioLabs) *Twig documentation*, twig.symfony.com
- Sebastian Bergmann *PHPUnit documentation*, phpunit.de
- *Behat — BDD for PHP*, behat.org
- PHP-FIG *PSR-12 — Extended Coding Style*, php-fig.org/psr/psr-12
- Acquia *Drupal certifications*, acquia.com/training

**CMS Digital** :
- W3C (2023) *Web Content Accessibility Guidelines 2.2*, w3.org/WAI/standards-guidelines/wcag/
- DINUM (2024) *Référentiel Général d'Amélioration de l'Accessibilité 4.1*, accessibilite.numerique.gouv.fr
- W3C (2024) *ARIA 1.2*, w3.org/TR/wai-aria-1.2
- Google (2020+) *Core Web Vitals*, web.dev/vitals
- Schema.org *Vocabulary*, schema.org
- Adobe *AEM 6.5+ documentation*, experienceleague.adobe.com
- Brad Frost (2016) *Atomic Design*, atomicdesign.bradfrost.com
- Forrester *Wave Digital Experience Platforms*, forrester.com

**PIM** :
- Akeneo *PIM documentation*, akeneo.com
- GS1 *Standards documentation*, gs1.org
- Schema.org *Product*, schema.org/Product
- DAMA International (2017) *DAMA-DMBOK 2*, Technics Publications
- Stibo Systems *STEP documentation*, stibosystems.com
- W. Inmon, B. O'Neil, L. Fryman (2008) *Business Metadata: Capturing Enterprise Knowledge*
- John Ladley (2010) *Making Enterprise Information Management Work*

**DAM** :
- IPTC (2024) *Photo Metadata Standard*, iptc.org/standards/photo-metadata
- ISO/IEC 16684-1:2019 *XMP — Adobe Extensible Metadata Platform*
- IIIF Consortium *International Image Interoperability Framework*, iiif.io
- Bynder *Platform documentation*, bynder.com
- Cloudinary *Media documentation*, cloudinary.com
- Aprimo *DAM documentation*, aprimo.com
- Henry Stewart *DAM Foundation*, henrystewartconferences.com
- Creative Commons *Licenses*, creativecommons.org/licenses

**Standards web** :
- W3C *HTTP/2*, RFC 9113
- IETF *HTTP/3*, RFC 9114
- IETF (2024) *OAuth 2.1*, RFC 9700
- OpenAPI Initiative *OpenAPI 3.1*, openapis.org
- OWASP (2021) *Top 10*, owasp.org/Top10

### B. Prochaines étapes

- [ ] Validation Guy : verdicts (1 ✓ / ~21 P3 / ~30 P2 / 3 P1)
- [ ] Décision V1 mass (T8 nommage dossier `dev_drupal/` — arbitrage cosmétique)
- [ ] Confirmer différé Phase 2 transversale pour les 3 P1
- [ ] Décision : passer à Phase 1.4 (Transverse/Méta, dernier groupe) ?

### C. Volume groupe consolidé
- 55 skills audités · ~5545 lignes cumulées (+ ~400L AGENT-*.md)
- Skill le plus court : `gestion-droits-licences.md` (69L) 🔴
- Skill le plus long : `looker-lookml.md` (163L) déjà comptabilisé Data/Tech / dans Dev/CMS : `migration-cms.md` (157L)
- Moyenne : ~101L / skill
- **Couverture standards sourcing** : ~18% (10/55 skills citent ≥1 source datée) — meilleur taux du chantier (vs 9% Agile/Produit, 7% Conseil/Direction, 9% Data/Tech)
- 1 ✓ pur sur 55 (1.8%) — `cms_digital/accessibilite-numerique.md` ⭐
