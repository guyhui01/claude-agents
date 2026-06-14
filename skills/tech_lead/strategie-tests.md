# Skill — Test Strategy (Pyramid, TDD, BDD)
> Certifications: ISTQB Certified Tester Foundation Level v4.0 · GitHub Certifications

## Objective
Define and roll out a complete test strategy: test pyramid, TDD/BDD, coverage, mutation testing — to guarantee quality without slowing velocity down.

## Test pyramid

```
          ┌───────────────┐
          │  E2E / UI     │  10%  — Slow, costly, brittle (Playwright, Cypress)
          │   Tests       │         Validate critical user journeys
          ├───────────────┤
          │  Integration  │  30%  — Medium, test contracts between layers
          │    Tests      │         (API tests, DB, services)
          ├───────────────┤
          │     Unit      │  60%  — Fast, isolated, large numbers
          │    Tests      │         (functions, classes, components)
          └───────────────┘

  COST       ▲ High        ────────────────────────────▶ Low
  SPEED      ▼ Slow        ────────────────────────────▶ Fast
  ISOLATION  ▼ Low         ────────────────────────────▶ Strong
```

## TDD — Red / Green / Refactor

```typescript
// 1. RED — Write the failing test
describe('OrderService', () => {
  it('should throw when creating order with empty items', async () => {
    const service = new OrderService(mockRepo)
    await expect(service.create({ userId: 'u1', items: [] }))
      .rejects.toThrow('Order must contain at least one item')
  })
})

// 2. GREEN — Implement the minimum to pass
class OrderService {
  async create(dto: CreateOrderDto): Promise<Order> {
    if (dto.items.length === 0) {
      throw new Error('Order must contain at least one item')
    }
    return this.repo.save(Order.from(dto))
  }
}

// 3. REFACTOR — Improve without breaking the test
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
Feature: Order creation

  Background:
    Given the user "alice@example.com" is logged in

  Scenario: Valid order with several items
    Given the cart contains:
      | product     | quantity | price |
      | MacBook Pro | 1        | 2999  |
      | Magic Mouse | 2        | 79    |
    When the user confirms the order
    Then the order is created with status "pending"
    And the total is 3157 euros
    And a confirmation email is sent

  Scenario Outline: Invalid order
    Given the cart is empty
    When the user confirms the order
    Then an error "<message>" is displayed

    Examples:
      | message                    |
      | The cart cannot be empty   |
```

## E2E tests — Playwright

```typescript
// tests/e2e/checkout.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Checkout flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products')
    await page.getByTestId('add-to-cart-btn').first().click()
  })

  test('complete purchase with credit card', async ({ page }) => {
    await page.getByRole('link', { name: 'View cart' }).click()
    await page.getByRole('button', { name: 'Checkout' }).click()

    // Fill in the payment form
    await page.getByLabel('Card number').fill('4242424242424242')
    await page.getByLabel('Expiry date').fill('12/28')
    await page.getByLabel('CVV').fill('123')

    await page.getByRole('button', { name: 'Pay' }).click()

    await expect(page.getByRole('heading', { name: 'Order confirmed' }))
      .toBeVisible({ timeout: 10_000 })
  })
})
```

## Mutation Testing

```bash
# Stryker (JavaScript/TypeScript) — checks that tests catch real bugs
npx stryker run

# Target results
# Mutation Score ≥ 80% = good effective coverage
# < 60% = tests pass but do not catch regressions
```

## Quality dashboard — Thresholds

```
METRIC                     ACCEPTABLE THRESHOLD  TARGET THRESHOLD
─────────────────────────  ──────────────────  ────────────
Line coverage              > 70%               > 85%
Branch coverage            > 60%               > 80%
Mutation score             > 60%               > 80%
Failing tests              0                   0
Flaky tests (unstable)     < 2%                0%
Unit suite duration        < 2 min             < 1 min
Integration suite duration < 10 min            < 5 min
```

## Deliverables
- Documented test strategy (pyramid, levels, tools)
- Sample unit, integration and E2E tests
- Coverage configuration (Istanbul/nyc, JaCoCo)
- Mutation testing configuration (Stryker, PITest)
- CI/CD dashboard (quality metrics)
- Test contribution guide (conventions, patterns, AAA)

## Output format
Specify: **technical stack** (TypeScript, Python, Java…), **current state** (0 tests or existing coverage), **project type** (API, frontend, microservice), **constraints** (deadline, business complexity), **goal** (TDD from scratch or coverage improvement).
