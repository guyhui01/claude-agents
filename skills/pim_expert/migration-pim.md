# Skill — Migration PIM (Audit, Mapping, ETL, Recette)
> Certifications : Akeneo Certified Developer · Pimcore Certified Developer · DAMA DMBOK2

## Objectif
Piloter une migration de catalogue produit vers un nouveau PIM : audit du legacy, mapping des données, développement des scripts ETL, recette fonctionnelle et basculement — en garantissant la continuité des opérations et l'intégrité du catalogue.

## Plan de migration PIM en 6 phases

```
PHASE 1 — AUDIT LEGACY (J-90 à J-75)
  □ Inventaire exhaustif : familles, attributs, catégories, produits, locales, canaux
  □ Évaluation qualité données source (taux de complétude, doublons, incohérences)
  □ Cartographie des intégrations (ERP, DAM, e-com, marketplaces, print)
  □ Identification des customisations métier (règles, workflows, scripts)
  □ Estimation des volumes (nb SKUs, variantes, assets liés, locales)

PHASE 2 — CONCEPTION CIBLE (J-75 à J-45)
  □ Modélisation du catalogue cible (nouvelles familles, attributs, arborescence)
  □ Mapping source → cible (tableau de correspondance complet)
  □ Règles de transformation (normalisation, conversion, enrichissement)
  □ Stratégie de migration (big bang vs phased par famille ou canal)
  □ Plan de basculement (cut-over, rollback, double-run si nécessaire)

PHASE 3 — DÉVELOPPEMENT ETL (J-45 à J-15)
  □ Scripts d'extraction (export PIM legacy : CSV, API, dump BDD)
  □ Scripts de transformation (normalisation, mapping, enrichissement)
  □ Scripts de chargement (import API nouveau PIM)
  □ Gestion des assets DAM (réassociation ou migration si nécessaire)
  □ Tests sur données pilotes (10% du catalogue)

PHASE 4 — RECETTE (J-15 à J-5)
  □ Migration complète en environnement de staging
  □ Validation exhaustive (completeness scores, règles qualité, workflows)
  □ UAT équipes métier (éditeurs, chefs de produit, marketing)
  □ Tests d'intégration (ERP, DAM, e-com, canaux syndication)
  □ Validation de performance (temps d'import, API response times)

PHASE 5 — BASCULEMENT (J0)
  □ Gel du PIM legacy (lecture seule)
  □ Migration delta (données modifiées pendant la phase de recette)
  □ Activation nouveau PIM (coupure des flux vers l'ancien)
  □ Smoke tests critiques (création produit, publication, API)
  □ Communication équipes (go-live confirmé)

PHASE 6 — POST-MIGRATION (J+7 à J+30)
  □ Surveillance anomalies (flux ERP, syndication, qualité)
  □ Correction des données résiduelles
  □ Formation équipes éditoriales sur nouveau PIM
  □ Décommissionnement progressif PIM legacy
  □ Bilan de migration (métriques, leçons apprises)
```

## Tableau de mapping attributs — Template

```
ATTRIBUT SOURCE         TYPE SRC    ATTRIBUT CIBLE          TYPE CIBLE  TRANSFORMATION
──────────────────────  ──────────  ──────────────────────  ──────────  ──────────────────────────
product_ref             VARCHAR     sku                     Text        Uppercase · trim
product_name_fr         TEXT        nom_produit [fr_FR]     Text scopé  Titre capitalisation
product_desc_fr         LONGTEXT    description_longue[fr]  RichText    HTML → RichText JSON
product_weight          DECIMAL     poids                   Metric      valeur + "KILOGRAM"
product_ean             VARCHAR(13) ean                     Text        Valider chiffre contrôle
product_family_code     VARCHAR     famille_pim             Family      Mapping table joint
product_image_url       URL         image_principale        Asset       Réupload DAM + association
product_status          TINYINT     statut                  Select      0→archived, 1→active
```

## Livrables
- Rapport d'audit du catalogue legacy (inventaire, qualité, risques)
- Mapping complet source → cible (dictionnaire de données)
- Scripts ETL (extraction + transformation + chargement)
- Plan de test et cahier de recette UAT
- Plan de basculement et procédure de rollback
- Bilan de migration post go-live

## Format de sortie
Précise : **PIM source** (nom, version), **PIM cible**, **volume** (SKUs, variantes, locales), **intégrations à reconnecter** (ERP, DAM, e-com), **délai disponible** pour la migration, **contrainte de continuité** (peut-on geler la production ?).

## Anti-patterns
- ❌ **Big bang sans double-run ni rollback** : blocage total si le basculement échoue → procédure de rollback testée
- ❌ **Migration sans gel + delta** : les fiches modifiées pendant la recette sont perdues → gel lecture seule + delta J0
- ❌ **Migrer sans audit qualité du legacy** : on importe la dette (doublons, incohérences) → assainir en phase 1
- ❌ **Réassociation des assets DAM oubliée** : images cassées en cible → migrer/réassocier les liens DAM
- ❌ **Pas de validation des completeness scores post-import** : fiches dégradées publiées → recette sur scores + UAT
- ❌ **EAN migré sans revalidation** du chiffre de contrôle → identifiants corrompus propagés

## Sources
- **Akeneo REST API** (`/api/rest/v1`) — import/chargement cible — api.akeneo.com
- **DAMA-DMBOK 2** (2017) — gouvernance et lineage de la migration — dama.org
- **GS1 General Specifications v24.0** (2024) — revalidation EAN/GTIN — gs1.org

## Voir aussi
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — conception du catalogue cible
- [`integration-erp-pim.md`](integration-erp-pim.md) — reconnexion des flux ERP
- [`onboarding-donnees-produit.md`](onboarding-donnees-produit.md) — normalisation/contrôle qualité ETL
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — qualité et sources de vérité
- [`../dam_expert/migration-dam.md`](../dam_expert/migration-dam.md) — migration coordonnée des assets
