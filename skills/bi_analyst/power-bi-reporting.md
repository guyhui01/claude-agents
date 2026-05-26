# Skill — Power BI (Desktop, Service, Fabric)
> Certifications : Microsoft Power BI Data Analyst Associate (PL-300) · Microsoft Fabric Analytics Engineer Associate (DP-600)

## Objectif
Concevoir et développer des rapports et dashboards Power BI de qualité production : modèle de données optimisé, DAX avancé, visuels efficaces, gouvernance RLS — déployés sur Power BI Service ou Microsoft Fabric.

## Architecture Power BI — Modes de connexion

```
MODE              DESCRIPTION                     AVANTAGES              LIMITES
────────────────  ─────────────────────────────── ─────────────────────  ────────────────────────────
Import            Données copiées en mémoire       Rapide, offline        Refresh nécessaire, 1 Go max
                  (xVelocity columnar engine)      Toutes les DAX         Pas de temps réel

DirectQuery       Requêtes temps réel à la source  Données fraîches       Lent si source lente, DAX limité
                  Aucune copie des données         Pas de limite taille   Transformations limitées

Composite         Mix Import + DirectQuery         Flexibilité max        Complexe à optimiser
Model             par table

Streaming         Données en temps réel (push)     Latence < 1s           Pas de DAX, visuels limités
Dataset           Power Automate / API Push        Tableaux de bord live  Pas d'historique > 1h
```

## DAX — Mesures essentielles

```dax
// Mesures de base
Total Revenue = SUM(fact_orders[net_revenue])

Revenue YTD =
CALCULATE(
    [Total Revenue],
    DATESYTD(dim_date[full_date])
)

Revenue LY =
CALCULATE(
    [Total Revenue],
    SAMEPERIODLASTYEAR(dim_date[full_date])
)

YoY Growth % =
DIVIDE(
    [Total Revenue] - [Revenue LY],
    [Revenue LY],
    BLANK()  // Évite la division par zéro
)

// Running total
Running Total =
CALCULATE(
    [Total Revenue],
    FILTER(
        ALL(dim_date),
        dim_date[date_key] <= MAX(dim_date[date_key])
    )
)

// Rang
Product Rank =
RANKX(
    ALL(dim_product[product_name]),
    [Total Revenue],
    ,
    DESC,
    DENSE  // Pas de saut de rang en cas d'égalité
)

// Moving Average 3 mois
Revenue MA3 =
AVERAGEX(
    DATESINPERIOD(dim_date[full_date], LASTDATE(dim_date[full_date]), -3, MONTH),
    [Total Revenue]
)
```

## Row Level Security (RLS)

```dax
// Rôle "Région" — chaque manager ne voit que sa région
// Filtre sur dim_geography
[region_manager_email] = USERPRINCIPALNAME()

// Rôle "Hiérarchique" — manager voit ses équipes
// Filtre via table de relations hiérarchiques
dim_employee[email] IN
    CALCULATETABLE(
        VALUES(hierarchy[subordinate_email]),
        hierarchy[manager_email] = USERPRINCIPALNAME()
    )
```

## Structure de rapport Power BI — Best Practices

```
PAGE 1 — Executive Summary (1 page = 1 message clé)
  □ 3-5 KPI cards (avec comparaison période précédente)
  □ 1 graphique de tendance (évolution temporelle)
  □ 1 vue géographique (si pertinent)
  □ 1 tableau top 10 (produits, clients, marchés)

PAGE 2 — Analyse Détaillée
  □ Filtres contextuels (slicers : période, région, segment)
  □ Drill-through vers détail
  □ Graphiques comparatifs (catégories, mix)

PAGE 3 — Données Brutes (export)
  □ Table complète avec tous les champs
  □ Export Excel activé

CONVENTIONS :
  - Palette : 2-3 couleurs max (identité visuelle client)
  - Police : même famille sur tout le rapport
  - Tooltips personnalisés sur tous les visuels
  - Bookmark pour vues alternatives
  - Mobile layout pour les KPI cards
```

## Optimisation des performances

```
PROBLÈME COURANT          SOLUTION
───────────────────────   ──────────────────────────────────────────────
Rapport lent à charger    Réduire le nb de visuels par page (< 20)
                          Utiliser Aggregations pour les grandes tables
                          Désactiver Auto Date/Time (Options globales)

DAX lente                 Utiliser CALCULATE + filtres au lieu de FILTER
                          Éviter les itérateurs (SUMX) sur grandes tables
                          Créer des colonnes calculées plutôt que mesures
                          quand le résultat est statique

DirectQuery lent          Créer des index sur les colonnes filtrées
                          Utiliser des vues matérialisées côté source
                          Activer Query Reduction (pas de requête au survol)

Refresh long              Refresh incrémental (ne recharge que le delta)
                          Partition par date
```

## Livrables
- Fichier .pbix avec modèle + rapports
- Documentation des mesures DAX (catalogue)
- Configuration RLS (rôles + règles)
- Planification des refreshs (Power BI Service)
- Guide de lecture du dashboard (pour les utilisateurs)
- Tests de validation (comparaison source vs rapport)

## Format de sortie
Précise : **source de données** (SQL Server, Fabric, SharePoint, API…), **mode de connexion** (Import, DirectQuery, Composite), **audience** (CODIR, opérationnel, self-service), **KPIs prioritaires**, **contraintes** (RLS, mobile, export, refresh temps réel).
