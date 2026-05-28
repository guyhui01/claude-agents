# Skill — Scaling Product Ownership (PO à l'échelle)

> Certification : PSPO III · SAFe POPM 6
> Agent : AGENT-PRODUCT-MANAGER-SAFE.md

## Objectif
Coordonner la fonction Product Owner sur plusieurs équipes Scrum qui travaillent sur le même produit ou la même plateforme.

## Patterns de Scaling PO

### 1. Chief Product Owner (CPO / PO Proxy)
```
Product Manager (vision, stratégie, priorisation globale)
         │
         ├── PO Team A (Feature Team 1)
         ├── PO Team B (Feature Team 2)
         └── PO Team C (Feature Team 3)
```
- PM = interface stakeholders, priorisation inter-équipes
- PO = raffinage backlog, acceptance, cérémonies de l'équipe

### 2. Area Product Owner (LeSS / Nexus)
```
Product Owner (backlog unique, priorités globales)
         │
         ├── Area PO — Domaine A (délégation partielle)
         ├── Area PO — Domaine B
         └── Area PO — Domaine C
```

### 3. Feature Teams vs Component Teams
```
Feature Team ✅ (recommandé)        Component Team ⚠️
─────────────────────────────        ─────────────────────
Livraison end-to-end d'une feature   Composant technique isolé
Cross-fonctionnelle (UX+Dev+QA)     Silo technique
1 PO par team, backlog propre        Dépendances fortes inter-teams
```

## Coordination multi-équipes

### Backlog multi-équipes — Règles
1. **1 seul Product Backlog** (source de vérité) — pas de silos
2. Les équipes "tirent" les US selon capacité et spécialité
3. DoR commune — validée par tous les POs
4. Refinement conjoint pour les US partagées (hebdo — 60 min)

### PO Sync (cérémonie de coordination)
- Fréquence : hebdomadaire — 30 min
- Participants : tous les POs + Product Manager
- Agenda :
  1. Dépendances bloquantes (10 min)
  2. Priorisation inter-équipes (10 min)
  3. Risques et décisions (10 min)

### Program Board (dépendances visuelles)
```
           TEAM A    TEAM B    TEAM C
Sprint 1  [US-001]  [US-004]  [US-007]
                      ↓ dépend
Sprint 2  [US-002]  [US-005]  [US-008]
           ↓ livré vers
Sprint 3  [US-003]
```

## Défis courants et solutions

| Défi | Solution |
|---|---|
| Priorisation contradictoire entre POs | WSJF + décision escaladée au PM |
| US partagée non raffinée | Refinement conjoint obligatoire avant Sprint N |
| Dette technique ignorée | 20% de capacité réservée systématiquement |
| Stakeholder qui bypass le PO | Processus formalisé + soutien management |
| Vitesse inégale entre équipes | Réallocation temporaire + coaching |

## Métriques de santé du PO scaling

| Métrique | Objectif |
|---|---|
| Dépendances bloquantes / sprint | < 2 |
| Délai moyen de résolution dépendance | < 1 sprint |
| Taux US multi-équipes / total | < 15% |
| Satisfaction des POs (1-10) | > 7 |
