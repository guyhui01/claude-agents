# Skills — CMS & Digital Platform

> Folder attached to `AGENT-CMS-DIGITAL.md`
> Frameworks: Adobe AEM · Acquia Drupal 10 · Contentful · Sitecore · TYPO3 · Optimizely · HubSpot · Shopify · TOGAF 10 · WCAG 2.2 / RGAA 4.1

---

## Skill index (12)

| # | Skill | When to use it | Certification |
|---|---|---|---|
| 1 | [`architecture-cms.md`](architecture-cms.md) | Design the target CMS architecture (headless / hybrid / composable) | TOGAF 10 · Contentful · AEM Dev |
| 2 | [`aem-sites-assets.md`](aem-sites-assets.md) | Configure and develop on Adobe AEM (Sites, Assets, AEM as Cloud Service) | Adobe AEM Sites Dev · Business Practitioner |
| 3 | [`drupal-developpement.md`](drupal-developpement.md) | Develop on Drupal 10 (custom modules, Commerce, REST API, PHPUnit) | Acquia Certified Dev · Site Builder |
| 4 | [`cms-headless.md`](cms-headless.md) | Implement a Headless CMS (Contentful, Strapi, Sanity, Payload) | Contentful Certified · AEM Dev |
| 5 | [`migration-cms.md`](migration-cms.md) | Lead a CMS migration (carve-out, replatform, editorial ETL) | Acquia Dev · AEM Dev · TOGAF 10 |
| 6 | [`gouvernance-editoriale.md`](gouvernance-editoriale.md) | Define editorial governance and publishing workflows | AEM Business Practitioner · Acquia Site Builder |
| 7 | [`integration-pim-dam.md`](integration-pim-dam.md) | Integrate a PIM or DAM with the CMS | AEM Dev · Acquia Dev · Contentful |
| 8 | [`performance-web.md`](performance-web.md) | Audit and improve web performance (Core Web Vitals, CDN) | AEM Dev · Acquia Dev |
| 9 | [`accessibilite-numerique.md`](accessibilite-numerique.md) | Audit accessibility (RGAA 4.1 / WCAG 2.2) | WCAG 2.2 / RGAA 4.1 |
| 10 | [`seo-technique-cms.md`](seo-technique-cms.md) | Optimize technical SEO (sitemap, schema.org, hreflang) | AEM Business Practitioner · Acquia Site Builder |
| 11 | [`rebranding-digital.md`](rebranding-digital.md) | Manage a multisite digital rebranding (brand carve-out) | AEM Business Practitioner · TOGAF 10 · Acquia |
| 12 | [`personnalisation-segmentation.md`](personnalisation-segmentation.md) | Design personalization and segmentation (Adobe Target, Optimizely) | Adobe AEM Sites Dev · Sitecore XP 10 |

---

## Choosing the right skill — Decision tree

```
You want to ...

  ... DESIGN A CMS PLATFORM?
    → architecture-cms.md (headless vs hybrid vs monolithic)
    → cms-headless.md (if going headless)
    → aem-sites-assets.md / drupal-developpement.md (if the stack is set)

  ... MIGRATE OR REBRAND?
    → migration-cms.md (carve-out, replatform, mapping)
    → rebranding-digital.md (international multisite)

  ... GOVERN CONTENT?
    → gouvernance-editoriale.md (workflows, roles, taxonomy)
    → integration-pim-dam.md (product data and asset sources)

  ... OPTIMIZE THE PLATFORM?
    → performance-web.md (Core Web Vitals)
    → accessibilite-numerique.md (RGAA / WCAG)
    → seo-technique-cms.md (search ranking)
    → personnalisation-segmentation.md (A/B testing, targeting)
```

---

## Boundaries with other agents

| Adjacent topic | Relevant agent | Boundary |
|---|---|---|
| Textual product data management | `AGENT-PIM-EXPERT.md` | CMS = publishing; PIM = product data |
| Binary asset management (images, videos) | `AGENT-DAM-EXPERT.md` | CMS = publishing; DAM = asset library |
| General-purpose frontend development | `AGENT-DEV-TYPESCRIPT-IA.md` | CMS = templates + integration; DEV-TS = Next.js SPA frontend |
| Cloud / Kubernetes infrastructure | `AGENT-DEVOPS-CLOUD.md` | CMS = configuration; DEVOPS = infrastructure |
| Overall TOGAF IS architecture | `AGENT-SOLUTIONS-ARCHITECT.md` | CMS = application; SOLUTIONS = full IS |
| UX research and design system | `AGENT-UX-DESIGNER.md` | CMS = UI templates; UX = design system and research |
| GDPR and AI Act compliance | `AGENT-JURIDIQUE-IA.md` | CMS = implementation; JURIDIQUE = legal obligations |

---

## Frameworks and standards used

- **Adobe AEM**: https://experienceleague.adobe.com/docs/experience-manager.html
- **Drupal 10**: https://www.drupal.org/docs/10
- **Contentful**: https://www.contentful.com/developers/docs/
- **TYPO3**: https://docs.typo3.org/
- **WCAG 2.2**: https://www.w3.org/TR/WCAG22/
- **RGAA 4.1**: https://accessibilite.numerique.gouv.fr/
- **Core Web Vitals**: https://web.dev/vitals/
- **schema.org**: https://schema.org/
- **TOGAF 10**: for the architecture layer
```
