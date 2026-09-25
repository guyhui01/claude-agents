# Skill — Application Architecture
> Certifications: AWS Certified Developer Associate (DVA-C02) · Google Professional Cloud Developer · Azure Developer Associate (AZ-204)

## Objective
Design or audit an application's architecture: pick the right patterns, define component boundaries, document with the C4 model — to guarantee scalability, maintainability and evolvability.

## Architectural styles — Comparison

```
STYLE                PROS                             CONS                      BEST FOR
───────────────────  ───────────────────────────────  ────────────────────────  ───────────────────────
Modular              Simple to deploy, debug           Global scaling            MVP, small team
monolith             Easy testing, single codebase     Technology coupling       Startup < 10 devs

Microservices        Independent scalability           Operational complexity    Multiple teams
                     Heterogeneous technologies        Network latency, sagas    > 50 devs, CAC40

Modular Monolith     Simple deployment                 No fine-grained scaling   Controlled growth
(Majestic Monolith)  Internal logical decoupling       Shared database           10-50 devs

Event-Driven         Strong decoupling, async          Observability complexity  High volume
                     Resilience, natural audit log     Hard to debug             IoT, finance, CMS

Hexagonal            Maximum testability               More verbose to code      Rich business domain
(Ports & Adapters)   Framework independence            Learning curve            DDD, legacy refactoring
```

## C4 model — 4 documentation levels

```
LEVEL 1 — Context (for everyone)
  Box = System + External people + Third-party systems
  Question: "Who uses what?"

LEVEL 2 — Container (for technical decision-makers)
  Box = Applications, DBs, APIs, queues, storage
  Question: "What is running and how does it communicate?"

LEVEL 3 — Component (for developers)
  Box = Modules / packages / namespaces within a container
  Question: "How is the code structured?"

LEVEL 4 — Code (auto-generated if needed)
  Box = Classes, interfaces, functions
  Question: "How does it work in detail?"
```

## Essential patterns

```typescript
// CQRS — Read / write separation
interface CreateOrderCommand { userId: string; items: Item[] }
interface GetOrderQuery      { orderId: string }

class OrderCommandHandler {
  async handle(cmd: CreateOrderCommand): Promise<string> {
    const order = Order.create(cmd.userId, cmd.items)
    await this.orderRepo.save(order)
    await this.eventBus.publish(new OrderCreated(order.id))
    return order.id
  }
}

class OrderQueryHandler {
  async handle(query: GetOrderQuery): Promise<OrderView> {
    return this.orderReadModel.findById(query.orderId)  // Denormalized, read-optimized view
  }
}

// Repository Pattern
interface OrderRepository {
  save(order: Order): Promise<void>
  findById(id: string): Promise<Order | null>
  findByUser(userId: string): Promise<Order[]>
}
```

## ADR — Architecture Decision Record

```markdown
# ADR-042 — Adopt CQRS for the Orders module

## Status
Accepted — 2026-05-26

## Context
The Orders module takes a read load 10× higher than its write load.
Complex read queries degrade write performance.

## Decision
Implement CQRS: normalized write model (PostgreSQL) + denormalized read
model (Redis + Elasticsearch).

## Consequences
✅ Reads < 10ms (Redis cache), independent scalability
⚠️ Eventual consistency (propagation lag ~100ms)
❌ Increased complexity: 2 models to maintain, event-based synchronization
```

## Deliverables
- C4 diagram (levels 1 and 2 minimum)
- ADR for each structuring decision
- Matrix of applicable patterns (with rationale)
- Migration plan when refactoring an existing architecture

## Output format
Specify: **application type** (API, web app, real-time, batch), **constraints** (expected load, team, existing stack), **specific problem** (scalability, maintainability, decoupling), **horizon** (short-term MVP or long-term enterprise).
