# Skills — Contrôle & Challenge des livrables IA

> Dossier rattaché à `AGENT-AUDIT-METHODO-IA.md`
> Référentiels : SAFe 6 (SA, POPM, SSM, SASM, RTE) · Scrum Guide 2020 · PSM I/II/III · PSPO I/II · ISTQB CTFL/CTAL · PMI PMBOK 7 · ISO 9001:2015 · CMMI · ISO/IEC 42001:2023

---

## Index des skills (3)

| # | Skill | Quand l'invoquer | Référentiel |
|---|---|---|---|
| 1 | [`audit-conformite-methodo.md`](audit-conformite-methodo.md) | Auditer la conformité méthode (checklists SAFe/Scrum/ISTQB/PMI) | SAFe 6 · Scrum Guide 2020 · CTFL · PMBOK 7 · ISO 9001 |
| 2 | [`challenge-raisonnement.md`](challenge-raisonnement.md) | Challenger le raisonnement (biais cognitifs, devil's advocate, red-team) | CTAL-TM · PMI-ACP · ISO 9001 §9.3 |
| 3 | [`gate-validation-livrable.md`](gate-validation-livrable.md) | Gate de validation avant promotion d'un livrable (4 niveaux DoD) | SAFe DoD · ISTQB Exit Criteria · CMMI · PMI Quality Gate |

---

## Choisir le bon skill — Arbre de décision

```
Tu veux ...

  ... VÉRIFIER LA CONFORMITÉ MÉTHODE D'UN LIVRABLE ?
    → audit-conformite-methodo.md (checklists certifiantes)
       · Scrum Guide 2020 (Sprint Goal unique, Developers auto-gérés)
       · SAFe 6 (WSJF relatif, MoSCoW = US only, PI Obj committed/uncommitted)
       · ISTQB (critères entrée/sortie, sévérité ≠ priorité)
       · PMBOK 7 (performance domains)

  ... DÉTECTER DES BIAIS OU FAIBLESSES DE RAISONNEMENT ?
    → challenge-raisonnement.md
       · 8 biais cognitifs (confirmation, ancrage, halo, Dunning-Kruger, surconfiance IA, complaisance...)
       · Devil's advocate (thèse / contre-thèse / synthèse / verdict)
       · Red-team (5 vecteurs d'attaque)

  ... VALIDER UN LIVRABLE AVANT PROMOTION ?
    → gate-validation-livrable.md
       · Gate 1 : Story DoD (Scrum 2020 + SAFe 6)
       · Gate 2 : Feature DoD (SAFe 6)
       · Gate 3 : PI / Release DoD (SAFe 6 + ISTQB Exit Criteria)
       · Gate 4 : Livrable IA (audit méthode + challenge + biais)
```

---

## Règles d'or appliquées

1. **Règle anti-théâtre** : ne jamais valider un livrable pour éviter la friction. Faux positifs > rejets non fondés.
2. **Honnêteté sur les angles morts** : sur un même modèle LLM, les biais sont corrélés → proposer une validation croisée sur un autre modèle pour les enjeux forts.
3. **Distinguer erreur de méthode** (non-conformité certification) **vs choix de design** (liberté légitime).
4. **Chaque critique en 3 parties** : constat · référence certifiante · recommandation concrète.

---

## Frontières avec les autres agents

| Sujet voisin | Agent concerné | Frontière |
|---|---|---|
| Tests fonctionnels / BDD / automation | `AGENT-QA-AGILE.md` / `AGENT-QA-CYCLEV.md` | AUDIT-METHODO = méthode/raisonnement ; QA = exécution tests |
| Rédaction des User Stories | `AGENT-PO-SCRUM.md` | AUDIT-METHODO contrôle ; PO-SCRUM rédige |
| Architecture technique IA | `AGENT-AI-ARCHITECT.md` | AUDIT-METHODO contrôle ; AI-ARCHITECT conçoit |
| Audit sécurité technique (OWASP, pentest) | `AGENT-SECURITE-IA.md` | AUDIT-METHODO = méthode ; SECURITE-IA = audit technique sécurité |

---

## Référentiels et standards utilisés

- **Scrum Guide 2020** : https://scrumguides.org/scrum-guide.html
- **SAFe 6** : https://framework.scaleagilesoftware.com/
- **ISTQB** : Foundation Level v4.0 + Advanced Test Manager
- **PMBOK 7** (PMI) : performance domains
- **ISO 9001:2015** + **ISO/IEC 42001:2023** (AI Management System)
- **CMMI** : Capability Maturity Model Integration
- **Kahneman & Tversky** : référence biais cognitifs
- **MITRE ATT&CK** : pour vecteurs red-team
