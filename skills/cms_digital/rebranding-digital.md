# Skill — Rebranding Digital Multisite
> Certifications : Adobe AEM Sites Business Practitioner · TOGAF 10 Foundation · Acquia Certified Site Builder

## Objectif
Piloter un rebranding digital sur une plateforme CMS multisite : nouvelle identité visuelle, migration des templates, mise à jour des contenus, coordination internationale — en assurant la continuité de service et la cohérence de marque.

## Phases d'un rebranding digital

```
PHASE 1 — CADRAGE & AUDIT (sem. 1-2)
  □ Inventaire des assets (logos, couleurs, typographies actuelles)
  □ Cartographie des sites/langues/marchés impactés
  □ Analyse des dépendances (design system, composants partagés)
  □ Identification des contraintes (légales, contractuelles, délais marché)

PHASE 2 — DESIGN SYSTEM NOUVEAU (sem. 3-6)
  □ Nouveau design tokens (couleurs, typographies, espacements)
  □ Refonte des composants atomiques (boutons, formulaires, navigation)
  □ Templates de pages (homepage, page produit, article, landing)
  □ Documentation Figma / Storybook (composants + usage)

PHASE 3 — DÉVELOPPEMENT CMS (sem. 5-10)
  □ Mise à jour du thème/skin CMS (CSS variables, tokens)
  □ Refonte des templates/components AEM ou Drupal
  □ Migration des assets (logos, icônes) dans le DAM
  □ Tests de régression visuels (Percy, Chromatic)

PHASE 4 — MIGRATION CONTENUS (sem. 8-12)
  □ Script de remplacement en masse (logos, mentions de marque)
  □ Mise à jour des métadonnées SEO (Open Graph, favicons)
  □ Validation par marché (review locale + juridique)
  □ Publication progressive (par marché, par canal)

PHASE 5 — BASCULEMENT & POST-LANCEMENT (sem. 12-14)
  □ Go-live coordonné (DNS, CDN flush, cache purge)
  □ Monitoring erreurs 500/404 (Datadog, New Relic)
  □ Surveillance SEO post-lancement (GSC, positions)
  □ Communication interne (guide de marque diffusé aux équipes)
```

## Design Tokens — Structure CSS

```css
/* tokens/brand.css — Nouveau design system */
:root {
  /* Couleurs primaires */
  --color-primary-500:    #0066CC;
  --color-primary-600:    #0052A3;
  --color-primary-700:    #003D7A;

  /* Couleurs neutres */
  --color-neutral-50:     #F8FAFC;
  --color-neutral-900:    #1A1A2E;

  /* Typographies */
  --font-family-heading:  'Brand Sans', system-ui, sans-serif;
  --font-family-body:     'Brand Text', Georgia, serif;
  --font-size-base:       1rem;
  --line-height-base:     1.6;

  /* Espacements */
  --spacing-4:  0.25rem;
  --spacing-8:  0.5rem;
  --spacing-16: 1rem;
  --spacing-24: 1.5rem;
  --spacing-32: 2rem;

  /* Border radius */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.08);
}
```

## Script de migration masse (Assets DAM)

```python
import re

def rebrand_content(text: str, mapping: dict) -> str:
    """Remplace les références d'ancienne marque par la nouvelle."""
    for old, new in mapping.items():
        text = re.sub(re.escape(old), new, text, flags=re.IGNORECASE)
    return text

BRAND_MAPPING = {
    "AncienneMarque":       "NouvelleMarque",
    "anciennemarque.com":   "nouvellemarque.com",
    "AncienneMarque Group": "NouvelleMarque Alliance",
    # logos
    "/dam/logos/old-logo.svg": "/dam/logos/new-logo.svg",
}

# Appliquer sur tous les nœuds Drupal
for node in get_all_nodes():
    node['body'] = rebrand_content(node['body'], BRAND_MAPPING)
    node['meta_description'] = rebrand_content(node['meta_description'], BRAND_MAPPING)
    save_node(node)
```

## Coordination internationale multisite

```
MARCHÉ     LANGUE    ÉQUIPE LOCALE     VALIDATION REQUISE         GO-LIVE
─────────  ────────  ────────────────  ─────────────────────────  ─────────────
France     FR        Brand team FR     Juridique + Direction       Sem. 12
EMEA       EN/DE/ES  Local web teams   Local brand manager        Sem. 13
APAC       ZH/JA     External agency   Legal local + Brand HQ     Sem. 14
Amériques  EN/PT/ES  Internal team     Americas Brand Director     Sem. 15
```

## Livrables
- Plan de rebranding (phases, jalons, RACI)
- Design tokens et design system mis à jour (Figma + Storybook)
- Composants CMS rebranded (templates, thèmes)
- Scripts de migration masse (logos, textes, métadonnées)
- Rapport de tests de régression visuels
- Guide de marque digital (usage composants, do/don't)
- Tableau de bord post-lancement (SEO + performance + erreurs)

## Format de sortie
Précise : **CMS et version**, **nombre de sites/marchés**, **périmètre** (visuel seul ou contenus aussi), **contraintes** (deadline événementielle, validation juridique), **équipes** (centralisée ou distribuée par marché), **stack design** (Figma, Storybook, design tokens).
