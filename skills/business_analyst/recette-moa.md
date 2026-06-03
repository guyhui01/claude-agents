# Skill — Recette MOA
> Certifications : IIBA CBAP · BCS International Diploma BA
> Référentiels normatifs : **ISTQB CTFL** (Foundation Level, syllabus v4.0 2023) · **ISO/IEC/IEEE 29119** (Software testing, Parts 1-5) · **ISO/IEC/IEEE 29148:2018** (traçabilité exigences)

## Objectif
Planifier, préparer et conduire la recette fonctionnelle pour valider que le système livré satisfait les exigences MOA et les critères d'acceptation, et prononcer une décision go/no-go tracée et défendable en audit.

## Types de recette (niveaux de test — ISTQB)
| Type | Qui | Quand | Terme ISTQB |
|---|---|---|---|
| **Recette fonctionnelle** | MOA / métier | Avant mise en production | Functional acceptance |
| **Recette utilisateur (UAT)** | Utilisateurs finaux | Avant déploiement | User Acceptance Testing |
| **Recette de non-régression (TNR)** | MOA + QA | À chaque livraison | Regression testing |
| **Recette d'exploitation** | MOA + Exploitation | Go-live | Operational Acceptance Testing |
| **Recette contractuelle / réglementaire** | MOA + Juridique / Conformité | Jalon contractuel ou régulateur | Contract / Regulatory acceptance |

## Stratégie de test — approche par les risques (risk-based testing)
Prioriser l'effort de recette selon le **risque = probabilité de défaut × impact métier** :
1. Cartographier les fonctions par criticité métier (lien priorisation MoSCoW des exigences).
2. Définir une **couverture cible par niveau de risque** : 100 % des exigences *Must* / critiques, échantillon dégressif sur *Should* / *Could*.
3. Concentrer les cas approfondis (combinatoires) sur les zones à fort impact (calcul de prime, éligibilité, montants d'indemnisation).

## Techniques de conception des cas de test (ISTQB — boîte noire)
| Technique | Usage | Exemple (assurance) |
|---|---|---|
| **Partition d'équivalence** | Regrouper les entrées en classes équivalentes | Tranches d'âge du souscripteur |
| **Valeurs limites (BVA)** | Tester les bornes | Âge 17/18 ans, 64/65/66 ans |
| **Table de décision** | Couvrir les combinaisons de règles | Éligibilité garantie = f(âge × antécédents × type de contrat) |
| **Transition d'états** | Couvrir un cycle de vie | Statut sinistre : déclaré → instruit → indemnisé → clos |

## Plan de recette — Structure (alignée ISO/IEC/IEEE 29119-3)
```
1. Objectifs et périmètre de la recette
2. Stratégie de test (approche par les risques, techniques, couverture cible)
3. Critères d'entrée (environnement, données, build versionné, SFD baseline, RTM)
4. Organisation (équipe, RACI, planning, outils)
5. Critères de sortie (seuil de réussite, anomalies tolérées)
6. Procédure de gestion des anomalies et des dérogations
```

## Critères d'entrée / sortie (ISTQB — entry / exit criteria)
- **Entrée** : environnement de recette iso-prod prêt · jeu de données représentatif · build livré versionné · SFD/exigences en version de référence (baseline) · matrice de traçabilité (RTM) disponible.
- **Sortie** : taux de réussite ≥ seuil défini (ex. 95 %) · **0 anomalie bloquante ouverte** · 0 majeure ouverte sans dérogation signée · couverture des exigences *Must* = 100 %.

## Cahier de recette — Format standard
| ID | Cas de test | Exigence couverte | Prérequis | Étapes | Résultat attendu | Résultat obtenu | Statut |
|---|---|---|---|---|---|---|---|
| CR-001 | Souscription contrat auto | EXI-014 | Compte courtier actif | 1. Saisir profil… | Devis + prime calculés | … | OK / KO / Bloquant |

## Traçabilité tests ↔ exigences (RTM)
Matrice **bidirectionnelle** prouvant la couverture (exigée en audit ; cf. traçabilité ISO/IEC/IEEE 29148) :

| ID Exigence | Source (SFD / US) | Priorité | Cas de test | Statut |
|---|---|---|---|---|
| EXI-014 | SFD §5.2 | Must | CR-001, CR-008 | Validé |

> Règle : **toute exigence *Must* est couverte par ≥ 1 cas**, et **tout cas remonte à une exigence** (pas de test orphelin).

## Cycle de vie d'une anomalie en recette
```
Détectée → Qualifiée (sévérité) → Affectée → Corrigée → Vérifiée → Fermée
```
Sévérités : **Bloquant** · **Majeur** · **Mineur** · **Cosmétique**

## Critères de sévérité
- **Bloquant** : impossible de continuer la recette, fonctionnalité inutilisable.
- **Majeur** : fonctionnalité dégradée, contournement difficile.
- **Mineur** : impact faible, contournement possible.
- **Cosmétique** : visuel, ergonomie, orthographe.

## PV de recette — décision, réserves et dérogations
- **Décision** : **Go** · **Go conditionnel** (avec réserves) · **No-go**.
- **Réserves** : anomalies résiduelles acceptées (mineures, ou majeures contournables) + **engagement de correction daté** + responsable désigné.
- **Dérogation (waiver)** : acceptation formelle d'un écart, avec justification métier, **signée Sponsor + MOA**, et échéance de levée.
- **Contenu** : résumé exécutif (périmètre, résultats, décision) · tableau de bord (testés / réussis / échoués / bloquants) · liste des réserves · liste des dérogations · signatures MOA / MOE / Sponsor.

## Exemple chiffré — Recette d'un parcours de souscription (assurance)
**Contexte** : refonte du parcours de souscription multi-produits d'un assureur. 96 exigences, dont 58 *Must*.
- **184 cas de test** conçus (couverture *Must* = 100 %, techniques BVA + table de décision sur l'éligibilité et le calcul de prime).
- Exécution : **178 OK / 184** (taux de réussite **96,7 %**), 6 anomalies → 2 majeures + 4 mineures.
- Traitement : 1 majeure corrigée et re-vérifiée avant PV · 1 majeure → **dérogation** (édition PDF du contrat non conforme charte, contournement manuel, levée sous 30 j) · 4 mineures → **réserves** (engagement correctif sprint suivant).
- **Décision : Go conditionnel** (2 réserves + 1 dérogation, 0 bloquant, *Must* couverts à 100 %).

## Livrables
- Plan de recette (stratégie de test incluse)
- Cahier de recette (cas de test rédigés) + RTM tests ↔ exigences
- Rapport d'anomalies + tableau de bord de couverture
- PV de recette signé (décision, réserves, dérogations)

## Format de sortie
Précise : périmètre fonctionnel · sprint ou version à tester · niveau de risque des fonctions · outil de gestion (Jira, TestRail, HP ALM, Xray) · deadline go-live.

## Sources
- ISTQB — *Certified Tester Foundation Level (CTFL) Syllabus v4.0* (2023) + *ISTQB Glossary* (acceptance testing, entry/exit criteria, test design techniques)
- ISO/IEC/IEEE 29119 — *Software and systems engineering — Software testing*, Parts 1 à 5 (Part 3 *Test documentation* : 29119-3:2021)
- ISO/IEC/IEEE 29148:2018 — *Requirements engineering* (traçabilité exigences ↔ vérification)
- IIBA — *BABOK Guide v3* (IIBA 2015), Knowledge Area #7 *Solution Evaluation*

## Anti-patterns
- ❌ **Recette sans stratégie de risque** — tout tester à plat, effort dilué, zones critiques sous-couvertes.
- ❌ **Cas de test sans traçabilité** — impossible de prouver la couverture des exigences en audit.
- ❌ **Go prononcé avec des bloquants « en cours »** — pas de critère de sortie tenu → dette livrée en prod.
- ❌ **Réserves sans engagement daté ni responsable** — anomalies acceptées qui ne seront jamais corrigées.
- ❌ **Dérogation orale** — écart accepté sans trace signée → litige MOA/MOE au go-live.
- ❌ **Jeu de données non représentatif** — recette « verte » en recette, défauts massifs en prod.

## Voir aussi
- [gestion-exigences.md](gestion-exigences.md) — matrice de traçabilité exigences ↔ tests (amont de la RTM recette)
- [specification-fonctionnelle.md](specification-fonctionnelle.md) — SFD et critères d'acceptation, source des cas de test
- [elicitation-besoins.md](elicitation-besoins.md) — Fit Criterion (Volere) vérifié en recette
- [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) — équivalent Agile : critères d'acceptation Gherkin côté PO
- [`../scrum/gestion-risques.md`](../scrum/gestion-risques.md) — approche par les risques (ISO 31000) appliquée au pilotage de la recette
