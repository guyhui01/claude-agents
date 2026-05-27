# WF-002 — Use Case UC-01 — Delivery SAFe PI-01 · Assurance IA

> Workflow : `WF-002-delivery-safe.md`
> Secteur : Assurance · Client fictif : Prévalistest Assurances
> Brief source : `../briefs/WF-002-brief-assurance-pi01.md`
> Continuité de : `WF-001-uc01-sinistres-assurance-ia.md` (cadrage → delivery)
> Durée d'exécution simulée : ~90 min · Modèle : Opus 4.7 · 6 agents orchestrés

---

## Brief client (input du workflow)

```
ART          : ART Sinistres IA — Prévalistest Assurances
SECTEUR      : Assurance IARD (Auto, Habitation)
ÉQUIPES      : 2 squads — Alpha (Déclaration IA & UX) · Beta (Conformité & Back-office)
PI           : PI-01 · 10 semaines · 4 sprints + IP Sprint · ~80 SP
FEATURES     : FEAT-A Parcours IA · FEAT-B Upload · FEAT-C Notification ·
               FEAT-D Conformité AI Act · FEAT-E Enabler AS/400
DÉPENDANCES  : API REST AS/400 (legacy) · prestataire NLP · validation DPO
CONTRAINTES  : AI Act dès le MVP · MVP fin S3 · budget 150 k€
LANGUE       : Français
```

---

## STEP-01 — PRODUCT-MANAGER-SAFE · Vision Programme

### Priorisation WSJF (méthode officielle SAFe POPM 6)

> Cotation **relative**, **plus petit = 1 par colonne**, colonnes indépendantes, Fibonacci (1·2·3·5·8·13·20).

| Rang | Feature | BV | TC | RR\|OE | CoD | Size | WSJF |
|------|---------|----|----|-------|-----|------|------|
| #1 | FEAT-D Conformité AI Act | 8 | 13 | 8 | 29 | 5 | **5,8** |
| #2 | FEAT-C Notification statut | 3 | 1 | 1 | 5 | 1 | **5,0** |
| #3 | FEAT-B Upload documentaire | 5 | 3 | 3 | 11 | 3 | **3,7** |
| #4 | FEAT-E Enabler AS/400 | 1 | 8 | 13 | 22 | 8 | **2,8** |
| #5 | FEAT-A Parcours déclaration IA | 13 | 5 | 5 | 23 | 13 | **1,8** |

- **FEAT-D #1** : petit job + criticité légale + fort RR.
- **FEAT-C #2** : Job Size le plus petit (1) → mécanique *Weighted Shortest Job First*.
- **FEAT-A #5** : plus haute valeur mais plus gros job → réponse SAFe = **splitter** (pas override), exécuté en STEP-03.
- **Dépendances ≠ WSJF** : le séquencement est traité au Program Board (STEP-02).

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

### Benefit Hypothesis (artefact Feature — LBC réservé aux Épics)

- **FEAT-D** — *Si* consentement + logs IA natifs, *alors* conformité AI Act dès le MVP. Mesuré par : 100% suggestions IA loguées · consentement traçable.
- **FEAT-A** — *Si* guidage IA adaptatif, *alors* abandon <20% et complétion >80%. Mesuré par : taux complétion · temps déclaration <10 min.

---

## STEP-02 — RELEASE-TRAIN-ENGINEER · PI Planning

> Le WSJF donne la priorité de valeur ; le Program Board arbitre le séquencement réel via les dépendances.

### Program Board PI-01

```
 PI-01 (10 sem.)    S1          S2            S3 ◄MVP      S4           IP Sprint
 ─────────────────────────────────────────────────────────────────────────────────
 Squad ALPHA        Spike NLP   FEAT-A1       FEAT-A1      FEAT-A2      Hardening
 (Décla IA & UX)    + FEAT-A1   Auto sans     fin + FEAT-B FEAT-C       + buffer
                    démarrage   tiers         Upload       (Notif)
                       │ (mock)    └──dépend─────┘ (données)   │(statut)
 Squad BETA         FEAT-D      FEAT-E         FEAT-E        System      I&A
 (Conf & Back-off)  Consent +   AS/400         AS/400        Demo +      Workshop
                    logs AI Act intég. (1/2)   intég. (2/2)  prep CODIR
                  (dépend DPO)     └──livre data──┘
 ─────────────────────────────────────────────────────────────────────────────────
 MVP (fin S3)  = FEAT-D + FEAT-E + FEAT-A1 (Auto sans tiers) + FEAT-B
 Post-MVP (S4) = FEAT-A2 (avec tiers) + FEAT-C (notification)
```

### Risques ROAM

| ID | Risque | Catégorie | Action |
|----|--------|-----------|--------|
| R1 | API REST AS/400 non spécifiée / indisponible | O Owned | Lead IT legacy · **risque #1 du PI** |
| R2 | Contrat prestataire NLP non signé | M Mitigated | Fallback règles + spike S1 |
| R3 | Validation DPO du consentement avant S1 | O Owned | PO Beta sécurise le sign-off |
| R4 | Aucune vélocité historique (PI-01) | A Accepted | Engagement conservateur + buffer IP |
| R5 | Complexité parcours IA adaptatif | M Mitigated | Split A1/A2 + spike NLP |

### Vote de confiance

```
Squad Alpha 3,8 · Squad Beta 3,75 → MOYENNE ART : 3,8 (cible ≥ 3,5) ✅
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

| Squad | # | Objectif (SMART) | BV | Statut | Feature |
|-------|---|------------------|----|--------|---------|
| Alpha | A1 | Parcours Auto **sans tiers** pour le MVP S3 | 9 | Committed | FEAT-A1 |
| Alpha | A2 | Upload documentaire mobile | 7 | Committed | FEAT-B |
| Alpha | A3 | Parcours **avec tiers** + constat | 6 | Uncommitted | FEAT-A2 |
| Alpha | A4 | Notifications de statut | 5 | Uncommitted | FEAT-C |
| Beta | B1 | Consentement IA + logs AI Act **dès S1** | 10 | Committed | FEAT-D |
| Beta | B2 | Intégration AS/400 (données dossier) | 8 | Committed | FEAT-E |
| Beta | B3 | System Demo + note CODIR | 4 | Uncommitted | — |

> Uncommitted = hors PI Predictability (gestion de l'incertitude AS/400).

### Backlog Sprint 1

| Squad | US | Titre | Type | SP |
|-------|----|-------|------|----|
| Beta | US-B01 | Écran consentement IA | Story | 3 |
| Beta | US-B02 | Log automatique des suggestions IA | Enabler Compliance | 3 |
| Beta | US-B03 | Spike API REST AS/400 (3j) | Enabler Exploration | 3 |
| Alpha | US-A01 | Spike NLP adaptatif vs règles (3j) | Enabler Exploration | 3 |
| Alpha | US-A02 | Choix du type de sinistre | Story | 3 |
| Alpha | US-A03 | Parcours questions Auto sans tiers (mock) | Story | 5 |

---

## STEP-04 — SCRUM-MASTER · Sprint Planning S1

> Posture : le SM **facilite** et **coache l'auto-organisation** — décisions produites par les Developers (Scrum Guide 2020).

### Sprint Goals (un seul par Scrum Team)

| Squad | Sprint Goal S1 |
|-------|----------------|
| Alpha | Livrer les premières étapes du parcours guidé Auto sans tiers (choix type + questions en mock) |
| Beta | Livrer un socle de conformité AI Act démontrable (consentement + logs traçables) |

### Capacité (forecast des Developers)

| Squad | Devs | Capacité estimée | Forecast S1 |
|-------|------|------------------|-------------|
| Alpha | 3 | ~12 SP | 11 SP (dont 1 spike 3j) |
| Beta | 2 | ~10 SP | 9 SP (dont 1 spike 3j) |

> Sprint Backlog auto-sélectionné par les Developers, allocation ajustée au Daily Scrum.

### Definition of Done

```
☐ Code revu + mergé · ☐ AC Gherkin passants · ☐ Logs AI Act + consentement vérifiés
☐ Aucune anomalie critique sécurité/RGPD · ☐ Increment démontrable (System Demo)
☐ Spikes : note de décision (pas de code de prod)
```

---

## STEP-05 — QA-AGILE · Tests Sprint 1 (shift-left, BDD)

> Périmètre testé = stories de livraison uniquement (spikes exclus).

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

### Stratégie automatisation & régression (pyramide ISTQB)

- E2E/Acceptance : Gherkin → Cucumber/Behave (parcours critiques)
- Intégration : logs + connecteur AS/400 (mock en S1)
- Unit : logique métier (règles parcours, validation consentement)
- Régression : suite Gherkin automatisée en CI/CD dès S1
- Manuel/exploratoire : questions IA adaptatives (comportement émergent)

---

## STEP-06 — CHEF-PROJET-IA · Dashboard PI & Note CODIR

### EVM — Baseline (CPI/SPI N/A à T0, conforme PMI)

| Élément | Valeur |
|---------|--------|
| BAC | 150 k€ |
| PV (courbe) | S1≈30k · S2≈60k · S3≈95k (MVP) · S4≈130k · IP≈150k |
| CPI / SPI | N/A à T0 — pas d'actuals · calculés dès la System Demo S1 |

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

## Livrables finaux WF-002 — Checklist

```
✅ Vision PI-01 + Top 5 Features priorisées WSJF (méthode officielle)
✅ Benefit Hypothesis des Features majeures
✅ Program Board avec dépendances croisées + 5 risques ROAM
✅ Vote de confiance ART (3,8/5)
✅ PI Objectives par squad (4 committed / 3 uncommitted)
✅ Split FEAT-A (SPIDR) + backlog Sprint 1 (Enablers labellisés)
✅ Scénarios Gherkin (nominal/erreur/limite) + stratégie de tests
✅ Dashboard PI + baseline EVM + note CODIR (décisions requises)
```

---

## Bilan d'exécution

| Indicateur | Valeur |
|-----------|--------|
| Durée simulée | ~90 min |
| Agents orchestrés | 6 (PM-SAFE · RTE · PO-SAFE · SM · QA-AGILE · CHEF-PROJET-IA) |
| Modèle | Opus 4.7 (workflow dense, orchestration SAFe) |
| Features priorisées | 5 (WSJF méthode officielle) |
| PI Objectives | 7 (4 committed · 3 uncommitted) |
| Backlog Sprint 1 | 6 US (2 spikes · 1 compliance · 3 stories) |
| Conformité | WSJF relatif niveau Feature · Sprint Goals uniques · auto-organisation SM · EVM sans CPI/SPI fabriqués · Benefit Hypothesis (pas LBC) |
| Valeur clé démontrée | Cadrage WF-001 → delivery PI complet · conformité AI Act priorisée WSJF dès S1 · gestion d'incertitude (AS/400, NLP) intégrée |

---

*Use case fictif · WF-002 v1.1 · Généré avec Claude Code · 2026-05-27*
