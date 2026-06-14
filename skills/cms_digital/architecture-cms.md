# Skill — CMS Architecture (Headless / Hybrid / Monolithic)
> Certifications: TOGAF 10 Foundation · Contentful Certified Professional · Adobe AEM Sites Developer

## Objective
Design the target CMS architecture suited to the business needs: choose between a monolithic, hybrid, or headless CMS, define the components and integrations, and produce the reference architecture.

## CMS architecture models

```
MODEL         DESCRIPTION                          USE CASE
────────────  ───────────────────────────────────  ─────────────────────────────────────
Monolithic    Frontend integrated into the CMS     Simple sites, small teams, limited budget
              (AEM Sites, Drupal Classic,          E.g.: SME showcase site, intranet
              WordPress, TYPO3)

Hybrid        CMS backend + decoupled frontend     Limited multichannel, PWA, progressive redesigns
              API-driven but the CMS handles       E.g.: institutional site with a mobile app
              partial rendering (AEM Headless + AEM Sites)

Headless      CMS = pure API content platform      Omnichannel, IoT, kiosks, mobile apps
              Fully decoupled frontend             E.g.: Contentful + Next.js, Strapi + React
              (Contentful, Sanity, Prismic)

Composable    MACH architecture                    Complex e-commerce, large scale
(MACH)        Microservices + API + cloud-native   E.g.: global hotel platform, international luxury e-commerce
              + Headless (Contentful + Commercetools
              + Algolia + Cloudflare)
```

## CMS decision grid

| Criterion | Monolithic | Hybrid | Headless | Composable |
|---------|-------------|---------|----------|------------|
| Time-to-market | Fast | Medium | Long | Very long |
| Initial cost | Low | Medium | Medium | High |
| Scalability | Limited | Good | Excellent | Excellent |
| Editorial experience | Integrated | Good | Variable | Fragmented |
| Multichannel | No | Partial | Yes | Yes |
| Skills required | Pure CMS | CMS + Front | API + Front | MACH architecture |

## CMS architecture scoping template

```
CMS ARCHITECTURE — SCOPING SHEET
──────────────────────────────────────────────────────────────
Client context        : [Name, sector, scope]
Target model          : [Monolithic / Hybrid / Headless / Composable]
Selected CMS          : [AEM / Drupal / Contentful / Strapi / other]
Channels covered      : [Web, Mobile, Kiosk, Email, IoT…]
Languages / Markets   : [FR, EN, DE… — multisite or multidomain]
Key integrations      : [PIM, DAM, CRM, CDP, E-commerce…]
Content volume        : [pages / assets / SKU]
Editorial team        : [Profiles, expected autonomy]
Legacy constraints    : [Systems to keep / decommission]
Regulatory constraints: [GDPR, AI Act, RGAA accessibility]
```

## MACH architecture — Typical components

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                         │
│   Next.js / Nuxt / React Native / Native App        │
└─────────────┬───────────────────────────────────────┘
              │ GraphQL / REST API
┌─────────────▼───────────────────────────────────────┐
│                  API GATEWAY / BFF                  │
│         (Apigee / AWS API GW / Kong)                │
└──┬──────────┬──────────┬──────────┬─────────────────┘
   │          │          │          │
┌──▼──┐  ┌───▼──┐  ┌────▼──┐  ┌───▼────┐
│ CMS │  │ PIM  │  │  DAM  │  │ Search │
│     │  │      │  │       │  │Algolia │
└─────┘  └──────┘  └───────┘  └────────┘
```

## Deliverables
- CMS architecture scoping sheet
- Component diagram (C4 or ArchiMate)
- Annotated decision grid
- Integration matrix (source / target system / protocol)
- Migration roadmap if transitioning from an existing CMS

## Output format
Specify: **target channels** (web, mobile, IoT…), **volume** (pages, assets, languages), **constraints** (budget, legacy, regulation), **team profile** (available developers, CMS expertise), **horizon** (short / medium term).

## Anti-patterns
- ❌ **Choosing headless/MACH as a trend** with no real omnichannel need: unjustified complexity and cost → decide on the grid, not the hype
- ❌ **Monolithic for a clearly omnichannel need**: scalability wall → headless/composable
- ❌ **Composable without an API Gateway / BFF**: tight frontend ↔ microservices coupling → orchestration layer
- ❌ **Ignoring the editorial experience** in the choice: contributor rejection → weight the authoring side
- ❌ **Architecture without an integration matrix** (PIM/DAM/CRM/CDP): silos → map the flows from the scoping stage
- ❌ **No exit / reversibility strategy** (vendor lock-in): dependency → open standards, abstraction

## Sources
- **TOGAF 10** (The Open Group, 2022) — enterprise architecture framework — opengroup.org
- **MACH Alliance** (Microservices, API-first, Cloud-native, Headless) — machalliance.org
- **C4 Model** (Simon Brown) — c4model.com · **ArchiMate 3.2** (The Open Group) — architecture diagrams
- **Atomic Design** (Brad Frost, 2016) — atomicdesign.bradfrost.com · **Forrester Wave DXP** / **Gartner MQ DXP** — platform benchmarks

## See also
- [`cms-headless.md`](cms-headless.md) — headless/composable implementation
- [`migration-cms.md`](migration-cms.md) — trajectory from the existing architecture
- [`integration-pim-dam.md`](integration-pim-dam.md) — the architecture's PIM/DAM integrations
- [`../business_analyst/cartographie-si.md`](../business_analyst/cartographie-si.md) — IS mapping (TOGAF/ArchiMate)
