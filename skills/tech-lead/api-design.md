# Skill — API Design (REST, GraphQL, AsyncAPI)
> Certifications: Postman API Fundamentals Expert (Postman 2024) · AWS DVA-C02 · Google Professional Cloud Developer

## Objective
Design readable, consistent and evolvable APIs: REST conventions, GraphQL schema, AsyncAPI event contract — with OpenAPI 3.x documentation and a versioning strategy.

## REST — Naming conventions

```
RESOURCE        URL                              METHOD    DESCRIPTION
────────────    ──────────────────────────────   ───────   ───────────────────────────────
Collection      GET    /api/v1/orders            GET       List orders
Singleton       GET    /api/v1/orders/{id}       GET       Get one order
Create          POST   /api/v1/orders            POST      Create an order
Replace         PUT    /api/v1/orders/{id}        PUT       Full replacement
Update          PATCH  /api/v1/orders/{id}        PATCH     Partial update
Delete          DELETE /api/v1/orders/{id}        DELETE    Delete

Actions         POST   /api/v1/orders/{id}/cancel POST      Business action (verb OK)
Sub-resource    GET    /api/v1/orders/{id}/items  GET       Items of an order
```

## OpenAPI 3.1 — Full schema

```yaml
openapi: "3.1.0"
info:
  title: Orders API
  version: "1.0.0"
  description: Order management API

paths:
  /orders:
    get:
      summary: List orders
      tags: [Orders]
      parameters:
        - name: status
          in: query
          schema: { type: string, enum: [pending, confirmed, shipped, delivered] }
        - name: page
          in: query
          schema: { type: integer, default: 1, minimum: 1 }
        - name: limit
          in: query
          schema: { type: integer, default: 20, maximum: 100 }
      responses:
        "200":
          description: Paginated list of orders
          content:
            application/json:
              schema: { $ref: '#/components/schemas/OrderPage' }
        "401": { $ref: '#/components/responses/Unauthorized' }

components:
  schemas:
    Order:
      type: object
      required: [id, userId, status, createdAt]
      properties:
        id:        { type: string, format: uuid }
        userId:    { type: string, format: uuid }
        status:    { type: string, enum: [pending, confirmed, shipped] }
        total:     { type: number, minimum: 0 }
        createdAt: { type: string, format: date-time }
```

## HTTP codes — Proper usage

```
SUCCESS         CODE    USE CASE
────────────    ─────   ──────────────────────────────
200 OK           200    Successful GET, PUT, PATCH
201 Created      201    POST with created resource (+ Location header)
204 No Content   204    Successful DELETE, PATCH with no body returned
206 Partial      206    Range requests (file pagination)

CLIENT ERRORS
400 Bad Request  400    Invalid request body, failed validation
401 Unauthorized 401    Not authenticated (no token)
403 Forbidden    403    Authenticated but not authorized
404 Not Found    404    Nonexistent resource
409 Conflict     409    Conflict (e.g. duplicate email)
422 Unprocessable 422   Valid syntax but invalid business logic
429 Too Many     429    Rate limit reached

SERVER ERRORS
500 Internal     500    Unexpected server-side error
502 Bad Gateway  502    Downstream backend failing
503 Unavailable  503    Service unavailable (maintenance, overload)
```

## GraphQL — Schema and resolvers

```typescript
// GraphQL schema
const typeDefs = gql`
  type Query {
    orders(status: OrderStatus, page: Int, limit: Int): OrderPage!
    order(id: ID!): Order
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    cancelOrder(id: ID!): Order!
  }

  type Subscription {
    orderStatusChanged(userId: ID!): Order!
  }

  type Order {
    id: ID!
    status: OrderStatus!
    items: [OrderItem!]!
    total: Float!
    user: User!
    createdAt: DateTime!
  }

  enum OrderStatus { PENDING CONFIRMED SHIPPED DELIVERED CANCELLED }
`

// DataLoader to avoid N+1
const userLoader = new DataLoader(async (userIds: string[]) => {
  const users = await User.findAll({ where: { id: userIds } })
  return userIds.map(id => users.find(u => u.id === id))
})
```

## API versioning — Strategies

```
STRATEGY         EXAMPLE                    PROS                    CONS
───────────────  ─────────────────────────  ──────────────────────  ────────────────────
URL path         /api/v1/orders             Explicit, cacheable     Route duplication
                 /api/v2/orders

Query param      /api/orders?version=2      Easy to test            Not cleanly cacheable

Header           Accept: vnd.api.v2+json    Clean (URL unchanged)   Less visible/testable

Evolutionary     Optional fields            No breaking change      Strict discipline required
(recommended)    Gradual deprecation        Backward-compatible     @deprecated in schema
```

## Deliverables
- OpenAPI 3.1 specification (full YAML)
- Documented Postman / Bruno collection
- Project API conventions guide
- Documented versioning strategy
- Contract tests (Pact or OpenAPI Validator)

## Output format
Specify: **API type** (REST, GraphQL, AsyncAPI/Events), **consumers** (frontend SPA, mobile, third-party services), **constraints** (auth, rate limiting, versioning), **resources** to expose, **SLA** (max latency, expected availability).
