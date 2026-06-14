# Skills — DAM & Digital Assets

> Folder attached to `AGENT-DAM-EXPERT.md`
> Frameworks: Bynder · Adobe AEM Assets · Cloudinary · Canto · Widen / Acquia · Brandfolder · Henry Stewart DAM Foundation · IPTC · ISO/IEC 42001:2023

---

## Skill index (12)

| # | Skill | When to invoke | Certification |
|---|---|---|---|
| 1 | [`taxonomie-assets.md`](taxonomie-assets.md) | Design taxonomy and metadata (EXIF/IPTC/XMP) | Henry Stewart DAM · IPTC · Bynder |
| 2 | [`workflow-validation-assets.md`](workflow-validation-assets.md) | Validation workflows and lifecycle (creation → archiving) | Bynder · AEM Assets · Canto |
| 3 | [`gestion-droits-licences.md`](gestion-droits-licences.md) | Manage usage rights and licenses (territories, channels, durations) | Henry Stewart DAM · Bynder · Widen |
| 4 | [`distribution-multicanal.md`](distribution-multicanal.md) | Distribute to CMS, social, print, email, e-commerce | Cloudinary · Bynder · AEM Assets |
| 5 | [`transformation-formats.md`](transformation-formats.md) | Transformations and renditions (conversion, resizing) | Cloudinary · AEM Assets · Adobe CC |
| 6 | [`integration-dam-cms.md`](integration-dam-cms.md) | Integrate the DAM with the CMS (AEM, Drupal, Contentful) | AEM Assets · Cloudinary · Widen / Acquia |
| 7 | [`brand-portal.md`](brand-portal.md) | Deploy a brand portal (guidelines, press kit) | Bynder · Brandfolder · AEM Assets |
| 8 | [`gouvernance-dam.md`](gouvernance-dam.md) | DAM governance (policies, roles, audit, compliance) | Henry Stewart DAM · ISO/IEC 42001 · CDMP |
| 9 | [`migration-dam.md`](migration-dam.md) | DAM migration (inventory, taxonomy mapping, ETL, dedup) | Henry Stewart DAM · Bynder · Widen |
| 10 | [`dam-augmente-ia.md`](dam-augmente-ia.md) | AI-augmented DAM (auto-tagging, recognition, smart crop) | Claude Code in Action · Cloudinary · ISO/IEC 42001 |
| 11 | [`analytics-assets.md`](analytics-assets.md) | Asset analytics (usage, downloads, media ROI) | Bynder · Widen · Henry Stewart DAM |
| 12 | [`naming-convention.md`](naming-convention.md) | File and folder naming convention | Henry Stewart DAM · IPTC · Bynder |

---

## Picking the right skill — Decision tree

```
You want to ...

  ... START A DAM PROJECT?
    → taxonomie-assets.md (taxonomy BEFORE workflows — irreversible at scale)
    → naming-convention.md (convention from day 1)
    → gouvernance-dam.md (roles, policies)

  ... MANAGE THE ASSET LIFECYCLE?
    → workflow-validation-assets.md (creation → archiving)
    → gestion-droits-licences.md (territories, durations, channels)

  ... DISTRIBUTE THE ASSETS?
    → distribution-multicanal.md (CMS, social, print)
    → transformation-formats.md (per-channel renditions)
    → integration-dam-cms.md (CMS connection)
    → brand-portal.md (agency/partner access)

  ... MIGRATE AN EXISTING DAM?
    → migration-dam.md (inventory + mapping + ETL)

  ... INDUSTRIALIZE WITH AI?
    → dam-augmente-ia.md (auto-tagging, semantic search, smart crop)

  ... MEASURE USAGE?
    → analytics-assets.md (downloads, media ROI)
```

---

## Boundaries with the other agents

| Adjacent topic | Agent involved | Boundary |
|---|---|---|
| Textual product data management | `AGENT-PIM-EXPERT.md` | DAM = visual assets; PIM = product data |
| Editorial publishing and templates | `AGENT-CMS-DIGITAL.md` | DAM = library; CMS = publishing |
| Media component frontend development | `AGENT-DEV-TYPESCRIPT-IA.md` | DAM = storage + API; DEV-TS = frontend components |
| Cloud storage infrastructure architecture | `AGENT-DEVOPS-CLOUD.md` | DAM = application; DEVOPS = infra (S3, CDN) |
| GDPR compliance and image rights | `AGENT-JURIDIQUE-IA.md` | DAM = rights implementation; JURIDIQUE = legal obligations |

---

## Frameworks and standards used

- **Henry Stewart DAM Foundation**: DAM market reference
- **IPTC Photo Metadata Standard**: https://www.iptc.org/standards/photo-metadata/
- **EXIF / XMP**: metadata standards
- **Adobe AEM Assets**: https://experienceleague.adobe.com/docs/experience-manager-65/assets/
- **Cloudinary**: https://cloudinary.com/documentation
- **Bynder**: https://www.bynder.com/
- **ISO/IEC 42001:2023**: for AI-augmented DAM
