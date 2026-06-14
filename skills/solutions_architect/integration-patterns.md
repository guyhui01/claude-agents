# Skill — IS Integration Patterns

> Certifications: AWS Solutions Architect Professional (SAP-C02), Google Professional Cloud Architect, AZ-305, TOGAF 10

## Objective

Select, design and document the integration patterns suited to an IS: API Management, Event-Driven Architecture, ESB, microservices, webhooks, ETL/ELT — by weighing the trade-offs of each approach.

## Integration pattern catalog

### API Management

```
PATTERN        WHEN TO USE                           TOOLS
─────────────  ────────────────────────────────────  ────────────────────────
REST / OpenAPI Expose business capabilities           Apigee, AWS API GW, Azure APIM
GraphQL        Aggregate several sources in 1 call    Apollo, Hasura
gRPC           Inter-service communication < 10ms     Protobuf, Envoy
WebSocket      Bidirectional real-time                Socket.io, AWS API GW WS
API Gateway    Single entry point (security, rate)    Kong, AWS API GW, Azure APIM
```

### Event-Driven Architecture (EDA)

```
PATTERN             WHEN TO USE                        TOOLS
──────────────────  ────────────────────────────────   ────────────────────────
Message Queue       Simple async decoupling            RabbitMQ, SQS, Azure SB
Event Streaming     Event history, replay              Kafka, Kinesis, Event Hub
Pub/Sub             Fan-out to N consumers             GCP Pub/Sub, SNS, EventGrid
Event Sourcing      Audit trail, CQRS                  Kafka + EventStore
SAGA Pattern        Distributed transaction (microsvcs) Orchestration or choreography
```

### Application integration (EAI/ESB)

```
PATTERN             WHEN TO USE                        TOOLS
──────────────────  ────────────────────────────────   ────────────────────────
ETL/ELT             Data migration and loading          dbt, Fivetran, Airbyte
File-based          Legacy exchange (SFTP, batch)       MFT, WinSCP + scheduler
ESB                 Complex legacy orchestration        MuleSoft, IBM App Connect
iPaaS               Low-code SaaS integrations          n8n, Make, Zapier, Boomi
Strangler Fig       Gradual monolith → microservices migration
Anti-corruption Layer  Isolation of a legacy system     Façade + translator
```

## Integration pattern selection grid

```
CRITERION         SYNCHRONOUS (API)  ASYNCHRONOUS (EDA)  BATCH (ETL)
────────────────  ───────────────   ────────────────   ──────────────
Required latency  < 500ms           Not critical       Tolerant (hours)
Volume            Low-medium        High (millions)    Very high
Coupling          Tight acceptable  Loose desired      Independent
Guaranteed order  Yes               Configurable       Sequential
Complexity        Low               Medium-high        Medium
Typical use case  CRUD, search      Notifications, IoT Reporting, migration
```

## Microservices architecture — Key patterns

```
PATTERN              PROBLEM SOLVED                     IMPLEMENTATION
───────────────────  ────────────────────────────────   ──────────────────────
API Gateway          Single entry point                 Kong, AWS API GW
Service Mesh         Inter-service observability        Istio, Linkerd
Circuit Breaker      Resilience to failures             Resilience4J, Polly
Bulkhead             Resource isolation                 Separate thread pools
Sidecar              Injection of cross-cutting features Envoy, Dapr
Config Server        Configuration centralization       Spring Cloud Config, Vault
Service Registry     Dynamic service discovery          Consul, Eureka, K8s DNS
```

## Deliverables

- Integration architecture diagram (C4 model or ArchiMate)
- Pattern comparison with a reasoned recommendation
- Interface technical specification (OpenAPI 3.x, AsyncAPI)
- Migration plan from the existing setup (if applicable)
- Integration implementation and test guide

## Output format

Specify: **systems to integrate** (names, technologies, volumes), **constraints** (latency, throughput, legacy), **cloud provider** (AWS / GCP / Azure / on-prem), **budget** (open-source vs enterprise solution).
