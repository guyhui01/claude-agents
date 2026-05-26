# Skill — Migration DAM (Inventaire, Mapping Taxonomie, ETL Média)
> Certifications : Henry Stewart DAM Practitioner · Bynder Certified Partner · Widen Certified DAM Specialist

## Objectif
Piloter une migration de DAM ou d'assets vers un nouveau système : inventaire des assets existants, audit qualité, mapping de la taxonomie, extraction et transformation des médias, migration des métadonnées et recette — en garantissant l'intégrité des assets, la conservation des droits et la continuité d'accès.

## Plan de migration DAM en 6 phases

```
PHASE 1 — INVENTAIRE & AUDIT (J-120 à J-90)
  □ Extraction inventaire complet (liste assets, métadonnées, droits, taille)
  □ Déduplication par hash (MD5/SHA256) — identification doublons exacts
  □ Évaluation qualité technique (résolution, format, profil couleur, poids)
  □ Audit des droits (assets sans expiry, sans licence, sans crédit)
  □ Identification assets orphelins (non référencés dans CMS/PIM)
  □ Estimation volumes : nb assets, taille totale (Go/To), nb métadonnées

PHASE 2 — CONCEPTION CIBLE (J-90 à J-60)
  □ Nouvelle architecture taxonomique (cf. skill taxonomie-assets)
  □ Mapping métadonnées source → cible (champs, standards, vocabulaires)
  □ Stratégie de migration (all-at-once vs phased par marque ou type)
  □ Décision sur assets orphelins et assets sans droits (migration/archivage/suppression)
  □ Plan de basculement (fenêtre de migration, double run si nécessaire)

PHASE 3 — DÉVELOPPEMENT ETL MÉDIA (J-60 à J-20)
  □ Scripts d'extraction (API DAM legacy ou export direct storage)
  □ Scripts de transformation métadonnées (normalisation, enrichissement)
  □ Conversion formats si nécessaire (ex: TIFF master → garder + générer WebP)
  □ Scripts de chargement (API nouveau DAM, avec métadonnées normalisées)
  □ Tests pilotes (10% des assets, 1 marque ou 1 type)

PHASE 4 — RECETTE (J-20 à J-5)
  □ Migration complète en environnement de recette
  □ Validation taxonomie (arborescence, vocabulaires, recherche)
  □ Validation métadonnées (complétude, exactitude, droits)
  □ UAT équipes métier (DA, Brand, Marketing, Presse)
  □ Tests d'intégration (CMS, PIM — assets toujours accessibles)
  □ Vérification audit trail migré (si requis légalement)

PHASE 5 — BASCULEMENT (J0)
  □ Gel DAM legacy (lecture seule + export)
  □ Migration delta (assets créés/modifiés pendant la recette)
  □ Activation nouveau DAM (DNS, configurations, accès utilisateurs)
  □ Bascule des connecteurs (CMS, PIM, CDN) vers le nouveau DAM
  □ Smoke tests (upload, download, search, renditions, droits)

PHASE 6 — POST-MIGRATION (J+7 à J+30)
  □ Surveillance anomalies (assets manquants, erreurs droits, 404)
  □ Formation équipes (nouvelles interfaces, nouvelles recherches)
  □ Désactivation DAM legacy (après période de garantie)
  □ Archivage DAM legacy (snapshot du stockage)
  □ Bilan de migration (métriques, incidents, leçons apprises)
```

## Mapping métadonnées — Template

```
MÉTADONNÉE SOURCE (ancien DAM)    CHAMP CIBLE (nouveau DAM)    TRANSFORMATION
───────────────────────────────   ──────────────────────────   ──────────────────────────────
asset_name                        dc:title                     Suppression extension + trim
asset_desc                        dc:description               HTML → texte brut si nécessaire
keywords (comma-separated)        dc:subject (array)           Split "," → Array de tags
copyright                         xmpRights:UsageTerms         Mapping droits → licence type
photographer                      photoshop:Credit             Trim + formatage nom
expiry_date (DD/MM/YYYY)          dam:expiry_date (ISO 8601)   Format date normalisé
brand_tag (string)                dam:brand (vocabulary)       Mapping vocabulaire contrôlé
channel (1=web, 2=print)          dam:channel (array)          Mapping numérique → labels
status (0/1/2)                    dam:status (workflow)        0→draft, 1→approved, 2→archived
```

## Script de migration (Python + API)

```python
import requests, hashlib, json
from pathlib import Path

def migrate_asset(asset: dict, source_api: str, target_api: str) -> dict:
    """Migre un asset avec ses métadonnées d'un DAM à un autre"""

    # 1. Téléchargement depuis le DAM source
    response = requests.get(
        f"{source_api}/assets/{asset['id']}/download",
        headers={"Authorization": f"Bearer {SOURCE_TOKEN}"}
    )
    file_content = response.content
    file_hash = hashlib.sha256(file_content).hexdigest()

    # 2. Transformation des métadonnées
    metadata_target = {
        "title":       asset.get("name", "").replace(Path(asset["name"]).suffix, ""),
        "description": asset.get("description", ""),
        "tags":        asset.get("keywords", "").split(","),
        "rights":      map_license(asset.get("copyright", "")),
        "expiry":      normalize_date(asset.get("expiry_date")),
        "hash":        file_hash,  # Pour déduplication future
    }

    # 3. Upload dans le DAM cible
    upload = requests.post(
        f"{target_api}/assets",
        headers={"Authorization": f"Bearer {TARGET_TOKEN}"},
        files={"file": (asset["name"], file_content)},
        data={"metadata": json.dumps(metadata_target)}
    )
    return upload.json()
```

## Livrables
- Rapport d'inventaire et d'audit du DAM legacy (volumétrie, qualité, droits)
- Mapping taxonomie source → cible (arborescence + métadonnées)
- Scripts ETL média (extraction + transformation + chargement)
- Plan de basculement et procédure de rollback
- Rapport de recette (assets migrés, erreurs, métadonnées validées)
- Bilan post-migration (métriques finales, dossiers résiduels, leçons apprises)

## Format de sortie
Précise : **DAM source** (nom, version, API disponible ?), **DAM cible**, **volume** (nb assets, taille totale en Go), **intégrations à reconnecter** (CMS, PIM, CDN), **contraintes de disponibilité** (peut-on suspendre l'accès aux assets ?), **délai** disponible pour la migration.
