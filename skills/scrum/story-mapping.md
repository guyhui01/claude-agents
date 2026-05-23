# Skill — User Story Mapping (méthode Jeff Patton)

> Certification : PSPO II · PSU-I · ICAgile ICP-APO
> Agent : AGENT-PO-SCRUM.md

## Objectif

Construire un Story Map collaboratif qui révèle le **parcours utilisateur complet** (axe horizontal = activités) et permet de **découper le MVP et les releases** (axe vertical = priorité), pour aligner équipe + stakeholders sur la valeur livrée à chaque incrément.

## Quand utiliser le Story Mapping

| Situation | Adapté ? |
|---|---|
| Découverte d'un nouveau produit / module | ✅ Indispensable |
| Identifier le MVP d'une refonte | ✅ Très adapté |
| Onboarding d'une nouvelle équipe sur le produit | ✅ Excellent outil pédagogique |
| Alignement métier + tech + UX | ✅ Crée un langage commun |
| Backlog à prioriser sur une seule feature | ❌ Trop lourd, préférer Value/Effort |
| Bug fixing ou dette technique pure | ❌ Pas le bon outil |

## Théorie en 3 minutes (Jeff Patton)

Le backlog plat est un mensonge : il perd la **narrative utilisateur**. Le Story Map restaure la structure :
- **Axe horizontal (Backbone)** : raconte l'histoire utilisateur, gauche → droite, dans l'ordre chronologique d'usage
- **Axe vertical** : décompose chaque activité en tâches/stories, du plus essentiel (haut) au plus optionnel (bas)
- **Lignes horizontales = releases** : tranches successives livrables, chacune un parcours utilisateur complet

> *"Cut the cake horizontally, not vertically."* — Jeff Patton

---

## Préparation de l'atelier

### Logistique

| Paramètre | Présentiel | Remote |
|---|---|---|
| Durée | 2-4 h | 2 × 90 min (avec pause) |
| Participants | 5-9 (PO, dev, QA, UX, métier) | Idem, max 7-8 pour rester gérable |
| Matériel | Mur ou tableau, post-its 4 couleurs, marqueurs | Miro / FigJam / Mural |
| Pré-requis | Personas validés, vision produit alignée | Idem |

### Code couleur recommandé

| Couleur | Utilisation |
|---|---|
| 🟧 Orange | Activités utilisateur (Backbone) |
| 🟦 Bleu | Tâches utilisateur (sous-étapes) |
| 🟨 Jaune | User Stories |
| 🟩 Vert | Annotations métier / business value |
| 🟥 Rouge | Risques, dépendances, questions ouvertes |

---

## Méthode pas à pas (6 étapes)

### Étape 1 — Définir l'utilisateur et son objectif (15 min)

```
PERSONA cible      : [Sophie, responsable marketing PME]
OBJECTIF principal : [Lancer une campagne email en moins de 30 min]
CONTEXTE d'usage   : [Depuis bureau, 1× par semaine, parfois sous pression]
```

> 💡 Si plusieurs personas → faire un Story Map par persona ou différencier par couleur.

### Étape 2 — Identifier les activités utilisateur — le Backbone (30 min)

Question clé : *"Que fait l'utilisateur, dans quel ordre, pour atteindre son objectif ?"*

Exemple e-commerce :

```
[Découvrir]→[Choisir]→[Acheter]→[Recevoir]→[Évaluer]→[Réutiliser]
```

Règles :
- Verbes d'action utilisateur (pas de "le système…")
- Granularité gros grain (5-10 activités max)
- Ordre chronologique typique

### Étape 3 — Décomposer en tâches utilisateur (45 min)

Pour chaque activité, lister les tâches concrètes :

```
[Acheter]
   ├── Mettre au panier
   ├── Saisir adresse livraison
   ├── Choisir mode de paiement
   ├── Valider commande
   └── Recevoir confirmation
```

### Étape 4 — Détailler en User Stories (60 min)

Sous chaque tâche, lister les stories possibles, **de la plus essentielle (haut) à l'enrichissement (bas)** :

```
[Choisir mode de paiement]
   ├── 🟨 US01 — Payer par carte bancaire (essentiel)
   ├── 🟨 US02 — Payer par PayPal
   ├── 🟨 US03 — Sauvegarder ma carte pour réutilisation
   ├── 🟨 US04 — Payer en 3 fois
   └── 🟨 US05 — Payer en cryptomonnaie (nice-to-have)
```

### Étape 5 — Tracer le Walking Skeleton (MVP) (30 min)

Tirer une **ligne horizontale** sous le minimum nécessaire pour que l'utilisateur **complète tout son parcours** :

```
Backbone :   [Découvrir]   [Choisir]   [Acheter]   [Recevoir]
             ─────────────────────────────────────────────────────
WALKING       US 1 essent.  US 2 essent. US 3 essent. US 4 essent.   ← Walking Skeleton (MVP)
SKELETON     ─────────────────────────────────────────────────────
             US 5          US 6         US 7         US 8           ← Release 2
             US 9          US 10        US 11        US 12          ← Release 3
```

> ⚠️ Le MVP = parcours **complet de bout en bout**, pas une feature isolée. C'est l'erreur n°1 du Story Mapping.

### Étape 6 — Définir les releases (30 min)

Tirer 2-3 lignes supplémentaires pour les itérations suivantes :

| Release | Objectif | Outcome attendu |
|---|---|---|
| **R1 (MVP)** | Parcours utilisable de bout en bout | Validation hypothèse principale |
| **R2** | Enrichissement valeur | Augmentation adoption / NPS |
| **R3** | Optimisation et différenciation | Rétention, monétisation, wow effect |

---

## Template visuel ASCII complet

```
                  ┌──────────── BACKBONE (Activités) ─────────────┐
                  ▼              ▼              ▼              ▼
                  Découvrir    Choisir       Acheter      Recevoir
                  ──────────────────────────────────────────────────
TÂCHES utilisateur   Chercher    Filtrer        Payer       Tracker
                     Comparer    Configurer     Confirmer   Recevoir
                  ──────────────────────────────────────────────────
🚶 WALKING SKELETON  US essent.  US essent.    US essent.   US essent.
                  ──────────────────────────────────────────────────
📦 RELEASE 1 (MVP)   …           …             …            …
                  ──────────────────────────────────────────────────
📦 RELEASE 2         US enrich.  US enrich.    US enrich.   US enrich.
                  ──────────────────────────────────────────────────
📦 RELEASE 3         US wow      US wow        US wow       US wow
```

---

## Atelier remote (Miro / FigJam / Mural)

### Template Miro recommandé

1. Frame principal "Story Map" (5000 × 2500 px)
2. Sticky notes orange en haut (Backbone) — taille L
3. Sticky notes bleus sous chaque activité (Tâches) — taille M
4. Sticky notes jaunes empilés (Stories) — taille S
5. Lignes pointillées horizontales pour les releases
6. Frame annexe "Parking lot" pour les idées non placées

### Règles de facilitation remote

- 1 facilitateur dédié (pas le PO)
- Timeboxing strict (Pomodoro 25 min × 4)
- Pauses caméra-off toutes les 50 min
- Capture finale en .png + export structuré (Miro → CSV → Jira)

---

## Anti-patterns fréquents

- ❌ **Trop technique** : "Système valide JWT" n'est pas une activité utilisateur
- ❌ **Backbone trop fin** : 50 activités → c'est déjà un backlog, pas un story map
- ❌ **MVP qui n'est pas un parcours** : "On livre juste l'inscription en MVP" → l'utilisateur ne peut rien faire avec ça
- ❌ **Story Map figé** : il doit vivre, être mis à jour à chaque refinement
- ❌ **PO seul à construire** : l'atelier collaboratif est l'essence de la méthode
- ❌ **Confondre Story Mapping et Backlog** : le Story Map est la vue, le backlog en découle

---

## Du Story Map au Backlog

### Étapes de conversion

1. **Photographier / exporter** le Story Map (source de vérité visuelle)
2. **Saisir Release 1 en Epics + US dans Jira/Linear** :
   - 1 activité Backbone = 1 Epic
   - 1 tâche utilisateur = 1 Feature (ou Story directe si simple)
   - 1 US essentielle = 1 User Story dans le backlog
3. **Lier chaque US à son Epic Story Map** (custom field "Story Map Area")
4. **Conserver le Story Map à jour** comme vue d'ensemble (mis à jour à chaque refinement)

### Maintenance dans le temps

- Revue de Story Map **toutes les 4-6 semaines** (ou à chaque PI en SAFe)
- Ajout des nouvelles activités identifiées en cours de release
- Retrait/archivage des US livrées (les laisser visibles ✅ pour mémoire)

---

## Livrables

- Story Map visuel (Miro / FigJam ou photo si présentiel)
- Définition explicite du Walking Skeleton (liste des US R1)
- Roadmap dérivée (Now / Next / Later) alignée sur les releases
- Compte-rendu d'atelier avec décisions et points ouverts
- Backlog importé dans l'outil (Jira / Linear / Notion)

## Format de sortie

Préciser : **persona cible** (rôle + objectif principal), **niveau de profondeur** (Backbone seul / Backbone + Tâches / complet avec stories), **format** (atelier présentiel / remote Miro / export Markdown), **horizon de release** (MVP seul / 3 releases / 6 mois).
