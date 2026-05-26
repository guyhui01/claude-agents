# Skill — Gouvernance BI (Semantic Layer, RLS, Certification, Lineage)
> Certifications : PL-300 Microsoft · DP-600 Microsoft Fabric · Databricks Certified Data Analyst Associate

## Objectif
Mettre en place la gouvernance d'une plateforme BI : semantic layer partagé, row-level security, certification des datasets, lineage des données — pour garantir la confiance, la sécurité et la cohérence des analyses.

## Piliers de la gouvernance BI

```
PILIER                  OBJECTIF                            OUTILS
──────────────────────  ──────────────────────────────────  ────────────────────────────
Semantic Layer          1 définition partagée par métrique  Power BI Datasets certifiés
                        Élimine les divergences de chiffres  Looker (LookML), dbt metrics

Row Level Security      Chaque utilisateur voit ses données Power BI RLS / OLS
(RLS)                   sans rapport dédié par personne     Fabric row filter policies

Certification           Distinguer les données fiables      Power BI Endorsed datasets
                        des explorations non validées       (Promoted / Certified)

Lineage                 Tracer l'origine de chaque donnée  Power BI Impact Analysis
                        et l'impact des changements         dbt lineage, Fabric lineage

Glossaire / Catalogue   Définitions officielles             Microsoft Purview
                        des termes métier                   dbt docs, Power BI descriptions
```

## Semantic Layer — Stratégie Power BI

```
SANS SEMANTIC LAYER :
  Rapport A ── [mesure Revenue définie localement]
  Rapport B ── [mesure Revenue définie différemment]
  → 2 chiffres différents au CODIR 🔴

AVEC SEMANTIC LAYER (Dataset partagé certifié) :
  Dataset "Finance Officiel" (certifié ✅)
     ↓              ↓              ↓
  Rapport A      Rapport B      Rapport C
  (tous utilisent la même mesure Revenue)
  → 1 seul chiffre partout 🟢
```

## Row Level Security — Implémentation Power BI

```dax
// Modèle de sécurité hiérarchique
// Table : security_mapping (manager_email, subordinate_email)

// Rôle "Manager" — voit son équipe + ses propres données
[employee_email] IN
CALCULATETABLE(
    UNION(
        -- Ses propres données
        ROW("email", USERPRINCIPALNAME()),
        -- Les données de ses subordonnés directs et indirects
        SELECTCOLUMNS(
            FILTER(security_mapping, security_mapping[manager_email] = USERPRINCIPALNAME()),
            "email", security_mapping[subordinate_email]
        )
    )
)

// Rôle "Région" — simplifié
dim_geography[region_manager] = USERPRINCIPALNAME()
```

## Object Level Security (OLS) — Fabric / Power BI Premium

```json
// Masquer une colonne selon le rôle (ex: salaires visibles que par RH)
{
  "name": "Salaire",
  "objectLevelSecurity": {
    "table": "dim_employee",
    "column": "salary",
    "permission": "none"  // hidden pour tout le monde sauf rôle "RH"
  }
}
```

## Processus de certification des datasets

```
ÉTAPE 1 — PROMOTION (auto-service validé)
  • Dataset utilisé par > 10 personnes
  • Owner identifié et actif
  • Refresh planifié et opérationnel
  → Statut : "Promoted" ⭐

ÉTAPE 2 — CERTIFICATION (données officielles)
  Critères à valider :
  □ Définitions métriques documentées (catalogue)
  □ Tests de qualité passants (dbt tests ou validation manuelle)
  □ Validé par le Business Owner (DG, DAF, DRH…)
  □ SLA de refresh défini et respecté
  □ RLS configuré et testé
  □ Impact analysis effectuée (nb de rapports dépendants)
  → Statut : "Certified" ✅
  → Signalé aux utilisateurs comme source de vérité
```

## Data Lineage — Analyse d'impact

```
UTILISATION TYPIQUE :
"Je vais modifier la table `stg_orders` dans dbt — quels rapports seront impactés ?"

POWER BI SERVICE :
  Workspace → Dataset → Lineage view
  → Affiche visuellement : Source → Dataset → Rapports → Tableaux de bord

DBT :
  $ dbt docs generate && dbt docs serve
  → DAG interactif : sources → modèles → exposures (rapports BI)

MICROSOFT PURVIEW :
  → Lineage end-to-end : Azure Data Factory → Synapse → Power BI
```

## Livrables
- Architecture semantic layer (schéma datasets partagés)
- Configuration RLS + OLS (scripts + documentation)
- Processus de certification (critères + workflow d'approbation)
- Cartographie lineage (de la source au rapport final)
- Politique de gouvernance BI (document de référence)
- Formation administrateurs Power BI / Fabric (guide)

## Format de sortie
Précise : **plateforme** (Power BI Pro / Premium / Fabric, Tableau, Looker…), **taille** (nb utilisateurs, nb datasets, nb rapports), **problème principal** (chiffres contradictoires ? accès non maîtrisés ? pas de traçabilité ?), **contraintes** (compliance SOX, ISO 27001, RGPD…).
