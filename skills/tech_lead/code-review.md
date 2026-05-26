# Skill — Code Review
> Certifications : ISTQB Certified Tester Foundation Level v4.0 · GitHub Certifications (GitHub 2024)

## Objectif
Conduire des revues de code efficaces : identifier les défauts de logique, de sécurité, de performance et de lisibilité — en fournissant des commentaires constructifs et actionnables.

## Checklist de revue (ordre de priorité)

```
PRIORITÉ 1 — Correctness (bugs potentiels)
  □ La logique est correcte et couvre tous les cas limites
  □ Pas de null pointer / undefined / division par zéro possible
  □ Gestion des erreurs explicite (try/catch, résultats d'erreur)
  □ Concurrence : race conditions, deadlocks (async/await, threads)
  □ Sécurité : SQL injection, XSS, désérialisation non sûre, IDOR

PRIORITÉ 2 — Lisibilité & Maintenabilité
  □ Noms de variables/fonctions expressifs (révèlent l'intention)
  □ Fonctions courtes (< 30 lignes), un seul niveau d'abstraction
  □ Pas de duplication (DRY) — extraire si > 2 occurrences
  □ Commentaires uniquement sur les "pourquoi" non-évidents

PRIORITÉ 3 — Design
  □ Respect des patterns architecturaux du projet
  □ Couplage faible, cohésion forte (SOLID)
  □ Pas d'abstraction prématurée ("You Ain't Gonna Need It")

PRIORITÉ 4 — Performance
  □ Pas de N+1 queries sur les boucles (ORM, DB)
  □ Pas de recalcul inutile en boucle (extraire hors de la boucle)
  □ Structures de données adaptées (Set vs Array pour lookups)

PRIORITÉ 5 — Tests
  □ Couverture des cas nominaux ET des cas d'erreur
  □ Tests lisibles (AAA : Arrange, Act, Assert)
  □ Pas de logique conditionnelle dans les tests
```

## Commentaires de revue — Formulations types

```
NIVEAU      PRÉFIXE        EXEMPLE
──────────  ─────────────  ──────────────────────────────────────────────────────
Bloquant    [MUST]         "[MUST] Null check manquant ligne 42 — NullPointerException possible"
Suggestion  [SUGGEST]      "[SUGGEST] Extraire cette logique dans une méthode privée pour la tester"
Question    [?]            "[?] Pourquoi réouvrir la connexion ici plutôt que de réutiliser le pool ?"
Éloge       [NICE]         "[NICE] Bonne gestion de l'idempotence sur ce endpoint DELETE"
Nit         [NIT]          "[NIT] Nommage : prefetchData → prefetchUserProfile serait plus précis"
```

## Patterns de code à rejeter

```typescript
// ❌ Mauvais — Callback hell + pas de gestion d'erreur
getData(id, (err, data) => {
  processData(data, (err2, result) => {
    saveResult(result, (err3) => { /* ... */ })
  })
})

// ✅ Correct — async/await + gestion d'erreur
async function handleData(id: string): Promise<void> {
  const data = await getData(id)
  const result = await processData(data)
  await saveResult(result)
}

// ❌ Mauvais — N+1 query
const users = await User.findAll()
for (const user of users) {
  user.orders = await Order.findAll({ where: { userId: user.id } })  // N requêtes !
}

// ✅ Correct — Eager loading
const users = await User.findAll({ include: [{ model: Order }] })  // 1 requête avec JOIN
```

## Template de Pull Request

```markdown
## Contexte
[Pourquoi ce changement ? Quel problème résout-il ?]

## Changements
- [Changement 1]
- [Changement 2]

## Tests effectués
- [ ] Tests unitaires ajoutés / mis à jour
- [ ] Tests d'intégration validés
- [ ] Tests manuels (scénarios testés)

## Checklist reviewer
- [ ] Logique correcte et cas limites couverts
- [ ] Sécurité vérifiée (OWASP Top 10)
- [ ] Performance (pas de N+1, pas de boucle coûteuse)
- [ ] Code lisible et bien nommé
```

## Livrables
- Commentaires de revue catégorisés (MUST / SUGGEST / NIT)
- Rapport synthétique (issues bloquantes, tendances qualité)
- Recommandations de refactoring priorisées
- Métriques de qualité code (couverture tests, complexité cyclomatique)

## Format de sortie
Précise : **langage et stack** (TypeScript, Python, Java…), **contexte** (nouvelle feature, bugfix, refactoring), **focus prioritaire** (sécurité, performance, lisibilité), **niveaux souhaités** (MUST uniquement ou revue complète).
