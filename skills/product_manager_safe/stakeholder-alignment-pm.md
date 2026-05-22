# Skill — Alignement des Parties Prenantes Niveau Programme
> Certifications : SAFe POPM 6 (Scaled Agile), PMP (PMI), PMI-PBA (PMI)

## Objectif
Aligner les parties prenantes au niveau Programme SAFe — Business Owners, sponsors, équipes, clients — sur la vision produit, les priorités et les décisions de trade-off, pour garantir un soutien continu à l'ART.

## Rôles clés au niveau Programme SAFe

```
BUSINESS OWNERS (BO)
  Rôle   : Valident les PI Objectives, notent la Business Value
  Freq.  : PI Planning (présents) + System Demo (optionnel)
  Action : Impliquer dans la priorisation WSJF

SYSTEM ARCHITECT / ENTERPRISE ARCHITECT
  Rôle   : Valident les choix techniques du Programme
  Freq.  : Architecture Sync hebdomadaire
  Action : Aligner vision technique et vision produit

BUSINESS STAKEHOLDERS (clients, direction métier)
  Rôle   : Fournissent le feedback marché et métier
  Freq.  : System Demo fin de sprint
  Action : Inviter aux démos, collecter le feedback formel

PRODUCT MANAGER (vous)
  Rôle   : Pont entre stakeholders et ART
  Resp.  : Vision, roadmap, priorisation Programme
```

## Plan d'alignement — Template

| Partie Prenante | Besoin d'alignement | Fréquence | Canal | Responsable |
|---|---|---|---|---|
| DG / Sponsor | Vision, ROI, jalon stratégique | Mensuel | Steering Committee | PM |
| Business Owners | PI Objectives, BV notation | Par PI | PI Planning + revue | PM |
| DSI | Architecture, sécurité, infra | Bimensuel | Architecture Sync | PM + SA |
| Clients pilotes | Feedback features, NPS | Bi-sprint | System Demo | PM |
| Équipes ART | Contexte métier, priorités | Par sprint | PO Sync | PM |
| DPO / Juridique | Conformité RGPD, IA Act | Par release | Atelier dédié | PM + DPO |

## Communication de la roadmap — Template Executive

```
NOTE DE ROADMAP — [PRODUIT] — [DATE]
Pour : Direction + Business Owners
De   : Product Manager

ÉTAT ACTUEL (PI-12)
─────────────────────────────────────────────────────────
✅ F-01 Scoring IA : 80% complété — on track
⚠ F-02 Dashboard : 1 semaine de retard (dépendance infra)
   → Mitigation : livraison version simplifiée Sprint 4

PROCHAINS JALONS
─────────────────────────────────────────────────────────
Release R2.0 : 15 juin 2026 — Pilote 3 clients CAC40
Release R2.1 : 14 sep 2026 — Extension transcription

DÉCISIONS DEMANDÉES
─────────────────────────────────────────────────────────
1. Prioriser F-06 (API SIRH) ou F-07 (Module mobile) pour PI-13 ?
   Recommandation PM : F-06 (WSJF 3.5 vs 1.2) → [VALIDATION DG]

RISQUES SIGNALÉS
─────────────────────────────────────────────────────────
🔴 IA Act — Délai AIPD CNIL potentiellement > 3 mois
   Impact : Release R2.0 peut glisser de 4-6 semaines
   Action : Accélérer consultation DPO (J+5)
```

## Livrables
- Plan d'alignement parties prenantes
- Note de roadmap executive (1 page)
- Compte-rendu Steering Committee
- Log des décisions et arbitrages

## Format de sortie
Précise : parties prenantes identifiées, décisions en attente, roadmap actuelle, risques connus.
