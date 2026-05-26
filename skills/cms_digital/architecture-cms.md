# Skill — Architecture CMS (Headless / Hybride / Monolithique)
> Certifications : TOGAF 10 Foundation · Contentful Certified Professional · Adobe AEM Sites Developer

## Objectif
Concevoir l'architecture CMS cible adaptée aux besoins métier : choisir entre CMS monolithique, hybride ou headless, définir les composants et les intégrations, et produire l'architecture de référence.

## Modèles d'architecture CMS

```
MODÈLE        DESCRIPTION                          CAS D'USAGE
────────────  ───────────────────────────────────  ─────────────────────────────────────
Monolithique  Frontend intégré au CMS              Sites simples, équipes petites, budget limité
              (AEM Sites, Drupal Classic,           Ex : site vitrine PME, intranet
              WordPress, TYPO3)

Hybride       Backend CMS + frontend découplé       Multicanal limité, PWA, refontes progressives
              API-driven mais CMS gère le rendu     Ex : site institutionnel avec app mobile
              partiel (AEM Headless + AEM Sites)

Headless      CMS = pure API Content Platform       Omnicanal, IoT, kiosques, apps mobiles
              Frontend entièrement découplé         Ex : Contentful + Next.js, Strapi + React
              (Contentful, Sanity, Prismic)

Composable    MACH Architecture                     E-commerce complexe, grande échelle
(MACH)        Microservices + API + Cloud-native    Ex : Accor ALL, CHANEL e-commerce
              + Headless (Contentful + Commercetools
              + Algolia + Cloudflare)
```

## Grille de décision CMS

| Critère | Monolithique | Hybride | Headless | Composable |
|---------|-------------|---------|----------|------------|
| Time-to-market | Rapide | Moyen | Long | Très long |
| Coût initial | Faible | Moyen | Moyen | Élevé |
| Scalabilité | Limitée | Bonne | Excellente | Excellente |
| Expérience éditoriale | Intégrée | Bonne | Variable | Fragmentée |
| Multicanal | Non | Partiel | Oui | Oui |
| Compétences requises | CMS pur | CMS + Front | API + Front | Architecture MACH |

## Template de cadrage architecture CMS

```
ARCHITECTURE CMS — FICHE DE CADRAGE
──────────────────────────────────────────────────────────────
Contexte client       : [Nom, secteur, périmètre]
Modèle cible          : [Monolithique / Hybride / Headless / Composable]
CMS sélectionné       : [AEM / Drupal / Contentful / Strapi / autre]
Canaux couverts       : [Web, Mobile, Kiosque, Email, IoT…]
Langues / Marchés     : [FR, EN, DE… — multisite ou multidomain]
Intégrations clés     : [PIM, DAM, CRM, CDP, E-commerce…]
Volume contenu        : [pages / assets / SKU]
Équipe éditoriale     : [Profils, autonomie attendue]
Contraintes legacy    : [Systèmes à conserver / décommissionner]
Contraintes réglementaires : [RGPD, AI Act, accessibilité RGAA]
```

## Architecture MACH — Composants types

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                         │
│   Next.js / Nuxt / React Native / Native App        │
└─────────────┬───────────────────────────────────────┘
              │ GraphQL / REST API
┌─────────────▼───────────────────────────────────────┐
│                  API GATEWAY / BFF                  │
│         (Apigee / AWS API GW / Kong)                │
└──┬──────────┬──────────┬──────────┬─────────────────┘
   │          │          │          │
┌──▼──┐  ┌───▼──┐  ┌────▼──┐  ┌───▼────┐
│ CMS │  │ PIM  │  │  DAM  │  │ Search │
│     │  │      │  │       │  │Algolia │
└─────┘  └──────┘  └───────┘  └────────┘
```

## Livrables
- Fiche de cadrage architecture CMS
- Diagramme de composants (C4 ou Archimate)
- Grille de décision commentée
- Matrice d'intégrations (systèmes source / cible / protocole)
- Roadmap de migration si transition depuis CMS existant

## Format de sortie
Précise : **canaux cibles** (web, mobile, IoT…), **volume** (pages, assets, langues), **contraintes** (budget, legacy, réglementation), **profil équipe** (développeurs disponibles, expertise CMS), **horizon** (court / moyen terme).
