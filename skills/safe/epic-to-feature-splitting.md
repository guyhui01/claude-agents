# Skill — Décomposer un Epic en Features (Epic → Feature Splitting)

> Certification : SAFe POPM 6 · SAFe LPM · SAFe SPC
> Agents : AGENT-PO-SAFE.md · AGENT-PRODUCT-MANAGER-SAFE.md

## Objectif

Décomposer un Portfolio Epic (ou Capability) en **Features livrables sur 1 PI** par l'ART, en respectant les **8 patterns officiels SAFe** de splitting et le principe de **vertical slicing** (chaque Feature livre de la valeur utilisateur de bout en bout).

> 🔗 Pour la formulation d'Epic + MVP : voir `epic-hypothesis-mvp.md`
> 🔗 Pour décomposer Feature → US : voir `feature-to-story-splitting.md`

## Cascade SAFe — Rappel

```
Portfolio Epic (12-24 mois, plusieurs ARTs)
   └── Capability (Large Solution, multi-PI, cross-ART)
         └── Feature (1 PI, 1 ART, livrable de bout en bout)
               └── User Story (1 sprint, 1 équipe)
                     └── Tâches techniques
```

### Définition d'une Feature SAFe

| Critère | Règle |
|---|---|
| **Taille** | Livrable dans **1 PI** (10 semaines max) par 1 ART |
| **Valeur** | Apporte un **Benefit Hypothesis** vérifiable |
| **Vertical** | Traverse toutes les couches (UI → API → data) — pas un layer cake |
| **AC** | A des **Acceptance Criteria** explicites (testables) |
| **Estimable** | Estimée en story points ou T-shirt (au PI Planning) |

---

## Les 8 patterns officiels SAFe de splitting

### Pattern 1 — Workflow Steps (étapes du parcours)

Découper selon les **étapes successives** d'un processus utilisateur.

**Exemple — Epic "Onboarding client B2B" :**
- Feature 1 : Création de compte + KYC
- Feature 2 : Configuration profil entreprise
- Feature 3 : Invitation collaborateurs
- Feature 4 : Activation des modules sélectionnés

**Quand l'utiliser :** processus séquentiel clair, parcours utilisateur identifié.

---

### Pattern 2 — Business Rules Variations

Découper selon la **complexité croissante des règles métier**.

**Exemple — Epic "Calcul tarification dynamique" :**
- Feature 1 : Règle tarifaire simple (1 produit, 1 client type)
- Feature 2 : Règles multi-produits avec remises
- Feature 3 : Règles segmentées (B2B/B2C, géographie)
- Feature 4 : Tarification avec contraintes contractuelles

**Quand l'utiliser :** logique métier complexe, "simple first" applicable.

---

### Pattern 3 — Operations (CRUD)

Découper selon les **opérations atomiques** sur une entité.

**Exemple — Epic "Gestion catalogue produits" :**
- Feature 1 : Consultation catalogue (Read)
- Feature 2 : Création de produits (Create) + workflow validation
- Feature 3 : Modification de produits (Update) + audit trail
- Feature 4 : Archivage / suppression (Delete) + RGPD

**Quand l'utiliser :** entité métier centrale, opérations CRUD bien identifiées.

---

### Pattern 4 — Scenarios / Use Cases

Découper selon les **scénarios utilisateur principaux**.

**Exemple — Epic "Plateforme de paiement B2B" :**
- Feature 1 : Paiement instantané par virement
- Feature 2 : Paiement différé (échéance + relance)
- Feature 3 : Paiement fractionné (3-12 fois)
- Feature 4 : Remboursement et avoirs

**Quand l'utiliser :** plusieurs use cases distincts, indépendants entre eux.

---

### Pattern 5 — Simple First / Complex Later

Découper en **version simple en premier**, raffinements ensuite.

**Exemple — Epic "Tableau de bord analytics" :**
- Feature 1 : Dashboard statique avec 5 KPIs prédéfinis
- Feature 2 : Filtres temporels (jour/semaine/mois/trimestre)
- Feature 3 : Drill-down sur les KPIs
- Feature 4 : Dashboards personnalisables par l'utilisateur

**Quand l'utiliser :** valeur immédiate possible avec une version minimale, raffinements observables.

---

### Pattern 6 — Variations (segments, géographies, devices)

Découper selon les **variantes de contexte d'usage**.

**Exemple — Epic "App mobile commerce" :**
- Feature 1 : Web responsive (toutes plateformes)
- Feature 2 : App native iOS
- Feature 3 : App native Android
- Feature 4 : Watch / wearables

**Quand l'utiliser :** segments ou canaux différents, priorisation par volume utilisateur.

---

### Pattern 7 — Data Variations

Découper selon la **complexité ou le volume de données**.

**Exemple — Epic "Migration data legacy → cloud" :**
- Feature 1 : Migration référentiel produits (volume faible, structure simple)
- Feature 2 : Migration historique commandes (gros volume, schéma stable)
- Feature 3 : Migration historique interactions clients (gros volume, schéma hétérogène)
- Feature 4 : Migration archives juridiques (volume modéré, contraintes RGPD)

**Quand l'utiliser :** données hétérogènes, contraintes de volume ou de qualité.

---

### Pattern 8 — Defer Performance / Quality Attributes

Découper en **livrant la fonction d'abord**, optimisation après.

**Exemple — Epic "Recherche produit IA" :**
- Feature 1 : Recherche fonctionnelle (latence ~5s, batch nocturne)
- Feature 2 : Recherche temps réel (latence < 1s)
- Feature 3 : Recherche avec auto-complétion (latence < 200ms)
- Feature 4 : Recherche personnalisée (RAG + historique)

**Quand l'utiliser :** la fonction a de la valeur même non-optimisée, optimisation = effort distinct.

---

## Template de Feature SAFe (à produire pour chaque split)

```
FEATURE : [nom court, orienté valeur]

BENEFIT HYPOTHESIS :
  Pour [persona]
  Qui [besoin]
  [Cette Feature] livrera [bénéfice mesurable]
  Mesuré par [leading indicator + seuil]

ACCEPTANCE CRITERIA :
  □ AC1 — [critère testable]
  □ AC2 — [critère testable]
  □ AC3 — [critère testable]

NON-FUNCTIONAL REQUIREMENTS (si pertinent) :
  - Performance : [seuil]
  - Sécurité : [exigence]
  - Conformité : [norme]

ESTIMATION : [story points ou T-shirt size]
WSJF : [score] (voir wsjf.md)
DEPENDENCIES : [autres Features, équipes, externes]
ENABLERS NÉCESSAIRES : [Enabler Features ou Stories]
```

---

## Atelier de splitting Epic → Features (Continuous Exploration)

### Préparation

| Élément | Détail |
|---|---|
| **Participants** | Epic Owner, PM SAFe, Architecte Système, Business Owners, 1-2 POs |
| **Durée** | 2-3h (ou 2× 90 min en remote) |
| **Pré-requis** | Epic Hypothesis Statement validé, LBC approuvé |
| **Outils** | Miro / FigJam (template Story Map ou Feature Map) |

### Déroulement (3h)

1. **Rappel Epic Hypothesis + MVP cible** (15 min)
2. **Brainstorm tous les patterns applicables** (30 min) — souvent 2-3 patterns combinés
3. **Génération de Features candidates** (45 min) — Post-its individuels puis mise en commun
4. **Regroupement et tri** (30 min) — élimination des doublons, regroupements
5. **Priorisation pour le MVP** (30 min) — appliquer WSJF ou MoSCoW
6. **Définition du Benefit Hypothesis par Feature MVP** (30 min)
7. **Identification des dépendances et Enablers** (15 min)

### Sortie attendue

- 8-15 Features identifiées, ordonnées par WSJF
- 3-5 Features sélectionnées pour le MVP
- Backlog des Enabler Features
- Liste des dépendances inter-ART ou externes

---

## Combinaisons fréquentes de patterns

| Type d'Epic | Patterns recommandés |
|---|---|
| **Nouveau produit B2C** | Workflow + Simple First + Variations |
| **Refonte applicative** | Operations CRUD + Data Variations + Defer Performance |
| **Plateforme transverse** | Operations + Scenarios + Variations |
| **Migration / décommissionnement** | Data Variations + Workflow + Defer Quality |
| **IA / Machine Learning** | Simple First + Data Variations + Defer Performance |

---

## Anti-patterns à éviter

- ❌ **Layer cake splitting** : "Feature 1 = la DB, Feature 2 = l'API, Feature 3 = l'UI" → aucune valeur livrée avant la fin
- ❌ **Splits trop fins** : 50 Features pour un Epic → c'est déjà du backlog équipe
- ❌ **Pas d'AC sur les Features** : impossible à recetter en System Demo
- ❌ **Ignorer les Enabler Features** : la dette d'infrastructure plombera le PI 2
- ❌ **Splits sans Benefit Hypothesis** : Feature = liste de tâches, pas de la valeur
- ❌ **1 seul pattern pour tout l'Epic** : combiner 2-3 patterns donne presque toujours un meilleur split

---

## Livrables

- Feature Map (Miro / FigJam) avec les 8 patterns affichés
- Backlog Features de l'Epic, ordonnées WSJF, prêt pour Program Backlog
- Fiche Feature standardisée par Feature MVP (Benefit Hypothesis + AC + NFR)
- Tableau dépendances inter-ART / externes
- Compte-rendu d'atelier (décisions, points ouverts)

## Format de sortie

Préciser : **Epic source** (nom + hypothèse), **patterns à privilégier** ou "à proposer", **horizon MVP** (1 PI / 2 PIs), **stakeholders disponibles** (Epic Owner, PM, Architectes), **niveau de détail** (liste Features seule / fiches complètes avec AC).
