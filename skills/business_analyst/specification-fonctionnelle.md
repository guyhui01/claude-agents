# Skill — Spécifications Fonctionnelles
> Certifications : IIBA CBAP · PMI-PBA · BCS Diploma BA
> Référentiels normatifs : **ISO/IEC/IEEE 29148:2018** (Requirements engineering — remplace IEEE 830-1998) · **Cockburn** *Writing Effective Use Cases* (2001) · **BABOK v3** (IIBA 2015)

## Objectif
Rédiger des spécifications fonctionnelles complètes, traçables et validables pour guider le développement et servir de base à la recette MOA.

## Types de documents
| Document | Contexte | Détail | Skill associé |
|---|---|---|---|
| **SFG** (Spécifications Fonctionnelles Générales) | Vision macro, cycle en V | Exigences de haut niveau | ce skill |
| **SFD** (Spécifications Fonctionnelles Détaillées) | Détail technique, cycle en V | Règles de gestion, IHM | ce skill |
| **Cahier des charges fonctionnel (CDCF)** | Appel d'offres MOA→MOE | Besoins + contraintes + critères choix | ce skill |
| **User Stories + Acceptance Criteria** | Agile / Scrum / SAFe | Format PO, Connextra + Gherkin | [`../scrum/po-user-story.md`](../scrum/po-user-story.md) + [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) |

**Règle d'orientation rôle/méthodologie** :
- Contexte cycle en V → MOA / BA → ce skill (SFG, SFD, CDCF) + [`recette-moa.md`](recette-moa.md)
- Contexte Agile/Scrum → PO Scrum → [`../scrum/po-user-story.md`](../scrum/po-user-story.md) + [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) + [`../scrum/po-backlog.md`](../scrum/po-backlog.md)
- Contexte SAFe Programme → Product Manager SAFe → [`../safe/`](../safe/)

## SFG ≠ SFD — délimitation (alignée niveaux ISO/IEC/IEEE 29148)
| | **SFG** | **SFD** |
|---|---|---|
| Niveau 29148 | StRS / SyRS (besoins parties prenantes / système) | SRS (exigences logicielles) |
| Question | **Quoi** et **pourquoi** (intention métier) | **Comment fonctionnellement** (règles, IHM, données) |
| Contenu | Périmètre, acteurs, processus macro, exigences de haut niveau, contraintes | Cas d'usage détaillés, règles de gestion, écrans, formats, codes d'erreur |
| Lecteur | Sponsor, métier, MOE pour cadrage | Développeur, testeur, recetteur |
| Validation | Comité de cadrage / sponsor | Revue MOA + MOE, base des cas de recette |

> Principe : la **SFG ne descend pas au niveau d'une règle de gestion** ; la **SFD ne réinvente pas le périmètre** — elle le décline. Une exigence SFG (haut niveau) se trace vers une ou plusieurs exigences SFD.

## Structure d'une SFD type
```
1. Objet et périmètre
2. Documents de référence
3. Glossaire
4. Description des acteurs
5. Cas d'usage / Scénarios fonctionnels
   5.1 Flux nominal
   5.2 Flux alternatifs
   5.3 Flux d'exception
6. Règles de gestion
7. Exigences non-fonctionnelles (performance, sécurité, accessibilité)
8. Maquettes IHM (si disponibles)
9. Matrice de traçabilité (besoins → exigences → cas de test)
10. Points ouverts / hypothèses
```

## Méthode cas d'usage — Cockburn (2001)
Le **cas d'usage au niveau « but utilisateur » (sea-level)** est la maille de référence d'une SFD : un acteur atteint un objectif métier en une session.

**Template Cockburn — exemple (assurance)**
```
Cas d'usage : Souscrire un contrat auto
Acteur principal : Conseiller commercial
Périmètre : Système de souscription   ·   Niveau : But utilisateur (sea-level)
Parties prenantes & intérêts : Assuré (devis juste) · Assureur (risque maîtrisé) · Conformité (DDA respectée)
Préconditions : Conseiller authentifié, prospect identifié
Garantie minimale : Aucune donnée prospect perdue en cas d'échec
Garantie de succès : Contrat créé au statut « émis », prime calculée, documents générés
Déclencheur : Le prospect demande un devis auto

Scénario nominal :
  1. Le conseiller saisit le profil et le véhicule
  2. Le système vérifie l'éligibilité (règles RG-012..RG-015)
  3. Le système calcule la prime
  4. Le conseiller valide le devis
  5. Le système émet le contrat et génère les documents

Extensions (flux alternatifs / exceptions) :
  2a. Profil inéligible → le système notifie le motif et propose une orientation
  3a. Donnée tarifaire manquante → le système bloque et liste les champs requis
  5a. Échec génération documentaire → le contrat reste « en attente », alerte exploitation
```

## Caractéristiques d'une bonne exigence (ISO/IEC/IEEE 29148)
> Remplace l'usage impropre du « SMART » (cadre d'objectifs, Doran 1981) par le référentiel d'ingénierie des exigences.

- **Nécessaire** : retire-la et il manque une capacité → sinon, à supprimer.
- **Appropriée** : au bon niveau (pas de détail de conception en SFG).
- **Non ambiguë** : une seule interprétation possible.
- **Complète** : se suffit à elle-même, aucune information requise manquante.
- **Singulière** : une exigence = une seule chose (pas de « et » masquant deux exigences).
- **Réalisable** : techniquement et budgétairement.
- **Vérifiable** : on peut prouver objectivement qu'elle est satisfaite (→ cas de test).
- **Correcte** : reflète fidèlement le besoin réel.
- **Conforme** : respecte le gabarit et le glossaire du projet.

## Règles de gestion — format standard
```
RG-001 : [Libellé de la règle]
Déclencheur : [Événement qui active la règle]
Condition : [Si...]
Action : [Alors...]
Priorité : [Obligatoire / Souhaitable / Optionnel]
```

## Traçabilité & critères d'acceptation SFD
- Chaque exigence SFD porte un **critère d'acceptation vérifiable** (condition mesurable de satisfaction), réutilisé tel quel comme résultat attendu en recette.
- **Matrice de traçabilité** : besoin (SFG/StRS) → exigence (SFD/SRS) → cas de test (cf. [`recette-moa.md`](recette-moa.md) et [`gestion-exigences.md`](gestion-exigences.md)).

## Livrables
- SFG ou SFD selon le contexte
- Matrice de traçabilité besoins → exigences → cas de test
- Liste des règles de gestion numérotées
- Cas d'usage Cockburn (nominal + extensions)
- Points ouverts et hypothèses documentés

## Format de sortie
Précise : type de document · contexte (cycle en V, Agile) · domaine fonctionnel · niveau de détail attendu.

## Sources
- ISO/IEC/IEEE 29148:2018 — *Systems and software engineering — Life cycle processes — Requirements engineering* (caractéristiques d'exigence, niveaux StRS/SyRS/SRS ; remplace IEEE 830-1998)
- Cockburn A. — *Writing Effective Use Cases* (Addison-Wesley 2001) — niveaux de but, scénario nominal, extensions
- IIBA — *BABOK Guide v3* (IIBA 2015) — Requirements Analysis & Design Definition
- Doran G. T. — *There's a S.M.A.R.T. way to write management's goals and objectives* (Management Review 1981) — cadre d'objectifs (à distinguer des exigences)

## Anti-patterns
- ❌ **Mélange des niveaux** — règles de gestion dans la SFG, ou périmètre re-décrit dans la SFD → documents redondants et incohérents.
- ❌ **Exigence non singulière** — « le système calcule la prime **et** édite le contrat » = deux exigences masquées, intestables séparément.
- ❌ **Exigence non vérifiable** — « l'interface doit être conviviale » → aucun critère d'acceptation possible.
- ❌ **Cas d'usage sans extensions** — seul le flux nominal est spécifié → les exceptions (le gros du code) émergent en recette.
- ❌ **SMART appliqué aux exigences** — confusion cadre d'objectifs / ingénierie des exigences ; préférer les caractéristiques ISO 29148.
- ❌ **Pas de traçabilité besoin → exigence → test** — impossible de prouver la couverture, ni d'évaluer l'impact d'un changement.

## Voir aussi

- [elicitation-besoins.md](elicitation-besoins.md) — collecte besoins en amont (BABOK KA #10, 14 techniques, Volere)
- [gestion-exigences.md](gestion-exigences.md) — cycle de vie des exigences, traçabilité bidirectionnelle (BABOK KA #5)
- [modelisation-processus.md](modelisation-processus.md) — BPMN 2.0 / UML 2.5 pour les processus métier modélisés en SFG
- [recette-moa.md](recette-moa.md) — recette MOA, cahier de recette, PV (livrable cycle V aval, consomme les critères d'acceptation SFD)
- [`../scrum/po-user-story.md`](../scrum/po-user-story.md) — pont Agile : User Story (Connextra) équivalent SFD côté PO Scrum
- [`../scrum/po-acceptance-tests.md`](../scrum/po-acceptance-tests.md) — Acceptance Criteria (Gherkin) équivalent règles de gestion vérifiables côté PO
