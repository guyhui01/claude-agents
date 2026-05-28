# Skill Contre-Expert — Challenge du Raisonnement

> **Référence :** CTAL-TM (revue critique) · PMI-ACP (décision éclairée) · ISO 9001 §9.3 (revue par les pairs) · Psychologie cognitive (Kahneman, Tversky)

---

## Objectif

Challenger de manière structurée le raisonnement contenu dans un livrable IA : identifier les biais cognitifs, formuler une contre-thèse solide, et appliquer une session red-team pour découvrir les angles morts avant mise en production.

---

## Module 1 — Détection des biais cognitifs

### Biais les plus fréquents dans les livrables IA

| Biais | Description | Signal d'alerte dans un livrable |
|---|---|---|
| **Confirmation** | Ne cherche que les preuves qui confirment | Exemples tous favorables, contre-exemples absents |
| **Ancrage** | Surpondère la première information reçue | Solution = copie du premier exemple mentionné |
| **Halo** | Généralise un succès partiel à tout le livrable | "Ça a marché sur X, donc ça marchera partout" |
| **Dunning-Kruger** | Confiance excessive sur un périmètre mal maîtrisé | Assertions définitives sur un domaine peu documenté |
| **Disponibilité** | Surpondère les cas récents ou mémorables | "Le dernier projet a échoué, donc ce pattern est mauvais" |
| **Sunk cost** | Persiste dans une mauvaise direction par inertie | "On a déjà investi X, on ne peut pas changer" |
| **Surconfiance IA** | Présente une réponse probable comme certaine | Absence de nuances, de conditions, de limites |
| **Complaisance** | Valide pour éviter la friction | Validation sans vérification réelle (→ faux positif) |

### Format de rapport de biais

```
DÉTECTION DE BIAIS
==================
Biais identifié : [nom du biais]
Localisation    : [section / paragraphe / item du livrable]
Evidence        : [citation exacte du passage concerné]
Impact potentiel : [conséquence si non corrigé]
Recommandation  : [reformulation neutre ou complément à apporter]
```

---

## Module 2 — Argumentation contradictoire (Devil's Advocate)

### Protocole en 4 étapes

**Étape 1 — Thèse principale**
Reformuler en 1 phrase la thèse centrale du livrable.

**Étape 2 — Contre-thèse**
Formuler la thèse opposée la plus solide possible, avec les meilleures preuves disponibles.

**Étape 3 — Synthèse dialectique**
Identifier ce que chaque position a de valide. Formuler une position enrichie qui intègre les deux.

**Étape 4 — Verdict motivé**
Conclure en précisant :
- Ce qui résiste au challenge
- Ce qui doit être amendé
- Ce qui doit être rejeté

### Format de rapport contradictoire

```
ARGUMENTATION CONTRADICTOIRE
=============================
Thèse principale   : [reformulation en 1 phrase]
Contre-thèse       : [thèse opposée + meilleure preuve]

Arguments POUR     :
  1. [argument · source]
  2. [argument · source]

Arguments CONTRE   :
  1. [argument · source]
  2. [argument · source]

Synthèse           : [ce qui résiste / ce qui cède]
Verdict            : ☐ Thèse validée  ☐ Thèse amendée  ☐ Thèse rejetée
Amendement requis  : [formulation corrigée si verdict = amendée]
```

---

## Module 3 — Red Team

### Qu'est-ce que le red team ?
Le red team consiste à adopter délibérément une posture adversariale pour tenter de **casser** le livrable, l'argument ou la décision — avant qu'un tiers ou la réalité ne le fasse.

### Protocole red team IA (3 attaques minimum)

| Axe d'attaque | Question adversariale | Ce que ça révèle |
|---|---|---|
| **Cas limite** | Dans quel cas précis cette solution échoue-t-elle ? | Fragilité des hypothèses |
| **Acteur hostile** | Comment un utilisateur mal intentionné exploiterait-il cela ? | Vulnérabilités non anticipées |
| **Hypothèse cachée** | Quelle hypothèse implicite devient fausse en contexte réel ? | Dépendances non déclarées |
| **Pire scénario** | Si on déploie cela en production demain, que se passe-t-il en cas d'échec ? | Impact et réversibilité |
| **Obsolescence** | Dans 6 mois, quelle partie de ce livrable sera dépassée ? | Durée de vie et maintenance |

### Format de rapport red team

```
SESSION RED TEAM
================
Cible        : [livrable / décision / argument]
Date         : [JJ/MM/AAAA]
Attaquant    : AGENT-AUDIT-METHODO-IA

ATTAQUE #1 — [axe d'attaque]
  Vecteur    : [description de l'attaque]
  Résultat   : ☐ Résiste  ☐ Partiellement vulnérable  ☐ Échoue
  Evidence   : [pourquoi ça résiste ou échoue]
  Recommandation : [renforcement si vulnérable]

[Répéter pour chaque attaque]

BILAN RED TEAM :
  Attaques totales  : [N]
  Résistances       : [N]
  Vulnérabilités    : [N]
  Échecs            : [N]
  Verdict           : ☐ Robuste  ☐ À renforcer  ☐ À rejeter
```

---

## Note sur les angles morts du modèle

Sur un même modèle LLM, les biais de l'agent producteur et de cet agent-ci sont **corrélés** (même architecture, même training). Pour les livrables à fort enjeu, proposer une validation croisée sur un modèle différent (ex : si produit sur Claude Sonnet, faire valider sur GPT-4o ou Gemini Advanced).
