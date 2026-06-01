# Skill — Accessibilité Numérique (RGAA 4.1 / WCAG 2.2)
> Certifications : WCAG 2.2 / RGAA 4.1 — Accessibilité numérique (W3C / DINUM 2024)

## Objectif
Auditer et mettre en conformité une plateforme CMS avec le RGAA 4.1 (obligation légale France) et les WCAG 2.2 : identifier les non-conformités, prioriser les corrections et produire la Déclaration d'Accessibilité.

## Niveaux WCAG / RGAA

```
NIVEAU  DESCRIPTION                         OBLIGATION
──────  ──────────────────────────────────  ─────────────────────────────────
A       Minimum absolu (25 critères RGAA)   Obligatoire (services publics FR)
AA      Niveau recommandé (50 critères)     Obligatoire (RGAA 4.1 complet)
AAA     Niveau optimal (13 critères supp.)  Recommandé, non obligatoire
```

## Les 4 principes POUR (WCAG 2.2)

```
PERCEPTIBLE    Le contenu est accessible à tous les sens
  • Alternatives textuelles pour images (alt)
  • Sous-titres et transcriptions pour médias
  • Adaptabilité : contenu lisible sans mise en page
  • Distinguable : contraste suffisant, pas de texte en image

UTILISABLE     L'interface est fonctionnelle au clavier et sans délai
  • Clavier : toutes les fonctionnalités accessibles au clavier
  • Temps suffisant : pas de délai bloquant
  • Crises : pas de contenu clignotant > 3 fois/seconde
  • Navigation : repères et titres cohérents

COMPRÉHENSIBLE Le contenu et l'interface sont intelligibles
  • Lisible : langue déclarée, définitions des termes rares
  • Prévisible : navigation cohérente, pas de changement au focus
  • Aide à la saisie : étiquettes, messages d'erreur clairs

ROBUSTE        Compatible avec les technologies d'assistance
  • Analyse : HTML valide, ARIA correct
  • Compatibilité : lecteurs d'écran (NVDA, VoiceOver, JAWS)
```

## Critères RGAA prioritaires (P1 — Impact fort)

```
CRITÈRE  INTITULÉ                                       TEST RAPIDE
───────  ─────────────────────────────────────────────  ─────────────────────────────
1.1      Alternative textuelle image informative         Inspecter attribut alt
3.3      Contraste texte normal ≥ 4,5:1                  Contraste Analyser outil
4.1      Transcription / sous-titres vidéo               Vérifier présence sous-titres
6.1      Intitulés liens explicites hors contexte        Lister tous les "cliquez ici"
7.1      Scripts accessibles au clavier                  Tab + Enter sur tous les CTA
8.2      Code HTML valide (W3C validator)                Passer le validateur W3C
9.1      Hiérarchie des titres cohérente (H1 unique)     Inspecter structure Hn
10.4     Zoom texte 200% sans perte info                 Zoom navigateur à 200%
11.1     Étiquettes associées aux champs de formulaire   Inspecter label/for ou aria-label
12.8     Ordre de tabulation logique                     Parcours clavier Tab
```

## Patterns ARIA essentiels

```html
<!-- Navigation principale -->
<nav aria-label="Navigation principale">
  <ul role="list">
    <li><a href="/" aria-current="page">Accueil</a></li>
  </ul>
</nav>

<!-- Modal / Dialog -->
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Titre de la modale</h2>
  <p id="dialog-desc">Description du contenu</p>
  <button aria-label="Fermer la modale">×</button>
</div>

<!-- Bouton chargement -->
<button aria-busy="true" aria-label="Chargement en cours">
  <span aria-hidden="true">⏳</span> Envoyer
</button>

<!-- Skip link (obligatoire RGAA) -->
<a href="#main-content" class="skip-link">Aller au contenu principal</a>
```

## Outils d'audit

```
OUTIL               TYPE          USAGE
──────────────────  ────────────  ─────────────────────────────────────────
axe DevTools        Extension     Audit automatique dans Chrome DevTools
WAVE               Extension     Visualisation des erreurs in-page
Colour Contrast     En ligne      Vérification des ratios de contraste
NVDA + Firefox      Lecteur écran Audit manuel (Windows)
VoiceOver + Safari  Lecteur écran Audit manuel (macOS / iOS)
Accessibility Tree  DevTools      Vérification de l'arbre d'accessibilité
Pa11y               CLI / CI      Automatisation en pipeline CI/CD
```

## Déclaration d'Accessibilité — Structure

```
DÉCLARATION D'ACCESSIBILITÉ
────────────────────────────────────────────
Établissement        : [Nom de l'organisme]
URL du site          : [https://...]
État de conformité   : [Totalement / Partiellement / Non conforme]
Résultats de l'audit : [Taux de conformité : X%]
Non-conformités      : [Liste des critères non atteints]
Dérogations          : [Contenus exemptés avec justification]
Alternatives         : [Numéro téléphone / email accessibilité]
Date de mise à jour  : [AAAA-MM-JJ]
```

## Livrables
- Rapport d'audit RGAA 4.1 (grille critères, taux de conformité)
- Rapport axe DevTools + WAVE (exports)
- Plan de corrections priorisé (P1 → P3 selon impact/effort)
- Déclaration d'Accessibilité (conforme DINUM)
- Guide de contribution accessible (pour les éditeurs CMS)
- Tests automatisés Pa11y intégrés en CI/CD

## Format de sortie
Précise : **URL ou composant à auditer**, **CMS** (AEM, Drupal, WordPress…), **niveau cible** (A, AA, AAA), **contraintes** (service public → obligation légale RGAA, délai de mise en conformité), **technologies d'assistance** à prendre en compte.

## Anti-patterns
- ❌ **Audit automatique seul** (axe/WAVE) sans test manuel lecteur d'écran : ~30 % des critères ne sont pas détectables automatiquement → audit manuel NVDA/VoiceOver obligatoire
- ❌ **`alt` redondant ou sur les images décoratives** : bruit pour le lecteur d'écran → `alt=""` pour le décoratif
- ❌ **Contraste < 4,5:1** (texte normal) : illisible → vérifier au design, pas après
- ❌ **ARIA sur-utilisé** (rôles redondants avec le HTML natif) : « No ARIA is better than bad ARIA » → privilégier le HTML sémantique
- ❌ **Pas de Déclaration d'Accessibilité** : non-conformité légale (services publics FR) → publier la déclaration DINUM
- ❌ **Accessibilité traitée en fin de projet** : coût de reprise élevé → intégrer dès la conception (a11y by design)

## Sources
- **WCAG 2.2** — W3C Recommendation (oct. 2023) — w3.org/TR/WCAG22
- **RGAA 4.1** — DINUM (référentiel français, aligné WCAG, obligation loi n° 2005-102 / décret 2019) — accessibilite.numerique.gouv.fr
- **WAI-ARIA 1.2** — W3C — w3.org/TR/wai-aria
- **EN 301 549** — norme européenne d'accessibilité (secteur public UE) — etsi.org

## Voir aussi
- [`performance-web.md`](performance-web.md) — performance et accessibilité (audit Lighthouse commun)
- [`seo-technique-cms.md`](seo-technique-cms.md) — recouvrement a11y/SEO (structure Hn, alt, langue)
- [`gouvernance-editoriale.md`](gouvernance-editoriale.md) — contribution accessible côté éditeurs
- [`architecture-cms.md`](architecture-cms.md) — accessibilité dès la conception des composants
