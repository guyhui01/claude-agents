# Skill — Stratégie de Tests (Pyramide, TDD, BDD)
> Certifications : ISTQB Certified Tester Foundation Level v4.0 · GitHub Certifications

## Objectif
Définir et mettre en place une stratégie de tests complète : pyramide de tests, TDD/BDD, couverture, mutation testing — pour garantir la qualité sans ralentir la vélocité.

## Pyramide de tests

```
          ┌───────────────┐
          │  E2E / UI     │  10%  — Lents, coûteux, fragiles (Playwright, Cypress)
          │   Tests       │         Valident les parcours utilisateur critiques
          ├───────────────┤
          │  Integration  │  30%  — Moyens, testent les contrats entre couches
          │    Tests      │         (API tests, DB, services)
          ├───────────────┤
          │     Unit      │  60%  — Rapides, isolés, grand nombre
          │    Tests      │         (fonctions, classes, composants)
          └───────────────┘

  COÛT       ▲ Élevé       ────────────────────────────▶ Faible
  VITESSE    ▼ Lente       ────────────────────────────▶ Rapide
  ISOLATION  ▼ Faible      ────────────────────────────▶ Forte
```

## TDD — Red / Green / Refactor

```typescript
// 1. RED — Écrire le test qui échoue
describe('OrderService', () => {
  it('should throw when creating order with empty items', async () => {
    const service = new OrderService(mockRepo)
    await expect(service.create({ userId: 'u1', items: [] }))
      .rejects.toThrow('Order must contain at least one item')
  })
})

// 2. GREEN — Implémenter le minimum pour passer
class OrderService {
  async create(dto: CreateOrderDto): Promise<Order> {
    if (dto.items.length === 0) {
      throw new Error('Order must contain at least one item')
    }
    return this.repo.save(Order.from(dto))
  }
}

// 3. REFACTOR — Améliorer sans casser le test
class OrderService {
  async create(dto: CreateOrderDto): Promise<Order> {
    this.validateItems(dto.items)
    return this.repo.save(Order.from(dto))
  }

  private validateItems(items: Item[]): void {
    if (items.length === 0) throw new DomainError('EMPTY_ORDER')
  }
}
```

## BDD — Gherkin + Cucumber

```gherkin
# features/order/create-order.feature
Feature: Création de commande

  Background:
    Given l'utilisateur "alice@example.com" est connecté

  Scenario: Commande valide avec plusieurs articles
    Given le panier contient:
      | produit     | quantité | prix |
      | MacBook Pro | 1        | 2999 |
      | Magic Mouse | 2        | 79   |
    When l'utilisateur confirme la commande
    Then la commande est créée avec le statut "pending"
    And le total est de 3157 euros
    And un email de confirmation est envoyé

  Scenario Outline: Commande invalide
    Given le panier est vide
    When l'utilisateur confirme la commande
    Then une erreur "<message>" est affichée

    Examples:
      | message                              |
      | Le panier ne peut pas être vide      |
```

## Tests E2E — Playwright

```typescript
// tests/e2e/checkout.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Checkout flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products')
    await page.getByTestId('add-to-cart-btn').first().click()
  })

  test('complete purchase with credit card', async ({ page }) => {
    await page.getByRole('link', { name: 'Voir le panier' }).click()
    await page.getByRole('button', { name: 'Commander' }).click()

    // Remplir formulaire paiement
    await page.getByLabel('Numéro de carte').fill('4242424242424242')
    await page.getByLabel('Date expiration').fill('12/28')
    await page.getByLabel('CVV').fill('123')

    await page.getByRole('button', { name: 'Payer' }).click()

    await expect(page.getByRole('heading', { name: 'Commande confirmée' }))
      .toBeVisible({ timeout: 10_000 })
  })
})
```

## Mutation Testing

```bash
# Stryker (JavaScript/TypeScript) — vérifie que les tests détectent les vrais bugs
npx stryker run

# Résultats cibles
# Mutation Score ≥ 80% = bonne couverture effective
# < 60% = les tests passent mais ne détectent pas les régressions
```

## Tableau de bord qualité — Seuils

```
MÉTRIQUE                   SEUIL ACCEPTABLE    SEUIL CIBLE
─────────────────────────  ──────────────────  ────────────
Couverture lignes          > 70%               > 85%
Couverture branches        > 60%               > 80%
Mutation score             > 60%               > 80%
Tests en échec             0                   0
Flaky tests (instables)    < 2%                0%
Durée suite unitaire       < 2 min             < 1 min
Durée suite intégration    < 10 min            < 5 min
```

## Livrables
- Stratégie de tests documentée (pyramide, niveaux, outils)
- Exemples de tests unitaires, intégration et E2E
- Configuration coverage (Istanbul/nyc, JaCoCo)
- Configuration mutation testing (Stryker, PITest)
- Tableau de bord CI/CD (métriques qualité)
- Guide de contribution test (conventions, patterns, AAA)

## Format de sortie
Précise : **stack technique** (TypeScript, Python, Java…), **état actuel** (0 test ou couverture existante), **type de projet** (API, frontend, microservice), **contraintes** (délai, complexité métier), **objectif** (TDD from scratch ou amélioration couverture).
