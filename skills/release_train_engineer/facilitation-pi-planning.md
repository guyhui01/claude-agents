# Skill — Préparation et Facilitation du PI Planning
> Certifications : SAFe RTE (Scaled Agile), SAFe SPC (Scaled Agile), SAFe POPM 6 (Scaled Agile)

## Objectif
Préparer et faciliter un PI Planning de bout en bout — agenda, conditions de succès, facilitation des deux jours, Program Board, PI Objectives — pour aligner l'ART sur les priorités business du prochain Program Increment.

## Agenda type PI Planning (2 jours)

```
JOUR 1
──────────────────────────────────────────────────────────
08h30  Accueil, logistique
09h00  Business Context — Product Management (30 min)
09h30  Architecture Vision — System Architect (20 min)
09h50  Development Practices — RTE (10 min)
10h00  ──── BREAK ────
10h15  Team Breakouts #1 — Draft plan Sprint 1-2 (2h)
12h15  ──── DÉJEUNER ────
13h15  Team Breakouts #2 — Draft plan Sprint 3-4 (1h30)
14h45  Draft plan review + identification dépendances (30 min)
15h15  ──── BREAK ────
15h30  Management Review & Problem Solving (1h30)
17h00  RTE brief équipes sur ajustements (30 min)
17h30  Fin Jour 1

JOUR 2
──────────────────────────────────────────────────────────
08h30  Recap Jour 1 — RTE (15 min)
08h45  Team Breakouts #3 — Plan final (2h)
10h45  ──── BREAK ────
11h00  Final Plan Review — Program Board complet (30 min)
11h30  Rédaction PI Objectives par équipe (30 min)
12h00  ──── DÉJEUNER ────
13h00  Présentation PI Objectives — toutes équipes (1h30)
14h30  Vote de confiance (Fist-of-Five) (15 min)
14h45  Risques ART — identification et propriétaires (30 min)
15h15  Rétrospective PI Planning (30 min)
15h45  Clôture — RTE
16h00  Fin PI Planning
```

## Program Board — Template

```
PROGRAM BOARD — PI [N] — [DATE]
──────────────────────────────────────────────────────────────────
           │ Sprint 1 │ Sprint 2 │ Sprint 3 │ Sprint 4 │ Sprint 5 (IP)
───────────────────────────────────────────────────────────────────
Équipe A   │ Feature 1│ Feature 2│ Feature 5│          │ IP
Équipe B   │ Feature 3│ Feature 3│ Feature 6│ Feature 7│ IP
Équipe C   │ Feature 4│          │ Feature 8│ Feature 9│ IP
───────────────────────────────────────────────────────────────────
Milestones │ M1 Sprint│          │          │ M2 Release│
Dépend.    │ ──────────────────► │ ◄────────│           │
Risques    │ 🔴 RGPD  │          │          │           │

LÉGENDE DÉPENDANCES : ──► Équipe A fourni à Équipe B
```

## PI Objectives — Template par équipe

```yaml
pi_objectives:
  equipe: "Équipe Alpha"
  pi: "PI-12"
  
  business_objectives:
    - id: "BO-01"
      description: "Livrer la Feature F1 — Module scoring IA"
      business_value: 10  # Noté par le Business Owner (1-10)
      stretch: false
      
    - id: "BO-02"
      description: "Intégrer l'API externe de données clients"
      business_value: 8
      stretch: false
      
    - id: "BO-03" 
      description: "Prototype Feature F5 si capacité disponible"
      business_value: 6
      stretch: true
      
  stretch_objectives:
    - "F5 — Prototype dashboard analytics"
```

## Conditions de succès PI Planning

```
PRÉ-REQUIS (J-4 semaines)
────────────────────────────────────────────────────────────
☐ Vision produit mise à jour (Product Management)
☐ Top 10 Features priorisées et affinées (Product Management)
☐ Architecture Vision documentée (System Architect)
☐ Capacity planning par équipe (Scrum Masters)
☐ Salle configurée (physique ou virtual)
☐ Outils PI Planning prêts (Jira Align, Miro, Teams)

RÔLE DU RTE PENDANT LE PI PLANNING
────────────────────────────────────────────────────────────
✓ Faciliter les transitions et les timings
✓ Capturer les dépendances inter-équipes sur le Program Board
✓ Faciliter la Management Review (blocages, arbitrages)
✓ Gérer les escalades et les décisions en temps réel
✓ Animer le vote Fist-of-Five final
```

## Livrables
- Agenda PI Planning complet
- Program Board configuré (physique / Miro)
- PI Objectives de chaque équipe (YAML / Jira)
- ROAM log des risques ART
- Résultats Fist-of-Five documentés

## Format de sortie
Précise : nombre d'équipes dans l'ART, format (présentiel / distanciel / hybride), outils utilisés (Jira, Miro, Teams), durée du PI (10 semaines standard).
