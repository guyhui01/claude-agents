# Skill — Planning Poker (estimation collective)

> Certification : PSM I · PSM II · CSM · A-CSM · SAFe SSM · SAFe SASM · ICAgile ICP-ATF
> Agent : AGENT-SCRUM-MASTER.md (facilitation) — utilisé en collaboration avec AGENT-PO-SCRUM.md (préparation) et AGENT-PO-SAFE.md (PI Planning)

## Objectif

Animer une session de Planning Poker rigoureuse permettant à l'équipe Scrum d'estimer ses User Stories en story points (Fibonacci), en utilisant l'**intelligence collective** pour éviter les biais (anchoring, HiPPO) et en convergeant rapidement vers un consensus défendable.

> 🔗 Pour la gestion globale du backlog : voir `skills/scrum/po-backlog.md`
> 🔗 Pour le split d'US (Feature → Story en SAFe) : voir `skills/safe/feature-to-story-splitting.md`

## Origine et principes

- Inventé par **James Grenning (2002)**, popularisé par **Mike Cohn / Mountain Goat Software**
- Basé sur la **méthode Wideband Delphi** (anonymat + convergence)
- 3 principes clés :
  1. **Estimation collective** par toute l'équipe Dev (pas le PO seul)
  2. **Vote simultané** (cartes révélées en même temps → anti-anchoring)
  3. **Discussion sur les écarts** (intelligence collective qui révèle les non-dits)

## Cartes Fibonacci — Suite officielle

| Carte | Signification | Usage typique |
|---|---|---|
| **0** | Déjà fait / aucun effort | Rare, US déjà couverte par une autre |
| **1, 2, 3** | Petites US | Sprint capacity élevée, fluide |
| **5, 8** | US moyennes | Cœur du backlog raffiné |
| **13** | Grosse US | À surveiller — challenger la décomposition |
| **21, 40, 100** | US trop grosse | À splitter impérativement |
| **? (point d'interrogation)** | Pas assez d'info | Besoin de clarification PO |
| **∞ (infini)** | Imposssible à estimer | Probable Spike nécessaire |
| **☕ (café)** | Pause demandée | Signal de fatigue d'équipe |

### Pourquoi Fibonacci (pas 1-10) ?

L'écart **non-linéaire** force l'équipe à reconnaître que **plus une US est grosse, plus l'incertitude grandit** :
- Entre 2 et 3 SP : précision possible
- Entre 13 et 21 SP : incertitude majeure, mieux vaut splitter

---

## Procédure d'animation (30-90 min pour 5-10 US)

### Préparation (avant la session)

| Élément | Responsable | Détail |
|---|---|---|
| Backlog raffiné | **PO** | DoR validée pour les US à estimer |
| Cartes (physiques ou outil) | **Scrum Master** | Decks pour chaque participant |
| Salle / outil remote | **Scrum Master** | Voir section "Facilitation remote" |
| Référentiel d'US déjà estimées | **Scrum Master** | Au moins 5 US passées comme "ancres calibration" |

### Déroulement d'une US estimée (5-10 min)

1. **Présentation par le PO** (1-2 min) — énoncé + AC + valeur métier
2. **Questions de clarification** (1-3 min) — équipe interroge PO
3. **Vote individuel et secret** (30 s) — chacun choisit sa carte, face cachée
4. **Révélation simultanée** (5 s) — facilitateur dit "1-2-3 révélez !"
5. **Discussion des écarts** si > 2 paliers Fibonacci entre min et max (2-5 min)
   - Le **plus bas** explique pourquoi c'est simple
   - Le **plus haut** explique pourquoi c'est complexe
   - Ne pas chercher la moyenne, chercher la **compréhension partagée**
6. **Re-vote** jusqu'à convergence (max 3 tours, puis arbitrage)

### Sortie attendue

- Backlog estimé en story points
- Liste des US > 13 SP à splitter
- Spikes identifiés (US votées "?" ou "∞")
- Questions ouvertes documentées (champ "Points ouverts")

---

## Référentiel d'US d'ancrage (calibration)

Avant le premier Planning Poker, l'équipe choisit collectivement **5 US déjà livrées** comme ancres de référence :

```
ANCRES DE CALIBRATION — Sprint 12

US "Ajouter un bouton 'Exporter PDF' simple"      → 2 SP
US "Refactor du composant de tarification"        → 3 SP
US "Intégrer un nouveau provider de paiement"     → 5 SP
US "Migrer le module client vers la nouvelle API" → 8 SP
US "Refonte UX du parcours d'inscription"         → 13 SP
```

Ces ancres servent de **référence relative** : la nouvelle US à estimer ressemble plus à "5 SP" ou "8 SP" parmi les ancres ?

> 💡 Re-calibrer le référentiel **tous les 3-4 mois** : la maturité de l'équipe évolue.

---

## Facilitation remote

### Outils dédiés (gratuits ou freemium)

| Outil | Type | Avantages | Limites |
|---|---|---|---|
| **Planning Poker Online** (planningpokeronline.com) | Web | Simple, gratuit, pas d'inscription | UX basique |
| **Scrum Poker** (scrumpoker.online) | Web | Stats par participant, intégration Jira | Freemium au-delà de 5 participants |
| **Miro / Mural** (template Planning Poker) | Whiteboard | Capture visuelle, post-its parallèles | Pas de vote secret natif |
| **Discord / Slack** (bot Pluralsight, Geekbot) | Chat | Asynchrone possible | Pas d'anti-anchoring (chat visible) |
| **Visual Studio Code** (extension Pointing Poker) | IDE | Devs déjà dans VSCode | Inadapté aux non-tech |

### Règles de facilitation remote

- 🎥 **Caméras allumées** pendant la phase de vote (engagement)
- 🔇 **Mute par défaut** sauf intervention
- ⏱️ **Timer visible** sur écran partagé (Pomodoro 25 min)
- ✋ **Système de main levée** pour ne pas se couper
- 📊 **Capture finale** : export JSON/CSV de l'outil + screenshot

### Format hybride (présentiel + remote)

- 1 facilitateur dédié pour le remote (pas le SM principal)
- Outil unique pour tous (pas de cartes physiques + online en parallèle)
- Caméra grand angle sur la salle pour les remote

---

## Alternatives à Planning Poker

| Méthode | Quand l'utiliser | Cadre |
|---|---|---|
| **T-shirt Sizing (XS/S/M/L/XL/XXL)** | Estimation grossière, early product, Roadmap | 30 min, équipe junior bienvenue |
| **#NoEstimates** | Équipe mature, US toujours découpées en ~1 jour | Cycle time monitoring requis |
| **Affinity Estimation** | > 30 US à estimer en bloc | Atelier 90 min, classement par groupe |
| **Magic Estimation** | Décharge cognitive après long refinement | 15 min, tri silencieux sur table de SPs |
| **Bucket System** | Très grand backlog (> 50 US), pas de raffinement individuel possible | 60-90 min, cartes 0, 1, 2, 3, 5, 8, 13, 20, 40, 100 sur la table |

### Comparaison rapide

```
            Précision    Vitesse    Engagement   Quand
            ──────────  ─────────  ───────────  ───────────────────────
Planning P. ███████      ████       ███████      Backlog raffiné sprint
T-shirt     ███          ███████    █████        Roadmap, early product
#NoEstim.   █            ███████    ██████       Équipe mature, flow >>
Affinity    █████        ██████     ████         Bloc > 30 US
Magic E.    ████         ███████    ██           Backlog déjà vu
Bucket      ████         █████      █████        Très grand backlog
```

---

## Anti-patterns à éviter

### Pendant l'animation

- ❌ **Anchoring** : un senior vote en premier "5" → tous suivent → **vote secret obligatoire**
- ❌ **Vote du Scrum Master** : le SM facilite, **n'estime pas**
- ❌ **Vote du PO** : le PO clarifie, **n'estime pas non plus**
- ❌ **HiPPO bias** : "Le CTO dit que c'est facile" → l'équipe doit valider
- ❌ **Moyenne automatique** : 3 + 8 = 5.5 → non, discuter et re-voter

### Au-delà de l'animation

- ❌ **Convertir SP en heures** : "1 SP = 4h" → détruit la nature relative et le NoEstimates implicite
- ❌ **Comparer la vélocité entre équipes** : les SP sont **relatifs à l'équipe**, pas absolus
- ❌ **Bonus si vélocité ↑** : invitation directe à l'inflation des SPs
- ❌ **Estimer en silence sans Spike** : si la techno est inconnue, faire un Spike avant
- ❌ **Réviser les SPs en cours de sprint** : on garde l'estimation initiale, on apprend pour la suite

---

## Adaptation SAFe (PI Planning)

### Story Points normalisés (Normalized Story Points)

Pour permettre la **comparaison cross-équipes au niveau ART**, SAFe propose une normalisation :

```
1 Story Point Normalisé = 1 personne-jour de travail (en moyenne ART)
```

### Démarche de calibration ART

1. Chaque équipe estime **1 US de référence simple** (ex : "ajouter un bouton") à **1 SP**
2. Les autres US sont estimées **relativement** à cette ancre commune
3. La vélocité initiale ART = nb de devs × jours du sprint × ~0.8

> ⚠️ Cette normalisation est **utile pour la planification PI** mais ne remplace pas l'estimation relative équipe.

### Planning Poker en PI Planning

| Moment | Granularité | Méthode recommandée |
|---|---|---|
| **Pre-PI Planning** (refinement Features) | Feature en T-shirt | T-shirt sizing |
| **PI Planning Day 1** (briefing) | Features ordonnées par WSJF | Pas d'estimation, présentation |
| **PI Planning Day 2** (par équipe) | US des 5 prochains sprints | Planning Poker (rapide, 3-5 US/min) |
| **Refinements en cours de PI** | US individuelles | Planning Poker classique |

---

## Cross-link avec les autres skills

| Si l'objectif est… | Aller voir |
|---|---|
| Gérer la structure complète du backlog | `skills/scrum/po-backlog.md` |
| Rédiger une US bien formée (DoR INVEST) | `skills/scrum/po-user-story.md` |
| Splitter une Feature en US (SAFe) | `skills/safe/feature-to-story-splitting.md` |
| Animer un atelier Scrum Master | `skills/scrum_master/facilitation-ateliers-sm.md` |
| Prioriser avant d'estimer | `skills/scrum/priorisation-techniques.md` |

---

## Livrables

- Backlog estimé en story points (export Jira / Linear / Notion)
- Référentiel d'US d'ancrage (5 US calibrées, mis à jour trimestriellement)
- Liste des US à splitter (> 13 SP)
- Liste des Spikes nécessaires (votes "?" ou "∞")
- Compte-rendu d'atelier avec points ouverts

## Format de sortie

Préciser : **nombre d'US à estimer**, **format de session** (présentiel / remote / hybride), **outil souhaité** (cartes physiques / Planning Poker Online / Miro / Scrum Poker), **maturité équipe** (junior / intermédiaire / expert), **contexte** (Scrum équipe / PI Planning SAFe).
