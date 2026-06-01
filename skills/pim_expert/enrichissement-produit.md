# Skill — Workflows d'Enrichissement Produit
> Certifications : Akeneo Certified Product Manager · inriver Certified Professional · Salsify Certified

## Objectif
Concevoir et piloter les workflows d'enrichissement des fiches produit : définition des étapes, des rôles contributeurs, des règles de qualité et des critères de passage — pour atteindre un taux de complétude cible et réduire le time-to-market des références.

## Cycle de vie d'une fiche produit

```
STATUT              DESCRIPTION                           ACTEUR              CRITÈRE DE PASSAGE
──────────────────  ────────────────────────────────────  ──────────────────  ─────────────────────────────
Draft               Fiche créée (données techniques ERP)  Système / Import    SKU + famille assignés
In Enrichment       Données marketing en cours de saisie  Équipe Contenu      Description courte ≥ 50 car.
In Review           En attente de validation              Manager Produit     Completeness ≥ 80%
Approved            Validée, prête pour publication       Chef de Produit     Completeness = 100% (canal cible)
Published           Active sur les canaux                 Publication auto    Date de lancement atteinte
Archived            Obsolète, retirée des ventes          Manager Produit     EOL confirmée
```

## Matrice des responsabilités (RACI)

```
TÂCHE D'ENRICHISSEMENT           | Contenu | Product | DAM  | Qualité | Système
─────────────────────────────────┼─────────┼─────────┼──────┼─────────┼────────
Création fiche (import ERP)      |    I    |    I    |  I   |    I    |   R
Saisie données techniques        |    R    |    A    |  I   |    C    |   I
Rédaction descriptions marketing |    R    |    C    |  I   |    I    |   I
Association assets (DAM → PIM)   |    R    |    I    |  A   |    I    |   I
Traduction (i18n)                |    R    |    I    |  I   |    C    |   I
Validation qualité               |    I    |    A    |  I   |    R    |   I
Publication canal e-commerce     |    I    |    A    |  I   |    I    |   R
Archivage produit                |    I    |    R    |  I   |    I    |   A
```

## Configuration des règles qualité (Akeneo)

```yaml
# Exemple de règles de complétude par canal
completeness_rules:
  channel: ecommerce
  locale: fr_FR
  required_attributes:
    - sku
    - nom_produit
    - description_courte
    - description_longue
    - image_principale
    - prix_public
    - poids
    - dimensions_l
  threshold_publication: 100%   # Bloque la publication si < 100%
  threshold_alert: 80%          # Alerte équipe si < 80%

  channel: print
  locale: fr_FR
  required_attributes:
    - sku
    - nom_produit
    - image_principale_hd
    - caracteristiques_techniques
  threshold_publication: 100%
```

## KPIs workflow d'enrichissement

```
INDICATEUR                     CIBLE         ALERTE         FORMULE
─────────────────────────────  ────────────  ─────────────  ─────────────────────────────────
Taux de complétude moyen       ≥ 90%         < 80%          Attributs remplis / Attributs requis
Time-to-market (création→pub)  ≤ 5 jours     > 10 jours     Date publication - Date création fiche
Taux de rejet validation       ≤ 5%          > 15%          Fiches rejetées / Fiches soumises
Backlog enrichissement         ≤ 50 fiches   > 200 fiches   Fiches en statut "In Enrichment" > 7j
Taux erreurs import            ≤ 1%          > 5%           Lignes en erreur / Lignes importées
```

## Livrables
- Diagramme de workflow enrichissement (BPMN avec statuts, transitions, acteurs)
- Matrice RACI des responsabilités d'enrichissement
- Configuration des règles de complétude par canal et locale
- SLA d'enrichissement (délais par type de produit)
- Guide éditeur (comment remplir chaque attribut, exemples, bonnes pratiques)
- Dashboard de suivi qualité (KPIs temps réel)

## Format de sortie
Précise : **PIM utilisé**, **nombre de références** à enrichir par semaine, **nombre de canaux** et **locales**, **équipe disponible** (nombre d'enrichisseurs, localisateurs), **contrainte de délai** (time-to-market cible).

## Anti-patterns
- ❌ **Publier sous le seuil de complétude** (< 100 % canal) : fiches incomplètes en ligne → blocage publication strict par canal
- ❌ **RACI confondant R et A** : aucun responsable clair de la validation → un seul A par tâche
- ❌ **Règles de complétude identiques pour tous les canaux** : le print et l'e-commerce n'ont pas les mêmes besoins → completeness scopée par canal/locale
- ❌ **Enrichissement sans SLA** : backlog ingérable → délai cible par type de produit
- ❌ **Descriptions dupliquées entre produits** : pénalité SEO et perception qualité → contenu unique (cf. `pim-augmente-ia.md`)
- ❌ **Workflow sans critère de passage objectif** : transitions au jugé → seuils mesurables (ex. completeness ≥ 80 % pour « In Review »)

## Sources
- **Akeneo PIM** (Serenity SaaS — Enterprise/Growth, releases mensuelles 2025) — concept de *completeness* par canal/locale — help.akeneo.com
- **BPMN 2.0.2** — OMG (2013) — modélisation des workflows d'enrichissement — omg.org/spec/BPMN
- **DAMA-DMBOK 2** (2017) — qualité et cycle de vie de la donnée produit — dama.org

## Voir aussi
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — structure d'attributs conditionnant la complétude
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — mesure de la qualité des fiches enrichies
- [`kpis-catalogue.md`](kpis-catalogue.md) — pilotage du time-to-market et de la complétude
- [`localisation-i18n.md`](localisation-i18n.md) — enrichissement multilingue
- [`pim-augmente-ia.md`](pim-augmente-ia.md) — accélération de l'enrichissement par IA
