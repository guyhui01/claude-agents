# Brief — WF-002 — Delivery SAFe PI-01 · Prévalistest Assurances

> Workflow : `WF-002-delivery-safe.md`
> Secteur : Assurance · Client fictif : Prévalistest Assurances
> Continuité de : `workflows/use_cases/WF-001-uc01-sinistres-assurance-ia.md`

---

## Commande de lancement

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-002 depuis workflows/WF-002-delivery-safe.md.

CONTEXTE ART
──────────────────────────────────────────────────
Nom ART            : ART Sinistres IA — Prévalistest Assurances
Secteur            : Assurance IARD (Auto, Habitation)
Nombre d'équipes   : 2 squads Scrum
                     - Squad Alpha : Déclaration IA & UX (3 dev · 1 PO · 1 SM)
                     - Squad Beta  : Conformité & Back-office (2 dev · 1 PO partagé · 1 SM)
Durée PI           : 10 semaines — 4 sprints de 2 semaines + IP Sprint
Numéro PI actuel   : PI-01
Capacité ART       : ~80 story points / PI (40 SP/squad)
Vélocité historique: Pas d'historique — PI-01 (première livraison)

Features à planifier (issues du cadrage WF-001) :
  - FEAT-A : Parcours déclaration guidée IA (EP-01 — WSJF 2,0 — 13 SP)
  - FEAT-B : Upload et gestion documentaire (EP-02 — WSJF 3,2 — 5 SP)
  - FEAT-C : Notification statut dossier (EP-03 — WSJF 3,3 — 5 SP)
  - FEAT-D : Consentement RGPD + log AI Act (EP-04 — WSJF 6,8 — 8 SP)
  - FEAT-E : Intégration SI legacy AS/400 (Enabler — architecture)

Dépendances        : - API REST SI legacy AS/400 (à confirmer avec équipe IT legacy)
                     - Prestataire NLP (moteur questions adaptatives) — contrat à signer
                     - DPO Prévalistest (validation consentement RGPD avant sprint 1)

Contraintes        : - AI Act Article 6 : consentement + logs IA obligatoires dès le MVP
                     - Livraison MVP : fin Sprint 3 (semaine 6)
                     - Budget PI-01 : 150 k€ (équipe + infra cloud)
                     - Gel de code interdit avant System Demo Sprint 2

Langue livrables   : Français

Lance STEP-01 avec AGENT-PRODUCT-MANAGER-SAFE.
```

---

## Contexte client

Suite directe du cadrage WF-001. Prévalistest Assurances a validé le backlog initial (10 US · 4 Épics · WSJF calculé). L'équipe passe en mode delivery SAFe pour le PI-01 avec 2 squads. L'enjeu principal est de livrer la conformité AI Act (FEAT-D, WSJF #1) dès Sprint 1 et le parcours déclaration IA (FEAT-A) pour le MVP Sprint 3.

---

## Objectif du test

Valider que WF-002 produit :
- Un PI Planning cohérent avec les features issues de WF-001
- Un Program Board avec dépendances AS/400 et NLP visibles
- Des PI Objectives SMART par squad
- Un reporting CODIR adapté au contexte mutuelle régionale
- La gestion du risque ROAM sur la dépendance SI legacy

---

## Statut

- [x] Brief rédigé
- [ ] Workflow exécuté
- [ ] Output évalué
- [ ] Promu en use case ? [oui/non]
