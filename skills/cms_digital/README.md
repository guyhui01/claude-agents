# Skills — CMS & Digital Platform

> Dossier rattaché à `AGENT-CMS-DIGITAL.md`
> Référentiels : Adobe AEM · Acquia Drupal 10 · Contentful · Sitecore · TYPO3 · Optimizely · HubSpot · Shopify · TOGAF 10 · WCAG 2.2 / RGAA 4.1

---

## Index des skills (12)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`architecture-cms.md`](architecture-cms.md) | Concevoir l'architecture CMS cible (headless / hybride / composable) | TOGAF 10 · Contentful · AEM Dev |
| 2 | [`aem-sites-assets.md`](aem-sites-assets.md) | Configurer et développer sur Adobe AEM (Sites, Assets, AEM as Cloud Service) | Adobe AEM Sites Dev · Business Practitioner |
| 3 | [`drupal-developpement.md`](drupal-developpement.md) | Développer sur Drupal 10 (modules custom, Commerce, REST API, PHPUnit) | Acquia Certified Dev · Site Builder |
| 4 | [`cms-headless.md`](cms-headless.md) | Mettre en œuvre un CMS Headless (Contentful, Strapi, Sanity, Payload) | Contentful Certified · AEM Dev |
| 5 | [`migration-cms.md`](migration-cms.md) | Piloter une migration CMS (carve-out, replatform, ETL éditorial) | Acquia Dev · AEM Dev · TOGAF 10 |
| 6 | [`gouvernance-editoriale.md`](gouvernance-editoriale.md) | Définir la gouvernance éditoriale et workflows de publication | AEM Business Practitioner · Acquia Site Builder |
| 7 | [`integration-pim-dam.md`](integration-pim-dam.md) | Intégrer un PIM ou un DAM au CMS | AEM Dev · Acquia Dev · Contentful |
| 8 | [`performance-web.md`](performance-web.md) | Auditer et améliorer la performance web (Core Web Vitals, CDN) | AEM Dev · Acquia Dev |
| 9 | [`accessibilite-numerique.md`](accessibilite-numerique.md) | Auditer l'accessibilité (RGAA 4.1 / WCAG 2.2) | WCAG 2.2 / RGAA 4.1 |
| 10 | [`seo-technique-cms.md`](seo-technique-cms.md) | Optimiser le SEO technique (sitemap, schema.org, hreflang) | AEM Business Practitioner · Acquia Site Builder |
| 11 | [`rebranding-digital.md`](rebranding-digital.md) | Gérer un rebranding digital multisite (carve-out de marque) | AEM Business Practitioner · TOGAF 10 · Acquia |
| 12 | [`personnalisation-segmentation.md`](personnalisation-segmentation.md) | Concevoir personnalisation et segmentation (Adobe Target, Optimizely) | Adobe AEM Sites Dev · Sitecore XP 10 |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... CONCEVOIR UNE PLATEFORME CMS ?
    → architecture-cms.md (headless vs hybride vs monolithique)
    → cms-headless.md (si choix headless)
    → aem-sites-assets.md / drupal-developpement.md (si stack ciblée)

  ... MIGRER OU REBRANDER ?
    → migration-cms.md (carve-out, replatform, mapping)
    → rebranding-digital.md (multisite international)

  ... GOUVERNER LE CONTENU ?
    → gouvernance-editoriale.md (workflows, rôles, taxonomie)
    → integration-pim-dam.md (sources de données produit et assets)

  ... OPTIMISER LA PLATEFORME ?
    → performance-web.md (Core Web Vitals)
    → accessibilite-numerique.md (RGAA / WCAG)
    → seo-technique-cms.md (référencement)
    → personnalisation-segmentation.md (A/B test, ciblage)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Gestion des données produit textuelles | `AGENT-PIM-EXPERT.md` | CMS = publication ; PIM = données produit |
| Gestion des assets binaires (images, vidéos) | `AGENT-DAM-EXPERT.md` | CMS = publication ; DAM = bibliothèque d'assets |
| Développement frontend généraliste | `AGENT-DEV-TYPESCRIPT-IA.md` | CMS = templates + intégration ; DEV-TS = frontend SPA Next.js |
| Infrastructure Cloud / Kubernetes | `AGENT-DEVOPS-CLOUD.md` | CMS = configuration ; DEVOPS = infrastructure |
| Architecture SI globale TOGAF | `AGENT-SOLUTIONS-ARCHITECT.md` | CMS = applicatif ; SOLUTIONS = SI complet |
| UX Research et design system | `AGENT-UX-DESIGNER.md` | CMS = templates UI ; UX = design système et research |
| Conformité RGPD et IA Act | `AGENT-JURIDIQUE-IA.md` | CMS = implémentation ; JURIDIQUE = obligations légales |

---

## Référentiels et standards utilisés

- **Adobe AEM** : https://experienceleague.adobe.com/docs/experience-manager.html
- **Drupal 10** : https://www.drupal.org/docs/10
- **Contentful** : https://www.contentful.com/developers/docs/
- **TYPO3** : https://docs.typo3.org/
- **WCAG 2.2** : https://www.w3.org/TR/WCAG22/
- **RGAA 4.1** : https://accessibilite.numerique.gouv.fr/
- **Core Web Vitals** : https://web.dev/vitals/
- **schema.org** : https://schema.org/
- **TOGAF 10** : pour la couche architecture
