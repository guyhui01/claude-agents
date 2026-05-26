# Skill — Modélisation du Catalogue Produit
> Certifications : Akeneo Certified Product Manager · Pimcore Certified Developer · DAMA DMBOK2

## Objectif
Concevoir le modèle de données du catalogue produit : arborescence des catégories, familles de produits, groupes d'attributs, gestion des variantes et des unités de mesure — en garantissant scalabilité, cohérence et maintenabilité à long terme.

## Structure du modèle de données PIM

```
CATALOGUE
├── Catégories (arborescence hiérarchique)
│   ├── Niveau 1 : Univers (ex. Électronique)
│   ├── Niveau 2 : Famille (ex. Smartphones)
│   └── Niveau 3 : Sous-famille (ex. Android 5G)
│
├── Familles de produits (structure d'attributs)
│   ├── Attributs communs (tous produits)
│   ├── Attributs spécifiques à la famille
│   └── Groupes d'attributs (affichage éditeur)
│
├── Produits
│   ├── Produit simple (1 SKU)
│   ├── Produit configurable (avec variantes)
│   └── Produit bundle (association de SKUs)
│
└── Variantes (axes de déclinaison)
    ├── Axe 1 : Couleur
    ├── Axe 2 : Taille
    └── Axe 3 : Capacité
```

## Types d'attributs et bonnes pratiques

```
TYPE             USAGE                          EXEMPLE                   PIÈGE À ÉVITER
───────────────  ─────────────────────────────  ────────────────────────  ───────────────────────────
Text             Libellé court non traduit      Code EAN, référence SKU   Pas de traduction nécessaire
TextArea         Description longue             Description marketing     Ne pas confondre avec RTE
RichText         Contenu mis en forme           Caractéristiques tech.    Complexité import/export
Number           Valeur numérique               Poids, prix, dimensions   Préciser les unités
Boolean          Oui/Non                        Produit certifié Bio ?    Ne pas l'utiliser pour l'état
Select           Liste fermée mono-valeur       Couleur principale        Ne pas dépasser 200 options
MultiSelect      Liste fermée multi-valeurs     Certifications produit    Explosion combinatoire
Date             Date ISO 8601                  Date de lancement         Timezone à normaliser
Asset            Lien vers DAM                  Photo packshot, vidéo     Pas de binaire dans le PIM
Metric           Valeur + unité                 500 ml, 2.5 kg            Toujours définir unité par défaut
```

## Template de modélisation — fiche famille

```
FAMILLE : [NOM]
──────────────────────────────────────────────────────────────────────
Axes de variantes : [Couleur] × [Taille]
Canaux de publication : [E-commerce] [Print] [B2B Portal]
Locales : [fr_FR] [en_GB] [de_DE]

GROUPE D'ATTRIBUTS : Identification
  □ sku                   Text        Obligatoire  Non scopé
  □ ean                   Text        Obligatoire  Non scopé
  □ nom_produit           Text        Obligatoire  Scopé (canal + locale)
  □ marque                Select      Obligatoire  Non scopé

GROUPE D'ATTRIBUTS : Description
  □ description_courte    TextArea    Optionnel    Scopé (locale)
  □ description_longue    RichText    Optionnel    Scopé (locale)
  □ points_cles           MultiSelect Optionnel    Scopé (locale)

GROUPE D'ATTRIBUTS : Caractéristiques techniques
  □ poids                 Metric      Obligatoire  Non scopé
  □ dimensions_l          Metric      Obligatoire  Non scopé
  □ materiau              MultiSelect Optionnel    Non scopé
  □ certifications        MultiSelect Optionnel    Non scopé

GROUPE D'ATTRIBUTS : Médias
  □ image_principale      Asset       Obligatoire  Scopé (canal)
  □ images_secondaires    Asset[]     Optionnel    Scopé (canal)
  □ video_produit         Asset       Optionnel    Scopé (canal)
```

## Livrables
- Dictionnaire de données produit (tous attributs, types, contraintes, cardinalités)
- Arborescence catégories validée (jusqu'à N+3 niveaux)
- Matrice familles × attributs × canaux × locales
- Règles de nommage et conventions (codes familles, groupes)
- Documentation de la modélisation (pour équipes data et éditeurs)

## Format de sortie
Précise : **secteur** (retail, industrie, B2B…), **nombre de références** estimé, **canaux de distribution** cibles, **locales** et **PIM cible** (Akeneo, Pimcore, Salsify, inriver…).
