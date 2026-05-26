# Skill — Localisation et Internationalisation Produit (i18n)
> Certifications : Akeneo Certified Product Manager · Contentserv PIM Specialist · inriver Certified Professional

## Objectif
Gérer la localisation des fiches produit : traduction des contenus, adaptation locale (réglementations, unités, devises, formatage), workflow de traduction et gouvernance multilingue — pour une diffusion internationale cohérente et conforme.

## Matrice localisation — Dimensions à gérer

```
DIMENSION            EXEMPLE FR → DE                    AUTOMATISABLE    VALIDATION REQUISE
───────────────────  ─────────────────────────────────  ───────────────  ────────────────────
Textes marketing     Description produit, bullet points  Oui (LLM + TM)  Oui (relecture native)
Données techniques   Poids, dimensions (unités SI)       Oui (conversion) Non (si SI standards)
Prix                 EUR → EUR (même zone) / CHF / GBP   Oui (taux)       Oui (pricing local)
Réglementation       ROHS, CE, FCC, CCC, PSE              Non             Oui (service juridique)
Packaging textes     Mentions légales, allergènes         Non             Oui (service juridique)
Médias               Photos packaging localisé            Non             Oui (validation brand)
Unités de mesure     oz → g, inches → cm (US → EU)        Oui             Oui (arrondi à valider)
Date de lancement    Calendrier promotions local          Non             Oui (marketing local)
```

## Workflow de traduction (intégration TMS)

```
ÉTAPE               ACTEUR                    OUTIL              CRITÈRE DE PASSAGE
──────────────────  ────────────────────────  ─────────────────  ─────────────────────────────
1. Extraction       Système PIM               PIM → TMS Export   Textes source validés (fr_FR)
2. Pre-traduction   Machine Translation (MT)  DeepL / Systran    Tout le contenu pré-traduit
3. Post-édition     Traducteur spécialisé     TMS (Phrase, memoQ) BLEU score ≥ 0.7
4. Révision         Relecteur natif local     TMS                 0 erreur terminologie
5. Validation brand Marketing local           Validation UI       Brand guidelines respectées
6. Import PIM       Système PIM               TMS → PIM Import    Locale complète ≥ 100%
```

## Bonnes pratiques d'internationalisation

```
RÈGLE                           RATIONALE                          EXEMPLE
──────────────────────────────  ─────────────────────────────────  ────────────────────────────
Séparer scopé et non scopé      Éviter la duplication inutile      Poids = non scopé, desc = scopé
Source unique pour la traduction Pas de traduction circulaire       fr_FR → DE, EN, IT (jamais DE → EN)
Mémoire de traduction (TM)      Cohérence et économies             Glossaire termes produit validés
Gel des textes source           Éviter retours traducteurs          Statut "Translation Lock" avant export
Localisation ≠ Traduction       Adapter le fond, pas seulement la forme "Slim Fit" → "Coupe ajustée" (FR)
Formats locaux                  Éviter les erreurs d'affichage     1.234,56 € (FR) vs £1,234.56 (UK)
```

## Configuration locales Akeneo — Template

```yaml
locales:
  - fr_FR:   label: "Français (France)"     enabled: true    fallback: null
  - en_GB:   label: "English (UK)"          enabled: true    fallback: en_US
  - en_US:   label: "English (US)"          enabled: true    fallback: null
  - de_DE:   label: "Deutsch"               enabled: true    fallback: null
  - es_ES:   label: "Español (España)"      enabled: true    fallback: null
  - it_IT:   label: "Italiano"              enabled: true    fallback: null
  - nl_NL:   label: "Nederlands"            enabled: true    fallback: null
  - pt_BR:   label: "Português (Brasil)"    enabled: false   fallback: null

# Attributs scopés (à localiser)
localized_attributes:
  - nom_produit
  - description_courte
  - description_longue
  - bullet_points
  - mentions_legales

# Attributs non scopés (une seule valeur)
non_localized_attributes:
  - sku
  - ean
  - poids
  - dimensions_l
  - image_principale
```

## Livrables
- Matrice localisation (locales cibles × attributs × responsables)
- Workflow de traduction (diagramme + intégration TMS)
- Glossaire terminologique par marché (termes validés)
- Configuration des locales PIM et règles de fallback
- Guide des adaptations locales (réglementations, formats, unités)
- Rapport de couverture de traduction par locale et canal

## Format de sortie
Précise : **marchés cibles** (pays, langues), **volume de fiches** à localiser, **TMS existant** (Phrase, memoQ, Crowdin…), **PIM cible**, **attributs à localiser** vs **non scopés**, **contraintes réglementaires** locales identifiées.
