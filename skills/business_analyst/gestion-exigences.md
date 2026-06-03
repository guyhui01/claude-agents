# Skill — Gestion des Exigences (BABOK Knowledge Area #5)
> Certifications : IIBA CBAP · PMI-PBA
> Référentiels normatifs : **BABOK v3** (IIBA 2015) — KA #5 *Requirements Life Cycle Management* · **ISO/IEC/IEEE 29148:2018** (traçabilité)

## Objectif
Gérer le **cycle de vie** des exigences une fois recueillies : les tracer, les maintenir, les prioriser, évaluer leurs changements et les faire approuver, du recueil jusqu'à la vérification en recette.

> Périmètre distinct de [`elicitation-besoins.md`](elicitation-besoins.md) : l'élicitation (BABOK KA #4) **recueille** les exigences ; ce skill (KA #5) en **gère le cycle de vie**. Pas de re-déclinaison des techniques de recueil, de Volere ou de Kano ici.

## Les 5 tâches du cycle de vie (BABOK KA #5)
| Tâche | Activité |
|---|---|
| **5.1 Trace** | Établir et maintenir les liens exigence ↔ source ↔ solution ↔ test |
| **5.2 Maintain** | Conserver l'exactitude des exigences dans le temps, gérer la réutilisation |
| **5.3 Prioritize** | Ordonner selon valeur, risque, dépendances, coût (MoSCoW) |
| **5.4 Assess Changes** | Analyser l'impact d'une demande de changement avant décision |
| **5.5 Approve** | Obtenir l'accord formel et fixer la baseline |

## Types d'exigences gérées (taxonomie BABOK v3)
Business · Stakeholder · Solution (Fonctionnelles / Non-Fonctionnelles) · Transition (migration, formation, décommissionnement).

## États d'une exigence (lifecycle)
```
Proposée → Analysée → Approuvée → Baseline → Implémentée → Vérifiée → (Clôturée | Rejetée)
```
Chaque transition est tracée (qui, quand, décision). Une exigence **baseline** ne change plus que par le processus de gestion des changements.

## Attributs de gestion d'une exigence
ID unique · Version · Statut (cf. cycle ci-dessus) · Priorité (MoSCoW) · Source/Originator · Propriétaire · Dépendances · Date(s) clés. *(Pour les caractéristiques de qualité — non ambiguë, vérifiable… — voir [`specification-fonctionnelle.md`](specification-fonctionnelle.md), ISO 29148.)*

## Traçabilité bidirectionnelle (BABOK 5.1 + ISO 29148)
- **Amont (backward)** : exigence → besoin métier / partie prenante source → justifie *pourquoi* elle existe.
- **Aval (forward)** : exigence → conception → cas de test → release → prouve *qu'elle est couverte*.
- Types de liens : *derive*, *satisfy*, *verify*, *depend on*.

| ID Besoin | Libellé Besoin | ID Exigence | Libellé Exigence | Cas de Test | Statut |
|---|---|---|---|---|---|
| BES-001 | Accès mobile | EXI-001 | L'appli doit être responsive | CT-001 | Vérifié |

## Priorisation MoSCoW (BABOK 5.3)
- **Must have** : indispensable, le projet échoue sans
- **Should have** : important mais contournable temporairement
- **Could have** : souhaitable si le budget le permet
- **Won't have** : hors périmètre de cette version

## Baselining & versioning
- **Baseline** : version de référence approuvée d'un ensemble d'exigences, figée à un jalon (fin de cadrage, entrée en réalisation).
- Tout écart ultérieur passe par une demande de changement ; la baseline est ré-éditée avec un numéro de version et un historique.

## Gestion des changements d'exigences (BABOK 5.4 + 5.5)
1. Demande de changement formalisée (RFC — Request for Change)
2. **Analyse d'impact** (périmètre, délai, coût, risque, exigences tracées impactées)
3. Décision du **comité de pilotage / CCB** (Change Control Board)
4. Mise à jour de la documentation, de la baseline et de la matrice de traçabilité
5. Communication aux équipes impactées

## Métriques de couverture & pilotage
- **Taux de couverture** : % d'exigences *Must* liées à ≥ 1 cas de test vérifié (cible 100 %).
- **Exigences orphelines** : sans source amont (à requalifier) ou sans test aval (risque de non-couverture).
- **Volatilité** : nombre de changements par exigence (signal de cadrage instable).

## Livrables
- Catalogue des exigences (Excel, Jira, Doors, ReqView) avec attributs et statuts
- Matrice de traçabilité besoins → exigences → tests (bidirectionnelle)
- Baseline versionnée + historique des changements
- Rapport d'impact des demandes de changement
- Tableau de bord de couverture et de volatilité

## Format de sortie
Précise : domaine fonctionnel · outil de gestion · phase du projet · existence d'une baseline · niveau de détail requis.

## Sources
- IIBA — *BABOK Guide v3* (IIBA 2015) — Knowledge Area #5 *Requirements Life Cycle Management*
- ISO/IEC/IEEE 29148:2018 — *Requirements engineering* (traçabilité, gestion des exigences dans le cycle de vie)
- Wiegers K. & Beatty J. — *Software Requirements* 3rd ed (Microsoft Press 2013) — baselining, change control, traçabilité

## Anti-patterns
- ❌ **Pas de baseline** — les exigences « bougent » en continu sans version de référence → impossible d'arbitrer un changement.
- ❌ **Traçabilité unidirectionnelle** — seulement amont *ou* aval → on ne peut ni justifier ni prouver la couverture.
- ❌ **Changement sans analyse d'impact** — RFC acceptée à l'instinct → dérive de périmètre et de coût.
- ❌ **Confondre gestion et élicitation** — re-recueillir au lieu de gérer le cycle de vie (cf. [`elicitation-besoins.md`](elicitation-besoins.md)).
- ❌ **Exigences orphelines tolérées** — sans source ou sans test → bruit dans le catalogue, audit impossible.

## Voir aussi
- [elicitation-besoins.md](elicitation-besoins.md) — recueil des exigences en amont (BABOK KA #4) — **complément, pas doublon**
- [specification-fonctionnelle.md](specification-fonctionnelle.md) — caractéristiques de qualité d'une exigence (ISO 29148), SFG/SFD
- [recette-moa.md](recette-moa.md) — vérification aval : RTM tests ↔ exigences, couverture
- [analyse-impact.md](analyse-impact.md) — analyse d'impact d'un changement (Kotter, BABOK Strategy Analysis)
- [`../scrum/po-backlog.md`](../scrum/po-backlog.md) — équivalent Agile : gestion et priorisation du backlog produit
