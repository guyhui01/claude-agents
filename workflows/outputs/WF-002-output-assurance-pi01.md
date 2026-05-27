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

## Évaluation

| Critère | Note /5 | Commentaire |
|---------|---------|-------------|
| Complétude livrables | | À compléter en fin de run |
| Qualité SAFe / Agile | | |
| Réutilisabilité | | |
| Promu en use case ? | oui / non | |
