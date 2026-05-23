# Skill — Architecture BDAT (Business / Data / Application / Technology)

> Certifications : TOGAF 10 Foundation & Practitioner, ArchiMate 3 Practitioner, CITA-A (IASA)

## Objectif

Concevoir les 4 couches de l'architecture d'entreprise selon le framework TOGAF : Business, Data, Application et Technology — en assurant la cohérence verticale entre les besoins métier et les choix technologiques.

## Vue d'ensemble BDAT

```
COUCHE        QUESTIONS CLÉ                          LIVRABLES
────────────  ─────────────────────────────────────  ──────────────────────────────────
Business (B)  Quels processus ? Quels acteurs ?       Carte processus, organigramme métier
Data (D)      Quelles données ? Qui les possède ?     Modèle conceptuel, catalogue data
Application   Quels systèmes ? Quelles fonctions ?    Cartographie applicative, flux
(A)
Technology    Quelle infra ? Quelles plateformes ?    Architecture technique, stack
(T)
```

## Couche B — Architecture Métier

```
COMPOSANTS
  Processus métier (BPMN : As-Is → To-Be)
  Domaines fonctionnels (Finance, RH, Ventes, Ops...)
  Acteurs et rôles (humains et systèmes)
  Capacités métier (Business Capability Map)
  Événements déclencheurs (triggers)

LIVRABLES
  → Carte des capacités métier (Business Capability Map)
  → Diagramme de processus BPMN cible
  → Matrice RACI par capacité
```

## Couche D — Architecture Data

```
COMPOSANTS
  Entités de données (clients, produits, contrats...)
  Data ownership (owner par domaine)
  Flux de données (lineage)
  Qualité et gouvernance des données
  Classification (sensibilité : public, interne, confidentiel, secret)

LIVRABLES
  → Modèle conceptuel de données (entités + relations)
  → Catalogue de données (nom, description, owner, qualité)
  → Data flow diagram (DFD) inter-systèmes
  → Politique de rétention et archivage
```

## Couche A — Architecture Applicative

```
COMPOSANTS
  Applications et modules
  Interfaces et APIs
  Flux d'intégration
  Règles de gestion implémentées

LIVRABLES
  → Cartographie applicative (por domaine fonctionnel)
  → Diagramme de contexte (C4 Level 1)
  → Matrice d'intégration (quelle app parle à quelle app)
  → Inventaire APIs exposées / consommées
```

## Couche T — Architecture Technique

```
COMPOSANTS
  Infrastructure (compute, storage, network)
  Plateformes (cloud, on-prem, hybride)
  Middleware (ESB, API GW, message broker)
  Sécurité (IAM, firewalls, chiffrement)
  Observabilité (logs, métriques, traces)

LIVRABLES
  → Schéma d'architecture technique (réseau + composants)
  → Infrastructure as Code (Terraform / Bicep)
  → Matrice flux réseau (ports, protocoles, sens)
  → Architecture de sécurité (zones, DMZ, Zero Trust)
```

## Cohérence BDAT — Check de traçabilité

```
VÉRIFICATION                        QUESTION DE CONFORMITÉ
──────────────────────────────────  ──────────────────────────────────────────────────
B → A : chaque capacité est couverte "Chaque capacité métier est-elle supportée par ≥ 1 app ?"
D → A : chaque donnée a un owner    "Chaque entité de données a-t-elle une application maître ?"
A → T : chaque app a une infra      "Chaque application est-elle hébergée quelque part ?"
T → A : pas d'infra orpheline       "Toute l'infra est-elle rattachée à une application ?"
```

## Livrables

- Architecture BDAT complète (1 diagramme par couche)
- Architecture Definition Document (ADD) consolidé
- Matrice de traçabilité BDAT (conformité croisée)
- Gap analysis As-Is vs To-Be par couche

## Format de sortie

Précise : **couche(s) à couvrir** (B / D / A / T ou toutes), **périmètre** (domaine ou SI complet), **outil de modélisation** disponible (Archimate / PowerPoint / draw.io), **niveau de détail** (vue stratégique / détaillée / opérationnelle).
