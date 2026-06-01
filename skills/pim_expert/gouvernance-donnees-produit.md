# Skill — Gouvernance de la Donnée Produit (MDM & Data Quality)
> Certifications : CDMP · DAMA DMBOK2 · SAP MDG Associate · ISO/IEC 42001:2023

## Objectif
Mettre en place un cadre de gouvernance de la donnée produit : définition du référentiel maître (golden record), politiques de qualité, rôles Data Stewards, règles de déduplication et conformité — pour garantir la fiabilité du catalogue à travers tous les canaux et systèmes.

## Les 6 piliers de la gouvernance données produit

```
PILIER              DESCRIPTION                                 LIVRABLES CLÉS
──────────────────  ──────────────────────────────────────────  ─────────────────────────────────
1. Organisation     Rôles, responsabilités, comité de données   RACI · Charte · Comité gouvernance
2. Politique        Règles, standards, cycle de vie données     Data Policy · Naming conventions
3. Qualité          Mesure, correction, prévention des erreurs  Scorecard qualité · Règles métier
4. Architecture     Modèle données maître, sources de vérité    MDM Map · Flux de données
5. Cycle de vie     Création, enrichissement, archivage, purge  Workflow lifecycle · SLA
6. Conformité       RGPD, réglementations produit, traçabilité  Audit trail · Data lineage
```

## Modèle MDM — Sources de vérité par domaine

```
ATTRIBUT                     SOURCE MAÎTRE    SYSTÈME CONSOMMATEUR           RÈGLE DE CONFLIT
───────────────────────────  ───────────────  ─────────────────────────────  ──────────────────────────
Référence SKU                ERP (SAP)        PIM · e-com · WMS · BI         ERP = source unique (master)
Nom produit (technique)      ERP              PIM · print · e-com            ERP → PIM (enrichissement)
Description marketing        PIM              e-com · CMS · print            PIM = source unique
Prix public                  ERP / Pricing    e-com · PIM (lecture seule)    ERP = maître prix
Poids / Dimensions           ERP              PIM · logistique               ERP = maître (certification)
Images / Vidéos              DAM              PIM (référence) · CMS · e-com  DAM = source unique
Stock disponible             WMS              e-com (temps réel)             WMS = maître temps réel
Certifications produit       PIM (manuel)     e-com · print · conformité     PIM = maître certs
```

## Règles de déduplication

```python
# Logique de déduplication produit (pseudo-code)
def deduplicate_products(candidates):
    """
    Détecte les doublons par similarité multi-critères
    """
    duplicates = []
    for i, prod_a in enumerate(candidates):
        for prod_b in candidates[i+1:]:
            score = 0
            # Correspondance exacte EAN → doublon certain
            if prod_a['ean'] == prod_b['ean']:
                score = 100
            else:
                # Similarité nom (Levenshtein)
                score += levenshtein_similarity(prod_a['name'], prod_b['name']) * 40
                # Même marque
                score += (prod_a['brand'] == prod_b['brand']) * 20
                # Mêmes dimensions
                score += (prod_a['weight'] == prod_b['weight']) * 20
                # Même famille
                score += (prod_a['family'] == prod_b['family']) * 20
            if score >= 80:
                duplicates.append({'a': prod_a, 'b': prod_b, 'score': score})
    return duplicates
```

## Scorecard qualité données produit

```
DIMENSION          INDICATEUR                          CIBLE    POIDS
─────────────────  ──────────────────────────────────  ───────  ─────
Complétude         % attributs obligatoires remplis    ≥ 95%    30%
Exactitude         % données validées vs source ERP    ≥ 99%    25%
Cohérence          % contradictions inter-systèmes     ≤ 0.5%   20%
Unicité            % doublons détectés non traités     ≤ 0.1%   15%
Actualité          % fiches à jour (< 6 mois)          ≥ 90%    10%
──────────────────────────────────────────────────────────────────────
Score global       Moyenne pondérée                    ≥ 92%
```

## Livrables
- Charte de gouvernance des données produit
- Carte MDM (sources de vérité, flux, systèmes consommateurs)
- Dictionnaire de données avec règles de qualité par attribut
- Scorecard qualité (tableau de bord mensuel)
- Procédures de déduplication et de correction
- Rapport d'audit de la qualité des données (initial et récurrent)

## Format de sortie
Précise : **périmètre** (nombre de SKUs, marchés), **systèmes concernés** (ERP, PIM, DAM, e-com, WMS), **principaux problèmes de qualité constatés**, **organisation actuelle** (existe-t-il des Data Stewards ?).

## Anti-patterns
- ❌ **Pas de golden record / source de vérité définie** par attribut : conflits inter-systèmes irrésolus → carte MDM explicite (ERP maître SKU/prix, DAM maître médias…)
- ❌ **Déduplication par nom seul** (sans EAN/GTIN) : faux positifs/négatifs → priorité à l'identifiant GS1, similarité en secours
- ❌ **Scorecard sans Data Steward responsable** : indicateurs sans action → un owner par dimension qualité
- ❌ **Pondérations de déduplication arbitraires** non calibrées sur l'historique → ajuster les poids sur des cas réels
- ❌ **Gouvernance « one shot »** (audit initial sans récurrence) : la qualité se dégrade → scorecard mensuelle + revue
- ❌ **RGPD ignoré** sur données liées à des personnes (avis, contributeurs) → registre + base légale

## Sources
- **DAMA-DMBOK 2** (2017) — *Data Management Body of Knowledge* (gouvernance, MDM, data quality) — dama.org
- **ISO 8000** — qualité des données (master data) · **ISO/IEC 42001:2023** — gouvernance IA (data quality augmentée) — iso.org
- **GS1 General Specifications v24.0** (2024) — GTIN/GLN comme clés d'unicité — gs1.org
- **RGPD** — Règlement (UE) 2016/679 (données produit liées à des personnes) — eur-lex.europa.eu

## Voir aussi
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — modèle de données gouverné
- [`scoring-qualite-produit.md`](scoring-qualite-produit.md) — scorecard qualité opérationnelle
- [`integration-erp-pim.md`](integration-erp-pim.md) — flux ERP → PIM (sources de vérité)
- [`enrichissement-produit.md`](enrichissement-produit.md) — cycle de vie et complétude
