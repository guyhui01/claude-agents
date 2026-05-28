# Skill — Product Operating Model (modèle opérationnel produit)

> Certification : PSPO III · SAFe POPM 6 · SAFe SPC
> Agent : AGENT-PRODUCT-MANAGER-SAFE.md

## Objectif
Concevoir et piloter le modèle organisationnel qui permet à une organisation de livrer de la valeur produit de manière continue, autonome et alignée sur la stratégie.

## Composantes du Product Operating Model

### 1. Structure organisationnelle
```
Modèle aligné sur les Value Streams (Marty Cagan / Empowered Teams) :

Product Leader (CPO / VP Product)
├── Product Manager (PO senior) — Value Stream 1
│   ├── Feature Team A (PO + Dev + UX + QA)
│   └── Feature Team B (PO + Dev + UX + QA)
└── Product Manager (PO senior) — Value Stream 2
    ├── Feature Team C
    └── Feature Team D
```

### 2. Modèle de décision produit

| Décision | Niveau | Cadence |
|---|---|---|
| Vision & Strategy | CPO / Product Leader | Annuel / OKR trimestriel |
| Roadmap & Priorités | Product Manager | PI / Trimestriel |
| Scope Sprint | PO | Sprint Planning |
| Détail solution | PO + Dev + UX | Refinement / Daily |

**Principe : push decisions down** — décider au niveau le plus proche de l'information.

### 3. Rythme de discovery et delivery

```
DISCOVERY TRACK          DELIVERY TRACK
─────────────────        ─────────────────
Sprint N-1               Sprint N
[Research utilisateurs]  [Dev feature validée]
[Tests hypothèses]       [QA + Release]
[Proto validation]

→ Discovery toujours 1 sprint en avance sur Delivery
```

### 4. Gouvernance produit

**Instances clés :**
- **Product Council** : alignement vision (mensuel — CPO + PMs)
- **Stakeholder Review** : présentation avancement (bimensuel)
- **OKR Check-in** : mesure des outcomes (hebdo)
- **Sprint Review** : démo et feedback (toutes les 2 semaines)

**KPIs de santé du modèle opérationnel :**
- Time to market (idée → production)
- Taux de fonctionnalités adoptées (> 40%)
- Ratio discovery/delivery (objectif 30/70)
- NPS équipe produit

### 5. Principes du modèle empowered (vs feature factory)

| Feature Factory ❌ | Empowered Product Team ✅ |
|---|---|
| Roadmap = liste de features | Roadmap = outcomes à atteindre |
| PO = proxy des stakeholders | PO = décideur produit |
| Équipe = exécutante | Équipe = créatrice de solutions |
| Succès = livraison on-time | Succès = adoption et valeur |
| Discovery séparé | Discovery intégré dans l'équipe |

## Transition vers un Product Operating Model

### Plan de transformation (12 mois)
```
M1-M3 : Diagnostic & Vision
  → Audit des pratiques actuelles
  → Formation PO/PM aux principes empowered
  → Définition des Value Streams

M4-M6 : Pilote
  → 1-2 équipes en mode empowered
  → OKR produit définis et suivis
  → Discovery track activé

M7-M9 : Scaling
  → Extension à toutes les équipes
  → Product Council opérationnel
  → Métriques de succès définies

M10-M12 : Optimisation
  → Rétrospective du modèle
  → Ajustements organisationnels
  → Partage best practices (CoP)
```
