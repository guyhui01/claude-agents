# Skill — Architecture d'Entreprise TOGAF ADM

> Certifications : TOGAF 10 Foundation & Practitioner (The Open Group), CITA-A (IASA)

## Objectif

Conduire un cycle TOGAF Architecture Development Method (ADM) complet ou partiel : de la vision architecturale jusqu'à la gouvernance de l'implémentation — pour définir l'architecture cible d'un SI ou d'un domaine métier.

## Les 9 phases du cycle ADM

```
PHASE          NOM                              LIVRABLE CLÉ
─────────────  ──────────────────────────────   ──────────────────────────────────
Préliminaire   Cadre et principes               Principes d'architecture, cadre de gouvernance
A              Vision de l'architecture          Statement of Architecture Work, Architecture Vision
B              Architecture métier               Architecture Business (actuelle + cible)
C              Architecture SI (Apps + Data)     Architecture des systèmes d'information
D              Architecture technique            Architecture technologique
E              Opportunités et solutions         Plan de migration, liste des travaux
F              Planification de la migration     Roadmap d'architecture, plan de mise en œuvre
G              Gouvernance de l'implémentation   Conformité et reporting d'avancement
H              Gestion des changements           Mise à jour de l'architecture
Gestion des    Requirements Management          Traceabilité des exigences (transversale)
exigences
```

## Architecture Vision (Phase A) — Template

```
STATEMENT OF ARCHITECTURE WORK
──────────────────────────────────────────────────────────────
Titre du projet d'architecture : [Nom]
Périmètre                       : [Domaines couverts]
Sponsors                        : [Noms et rôles]
Horizon temporel                : [Court / Moyen / Long terme]

Problème métier à résoudre :
  [Description en 3-5 phrases du problème ou de l'opportunité]

Vision architecturale cible :
  [Description de l'état souhaité en termes métier]

Contraintes majeures :
  - Budget : [montant / budget non défini]
  - Délai : [date cible]
  - Réglementation : [RGPD, AI Act, NIS2, sectoriel]
  - Existant à préserver : [systèmes legacy, contrats, compétences]

Parties prenantes et préoccupations :
  | Stakeholder   | Rôle   | Préoccupation principale      | Viewpoint           |
  |---------------|--------|-------------------------------|---------------------|
  | DSI           | Sponsor | Coût total et délai           | Executive           |
  | Architectes   | Décideur| Cohérence technique           | Architecture        |
  | Métier        | Utilisateur| Continuité de service      | Business            |
  | RSSI          | Partie prenante | Sécurité et conformité | Security          |
```

## Principes d'architecture — Exemples

```
PRINCIPE                          FORMULATION TYPE
────────────────────────────────  ──────────────────────────────────────────────
Réutilisation avant construction  "Préférer les composants existants aux développements spécifiques"
API-first                         "Toute capacité applicative est exposée via API documentée"
Data as a product                 "La donnée est traitée comme un produit avec un owner"
Security by design                "La sécurité est intégrée dès la conception, non ajoutée"
Cloud-first                       "Le cloud public est l'option par défaut sauf contrainte spécifique"
Évolutivité                       "L'architecture doit pouvoir évoluer sans refonte majeure"
Interopérabilité                  "Les composants communiquent via standards ouverts"
```

## Livrables TOGAF par phase

- Architecture Vision (Phase A) : document de vision + principes
- Architecture Métier (Phase B) : diagramme processus As-Is / To-Be
- Architecture SI (Phase C) : cartographie applicative + flux données
- Architecture Technique (Phase D) : stack technologique + infrastructure
- Roadmap d'architecture (Phase F) : plan de migration priorisé
- Architecture Definition Document (ADD) : livrable de synthèse consolidé

## Format de sortie

Précise : **phase ADM ciblée** (A à H), **périmètre** (domaine métier, SI complet, projet), **horizon temporel**, **contraintes spécifiques** (budget, réglementation, legacy), **audience** (CODIR / Architectes / Équipes IT).
