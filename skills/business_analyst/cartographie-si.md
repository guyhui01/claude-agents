# Skill — Cartographie du SI (Urbanisme & Enterprise Architecture)

> Certifications : **TOGAF 10** (The Open Group 2022) · **ArchiMate 3** (OpenCA) · **IIBA CBAP** · ISO/IEC/IEEE 42010:2022
> Agent : AGENT-BUSINESS-ANALYST.md

## Objectif

Documenter, analyser et faire évoluer le système d'information existant via les référentiels d'**Enterprise Architecture** normés (TOGAF 10 ADM, ArchiMate 3.2, C4 Model) afin d'**urbaniser** durablement le SI : identifier les impacts projet, rationaliser le portefeuille applicatif, alimenter le schéma directeur, sécuriser les décisions build/buy/migrate.

## Cadre BABOK v3 (IIBA 2015) — Knowledge Areas mobilisées

| KA BABOK v3 | Tâches typiques cartographie SI |
|---|---|
| **#2 Business Analysis Planning & Monitoring** | T2.1 Plan BA Approach · T2.5 Plan Stakeholder Engagement · T2.6 Plan Governance Approach |
| **#9 Strategy Analysis** | T9.1 Analyze Current State · T9.2 Define Future State · T9.3 Assess Risks · T9.4 Define Change Strategy |
| **Perspective Information Technology** | Cartographie applicative · Référentiels EA · Patterns d'intégration · APM |

## TOGAF 10 ADM — 8 phases du cycle d'architecture (The Open Group 2022)

| Phase | Objectif | Livrable cartographie |
|:---:|---|---|
| **Prelim.** | Établir capacité architecture + tailoring framework | Charte EA, Architecture Capability |
| **A — Vision** | Définir vision business + scope + parties prenantes | Statement of Architecture Work, Vision Diagram |
| **B — Business** | Cartographier processus, organisations, fonctions, services métier | Business Architecture (cf. [modelisation-processus.md](modelisation-processus.md)) |
| **C — IS Architecture** | Data Architecture + Application Architecture | **Cartographie applicative AS-IS + TO-BE**, matrice CRUD données↔applis |
| **D — Technology** | Plateformes, infrastructures, hébergement | Technology Architecture (réseau, cloud, serveurs) |
| **E — Opportunities & Solutions** | Identifier work packages, contraintes, gaps | Gap Analysis, Migration Plan candidats |
| **F — Migration Planning** | Roadmap priorisée transition | Implementation & Migration Plan, Transition Architectures |
| **G — Implementation Gov.** | Pilotage architectural projet par projet | Architecture Contract, Compliance Reviews |
| **H — Change Management** | Gestion changements EA post-mise en œuvre | Requests for Architecture Change |

**Architecture Content Framework** : 21 livrables types + 4 Architecture Domains (Business/Data/Application/Technology = BDAT) + 4 Reference Models (TRM Technical Reference Model · III-RM Integrated Information Infrastructure RM).

## ArchiMate 3.2 (The Open Group 2023, ISO/IEC 19770) — 7 couches officielles

| Couche | Périmètre | Éléments clés |
|---|---|---|
| **Strategy** | Capacités stratégiques | Capability · Resource · Course of Action · Value Stream |
| **Business** | Acteurs, processus, services, contrats | Business Actor/Role · Process · Service · Object · Contract |
| **Application** | Applications, composants, services applicatifs | Application Component/Service · Data Object · Interface · Function |
| **Technology** | Plateformes, nœuds, infrastructure logique | Node · Device · System Software · Network · Communication Path |
| **Physical** | Équipements physiques, matériels | Equipment · Facility · Distribution Network · Material |
| **Motivation** | Drivers, goals, requirements, contraintes | Stakeholder · Driver · Goal · Outcome · Principle · Requirement · Constraint |
| **Implementation & Migration** | Programmes, gaps, plateaux | Work Package · Deliverable · Plateau · Gap |

**Relations standardisées** : Composition · Aggregation · Assignment · Realization · Used By · Serving · Triggering · Flow · Association · Influence (cf. spec ArchiMate 3.2 §5).

## C4 Model (Simon Brown 2018) — zoom applicatif complémentaire

| Niveau | Cible | Quand utiliser |
|:---:|---|---|
| **C1 — System Context** | Système + utilisateurs + systèmes externes | Vue d'entrée parties prenantes non techniques |
| **C2 — Container** | Conteneurs (apps, BDD, microservices, file system) | Architecture solution, choix techno |
| **C3 — Component** | Composants internes d'un container | Conception détaillée, ownership équipe |
| **C4 — Code** | Classes, fonctions (généralement diagrammes auto-générés) | Rarement utile à ce niveau de granularité |

Complémentarité : **ArchiMate** = vue large EA multi-domaines · **C4** = zoom application individuelle. Ne pas mélanger les deux dans un même diagramme.

## 5 niveaux d'urbanisme SI (Longépé 2009)

```
Niveau 1 — Métier         → Processus, acteurs, événements, objets métier
Niveau 2 — Fonctionnel    → Blocs fonctionnels, services métier (PAS — Plan d'Architecture Stratégique)
Niveau 3 — Applicatif     → Applications, modules, flux applicatifs
Niveau 4 — Technique      → Serveurs, middleware, BDD, conteneurs
Niveau 5 — Infrastructure → Réseau, datacenter, cloud, sécurité physique
```

**Règle d'or urbanisme** (Longépé) : **un bloc fonctionnel = une seule application principale**. Toute redondance fonctionnelle est un dossier d'urbanisme à instruire (rationalisation candidate).

## Inventaire applicatif & APM Gartner (Application Portfolio Management)

### Attributs critiques par application (CMDB / référentiel APM)

| Attribut | Exemple |
|---|---|
| Identifiant unique | `APP-CRM-001` |
| Nom fonctionnel + technique | "CRM Ventes B2B" / Salesforce Sales Cloud |
| Éditeur / version | Salesforce / Spring '24 |
| Criticité métier | Vital · Important · Standard · Faible |
| Propriétaire métier / DSI | Direction Commerciale / DSI Front-Office |
| Cycle de vie | Build / Run / Sunset / Decommissioned |
| Coût annuel (TCO) | Licences + RUN + évolutions |
| Technologie | SaaS · COTS · Custom · Legacy |
| Conformité (RGPD, AI Act, sectoriel) | Statut + DPIA si applicable |

### Méthode TIME APM (Gartner) — pour chaque application, 4 décisions stratégiques

| Catégorie | Critère | Action |
|:---:|---|---|
| **T**olerate | Stable, ROI neutre, pas de risque | Maintenir RUN minimal |
| **I**nvest | Valeur business forte, croissance attendue | Enrichir, évoluer |
| **M**igrate | Obsolescence technique, alternative existe | Plan de migration |
| **E**liminate | Redondante, obsolète, sans valeur | Décommissionnement |

## Matrice d'échanges (flux) — patterns d'intégration

| Source | Destination | Données | Protocole | Fréquence | Criticité | Pattern |
|---|---|---|---|---|---|---|
| CRM | ERP | Commandes client | API REST | Temps réel | Vital | API Gateway |
| ERP | BI | Données ventes | Batch CSV nightly | J+1 | Standard | ETL / Data Pipeline |
| Portail Client | OSS | Demandes d'activation | Event (Kafka) | Temps réel | Vital | Event Streaming |
| Billing | DWH | Factures détaillées | CDC (Change Data Capture) | 15 min | Important | CDC / Streaming |
| RH | Annuaire AD | Comptes utilisateurs | LDAP / SCIM | Temps réel | Vital | Identity Provisioning |

**5 patterns d'intégration** (Hohpe & Woolf 2003, *Enterprise Integration Patterns*) :
- **Point-à-point** : ≤ 5 systèmes, sinon explosion combinatoire (N(N-1)/2)
- **Hub & Spoke / ESB** (Enterprise Service Bus) : Mule ESB, Tibco, Software AG webMethods
- **iPaaS** (Integration Platform as a Service) : MuleSoft Anypoint, Boomi, Talend, Workato, Zapier
- **API Gateway** : Kong, Apigee, AWS API Gateway, Azure APIM — orchestration microservices
- **Event Streaming** : Apache Kafka, Confluent, AWS Kinesis, Azure Event Hubs — Event-Driven Architecture

## Analyse d'impact SI (méthode BABOK Strategy Analysis)

1. **Périmètre projet** : applications directement modifiées (ajout/évolution/suppression fonctionnalité)
2. **Cercle 1 — Impact direct** : applications dont le code/config/schéma change
3. **Cercle 2 — Impact indirect** : applications consommatrices (flux entrant) ou productrices (flux sortant) impactées par changement contrat d'interface
4. **Cercle 3 — Impact transverse** : socle (auth, logging, monitoring, search), data lake, BI consolidée
5. **Cotation impact** : Majeur (refonte code) · Mineur (config + tests régression) · Surveillance (monitoring renforcé sans intervention)
6. **RACI projet** par application impactée : Responsible · Accountable · Consulted · Informed
7. **Tests d'intégration** à prévoir : matrice scénarios × applications × volumétrie + non-régression

## Schéma directeur SI (Master Plan) 3-5 ans

| Volet | Contenu |
|---|---|
| **Vision cible** | Architecture TO-BE alignée stratégie business + capabilities futures |
| **Roadmap évolutions** | Programmes pluriannuels (build, intégration, migration) |
| **Rationalisation** | Décommissionnements priorisés (TIME-Eliminate), fusion redondances |
| **Build / Buy / SaaS** | Critères de décision (souveraineté, TCO, time-to-market, criticité) |
| **Migration cloud** | 6R AWS (Retire, Retain, Repurchase, Rehost, Replatform, Refactor) |
| **Souveraineté & conformité** | SecNumCloud (ANSSI), CSPN, DORA banque, NIS2, AI Act, RGPD |
| **Gouvernance EA** | Comité d'architecture, RACI décisions, Architecture Review Board |

## Exemple chiffré sectoriel — Opérateur télécom européen multi-pays

**Contexte anonymisé** : opérateur télécom européen présent dans 25+ pays B2C/B2B (~250M clients), SI hérité de fusions/acquisitions successives sur 20 ans, mission cartographie 18 mois sur périmètre France + 4 pays pilotes.

**Périmètre cartographié** :
- **412 applications** identifiées (objectif : exhaustivité ≥ 95%) répartis en 5 domaines **TM Forum eTOM** : Customer Domain (78) · Product Domain (61) · Service Domain (94 — OSS) · Resource Domain (112 — réseau/infra) · Enterprise Domain (67 — RH/Finance/Achats)
- **Référentiel TM Forum** appliqué : eTOM (Business Process Framework) + SID (Shared Information Data) + TAM (Telecom Application Map) — référentiel sectoriel datant 2001, version 23.5 (2023)
- **3 250 flux applicatifs** inventoriés (Source → Cible × pattern × criticité)

**Modélisation ArchiMate 3.2** :
- Couche Business : 47 processus eTOM Level 3 modélisés
- Couche Application : 412 Application Components + 184 Application Services (API publiées)
- Couche Technology : 89 Nodes (datacenters + cloud AWS/Azure + edge)
- Couche Motivation : 12 Drivers stratégiques (5G rollout, cloudification, fin du cuivre, conformité DORA)

**Diagnostic TIME APM** :

| Catégorie | Nombre apps | % portefeuille | Action |
|:---:|:---:|:---:|---|
| Tolerate | 162 | 39% | Maintien RUN, budget figé |
| Invest | 98 | 24% | Modernisation, enrichissement digital |
| Migrate | 96 | 23% | Plan migration cloud / SaaS / décommissionnement progressif |
| Eliminate | 56 | 14% | Décommissionnement immédiat (12 mois) |

**Identification redondances** : **64 doublons fonctionnels** détectés (ex. 4 outils de ticketing différents hérités fusions, 3 self-care client par pays, 5 systèmes d'inventaire réseau) — règle d'or Longépé non respectée historiquement.

**Plan de rationalisation 5 ans** :
- Décommissionnement 56 apps Eliminate (T+12 mois) — économie OPEX **8.2 M€/an**
- Migration 96 apps Migrate vers SaaS/cloud (T+24-48 mois) — réduction TCO **~30%**
- Fusion 22 doublons fonctionnels (T+36 mois) — sécurité données + simplification flux
- Investissement 98 apps Invest (T+12-60 mois) — accélération digital + observabilité

**Gains mesurés post-POC 18 mois** (périmètre pilote 5 pays) :
- Time-to-market projet : 9 mois → 5 mois (impact analysis automatisée via repository ArchiMate)
- Couverture observabilité : 45% → 88% des flux critiques instrumentés
- Réduction incidents inter-applications : -42% (cartographie flux + APM proactif)
- Conformité DORA : 100% des applications critiques identifiées et documentées (échéance janvier 2025 respectée)
- ROI cartographie : **18 mois** (économie OPEX rationalisation > coût programme EA)

## 8 anti-patterns cartographie SI

- ❌ **Cartographie mono-niveau** : ne modéliser que l'applicatif sans relier au métier/technique → perte d'alignement stratégique, schéma directeur déconnecté
- ❌ **Zoom prématuré** : démarrer par diagrammes détaillés (C4 niveau 3) avant cadrage Context (C1) → effort gaspillé, parties prenantes perdues
- ❌ **Format propriétaire fermé** : choisir un outil sans support BPMN-XML / ArchiMate-XMI / Open Group Exchange Format → enfermement éditeur, impossibilité d'audit externe
- ❌ **Obsolescence non gouvernée** : cartographie figée post-projet, pas de processus de mise à jour (Change Management TOGAF Phase H absent) → modèle mort en 6 mois
- ❌ **ArchiMate sans légende ni couches** : diagrammes lisibles uniquement par l'auteur → adoption nulle parties prenantes métier
- ❌ **Flux temps réel ignorés** : matrice limitée aux batchs nightly, pas de représentation Event Streaming / CDC → SI réel mal compris (45% des flux modernes invisibles)
- ❌ **Schéma directeur déconnecté business** : roadmap technique sans capability map alignée stratégie → DSI vue comme cost-center, pas comme partenaire
- ❌ **Cloud non modélisé** : ArchiMate Technology Layer figé "on-prem" alors que 40% des charges sont SaaS/IaaS → invisibilité TCO réel et risques souveraineté

## Outils

**Modeleurs EA gratuits / open source** : Archi (Open Group, gratuit, ArchiMate natif) · draw.io / diagrams.net (générique) · PlantUML (C4 + UML scriptable)

**Modeleurs EA enterprise** : Sparx Enterprise Architect · Visual Paradigm · BiZZdesign Enterprise Studio (ArchiMate natif) · MEGA HOPEX · Avolution ABACUS

**Plateformes APM / EA cloud** : LeanIX (SAP) · Ardoq · Mega HOPEX · Software AG ARIS Aris · ServiceNow APM (intégré CMDB)

**iPaaS / EAI / API Management** : MuleSoft Anypoint · Boomi · Talend · Workato · Kong · Apigee · AWS API Gateway · Azure APIM

**Event Streaming** : Apache Kafka · Confluent Cloud · AWS Kinesis · Azure Event Hubs · RabbitMQ (messaging)

## Livrables

- **Cartographie applicative AS-IS** (ArchiMate 3.2 + format export XMI/CSV)
- **Cartographie cible TO-BE** (3-5 ans) avec Plateaux intermédiaires
- **Inventaire applicatif APM** (CMDB enrichi 9-15 attributs + cotation TIME)
- **Matrice des flux** (3 colonnes minimum : Source / Cible / Données + pattern d'intégration)
- **Gap Analysis** AS-IS / TO-BE (TOGAF Phase E)
- **Schéma directeur SI** 3-5 ans avec roadmap rationalisation + budget OPEX/CAPEX
- **Analyse d'impact projet** (3 cercles + RACI applications + plan tests intégration)
- **Architecture Decision Records (ADR)** datés et tracés (cf. Nygard 2011)

## Format de sortie

Pour chaque mission cartographie, précise :
- **Périmètre** : domaines métier (Customer/Product/Service/Resource/Enterprise — eTOM si télécom) · pays/BU concernés · cycles de vie (in scope / hors scope)
- **Profondeur cible** : macro (~Niveau 2 fonctionnel) · détaillée (~Niveau 3 applicatif) · approfondie (~Niveau 4 technique)
- **Objectif** : analyse d'impact projet (3-6 mois) · schéma directeur (12-18 mois) · rationalisation portefeuille (24-36 mois) · conformité réglementaire (DORA, NIS2, AI Act)
- **Référentiels mobilisés** : TOGAF 10 ADM phases (lesquelles) · ArchiMate 3.2 couches (lesquelles) · C4 Model (niveaux) · sectoriels (TM Forum eTOM télécom · BIAN banque · ACORD assurance · HL7 santé)

## Sources

- **TOGAF Standard, 10th Edition** — The Open Group (2022) — https://www.opengroup.org/togaf
- **ArchiMate 3.2 Specification** — The Open Group (2023, OpenCA) — https://www.opengroup.org/archimate
- **ISO/IEC/IEEE 42010:2022** — Software, systems and enterprise — Architecture description
- **Zachman Framework 3.0** — John Zachman (2011) — *The Concise Definition of The Zachman Framework*
- **C4 Model** — Simon Brown (2018) — *The C4 model for visualising software architecture* — https://c4model.com
- **Longépé Christophe** — *Le projet d'urbanisation du SI* (Dunod, 4ème éd. 2009)
- **Hohpe G., Woolf B.** — *Enterprise Integration Patterns* (Addison-Wesley 2003)
- **Nygard Michael T.** — *Documenting Architecture Decisions* (ADR pattern, 2011)
- **BABOK Guide v3** — IIBA (2015), KA #2 Planning + KA #9 Strategy Analysis + Perspective IT
- **TM Forum Frameworx** — eTOM + SID + TAM v23.5 (2023) — https://www.tmforum.org/oda
- **APM Gartner** — *IT Application Portfolio Management* (Gartner Research, méthode TIME 2010+)

## Voir aussi

- [modelisation-processus.md](modelisation-processus.md) — BPMN/UML pour zoom sur processus métier modélisés en couche Business ArchiMate
- [elicitation-besoins.md](elicitation-besoins.md) — collecte besoins en amont de Strategy Analysis (TOGAF Phase A)
- [analyse-impact.md](analyse-impact.md) — analyse d'impact projet, articulation TOGAF Phase E + Strategy Analysis BABOK
- [gestion-exigences.md](gestion-exigences.md) — traçabilité exigences ↔ Application Components ArchiMate
- [`../scrum/po-backlog.md`](../scrum/po-backlog.md) — alimentation backlog projet depuis Gap Analysis EA
- [`../change_manager/strategie-adoption.md`](../change_manager/strategie-adoption.md) — pilotage transformation post-cartographie (Kotter, PROSCI, ADKAR)
