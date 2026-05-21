# Skill — Pratiques d'Ingénierie Agile (XP)
> Certifications : PSM II · SAFe SSM · ICAgile ICP-ATF

## Objectif
Promouvoir et accompagner l'adoption des pratiques d'ingénierie Agile (XP) qui permettent une livraison continue et de haute qualité.

## Les pratiques XP essentielles

### Test-Driven Development (TDD)
```
Cycle Red → Green → Refactor

1. RED    : Écrire un test qui échoue (pas encore de code)
2. GREEN  : Écrire le minimum de code pour faire passer le test
3. REFACTOR : Améliorer le code sans changer son comportement

Avantages :
  - Design émergent et propre
  - Couverture de tests élevée
  - Confiance pour refactorer
  - Documentation vivante
```

### Pair Programming
```
Driver    → Écrit le code
Navigator → Observe, réfléchit à la stratégie, relit

Variantes :
  - Ping Pong : A écrit le test, B écrit le code, puis inversé
  - Strong Style : pour apprendre une nouvelle technologie
  - Remote : partage d'écran + voix

SM Role : Encourager la pratique, blocker du temps dédié
```

### Continuous Integration / Continuous Delivery
```
CI : Chaque commit déclenche :
  → Tests unitaires (< 5 min)
  → Tests d'intégration
  → Analyse statique (SonarQube, linters)
  → Build de l'artefact

CD : Pipeline déploiement vers :
  → Dev  : automatique sur chaque commit
  → Test : automatique après validation CI
  → Prod : déploiement 1-clic ou automatique

SM Role : Défendre l'investissement en CI/CD, mesurer le DORA
```

### Définition of Done (DoD) technique
```
Une story est Done quand :
  ✅ Code développé et relu (code review)
  ✅ Tests unitaires écrits (couverture > 80%)
  ✅ Tests d'intégration passants
  ✅ Pipeline CI/CD vert
  ✅ Documentation mise à jour
  ✅ Non-régression validée
  ✅ Déployé en environnement de test
  ✅ Validé par le PO
```

## DORA Metrics — métriques de performance DevOps
| Métrique | Elite | High | Medium | Low |
|---|---|---|---|---|
| **Deployment Frequency** | Multiple/jour | 1/semaine | 1/mois | 1/6 mois |
| **Lead Time for Changes** | < 1 heure | 1 jour | 1 semaine | 1 mois |
| **Change Failure Rate** | < 5% | < 10% | 15% | > 15% |
| **MTTR (Recovery)** | < 1 heure | < 1 jour | < 1 semaine | > 1 semaine |

## Gestion de la dette technique

### Matrice impact × effort
```
                Effort faible    Effort élevé
Impact élevé  | Quick wins     | À planifier
Impact faible | Si le temps    | Ignorer
```

### Règle du Boy Scout (Clean Code)
```
"Laisse le code dans un meilleur état que tu l'as trouvé"

SM Role : 
  → Réserver 20% de la capacité sprint pour la dette technique
  → Rendre la dette visible dans le backlog
  → Protéger le temps d'ingénierie
```

## Livrables
- Rapport DORA Metrics (mensuel)
- Plan d'adoption des pratiques XP (trimestre)
- DoD technique co-construite avec l'équipe
- Formation "TDD en pratique" (demi-journée)

## Format de sortie
Précise : stack technique de l'équipe · niveau de maturité CI/CD actuel · principale dette technique · résistances identifiées · objectif DORA cible
