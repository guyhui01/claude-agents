# Skill — Décomposer une Feature en User Stories (Feature → Story Splitting)

> Certification : SAFe POPM 6 · SAFe SDP · PSPO I
> Agent : AGENT-PO-SAFE.md

## Objectif

Décomposer une **Feature SAFe** (livrable sur 1 PI) en **User Stories** (livrables sur 1 sprint) selon le principe de **vertical slicing** et les critères **INVEST**, en intégrant les **Enabler Stories** nécessaires et les **Acceptance Criteria** au format Gherkin — dans le cadre du PI Planning et des refinements de l'ART.

> 🔗 Pour le split Epic → Feature : voir `epic-to-feature-splitting.md`
> 🔗 Pour la rédaction US standard (hors SAFe) : voir `skills/scrum/po-user-story.md`
> 🔗 Pour la décomposition Scrum équipe pure : voir `skills/scrum/value-decomposition.md`

## Spécificités du splitting en contexte SAFe

| Différence vs Scrum pur | Implication |
|---|---|
| Périmètre PI (10 semaines) | Splits planifiés à **plusieurs sprints d'avance**, pas à la demande |
| ART pluri-équipes | Stories à allouer aux bonnes équipes selon Component / Feature ownership |
| Enabler Stories explicites | Infra, data, sécurité : pas du "bruit", catégorie SAFe à part entière |
| Dépendances inter-équipes | Stories à séquencer selon le **Program Board** |
| System Demo | Stories doivent contribuer à un **incrément démontrable** par PI |

---

## Critères INVEST appliqués SAFe

| Critère | Définition | Particularité SAFe |
|---|---|---|
| **I**ndependent | Indépendante des autres US | Idéal, mais en SAFe les dépendances inter-équipes existent → les tracer sur le Program Board |
| **N**egotiable | Pas un contrat figé | Conversation entre PO + équipe pendant le PI Planning |
| **V**aluable | Apporte de la valeur | Référence au **Benefit Hypothesis de la Feature parente** |
| **E**stimable | Estimable par l'équipe | En story points (Fibonacci) lors du PI Planning + refinements |
| **S**mall | Tient dans 1 sprint | Si > 1 sprint : à re-splitter |
| **T**estable | Critères d'acceptation clairs | Gherkin recommandé, intégré à la System Demo |

---

## Patterns SPIDR appliqués à SAFe

> SPIDR = Spikes / Paths / Interfaces / Data / Rules — méthode de Mike Cohn, particulièrement adaptée au contexte SAFe car elle facilite la **gestion des Enabler Stories** et la **séquentialisation inter-équipes**.

### S — Spikes (exploration séparée de l'implémentation)

Quand une US a trop d'inconnu technique, métier ou UX.

**Exemple — Feature "Recherche produit IA" :**
- Spike : Évaluer 3 modèles d'embeddings (3 jours, output = note + recommandation)
- US : Implémenter la recherche avec le modèle retenu (5 SP)

**Format Spike :**
```
SPIKE — [question à répondre]
TIMEBOX : [3 jours max]
OUTPUT : [note de décision + recommandation + POC jetable]
```

> ⚠️ Le Spike est un **Enabler Story** (Enablement / Exploration) en SAFe.

### P — Paths (chemins utilisateur)

Décomposer une US selon les chemins possibles dans le parcours.

**Exemple — Feature "Checkout e-commerce" :**
- US1 : Checkout avec adresse pré-remplie (utilisateur connecté)
- US2 : Checkout avec saisie d'adresse (utilisateur non connecté)
- US3 : Checkout avec adresse internationale + TVA
- US4 : Checkout avec adresse de livraison ≠ facturation

### I — Interfaces (canaux / devices)

Décomposer selon les interfaces utilisateur.

**Exemple — Feature "Notification commande" :**
- US1 : Notification email (90% des cas)
- US2 : Notification in-app (utilisateurs connectés)
- US3 : Notification SMS (premium)
- US4 : Notification push mobile (app installée)

### D — Data (variations de données)

Décomposer selon la complexité ou les variantes de données.

**Exemple — Feature "Import bordereau livraison" :**
- US1 : Import CSV (format standard)
- US2 : Import Excel multi-onglets
- US3 : Import EDI / XML (partenaires legacy)
- US4 : Import API temps réel (partenaires modernes)

### R — Rules (règles métier)

Décomposer selon la complexité croissante des règles.

**Exemple — Feature "Calcul de remise" :**
- US1 : Remise pourcentage simple (1 produit)
- US2 : Remise par seuil de panier
- US3 : Remise combinée (cumul / non-cumul selon règles)
- US4 : Remise contractuelle B2B (négociée client)

---

## Enabler Stories — Catégorie SAFe officielle

### 4 types d'Enabler Stories

| Type | Définition | Exemple |
|---|---|---|
| **Architectural** | Évolution architecture / patterns | "Migrer le service paiement vers event-driven" |
| **Infrastructure** | Build / config infra, CI/CD | "Provisionner cluster Kubernetes staging" |
| **Exploration (Spike)** | Recherche / POC technique ou produit | "Évaluer 3 librairies de signature électronique" |
| **Compliance** | Conformité / audit / sécurité | "Mettre en place audit logs RGPD" |

### Règles SAFe pour les Enabler Stories

- [ ] Identifiées comme catégorie distincte (label / champ "Story Type = Enabler")
- [ ] Reliées à 1 Feature ou Enabler Feature parente
- [ ] Estimées comme les User Stories
- [ ] Visibles dans la capacité allouée du sprint (12-20% recommandé en mode normal, jusqu'à 40% si refonte)
- [ ] Validées par l'Architecte Système si Architectural / Infrastructure

---

## Acceptance Criteria au format Gherkin

### Template recommandé SAFe

```
GIVEN [contexte initial]
WHEN  [action utilisateur ou système]
THEN  [résultat attendu mesurable]
AND   [vérification additionnelle si nécessaire]
```

### Exemple complet

```
US — Checkout avec adresse pré-remplie (utilisateur connecté)

AC1 — Pré-remplissage automatique
  GIVEN un utilisateur connecté avec une adresse principale enregistrée
  WHEN il accède à l'écran de checkout
  THEN l'adresse principale est pré-remplie dans le formulaire
  AND  les champs sont éditables

AC2 — Validation au submit
  GIVEN un utilisateur sur l'écran checkout avec adresse pré-remplie
  WHEN il clique sur "Valider la commande"
  THEN la commande est créée avec l'adresse affichée
  AND  un email de confirmation est envoyé sous 60 secondes

AC3 — Modification d'adresse
  GIVEN un utilisateur sur l'écran checkout avec adresse pré-remplie
  WHEN il modifie un champ de l'adresse
  THEN seule la commande utilise la nouvelle adresse
  AND  l'adresse principale du profil n'est PAS modifiée
```

### Bénéfice contexte SAFe

- **Automatisation tests** : AC Gherkin = base directe pour Cucumber / SpecFlow / Behave
- **System Demo** : AC servent de script de démo en fin de PI
- **DoD ART** : chaque AC = checkbox de validation
- **Conformité** : AC précis = traçabilité pour audits qualité

---

## Atelier de splitting Feature → Stories (refinement ART)

### Quand le faire

| Moment | Objectif |
|---|---|
| **Pre-PI Planning** (4-2 semaines avant) | Splits initiaux des Features sélectionnées, estimation grossière |
| **PI Planning Day 1** (après le briefing) | Splits affinés avec l'équipe, estimations en story points |
| **Refinement de sprint** | Splits supplémentaires des US trop grosses détectées |
| **System Demo / I&A** | Retour sur la qualité des splits (rétrospective) |

### Déroulement (90 min refinement type)

1. **Rappel Feature + Benefit Hypothesis** (5 min)
2. **Brainstorm patterns SPIDR applicables** (10 min)
3. **Génération de US candidates** (30 min) — Post-its individuels
4. **Tri et regroupement** (15 min) — éliminer doublons, fusionner
5. **Estimation Planning Poker** (20 min) — Fibonacci
6. **Validation INVEST + DoR** (10 min) — checklist pour chaque US

### Sortie

- 5-15 US par Feature, estimées
- Enabler Stories identifiées (Spikes, Infra)
- Dépendances inter-équipes listées (pour Program Board)
- AC Gherkin pour les US les plus prioritaires (M-1 sprint)

---

## Tableau de séquentialisation (Program Board input)

```
| US ID | Feature parente | Équipe owner | Sprint | Dépendances | Status |
|-------|-----------------|--------------|--------|-------------|--------|
| US-12 | F-3 Checkout    | Team Alpha   | S1     | -           | Ready  |
| US-13 | F-3 Checkout    | Team Beta    | S2     | US-12       | Refine |
| US-14 | F-3 Checkout    | Team Alpha   | S2     | API Team    | Refine |
| ...   | ...             | ...          | ...    | ...         | ...    |
```

→ Cette grille alimente directement le **Program Board** lors du PI Planning Day 2.

---

## Anti-patterns spécifiques SAFe

- ❌ **Splits Scrum-only sans visibilité ART** : créer des US sans les rattacher à une Feature SAFe
- ❌ **Oublier les Enabler Stories** : tout en User Story → l'équipe sous-estime la charge tech
- ❌ **AC trop génériques** ("doit marcher", "doit être performant") → non testables, non démontrables
- ❌ **Splits Feature en cascade tardive** : tout splitter pendant le PI Planning Day 1 → débordement
- ❌ **US > 13 SP en planning** : c'est presque toujours mal splitté, à challenger systématiquement
- ❌ **Ignorer les dépendances inter-équipes** au moment du split → Program Board explose

---

## Livrables

- Backlog équipe(s) raffiné, US estimées et ordonnées par sprint
- Liste des Enabler Stories par type (Architectural / Infra / Spike / Compliance)
- AC au format Gherkin pour les US du Sprint 1 du PI
- Tableau dépendances pour input au Program Board
- Compte-rendu d'atelier de refinement

## Format de sortie

Préciser : **Feature source** (avec Benefit Hypothesis), **équipes concernées** (1 ou N), **patterns SPIDR à privilégier** ou "à proposer", **horizon** (refinement sprint / pre-PI Planning), **niveau d'AC** (sketch / Gherkin complet).
