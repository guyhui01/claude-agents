# Skill Contre-Expert — Gate de Validation Avant Promotion d'un Livrable

> **Référence :** SAFe 6 DoD · ISTQB Exit Criteria (CTAL-TM) · PMI Quality Gate (PMBOK 7) · CMMI ML2 (Verification & Validation)

---

## Objectif

Appliquer une **gate de validation structurée** avant de promouvoir un livrable vers l'étape suivante (Story → Feature, Feature → Release, Sprint → PI, etc.). La gate est binaire : le livrable passe ou ne passe pas. Il n'y a pas de "passe avec réserves" sans plan d'action daté.

---

## Hiérarchie des Definition of Done (SAFe 6)

```
SOLUTION DoD
  └── PI / Release DoD
        └── Feature DoD
              └── Story DoD
```

Chaque niveau inclut les critères du niveau inférieur. Une Story ne peut pas être "Done" si ses critères de Story DoD ne sont pas tous verts — même si la Feature passe sa gate.

---

## Gate 1 — Story DoD (Scrum Guide 2020 + SAFe 6)

| Critère | ☐/☑ | Notes |
|---|---|---|
| Critères d'acceptance TOUS validés (pas de compromis) | | |
| Tests unitaires écrits ET passants | | |
| Code reviewé par au moins 1 autre Developer | | |
| Intégré sur la branche principale sans conflit | | |
| Démontré au PO (ou PO Proxy) et accepté | | |
| Documentation technique mise à jour si nécessaire | | |
| Aucune dette technique introduite (ou tracée dans le backlog) | | |

**Verdict Gate 1 :** ☐ DONE ✓  ☐ NOT DONE — retour en développement

---

## Gate 2 — Feature DoD (SAFe 6)

| Critère | ☐/☑ | Notes |
|---|---|---|
| Toutes les Stories de la Feature sont DONE | | |
| Benefit Hypothesis définie et mesurable | | |
| Tests d'acceptation Feature (UAT ou démo ART) validés | | |
| Performance et sécurité vérifiées (critères non-fonctionnels) | | |
| Release notes / documentation utilisateur à jour | | |
| PI Objective associé atteint ou progression tracée | | |
| Déployable indépendamment (découplage validé) | | |

**Verdict Gate 2 :** ☐ DONE ✓  ☐ NOT DONE — escalade au PO/PM

---

## Gate 3 — PI / Release DoD (SAFe 6 + ISTQB Exit Criteria)

| Critère | ☐/☑ | Notes |
|---|---|---|
| Toutes les Features du PI sont DONE | | |
| Taux de couverture de tests ≥ seuil défini (ex : 80%) | | |
| 0 anomalie Critique ou Bloquante ouverte | | |
| Anomalies Majeures : toutes tracées avec priorité et owner | | |
| System Demo validée par les Business Owners | | |
| I&A (Inspect & Adapt) réalisé et actions tracées | | |
| Métriques Flow (Velocity, Load, Distribution, Time) disponibles | | |
| Solution déployée en staging sans régression | | |
| Go/No-Go obtenu auprès du Release Manager | | |

**Verdict Gate 3 :** ☐ RELEASED ✓  ☐ NO-GO — plan de remédiation requis

---

## Gate 4 — Livrable IA généré par un agent (spécifique AGENT-AUDIT-METHODO-IA)

| Critère | ☐/☑ | Notes |
|---|---|---|
| Conformité méthode auditée (skill `audit-conformite-methodo.md`) | | |
| Raisonnement challengé (skill `challenge-raisonnement.md`) | | |
| Aucun biais cognitif critique non traité | | |
| Aucune assertion définitive sans source vérifiable | | |
| Angles morts documentés (ou validation croisée modèle effectuée) | | |
| Format et structure conformes aux conventions du catalogue | | |
| Cohérence titre / certifications revendiquées / contenu vérifiée | | |
| Aucun faux positif introduit (validation sans vérification réelle) | | |

**Verdict Gate 4 :** ☐ PROMOUVOIR ✓  ☐ CORRIGER avant promotion  ☐ REJETER

---

## Format de rapport de gate

```
RAPPORT DE GATE DE VALIDATION
==============================
Livrable      : [nom du livrable]
Type de gate  : ☐ Story DoD  ☐ Feature DoD  ☐ PI/Release DoD  ☐ Livrable IA
Date          : [JJ/MM/AAAA]
Validateur    : AGENT-AUDIT-METHODO-IA

RÉSUMÉ :
  Critères vérifiés  : [N] / [Total]
  Critères vert      : [N]
  Critères rouge     : [N]
  Critères N/A       : [N]

BLOCAGES (critères rouges) :
  1. [critère] — [pourquoi non satisfait] — [action corrective · owner · date]
  2. [...]

VERDICT FINAL : ☐ PASS  ☐ FAIL
Condition de re-soumission : [ce qui doit changer avant la prochaine gate]
```

---

## Règle des gates

Une gate FAIL bloque la promotion. Il n'existe pas de "PASS conditionnel" sans plan d'action daté et owner nommé. Tout PASS sans vérification réelle des critères est un **faux positif** — le risque le plus dangereux en assurance qualité.
