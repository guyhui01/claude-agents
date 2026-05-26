# Skill — Taxonomie & Modèle de Métadonnées Assets
> Certifications : Henry Stewart DAM Practitioner · IPTC Photo Metadata Standard · Bynder Certified Partner

## Objectif
Concevoir la structure de classification et le modèle de métadonnées du DAM : arborescence des dossiers, schémas de métadonnées (IPTC/XMP/EXIF), vocabulaires contrôlés et règles de tagging — pour rendre les assets retrouvables, réutilisables et gouvernés à grande échelle.

## Structure taxonomique recommandée

```
DAM /
├── Marques /
│   ├── [Marque A] /
│   │   ├── Identité visuelle /     # Logos, charte, palettes, typographies
│   │   ├── Produits /
│   │   │   ├── [Gamme] /
│   │   │   │   ├── Packshots /     # Vues produit fond blanc
│   │   │   │   ├── Ambiances /     # Photos lifestyle, contextualisation
│   │   │   │   └── Vidéos /        # Films produit, tutoriels
│   │   │   └── ...
│   │   ├── Campagnes /             # Assets organisés par campagne / saison
│   │   └── Presse /                # Kit presse, communiqués, biographies
│   └── [Marque B] /
├── Corporate /
│   ├── Direction /                 # Photos dirigeants, organigrammes
│   ├── Événements /                # Conférences, salons, roadshows
│   └── RSE /                       # Rapports, infographies ESG
├── Agences & Partenaires /         # Assets reçus des agences (accès limité)
└── Archives /                      # Assets expirés (consultation uniquement)
```

## Schéma de métadonnées — Standards IPTC/XMP

```
CATÉGORIE           CHAMP IPTC / XMP                  USAGE                       OBLIGATOIRE
──────────────────  ────────────────────────────────  ──────────────────────────  ─────────────
Identification      dc:title                          Titre asset                 Oui
                    dc:description                    Description contextuelle    Recommandé
                    Iptc4xmpCore:SubjectCode          Codes sujet IPTC            Optionnel
Droits              xmpRights:UsageTerms              Conditions d'utilisation    Oui
                    xmpRights:WebStatement            URL politique droits        Recommandé
                    photoshop:Credit                  Crédit photographe          Oui (photos)
                    Iptc4xmpCore:CopyrightNotice      Mention copyright           Oui
Contenu             dc:subject                        Mots-clés / tags            Oui (≥ 5)
                    Iptc4xmpExt:PersonInImage         Personnes identifiées       Obligatoire (RGPD)
                    Iptc4xmpExt:LocationCreated       Lieu de prise de vue        Recommandé
Technique           exif:ImageWidth / ImageLength     Dimensions pixel            Automatique
                    exif:ColorSpace                   sRGB / AdobeRGB / CMJN      Automatique
                    photoshop:DateCreated             Date de création            Oui
Interne             dam:brand                         Marque associée             Oui
                    dam:product_sku                   SKU produit lié (si appli.) Conditionnel
                    dam:channel                       Canal(ux) autorisé(s)       Oui
                    dam:expiry_date                   Date d'expiration droits    Oui
```

## Vocabulaires contrôlés — Exemples

```
CHAMP               VALEURS AUTORISÉES (exemples)
──────────────────  ──────────────────────────────────────────────────────────────────
dam:asset_type      packshot · ambiance · lifestyle · icon · logo · video · document
dam:color_mode      RVB · CMJN · Niveaux de gris · LAB
dam:channel         web · print · social · email · marketplace · outdoor
dam:status          draft · awaiting_review · approved · published · expired · archived
dam:territory       FR · EU · WORLD · EXCL_US · EXCL_CHINA
dam:license_type    royalty_free · rights_managed · creative_commons · owned
```

## Livrables
- Arborescence taxonomique complète (structure dossiers DAM)
- Dictionnaire de métadonnées (champs, types, obligatoire/optionnel, standards)
- Vocabulaires contrôlés (listes de valeurs autorisées par champ)
- Guide de tagging (comment tagger les assets, exemples par type)
- Configuration du schéma dans le DAM cible (Bynder, AEM Assets, Cloudinary)
- Procédure de migration des métadonnées legacy

## Format de sortie
Précise : **DAM cible** (Bynder, AEM Assets, Cloudinary, Canto…), **marques concernées**, **types d'assets** principaux (photos, vidéos, documents, icons…), **contraintes RGPD** (personnes identifiables), **intégrations** (PIM, CMS), **volumétrie** estimée (nb assets).
