# Skill — Gestion des Parties Prenantes
> Certifications : PMP (PMI 2026), PRINCE2 Practitioner, Prosci Change Management Certified, ADKAR Practitioner
> Agent : AGENT-CHEF-PROJET-IA.md
> Référentiels : **Matrice Mendelow** pouvoir/intérêt (1991) · **PROSCI ADKAR** (Hiatt 2006) · **PMBOK 7** (engagement des parties prenantes) · couplage Kotter / change management

## Objectif
Identifier, analyser et engager toutes les parties prenantes d'un projet IA — en utilisant la matrice influence/intérêt, un plan de communication adapté et les techniques de change management ADKAR pour maximiser l'adoption.

## Cartographie des Parties Prenantes

### Matrice Influence / Intérêt

```python
# stakeholder_matrix.py
from dataclasses import dataclass, field
from typing import Literal

Quadrant = Literal["MANAGE_CLOSELY", "KEEP_SATISFIED", "KEEP_INFORMED", "MONITOR"]

@dataclass
class Stakeholder:
    name: str
    role: str
    influence: int    # 1-5
    interest: int     # 1-5
    current_stance: Literal["CHAMPION", "SUPPORTIVE", "NEUTRAL", "RESISTANT", "BLOCKER"]
    key_concerns: list[str] = field(default_factory=list)
    engagement_strategy: str = ""

    @property
    def quadrant(self) -> Quadrant:
        if self.influence >= 3 and self.interest >= 3:
            return "MANAGE_CLOSELY"     # Gérer de près — partenaires clés
        elif self.influence >= 3 and self.interest < 3:
            return "KEEP_SATISFIED"     # Satisfaire — décideurs peu impliqués
        elif self.influence < 3 and self.interest >= 3:
            return "KEEP_INFORMED"      # Informer — utilisateurs, experts
        else:
            return "MONITOR"            # Surveiller — périphériques

    @property
    def priority_score(self) -> int:
        return self.influence * self.interest


def generate_engagement_plan(stakeholders: list[Stakeholder]) -> str:
    """Génère un plan d'engagement priorisé."""
    sorted_shs = sorted(stakeholders, key=lambda x: x.priority_score, reverse=True)

    plan = ["# Plan d'Engagement des Parties Prenantes\n"]
    for sh in sorted_shs:
        plan.append(f"## {sh.name} ({sh.role})")
        plan.append(f"- Quadrant : **{sh.quadrant}**")
        plan.append(f"- Stance actuelle : {sh.current_stance}")
        plan.append(f"- Préoccupations clés : {', '.join(sh.key_concerns)}")
        plan.append(f"- Stratégie : {sh.engagement_strategy}\n")
    return "\n".join(plan)


# Exemple projet IA
stakeholders = [
    Stakeholder("Marie D.", "DSI", 5, 4, "SUPPORTIVE",
        ["Sécurité des données", "Conformité", "ROI infrastructure"],
        "Steering Committee mensuel, accès direct en cas de risque critique"),
    Stakeholder("Jean P.", "DG Commercial", 5, 5, "CHAMPION",
        ["Taux de conversion", "Adoption par les commerciaux"],
        "Co-sponsor, présent à toutes les démos, testimonial interne"),
    Stakeholder("Sophie L.", "DPO", 4, 5, "NEUTRAL",
        ["RGPD", "AIPD", "Minimisation données", "Droits des personnes"],
        "Workshop dédié S1, revue mensuelle, draft AIPD fourni en S2"),
    Stakeholder("Équipe Commerciale", "Utilisateurs finaux", 2, 4, "RESISTANT",
        ["Charge de travail", "Peur d'être remplacé", "Complexité outil"],
        "Ateliers co-design S3, formation dédiée, champion interne identifié"),
]
```

### Plan de Communication

```yaml
# communication_plan.yaml
communications:
  - audience: "Steering Committee (DSI, DG, Sponsor)"
    format: "One-pager + 15 min présentation"
    frequence: "Mensuelle"
    canal: "Réunion en présentiel"
    contenu: "Statut RAG, EVM, risques escaladés, décisions requises"
    responsable: "PM"

  - audience: "Équipe Projet"
    format: "Daily standup (15 min)"
    frequence: "Quotidienne"
    canal: "Teams / présentiel"
    contenu: "Avancement, blocages, dépendances"
    responsable: "Scrum Master"

  - audience: "Sprint Review"
    format: "Démo + feedback (1h)"
    frequence: "Bi-hebdomadaire"
    canal: "Présentiel + enregistrement"
    contenu: "Démos fonctionnalités livrées, feedback utilisateurs"
    responsable: "PO"

  - audience: "DPO + Juristes"
    format: "Revue conformité (45 min)"
    frequence: "Par sprint"
    canal: "Réunion dédiée"
    contenu: "Avancement AIPD, nouvelles fonctionnalités à valider"
    responsable: "PM + Data Scientist Lead"

  - audience: "Utilisateurs finaux (équipe commerciale)"
    format: "Newsletter projet (email)"
    frequence: "Mensuelle"
    canal: "Email + intranet"
    contenu: "Progrès, bénéfices attendus, comment participer aux tests"
    responsable: "Change Manager"
```

## Change Management — Modèle ADKAR

### Application ADKAR au projet IA

```
ADKAR — Changement "Adoption du Scoring IA par l'équipe commerciale"

A — AWARENESS (Conscience du changement)
   Actions : Communication DSI + DG lors du kick-off
   Message : "L'IA va prioriser vos leads — vous gagnerez 30% de temps"
   Canal : All-hands meeting, newsletter, vidéo du DG
   Timeline : S1-S2
   Mesure : 90% de l'équipe consciente de l'arrivée de l'outil (survey)

D — DESIRE (Désir de changer)
   Actions : Ateliers co-design avec commerciaux ambassadeurs
   Message : "Vous avez co-conçu cet outil — vos retours ont été intégrés"
   Canal : Workshops, témoignages champions
   Timeline : S3-S5
   Mesure : 75% souhaitent utiliser l'outil (survey)

K — KNOWLEDGE (Savoir comment changer)
   Actions : Formation 2h + documentation utilisateur simple
   Message : "3 clics pour voir votre score et les raisons"
   Canal : E-learning, quick start guide, vidéos courtes
   Timeline : S10-S11
   Mesure : 80% formés, score quiz > 80%

A — ABILITY (Capacité à changer)
   Actions : Accompagnement hypercare 4 semaines post go-live
   Message : "Support disponible — feedback pris en compte chaque semaine"
   Canal : Slack dédié, office hours hebdo, FAQ vivante
   Timeline : S13-S17
   Mesure : Taux d'utilisation > 60% en semaine 4

R — REINFORCEMENT (Renforcement)
   Actions : Partage des succès (leads convertis grâce au scoring)
   Message : "L'équipe A a augmenté son taux de conversion de 18% en 1 mois"
   Canal : Newsletter, réunion équipe, gamification
   Timeline : S17+
   Mesure : Taux d'utilisation stable > 80% à M+3
```

### Gestion des Conflits & Résistances

```
NIVEAU DE RESISTANCE    APPROCHE RECOMMANDÉE
────────────────────────────────────────────────────────────
Questionnement          Écoute active, réponse aux objections
(normal)                Workshop d'expression, Q&A structuré

Opposition modérée      Identifier les préoccupations profondes
(inquiétude)            1:1 avec le manager direct, impliquer dans tests

Résistance active       Réunion trilatérale (sponsor + concerné + PM)
(blocage)               Escalade si nécessaire, plan alternatif

Sabotage                Escalade au sponsor, arbitrage RH si nécessaire
(rare)                  (Situation à éviter avec un bon ADKAR)
```

## Livrables
- Registre des parties prenantes (cartographie, stance, plan d'engagement)
- Matrice influence/intérêt (format visuel 2x2)
- Plan de communication complet par audience
- Plan ADKAR pour les populations impactées
- Rapport d'adoption post go-live (semaines 1, 4, 12)
- Template de résolution des conflits

## Format de sortie
Précise : nombre et type de parties prenantes, transformation impactée (processus métier, outil, organisation), taille de la population impactée, expérience ADKAR de l'équipe, culture de l'entreprise (top-down / participative), délai pour le changement.

## Anti-patterns
- ❌ **Cartographie figée** : la matrice influence/intérêt doit être révisée (les stances évoluent)
- ❌ **Communication uniforme** : même message pour le DG et l'utilisateur final (≠ besoins)
- ❌ **Sauter une étape ADKAR** : former (K) sans avoir créé le désir (D) → adoption qui échoue
- ❌ **Ignorer la résistance** au lieu de l'adresser (la résistance non traitée devient sabotage)
- ❌ **Confondre Mendelow et RACI** : pouvoir/intérêt (engagement) ≠ responsabilités (exécution)
- ❌ **Mesurer l'adoption seulement au go-live** : suivre L1→L4 (conscience → renforcement à M+3)

## Sources
- **Mendelow A.L.** — matrice pouvoir/intérêt (*Proc. ICIS*, Cambridge MA, 1991)
- **Hiatt J.** — *ADKAR: A Model for Change* (Prosci Research, 2006)
- **PMBOK 7** (PMI 2021) — domaine de performance « Parties prenantes »
- **Kotter J.** — *Leading Change* (HBR Press, 1996) — couplage conduite du changement

## Voir aussi
- [`cadrage-projet-ia.md`](cadrage-projet-ia.md) — matrice des parties prenantes initiale
- [`reporting-codir.md`](reporting-codir.md) — communication adaptée par audience
- [`../change_manager/`](../change_manager/) — conduite du changement approfondie (PROSCI/Kotter)
- [`../scrum/stakeholder-map.md`](../scrum/stakeholder-map.md) — cartographie côté produit
- [`../juridique_ia/politique-ia-entreprise.md`](../juridique_ia/politique-ia-entreprise.md) — adoption IA & CSE
