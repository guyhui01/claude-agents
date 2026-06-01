# Skill — Syndication Multicanal du Catalogue Produit
> Certifications : Akeneo Certified Developer · Salsify Certified · inriver Certified Professional

## Objectif
Syndiquer le catalogue produit sur l'ensemble des canaux de distribution : e-commerce, marketplaces, print, B2B portals et partenaires — en adaptant les données et formats aux exigences spécifiques de chaque canal.

## Cartographie des canaux et leurs exigences

```
CANAL               FORMAT         CONTRAINTES SPÉCIFIQUES              FRÉQUENCE SYNC
──────────────────  ─────────────  ───────────────────────────────────  ──────────────
Site e-com propre   API REST/JSON  Stock temps réel · Prix promotions   Temps réel / Push
Amazon Vendor       SPAPI + ASIN   Contraintes titres 80 car. · GTIN   Quotidien
Amazon Seller       SP-API         Catégories Amazon · Bullet points    Quotidien
FNAC Marketplace    API FNAC       EAN obligatoire · Catégories FNAC    Quotidien
Cdiscount           API Cdiscount  EAN + GTIN · Fiches techniques       Quotidien
Google Shopping     Google Feed    ID unique · GTIN · Prix TTC          Quotidien / Flux
Catalogue print     InDesign XML   Résolution images 300 DPI · CMJN     À la demande
B2B Portal          API custom     Prix négociés · Ref client           Temps réel
EDI Retailers       EANCOM/EDIFACT GS1 standard · GTIN14               Hebdomadaire
```

## Architecture de syndication (Akeneo Channel)

```yaml
# Configuration channel Akeneo — exemple e-commerce
channels:
  ecommerce_fr:
    locales: [fr_FR]
    currencies: [EUR]
    completeness: 100%
    attribute_filters:
      - nom_produit
      - description_courte
      - description_longue
      - prix_public
      - image_principale
      - images_secondaires
      - ean
      - poids
      - dimensions_l

  amazon_fr:
    locales: [fr_FR]
    currencies: [EUR]
    completeness: 100%
    attribute_filters:
      - nom_produit          # max 80 caractères
      - bullet_points        # 5 bullets Amazon
      - description_longue   # max 2000 caractères
      - prix_public
      - ean
      - asin                 # Identifiant Amazon
      - brand
      - categorie_amazon
```

## Flux de syndication — Séquence

```
PIM
 │
 ├─→ Transformation (règles canal)
 │     ├── Filtrage attributs (whitelist par canal)
 │     ├── Formatage valeurs (troncature, encodage)
 │     ├── Enrichissement canal (bullet points Amazon…)
 │     └── Association assets DAM (URL renditions)
 │
 ├─→ Validation pre-push
 │     ├── Vérification complétude 100%
 │     ├── Contrôle format EAN/GTIN
 │     └── Validation longueurs champs
 │
 └─→ Publication
       ├── API push (e-com, marketplaces)
       ├── Export fichier (print, EDI)
       └── Webhook (notification systèmes tiers)
```

## Mapping Amazon Bullet Points — Template

```
FORMAT AMAZON BULLET POINTS (5 × max 255 char.)
────────────────────────────────────────────────
• [Bénéfice principal] — [Caractéristique clé] (ex. Performance maximale — Processeur 5nm dernière génération)
• [Avantage] — [Preuve] (ex. Autonomie 48h — Certifié par laboratoire indépendant)
• [Compatibilité] (ex. Compatible iOS 16+, Android 13+, Windows 11)
• [Certification / Label] (ex. Certifié CE, RoHS conforme, garantie 2 ans EU)
• [Contenu boîte] (ex. Inclus : câble USB-C, chargeur 65W, housse de protection)
```

## Livrables
- Cartographie des canaux (matrice canal × attributs × formats × fréquence)
- Configuration des channels PIM (locales, devises, filtres attributs)
- Règles de transformation par canal (troncature, formatage, enrichissement)
- Scripts de connecteurs (API REST, EDI, Google Feed)
- Plan de mise en production (ordre de déploiement des canaux)
- Dashboard de monitoring des synchronisations (erreurs, volumes, latence)

## Format de sortie
Précise : **canaux cibles** (liste prioritaire), **PIM utilisé**, **nombre de références** à syndiquer, **fréquences attendues**, **systèmes tiers** à connecter (e-com, ERP, DAM), **contraintes légales** (prix TTC obligatoire, étiquetage réglementaire...).

## Anti-patterns
- ❌ **Pousser sans valider les contraintes du canal** (titre Amazon > 80 car., bullets > 255 car.) : rejet en masse → validation pre-push par canal
- ❌ **GTIN absent** sur marketplace : produit non listable (Amazon/Google l'exigent) → GTIN obligatoire au filtre canal
- ❌ **Syndiquer sous le seuil de complétude 100 %** du canal : fiches partielles publiées → blocage completeness
- ❌ **Push sans gestion d'erreur / retry** : désynchronisation silencieuse → file de retry + monitoring
- ❌ **Mêmes données pour tous les canaux** (pas d'adaptation) : non-conformité marketplace → règles de transformation par canal
- ❌ **Prix HT diffusé là où le TTC est obligatoire** (B2C UE) : non-conformité → contrôle légal par canal

## Sources
- **GS1 General Specifications v24.0** (2024) — GTIN, **GTIN-14** (carton/EDI), GLN — gs1.org
- **Amazon SP-API** (Selling Partner API) — developer-docs.amazon.com · **Google Merchant Center** (flux Shopping, Google Product Category) — support.google.com/merchants
- **EANCOM / UN/EDIFACT** — messages EDI standardisés (UN/CEFACT) — unece.org/cefact
- **Schema.org Product** — balisage produit web/SEO — schema.org/Product

## Voir aussi
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — attributs et classification (GS1/ETIM) syndiqués
- [`enrichissement-produit.md`](enrichissement-produit.md) — complétude par canal préalable à la syndication
- [`kpis-catalogue.md`](kpis-catalogue.md) — suivi des synchronisations et de la couverture canal
- [`../dam_expert/distribution-multicanal.md`](../dam_expert/distribution-multicanal.md) — distribution des assets associés aux fiches
