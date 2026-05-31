# Skill — Reporting CODIR pour Projets IA
> Certifications : PMP (PMI 2026), PMI-ACP, Executive Presentation Skills, Storytelling with Data (Nussbaumer Knaflic)
> Agent : AGENT-CHEF-PROJET-IA.md
> Référentiels : **Pyramide de Minto** (1987) · **Storytelling with Data** (Knaflic, Wiley 2015) · **EVM** (CPI/SPI/EAC) · RAG status

## Objectif
Produire des reportings CODIR clairs et orientés décision pour les projets IA — one-pager RAG, tableau de bord KPIs, visualisation d avancement et escalade des risques en moins de 5 minutes de lecture.

## One-Pager Statut — Template RAG

### Structure One-Pager Projet IA

```
PROJET IA : [NOM]     Statut : VERT     Date : 2026-05-19
PM : [Nom]            Budget : 120k Euros      Sprint : 6/10
AVANCEMENT     |     BUDGET        |   RISQUES ACTIFS
   75%         |  Depense: 80k     |   ROUGE Qualite donnees
   SPI: 1.05   |  Prevu:  90k     |   AMBRE Retard validation
   CPI: 0.98   |  Ecart: -10k     |   VERT Infra AWS
```

### Template Markdown One-Pager

```markdown
# Reporting Projet IA - [Nom du Projet]
Date : 2026-05-19 | PM : [Nom] | Sponsor : [Nom]

## Statut Global : AMBRE

| Axe | Statut | Detail |
|-----|--------|--------|
| Planning | AMBRE | SPI 0.91 — 1 semaine de retard rattrapable |
| Budget | VERT | CPI 0.98 — sous controle |
| Qualite | VERT | AUC 0.87 > objectif 0.85 |
| Risques | AMBRE | R-02 (validation DPO) en cours |
| Equipe | VERT | Aucun depart |

## Avancement Sprint 6/10 — 55% realise (vs 60% planifie)
- Fait : Modele optimise (SHAP integre), API v1.2 deployee staging
- En cours : Tests de charge (objectif 500 rps), documentation technique
- Bloque : Acces donnees historiques segment B2B (ticket DSI 4521)

## Indicateurs Cles
| KPI | Actuel | Objectif | Ecart |
|-----|--------|----------|-------|
| AUC-ROC | 0.87 | 0.85 | +2% OK |
| Latence P99 | 185ms | 200ms | -8% OK |
| Coverage tests | 91% | 90% | +1% OK |
| Budget consomme | 89k euros | 90k euros | -1% OK |

## Risques Escalades
| # | Risque | Severite | Action requise CODIR |
|---|--------|----------|---------------------|
| R-02 | Retard DPO | AMBRE | Valider escalade DSI si pas de retour S7 |

## Decisions Attendues
1. Budget additionnel 15k euros pour enrichissement donnees externes
2. Go-live date : confirmer le 28 juin vs 5 juillet (maintenance Salesforce)

## Prochain Steering Committee : 2026-06-02
```

## Dashboard CODIR Multi-Projets

### Tableau de Bord Portefeuille IA (Vue CODIR)

```python
# codir_dashboard_generator.py
from dataclasses import dataclass
from typing import Literal

Status = Literal["GREEN", "AMBER", "RED"]
RAG_LABEL = {"GREEN": "VERT", "AMBER": "AMBRE", "RED": "ROUGE"}

@dataclass
class ProjectStatus:
    id: str
    name: str
    pm: str
    budget_total: float
    budget_consumed: float
    progress_pct: float
    planned_progress_pct: float
    go_live: str
    overall_status: Status
    key_risk: str
    decision_needed: str = ""

def generate_codir_table(projects: list[ProjectStatus]) -> str:
    lines = [
        "# Tableau de Bord Portefeuille IA",
        "",
        "| Projet | Statut | Avancement | Budget | Go-Live | Risque cle |",
        "|--------|--------|-----------|--------|---------|-----------|",
    ]
    for p in projects:
        budget_pct = (p.budget_consumed / p.budget_total) * 100
        lines.append(
            f"| {p.name} | {RAG_LABEL[p.overall_status]} "
            f"| {p.progress_pct:.0f}% (/{p.planned_progress_pct:.0f}%) "
            f"| {budget_pct:.0f}% ({p.budget_consumed/1000:.0f}k/{p.budget_total/1000:.0f}k) "
            f"| {p.go_live} | {p.key_risk} |"
        )
    decisions = [p for p in projects if p.decision_needed]
    if decisions:
        lines += ["", "## Decisions Requises CODIR", ""]
        for p in decisions:
            lines.append(f"- {p.name} : {p.decision_needed}")
    return "\n".join(lines)
```

### Regles de Definition du RAG Status

| Statut | Planning (SPI) | Budget (CPI) | Risques | Qualite |
|--------|---------------|-------------|---------|---------|
| VERT | SPI >= 0.95 | CPI >= 0.95 | Aucun critique actif | KPIs OK |
| AMBRE | SPI 0.85-0.95 | CPI 0.85-0.95 | Risque eleve gere | 1 KPI en retard |
| ROUGE | SPI < 0.85 | CPI < 0.85 | Risque critique | KPI bloquant |

## Livrables
- One-pager mensuel par projet (format PDF/Notion/PowerPoint)
- Dashboard CODIR multi-projets (RAG + EVM)
- Rapport d escalade pour les projets ROUGE
- Synthese executive trimestrielle (2-3 slides max)
- Template automatisable (Python + jinja2 ou Notion API)

## Format de sortie
Precise : nombre de projets a reporter, frequence CODIR, format attendu (slide/PDF/Notion/email), public (CDO seul / CODIR complet), metriques prioritaires du sponsor, seuils RAG de l entreprise, outils de visualisation disponibles.

## Anti-patterns
- ❌ **One-pager qui déborde** : un reporting CODIR tient sur 1 page lisible en < 5 min
- ❌ **Jargon technique au CODIR** (AUC, RPS, OOM) sans traduction en impact business
- ❌ **Reporting sans décision demandée** : un CODIR sert à décider, pas seulement à informer
- ❌ **RAG sans seuils objectifs** : un « vert » optimiste non adossé à SPI/CPI
- ❌ **Enterrer le mauvais sous le bon** (anti-Minto) : la mauvaise nouvelle doit remonter en tête
- ❌ **Graphiques surchargés** : 1 message par visuel (Knaflic)

## Sources
- **Minto B.** — *The Pyramid Principle* (Pearson, 1987) — réponse → arguments → données
- **Nussbaumer Knaflic C.** — *Storytelling with Data* (Wiley, 2015)
- **PMI** — EVM (CPI/SPI/EAC) pour le reporting d'avancement
- **Few S.** — *Information Dashboard Design* (O'Reilly, 2006)

## Voir aussi
- [`evm-valeur-acquise.md`](evm-valeur-acquise.md) — calcul des indices reportés (CPI/SPI/EAC)
- [`gouvernance-portefeuille.md`](gouvernance-portefeuille.md) — dashboard multi-projets
- [`stakeholder-management.md`](stakeholder-management.md) — adapter le message par audience
- [`../redacteur_ia/synthese-executive.md`](../redacteur_ia/synthese-executive.md) — synthèse exécutive Minto/SCQA
- [`../financial_analyst/reporting-financier.md`](../financial_analyst/reporting-financier.md) — volet financier du reporting
