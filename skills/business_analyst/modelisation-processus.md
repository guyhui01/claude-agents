# Skill — Modélisation des Processus (BPMN, UML, DMN, CMMN)

> Certifications : **IIBA CBAP** · **BCS International Diploma BA** · **OCEB 2** (OMG Certified Expert in BPM)
> Référentiels normatifs : **BPMN 2.0.2** (OMG 2014, ISO/IEC 19510:2013) · **UML 2.5.1** (OMG 2017, ISO/IEC 19505-1/2:2012) · **DMN 1.4** (OMG 2023) · **CMMN 1.1** (OMG 2016) · Cockburn (2001) · Jacobson Use Cases 2.0 (2011) · Van der Aalst Process Mining (2016)

## Objectif

Modéliser **processus métier**, **cas d'usage**, **décisions** et **dossiers/cas non structurés** pour documenter l'existant (As-Is), concevoir la cible (To-Be), spécifier les exigences fonctionnelles et orchestrer les automatisations (BPMS, RPA, IA). Couvre les **5 notations OMG normatives** : BPMN · UML · DMN · CMMN · SBVR.

## Cadre BABOK v3 — Knowledge Areas mobilisées

| KA BABOK | Task | Notation principale |
|---|---|---|
| **#7 Requirements Analysis & Design Definition** | 8.1 Specify and Model Requirements | BPMN · UML · DMN |
| **#9 Strategy Analysis** | 7.2 Define Future State (To-Be) | BPMN · CMMN |
| **#10 Elicitation** | 10.2 Concept/Process Modelling | UML CDM · BPMN |
| **Perspective Business Process Management** | — | BPMN · DMN · CMMN |

## BPMN 2.0.2 — Éléments complets (OMG 2014)

### Événements (15 types principaux)
- **Catégories** : Start (cercle fin) · Intermediate Throw (cercle double trait fin) · Intermediate Catch (cercle double trait fin barré) · End (cercle épais) · Boundary (sur tâche, interrupting/non-interrupting)
- **Triggers** : None · **Message** · **Timer** · **Error** · **Escalation** · **Cancel** · **Compensation** · **Conditional** · **Link** · **Signal** · **Multiple** · **Parallel Multiple** · **Terminate**
- **Règle Silver** : Error/Escalation/Cancel/Compensation/Terminate uniquement en End ou Boundary (interrupting)

### Activités (7 types de Tasks + sous-processus)
- **Tasks typées** : **User Task** (humain via UI) · **Service Task** (auto via service) · **Send Task** · **Receive Task** · **Manual Task** (hors SI) · **Business Rule Task** (→ délégation DMN) · **Script Task**
- **Sub-Process** : Embedded · Call Activity (réutilisable) · **Event Sub-Process** (déclenché par event interne) · **Transaction** (ACID, compensation possible) · **Ad-Hoc** (activités non séquencées)
- **Markers** : Loop · Multi-Instance Parallel/Sequential · Compensation

### Passerelles (Gateways)
- **Exclusive (XOR ✕)** : un seul chemin par condition
- **Parallel (AND +)** : tous les chemins en parallèle, sync au join
- **Inclusive (OR O)** : un ou plusieurs chemins selon conditions (sync attend les chemins activés)
- **Event-Based** : choix sur événement reçu (Message / Timer first wins)
- **Complex** : règles join personnalisées (rare, à éviter)
- **Anti-pattern Silver** : ne jamais utiliser un Gateway pour un simple split sans condition (préférer split implicite via plusieurs flux sortants de la tâche, ou rester explicite avec gateway XOR + conditions)

### Flux & participants
- **Sequence Flow** (flèche pleine) — interne au pool · **Message Flow** (flèche pointillée) — entre pools · **Data Association** (pointillée fine)
- **Pools** = participants (organisation, système externe — boîtes noires possibles) · **Lanes** = rôles internes au pool
- **Data Objects · Data Stores · Annotations · Groups**

## 3 Niveaux de modélisation BPMN (Silver & Bridgeland 2009 — *BPMN Method and Style*)

| Niveau | Détail | Usage cible | Critère de basculement |
|---|---|---|---|
| **Descriptive** | Grandes étapes, 1 pool, peu de gateways | Communication métier, ateliers | Au-delà de 12-15 tâches → passer en Analytical |
| **Analytical** | Tous events/gateways/sub-process, multi-pools | Analyse complète, spec MOE | Si exécutable BPMS visé → passer en Executable |
| **Executable** | Service Tasks paramétrés, expressions BPMN-XML | Camunda / Activiti / Flowable | Validation par test BPMN-XML import |

## UML 2.5.1 — 14 diagrammes officiels OMG (2017)

| Catégorie | Diagramme | Quand utiliser |
|---|---|---|
| **Structural (7)** | Class | Modèle de données conceptuel/logique |
| | Object | Snapshot instance d'un Class diagram |
| | Component | Architecture logicielle modulaire |
| | Composite Structure | Structure interne d'un composant |
| | Package | Organisation/dépendances paquetages |
| | Deployment | Infrastructure et déploiement |
| | Profile | Extensions UML (stéréotypes, tags) |
| **Behavioral (7)** | Use Case | Périmètre fonctionnel par acteur |
| | Activity | Flux d'activités (alternative légère BPMN) |
| | State Machine | Cycle de vie d'un objet |
| | Sequence | Interactions temporelles entre composants |
| | Communication | Vue topologique d'interactions |
| | Interaction Overview | Vue d'ensemble d'interactions |
| | Timing | Contraintes temporelles précises |

**Anti-pattern courant** : Sequence Diagram à un niveau trop bas (méthodes Java) — réserver Sequence pour interactions inter-composants/services, pas intra-classe.

## Use Cases — Cockburn (2001) vs Jacobson 2.0 (2011)

### Template Cockburn (Fully Dressed)
```
Use Case # : UC-XXX
Name       : <verbe + complément, point de vue acteur primaire>
Goal       : <objectif observable, valeur métier>
Scope      : <système / sous-système / business>
Level      : Summary / User Goal / Subfunction
Primary Actor : <rôle déclencheur>
Stakeholders & Interests : <liste>
Preconditions  : <état avant déclenchement>
Success Postconditions : <état après succès>
Main Success Scenario  : <étapes numérotées 1, 2, 3...>
Extensions     : <flux alternatifs 1a, 1b, 2a... avec gestion>
Technology & Data Variations : <variations canal/format>
```

### Jacobson Use Cases 2.0 (2011) — *The Guide*
- **Use Case Slice** = découpe verticale exécutable d'un UC (scénario testable indépendant)
- **Backlog** : Slices priorisées remplacent User Stories pour systèmes complexes
- **Use Case 2.0 = Use Case Cockburn + Slices + Tests**

### Règles relations UML
- **«include»** : sous-cas réutilisable, **toujours** exécuté (factorisation)
- **«extend»** : extension **conditionnelle** (extension point + condition)
- **Generalization** : héritage entre UC (rare, préférer composition)
- **Anti-pattern** : décomposer un UC en N petits UC CRUD «include» — perte de la valeur métier

## DMN 1.4 — Decision Model and Notation (OMG 2023)

- **Decision Requirements Diagram (DRD)** : Decisions (rectangles) · Input Data (ovales) · Knowledge Sources · Business Knowledge Models
- **Decision Tables** : règles condition/conclusion tabulaires
- **Hit Policy** :
  - **Unique** (U) — 1 seule règle matche (else erreur)
  - **First** (F) — 1ère règle matche dans l'ordre
  - **Priority** (P) — règle prioritaire selon ordre des valeurs de sortie
  - **Any** (A) — plusieurs matches, mêmes sorties
  - **Collect** (C+/C#/C</>) — agrégation (sum/count/min/max)
- **FEEL** (Friendly Enough Expression Language) — langage d'expression DMN
- **Usage** : déléguer la logique de décision depuis BPMN Business Rule Task → DMN modèle séparé (versionnable indépendamment)

## CMMN 1.1 — Case Management Model and Notation (OMG 2016)

Pour les **cas non déterministes** où BPMN ne convient pas : dossiers médicaux, sinistres assurance, instructions juridiques, dossiers RH complexes, traitement réclamation multi-niveaux.

- **Plan Items** : Tasks · Stages · Milestones · Event Listeners
- **Sentries** : conditions d'activation/sortie (entry/exit criteria)
- **Discretionary** : éléments optionnels activés par le worker selon contexte
- **Critère de choix BPMN vs CMMN** : BPMN si séquence prévisible majoritaire · CMMN si > 30% d'imprévisibilité dans le déroulement

## Process Mining (Van der Aalst 2016)

- **Discovery** : reconstruire processus réel depuis logs (Alpha algorithm · Inductive Miner · Heuristics Miner)
- **Conformance** : écart entre processus modélisé et exécuté (token-replay, alignment-based)
- **Enhancement** : enrichir le modèle avec performance, prédictions, recommandations
- **Standard XES** (IEEE 1849-2016) — Event Log XML format
- **Outils** : Celonis · Disco (Fluxicon) · ProM · UiPath Process Mining · Apromore

## Exemple chiffré sectoriel anonymisé — Refonte processus check-in/check-out (groupe hôtelier international)

**Contexte** : groupe hôtelier international (segments luxe/midscale/economy), 350 hôtels, 50 pays, 12M nuitées/an. PMS legacy, intégration channel manager + CRM + paiement.

**Diagnostic As-Is** (BPMN Analytical) : 12 tâches manuelles séquentielles · 1 pool client + 1 pool hôtel + 3 lanes (réception, conciergerie, housekeeping) · 4 message flows externes (PMS, CRM, channel manager, PSP paiement) · 8 min/check-in moyen · taux d'abandon mobile 35% · NPS 6/10 · 25% digital.

**Cible To-Be** (BPMN + DMN + CMMN) :
- **Event Sub-Process** : pre-check-in mobile J-2 (Timer Start) → vérification identité (Service Task → KYC API) → choix chambre (User Task) → paiement pré-autorisé (Service Task PSP)
- **DMN Decision Table — Surclassement automatique** (Hit Policy : First) :

| # | Loyalty Tier | Room Availability | Stay Length | → Upgrade Level |
|---|---|---|---|---|
| 1 | Platinum | > 5 chambres sup. dispo | ≥ 3 nuits | +2 catégories |
| 2 | Gold | > 3 chambres sup. dispo | ≥ 2 nuits | +1 catégorie |
| 3 | Silver | > 5 chambres sup. dispo | ≥ 4 nuits | +1 catégorie |
| 4 | * | * | * | Pas d'upgrade |

- **Use Case Cockburn UC-014 "Effectuer pre-check-in mobile"** : Primary Actor = Client · Preconditions = Réservation confirmée + app mobile installée · Main Success Scenario = 6 étapes · Extensions = 4a (identité KO → fallback comptoir) · 5a (paiement KO → relance 24h)
- **CMMN** : gestion litige post-séjour (sentry "Réclamation reçue" → Stage "Investigation" discretionary tasks selon nature)

**Gains mesurés (POC 12 mois, 35 hôtels pilotes)** :
- Check-in : 8 min → 2.5 min (-69%)
- NPS : 6 → 8.5
- Taux digital : 25% → 65%
- Économie : 4 ETP/100 hôtels (réaffectés conciergerie premium)
- ROI : 14 mois

## Anti-patterns de modélisation (8 explicites)

- ❌ **BPMN spaghetti** — diagramme > 30 tâches sur un seul niveau, lisibilité nulle → décomposer en Call Activities (max 12-15 tâches/diagramme — règle Silver)
- ❌ **Gateway diamond pile-up** — empilement de XOR consécutifs au lieu d'un seul Decision Table DMN → externaliser vers DMN
- ❌ **Use cases CRUD** — un UC par opération Create/Read/Update/Delete → regrouper par objectif métier
- ❌ **UML Sequence trop bas niveau** — détails d'appels intra-classe → réserver Sequence aux interactions inter-composants/services
- ❌ **Mélange BPMN/UML Activity** — choix non assumé entre les deux notations → BPMN pour processus métier, UML Activity pour flux algorithmiques
- ❌ **Pool métier vs SI mélangés** — pas de distinction acteur humain vs système → 1 pool par participant, lanes pour rôles
- ❌ **DMN dans BPMN flow** — règles de décision codées en cascade de gateways → déléguer à un Business Rule Task + DMN
- ❌ **Modèle sans versioning** — pas de gestion SemVer ni d'export BPMN-XML / XPDL → versionner dans le SI (Camunda registry, Signavio, draw.io + Git)

## Outils & formats

- **Modeleurs gratuits** : draw.io · Camunda Modeler · Bizagi Modeler · BPMN.io
- **Plateformes enterprise** : Signavio (SAP) · ARIS (Software AG) · Visual Paradigm · Sparx EA
- **BPMS exécutables** : Camunda 8 · Flowable · Activiti · IBM BAW
- **Formats interchange** : BPMN-XML (standard OMG) · XPDL (WfMC) · UML-XMI · DMN-XML · CMMN-XML

## Livrables

- **Diagramme BPMN As-Is** (Analytical) — processus actuel
- **Diagramme BPMN To-Be** (Analytical ou Executable) — processus cible
- **Diagramme(s) DMN** — décisions extraites en modèle séparé versionné
- **Diagramme(s) CMMN** — cas non déterministes complémentaires
- **Use Cases UML** + descriptions Cockburn Fully Dressed
- **Matrice traçabilité** : Processus ↔ Exigences ↔ Tests ↔ KPI métier
- **Matrice RACI** par étape ou par sous-processus
- **Notes de style Silver/Bridgeland** : conventions de nommage, niveaux, conventions visuelles

## Format de sortie

Précise : **processus à modéliser** · **niveau BPMN visé** (Descriptive/Analytical/Executable) · **outil cible** (Camunda/Bizagi/Signavio/draw.io/Visio) · **As-Is / To-Be / Both** · **complémentarité notations** (BPMN seul / BPMN+DMN / BPMN+CMMN / +UML Use Cases) · **contraintes** (BPMS cible, conformité ISO 19510).

## Sources

- OMG — *Business Process Model and Notation (BPMN) Version 2.0.2* (OMG 2014, ISO/IEC 19510:2013)
- OMG — *Unified Modeling Language (UML) Version 2.5.1* (OMG 2017, ISO/IEC 19505-1/2:2012)
- OMG — *Decision Model and Notation (DMN) Version 1.4* (OMG 2023)
- OMG — *Case Management Model and Notation (CMMN) Version 1.1* (OMG 2016)
- Silver B. & Bridgeland B. — *BPMN Method and Style* 2nd ed (Cody-Cassidy Press 2011) — référence #1 BPMN style
- Cockburn A. — *Writing Effective Use Cases* (Addison-Wesley 2001)
- Jacobson I., Spence I., Bittner K. — *Use-Case 2.0: The Guide to Succeeding with Use Cases* (Ivar Jacobson International 2011)
- Van der Aalst W. — *Process Mining: Data Science in Action* 2nd ed (Springer 2016)
- IIBA — *BABOK Guide v3* (IIBA 2015) — KA #7, #9, #10 + Perspective BPM
- IEEE 1849-2016 — *Standard for eXtensible Event Stream (XES) for Achieving Interoperability in Event Logs and Event Streams*

## Voir aussi

- [[elicitation-besoins]] — BABOK techniques Process/Concept Modelling (KA #4)
- [[cartographie-si]] — TOGAF + Archimate pour vue urbanisation et flux inter-SI
- [[analyse-impact]] — Kotter + BABOK Strategy Analysis pour To-Be change impact
- [[gestion-exigences]] — traçabilité Process ↔ Requirement ↔ Test
- [[../scrum/po-user-story]] — passage Use Case Slice Jacobson 2.0 → User Story Connextra
- [[../change_manager/conduite-changement]] — accompagnement bascule As-Is → To-Be
