# Skill — Convention de Nommage & Charte Filenaming Assets
> Certifications : Henry Stewart DAM Practitioner · IPTC Photo Metadata Standard Practitioner · Bynder Certified Partner

## Objectif
Définir et appliquer une convention de nommage des assets digitaux : charte de nommage des fichiers, règles de formatage, encodage des métadonnées dans le nom de fichier et gouvernance — pour garantir la retrouvabilité, l'interopérabilité entre systèmes et l'absence d'ambiguïté dans les échanges avec les agences et partenaires.

## Principes fondamentaux du filenaming

```
RÈGLE                             RATIONALE                          IMPLÉMENTATION
────────────────────────────────  ────────────────────────────────   ─────────────────────────────────
Pas d'espaces dans le nom         Compatibilité universelle URLs/CLI  Utiliser "_" ou "-" comme séparateur
Pas de caractères spéciaux        Compatibilité OS et CDN             [A-Za-z0-9_-] uniquement
Minuscules uniquement             Éviter les doubles (img.jpg ≠ IMG)  Convention lowercase stricte
Extension en minuscules           Cohérence                           .jpg pas .JPG
Pas d'accents / diacritiques      ASCII pur pour interopérabilité     é→e, ü→u, ñ→n
Nom auto-descriptif               Retrouvable sans ouvrir le fichier  Structure structurée (voir ci-dessous)
Version dans le nom               Traçabilité sans DAM               _v1, _v2, _final, _approved
Date en ISO 8601 si besoin        Tri chronologique correct           YYYYMMDD (pas DD-MM-YYYY)
```

## Structure de nommage recommandée

```
FORMAT : [marque]_[categorie]_[sujet]_[canal]_[langue]_[version].[ext]

EXEMPLES :
  acme_packshot_produit-x100_web_fr_v2.jpg
  acme_ambiance_lifestyle-cuisine_social_en_v1.webp
  acme_logo_principal_all_rvb_approved.svg
  acme_video_tuto-installation_web_fr_v3.mp4
  acme_template_presentation-codir_print_fr_2026Q2.pptx
  acme_document_charte-graphique_all_all_v5.pdf

RÈGLES PAR CHAMP :
  [marque]    : code marque court (3-6 char.) — ex: acme, brnd, sg
  [categorie] : packshot · ambiance · lifestyle · logo · icon · video · document · template
  [sujet]     : descriptif en kebab-case (mots-clés du contenu)
  [canal]     : web · print · social · email · all (si multi-canal)
  [langue]    : fr · en · de · es · all (si langue-neutre)
  [version]   : v1 · v2 · draft · approved · final (jamais "final_FINAL")
  [ext]       : jpg · webp · png · svg · tiff · pdf · mp4 · pptx
```

## Exemples par type d'asset

```
TYPE              MAUVAIS NOM                 BON NOM
────────────────  ──────────────────────────  ───────────────────────────────────────────────
Packshot produit  IMG_20260315_152340.jpg     acme_packshot_casque-bth500_web_fr_v2.jpg
Logo couleur      Logo ACME RVB FINAL.png     acme_logo_principal_all_rvb_approved.png
Vidéo campagne    Spot TV printemps FINAL.mp4 acme_video_spot-tv-printemps_tv_fr_v1.mp4
Template PPT      Présentation nouvelle.pptx  acme_template_pitch-client_print_fr_2026q2.pptx
Photo équipe      Photo equipe marketing.jpg  corp_portrait_equipe-marketing_web_fr_20260501.jpg
Infographie       Infog chiffres 2026 v3.pdf  acme_document_infog-kpis-2026_print_fr_v3.pdf
Icon UI           icon_panier.svg             acme_icon_panier-ui_web_all_v1.svg
```

## Règles pour les assets IA générés

```
ASSETS GÉNÉRÉS PAR IA — Convention spéciale
  Préfixe obligatoire : aigen_ (pour identification et traçabilité)
  Format : aigen_[marque]_[categorie]_[sujet]_[canal]_[langue]_[date].ext
  Exemple : aigen_acme_ambiance_jardin-ete_web_fr_20260526.jpg

Raison : distinction claire des assets IA vs photos/vidéos "réelles" (conformité, droits, RGPD)
```

## Script de validation et renommage automatique

```python
import re, os
from pathlib import Path

ALLOWED_CATEGORIES = {"packshot","ambiance","lifestyle","logo","icon","video","document","template"}
ALLOWED_CHANNELS   = {"web","print","social","email","tv","all"}
ALLOWED_LANGS      = {"fr","en","de","es","it","all"}

def validate_filename(filename: str) -> tuple[bool, list[str]]:
    """Valide un nom de fichier selon la convention de nommage"""
    errors = []
    stem = Path(filename).stem
    parts = stem.split("_")

    if len(parts) < 5:
        errors.append(f"Format invalide : {len(parts)} segments (min 5 requis)")
        return False, errors

    brand, category, subject, channel, lang = parts[0], parts[1], parts[2], parts[3], parts[4]

    if not re.match(r'^[a-z0-9]{2,6}$', brand):
        errors.append(f"Marque invalide : '{brand}' (2-6 chars alphanumériques)")
    if category not in ALLOWED_CATEGORIES:
        errors.append(f"Catégorie inconnue : '{category}'")
    if channel not in ALLOWED_CHANNELS:
        errors.append(f"Canal inconnu : '{channel}'")
    if lang not in ALLOWED_LANGS:
        errors.append(f"Langue inconnue : '{lang}'")
    if re.search(r'[A-ZÀ-Ü\s@#$%&éèàüñ]', stem):
        errors.append("Nom contient des majuscules, espaces ou caractères spéciaux")

    return len(errors) == 0, errors
```

## Livrables
- Charte de nommage des fichiers (convention complète, règles, exemples)
- Glossaire des valeurs autorisées (catégories, canaux, langues, marques)
- Script de validation et de renommage automatique (Python)
- Guide d'intégration dans le DAM (règle de validation à l'upload)
- Formation agences (comment livrer les assets avec la bonne convention)
- Rapport d'audit du stock existant (% assets conformes à la convention)

## Format de sortie
Précise : **marques** concernées, **types d'assets** (photos, vidéos, documents, templates…), **canaux de distribution** (pour liste des valeurs autorisées), **langues** actives, **agences / partenaires** qui livrent des assets (besoin de formation ?), **DAM cible** (règles de validation à l'upload).

## Anti-patterns
- ❌ **Espaces, accents ou majuscules** dans le nom (`Logo ACME FINAL.png`) : casse les URLs/CDN et crée des doublons (`img.jpg` ≠ `IMG.jpg`) → `[a-z0-9_-]` strict
- ❌ **Date en `DD-MM-YYYY`** au lieu d'ISO 8601 `YYYYMMDD` : tri chronologique faux → toujours ISO 8601
- ❌ **Versioning anarchique** (`final_FINAL_v2_def`) : ambiguïté sur la version de référence → suffixe normalisé `v1/v2/approved`
- ❌ **Pas de préfixe `aigen_`** sur les assets générés par IA : traçabilité et conformité (droits, transparence AI Act) perdues
- ❌ **Tout encoder dans le nom** sans renseigner les métadonnées IPTC/XMP : l'information disparaît à la conversion/export → le nom complète, ne remplace pas la métadonnée
- ❌ **Convention non contrôlée à l'upload** : règle théorique sans validation automatique → dérive immédiate (cf. script de validation)

## Sources
- **IPTC Photo Metadata Standard 2025.1** (oct. 2025) — encodage des métadonnées descriptives/droits — iptc.org/standards/photo-metadata
- **ISO 8601:2019** — *Date and time format* (YYYYMMDD) — iso.org
- **AI Act UE** — Règlement (UE) 2024/1689, art. 50 (transparence des contenus générés par IA → justifie le préfixe `aigen_`) — eur-lex.europa.eu

## Voir aussi
- [`taxonomie-assets.md`](taxonomie-assets.md) — métadonnées IPTC/XMP complémentaires du nommage
- [`gouvernance-dam.md`](gouvernance-dam.md) — gouvernance et contrôle qualité du nommage
- [`workflow-validation-assets.md`](workflow-validation-assets.md) — validation du nommage à l'ingestion
- [`migration-dam.md`](migration-dam.md) — renommage de masse du stock legacy
