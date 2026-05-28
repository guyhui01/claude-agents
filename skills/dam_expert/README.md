# Skills — DAM & Assets Digitaux

> Dossier rattaché à `AGENT-DAM-EXPERT.md`
> Référentiels : Bynder · Adobe AEM Assets · Cloudinary · Canto · Widen / Acquia · Brandfolder · Henry Stewart DAM Foundation · IPTC · ISO/IEC 42001:2023

---

## Index des skills (12)

| # | Skill | Quand l'invoquer | Certification |
|---|---|---|---|
| 1 | [`taxonomie-assets.md`](taxonomie-assets.md) | Concevoir taxonomie et métadonnées (EXIF/IPTC/XMP) | Henry Stewart DAM · IPTC · Bynder |
| 2 | [`workflow-validation-assets.md`](workflow-validation-assets.md) | Workflows de validation et cycle de vie (création → archivage) | Bynder · AEM Assets · Canto |
| 3 | [`gestion-droits-licences.md`](gestion-droits-licences.md) | Gérer droits d'usage et licences (territoires, canaux, durées) | Henry Stewart DAM · Bynder · Widen |
| 4 | [`distribution-multicanal.md`](distribution-multicanal.md) | Distribuer sur CMS, social, print, e-mail, e-commerce | Cloudinary · Bynder · AEM Assets |
| 5 | [`transformation-formats.md`](transformation-formats.md) | Transformations et renditions (conversion, redimensionnement) | Cloudinary · AEM Assets · Adobe CC |
| 6 | [`integration-dam-cms.md`](integration-dam-cms.md) | Intégrer le DAM au CMS (AEM, Drupal, Contentful) | AEM Assets · Cloudinary · Widen / Acquia |
| 7 | [`brand-portal.md`](brand-portal.md) | Déployer un brand portal (guidelines, kit presse) | Bynder · Brandfolder · AEM Assets |
| 8 | [`gouvernance-dam.md`](gouvernance-dam.md) | Gouvernance DAM (politiques, rôles, audit, conformité) | Henry Stewart DAM · ISO/IEC 42001 · CDMP |
| 9 | [`migration-dam.md`](migration-dam.md) | Migration DAM (inventaire, mapping taxonomie, ETL, dédup) | Henry Stewart DAM · Bynder · Widen |
| 10 | [`dam-augmente-ia.md`](dam-augmente-ia.md) | DAM augmenté IA (auto-tagging, reconnaissance, smart crop) | Claude Code in Action · Cloudinary · ISO/IEC 42001 |
| 11 | [`analytics-assets.md`](analytics-assets.md) | Analytics assets (usage, téléchargements, ROI médias) | Bynder · Widen · Henry Stewart DAM |
| 12 | [`naming-convention.md`](naming-convention.md) | Convention de nommage des fichiers et dossiers | Henry Stewart DAM · IPTC · Bynder |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... DÉMARRER UN PROJET DAM ?
    → taxonomie-assets.md (taxonomie AVANT workflows — irréversible à l'échelle)
    → naming-convention.md (convention dès J1)
    → gouvernance-dam.md (rôles, politiques)

  ... GÉRER LE CYCLE DE VIE DES ASSETS ?
    → workflow-validation-assets.md (création → archivage)
    → gestion-droits-licences.md (territoires, durées, canaux)

  ... DISTRIBUER LES ASSETS ?
    → distribution-multicanal.md (CMS, social, print)
    → transformation-formats.md (renditions par canal)
    → integration-dam-cms.md (connexion CMS)
    → brand-portal.md (accès agences/partenaires)

  ... MIGRER UN DAM EXISTANT ?
    → migration-dam.md (inventaire + mapping + ETL)

  ... INDUSTRIALISER AVEC L'IA ?
    → dam-augmente-ia.md (auto-tagging, recherche sémantique, smart crop)

  ... MESURER L'USAGE ?
    → analytics-assets.md (téléchargements, ROI médias)
```

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Gestion des données produit textuelles | `AGENT-PIM-EXPERT.md` | DAM = assets visuels ; PIM = données produit |
| Publication éditoriale et templates | `AGENT-CMS-DIGITAL.md` | DAM = bibliothèque ; CMS = publication |
| Développement frontend des composants média | `AGENT-DEV-TYPESCRIPT-IA.md` | DAM = stockage + API ; DEV-TS = composants frontend |
| Architecture infrastructure cloud stockage | `AGENT-DEVOPS-CLOUD.md` | DAM = application ; DEVOPS = infra (S3, CDN) |
| Conformité RGPD et droits à l'image | `AGENT-JURIDIQUE-IA.md` | DAM = implémentation droits ; JURIDIQUE = obligations légales |

---

## Référentiels et standards utilisés

- **Henry Stewart DAM Foundation** : référence du marché DAM
- **IPTC Photo Metadata Standard** : https://www.iptc.org/standards/photo-metadata/
- **EXIF / XMP** : standards de métadonnées
- **Adobe AEM Assets** : https://experienceleague.adobe.com/docs/experience-manager-65/assets/
- **Cloudinary** : https://cloudinary.com/documentation
- **Bynder** : https://www.bynder.com/
- **ISO/IEC 42001:2023** : pour DAM augmenté IA
