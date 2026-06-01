# Skill — Onboarding & Import de Données Produit
> Certifications : Akeneo Certified Developer · SAP MDG Associate · DAMA DMBOK2

## Objectif
Industrialiser le processus d'onboarding de nouvelles données produit : collecte des données sources (ERP, fournisseurs, tableurs), normalisation, déduplication, contrôle qualité et chargement dans le PIM — pour réduire le délai d'intégration et garantir la qualité dès l'entrée.

## Sources d'onboarding typiques

```
SOURCE              FORMAT             FRÉQUENCE     QUALITÉ ATTENDUE    TRAITEMENT
──────────────────  ─────────────────  ────────────  ──────────────────  ──────────────────────────
ERP (SAP/Oracle)    API / IDoc / CSV   Quotidien     Élevée              Mapping direct + validation
Fournisseur Excel   XLSX               À la demande  Variable            Normalisation + nettoyage
Fournisseur XML     GS1 / ETIM         À la demande  Moyenne             Parsing + mapping schéma
Import DSV          CSV / TSV          Hebdomadaire  Élevée              Contrôle format + chargement
Rachat / Fusion     Dump BDD           Ponctuel      Basse               Audit + dédup + migration
Scraping concurrent Web                Ponctuel      Basse               Enrichissement référence
Agence contenu      JSON / CSV         Mensuel       Élevée              Validation + enrichissement
```

## Processus d'onboarding en 5 étapes

```
ÉTAPE 1 — COLLECTE & RÉCEPTION
  □ Réception du fichier source (SFTP, portail, API)
  □ Validation du format (encoding UTF-8, séparateur, en-têtes)
  □ Quarantaine si format invalide → notification expéditeur

ÉTAPE 2 — NORMALISATION
  □ Nettoyage : suppression espaces, caractères spéciaux, BOM
  □ Standardisation : unités (g→kg, in→cm), dates (ISO 8601), booléens
  □ Mappage colonnes source → attributs PIM (dictionnaire de mapping)
  □ Gestion valeurs manquantes (valeur par défaut ou rejet)

ÉTAPE 3 — CONTRÔLE QUALITÉ
  □ Validation EAN/GTIN (chiffre de contrôle GS1)
  □ Vérification unicité SKU (pas de doublon avec l'existant)
  □ Contrôle valeurs obligatoires (sku, famille, nom, ean)
  □ Détection incohérences (poids = 0, prix négatif, description = titre)
  □ Rapport d'anomalies (liste des lignes en erreur + motif)

ÉTAPE 4 — IMPORT PIM
  □ Import en staging (environnement de pré-production)
  □ Validation visuelle échantillon (10 fiches aléatoires)
  □ Calcul completeness score post-import
  □ Import en production si validation OK

ÉTAPE 5 — NOTIFICATION & SUIVI
  □ Rapport d'import (nb lignes traitées, créées, mises à jour, erreurs)
  □ Notification équipe produit (import terminé, actions à mener)
  □ Mise à jour tableau de bord onboarding (KPIs)
```

## Script de validation EAN-13 (Python)

```python
def validate_ean13(ean: str) -> bool:
    """Valide un code EAN-13 par vérification du chiffre de contrôle"""
    if not ean or len(ean) != 13 or not ean.isdigit():
        return False
    total = sum(
        int(ean[i]) * (1 if i % 2 == 0 else 3)
        for i in range(12)
    )
    check_digit = (10 - (total % 10)) % 10
    return check_digit == int(ean[12])

# Rapport d'anomalies (exemple)
def check_row(row: dict) -> list[str]:
    errors = []
    if not row.get('sku'):           errors.append("SKU manquant")
    if not validate_ean13(row.get('ean', '')): errors.append("EAN invalide")
    if not row.get('famille_pim'):   errors.append("Famille manquante")
    if float(row.get('poids', 0)) <= 0: errors.append("Poids nul ou négatif")
    return errors
```

## Livrables
- Dictionnaire de mapping source → PIM (par type de source)
- Scripts de normalisation et de contrôle qualité
- Modèle de rapport d'onboarding (erreurs, statistiques, actions)
- Procédure d'onboarding documentée (SOP — Standard Operating Procedure)
- Dashboard suivi onboarding (volumes, taux d'erreur, délais)
- Guide contributeur (template Excel normalisé pour les fournisseurs)

## Format de sortie
Précise : **sources d'onboarding** (ERP, fournisseurs, agences…), **formats reçus** (Excel, CSV, XML, API…), **volumétrie** (nb références/mois), **PIM cible** (Akeneo, Pimcore…), **délai de traitement acceptable** (temps réel, quotidien, hebdomadaire).

## Anti-patterns
- ❌ **Pas de quarantaine sur format invalide** : données polluées chargées en masse → rejet + notification expéditeur dès l'étape 1
- ❌ **EAN/GTIN non validé** (chiffre de contrôle GS1) : identifiants faux dans le catalogue → validation bloquante
- ❌ **Import direct en production sans staging** : pollution irréversible → pré-prod + échantillon validé
- ❌ **Valeurs manquantes remplacées silencieusement** par défaut : fausses données invisibles → rejet ou flag explicite
- ❌ **Pas de rapport d'anomalies renvoyé à l'expéditeur** : les mêmes erreurs reviennent → boucle de feedback fournisseur
- ❌ **Onboarding sans template fournisseur normalisé** : chaque source dans son format → gabarit imposé (cf. `portail-fournisseurs.md`)

## Sources
- **GS1 General Specifications v24.0** (2024) — EAN-13/GTIN, algorithme du chiffre de contrôle — gs1.org
- **ETIM 10.0** (déc. 2024) — classification des fichiers fournisseurs techniques — etim-international.com
- **ISO 8601** (dates) · **ISO 80000** (unités) — normalisation à l'étape 2 — iso.org
- **DAMA-DMBOK 2** (2017) — data quality à l'ingestion — dama.org

## Voir aussi
- [`integration-erp-pim.md`](integration-erp-pim.md) — flux ERP (source structurée)
- [`portail-fournisseurs.md`](portail-fournisseurs.md) — collecte normalisée auprès des fournisseurs
- [`gouvernance-donnees-produit.md`](gouvernance-donnees-produit.md) — règles de qualité et déduplication
- [`modelisation-catalogue.md`](modelisation-catalogue.md) — modèle cible du mapping
