# Skill — Gouvernance éditoriale et workflows de publication
> Certifications : Adobe AEM Sites Business Practitioner · Acquia Certified Site Builder — Drupal 10

## Objectif
Définir et mettre en place la gouvernance éditoriale d'une plateforme CMS : rôles et droits contributeurs, workflows de publication, taxonomies et conventions de nommage, formation et documentation.

## Modèle RACI éditorial

```
RÔLE                  DESCRIPTION                          DROITS CMS TYPES
────────────────────  ───────────────────────────────────  ──────────────────────────────
Contributeur          Crée et édite les contenus brouillon  Create, Edit own content
Éditeur               Valide et publie les contenus         + Publish, Edit any content
Chef de rubrique      Gère la taxonomie de sa section       + Create taxonomy terms, Manage menus
Administrateur CMS    Configure le CMS, gère les utilisateurs All permissions except superadmin
Superadmin            Accès total (infra + CMS)             All
Lecteur preview       Accès aux contenus non publiés        View unpublished content only
```

## Workflow de publication — 4 étapes types

```
┌──────────────┐    ┌─────────────┐    ┌──────────────┐    ┌────────────┐
│  BROUILLON   │───▶│  EN RELECTURE│───▶│  APPROUVÉ   │───▶│  PUBLIÉ   │
│  (Contribut.)│    │  (Éditeur)  │    │  (Chef rub.) │    │  (Live)   │
└──────────────┘    └─────────────┘    └──────────────┘    └────────────┘
       │                   │                  │
       ▼                   ▼                  ▼
  [Notification]    [Demande correc.]    [Planif. date]
```

## Configuration workflow Drupal 10 (Content Moderation)

```yaml
# config/install/workflows.workflow.editorial.yml
id: editorial
type: content_moderation
label: 'Workflow éditorial'
type_settings:
  states:
    draft:      { label: 'Brouillon',    published: false, default_revision: false }
    review:     { label: 'En relecture', published: false, default_revision: true  }
    approved:   { label: 'Approuvé',    published: false, default_revision: true  }
    published:  { label: 'Publié',       published: true,  default_revision: true  }
    archived:   { label: 'Archivé',      published: false, default_revision: false }
  transitions:
    submit_for_review: { from: [draft],    to: review,    label: 'Soumettre'  }
    request_changes:   { from: [review],   to: draft,     label: 'Retourner'  }
    approve:           { from: [review],   to: approved,  label: 'Approuver'  }
    publish:           { from: [approved], to: published, label: 'Publier'    }
    archive:           { from: [published],to: archived,  label: 'Archiver'   }
  entity_types:
    node: [article, page, actualite]
```

## Taxonomie — Bonnes pratiques

```
PRINCIPE                    EXEMPLE D'APPLICATION
──────────────────────────  ─────────────────────────────────────────────
Hiérarchie limitée à 2-3    Thématiques > Sous-thématiques (pas plus)
  niveaux max

Termes en minuscules,       "intelligence-artificielle" (pas "IA", "A.I.", "Intelligence Artificielle")
  normalisés

Contrôlés par des éditeurs  Contributeurs ne peuvent pas créer de nouveaux termes
  référents

Multilingues synchronisés   FR/EN/DE créés simultanément, pas en rattrapage

Audit trimestriel           Supprimer les termes orphelins (0 contenu associé)
```

## Guide de nommage et conventions éditoriales

```
FICHIERS ASSETS
  Images web    : [section]-[sujet]-[format]-[date].jpg  → hero-ia-generative-16x9-2026.jpg
  Documents     : [type]-[titre-kebab]-[version].pdf     → guide-migration-cms-v2.pdf
  Vidéos        : [marque]-[sujet]-[langue]-[durée].mp4  → brand-ai-tutorial-fr-3min.mp4

PAGES / SLUGS
  Blog          : /blog/[année]/[slug-titre]             → /blog/2026/migration-drupal-contentful
  Produits      : /produits/[categorie]/[nom-produit]    → /produits/logiciels/mon-produit
  Événements    : /evenements/[année]-[mois]-[slug]      → /evenements/2026-06-paris-ia-summit
```

## Livrables
- Matrice RACI éditorial (rôles × droits)
- Configuration workflows de publication (YAML ou specs)
- Taxonomie structurée (arbres de termes)
- Guide de nommage et conventions éditoriales
- Formation contributeurs (slides ou vidéo tutoriel)
- Documentation administrateur CMS

## Format de sortie
Précise : **CMS utilisé** (AEM, Drupal, Contentful…), **nombre de contributeurs** et **profils**, **langues** du site, **fréquence de publication**, **contraintes réglementaires** (validation légale, RGPD, droits images).
