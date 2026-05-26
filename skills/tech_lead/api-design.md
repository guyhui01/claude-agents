# Skill — API Design (REST, GraphQL, AsyncAPI)
> Certifications : Postman API Fundamentals Expert (Postman 2024) · AWS DVA-C02 · Google Professional Cloud Developer

## Objectif
Concevoir des APIs lisibles, cohérentes et évolutives : conventions REST, schéma GraphQL, contrat AsyncAPI pour les événements — avec documentation OpenAPI 3.x et stratégie de versioning.

## REST — Conventions de nommage

```
RESSOURCE       URL                              MÉTHODE   DESCRIPTION
────────────    ──────────────────────────────   ───────   ───────────────────────────────
Collection      GET    /api/v1/orders            GET       Lister les commandes
Singleton       GET    /api/v1/orders/{id}       GET       Obtenir une commande
Créer           POST   /api/v1/orders            POST      Créer une commande
Remplacer       PUT    /api/v1/orders/{id}        PUT       Remplacer entièrement
Modifier        PATCH  /api/v1/orders/{id}        PATCH     Modifier partiellement
Supprimer       DELETE /api/v1/orders/{id}        DELETE    Supprimer

Actions         POST   /api/v1/orders/{id}/cancel POST      Action métier (verbe OK)
Sous-ressource  GET    /api/v1/orders/{id}/items  GET       Items d'une commande
```

## OpenAPI 3.1 — Schéma complet

```yaml
openapi: "3.1.0"
info:
  title: Orders API
  version: "1.0.0"
  description: API de gestion des commandes

paths:
  /orders:
    get:
      summary: Lister les commandes
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
          description: Liste paginée de commandes
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

## Codes HTTP — Bonne utilisation

```
SUCCÈS          CODE    CAS D'USAGE
────────────    ─────   ──────────────────────────────
200 OK           200    GET, PUT, PATCH réussis
201 Created      201    POST avec ressource créée (+ Location header)
204 No Content   204    DELETE réussi, PATCH sans corps retourné
206 Partial      206    Range requests (pagination de fichiers)

ERREURS CLIENT
400 Bad Request  400    Corps de requête invalide, validation échouée
401 Unauthorized 401    Non authentifié (pas de token)
403 Forbidden    403    Authentifié mais pas autorisé
404 Not Found    404    Ressource inexistante
409 Conflict     409    Conflit (ex: doublon email)
422 Unprocessable 422   Syntaxe OK mais logique métier invalide
429 Too Many     429    Rate limit atteint

ERREURS SERVEUR
500 Internal     500    Erreur inattendue côté serveur
502 Bad Gateway  502    Backend downstream KO
503 Unavailable  503    Service indisponible (maintenance, surcharge)
```

## GraphQL — Schéma et résolveurs

```typescript
// Schema GraphQL
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

// DataLoader pour éviter le N+1
const userLoader = new DataLoader(async (userIds: string[]) => {
  const users = await User.findAll({ where: { id: userIds } })
  return userIds.map(id => users.find(u => u.id === id))
})
```

## Versioning d'API — Stratégies

```
STRATÉGIE        EXEMPLE                    AVANTAGES               INCONVÉNIENTS
───────────────  ─────────────────────────  ──────────────────────  ────────────────────
URL path         /api/v1/orders             Explicite, cacheable    Duplication de routes
                 /api/v2/orders

Query param      /api/orders?version=2      Facile à tester         Non cacheable proprement

Header           Accept: vnd.api.v2+json    Propre (URL inchangée)  Moins visible/testable

Évolutive        Champs optionnels          Pas de breaking change  Discipline stricte requise
(recommandée)    Déprécation progressive    Rétrocompatible         @deprecated dans schema
```

## Livrables
- Spécification OpenAPI 3.1 (YAML complet)
- Collection Postman / Bruno documentée
- Guide des conventions API du projet
- Stratégie de versioning documentée
- Tests de contrat (Pact ou OpenAPI Validator)

## Format de sortie
Précise : **type d'API** (REST, GraphQL, AsyncAPI/Events), **consommateurs** (frontend SPA, mobile, services tiers), **contraintes** (auth, rate limiting, versionning), **ressources** à exposer, **SLA** (latence max, disponibilité attendue).
