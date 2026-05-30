# Skill — Gestion des Risques Projet & Programme

> Certifications : **PSPO II** · **PMI-RMP** (Risk Management Professional) · **ISO 31000 Lead Risk Manager** · **COSO ERM Certificate** · **ICAgile ICP-APO**
> Agent : AGENT-PO-SCRUM.md

## Objectif

Identifier, évaluer, traiter et monitorer les risques d'un projet/programme selon les référentiels normatifs (**ISO 31000:2018**, **PMBOK 7**, **COSO ERM 2017**) — couplés aux pratiques **agiles** (SAFe ROAM, Risk Burndown Chart, Risk Adjusted Backlog) et aux exigences **réglementaires sectorielles** (DORA banque, NIS2, AI Act, RGPD) — afin de transformer l'incertitude en décisions tracées et opposables.

## Cadre BABOK v3 (IIBA 2015) — Knowledge Areas mobilisées

| KA BABOK v3 | Tâches typiques gestion des risques |
|---|---|
| **#9 Strategy Analysis** | T9.3 Assess Risks — identification, analyse, plan de traitement |
| **#5 Requirements Analysis & Design Definition** | T5.5 Define Design Options + évaluation risques par option |
| **Perspective Agile** | Risk adjusted backlog, ROAM Board, Risk Burndown Chart |

## ISO 31000:2018 — Référentiel normatif international

### 8 Principes (clause 4)

1. Intégrée — la gestion des risques fait partie de toutes les activités
2. Structurée et exhaustive
3. Adaptée au contexte (interne/externe)
4. Inclusive — implique les parties prenantes
5. Dynamique — anticipe, détecte, reconnaît, réagit aux changements
6. Meilleure information disponible (historique, actuelle, prospective)
7. Facteurs humains et culturels intégrés
8. Amélioration continue

### Framework (clause 5) — Leadership · Intégration · Conception · Implémentation · Évaluation · Amélioration

### Processus 6 étapes (clause 6)

```
1. Communication & Consultation (transverse)
2. Scope, Context, Criteria
3. Risk Assessment
   ├─ Risk Identification
   ├─ Risk Analysis (P × I, qualitatif/quantitatif)
   └─ Risk Evaluation (vs critères d'acceptation)
4. Risk Treatment (Avoid · Reduce · Transfer · Accept)
5. Monitoring & Review (transverse)
6. Recording & Reporting (transverse)
```

## PMBOK Guide 7th ed (PMI 2021) — Performance Domain Uncertainty

**8 principes de pilotage de l'incertitude** : Stewardship · Team · Stakeholders · Value · Systems Thinking · Leadership · Tailoring · Quality · **Complexity · Risk** · Adaptability/Resiliency · Change.

**Risk Categories typiques** (RBS — Risk Breakdown Structure) :
- **Technique** : architecture, performance, technologie immature, dette technique
- **Externe** : marché, réglementaire, fournisseurs, événements géopolitiques
- **Organisationnel** : ressources, priorités, dépendances inter-projets, sponsor
- **Project Management** : estimation, planification, communication, contrôle
- **Cyber & Data** : sécurité, intégrité, confidentialité, RGPD/AI Act
- **Conformité** : sectoriel (DORA, NIS2, MiFID II, Bâle IV, IFRS9, FRTB)

## COSO ERM 2017 — Enterprise Risk Management - Integrating with Strategy & Performance

5 composants × 20 principes (référentiel américain de gouvernance des risques entreprise) :

| Composant | Principes clés (extrait) |
|---|---|
| **Governance & Culture** | Conseil d'administration · culture risk-aware · structures opérationnelles · attractivité talents |
| **Strategy & Objective-Setting** | Contexte business · appétit pour le risque · stratégies alternatives · objectifs business |
| **Performance** | Identification · évaluation sévérité · priorisation · réponses · portfolio view |
| **Review & Revision** | Modifications substantielles · revue ERM · amélioration continue |
| **Information, Communication & Reporting** | SI risques · communication interne · reporting risques + performance + culture |

## SAFe Risk Management — ROAM Board (cérémonie Inspect & Adapt PI Planning)

| Statut ROAM | Signification | Action |
|:---:|---|---|
| **R** Resolved | Risque résolu, sans suite | Archiver |
| **O** Owned | Risque pris en charge par un membre nommé | Plan d'action + suivi en daily SoS / I&A |
| **A** Accepted | Risque accepté (impact tolérable, coût mitigation > impact) | Acceptation tracée + décision gouvernance |
| **M** Mitigated | Plan de mitigation en cours, risque sous contrôle | Suivi mensuel + revue I&A trimestrielle |

**Règle SAFe** : tout risque non ROAM-cassé à la fin du PI Planning **bloque le commitment** de l'équipe sur le PI suivant.

## ISO 31010:2019 — Top 10 techniques d'évaluation des risques

| Technique | Type | Usage privilégié |
|---|---|---|
| **Brainstorming** | Qualitatif | Identification large, ateliers BA/équipe |
| **Méthode Delphi** | Qualitatif | Avis experts anonymisés, consensus itératif |
| **SWIFT** (Structured What-If Technique) | Qualitatif | Identification systématique scénarios |
| **Bowtie Analysis** | Qualitatif/Visuel | Causes (gauche) × Événement central × Conséquences (droite) + barrières |
| **FMEA** (Failure Mode & Effect Analysis, IEC 60812) | Quantitatif | Industrie, ingénierie produit, RPN = Sévérité × Occurrence × Détection |
| **HAZOP** (Hazard and Operability Study) | Qualitatif | Process industriels chimiques/pharma/énergie |
| **RCA Five Whys** (Toyota) | Qualitatif | Recherche cause racine post-incident |
| **Fault Tree Analysis** | Quantitatif | Décomposition top-down logique booléenne |
| **Event Tree Analysis** | Quantitatif | Analyse séquences post-événement |
| **Monte Carlo Simulation** | Quantitatif | Quantification coût/délai, distribution probabiliste |

## Matrice Probabilité × Impact (Heat Map 5×5)

```
Impact / Probabilité    Très faible  Faible    Moyenne   Forte    Très forte
                            (1)       (2)       (3)       (4)        (5)
Catastrophique (5)          5 🟡     10 🟡    15 🔴     20 🔴     25 🔴
Majeur         (4)          4 🟢      8 🟡    12 🟡     16 🔴     20 🔴
Modéré         (3)          3 🟢      6 🟢     9 🟡     12 🟡     15 🔴
Mineur         (2)          2 🟢      4 🟢     6 🟢      8 🟡     10 🟡
Négligeable    (1)          1 🟢      2 🟢     3 🟢      4 🟢      5 🟡

🟢 1-6 Faible (Accept/Monitor) | 🟡 7-12 Moyen (Reduce/Transfer) | 🔴 13-25 Élevé (Reduce immédiat / Escalade COMEX)
```

**Définitions quantitatives** (à calibrer par projet) :
- Probabilité : Très faible < 10% · Faible 10-30% · Moyenne 30-50% · Forte 50-70% · Très forte > 70%
- Impact financier (banque CIB) : Négligeable < 100k€ · Mineur 100k-1M€ · Modéré 1-10M€ · Majeur 10-100M€ · Catastrophique > 100M€

**Appétit pour le risque** (Risk Appetite) : seuil global défini par le COMEX, validé Conseil d'administration. **Tolérance au risque** : seuils opérationnels par catégorie. **Capacité au risque** : maximum absolu absorbable sans menacer la pérennité.

## Risk Register enrichi — Template 13 colonnes

| ID | Catégorie (RBS) | Cause | Événement (Risque) | Conséquence | Proba (1-5) | Impact (1-5) | Score | Owner (RACI) | Stratégie traitement | Mitigation (préventif) | Contingency (réactif) | Trigger / Statut |
|:---:|---|---|---|---|:---:|:---:|:---:|---|:---:|---|---|---|
| R001 | Cyber | Configuration AWS S3 ouverte | Fuite données clients PII | Sanction CNIL + perte confiance | 3 | 5 | 15 🔴 | RSSI | Reduce | Audit Cloud Security Posture + bucket policies + IaC Terraform | Plan incident CSIRT + comm. CNIL 72h | Alert ScoutSuite |
| R002 | Conformité DORA | Dépendance fournisseur cloud non-EU | Non-conformité DORA art. 28 | Sanction ACPR jusqu'à 1% CA | 4 | 4 | 16 🔴 | DSI Conformité | Reduce | Migration sovereign cloud + clauses contractuelles | Plan de réversibilité 90j documenté | Audit DORA T-3 mois |

## Risk Quantification — EMV + Monte Carlo + Risk Burndown

### Expected Monetary Value (EMV)
**EMV = Probabilité × Impact financier**
Exemple : Risque livraison retard 3 mois, P = 40%, Impact = 2M€ pénalités → EMV = 800k€ (provision recommandée).

### Monte Carlo Simulation
- **Inputs** : distribution probabiliste de chaque variable d'incertitude (durée tâche, coût, productivité)
- **Process** : 10 000 itérations minimum, recalcul date fin / coût total
- **Outputs** : courbe S de probabilité cumulée, percentiles P50/P80/P95
- **Décision** : engagement à P80 (sécurisé), provision = P95 - P50
- **Outils** : @Risk (Palisade) · Crystal Ball (Oracle) · ModelRisk · Risk Solver

### Risk Burndown Chart (Mike Cohn 2006)
Graphique sprint-by-sprint du score total des risques actifs (Σ P × I). **Tendance baissière** = saine. **Stable ou ascendante** = alerte projet.

## IIA Three Lines Model (2020) — Gouvernance des risques

| Ligne | Rôle | Acteurs |
|:---:|---|---|
| **1ère ligne** | Management opérationnel — détient et gère les risques | Métier, équipes projet, PO, DevOps |
| **2ème ligne** | Risk Management & Compliance — cadre, méthodologie, surveillance | Direction des Risques, Conformité, RSSI, Juridique |
| **3ème ligne** | Audit Interne — assurance indépendante | Inspection Générale, Audit Interne, IT Audit |

Évolution 2020 : abandon du terme "Defense" (connotation défensive) au profit de "Lines" — modèle collaboratif et non plus en silos.

## Risk Adjusted Backlog — Intégration cérémonies agiles

| Cérémonie | Action gestion des risques |
|---|---|
| **Daily Standup** | Mention rapide des risques actifs bloquants |
| **Backlog Refinement** | Tagging risque sur les stories impactées + critères d'acceptation incluant fallback |
| **Sprint Planning** | Stories à risque élevé planifiées en début de sprint (échec rapide) |
| **Sprint Review** | Démo intègre démonstration des contrôles risques (sécu, perf, conformité) |
| **Sprint Retrospective** | Revue trimestrielle du Risk Register, ajout des risques apparus |
| **SAFe PI Planning** | ROAM Board obligatoire (jour 2) avant commitment |
| **SAFe Inspect & Adapt** | Revue trimestrielle ROAM + escalade ART/Solution Train |

## Risques conformité réglementaire — Cartographie sectorielle

| Réglementation | Périmètre | Échéance | Risque associé |
|---|---|---|---|
| **DORA** (UE 2022/2554) | Banque / Finance — ICT risk + third-party risk | **17 janv. 2025** | Sanction jusqu'à 1% CA, RTO services critiques, registre fournisseurs ICT |
| **NIS2** (UE 2022/2555) | Entités essentielles/importantes (énergie, santé, transport, eau...) | 17 oct. 2024 | Sanction jusqu'à 10M€ ou 2% CA, déclaration incident 24h |
| **AI Act UE** (Règl. 2024/1689) | Systèmes IA haut risque | Application 2025-2027 | Sanctions jusqu'à 35M€ ou 7% CA |
| **RGPD** (UE 2016/679) | Données personnelles | En vigueur | Sanction jusqu'à 20M€ ou 4% CA, DPIA obligatoire |
| **Bâle IV / FRTB** | Banques internationales | 2025-2028 | Exigences fonds propres + risque marché |
| **IFRS 9** | Comptabilité bancaire | En vigueur | Provisionnement pertes attendues (ECL) |
| **MiFID II** | Marchés financiers UE | En vigueur | Best execution, reporting transactions |

## Exemple chiffré sectoriel — Banque européenne de financement et investissement (CIB)

**Contexte anonymisé** : banque européenne de financement et investissement (Corporate & Investment Banking), 8 pays, ~25 000 collaborateurs, CA NBI ~10 Md€/an. Programme **conformité DORA** (échéance 17 janvier 2025), pilotage par direction des Risques opérationnels + Inspection Générale + DSI Conformité. Durée : 18 mois.

**Périmètre identifié** :
- **47 services critiques ICT** (Critical or Important Functions au sens DORA art. 28) : trading platforms (12) · post-trade & settlement (8) · paiements (6) · gestion collatéraux (4) · KYC/AML (5) · reporting régulateur (7) · datawarehouse risk (5)
- **35 fournisseurs ICT critiques** identifiés (third-party risk register DORA art. 28-30)
- **312 risques** inscrits au Risk Register groupe (RBS 6 catégories)

**Risk Register — Top 10 risques scorés (extrait)** :

| ID | Catégorie | Risque | P | I | Score | EMV | Stratégie |
|:---:|---|---|:---:|:---:|:---:|---|:---:|
| R001 | Conformité DORA | Non-conformité art. 28 third-party register au 17/01/2025 | 4 | 5 | 20 🔴 | 80 M€ | Reduce |
| R002 | Cyber | Ransomware paralysant trading platforms (RTO > 4h) | 3 | 5 | 15 🔴 | 45 M€ | Reduce |
| R003 | Cyber | Compromise supply chain (third-party SaaS) | 4 | 4 | 16 🔴 | 32 M€ | Reduce + Transfer |
| R004 | Modèle IA | Biais modèle scoring crédit corporate (RGPD art. 22 + AI Act) | 3 | 4 | 12 🟡 | 12 M€ | Reduce |
| R005 | Conformité Bâle IV | Retard implémentation FRTB calcul fonds propres | 3 | 5 | 15 🔴 | 35 M€ | Reduce |
| R006 | Opérationnel | Perte continuité service settlement T2S BCE | 2 | 5 | 10 🟡 | 18 M€ | Reduce + Transfer assurance |
| R007 | Externe | Dépendance cloud non-EU (souveraineté) | 4 | 4 | 16 🔴 | 28 M€ | Reduce migration |
| R008 | Project | Retard programme (estimation initiale 12 mois → 18 mois) | 4 | 3 | 12 🟡 | 4.5 M€ | Reduce planning |
| R009 | Cyber | Fraude interne (rogue trader) | 2 | 5 | 10 🟡 | 22 M€ | Transfer + Detect |
| R010 | Conformité IFRS9 | Calibration ECL post-crise non documentée | 3 | 3 | 9 🟡 | 5 M€ | Reduce |

**Monte Carlo simulation budget programme** :
- Inputs : 47 work packages × distribution PERT (optimiste/probable/pessimiste) + variables d'incertitude (taux change USD/EUR, disponibilité ressources externes, complexité réglementaire émergente)
- 10 000 itérations sur outil @Risk
- Résultats : budget P50 = 16.2 M€ · P80 = 18.0 M€ · P95 = 20.5 M€
- **Engagement gouvernance : 18 M€** (P80) + provision contingence 2.5 M€ (P95-P50)

**ICT Third-Party Risk Register (DORA art. 28-30)** : 35 fournisseurs critiques évalués sur 12 critères (concentration, substituabilité, RTO/RPO, sub-outsourcing, localisation données, conformité DORA chain) — 8 fournisseurs en zone rouge → plan de mitigation (renégociation clauses, dual-sourcing, plan de réversibilité 90 jours).

**Gouvernance Three Lines Model** :
- 1L : 47 owners de service ICT critique + 6 Programme Managers DORA
- 2L : Direction des Risques Opérationnels + RSSI + Conformité + Juridique (comité hebdo)
- 3L : Inspection Générale (revue trimestrielle indépendante)

**Gains mesurés à T+18 mois (post-mise en conformité)** :
- Conformité DORA : **100%** des 47 services critiques documentés et testés (TLPT, Threat-Led Penetration Testing inclus)
- RTO services critiques : **< 2h** moyenne pondérée (vs 6h pré-programme, objectif DORA < 4h)
- Réduction risques résiduels score 🔴 : 32 → **9 risques** (-72%)
- Fournisseurs ICT non-conformes : 8 → **0** (renégociation + dual-sourcing + 2 sorties)
- Audits régulateur (ACPR) : **0 réserve majeure** sur Programme DORA (vs 5 réserves prévues sur scénario business-as-usual)
- ROI programme : non-perte de la sanction maximale ACPR/EBA + maintien licence bancaire passport européen

## 8 anti-patterns gestion des risques

- ❌ **Risk Register statique** rempli au kickoff puis jamais mis à jour → décor sans valeur opérationnelle
- ❌ **Cotation P × I sans définition quantitative** ("3" peut signifier 30% ou 50% selon l'humeur) → pas de comparabilité
- ❌ **Mitigation = "surveiller"** = aucune action, juste un mot dans une colonne — c'est de l'acceptation déguisée
- ❌ **Pas d'owner nommé** (responsabilité diluée "équipe") → personne n'agit
- ❌ **Risque accepté sans validation gouvernance** (acceptation au niveau PO/PM ne respecte pas l'appétit pour le risque COMEX)
- ❌ **Confusion risque / issue / dépendance** : un risque est un événement futur incertain · une issue est avérée · une dépendance est un fait
- ❌ **Cygne noir ignoré** car probabilité < 10% (cf. Taleb 2007) — la queue de distribution domine l'impact moyen
- ❌ **ROAM Board ignoré post-PI Planning** SAFe → engagement équipe non sécurisé, risques resurgissent en démo

## Outils

- **GRC / Risk Management** : ServiceNow GRC · IBM OpenPages · MetricStream · LogicGate Risk Cloud · Archer (RSA) · Riskonnect · SAP GRC
- **Quantification & Monte Carlo** : @Risk (Palisade) · Oracle Crystal Ball · ModelRisk · Frontline Solver · Python (numpy/scipy) · R (mc2d package)
- **Cybersecurity Risk** : OneTrust · Tenable Lumin · Qualys · Rapid7 InsightVM · CyberStrong (CyberSaint)
- **Third-Party Risk (DORA art. 28-30)** : BitSight · SecurityScorecard · UpGuard · Prevalent · OneTrust TPRM
- **Compliance** : Vanta · Drata · LogicGate · NAVEX Global
- **Agile Risk** : Jira (Risk Register custom fields) · Confluence · Azure DevOps Risk Tracking · LeanKit (ROAM Board)
- **Visualisation** : Lucidchart (Bowtie, Fault Tree) · Miro (Risk Heat Map collaborative) · PowerBI Risk Dashboard

## Livrables

- **Risk Management Plan** (charte) : périmètre, méthodologie, RACI, fréquence revues, escalade
- **Risk Register** enrichi 13 colonnes + version SAFe ROAM Board
- **Risk Breakdown Structure** (RBS) propre au projet
- **Risk Heat Map** mise à jour mensuelle
- **Risk Burndown Chart** sprint-by-sprint (agile)
- **Monte Carlo simulation report** (budget + délai, P50/P80/P95)
- **ICT Third-Party Risk Register** (DORA art. 28-30) si secteur financier
- **Plan de continuité (BCP) + Plan de reprise (DRP)** liés aux risques 🔴
- **Reporting comité risques** (1L/2L/3L) — gabarit standardisé COSO ERM Component 5

## Format de sortie

Pour chaque mission gestion des risques, précise :
- **Type projet** : SI · réglementaire (DORA/NIS2/AI Act) · transformation organisationnelle · IA · multi-dimensions
- **Référentiel principal** : ISO 31000 · PMBOK 7 · COSO ERM · SAFe ROAM · mix
- **Échelle** : projet (1-12 mois, Risk Register 30-80 lignes) · programme (12-36 mois, 150-300 lignes) · entreprise ERM (continu)
- **Appétit pour le risque** : conservateur (banque/santé/défense) · équilibré (industrie/télécom) · offensif (scale-up tech)
- **Réglementation sectorielle applicable** : DORA · NIS2 · AI Act · RGPD · Bâle IV · IFRS9 · MiFID II · MDR (santé) · ITAR (défense)

## Sources

- **ISO 31000:2018** — Risk management — Guidelines (ISO/TC 262)
- **ISO 31010:2019** — Risk management — Risk assessment techniques
- **ISO/IEC 27005:2022** — Information security, cybersecurity and privacy protection — Guidance on managing information security risks
- **PMBOK Guide, 7th Edition** — Project Management Institute (PMI, 2021) — Performance Domain Uncertainty
- **COSO ERM 2017** — *Enterprise Risk Management — Integrating with Strategy and Performance* (Committee of Sponsoring Organizations of the Treadway Commission)
- **DORA** — Règlement (UE) 2022/2554 du 14 décembre 2022 sur la résilience opérationnelle numérique du secteur financier — applicable 17 janvier 2025
- **NIS2** — Directive (UE) 2022/2555 du 14 décembre 2022 — transposition 17 octobre 2024
- **NIST AI Risk Management Framework 1.0** — NIST (janvier 2023)
- **SAFe 6.0 Risk Management** — Scaled Agile Inc. (2023) — ROAM Board
- **IIA Three Lines Model** — The Institute of Internal Auditors (juillet 2020, révision du Three Lines of Defense Model 2013)
- **Snowden D., Boone M.** — *A Leader's Framework for Decision Making* (Cynefin), Harvard Business Review (novembre 2007)
- **Cohn M.** — *Agile Estimating and Planning* (Prentice Hall, 2006) — Risk Burndown Chart
- **Hubbard D.** — *The Failure of Risk Management: Why It's Broken and How to Fix It* (Wiley, 2009, 2ème éd. 2020)
- **Taleb N.N.** — *The Black Swan: The Impact of the Highly Improbable* (Random House, 2007) — théorie des cygnes noirs

## Voir aussi

- [po-ai-product.md](po-ai-product.md) — AI Risk Register (NIST AI RMF) pour les features IA
- [po-backlog.md](po-backlog.md) — Risk Adjusted Backlog DSDM, intégration risques dans le refinement
- [dor-dod.md](dor-dod.md) — critères inclusion risque dans le Definition of Done
- [`../business_analyst/analyse-impact.md`](../business_analyst/analyse-impact.md) — analyse d'impact projet & conduite du changement (cousin direct, méthodes complémentaires)
- [`../business_analyst/cartographie-si.md`](../business_analyst/cartographie-si.md) — risques SI, dépendances applicatives, cercles d'impact
- [`../safe/inspect-adapt.md`](../safe/inspect-adapt.md) — cérémonie I&A SAFe, ROAM Board, PSW Ishikawa
- [`../securite_ia/threat-modeling.md`](../securite_ia/threat-modeling.md) — risques cyber (STRIDE, PASTA, OWASP)
- [`../juridique_ia/nis2-conformite.md`](../juridique_ia/nis2-conformite.md) — risque conformité réglementaire NIS2
