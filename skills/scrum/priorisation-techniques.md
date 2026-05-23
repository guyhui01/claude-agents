# Skill — Techniques de priorisation du Product Backlog

> Certification : PSPO II · PSPO III · ICAgile ICP-APO
> Agent : AGENT-PO-SCRUM.md

## Objectif

Choisir et appliquer la bonne technique de priorisation selon le contexte (early stage, mature, multi-stakeholders, contrainte budgétaire, produit IA…) pour maximiser la valeur livrée à chaque sprint, en s'appuyant sur des critères objectifs et défendables auprès des stakeholders.

## Grille de choix rapide

| Contexte | Technique recommandée | Pourquoi |
|---|---|---|
| Release à scope contraint (échéance fixe) | **MoSCoW** | Communicable, négociable, traçable |
| Comparaison data-driven entre features | **RICE** | Quantifié, ROI implicite |
| Satisfaction client (qualité perçue) | **Kano** | Différencie basique / performance / excitateur |
| Backlog explosé, arbitrage rapide | **Value vs Effort** | 2×2 visuel, atelier 30 min |
| Atelier multi-stakeholders divergents | **Buy a Feature** | Engageant, révèle les vraies priorités |
| Vote collégial budgété | **100$ test** | Force les trade-offs |
| Identification d'opportunités sous-servies | **Opportunity Scoring** | Importance × Insatisfaction |
| Contexte SAFe (Programme, ART) | **WSJF** → AGENT-PO-SAFE.md | Hors périmètre Scrum équipe |

---

## 1. MoSCoW — Must / Should / Could / Won't

### Définition opérationnelle des 4 niveaux

| Niveau | Critère objectif | Action |
|---|---|---|
| **Must Have** | Sans cela, la release est un échec (conformité, contrat, valeur cœur) | Sprint en cours / locked |
| **Should Have** | Important, mais contournable (workaround acceptable) | Prochain sprint |
| **Could Have** | Apporte de la valeur si capacité disponible | Backlog moyen terme |
| **Won't Have (this time)** | Reconnu utile, mais explicitement exclu du périmètre actuel | Roadmap future / refusé |

### Règle d'or des Must Have

> Les **Must** ne doivent pas dépasser **60% de la capacité** de la release.
> Sinon : la priorisation n'a pas eu lieu — tout est "critique" = rien n'est critique.

### Template de décision MoSCoW (1 ligne par feature)

```
[Feature] : [niveau]
Justification : [pourquoi ce niveau, en 1 phrase]
Conséquence si non livré : [impact métier ou utilisateur]
Workaround acceptable : [oui / non + lequel]
```

### Pièges à éviter

- ❌ Tout mettre en Must → c'est une liste de vœux, pas une priorisation
- ❌ Mettre en Won't ce qui ne sera "jamais" fait → utiliser un statut "Rejected"
- ❌ MoSCoW figé pour 6 mois → ré-évaluer à chaque refinement

---

## 2. RICE — Reach × Impact × Confidence / Effort

### Formule

```
Score RICE = (Reach × Impact × Confidence) / Effort
```

### Échelles standard

| Critère | Échelle | Définition |
|---|---|---|
| **Reach** | Nombre d'utilisateurs / trimestre | Combien de personnes touchées sur une période ? |
| **Impact** | 0.25 / 0.5 / 1 / 2 / 3 | Minimal / Bas / Moyen / Fort / Massif par utilisateur touché |
| **Confidence** | 50% / 80% / 100% | Confiance dans les estimations Reach + Impact |
| **Effort** | Person-months | Coût équipe estimé |

### Exemple chiffré

```
Feature A — Onboarding redesign
Reach = 2000 users/trim · Impact = 2 · Confidence = 80% · Effort = 3 PM
Score = (2000 × 2 × 0.8) / 3 = 1067

Feature B — Export PDF
Reach = 500 users/trim · Impact = 1 · Confidence = 100% · Effort = 1 PM
Score = (500 × 1 × 1) / 1 = 500

→ Prioriser A (1067 > 500)
```

### Quand l'utiliser
- Backlog > 20 items avec données d'usage disponibles
- Stakeholders demandant une justification quantifiée
- Comparaison entre features hétérogènes

---

## 3. Modèle de Kano — Qualité perçue

### 5 catégories de satisfaction utilisateur

| Catégorie | Description | Exemple SaaS B2B |
|---|---|---|
| **Must-Be (basique)** | Absence = forte insatisfaction, présence = neutre | SSO fonctionnel, export CSV |
| **Performance (linéaire)** | Plus c'est bon, plus la satisfaction monte | Vitesse de chargement |
| **Excitement (attractif)** | Absence = neutre, présence = forte satisfaction (effet "wow") | Assistant IA contextuel |
| **Indifferent** | Aucun impact sur la satisfaction | Skin de couleur changeable |
| **Reverse** | Présence = insatisfaction (ex : trop d'options) | Notifications par défaut activées |

### Méthode de questionnaire Kano

Pour chaque feature, poser 2 questions à 5+ utilisateurs :
- **Fonctionnelle** : "Comment te sentirais-tu si cette feature était présente ?"
- **Dysfonctionnelle** : "Comment te sentirais-tu si elle était absente ?"

→ Réponses (J'aimerais / Doit être / Neutre / Tolère / N'aime pas) → matrice de catégorisation.

### Règles de priorisation Kano

1. Tous les **Must-Be** doivent être implémentés (hygiène)
2. Maximiser les **Performance** dans la limite des ressources
3. Sélectionner 1-2 **Excitement** par release (différenciation)
4. Ignorer ou supprimer les **Indifferent** et **Reverse**

---

## 4. Value vs Effort Matrix (2×2)

### Construction

```
       ▲ Valeur élevée
       │
   QUICK WINS    │   BIG BETS
   (Faire vite)  │   (Planifier)
   ──────────────┼──────────────────▶ Effort élevé
   FILL-INS      │   MONEY PITS
   (Si capa)     │   (À éviter)
       │
       ▼ Valeur faible
```

### Atelier 30 min

1. Lister 15-30 items du backlog sur post-its (5 min)
2. Placement collectif valeur perçue × effort estimé (15 min)
3. Décision quadrant par quadrant (10 min) :
   - Quick Wins → top du backlog
   - Big Bets → analyser ROI avant
   - Fill-Ins → réservoir d'opportunité
   - Money Pits → fermer ou retirer

---

## 5. Buy a Feature — Atelier collaboratif

### Principe

Donner un "budget" fictif aux stakeholders pour qu'ils "achètent" les features qu'ils veulent.

### Préparation

- 15-20 features avec prix proposé (proportionnel à l'effort)
- Budget par participant = ~40-60% du budget total nécessaire
- Forcer la collaboration (certaines features doivent être achetées à plusieurs)

### Déroulement (60-90 min)

1. Pitch rapide de chaque feature par le PO (2 min/feature)
2. Phase d'achat individuelle (15 min)
3. Phase de négociation et regroupement (30 min)
4. Synthèse : ce qui est acheté = prioritaire

### Valeur

Révèle les **vraies priorités stakeholders** (pas le "tout est important") + crée de l'alignement par la négociation directe.

---

## 6. 100$ Test — Vote budgété

Distribuer 100$ (fictifs) à chaque stakeholder à répartir sur N features.

### Variantes
- **Standard** : 100$ par stakeholder, lecture des totaux
- **Pondéré** : budgets différents selon poids stakeholder (CEO=200$, métier=100$, support=50$)
- **Anti-spam** : maximum 30$ par feature (force la diversification)

### Avantages
- Rapide (15 min)
- Forces les trade-offs (budget limité)
- Données quantitatives par stakeholder

---

## 7. Opportunity Scoring (Outcome-Driven Innovation)

### Formule

```
Opportunity Score = Importance + max(Importance - Satisfaction, 0)
```

### Méthode

1. Identifier les "outcomes" (résultats que l'utilisateur cherche, pas les features)
2. Pour chaque outcome, mesurer :
   - **Importance** (1-10) : à quel point est-ce important ?
   - **Satisfaction** (1-10) : à quel point es-tu satisfait aujourd'hui ?
3. Calculer le score → opportunities = haute importance + faible satisfaction

### Interprétation

| Score | Lecture |
|---|---|
| > 15 | Opportunité majeure (sous-servie) |
| 12-15 | Opportunité significative |
| 10-12 | À surveiller |
| < 10 | Saturé (over-served) ou peu important |

---

## Anti-patterns transversaux

- ❌ Choisir une seule technique pour toujours → adapter au contexte
- ❌ Priorisation sans critères explicites → "feeling PO" indéfendable
- ❌ Priorisation sans données utilisateur → biais HiPPO (Highest Paid Person's Opinion)
- ❌ Ignorer la dette technique dans la priorisation → bombe à retardement
- ❌ Re-prioriser à chaque demande stakeholder → instabilité d'équipe

## Livrables types

- Backlog priorisé avec score / catégorie par technique utilisée
- Compte-rendu d'atelier (Buy a Feature, 100$ test) avec photos / captures Miro
- Note de cadrage de la méthode choisie + critères (pour défense stakeholder)
- Roadmap découlant de la priorisation (Now / Next / Later)

## Format de sortie

Préciser : **technique souhaitée** (MoSCoW / RICE / Kano / Value-Effort / Buy a Feature / 100$ / Opportunity Scoring), **liste des items à prioriser**, **stakeholders impliqués**, **contraintes** (échéance, budget, équipe), **données disponibles** (usage, NPS, interviews).
