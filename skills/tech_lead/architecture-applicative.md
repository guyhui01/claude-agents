# Skill — Architecture Applicative
> Certifications : AWS Certified Developer Associate (DVA-C02) · Google Professional Cloud Developer · Azure Developer Associate (AZ-204)

## Objectif
Concevoir ou auditer l'architecture d'une application : choisir les patterns adaptés, définir les frontières de composants, documenter avec le modèle C4 — pour garantir scalabilité, maintenabilité et évolutivité.

## Styles architecturaux — Comparatif

```
STYLE                AVANTAGES                        INCONVÉNIENTS             IDÉAL POUR
───────────────────  ───────────────────────────────  ────────────────────────  ───────────────────────
Monolithique         Simple à déployer, debugger       Mise à l'échelle globale  MVP, petite équipe
modulaire            Testing aisé, une seule base      Couplage technologique    Startup < 10 devs

Microservices        Scalabilité indépendante          Complexité opérationnelle Équipes multiples
                     Technologies hétérogènes          Latence réseau, sagaing   > 50 devs, CAC40

Modular Monolith     Déploiement simple                Pas de scaling fin        Croissance maîtrisée
(Majestic Monolith)  Découplage logique interne        Partage de base de données 10-50 devs

Event-Driven         Découplage fort, async            Complexité observabilité  Haute volumétrie
                     Résilience, audit log naturel     Debug difficile           IoT, finance, CMS

Hexagonale           Testabilité maximale              Plus verbeux à coder      Domaine métier riche
(Ports & Adapters)   Indépendance des frameworks       Courbe d'apprentissage    DDD, legacy refacto
```

## Modèle C4 — 4 niveaux de documentation

```
NIVEAU 1 — Contexte (pour tout le monde)
  Box = Système + Personnes externes + Systèmes tiers
  Question : "Qui utilise quoi ?"

NIVEAU 2 — Container (pour les décideurs tech)
  Box = Applications, BDD, APIs, queues, storage
  Question : "Qu'est-ce qui tourne et comment ça communique ?"

NIVEAU 3 — Component (pour les développeurs)
  Box = Modules / packages / namespaces dans un container
  Question : "Comment le code est-il structuré ?"

NIVEAU 4 — Code (auto-générée si besoin)
  Box = Classes, interfaces, fonctions
  Question : "Comment ça marche en détail ?"
```

## Patterns essentiels

```typescript
// CQRS — Séparation lecture / écriture
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
    return this.orderReadModel.findById(query.orderId)  // Vue dénormalisée optimisée lecture
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
# ADR-042 — Adopter CQRS pour le module Commandes

## Statut
Accepté — 2026-05-26

## Contexte
Le module Commandes subit une charge de lecture 10× supérieure à l'écriture.
Les requêtes de lecture complexes impactent les performances d'écriture.

## Décision
Implémenter CQRS : modèle d'écriture normalisé (PostgreSQL) + modèle de lecture
dénormalisé (Redis + Elasticsearch).

## Conséquences
✅ Lectures < 10ms (Redis cache), scalabilité indépendante
⚠️ Eventual consistency (délai de propagation ~100ms)
❌ Complexité accrue : 2 modèles à maintenir, synchronisation événementielle
```

## Livrables
- Diagramme C4 (niveaux 1 et 2 minimum)
- ADR pour chaque décision structurante
- Matrice des patterns applicables (avec justification)
- Plan de migration si refactoring d'une archi existante

## Format de sortie
Précise : **type d'application** (API, web app, temps réel, batch), **contraintes** (charge attendue, équipe, stack existante), **problème spécifique** (scalabilité, maintenabilité, découplage), **horizon** (court terme MVP ou long terme entreprise).
