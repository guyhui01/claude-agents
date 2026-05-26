# Skill — Migration CMS (Carve-out, Replatform, Rehost)
> Certifications : Acquia Certified Developer — Drupal 10 · Adobe AEM Sites Developer · TOGAF 10 Foundation

## Objectif
Planifier et exécuter une migration CMS : audit de l'existant, mapping de contenu, stratégie de migration (big bang vs phased), ETL éditorial, recette et basculement — en minimisant les risques de perte de données et d'indisponibilité.

## Stratégies de migration

```
STRATÉGIE       DESCRIPTION                          RISQUE    DURÉE     CAS D'USAGE
──────────────  ───────────────────────────────────  ────────  ────────  ──────────────────────────
Rehost          Même CMS, nouvelle infra             Faible    Court     Cloud lift & shift
                (on-prem → cloud)

Replatform      Même CMS, version majeure            Moyen     Moyen     Drupal 7→10, AEM 6.5→Cloud
                (upgrade avec refactoring)

Replatform+     Changement de CMS                    Élevé     Long      Drupal → Contentful, TYPO3→AEM
(Migration)     Conservation du contenu

Rebuild         Nouveau CMS + nouveau contenu         Très      Très long Rebranding total, fusion
                (contenu recréé/migré sélectivement) élevé               entités (carve-out)
```

## Plan de migration en 6 phases

```
PHASE 1 — AUDIT & INVENTAIRE (J-90 à J-60)
  □ Inventaire exhaustif : pages, assets, taxonomies, utilisateurs
  □ Analyse SEO : URLs canoniques, redirections existantes, backlinks
  □ Cartographie des intégrations (PIM, DAM, CRM, Analytics)
  □ Analyse de la dette technique (modules obsolètes, customisations)

PHASE 2 — CONCEPTION (J-60 à J-30)
  □ Mapping des content types Ancien CMS → Nouveau CMS
  □ Mapping des champs (transformations, valeurs par défaut)
  □ Stratégie redirections (301 map exhaustive)
  □ Architecture cible validée (modèles de données, intégrations)

PHASE 3 — DÉVELOPPEMENT ETL (J-30 à J-10)
  □ Scripts d'extraction (API, export CSV/XML, scraping)
  □ Scripts de transformation (normalisation, enrichissement)
  □ Scripts de chargement (import API nouveau CMS)
  □ Tests sur environnement de staging (échantillon 10%)

PHASE 4 — RECETTE (J-10 à J-3)
  □ Migration complète en staging
  □ UAT éditeurs (validation contenu clé)
  □ Tests SEO (redirections, métadonnées, sitemap)
  □ Tests de performance (LCP, CLS, TTI)
  □ Tests d'accessibilité (RGAA 4.1 / WCAG 2.2)

PHASE 5 — BASCULEMENT (J0)
  □ Migration finale en production (delta ou full)
  □ Vérification DNS / CDN
  □ Validation smoke tests critiques
  □ Activation monitoring et alertes

PHASE 6 — POST-MIGRATION (J+7 à J+30)
  □ Surveillance SEO (Search Console, taux d'erreur 404)
  □ Correction anomalies résiduelles
  □ Formation équipes éditoriales
  □ Documentation opérationnelle (runbook)
```

## Mapping de contenu — Template

```
CONTENT TYPE MAPPING
──────────────────────────────────────────────────────────────────────
Source (Ancien CMS)          Cible (Nouveau CMS)       Transformation
───────────────────────────  ─────────────────────────  ──────────────
node/article                 Entry[content_type=article] Aucune
field_body (text_long)       body (RichText)            HTML → Rich Text JSON
field_image (image)          heroImage (Asset)          Réupload + crop auto
field_tags (taxonomy_term)   tags (Array<Symbol>)       Extraction labels
field_author (entity_ref)    author (Entry reference)   UUID mapping
path alias (/blog/mon-titre) slug (mon-titre)           Extraction path final
```

## Script ETL Drupal → Contentful (exemple)

```python
import requests
import json

def migrate_article(drupal_node, contentful_space, cda_token):
    # Extraction Drupal JSON:API
    node_data = requests.get(
        f"https://mon-drupal.com/jsonapi/node/article/{drupal_node['id']}",
        params={"include": "field_image,field_author"}
    ).json()['data']

    # Transformation
    entry = {
        "fields": {
            "title":       {"fr-FR": node_data['attributes']['title']},
            "slug":        {"fr-FR": node_data['attributes']['path']['alias'].lstrip('/blog/')},
            "body":        {"fr-FR": html_to_rich_text(node_data['attributes']['body']['value'])},
            "publishedAt": {"fr-FR": node_data['attributes']['created']},
        }
    }

    # Chargement Contentful Management API
    response = requests.post(
        f"https://api.contentful.com/spaces/{contentful_space}/entries",
        headers={"Authorization": f"Bearer {cda_token}", "X-Contentful-Content-Type": "article"},
        json=entry
    )
    return response.json()
```

## Livrables
- Rapport d'audit de l'existant (inventaire, dette, SEO)
- Plan de migration détaillé (phases, jalons, responsables)
- Mapping de contenu (tableau source → cible)
- Scripts ETL (extraction + transformation + chargement)
- Plan de redirections 301 (fichier CSV complet)
- Rapport de recette (UAT + SEO + performance + accessibilité)
- Runbook post-migration

## Format de sortie
Précise : **CMS source** et **CMS cible**, **volume** (pages, assets, langues), **contraintes SEO** (conservation des URLs ?), **stratégie** (big bang vs phased), **délai** et **équipe disponible**.
