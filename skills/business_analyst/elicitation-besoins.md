# Skill — Élicitation & Analyse des Besoins (BABOK Knowledge Area #4)

> Certifications : **IIBA CBAP** (Certified Business Analysis Professional) · **CCBA** (Certification of Capability in Business Analysis) · **PMI-PBA** (Professional in Business Analysis)
> Référentiels normatifs : **BABOK v3** (IIBA 2015) · **Volere Requirements** (Robertson & Robertson, 3rd ed 2012) · **Wiegers Software Requirements** (Karl Wiegers, 3rd ed 2013) · **ISO/IEC 25010:2011** (qualité logicielle)

## Objectif

Recueillir, structurer et valider les **besoins business + stakeholder + solution + transition** (taxonomie BABOK) en mobilisant les **14 techniques d'élicitation** du BABOK Knowledge Area #4 "Elicitation & Collaboration", dans tous segments d'organisations (Grands comptes, ETI, scale-ups, PME, secteur public).

## Cadre BABOK v3 — Knowledge Area "Elicitation & Collaboration" (Tasks 10.1-10.5)

| Task | Activité | Livrable |
|---|---|---|
| **10.1** | Prepare for Elicitation | Plan d'élicitation, stakeholders identifiés, techniques sélectionnées |
| **10.2** | Conduct Elicitation | Notes brutes, transcripts, observations |
| **10.3** | Confirm Elicitation Results | Validation stakeholders, résolution divergences |
| **10.4** | Communicate Business Analysis Information | Synthèse documentée, présentation parties prenantes |
| **10.5** | Manage Stakeholder Collaboration | Plan d'engagement, gestion des conflits |

## 14 techniques d'élicitation BABOK v3 — Tableau de sélection

| Technique | Contexte privilégié | Durée | Type |
|---|---|---|:---:|
| **Interview** (individuelle/groupe) | Experts métier, décideurs, asymétrie info | 45-90 min | Collaborative |
| **Brainstorming** | Idéation, options innovantes | 1-2h | Collaborative |
| **Focus Groups** | Convergence opinions, segments utilisateurs | 1-2h | Collaborative |
| **Document Analysis** | Cahier des charges existant, procédures, regs | Variable | Research |
| **Interface Analysis** | Intégration SI, flux inter-systèmes (API, EDI) | 2-4h | Research |
| **Observation** (passive/active) | Processus opérationnels, gestes métier | 1-3h | Experimental |
| **Prototyping** (low-fi/hi-fi) | UI/UX, parcours utilisateur, validation rapide | 1-2 sprints | Experimental |
| **Survey/Questionnaire** | Populations larges, confirmation quantifiée | 1-3 semaines | Research |
| **Workshops** | Co-construction, alignement stakeholders | 2-4h ou ½j | Collaborative |
| **Mind Mapping** | Exploration thématique, hiérarchies | 1-2h | Research |
| **Process Modelling** (BPMN) | As-Is/To-Be, dépendances activités | Variable | Research |
| **Concept Modelling** (UML CDM) | Vocabulaire métier, domaine | 2-4h | Research |
| **Reverse Engineering** | Système legacy non documenté | Variable | Research |
| **Lessons Learned** (REX) | Capitaliser projets antérieurs | 1-2h | Research |

## Volere Requirements Specification (Robertson 2012) — Structure Atomic Requirement

```
Requirement #: <ID unique>
Type:           <Functional / Look & Feel / Usability / Performance / Operational / Maintainability / Security / Cultural / Legal>
Event/BUC/PUC:  <Trigger métier ou cas d'usage>
Description:    <1 phrase claire, sans jargon technique>
Rationale:      <Pourquoi ce besoin ? Quelle valeur ?>
Originator:     <Stakeholder source>
Fit Criterion:  <Mesure objective de satisfaction — testable>
Priority:       <MoSCoW : Must / Should / Could / Won't>
Dependencies:   <Autres requirements liés>
Conflicts:      <Requirements antagonistes>
Supporting Materials: <Maquettes, schémas, documents>
History:        <Date création, modifications, validation>
```

Le **Volere Shell** complet contient 24 sections (Project Drivers, Constraints, Functional/NFR, Project Issues). Le **Snow Card** (format simplifié recto-verso) sert pour atelier rapide.

## Wiegers (2013) — Practices critiques

- **Stakeholder Matrix** : axes Power × Interest (Mendelow 1991) — segmenter en Manage Closely / Keep Satisfied / Keep Informed / Monitor
- **Requirements Prioritization Quadrant** : axes Business Value × Implementation Cost — High-Low (Quick Wins), High-High (Strategic), etc.
- **Volatility Index** : noter chaque requirement de 1 (stable) à 5 (très volatil) pour piloter le risque de changement
- **Requirements Specification Reviews** : checklist Wiegers (clarté, complétude, cohérence, testabilité)

## Exigences fonctionnelles vs Non-Fonctionnelles (NFR)

| Type | Référentiel | Exemples |
|---|---|---|
| **Fonctionnelles** | BABOK v3 § 9.5 | "Le système permet de filtrer les transactions par date, montant, statut" |
| **Non-Fonctionnelles** | **ISO/IEC 25010:2011** (8 caractéristiques) | Functional Suitability · Performance Efficiency · Compatibility · Usability · Reliability · Security · Maintainability · Portability |
| **NFR alternatif** | **FURPS+** (Grady HP 1992) | Functionality · Usability · Reliability · Performance · Supportability · (+ Design/Implementation/Interface/Physical) |

**Anti-pattern critique** : oublier les NFR = projet livré "fonctionnel" mais lent / non sécurisé / non accessible / non maintenable.

## Formats d'expression : User Stories vs Use Cases vs Job Stories

| Format | Source | Quand utiliser |
|---|---|---|
| **User Story Connextra** (2001) — *"As a [rôle], I want [action], so that [bénéfice]"* — critères **INVEST** (Wake 2003) | Connextra Ltd 2001 | Backlog Agile/Scrum, exigences fonctionnelles atomiques |
| **Use Cases Cockburn** (2001) — Acteur · Précondition · Scénario nominal · Scénarios alternatifs · Postcondition | Cockburn *Writing Effective Use Cases* (Addison-Wesley 2001) | Spec fonctionnelle détaillée MOA cycle V, exigences avec branches complexes |
| **Job Stories Klement** (2013) — *"When [situation], I want [motivation], so I can [résultat]"* — focus contexte, pas persona | Alan Klement (Intercom blog 2013) | Discovery, exigences orientées Job-To-Be-Done (Christensen) |

## Priorisation — MoSCoW + Kano

- **MoSCoW** (Dai Clegg, DSDM 1994) : **M**ust have (livrable bloquant) · **S**hould have (important non-bloquant) · **C**ould have (nice-to-have) · **W**on't have this time (out of scope explicite)
- **Modèle Kano** (Noriaki Kano, Tokyo Univ. of Science 1984) : **Must-be** (basiques) · **Performance** (linéaire satisfaction) · **Attractive** (delighters non attendus) · **Indifferent** · **Reverse**

## Exemple chiffré sectoriel — Refonte portail KYC/AML (banque CIB)

**Contexte** : refonte du portail KYC/AML d'une banque CIB (segment régulé — RGPD + DORA + LCB-FT + Sapin 2). 12 stakeholders, 320 exigences identifiées.

**Plan d'élicitation** :
- **6 interviews** Compliance Officer, RCS, MLRO, DPO, RSSI, MOE (Tasks 10.1-10.2)
- **2 workshops** As-Is/To-Be (BPMN) — 12 participants × 4h
- **Document Analysis** : Politique KYC, procédure LCB-FT, Règlement (UE) 2015/849 5AMLD
- **Observation** : 2 cellules onboarding (5h) — temps moyen onboarding client institutionnel : 11 jours
- **Survey** RCO : 47 répondants sur 60 (78% participation)

**Volere Atomic Requirement exemple** (Functional Suitability) :
```
Requirement #: REQ-KYC-014
Type:           Functional · Performance Efficiency (NFR)
Description:    Le système réalise un screening sanctions (OFAC, EU, ONU) en < 3 secondes pour 95% des requêtes (p95)
Rationale:      Réduire onboarding 11 j → 3 j (objectif SLA Direction Compliance)
Fit Criterion:  p95 latence ≤ 3000ms mesurée sur 10000 requêtes test PreProd
Priority:       Must (bloquant régulateur — 5AMLD art. 8)
Dependencies:   REQ-KYC-013 (intégration API World-Check), REQ-NFR-AVAIL-01 (99.95% uptime)
```

**Backlog priorisé MoSCoW** : 142 Must · 89 Should · 67 Could · 22 Won't (scope explicitement reporté Phase 2).

## Anti-patterns d'élicitation (8 explicites)

- ❌ **Solution avant problème** — élicitation pré-câblée par une solution prédéfinie (ex : "on veut Salesforce") au lieu d'élicitation du besoin → biais de cadrage majeur
- ❌ **Pas de validation utilisateur final** — exigences recueillies uniquement via PM/Sponsors sans confronter aux utilisateurs opérationnels → écart As-Is/To-Be massif
- ❌ **Élicitation one-shot** — 1 seul atelier puis livrable figé → exigences volatiles non capturées
- ❌ **NFR oubliés** — focus 100% fonctionnel, NFR ISO 25010 (sécurité, perf, accessibilité, conformité) absents → projet livré "fonctionnel" mais inutilisable en prod
- ❌ **Pas de traçabilité** — pas de lien Requirement → Test → Release → Stakeholder → impossible audit régulateur
- ❌ **Exigences en jargon technique** — formulations incompréhensibles métier → désalignement stakeholders/dev
- ❌ **Brainstorming sans facilitation** — HiPPO (Highest Paid Person's Opinion) domine, biais cognitifs (ancrage, conformité de groupe) → exigences biaisées
- ❌ **Job Stories confondues avec User Stories** — mélange formats casse la cohérence backlog (cf. [[stories-techniques]] et [[po-user-story]])

## Livrables

- **Document d'exigences Volere** (Shell 24 sections ou Snow Cards pour formats agiles)
- **Matrice de traçabilité** : Requirement ↔ Test ↔ Release ↔ Stakeholder (audit régulateur)
- **Glossaire métier** (termes, définitions, synonymes, traductions)
- **Plan d'élicitation** (techniques BABOK retenues, calendrier, stakeholders impliqués)
- **Backlog priorisé MoSCoW** + heatmap Kano (basiques / performance / attractive)
- **Rapport d'élicitation** : insights, divergences arbitrées, points ouverts, Volatility Index par requirement

## Format de sortie

Précise : **contexte projet** · **segment organisation** (grand compte / ETI / scale-up / PME / secteur public) · **stakeholders disponibles** (rôles, dispo) · **techniques BABOK préférées** (parmi les 14) · **contraintes régulatoires** (RGPD, AI Act, sectoriel : DORA banque, MDR santé, NIS2, etc.) · **délais et budget atelier**.

## Sources

- IIBA — *A Guide to the Business Analysis Body of Knowledge (BABOK Guide) v3* (IIBA 2015) — référentiel officiel certif CBAP/CCBA
- Robertson S. & Robertson J. — *Mastering the Requirements Process: Getting Requirements Right* 3rd ed (Addison-Wesley 2012) — référence Volere
- Wiegers K. & Beatty J. — *Software Requirements* 3rd ed (Microsoft Press 2013) — référence #1 software requirements
- Cockburn A. — *Writing Effective Use Cases* (Addison-Wesley 2001)
- Klement A. — *Replacing The User Story With The Job Story* (Intercom blog 2013, jobstoriesoftware.com)
- Wake B. — *INVEST in Good Stories, and SMART Tasks* (xp123.com 2003)
- Clegg D. & Barker R. — *Case Method Fast-Track: A RAD Approach* (Addison-Wesley 1994) — origine MoSCoW
- Kano N. et al. — *Attractive Quality and Must-be Quality* (Hinshitsu, J. of the Japanese Society for Quality Control 1984)
- Grady R. — *Practical Software Metrics for Project Management and Process Improvement* (HP/Prentice-Hall 1992) — FURPS
- ISO/IEC 25010:2011 — Systems and software Quality Requirements and Evaluation (SQuaRE)

## Voir aussi

- [[modelisation-processus]] — BPMN 2.0 + UML 2.5 pour Process/Concept Modelling (BABOK 10.2)
- [[cartographie-si]] — TOGAF 10 + Archimate pour Interface Analysis (BABOK 10.2)
- [[analyse-impact]] — Kotter + BABOK Strategy Analysis pour Change Impact post-élicitation
- [[gestion-exigences]] — gestion cycle de vie + matrix traçabilité
- [[recette-moa]] — validation Fit Criterion en recette MOA
- [[../scrum/po-user-story]] — User Stories Connextra + INVEST en contexte Scrum
