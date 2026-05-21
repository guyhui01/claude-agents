# Skill — Post-Mortem & Retour d'Expérience (REX)
> Certifications : PMP (PMI 2026), SRE Foundation (Google), Certified Agile Retrospective Facilitator, Blameless Post-Mortem Practitioner

## Objectif
Conduire des post-mortems constructifs et sans blame après un incident ou en fin de projet — identifier les causes profondes avec les 5 Pourquoi, produire des plans d'amélioration actionnables et capitaliser sur les apprentissages.

## Blameless Post-Mortem — Principes & Process

### Principes fondamentaux

```
BLAMELESS POST-MORTEM — RÈGLES D'OR
─────────────────────────────────────────────────────────────
1. On blâme les systèmes et processus, PAS les individus
   "Le processus de validation n'a pas détecté le bug"
   (pas "Jean n'a pas vérifié le code")

2. Les personnes font toujours de leur mieux avec les 
   informations dont elles disposaient à ce moment-là

3. L'objectif est d'APPRENDRE, pas de punir

4. Tout incident est une opportunité d'améliorer le système

5. La transparence totale favorise la prévention future
```

### Template Post-Mortem Complet

```yaml
# post_mortem_template.yaml
metadata:
  titre: "Incident #42 — API de scoring indisponible 4h"
  date_incident: "2026-05-15T14:30:00+02:00"
  date_resolution: "2026-05-15T18:45:00+02:00"
  duree_incident: "4h15"
  severite: "P1"           # P1 (critique) / P2 / P3 / P4
  services_impactes: ["API scoring", "CRM Salesforce integration"]
  auteur: "PM + SRE Lead"
  statut: "DRAFT"          # DRAFT / IN_REVIEW / FINAL
  date_publication: "2026-05-19"

impact:
  utilisateurs_affectes: "~850 commerciaux — accès scoring indisponible"
  revenue_impact: "Estimation : 12 000 euros (leads non traités)"
  slo_breach: true
  error_budget_consumed_pct: 45
  external_communication: false

timeline:
  - time: "14:28"
    who: "Alerting Prometheus"
    what: "Alerte SLO breach — error rate > 5% sur api-scoring"
    type: "DETECTION"
  - time: "14:35"
    who: "On-call SRE (Bob)"
    what: "Acknowledge alerte, début investigation"
    type: "RESPONSE"
  - time: "14:52"
    who: "Bob (SRE)"
    what: "Identifie OOM sur pods scoring — modèle ML chargé 3x en mémoire"
    type: "DIAGNOSIS"
  - time: "15:10"
    who: "Alice (ML Engineer)"
    what: "Root cause confirmée : mise à jour modèle v2.1 sans test de charge"
    type: "ROOT_CAUSE"
  - time: "15:30"
    who: "Alice + Bob"
    what: "Rollback vers modèle v2.0 — service partiellement restauré"
    type: "MITIGATION"
  - time: "18:45"
    who: "Alice"
    what: "Déploiement correctif mémoire — service pleinement restauré"
    type: "RESOLUTION"

root_cause_analysis:
  methode: "5 Pourquoi"
  cause_immediate: "OOM sur pods scoring — crash loop"
  cinq_pourquoi:
    - pourquoi: "Les pods scoring crashent en OOM"
      parce_que: "Le modèle v2.1 consomme 3x plus de RAM que v2.0 (350MB vs 95MB)"
    - pourquoi: "Le modèle consomme 3x plus de RAM"
      parce_que: "Nouveau feature store charge 3 versions du modèle simultanément"
    - pourquoi: "3 versions chargées simultanément"
      parce_que: "Bug dans le lazy-loading du ModelRegistry introduit en v2.1"
    - pourquoi: "Le bug n'a pas été détecté avant prod"
      parce_que: "Les tests de charge ne mesurent pas la consommation mémoire"
    - pourquoi: "Les tests de charge ne mesurent pas la mémoire"
      parce_que: "Pas de test de régression mémoire dans le pipeline CI/CD"

  cause_racine_principale: "Absence de test de régression sur consommation mémoire en CI/CD"
  facteurs_contributifs:
    - "Pas d'alerting sur memory pressure avant OOM"
    - "Limites K8s non ajustées après changement d'architecture"
    - "Runbook de rollback mal documenté (30 min perdues)"

action_plan:
  - id: AP-01
    action: "Ajouter un test de régression mémoire dans le pipeline CI"
    responsable: "Alice (ML Engineer)"
    deadline: "2026-05-26"
    priorite: "P0"
    type: "PREVENTION"
  - id: AP-02
    action: "Configurer une alerte Prometheus sur memory_usage > 80% (avant OOM)"
    responsable: "Bob (SRE)"
    deadline: "2026-05-22"
    priorite: "P0"
    type: "DETECTION"
  - id: AP-03
    action: "Mettre à jour le runbook de rollback modèle ML (moins de 15 min)"
    responsable: "Bob + Alice"
    deadline: "2026-05-23"
    priorite: "P1"
    type: "RESPONSE"
  - id: AP-04
    action: "Ajouter les limites K8s dans les critères de Definition of Done"
    responsable: "PM (Guy)"
    deadline: "2026-05-20"
    priorite: "P1"
    type: "PROCESS"

lessons_learned:
  positive:
    - "Alerting Prometheus a détecté l'incident en 2 min (objectif < 5 min)"
    - "Communication interne fluide entre SRE et ML team"
    - "Rollback exécuté sans downtime supplémentaire"
  to_improve:
    - "Tests de charge insuffisants (mémoire non mesurée)"
    - "Runbook incomplet — 30 min perdues à chercher la procédure"
    - "Limites K8s non révisées lors du changement de modèle"
  share_with_team: true
```

### Facilitation du Post-Mortem — Guide

```
DÉROULÉ DE LA RÉUNION POST-MORTEM (90 minutes)
─────────────────────────────────────────────────────────────
[00-05 min]  Règles du jeu
             → Rappel : blameless, respect, focus système
             → Facilitateur désigné (idéalement externe à l'incident)

[05-25 min]  Construction de la timeline
             → Chacun partage sa perspective
             → Chronologie partagée sur tableau blanc / Miro
             → Questions : "Que savais-tu à ce moment ?", "Qu'as-tu décidé et pourquoi ?"

[25-50 min]  Analyse des causes — 5 Pourquoi
             → Partir du symptôme visible
             → Questionner jusqu'à la cause système
             → Identifier les facteurs contribuants

[50-70 min]  Plan d'actions
             → Chaque cause racine = au moins 1 action
             → Responsable + deadline explicites
             → Pas plus de 5-7 actions (sinon trop dilué)

[70-85 min]  Lessons learned & ce qui a bien fonctionné
             → Reconnaître ce qui a bien marché
             → Capitaliser pour partage avec d'autres équipes

[85-90 min]  Publication & suivi
             → Draft disponible dans 48h
             → Revue dans 2 semaines
```

## REX Projet — Clôture de Projet IA

```python
# rex_project_template.py
from dataclasses import dataclass, field

@dataclass
class ProjectREX:
    project_name: str
    duration_weeks: int
    budget_initial: float
    budget_final: float
    team_size: int

    successes: list[str] = field(default_factory=list)
    challenges: list[str] = field(default_factory=list)
    what_to_replicate: list[str] = field(default_factory=list)
    what_to_avoid: list[str] = field(default_factory=list)
    key_metrics: dict = field(default_factory=dict)
    recommendations_next_project: list[str] = field(default_factory=list)

    @property
    def budget_variance_pct(self) -> float:
        return ((self.budget_final - self.budget_initial) / self.budget_initial) * 100

    def to_markdown(self) -> str:
        lines = [
            f"# REX — {self.project_name}",
            f"**Durée :** {self.duration_weeks} semaines | "
            f"**Budget :** {self.budget_initial/1000:.0f}k€ → {self.budget_final/1000:.0f}k€ "
            f"({'+'if self.budget_variance_pct>0 else ''}{self.budget_variance_pct:.1f}%)",
            "",
            "## Succès",
            *[f"- {s}" for s in self.successes],
            "",
            "## Difficultés rencontrées",
            *[f"- {c}" for c in self.challenges],
            "",
            "## A reproduire sur les prochains projets",
            *[f"- {r}" for r in self.what_to_replicate],
            "",
            "## A éviter absolument",
            *[f"- {a}" for a in self.what_to_avoid],
            "",
            "## Recommandations pour le prochain projet IA",
            *[f"- {r}" for r in self.recommendations_next_project],
        ]
        return "\n".join(lines)
```

## Livrables
- Document de post-mortem complet (timeline, 5 pourquoi, plan d'action)
- REX de fin de projet (succès, difficultés, recommandations)
- Suivi des actions post-mortem (tableau Jira/Linear)
- Partage de connaissances (wiki, lunch & learn)
- Rapport de maturité de l'équipe SRE/projet

## Format de sortie
Précise : type d'événement (incident de production / clôture projet / fin de sprint), sévérité, durée de l'impact, participants disponibles, outil de documentation (Confluence/Notion/Google Docs), délai pour publication du post-mortem.
