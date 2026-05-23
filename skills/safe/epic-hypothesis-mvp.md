# Skill — Epic Hypothesis Statement, rôle Epic Owner et MVP/MMF

> Certification : SAFe POPM 6 · SAFe LPM · SAFe SPC
> Agents : AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Objectif

Formuler une hypothèse d'Epic Portfolio claire et testable, identifier le **MVP** qui validera (ou invalidera) l'hypothèse, et décider en fin de MVP s'il faut **pivoter ou persévérer** — en s'appuyant sur le rôle officiel SAFe d'Epic Owner.

> 🔗 Pour la gouvernance Portfolio Kanban + Business/Enabler Epic : voir `portfolio-epics.md`
> 🔗 Pour le Lean Business Case complet : voir `lean-business-case.md`

## Rôle Epic Owner (SAFe officiel)

| Responsabilité | Détail |
|---|---|
| **Définir l'Epic Hypothesis Statement** | Avec les LPM, Architectes Système, PM |
| **Construire le Lean Business Case (LBC)** | Coût, bénéfices attendus, leading indicators |
| **Présenter à la LPM** pour Go/No-Go | Funnel → Reviewing → Analyzing |
| **Définir et piloter le MVP** | Périmètre minimal pour tester l'hypothèse |
| **Coordonner les ART impliqués** | Plusieurs ARTs peuvent contribuer à 1 Epic |
| **Statuer en fin de MVP** : Pivot / Persevere / Stop | Décision data-driven |

> ⚠️ L'Epic Owner n'est **pas** un rôle plein-temps : c'est souvent un PM SAFe, un Architecte ou un Business Owner qui prend cette casquette pour 1 Epic donné (durée 6-18 mois).

---

## Epic Hypothesis Statement — Template SAFe officiel

### Structure canonique

```
FOR              [utilisateurs cibles / segment de marché]
WHO             [énoncé du besoin ou opportunité]
THE              [nom de l'Epic]
IS A             [type de solution / catégorie]
THAT             [bénéfice clé / valeur unique]
UNLIKE          [alternative actuelle / concurrent]
OUR SOLUTION    [différenciation clé]
```

### Exemple — Business Epic

```
FOR              les responsables Marketing PME (50-500 salariés)
WHO             peinent à orchestrer des campagnes multi-canaux faute d'unification data
THE              Customer Data Platform interne
IS A             plateforme de centralisation et segmentation des données clients
THAT             permet de lancer une campagne multi-canal en moins de 30 min
UNLIKE          Salesforce CDP ou Segment (coût + dépendance fournisseur)
OUR SOLUTION    s'intègre nativement à notre écosystème CRM/ERP existant
                avec une gouvernance data conforme RGPD
```

### Hypothèse mesurable associée

```
NOUS CROYONS QUE        [intervention]
PERMETTRA À              [persona]
D'OBTENIR                [outcome attendu, mesurable]
NOUS LE SAURONS QUAND   [leading indicator, seuil, échéance]
```

**Exemple :**
> Nous croyons que la mise en place d'un CDP interne permettra aux responsables Marketing PME d'obtenir une réduction de 60% du temps de lancement de campagne. Nous le saurons quand 80% des utilisateurs du MVP (n=20) lanceront une campagne en moins de 30 min, mesuré à M+3 post-lancement.

---

## MVP vs MMF — Distinction SAFe

| Concept | Définition | Usage SAFe | Quand l'utiliser |
|---|---|---|---|
| **MVP** (Minimum Viable Product) | Plus petit incrément qui permet de **valider/invalider une hypothèse** | Phase **Implementing** d'un Epic (avant Go/No-Go scaling) | Hypothèse incertaine, marché non validé |
| **MMF** (Minimum Marketable Feature) | Plus petit incrément qui peut être **mis sur le marché** et **monétisé** | Phase **Releasing** d'une Feature/Capability mature | Hypothèse déjà validée, on optimise le go-to-market |

> ⚠️ **Erreur classique :** confondre MVP et "v1 du produit". Le MVP doit être **jetable** si l'hypothèse est invalidée.

### Critères d'un bon MVP SAFe

- [ ] **Mesurable** : leading indicators définis avant le build
- [ ] **Limité dans le temps** : 1-3 PIs maximum
- [ ] **Représentatif** : sur 1 segment client réel, pas un POC interne
- [ ] **Décisionnel** : permet un Go/No-Go clair (pas "on verra")
- [ ] **Économiquement raisonnable** : < 20% du LBC total estimé

---

## Cycle Build-Measure-Learn appliqué à l'Epic

```
        ┌──── HYPOTHESIS ────┐
        │                    ▼
   PIVOT/                  BUILD
   PERSEVERE              (MVP)
        ▲                    │
        │                    ▼
        └─── MEASURE ◀── LEARN
             (leading
              indicators)
```

### Phase BUILD (1-3 PIs)

- Définir le scope MVP avec l'Epic Hypothesis Statement
- Splitter l'Epic en Features prioritaires pour le MVP (voir `epic-to-feature-splitting.md`)
- Identifier les Enabler Features nécessaires (infra, data, sécurité)
- Préparer l'instrumentation des leading indicators (analytics, télémetrie)

### Phase MEASURE (durée variable, post-release MVP)

| Leading indicator | Type | Exemple |
|---|---|---|
| **Adoption** | Comportement | % utilisateurs cibles activés |
| **Engagement** | Comportement | Fréquence d'usage, durée session |
| **Outcome métier** | Quantitatif | Réduction temps de cycle, gain CA |
| **Satisfaction** | Qualitatif | NPS, CSAT, interviews ciblées |
| **Coût d'opération** | Économique | Coût par transaction, infra |

### Phase LEARN (atelier 2-4h)

1. Restituer les données vs hypothèse initiale
2. Identifier les insights (attendus + surprises)
3. Documenter ce qui a marché / pas marché
4. Préparer la décision Pivot/Persevere/Stop

---

## Décision Pivot / Persevere / Stop

### Grille de décision

| Donnée constatée | Décision recommandée |
|---|---|
| Hypothèse confirmée + métriques au-delà du seuil | **PERSEVERE** → scaler, ajouter Features post-MVP |
| Hypothèse confirmée mais métriques sous le seuil | **PERSEVERE** avec optimisations ciblées |
| Hypothèse partiellement confirmée, segment différent réagit mieux | **PIVOT** (Segment / Persona) |
| Hypothèse infirmée mais opportunité adjacente découverte | **PIVOT** (Use case / Job-to-be-done) |
| Hypothèse infirmée, pas d'opportunité adjacente | **STOP** (et capitaliser l'apprentissage) |

### Template de note de décision Epic Owner → LPM

```
EPIC : [nom de l'epic]
PHASE : MVP terminée le [date]
PI INVESTI : [nombre de PIs]
COÛT RÉEL : [€] (vs LBC estimé : [€])

HYPOTHÈSE INITIALE : [rappel en 1 ligne]

RÉSULTATS MESURÉS :
  - Leading indicator 1 : [valeur] vs cible [seuil] → [✅/⚠️/❌]
  - Leading indicator 2 : ...

DÉCISION PROPOSÉE : [PIVOT / PERSEVERE / STOP]

JUSTIFICATION (3 lignes max) :
  ...

NEXT STEPS si validé :
  - [Action 1, owner, échéance]
  - [Action 2, owner, échéance]
```

---

## Anti-patterns à éviter

- ❌ Epic Hypothesis sans critère de mesure → "on a fait le MVP, c'est bien"
- ❌ MVP qui dépasse 50% du LBC total → ce n'est plus un MVP, c'est un produit
- ❌ Décision Pivot/Persevere prise sans data, "au feeling"
- ❌ Persévérer sur tous les Epics → la LPM n'arbitre plus, le portfolio explose
- ❌ MVP livré sans instrumentation analytics → impossible de mesurer = décision impossible
- ❌ Epic Owner = simple sponsor passif → doit piloter, pas juste valider

---

## Livrables

- Epic Hypothesis Statement (1 page) signé par Epic Owner + Business Owner
- Plan MVP (scope Features, leading indicators, échéance Go/No-Go)
- Tableau de bord MVP (analytics, leading indicators, mis à jour mensuellement)
- Note de décision Pivot/Persevere/Stop (présentée en LPM)
- Apprentissages capitalisés (wiki Portfolio, même si STOP)

## Format de sortie

Préciser : **niveau Epic** (Business / Enabler), **horizon MVP** (nb de PIs), **leading indicators disponibles**, **ART impliqués**, **stakeholders LPM** (Business Owners, Architects, Epic Owner).
