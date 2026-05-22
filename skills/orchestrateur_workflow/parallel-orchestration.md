# Skill — Orchestration Parallèle vs Séquentielle
> Certifications : BPMN 2.0 OCM (OMG), AWS Certified Solutions Architect (Amazon), Google Cloud Professional Cloud Architect (Google), PMP (PMI)

## Objectif
Décider et implémenter le mode d'exécution optimal — parallèle, séquentiel ou hybride — pour chaque étape d'un workflow agentique, afin de maximiser la qualité des outputs et minimiser le temps d'exécution.

## Règle de décision — Parallèle vs Séquentiel

```
SÉQUENTIEL si :
  ✓ L'agent B a besoin de l'output de l'agent A pour travailler
  ✓ Les périmètres se chevauchent (risque de contradictions)
  ✓ Le volume de contexte est déjà élevé (éviter la surcharge)

PARALLÈLE si :
  ✓ Les agents travaillent sur des périmètres distincts et indépendants
  ✓ Les outputs n'ont pas de dépendance forte entre eux
  ✓ Gain de temps significatif (>30% du workflow)
  ✓ Les outputs seront agrégés en fin d'étape par l'orchestrateur
```

---

## Patterns d'orchestration

### Pattern 1 — Séquentiel pur
```
A → B → C → D → [RÉSULTAT]

Cas d'usage : Workflow Cadrage (chaque étape nourrit la suivante)
Avantage   : Contexte cumulatif riche, qualité maximale
Inconvénient : Plus lent
```

### Pattern 2 — Fork / Join (parallèle avec agrégation)
```
         ┌── B ──┐
A ──►────┤   C   ├────► [JOIN] → D → [RÉSULTAT]
         └── D' ─┘

Cas d'usage : UX + QA en parallèle après cadrage
Avantage   : Gain de temps, périmètres indépendants
Inconvénient : Agrégation des outputs à gérer
```

### Pattern 3 — Pipeline hybride
```
A → B ──►────┬── C ──┐
             │   D   ├──► [JOIN] → E → [RÉSULTAT]
             └── E' ─┘

Cas d'usage : Delivery SAFe (PO + DevOps + Sécu en parallèle)
Avantage   : Équilibre qualité / vitesse
Inconvénient : Coordination plus complexe
```

### Pattern 4 — Scatter / Gather
```
A → [SCATTER: même tâche sur N contextes]
    ├── B(contexte 1)
    ├── B(contexte 2)
    └── B(contexte 3)
         └──► [GATHER : synthèse] → [RÉSULTAT]

Cas d'usage : Analyse multi-clients, multi-marchés, multi-equipes
Avantage   : Parallélisation maximale
Inconvénient : Synthèse finale complexe
```

---

## Template YAML — Exécution parallèle

```yaml
parallel_block:
  id: "PARALLEL-01"
  workflow_id: "WF-002-DELIVERY-SAFE"
  declencheur: "Output PO-SAFE validé (PI Objectives)"
  
  branches:
    - id: "branch_a"
      agent: "QA-AGILE"
      input: "Features SAFe + critères d'acceptation"
      output_attendu: "Plan de test Sprint + DoD"
      duree_estimee: "15 min"
      
    - id: "branch_b"
      agent: "SECURITE-IA"
      input: "Architecture technique + données traitées"
      output_attendu: "Audit OWASP + recommandations RGPD"
      duree_estimee: "20 min"
      
    - id: "branch_c"
      agent: "DEVOPS-CLOUD"
      input: "Stack technique + exigences CI/CD"
      output_attendu: "Pipeline CI/CD + environnements"
      duree_estimee: "20 min"
  
  join:
    condition: "Toutes les branches complétées"
    agent_agregation: "CHEF-PROJET-IA"
    output_final: "Plan de release consolidé"
```

---

## Prompt d'exécution parallèle — Template

```
EXÉCUTION PARALLÈLE — [NOM DU BLOC]
────────────────────────────────────────────────────────

CONTEXTE COMMUN (transmis à tous les agents) :
[Contexte global du workflow + outputs étapes précédentes]

─── AGENT 1 : [NOM] ────────────────────────────────────
Ton rôle : [mission spécifique]
Input    : [données spécifiques à cet agent]
Output   : [livrable attendu — format précis]

─── AGENT 2 : [NOM] ────────────────────────────────────
Ton rôle : [mission spécifique]
Input    : [données spécifiques à cet agent]
Output   : [livrable attendu — format précis]

─── AGENT 3 : [NOM] ────────────────────────────────────
Ton rôle : [mission spécifique]
Input    : [données spécifiques à cet agent]
Output   : [livrable attendu — format précis]

────────────────────────────────────────────────────────
AGRÉGATION : [AGENT CHEF-PROJET-IA / ORCHESTRATEUR]
Consolider les 3 outputs en [FORMAT FINAL].
```

---

## Règles d'agrégation post-parallèle

```
APRÈS UN FORK/JOIN :
1. Collecter tous les outputs des branches
2. Vérifier la cohérence inter-branches (pas de contradictions)
3. Résoudre les conflits avant d'agréger
4. Transmettre l'output agrégé à l'étape suivante

RÉSOLUTION DE CONFLITS :
  Priorité 1 : JURIDIQUE-IA / SECURITE-IA (non-négociable)
  Priorité 2 : CHEF-PROJET-IA (contraintes projet)
  Priorité 3 : PO (vision produit)
  Priorité 4 : DEV / QA (faisabilité technique)
```

## Livrables
- Schéma d'exécution (séquentiel / parallèle / hybride) documenté
- Template YAML de bloc parallèle
- Prompt d'exécution parallèle prêt à l'emploi
- Plan d'agrégation des outputs

## Format de sortie
Précise : agents impliqués, dépendances identifiées, contrainte de temps, format des outputs à agréger.
