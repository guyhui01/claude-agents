# Skills — PIM & Product Catalog Management

> Folder attached to `AGENT-PIM-EXPERT.md`
> Frameworks: Akeneo · Pimcore · inriver · Salsify · SAP MDG · Contentserv · DAMA DMBOK2 · CDMP · ISO/IEC 42001:2023

---

## Skill index (12)

| # | Skill | When to invoke | Certification |
|---|---|---|---|
| 1 | [`modelisation-catalogue.md`](modelisation-catalogue.md) | Model the catalog (families, attributes, variants, units) | Akeneo PM · Pimcore Dev · DAMA DMBOK2 |
| 2 | [`enrichissement-produit.md`](enrichissement-produit.md) | Define and run enrichment workflows | Akeneo PM · inriver · Salsify |
| 3 | [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) | Set up governance (MDM, golden record, dedup) | CDMP · DAMA DMBOK2 · SAP MDG · ISO/IEC 42001 |
| 4 | [`syndication-canaux.md`](syndication-canaux.md) | Syndicate to e-com, marketplaces, print, B2B | Akeneo Dev · Salsify · inriver |
| 5 | [`localisation-i18n.md`](localisation-i18n.md) | Manage product localization and internationalization | Akeneo PM · Contentserv · inriver |
| 6 | [`integration-erp-pim.md`](integration-erp-pim.md) | Integrate ERP → PIM (SAP, Oracle, Dynamics) | SAP MDG · Akeneo Dev · Pimcore Dev |
| 7 | [`scoring-qualite-produit.md`](scoring-qualite-produit.md) | Set up catalog quality scoring (completeness) | Akeneo PM · CDMP · inriver |
| 8 | [`migration-pim.md`](migration-pim.md) | Run a PIM migration (audit, mapping, ETL, UAT) | Akeneo Dev · Pimcore Dev · DAMA DMBOK2 |
| 9 | [`portail-fournisseurs.md`](portail-fournisseurs.md) | Deploy a supplier portal (onboarding, validation) | Akeneo Dev · Contentserv · inriver |
| 10 | [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) | Industrialize product data onboarding | Akeneo Dev · SAP MDG · DAMA DMBOK2 |
| 11 | [`pim-augmente-ia.md`](pim-augmente-ia.md) | Enrich the catalog with AI (description generation, classification) | Claude Code in Action · Akeneo Dev · ISO/IEC 42001 |
| 12 | [`kpis-catalogue.md`](kpis-catalogue.md) | Drive product catalog KPIs and SLAs | Akeneo PM · CDMP · inriver |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... START A PIM PROJECT?
    → modelisation-catalogue.md (data model FIRST)
    → gouvernance-donnees-produit.md (roles, golden record)

  ... INTEGRATE THE PIM INTO THE IS?
    → integration-erp-pim.md (inbound SAP/Oracle)
    → syndication-canaux.md (outbound e-com/marketplaces)
    → portail-fournisseurs.md (external contributions)

  ... ENRICH THE CATALOG?
    → enrichissement-produit.md (manual workflows + rules)
    → pim-augmente-ia.md (auto-tagging, AI description generation)
    → localisation-i18n.md (multilingual)

  ... MIGRATE AN EXISTING PIM?
    → migration-pim.md (audit + mapping + ETL + UAT)
    → onboarding-donnees-produit.md (industrialization)

  ... MEASURE QUALITY?
    → scoring-qualite-produit.md (completeness, rules)
    → kpis-catalogue.md (SLA, enrichment rate)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| Binary asset management (images, videos) | `AGENT-DAM-EXPERT.md` | PIM = textual product data; DAM = visual assets |
| Editorial publishing and CMS templates | `AGENT-CMS-DIGITAL.md` | PIM = structured data; CMS = publishing |
| Global IS architecture | `AGENT-SOLUTIONS-ARCHITECT.md` | PIM = business system; SOLUTIONS = full IS view |
| E-commerce (checkout funnel, payment) | `AGENT-DEV-TYPESCRIPT-IA.md` | PIM = catalog; DEV-TS = e-commerce frontend |
| GDPR and AI Act compliance (AI enrichment) | `AGENT-JURIDIQUE-IA.md` | PIM = implementation; JURIDIQUE = compliance |

---

## Frameworks and standards used

- **Akeneo**: https://help.akeneo.com/
- **Pimcore**: https://pimcore.com/docs/
- **inriver**: https://www.inriver.com/
- **DAMA DMBOK2**: Data Management Body of Knowledge
- **CDMP**: Certified Data Management Professional
- **GS1 standards** (GTIN, EPC): https://www.gs1.org/
- **ISO/IEC 42001:2023**: for AI-augmented PIM
