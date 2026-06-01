# Skill — Note de Cadrage Projet
> Certifications : HubSpot Content Marketing · Google Digital Garage · PMP (Project Management)

## Objectif
Rédiger des notes de cadrage claires et complètes qui alignent toutes les parties prenantes sur le périmètre, les objectifs et les contraintes d'un projet dès le départ.

## Définition et rôle
```
La note de cadrage est le document fondateur d'un projet.
Elle répond à 5 questions :
  POURQUOI  → Enjeux et objectifs business
  QUOI      → Périmètre inclus ET exclu
  QUI       → Parties prenantes et rôles
  COMMENT   → Approche et contraintes
  QUAND     → Jalons et deadline
```

## Structure complète

### Template Note de Cadrage
```markdown
# NOTE DE CADRAGE — [Nom du Projet]
**Version** : 1.0 | **Date** : [Date] | **Statut** : [Brouillon / Validé]
**Commanditaire** : [Nom] | **Chef de projet** : [Nom]

---

## 1. Contexte et enjeux
[Situation actuelle qui justifie ce projet — 2-3 paragraphes]
[Problème ou opportunité identifié]
[Lien avec la stratégie de l'entreprise]

## 2. Objectifs du projet

### Objectifs business (SMART)
| Objectif | Indicateur | Cible | Échéance |
|----------|-----------|-------|----------|
| [Obj 1] | [KPI] | [Valeur] | [Date] |
| [Obj 2] | [KPI] | [Valeur] | [Date] |

### Objectifs hors périmètre (exclusions explicites)
- [Ce que ce projet ne fait PAS — important pour éviter le scope creep]

## 3. Périmètre

### Inclus dans le périmètre
- [Fonctionnalité / domaine / processus 1]
- [Fonctionnalité / domaine / processus 2]

### Exclu du périmètre
- [Ce qui est exclu, avec raison si nécessaire]

### Interfaces et dépendances
- [Système ou équipe avec lequel ce projet interfère]

## 4. Parties prenantes
| Partie prenante | Rôle | Attentes | Niveau d'implication |
|-----------------|------|----------|----------------------|
| [Nom/Entité] | [Rôle] | [Attentes] | [Fort / Moyen / Info] |

## 5. Budget et ressources

### Budget estimé
| Poste | Montant estimé | Notes |
|-------|---------------|-------|
| Ressources internes | [€] | [ETP × durée] |
| Prestataires | [€] | [Détail] |
| Infrastructure / Licences | [€] | [Détail] |
| **TOTAL** | **[€]** | |

### Ressources humaines
- [Profil 1] : [Temps alloué] — [Nom si connu]
- [Profil 2] : [Temps alloué] — [Nom si connu]

## 6. Calendrier prévisionnel
| Phase | Début | Fin | Livrable |
|-------|-------|-----|----------|
| Cadrage | [Date] | [Date] | Note de cadrage validée |
| [Phase 2] | [Date] | [Date] | [Livrable] |
| [Phase N] | [Date] | [Date] | [Livrable final] |

## 7. Risques identifiés
| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| [Risque 1] | [F/M/E] | [F/M/E] | [Action préventive] |
| [Risque 2] | [F/M/E] | [F/M/E] | [Action préventive] |

## 8. Hypothèses et contraintes

### Hypothèses (ce sur quoi on s'appuie sans certitude)
- [Hypothèse 1 : à valider avant [date]]
- [Hypothèse 2]

### Contraintes (non négociables)
- **Délai** : [Date butoir non négociable et raison]
- **Budget** : [Enveloppe maximale]
- **Technique** : [Contrainte SI / architecture]
- **Réglementaire** : [RGPD, sécurité, audit...]

## 9. Gouvernance du projet
- **Comité de pilotage** : [Membres, fréquence]
- **Comité projet** : [Membres, fréquence]
- **Reporting** : [Format, destinataires, fréquence]
- **Processus de décision** : [Qui valide quoi ?]

## 10. Critères de succès
- [Critère mesurable 1 : comment saurons-nous que le projet est réussi ?]
- [Critère mesurable 2]

---

## Signatures et validation
| Rôle | Nom | Date | Signature |
|------|-----|------|-----------|
| Commanditaire | | | |
| Chef de projet | | | |
| [Autre valideur] | | | |
```

## Conseils de rédaction

### Périmètre : la règle des exclusions explicites
```
Un périmètre mal défini = source principale de conflits.
Pour chaque projet, lister EXPLICITEMENT ce qui est exclu.

Exemples d'exclusions types :
  "La migration des données historiques est hors périmètre de V1"
  "Les interfaces avec le système legacy X seront traitées en phase 2"
  "La formation des utilisateurs finaux n'est pas incluse dans ce projet"
```

### Objectifs : le test SMART *(George T. Doran, 1981)*
```
Avant de valider un objectif, appliquer le test :
  Specific   → "Améliorer l'expérience" ❌ vs "Réduire le délai de réponse" ✅
  Measurable → Quel indicateur ? Quelle valeur de référence ?
  Achievable → Réaliste avec les ressources prévues ?
  Relevant   → Aligné avec la stratégie ?
  Time-bound → Quelle date de mesure ?
```

## Livrables
- Note de cadrage (Word / Confluence / PDF)
- Tableau de bord de suivi des hypothèses
- Matrice des risques initiale
- Planning macro (Gantt simplifié)

## Format de sortie
Précise : nom et nature du projet · commanditaire · budget approximatif · contraintes connues · parties prenantes principales · deadline de validation

## Anti-patterns
- ❌ **Périmètre sans exclusions explicites** — ne lister que ce qui est inclus → scope creep, conflits sur le « hors périmètre ».
- ❌ **Objectifs non SMART** — « améliorer l'expérience » sans indicateur ni cible ni échéance → impossible de mesurer le succès.
- ❌ **Parties prenantes oubliées** — cartographie incomplète → opposants découverts en cours de route, blocages.
- ❌ **Hypothèses non tracées** — bâtir sur des suppositions non validées sans les expliciter → dérive si elles s'avèrent fausses.
- ❌ **Note de cadrage non signée** — pas de validation formelle du commanditaire → désalignement révélé trop tard.

## Sources
- **George T. Doran** — *There's a S.M.A.R.T. Way to Write Management's Goals and Objectives*, Management Review, vol. 70, n° 11 (novembre 1981) — critères SMART
- **PMI** — *PMBOK Guide, 7th Edition* (2021) — Project Charter, parties prenantes
- **PRINCE2 7** — PeopleCert/Axelos (2023) — Project Brief, Business Case
- **Mendelow** — *Stakeholder Mapping* (1991) — matrice pouvoir/intérêt des parties prenantes

## Voir aussi
- [`../business_analyst/cadrage-projet.md`](../business_analyst/cadrage-projet.md) — cadrage projet MOA approfondi (charte, business case)
- [redaction-rapport.md](redaction-rapport.md) — rédaction structurée du document
- [presentation-pitch.md](presentation-pitch.md) — présentation du kickoff projet
- [synthese-executive.md](synthese-executive.md) — synthèse de la note pour le commanditaire
