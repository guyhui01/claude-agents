# Skills — PIM & Gestion du Catalogue Produit

> Dossier rattaché à `AGENT-PIM-EXPERT.md`
> Référentiels : Akeneo · Pimcore · inriver · Salsify · SAP MDG · Contentserv · DAMA DMBOK2 · CDMP · ISO/IEC 42001:2023

---

## Index des skills (12)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`modelisation-catalogue.md`](modelisation-catalogue.md) | Modéliser le catalogue (familles, attributs, variantes, unités) | Akeneo PM · Pimcore Dev · DAMA DMBOK2 |
| 2 | [`enrichissement-produit.md`](enrichissement-produit.md) | Définir et piloter les workflows d'enrichissement | Akeneo PM · inriver · Salsify |
| 3 | [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) | Mettre en place la gouvernance (MDM, golden record, dédup) | CDMP · DAMA DMBOK2 · SAP MDG · ISO/IEC 42001 |
| 4 | [`syndication-canaux.md`](syndication-canaux.md) | Syndiquer sur e-com, marketplaces, print, B2B | Akeneo Dev · Salsify · inriver |
| 5 | [`localisation-i18n.md`](localisation-i18n.md) | Gérer la localisation et l'internationalisation produit | Akeneo PM · Contentserv · inriver |
| 6 | [`integration-erp-pim.md`](integration-erp-pim.md) | Intégrer ERP → PIM (SAP, Oracle, Dynamics) | SAP MDG · Akeneo Dev · Pimcore Dev |
| 7 | [`scoring-qualite-produit.md`](scoring-qualite-produit.md) | Mettre en place le scoring qualité catalogue (completeness) | Akeneo PM · CDMP · inriver |
| 8 | [`migration-pim.md`](migration-pim.md) | Piloter une migration PIM (audit, mapping, ETL, recette) | Akeneo Dev · Pimcore Dev · DAMA DMBOK2 |
| 9 | [`portail-fournisseurs.md`](portail-fournisseurs.md) | Déployer un portail fournisseurs (onboarding, validation) | Akeneo Dev · Contentserv · inriver |
| 10 | [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) | Industrialiser l'onboarding de données produit | Akeneo Dev · SAP MDG · DAMA DMBOK2 |
| 11 | [`pim-augmente-ia.md`](pim-augmente-ia.md) | Enrichir le catalogue par IA (génération desc, classification) | Claude Code in Action · Akeneo Dev · ISO/IEC 42001 |
| 12 | [`kpis-catalogue.md`](kpis-catalogue.md) | Piloter les KPIs et SLA du catalogue produit | Akeneo PM · CDMP · inriver |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉMARRER UN PROJET PIM ?
    → modelisation-catalogue.md (modèle de données AVANT tout)
    → gouvernance-donnees-produit.md (rôles, golden record)

  ... INTÉGRER LE PIM AU SI ?
    → integration-erp-pim.md (entrants SAP/Oracle)
    → syndication-canaux.md (sortants e-com/marketplaces)
    → portail-fournisseurs.md (contributions externes)

  ... ENRICHIR LE CATALOGUE ?
    → enrichissement-produit.md (workflows manuels + règles)
    → pim-augmente-ia.md (auto-tagging, génération desc IA)
    → localisation-i18n.md (multilingue)

  ... MIGRER UN PIM EXISTANT ?
    → migration-pim.md (audit + mapping + ETL + recette)
    → onboarding-donnees-produit.md (industrialisation)

  ... MESURER LA QUALITÉ ?
    → scoring-qualite-produit.md (completeness, règles)
    → kpis-catalogue.md (SLA, taux d'enrichissement)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Gestion des assets binaires (images, vidéos) | `AGENT-DAM-EXPERT.md` | PIM = données produit textuelles ; DAM = assets visuels |
| Publication éditoriale et templates CMS | `AGENT-CMS-DIGITAL.md` | PIM = données structurées ; CMS = publication |
| Architecture SI globale | `AGENT-SOLUTIONS-ARCHITECT.md` | PIM = système métier ; SOLUTIONS = vue SI complète |
| E-commerce (tunnel d'achat, paiement) | `AGENT-DEV-TYPESCRIPT-IA.md` | PIM = catalogue ; DEV-TS = front e-commerce |
| Conformité RGPD et IA Act (enrichissement IA) | `AGENT-JURIDIQUE-IA.md` | PIM = implémentation ; JURIDIQUE = conformité |

---

## Référentiels et standards utilisés

- **Akeneo** : https://help.akeneo.com/
- **Pimcore** : https://pimcore.com/docs/
- **inriver** : https://www.inriver.com/
- **DAMA DMBOK2** : Data Management Body of Knowledge
- **CDMP** : Certified Data Management Professional
- **GS1 standards** (GTIN, EPC) : https://www.gs1.org/
- **ISO/IEC 42001:2023** : pour PIM augmenté IA
