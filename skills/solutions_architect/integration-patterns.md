# Skill — Patterns d'Intégration SI

> Certifications : AWS Solutions Architect Professional (SAP-C02), Google Professional Cloud Architect, AZ-305, TOGAF 10

## Objectif

Sélectionner, concevoir et documenter les patterns d'intégration adaptés à un SI : API Management, Event-Driven Architecture, ESB, microservices, webhooks, ETL/ELT — en évaluant les trade-offs de chaque approche.

## Catalogue des patterns d'intégration

### API Management

```
PATTERN        QUAND L'UTILISER                      OUTILS
─────────────  ────────────────────────────────────  ────────────────────────
REST / OpenAPI Exposer des capacités métier           Apigee, AWS API GW, Azure APIM
GraphQL        Agréger plusieurs sources en 1 appel  Apollo, Hasura
gRPC           Communication inter-services < 10ms   Protobuf, Envoy
WebSocket      Temps réel bidirectionnel             Socket.io, AWS API GW WS
API Gateway    Point d'entrée unique (sécurité, rate) Kong, AWS API GW, Azure APIM
```

### Event-Driven Architecture (EDA)

```
PATTERN             QUAND L'UTILISER                   OUTILS
──────────────────  ────────────────────────────────   ────────────────────────
Message Queue       Découplage asynchrone simple       RabbitMQ, SQS, Azure SB
Event Streaming     Historique événements, replay      Kafka, Kinesis, Event Hub
Pub/Sub             Fan-out vers N consommateurs        GCP Pub/Sub, SNS, EventGrid
Event Sourcing      Audit trail, CQRS                  Kafka + EventStore
SAGA Pattern        Transaction distribuée (microsvcs) Orchestration ou chorégraphie
```

### Intégration applicative (EAI/ESB)

```
PATTERN             QUAND L'UTILISER                   OUTILS
──────────────────  ────────────────────────────────   ────────────────────────
ETL/ELT             Migration et chargement data        dbt, Fivetran, Airbyte
File-based          Échange avec legacy (SFTP, batch)   MFT, WinSCP + scheduler
ESB                 Orchestration complexe legacy       MuleSoft, IBM App Connect
iPaaS               Intégrations SaaS low-code          n8n, Make, Zapier, Boomi
Strangler Fig       Migration progressive d'un monolithe → microservices graduel
Anti-corruption Layer  Isolation d'un système legacy    Façade + traducteur
```

## Grille de choix d'un pattern d'intégration

```
CRITÈRE           SYNCHRONE (API)   ASYNCHRONE (EDA)   BATCH (ETL)
────────────────  ───────────────   ────────────────   ──────────────
Latence requise   < 500ms           Non critique       Tolérant (heures)
Volume            Faible-moyen      Élevé (millions)   Très élevé
Couplage          Fort acceptable   Faible désiré      Indépendant
Ordre garanti     Oui               Configurable       Séquentiel
Complexité        Faible            Moyenne-élevée     Moyenne
Use case type     CRUD, recherche   Notifications, IoT Reporting, migration
```

## Architecture micro-services — Patterns clés

```
PATTERN              PROBLÈME RÉSOLU                    IMPLÉMENTATION
───────────────────  ────────────────────────────────   ──────────────────────
API Gateway          Point d'entrée unique              Kong, AWS API GW
Service Mesh         Observabilité inter-services       Istio, Linkerd
Circuit Breaker      Résilience aux pannes              Resilience4J, Polly
Bulkhead             Isolation des ressources           Pool de threads séparés
Sidecar              Injection fonctionnalités transv.  Envoy, Dapr
Config Server        Centralisation de la config        Spring Cloud Config, Vault
Service Registry     Découverte dynamique des services  Consul, Eureka, K8s DNS
```

## Livrables

- Diagramme d'architecture d'intégration (C4 model ou Archimate)
- Comparatif patterns avec recommendation argumentée
- Spécification technique des interfaces (OpenAPI 3.x, AsyncAPI)
- Plan de migration depuis l'existant (si applicable)
- Guide d'implémentation et de test des intégrations

## Format de sortie

Précise : **systèmes à intégrer** (noms, technologies, volumes), **contraintes** (latence, throughput, legacy), **cloud provider** (AWS / GCP / Azure / on-prem), **budget** (solution open-source vs enterprise).
