# Skill — Tableau Desktop & Cloud (Dashboards, Prep, Server)
> Certifications : Tableau Certified Data Analyst (Salesforce 2024)

## Objectif
Concevoir et développer des visualisations et dashboards Tableau : connexions aux données, calculs, LOD expressions, actions interactives — pour des analyses exploratoires et des reportings opérationnels.

## Connexions Tableau — Types principaux

```
TYPE              DESCRIPTION                       QUAND L'UTILISER
────────────────  ────────────────────────────────  ──────────────────────────────────
Live Connection   Requêtes en temps réel            Données très fraîches, entrepôt rapide
                  Aucune copie locale               (Snowflake, Databricks, BigQuery)

Extract (.hyper)  Copie locale compressée           Source lente, analyse déconnectée
                  Très rapide en requête            Scheduled refresh possible

Published DS      Dataset partagé sur Tableau Server Gouvernance, réutilisation par équipe
                  Source de vérité centralisée      1 changement = tout le monde à jour
```

## Calculated Fields — Expressions types

```
// Basic calculation
[Gross Revenue] - [Discount] → Net Revenue

// IF / CASE
IF [Churn Days] > 90 THEN "Churned"
ELSEIF [Churn Days] > 60 THEN "At Risk"
ELSE "Active"
END

// Date
DATEDIFF('month', [Order Date], TODAY())   → Ancienneté en mois
DATETRUNC('month', [Order Date])           → Tronquer à la mois

// String
LEFT([Email], FIND([Email], '@') - 1)      → Extraire avant @
CONTAINS(UPPER([Product Name]), 'IA')       → Filtre insensible à la casse

// NULL handling
IFNULL([Revenue], 0)
ZN([Revenue])   // ZN = Zero if Null (raccourci)
```

## LOD Expressions (Level of Detail)

```
FIXED   — Calcul à un niveau de granularité fixe (ignore les filtres contexte)
          { FIXED [Customer ID] : MAX([Order Date]) }  → Dernier achat par client

INCLUDE — Calcul à un niveau plus fin que la vue
          { INCLUDE [Product ID] : AVG([Revenue]) }  → Moyenne par produit dans une vue client

EXCLUDE — Calcul à un niveau plus agrégé que la vue
          { EXCLUDE [Month] : SUM([Revenue]) }  → Total annuel dans une vue mensuelle

// Cas d'usage classique : % du total
SUM([Revenue]) / { FIXED : SUM([Revenue]) }  → Part de chaque produit dans le total global

// Clients avec > 1 commande (segment)
{ FIXED [Customer ID] : COUNT([Order ID]) } > 1  → True/False filtrable
```

## Structure de dashboard efficace

```
TABLEAU DE BORD OPÉRATIONNEL (1920×1080)
┌───────────────────────────────────────────────────────────────────────┐
│  TITRE + Filtres globaux (Période, Région, Segment)        [Logo]     │
├────────────────────┬──────────────────────────────────────────────────┤
│  KPI CARDS (haut)  │  CA Net   │  # Commandes │  Panier Moyen │  NPS  │
├────────────────────┴──────────────────────────────────────────────────┤
│                                                                         │
│  GRAPHIQUE PRINCIPAL (60% largeur)    │  GRAPHIQUE SECONDAIRE (40%)   │
│  Évolution CA sur 12 mois             │  Top 10 produits (barres H)   │
│  (line chart avec objectif)           │                                │
│                                                                         │
├───────────────────────────────────────┴───────────────────────────────┤
│  TABLEAU DÉTAIL (drill-through disponible)                             │
│  Commandes récentes avec statut + filtre par pays                      │
└───────────────────────────────────────────────────────────────────────┘
```

## Actions Tableau — Interactivité

```
TYPE D'ACTION        CONFIGURATION                      EFFET
───────────────────  ─────────────────────────────────  ──────────────────────────────────
Filter Action        Cliquer sur une région              Filtre tous les autres graphiques
                     Source: Carte → Target: Tous         de la page sur cette région

Highlight Action     Survol d'une ligne du tableau       Met en évidence la même valeur
                     Source: Table → Target: Graphique    dans le graphique adjacent

URL Action           Cliquer sur un ID commande          Ouvre le CRM sur la fiche client
                     Source: Table → URL: CRM/$[ID]

Set Action           Sélectionner des points             Compare sélection vs reste
                     Source: Scatter → Target: Set        (IN/OUT analysis)

Parameter Action     Cliquer pour changer le paramètre   Basculer entre "Revenu" et "Quantité"
```

## Tableau Prep — Pipeline de données

```
FLUX TYPE :
Source CSV/DB → Nettoyage → Jointures → Agrégations → Sortie .hyper / Tableau Server

ÉTAPES COURANTES :
  □ Filter : supprimer les lignes nulles sur la clé primaire
  □ Clean : standardiser les casing (Title Case, UPPER, lower)
  □ Pivot : transformer colonnes de dates en lignes (format long)
  □ Join : enrichir avec une table de dimension
  □ Aggregate : pré-agréger si la source est trop volumineuse
  □ Union : consolider plusieurs fichiers CSV mensuels
```

## Livrables
- Fichier .twbx (workbook packagé avec extrait)
- Dashboards publiés sur Tableau Server / Cloud
- Tableau Prep Flow (.tfl) documenté
- Guide d'utilisation (filtres, drill-through, exports)
- Tests de validation (comparaison source vs dashboard)

## Format de sortie
Précise : **source de données** (SQL, Snowflake, Google Sheets, CSV…), **type de viz** (dashboard opérationnel, analyse exploratoire, embedded analytics), **audience** (analyste vs manager vs client final), **contraintes** (temps réel vs extract, export PDF, mobile, embedding).
