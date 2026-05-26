# Skill — Gestion de la Dette Technique
> Certifications : ISTQB FL v4.0 · GitHub Certifications · AWS DVA-C02

## Objectif
Identifier, prioriser et résorber la dette technique : audit de code, classification (intentionnelle vs accidentelle), plan de refactoring progressif — pour maintenir la vélocité de l'équipe dans la durée.

## Taxonomy de la dette technique

```
TYPE                   DESCRIPTION                                EXEMPLES
─────────────────────  ─────────────────────────────────────────  ────────────────────────────────
Intentionnelle         Compromis délibéré pour livrer vite       "On reviendra sur les tests après"
consciente             (décision documentée)                      → OK si tracée + deadline fixée

Intentionnelle         Compromis délibéré mais oublié             Code "temporaire" de 2022 encore là
inconsciente           (décision non documentée)                  → Dangereux : personne n'ose toucher

Accidentelle           Erreur ou manque de connaissance           Copier/coller massif, pattern dépassé
prudente               de bonne foi                               → Former l'équipe, corriger au fil de l'eau

Accidentelle           Négligence ou rush permanent               Code sans tests, pas de reviews
imprudente             sans conscience du problème               → Alerte critique, ralentira l'équipe
```

## Audit de la dette — Signaux d'alerte

```
SIGNAL                              OUTIL                    SEUIL D'ALERTE
──────────────────────────────────  ─────────────────────    ──────────────────────────────
Complexité cyclomatique élevée      SonarQube, Complexity    > 10 par fonction = refactoring requis
Méthodes trop longues               SonarQube, ESLint        > 30 lignes par méthode
Code dupliqué                       SonarQube (Duplication)  > 3% de duplication
Dépendances obsolètes               npm audit, Dependabot    CVE critique ou > 2 ans sans update
Couverture de tests faible          Jest, JaCoCo             < 60% = zone à risque
TODO/FIXME non résolus              grep TODO | wc -l        > 50 = backlog caché
Temps de build croissant            Métriques CI/CD          > 15% de croissance mensuelle
```

## Technical Radar — Priorisation

```
PRIORITÉ  CATÉGORIE           CRITÈRES                          ACTION
────────  ──────────────────  ────────────────────────────────  ─────────────────────────────
P1        Critique            CVE connue, blocage fonctionnel   Corriger en sprint courant
          (rouge)             Risque de sécurité élevé

P2        Important           Ralentit l'équipe > 20%           Planifier en sprint dédié (Refacto Sprint)
          (orange)            Complexité > 15, 0 tests          1 sprint par trimestre

P3        À surveiller        Duplication, nommage confus       Corriger lors du passage (Boy Scout Rule)
          (jaune)             TODO tracés                       Chaque PR améliore un peu

P4        Cosmétique          Style, conventions mineures       Automatiser (lint, formatter)
          (vert)              Formatting inconsistant           Régler la config, ne plus y toucher
```

## Règle du Boy Scout

> "Laisse le code dans un état légèrement meilleur que tu ne l'as trouvé."

```typescript
// Avant (code trouvé) — Complexité élevée, nommage flou
function p(d: any[], f: any) {
  let r = []
  for(let i=0;i<d.length;i++){
    if(d[i].s === 1 && f(d[i])) r.push(d[i])
  }
  return r
}

// Après (code laissé) — Lisible, typé, fonctionnel
function filterActiveItems<T extends { status: number }>(
  items: T[],
  predicate: (item: T) => boolean
): T[] {
  return items.filter(item => item.status === 1 && predicate(item))
}
```

## Plan de refactoring — Template

```markdown
## Dette technique — Sprint Refacto Q3 2026

### Objectif
Réduire la complexité cyclomatique du module Orders de 18 à < 10
et augmenter la couverture de tests de 45% à 75%.

### Items priorisés
| # | Fichier | Problème | Effort | Impact |
|---|---------|---------|--------|--------|
| 1 | order.service.ts | CC = 22, méthode de 120 lignes | 3 jours | Élevé |
| 2 | payment.controller.ts | 0 tests, 3 CVE dépendances | 2 jours | Critique |
| 3 | utils/helpers.ts | 40% duplication avec cart/helpers | 1 jour | Moyen |

### Critères de succès
- [ ] CC moyen module < 10 (SonarQube)
- [ ] Couverture > 75% (Jest)
- [ ] 0 CVE critique (npm audit)
- [ ] Temps de build stable (± 5%)
```

## Livrables
- Rapport d'audit de dette (SonarQube export + analyse)
- Technical Radar priorisé (P1→P4)
- Plan de refactoring (sprints, effort, critères)
- Dashboard dette (tendances : complexité, couverture, deps)
- Guide Boy Scout Rule pour l'équipe

## Format de sortie
Précise : **stack et taille du codebase** (LOC, ancienneté), **symptômes observés** (vélocité en baisse, bugs fréquents, onboarding lent), **contraintes** (time-box refactoring, feature freeze possible ?), **objectif** (quick wins vs plan long terme).
