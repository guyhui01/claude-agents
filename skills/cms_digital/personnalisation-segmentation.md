# Skill — Personnalisation et Segmentation CMS
> Certifications : Adobe AEM Sites Developer · Sitecore XM Cloud Developer (Sitecore 2024)

## Objectif
Concevoir et implémenter des stratégies de personnalisation sur une plateforme CMS : segmentation des audiences, tests A/B, contenu dynamique, CDP — pour améliorer l'engagement et les taux de conversion.

## Niveaux de personnalisation

```
NIVEAU       DESCRIPTION                          EXEMPLES
───────────  ───────────────────────────────────  ─────────────────────────────────
Règles       Conditions statiques                 Pays, langue, device, heure
manuelles    définies par les éditeurs            → Afficher promo FR uniquement

Segmentation Segments prédéfinis basés           Segment "Visiteur fidèle" = 3+ visites
             sur comportement historique          → Afficher offre premium

Tests A/B    Variante aléatoire mesurée          Titre A vs Titre B, CTA rouge vs vert
             (optimisation basée sur données)    → Mesure taux de conversion

IA / ML      Personnalisation 1:1 temps réel     Adobe Target, Optimizely IA
             basée sur profil + contexte         → Reco produits individualisées

CDP-driven   Profil client unifié (CDP)          Salesforce CDP, Adobe RTCDP
             synchronisé avec le CMS             → Email + Web + Mobile cohérents
```

## AEM Targeting — Configuration

```xml
<!-- Composant AEM ciblé (HTL) -->
<sly data-sly-use.target="com.day.cq.personalization.api.TargetComponent">
  <div data-sly-test="${target.enabled}">
    <!-- Version personnalisée (Adobe Target) -->
    <sly data-sly-resource="${'target' @ resourceType='cq/personalization/components/target'}" />
  </div>
  <div data-sly-test="${!target.enabled}">
    <!-- Version par défaut -->
    <h2>${properties.defaultTitle}</h2>
  </div>
</sly>
```

## Test A/B — Implémentation avec Optimizely

```typescript
// Initialisation SDK Optimizely
import { createInstance } from '@optimizely/optimizely-sdk'

const optimizely = createInstance({
  sdkKey: process.env.OPTIMIZELY_SDK_KEY!,
  datafileOptions: { autoUpdate: true, updateInterval: 30000 }
})

// Déterminer la variante pour un utilisateur
export function getVariant(userId: string, experimentKey: string): string {
  const userContext = optimizely.createUserContext(userId, {
    device: 'mobile',
    country: 'FR',
    plan: 'premium'
  })

  const decision = userContext.decide(experimentKey)
  return decision.variationKey ?? 'control'
}

// Enregistrer une conversion
export function trackConversion(userId: string, eventKey: string): void {
  const userContext = optimizely.createUserContext(userId)
  userContext.trackEvent(eventKey)
}
```

## Segmentation — Modèle de données

```
SEGMENT              CRITÈRES DE DÉFINITION           CONTENU PERSONNALISÉ
───────────────────  ──────────────────────────────── ────────────────────────────────
Nouveau visiteur     0 visite précédente              Bannière accueil + guide démarrage
Visiteur récurrent   ≥ 3 visites, < 30j inactif       "Bienvenue à nouveau" + contenu chaud
Client actif         Identifié + achat < 90j           Reco cross-sell basée historique
Client dormant       Identifié + pas d'achat > 90j     Offre réactivation
Lead qualifié        Score lead ≥ 70 (scoring CRM)     Contenu produit approfondi + démo
Professionnel        Champ "Type = B2B" en session      Tarification pro + cas clients secteur
```

## CDP → CMS — Flux de personnalisation temps réel

```
CDP (Adobe RTCDP)          CMS (AEM / Headless)          Frontend
──────────────────         ──────────────────────        ───────────────────
Profil unifié utilisateur ─▶ Segment API call            ─▶ Contenu personnalisé
(web + email + app)          GET /api/personalization        affiché
                             ?userId=abc123
                          ◀─ Retour segments actifs      ◀─ Mesure interaction
                             ["vip", "churning",             → feedback CDP
                              "interested_in_ai"]
```

## Métriques de personnalisation

```
KPI                     FORMULE                             CIBLE
──────────────────────  ──────────────────────────────────  ────────
Taux de lift            (Conv. segment - Conv. base) / base  > +15%
CTR personnalisé        Clics contenu perso / Impressions    > 3x base
Revenue per visitor     CA / Visiteurs uniques (segment)     + 20% vs défaut
Engagement score        Pages vues × Durée × Actions         Trending up
```

## Livrables
- Stratégie de personnalisation (niveaux, segments, contenu)
- Configuration de l'outil de personnalisation (Adobe Target, Optimizely)
- Plan de tests A/B (hypothèses, KPIs, durée, taille échantillon)
- Documentation des segments (critères + contenu associé)
- Dashboard de suivi (taux de lift, conversions par segment)
- Guide éditeur (créer et publier des variantes de contenu)

## Format de sortie
Précise : **CMS et outil de perso** (Adobe Target, Optimizely, Sitecore XM…), **maturité** (tests A/B simples vs ML 1:1), **données disponibles** (cookie only, CDP, CRM…), **contraintes RGPD** (consentement, durée rétention), **KPI prioritaire** (conversion, engagement, rétention).
