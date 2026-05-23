# Skill — User Stories techniques (tech debt, spikes, infrastructure)

> Certification : PSPO I · PSPO II · ICAgile ICP-APO
> Agent : AGENT-PO-SCRUM.md

## Objectif

Reconnaître, formuler et prioriser les **User Stories techniques** dans le Product Backlog Scrum — celles qui ne livrent pas de valeur métier directe à l'utilisateur final mais qui sont **indispensables à la santé du produit** (dette technique, exploration, infrastructure). Décider quand une story technique est légitime, comment la rédiger et quel ratio maintenir face aux US fonctionnelles.

> 🔗 **En contexte SAFe** → ces stories deviennent une **catégorie officielle "Enabler Stories"** avec 4 types formalisés. Voir `skills/safe/feature-to-story-splitting.md` section "Enabler Stories — Catégorie SAFe officielle".

## Les 3 types de stories techniques en Scrum

### Type 1 — Tech Debt Story (remboursement de dette)

Refactoring, modernisation, suppression de code mort, mise à jour de dépendances obsolètes.

**Exemples :**
- Migrer la BDD MySQL 5.7 → MySQL 8 (sécurité + perf)
- Refactorer le module `checkout` pour réduire le coupling avec `inventory`
- Supprimer la branche de code legacy `v1_pricing` (mort depuis 6 mois)
- Mettre à niveau Spring Boot 2.7 → 3.2

**Quand c'est légitime :**
- Risque opérationnel mesurable (incident, sécurité, performance)
- Bloquant pour livrer une fonctionnalité prévue
- Coût de maintenance qui augmente sprint après sprint

### Type 2 — Spike Story (exploration timeboxée)

Recherche, prototypage ou évaluation pour lever une incertitude **avant** d'engager l'implémentation.

**Exemples :**
- Évaluer 3 libs de génération de PDF (timeboxe 2 jours)
- Mesurer la performance attendue d'un appel à un LLM externe vs local
- Comprendre l'API du nouveau partenaire bancaire avant d'engager une US

**Règles d'or du Spike :**
- **Toujours timeboxé** (2-5 jours max)
- **Output = note de décision** (1 page), pas du code de production
- **Code = jetable** (POC, pas livré)
- **Question explicite à répondre** dans l'énoncé

### Type 3 — Story d'Infrastructure / Outillage

CI/CD, observabilité, qualité, sécurité — tout ce qui améliore la **capacité de livraison** de l'équipe.

**Exemples :**
- Mettre en place le pipeline GitHub Actions pour le service `notifications`
- Ajouter des métriques Prometheus sur les endpoints critiques
- Configurer SonarQube avec seuil bloquant à 80% de couverture
- Provisionner un environnement de staging dédié

---

## Format de rédaction recommandé

### Template adapté (pas de "As a user…")

Le template Connextra classique (*"En tant que X, je veux Y, afin de Z"*) **ne convient pas** aux stories techniques — il n'y a pas d'utilisateur métier direct. Utiliser un format adapté :

```
TITRE         : [verbe technique précis]
TYPE          : Tech Debt / Spike / Infra

CONTEXTE      : [pourquoi maintenant — risque, bloquant, opportunité]

OBJECTIF      : [résultat technique attendu en 1 phrase]

BÉNÉFICE      : [conséquence pour l'utilisateur final, l'équipe ou le produit
                — toujours faire le lien avec la valeur, même indirecte]

CRITÈRES D'ACCEPTATION :
  □ AC1 — [vérifiable, testable]
  □ AC2 — [vérifiable, testable]
  □ AC3 — [vérifiable, testable]

ESTIMATION    : [story points]
LABEL         : tech-debt / spike / infra (pour filtrage backlog)
```

### Exemple Tech Debt Story

```
TITRE     : Migrer le module checkout vers Spring Boot 3.2
TYPE      : Tech Debt

CONTEXTE  : Spring Boot 2.7 fin de support juin 2026, vulnérabilité CVE
            non patchée sur la lib actuelle.

OBJECTIF  : Module checkout sur Spring Boot 3.2, tests passants, perf maintenue.

BÉNÉFICE  : Suppression d'un risque sécurité bloquant pour l'audit Q3 + débloque
            l'usage des nouvelles features Spring (réduction temps de dev futur).

AC :
  □ AC1 — Module checkout buildable et déployable sur Spring Boot 3.2
  □ AC2 — Couverture de tests ≥ 80% maintenue après migration
  □ AC3 — Pas de régression perf détectée sur le scénario de référence
          (P95 < 200ms sur /api/checkout/validate)
  □ AC4 — Documentation README mise à jour avec la nouvelle version

ESTIMATION : 8 SP
LABEL      : tech-debt
```

### Exemple Spike Story

```
TITRE     : Évaluer 3 librairies de génération de PDF pour les factures
TYPE      : Spike

CONTEXTE  : Feature "facture personnalisée" prévue PI+1, choix de stack à faire.

OBJECTIF  : Note de décision recommandant 1 librairie parmi iText, PDFBox, Puppeteer.

BÉNÉFICE  : Sécurise l'estimation de la Feature "facture personnalisée"
            et évite un mauvais choix de stack (coût de migration ultérieur).

TIMEBOX   : 2 jours
OUTPUT    : Note 1 page (Confluence) avec critères + recommandation + POC jetable

AC :
  □ AC1 — Note publiée avec matrice comparative (perf, licence, complexité, doc)
  □ AC2 — POC jetable validé sur le scénario "facture 5 pages avec logo + tableau"
  □ AC3 — Recommandation discutée avec l'équipe et le tech lead

ESTIMATION : 3 SP
LABEL      : spike
```

---

## INVEST adapté aux stories techniques

| Critère | Tech Debt | Spike | Infra |
|---|---|---|---|
| **I**ndependent | ⚠️ Souvent dépendant d'une US fonctionnelle | ✅ Oui par nature | ✅ Oui le plus souvent |
| **N**egotiable | ⚠️ Souvent contraint (CVE, fin de support) | ✅ Oui (timeboxe + scope) | ✅ Oui |
| **V**aluable | ✅ Indirect mais réel (risque évité, vélocité future) | ✅ Décision éclairée | ✅ Capacité de livraison |
| **E**stimable | ✅ Oui | ✅ Timeboxé | ✅ Oui |
| **S**mall | ✅ Sinon splitter | ✅ Toujours (2-5 jours max) | ✅ Oui |
| **T**estable | ✅ AC techniques mesurables | ⚠️ "Décision prise" est l'AC | ✅ Oui |

---

## DoR spécifique aux stories techniques

- [ ] **Justification du "pourquoi maintenant"** explicite (pas "ce serait mieux")
- [ ] **Bénéfice tracé jusqu'à l'utilisateur ou au produit** (jamais "c'est juste technique")
- [ ] **AC mesurables techniquement** (perf, couverture, version, métrique)
- [ ] **Spike : question + timeboxe + output attendu** explicites
- [ ] **Tech Debt : risque chiffré** si pas réalisée (probabilité × impact)
- [ ] **Label "tech-debt / spike / infra"** posé dans l'outil pour filtrage

---

## Ratio dette / valeur — Règle des 15-20%

### Principe Lean-Agile

> **15 à 20% de la capacité de chaque sprint** doit être consacrée aux stories techniques (toutes catégories confondues).

| Contexte | Ratio recommandé |
|---|---|
| Produit jeune (< 1 an), peu de dette | 10-15% |
| Produit mature en run normal | **15-20%** (baseline) |
| Produit avec dette critique identifiée | 25-30% (pendant 2-3 PIs) |
| Refonte / modernisation lourde | 30-40% (Spike + Enabler dominants) |

### Comment maintenir le ratio

1. **Allocation explicite par sprint** : "5 SP réservés pour la dette" dans le Sprint Planning
2. **Rotation thématique** : 1 sprint orienté "qualité" tous les N sprints
3. **Quota visible** : dashboard "Capacité technique vs fonctionnelle" dans le sprint
4. **Discussion en rétrospective** : si dette ↑ et incidents ↑ → augmenter le ratio

### Signaux d'alerte

- 🚨 0% de stories techniques sur 3 sprints consécutifs → dette qui s'accumule
- 🚨 Vélocité qui baisse sans raison apparente → dette qui freine
- 🚨 Bugs récurrents sur le même module → besoin d'une Tech Debt Story de refactoring
- 🚨 Estimations qui explosent en cours de sprint → besoin d'un Spike en amont

---

## Quand une story technique n'est PAS la bonne réponse

| Cas | Pourquoi pas une story | Alternative |
|---|---|---|
| Bug en production | Pas une story (pas une nouveauté) | **Incident / Bug ticket** séparé du backlog |
| Tâche < 1 jour incluse dans une US fonctionnelle | Trop granulaire | **Sous-tâche** de la US parente |
| Maintenance récurrente (mise à jour deps mensuelle) | Activité continue, pas un livrable | **BAU / running cost**, hors backlog produit |
| Demande IT pure (provisioning serveur) | Pas de valeur produit | **Ticket ITSM**, pas backlog Scrum |
| "Code legacy à virer un jour" sans risque immédiat | Pas de justification "maintenant" | **Note dans le backlog d'amélioration**, pas une US prête |

---

## Anti-patterns à éviter

- ❌ **Stories techniques en mode "wishlist"** sans risque ni bénéfice tracé → ne seront jamais priorisées
- ❌ **Tout passer en story technique** ("refacto" comme excuse pour ne pas livrer) → perte de confiance stakeholders
- ❌ **Spike sans timeboxe** → POC qui devient produit non maintenable
- ❌ **Spike dont l'output est du code de production** → c'est plus un Spike, c'est une US qui s'ignore
- ❌ **AC vagues** ("le code est propre", "l'archi est meilleure") → impossible à valider, jamais terminée
- ❌ **0% de capacité allouée à la dette** → bombe à retardement, vélocité qui s'effondre dans 6 mois
- ❌ **PO qui refuse systématiquement les stories techniques** → l'équipe les fait "en cachette", perte de visibilité
- ❌ **Cacher la story technique dans une US fonctionnelle** → estimation faussée + pas de débat de priorisation

---

## Cross-link avec les autres skills

| Si l'objectif est… | Aller voir |
|---|---|
| Rédiger une US fonctionnelle (Connextra) | `skills/scrum/po-user-story.md` |
| Gérer le backlog (structure, refinement) | `skills/scrum/po-backlog.md` |
| Prioriser face aux US fonctionnelles | `skills/scrum/priorisation-techniques.md` |
| Estimer en Planning Poker | `skills/scrum_master/planning-poker.md` |
| **En contexte SAFe → Enabler Stories officielles** | `skills/safe/feature-to-story-splitting.md` |

---

## 📌 Encadré — En contexte SAFe : "Enabler Stories"

En SAFe, ces stories techniques deviennent une **catégorie officielle** appelée **Enabler Stories**, avec 4 types formalisés :

| Type SAFe | Équivalent Scrum (ce skill) |
|---|---|
| **Architectural** | Tech Debt Story (refonte architecturale) |
| **Infrastructure** | Story d'Infrastructure / Outillage |
| **Exploration (Spike)** | Spike Story |
| **Compliance** | Tech Debt Story (mise en conformité) |

Spécificités SAFe additionnelles :
- Reliées à une **Enabler Feature** ou Feature parente
- Capacité réservée **12-20%** au niveau ART
- Validation **Architecte Système** pour les types Architectural / Infrastructure
- Visibles dans le **Program Backlog** et le **Solution Backlog**

→ Détails complets, règles ART, intégration PI Planning : `skills/safe/feature-to-story-splitting.md`

---

## Livrables

- Stories techniques rédigées au format adapté (par type)
- Backlog labellisé (tech-debt / spike / infra) pour filtrage
- Dashboard sprint avec ratio "capacité technique vs fonctionnelle"
- Note de décision pour chaque Spike (1 page, archivée Confluence)
- Plan de remboursement de la dette technique (sur 2-3 PIs)

## Format de sortie

Préciser : **type de story technique** (Tech Debt / Spike / Infra / les 3), **contexte produit** (jeune / mature / en refonte), **ratio dette actuel** (si connu), **outil cible** (Jira / Linear / Notion), **livrable attendu** (rédaction d'une story / plan de dette / template équipe).
