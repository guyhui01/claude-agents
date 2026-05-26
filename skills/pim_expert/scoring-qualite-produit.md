# Skill — Scoring Qualité du Catalogue Produit
> Certifications : Akeneo Certified Product Manager · CDMP · inriver Certified Professional

## Objectif
Concevoir et piloter un système de scoring qualité du catalogue : définition des règles métier, calcul du completeness score par canal, dashboards de suivi et mécanismes d'alerte — pour piloter l'enrichissement par la donnée et garantir la publication de fiches complètes et conformes.

## Dimensions du score qualité produit

```
DIMENSION          DESCRIPTION                               POIDS    INDICATEURS
─────────────────  ───────────────────────────────────────   ───────  ──────────────────────────────
Complétude         Attributs obligatoires remplis            40%      % attributs requis / total
Exactitude         Cohérence données vs source ERP           25%      % écarts détectés
Richesse           Attributs optionnels enrichis             15%      % attributs optionnels / total
Médias             Assets associés (images, vidéos)          10%      Nb médias / nb attendus
Localisation       Traductions complètes par locale          10%      % locales complètes / locales cibles
─────────────────────────────────────────────────────────────────────────────────────────────────────
SCORE GLOBAL       Somme pondérée                            100%     ≥ 90 = Excellent · 75-89 = Bon
```

## Règles métier de scoring (exemples Akeneo)

```yaml
quality_rules:
  # Règle 1 — Titre trop court
  - rule: title_too_short
    condition: length(nom_produit) < 20
    penalty: -15
    message: "Nom produit trop court (< 20 caractères)"

  # Règle 2 — Description sans richesse
  - rule: description_not_rich
    condition: length(description_longue) < 150
    penalty: -10
    message: "Description longue insuffisante (< 150 caractères)"

  # Règle 3 — EAN invalide
  - rule: invalid_ean
    condition: not valid_ean13(ean)
    penalty: -20
    message: "EAN invalide (chiffre de contrôle incorrect)"

  # Règle 4 — Pas d'image principale
  - rule: missing_main_image
    condition: image_principale IS NULL
    penalty: -30
    message: "Image principale manquante — publication bloquée"

  # Règle 5 — Prix incohérent
  - rule: negative_price
    condition: prix_public <= 0
    penalty: -25
    message: "Prix public nul ou négatif"
```

## Dashboard qualité — Structure recommandée

```
┌─────────────────────────────────────────────────────────────────────┐
│  SCORECARD CATALOGUE PRODUIT — Semaine 21 / 2026                    │
├──────────────────┬──────────────────┬──────────────────────────────┤
│ Score global     │ 87.3 / 100       │ ▲ +2.1 vs semaine précédente │
├──────────────────┼──────────────────┼──────────────────────────────┤
│ Complétude       │ 91%              │ Canal e-com : 96% / print 85%│
│ Exactitude       │ 98.5%            │ 12 écarts ERP détectés       │
│ Richesse         │ 78%              │ 340 fiches sans desc. longue  │
│ Médias           │ 82%              │ 210 fiches sans image secon.  │
│ Localisation     │ 73%              │ DE manquant sur 450 fiches    │
├──────────────────┼──────────────────┼──────────────────────────────┤
│ Backlog critique │ 48 fiches < 60   │ ⚠️ À enrichir avant J+3      │
│ Publication OK   │ 12 450 fiches    │ 95% du catalogue actif        │
└──────────────────┴──────────────────┴──────────────────────────────┘
```

## Livrables
- Grille de scoring qualité (dimensions, poids, formules de calcul)
- Catalogue de règles métier (avec pénalités et messages d'alerte)
- Configuration du completeness score dans le PIM par canal
- Dashboard qualité (Power BI / Grafana / natif PIM)
- Rapport hebdomadaire qualité (top anomalies, tendances, actions)
- Plan d'amélioration qualité (roadmap enrichissement priorisée)

## Format de sortie
Précise : **PIM utilisé**, **canaux à scorer** (e-com, print, marketplace…), **locales cibles**, **seuil de publication** (100% requis ou tolérance ?), **outils BI disponibles** pour le dashboard.
