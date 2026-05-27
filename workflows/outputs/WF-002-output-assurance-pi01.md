# Output — WF-002 — Delivery SAFe PI-01 · Prévalistest Assurances

> Brief source : `../briefs/WF-002-brief-assurance-pi01.md`
> Date d'exécution : 2026-05-27
> Modèle utilisé : claude-opus-4-7
> Agents activés : ORCHESTRATEUR-WORKFLOW · PRODUCT-MANAGER-SAFE · RELEASE-TRAIN-ENGINEER
> Statut run : STEP-01 ✅ · STEP-02 ✅ · STEP-03 à STEP-06 à venir

---

## STEP-01 — PRODUCT-MANAGER-SAFE · Vision Programme

### Recalcul WSJF — méthode officielle SAFe (POPM 6)

Chaque colonne estimée **indépendamment**, la plus petite Feature = **1**, étalement Fibonacci (1·2·3·5·8·13·20).

**Colonne 1 — User-Business Value (BV)**

| Feature | Score | Justification relative |
|---------|-------|------------------------|
| FEAT-E AS/400 | 1 | Aucune valeur utilisateur directe (plomberie technique) |
| FEAT-C Notification | 3 | Confort UX, réduit appels SAV |
| FEAT-B Upload | 5 | Dossiers complets — valeur opérationnelle réelle |
| FEAT-D Conformité | 8 | Débloque le lancement commercial + évite sanctions |
| FEAT-A Parcours IA | 13 | Cœur de la proposition de valeur (abandon 67%→<20%) |

**Colonne 2 — Time Criticality (TC)**

| Feature | Score | Justification relative |
|---------|-------|------------------------|
| FEAT-C Notification | 1 | Différable post-MVP, faible décroissance |
| FEAT-B Upload | 3 | Nécessaire MVP, marge de flexibilité |
| FEAT-A Parcours IA | 5 | Cible MVP S6, mais valeur persistante |
| FEAT-E AS/400 | 8 | Sur le chemin critique (bloque FEAT-A) |
| FEAT-D Conformité | 13 | Gate légal fixed-date — pas de lancement sans elle |

**Colonne 3 — Risk Reduction / Opportunity Enablement (RR|OE)**

| Feature | Score | Justification relative |
|---------|-------|------------------------|
| FEAT-C Notification | 1 | Réduction de risque minimale |
| FEAT-B Upload | 3 | Réduit risque dossiers incomplets |
| FEAT-A Parcours IA | 5 | Valide l'hypothèse produit, ouvre le canal |
| FEAT-D Conformité | 8 | Réduit le risque légal (sanctions CNIL/AI Act) |
| FEAT-E AS/400 | 13 | Dé-risque le risque #1 du PI + enable le MVP |

**Colonne 4 — Job Size (proxy durée relatif)**

| Feature | Score | Justification relative |
|---------|-------|------------------------|
| FEAT-C Notification | 1 | Plus petit — email/push + API statut |
| FEAT-B Upload | 3 | Upload + compression + validation |
| FEAT-D Conformité | 5 | Modale consentement + logs d'audit |
| FEAT-E AS/400 | 8 | Intégration legacy + inconnues |
| FEAT-A Parcours IA | 13 | Plus gros — moteur IA + NLP + UX complète |

### Tableau WSJF consolidé

```
WSJF = (BV + TC + RR|OE) / Job Size
```

| Rang | Feature | BV | TC | RR\|OE | CoD | Size | WSJF |
|------|---------|----|----|-------|-----|------|------|
| #1 | FEAT-D Conformité AI Act | 8 | 13 | 8 | 29 | 5 | **5,8** |
| #2 | FEAT-C Notification statut | 3 | 1 | 1 | 5 | 1 | **5,0** |
| #3 | FEAT-B Upload documentaire | 5 | 3 | 3 | 11 | 3 | **3,7** |
| #4 | FEAT-E Enabler AS/400 | 1 | 8 | 13 | 22 | 8 | **2,8** |
| #5 | FEAT-A Parcours déclaration IA | 13 | 5 | 5 | 23 | 13 | **1,8** |

### Lecture (conforme SAFe, sans override)

- **FEAT-D #1** — petit job + criticité légale + fort RR. Cohérent.
- **FEAT-C #2** — CoD faible mais Job Size le plus petit (1) → mécanique *Weighted Shortest Job First*. Résultat exact, non corrigé.
- **FEAT-A #5** — plus haute valeur mais plus gros job → réponse SAFe = **splitter** (pas override). Split exécuté par PO-SAFE en STEP-03.
- **Dépendances ≠ WSJF** — séquencement traité au Program Board (STEP-02).

### Vision PI-01

```
POUR        les assurés IARD déclarant un sinistre
QUI         abandonnent le formulaire web (67%) faute de guidage
LE          parcours de déclaration assisté par IA
EST UN      assistant conversationnel conforme AI Act
QUI         réduit l'abandon <20% et le délai <48h
CONTRAIREMENT au formulaire 47 champs sans aide
NOTRE SOLUTION intègre la conformité IA dès la conception
```

### Benefit Hypothesis (artefact Feature — pas LBC, réservé aux Épics)

- **FEAT-D** — *Si* consentement + logs IA natifs, *alors* conformité AI Act dès le MVP. Mesuré par : 100% suggestions IA loguées · consentement traçable.
- **FEAT-A** — *Si* guidage IA adaptatif, *alors* abandon <20% et complétion >80%. Mesuré par : taux complétion · temps déclaration <10 min.

### Communication Business Owners

> Le PI-01 sécurise d'abord la conformité AI Act (FEAT-D) — petit effort, enjeu légal majeur. Le risque structurant reste l'intégration AS/400 (Enabler FEAT-E), traité avant le parcours IA. La Feature cœur (FEAT-A) sera splittée pour livrer un MVP Auto incrémental dès S6.

---

## STEP-02 — RELEASE-TRAIN-ENGINEER · Facilitation PI Planning

### Principe de séquencement

Le WSJF donne la priorité de valeur ; le Program Board arbitre le séquencement réel via les dépendances :
- FEAT-A dépend de FEAT-E (données dossier AS/400) → Enabler tôt malgré WSJF #4
- FEAT-C dépend du flux déclaration → repoussée S4 malgré WSJF #2
- FEAT-D dépend du DPO → dépendance externe à lever avant S1

### Program Board PI-01

```
 PI-01 (10 sem.)    S1          S2            S3 ◄MVP      S4           IP Sprint
                    (sem 1-2)   (sem 3-4)     (sem 5-6)    (sem 7-8)    (sem 9-10)
 ─────────────────────────────────────────────────────────────────────────────────
 Squad ALPHA        Spike NLP   FEAT-A1       FEAT-A1      FEAT-A2      Hardening
 (Décla IA & UX)    + FEAT-A1   Auto sans     fin + FEAT-B FEAT-C       + buffer
                    démarrage   tiers         Upload       (Notif)      régression
                       │           │             ▲            ▲
                       │ (mock)    └──dépend─────┘            │
                       ▼                          (données)   │(statut)
 Squad BETA         FEAT-D      FEAT-E         FEAT-E        System      I&A
 (Conf & Back-off)  Consent +   AS/400         AS/400        Demo +      Workshop
                    logs AI Act intég. (1/2)   intég. (2/2)  prep CODIR
                       ▲           │              │
                  (dépend DPO)     └──livre data──┘
 ─────────────────────────────────────────────────────────────────────────────────
 MVP (fin S3)  = FEAT-D + FEAT-E + FEAT-A1 (Auto sans tiers) + FEAT-B
 Post-MVP (S4) = FEAT-A2 (avec tiers) + FEAT-C (notification)
```

> Split FEAT-A → A1 (Auto sans tiers) / A2 (avec tiers + constat) posé pour planification ; formalisation par PO-SAFE en STEP-03.

### Capacité vs charge

| Squad | Capacité PI (4 sprints) | Charge planifiée | Marge |
|-------|------------------------|------------------|-------|
| Alpha | ~40 SP | A1+A2 (13) + B (5) + C (5) = 23 SP | ~17 SP (spikes + incertitude NLP) |
| Beta | ~40 SP | D (8) + E (~8) = 16 SP | ~24 SP (intégration AS/400 = forte inconnue) |

> Marge large : PI-01 sans vélocité historique + risque AS/400 → engagement prudent (gestion d'incertitude SAFe premier PI).

### Risques ROAM

| ID | Risque | Catégorie | Action |
|----|--------|-----------|--------|
| R1 | API REST AS/400 non spécifiée / indisponible | O Owned | Lead IT legacy · revue hebdo · **risque #1 du PI** |
| R2 | Contrat prestataire NLP non signé | M Mitigated | Fallback règles métier + spike S1 · escalade achats |
| R3 | Validation DPO du consentement avant S1 | O Owned | PO Beta sécurise le sign-off DPO avant le PI Planning |
| R4 | Aucune vélocité historique (PI-01) | A Accepted | Engagement conservateur + buffer IP documenté |
| R5 | Complexité parcours IA adaptatif (FEAT-A) | M Mitigated | Split A1/A2 + spike NLP S1 |

### Agenda PI Planning (2 jours — format SAFe)

```
JOUR 1
08h30 Vision Business (Business Owners Prévalistest)
09h00 Vision Produit + Architecture (PM-SAFE + AI-Architect : AS/400, NLP)
10h00 Présentation Features WSJF par squad (PO Alpha / PO Beta)
11h00 Breakout squads — Iteration planning
17h00 Draft Plan Review
18h00 Management Review & Problem Solving (focus R1 AS/400)

JOUR 2
08h30 Ajustements post-Management Review
10h00 Final Plan Review
11h00 Risques ROAM (revue des 5 risques)
12h00 Vote de confiance
12h30 PI Objectives signés (→ produits en STEP-03)
```

### Impediments ART à lever

1. Spécification API AS/400 non confirmée → escalade Lead IT legacy (bloquant FEAT-E donc FEAT-A)
2. Contrat NLP en attente procurement → escalade achats avant S1
3. Disponibilité DPO pour validation consentement → caler un créneau pré-PI

### Vote de confiance (simulé)

```
Squad Alpha : 4 · 4 · 3 · 4 · 4      → moy. 3,8
Squad Beta  : 4 · 3 · 4 · 4          → moy. 3,75
─────────────────────────────────────────────────
MOYENNE ART : 3,8  (cible ≥ 3,5) ✅
```

---

## STEP-03 — PO-SAFE · PI Objectives & Backlog Sprint 1

### Split officiel FEAT-A (SPIDR — Rules + Spike)

```
FEAT-A "Parcours déclaration guidée IA" (13 — trop gros pour 1 sprint)
   ├── Enabler Spike : moteur NLP adaptatif vs fallback règles
   ├── Tranche A1 — Auto SANS tiers (règle simple)   → MVP S3
   └── Tranche A2 — Auto AVEC tiers + constat (règle complexe) → S4
```

### PI Objectives par squad (committed / uncommitted)

**Squad ALPHA — Déclaration IA & UX**

| # | Objectif (SMART) | BV cible | Statut | Features |
|---|------------------|----------|--------|----------|
| A1 | Livrer le parcours Auto **sans tiers** pour le MVP S3 | 9 | Committed | FEAT-A1 |
| A2 | Intégrer l'upload documentaire mobile | 7 | Committed | FEAT-B |
| A3 | Étendre au parcours **avec tiers** + constat | 6 | Uncommitted | FEAT-A2 |
| A4 | Activer les notifications de statut | 5 | Uncommitted | FEAT-C |

**Squad BETA — Conformité & Back-office**

| # | Objectif (SMART) | BV cible | Statut | Features |
|---|------------------|----------|--------|----------|
| B1 | Livrer consentement IA + logs AI Act **dès S1** | 10 | Committed | FEAT-D |
| B2 | Établir l'intégration AS/400 (données dossier) | 8 | Committed | FEAT-E |
| B3 | Préparer System Demo + note CODIR | 4 | Uncommitted | — |

> Uncommitted = hors PI Predictability (gestion incertitude AS/400).

### Backlog Sprint 1

**Squad BETA**

| US | Titre | Type | SP |
|----|-------|------|----|
| US-B01 | Écran consentement IA avant guidage | Story | 3 |
| US-B02 | Log automatique des suggestions IA | Enabler Compliance | 3 |
| US-B03 | Spike : API REST AS/400 disponible ? (3j) | Enabler Exploration | 3 |

**Squad ALPHA**

| US | Titre | Type | SP |
|----|-------|------|----|
| US-A01 | Spike : NLP adaptatif vs fallback règles (3j) | Enabler Exploration | 3 |
| US-A02 | Choisir le type de sinistre (Auto/Habitation) | Story | 3 |
| US-A03 | Parcours questions guidées — Auto sans tiers (mock) | Story | 5 |

> Charge S1 : Beta 9 SP · Alpha 11 SP · Enabler ratio ≈ 45% (dé-risquage initial S1).

### Acceptance Criteria Gherkin (US prioritaires)

```gherkin
# US-B01 — Écran consentement IA (FEAT-D · WSJF #1)
AC1 — Consentement avant toute suggestion IA
  GIVEN un assuré accède au parcours de déclaration guidé
  WHEN le module IA est sur le point d'être activé
  THEN un écran de consentement s'affiche AVANT toute suggestion
  AND  deux options : "Accepter" / "Déclarer sans IA"

# US-A02 — Choix du type de sinistre (FEAT-A1)
AC1 — Sélection du type
  GIVEN un assuré connecté à son espace
  WHEN il accède à la déclaration
  THEN il peut choisir "Auto" ou "Habitation"
  AND  le parcours adapté est chargé
```

### Risques équipe (ROAM)

| Squad | Risque | Catégorie | Action |
|-------|--------|-----------|--------|
| Beta | API AS/400 (spike US-B03) conditionne FEAT-E | O Owned | Résultat spike S1 = go/no-go |
| Alpha | NLP non tranché (spike US-A01) | M Mitigated | Fallback règles si spike négatif |

---

## STEP-04 — SCRUM-MASTER · Sprint Planning S1

> Posture : le SM **facilite** et **coache l'auto-organisation** — décisions produites par les Developers (Scrum Guide 2020).

### Sprint Goals (un seul par Scrum Team)

| Squad | Sprint Goal S1 (unique) |
|-------|-------------------------|
| Alpha | Livrer les premières étapes du parcours guidé Auto sans tiers (choix type + questions en mock) |
| Beta | Livrer un socle de conformité AI Act démontrable (consentement + logs traçables) |

### Capacité (forecast des Developers)

> Facteur de focus ~80% = convention d'équipe (pas une règle Scrum), à recalibrer après vélocité S1.

| Squad | Devs | Capacité estimée | Forecast S1 |
|-------|------|------------------|-------------|
| Alpha | 3 | ~12 SP | 11 SP (dont 1 spike 3j) |
| Beta | 2 | ~10 SP | 9 SP (dont 1 spike 3j) |

### Sprint Backlog (auto-sélectionné par les Developers, ajusté au Daily)

**Alpha** : US-A01 Spike NLP (Enabler Exploration) · US-A02 Choix type (3) · US-A03 Parcours mock (5)
**Beta** : US-B01 Consentement (3) · US-B02 Logs IA (Enabler Compliance, 3) · US-B03 Spike AS/400 (Enabler Exploration)

### Impediments Sprint (sans doublon avec le ROAM PI)

| # | Impediment opérationnel | Action SM | Réf. ROAM |
|---|-------------------------|-----------|-----------|
| I1 | Accès/credentials AS/400 pour le spike | Escalade Lead IT legacy | instance R1 |
| I2 | Clé API sandbox NLP | Escalade Achats | instance R2 |
| I3 | Créneau DPO (wording consentement) | Faciliter avec PO Beta | — |
| I4 | PO partagé Alpha/Beta — dispo | Coacher la délégation refinement | — |

### Definition of Done (rappel)

```
☐ Code revu + mergé · ☐ AC Gherkin passants · ☐ Logs AI Act + consentement vérifiés
☐ Aucune anomalie critique sécurité/RGPD · ☐ Increment démontrable (System Demo)
☐ Spikes : note de décision (pas de code de prod)
```

---

## STEP-05 — QA-AGILE · Tests Sprint 1 (shift-left, BDD)

> Périmètre testé = stories de livraison uniquement. Spikes US-A01/US-B03 exclus (Enablers Exploration).

### Scénarios BDD/Gherkin (nominal + erreur + limite)

```gherkin
# US-B01 — Écran consentement IA (FEAT-D)
Nominal: consentement accordé → guidage IA + événement horodaté
Alternatif: refus → formulaire standard, aucune donnée transmise IA
Limite: fermeture sans choix → aucun consentement, IA inactive

# US-B02 — Log suggestions IA (Enabler Compliance)
Nominal: log {timestamp, hash, type, modèle, version} à chaque suggestion
Limite: consentement refusé → aucun log IA

# US-A03 — Parcours Auto sans tiers (FEAT-A1)
Nominal: "Non" au tiers → champs tiers masqués, progression OK
Erreur: réponse obligatoire manquante → blocage + message
```

### Plan de test Sprint 1 (in-sprint)

| US | Type | Mode | Priorité |
|----|------|------|----------|
| US-B01 Consentement | Acceptance (ATDD) + exploratoire | Auto + manuel | Haute (gate légal) |
| US-B02 Logs IA | Compliance + intégration | Auto | Haute (AI Act) |
| US-A02 Choix type | Acceptance | Auto | Moyenne |
| US-A03 Parcours mock | Acceptance + exploratoire | Auto + manuel | Moyenne |

### Stratégie automatisation & régression (pyramide ISTQB)

- E2E/Acceptance : Gherkin → Cucumber/Behave (parcours critiques US-B01, US-A03)
- Intégration : US-B02 logs + connecteur AS/400 (mock en S1)
- Unit : logique métier (règles parcours, validation consentement)
- Régression : suite Gherkin automatisée en CI/CD dès S1 (socle)
- Manuel/exploratoire : questions IA adaptatives (comportement émergent)
- Tests intégration AS/400 réels : conditionnés au spike US-B03

---

## STEP-06 — CHEF-PROJET-IA · Dashboard PI & Note CODIR

### Dashboard PI-01

```
Statut PI    : PLANIFIÉ · Vote de confiance 3,8/5
Objectifs    : 4 Committed + 3 Uncommitted
Capacité ART : ~80 SP · Sprint 1 engagé ~20 SP
Avancement   : 0% (S1 non démarré — T0)
MVP cible    : fin Sprint 3 (semaine 6)
Risques      : 5 ROAM · dont R1 AS/400 (critique)
```

### EVM — Baseline (CPI/SPI N/A à T0, conforme PMI)

| Élément | Valeur |
|---------|--------|
| BAC | 150 k€ |
| PV (courbe) | S1≈30k · S2≈60k · S3≈95k (MVP) · S4≈130k · IP≈150k |
| EV / AC | 0 (aucune exécution) |
| CPI = EV/AC | N/A — calculable dès fin S1 |
| SPI = EV/PV | N/A — calculable dès fin S1 |

> Conforme PMI : pas d'indice de performance sans actuals. CPI/SPI mesurés à chaque System Demo.

### RAG status par Feature

| Feature | RAG | Justification |
|---------|-----|---------------|
| FEAT-D Conformité | 🟢 | Scope clair, gate légal |
| FEAT-B Upload | 🟢 | Standard |
| FEAT-C Notification | 🟢 | Post-MVP, simple |
| FEAT-E AS/400 | 🟠 | Dépendance legacy non confirmée (R1) |
| FEAT-A Parcours IA | 🟠 | NLP non tranché + gros split (R5) |

### Note CODIR (1 page)

```
ÉTAT     : PI-01 planifié. Vote ART 3,8/5. MVP Auto visé S6. Conformité AI Act dès S1.
RISQUES  : R1 AS/400 (bloquant FEAT-A) · R2 contrat NLP · R3 validation DPO
DÉCISIONS CODIR :
  1. Débloquer accès/spec API AS/400 (IT legacy) — URGENT
  2. Valider et signer le contrat NLP
  3. Confirmer le budget PI-01 (150 k€)
  4. Arbitrer scope de repli si AS/400 glisse > S2
KPIs MVP : abandon <20% · délai <48h · complétion >80%
PROCHAIN JALON : System Demo S1 → 1er calcul CPI/SPI
```

---

## Évaluation

| Critère | Note /5 | Commentaire |
|---------|---------|-------------|
| Complétude livrables | 5 | 6 steps produits (STEP-01 à 06), tous les artefacts attendus |
| Qualité SAFe / Agile | 4 | Conforme après 2 corrections en cours de run (WSJF relatif, auto-organisation SM) |
| Réutilisabilité | 4 | Bon template ; dépend de la correction du WF-002 (tâche #5) |
| Promu en use case ? | **non** | À réévaluer après le lot de corrections #1-#5 (wsjf.md + WF-002). Reste en outputs/ |

---

> **Run complet WF-002** : STEP-01 → STEP-06 · 6 agents orchestrés · modèle Opus 4.7 · 2026-05-27
> **Conformité** : WSJF recalculé niveau Feature (méthode officielle) · Sprint Goals uniques · auto-organisation SM · EVM baseline sans CPI/SPI fabriqués · Benefit Hypothesis (pas LBC) au niveau Feature
> **Décision promotion** : maintenu en outputs/ — fondations à corriger d'abord (lot post-run #1-#5)
