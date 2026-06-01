# Skill — Sélection et Routage vers les Agents Spécialisés
> Certifications : TOGAF 10 (The Open Group), PMI-ACP (PMI), Anthropic Claude Code in Action (2026), Claude Code 101 (2026)

## Objectif
Identifier et sélectionner dynamiquement le ou les agents les plus adaptés à une demande — en fonction du contexte, de la tâche, du domaine métier et des contraintes — pour garantir la meilleure qualité de réponse possible.

## Matrice de Routage — Catalogue complet

### Routage par type de demande

| Type de demande | Agent prioritaire | Agent secondaire | Condition |
|---|---|---|---|
| Analyser un besoin métier | BUSINESS-ANALYST | CONSULTANT-IA | Si contexte stratégique |
| Rédiger des User Stories | PO-SCRUM | PO-SAFE | Si contexte SAFe / multi-équipes |
| PI Planning / WSJF | PO-SAFE | SCRUM-MASTER | Si niveau ART |
| Architecture système IA | AI-ARCHITECT | DEV-PYTHON-IA | Si besoin code immédiat |
| Développement Python / ML | DEV-PYTHON-IA | MLOPS-ENGINEER | Si besoin pipeline ML |
| Développement TypeScript | DEV-TYPESCRIPT-IA | DEV-PYTHON-IA | Si besoin API back |
| Site CMS / Drupal | DEV-DRUPAL-PHP | — | Domaine CMS uniquement |
| Pipeline data / ETL | DATA-ENGINEER | MLOPS-ENGINEER | Si besoin modèle |
| Modèle ML / statistiques | DATA-SCIENTIST | DATA-ENGINEER | Si besoin données d'abord |
| CI/CD / Infrastructure | DEVOPS-CLOUD | AI-ARCHITECT | Si design avant déploiement |
| Audit sécurité | SECURITE-IA | JURIDIQUE-IA | Si besoin conformité RGPD |
| Tests fonctionnels Agile | QA-AGILE | SCRUM-MASTER | Si blocage sprint |
| Tests formels / recette | QA-CYCLEV | QA-AGILE | Si contexte Cycle V |
| UX / Parcours utilisateur | UX-DESIGNER | BUSINESS-ANALYST | Si besoin cadrage avant |
| Facilitation Scrum | SCRUM-MASTER | PO-SCRUM | Si blocage backlog |
| Planification projet | CHEF-PROJET-IA | PO-SAFE | Si hybride Agile/Waterfall |
| Stratégie IA / Audit | CONSULTANT-IA | CDO-DIRECTEUR-IA | Si niveau CODIR |
| Gouvernance data / CDO | CDO-DIRECTEUR-IA | CONSULTANT-IA | Si plan data long terme |
| Formation équipes IA | FORMATEUR-IA | CONSULTANT-IA | Si besoin audit avant |
| Growth / Acquisition | GROWTH-IA | REDACTEUR-IA | Si besoin contenu |
| Rédaction livrables | REDACTEUR-IA | CHEF-PROJET-IA | Si rapport projet |
| Conformité RGPD / IA Act | JURIDIQUE-IA | SECURITE-IA | Si audit technique aussi |

---

## Algorithme de Sélection

```
ÉTAPE 1 — Identifier le domaine primaire
─────────────────────────────────────────
? Est-ce une tâche : technique / produit / management ?

  TECHNIQUE  → Groupe Dev & Technique (9 agents)
  PRODUIT    → Groupe Agile & Produit (7 agents)
  MANAGEMENT → Groupe Management & Conseil (7 agents)

ÉTAPE 2 — Affiner par spécialité
─────────────────────────────────────────
? Quelle est la granularité de la tâche ?

  CODE         → DEV-PYTHON / DEV-TYPESCRIPT / DEV-DRUPAL
  ARCHITECTURE → AI-ARCHITECT / DATA-ENGINEER / MLOPS
  BACKLOG      → PO-SCRUM (équipe) / PO-SAFE (ART)
  TESTS        → QA-AGILE (sprint) / QA-CYCLEV (recette)
  CONSEIL      → CONSULTANT-IA / CDO / CHEF-PROJET-IA

ÉTAPE 3 — Vérifier les conditions de routage
─────────────────────────────────────────
? Y a-t-il des contraintes spécifiques ?

  SAFe / multi-équipes → TOUJOURS PO-SAFE avant PO-SCRUM
  RGPD / IA Act        → TOUJOURS JURIDIQUE-IA en parallèle
  CAC40 / CODIR        → TOUJOURS CHEF-PROJET-IA pour le reporting
  IA générative        → TOUJOURS AI-ARCHITECT pour le design
```

---

## Template de Prompt de Routage

```
CONTEXTE : [description de la situation en 2-3 lignes]
TÂCHE    : [ce que l'utilisateur veut accomplir]
DOMAINE  : [technique / produit / management]
CONTRAINTES : [délai, budget, méthodo, réglementaire]

→ AGENT SÉLECTIONNÉ : [nom de l'agent]
→ RAISON            : [pourquoi cet agent et pas un autre]
→ AGENTS EN PARALLÈLE (si besoin) : [liste]
→ AGENTS SUIVANTS   : [étape d'après dans le workflow]
```

---

## Règles de routage prioritaires

1. **Ne jamais router vers 2 agents avec le même périmètre** sans condition explicite
2. **PO-SCRUM et PO-SAFE ne sont pas interchangeables** — vérifier le niveau (équipe vs ART)
3. **QA-AGILE et QA-CYCLEV ne sont pas interchangeables** — vérifier la méthode projet
4. **JURIDIQUE-IA systématique** si données personnelles ou IA Act concerné
5. **CHEF-PROJET-IA systématique** si livrable CODIR ou steering committee impliqué

## Livrables
- Matrice de routage complétée pour le workflow concerné
- Justification du choix de chaque agent
- Liste des agents en parallèle identifiés
- Ordre de séquençage validé

## Format de sortie
Précise : description de la demande, contraintes méthodologiques, type de client (CAC40 / PME / startup), livrables attendus, délai.

## Anti-patterns
- ❌ **Router vers 2 agents au même périmètre** sans condition explicite : doublons et conflits → règle de désambiguïsation
- ❌ **Confondre PO-SCRUM/PO-SAFE** ou **QA-AGILE/QA-CYCLEV** : livrables inadaptés → vérifier niveau (équipe/ART) et méthode (Agile/cycle V)
- ❌ **Pas de fallback de routage** si aucun agent ne matche : demande perdue → agent par défaut + escalade
- ❌ **Oublier JURIDIQUE-IA** sur données personnelles / AI Act : risque conformité → routage systématique (règle 4)
- ❌ **Routing statique** (pas de re-routing sur échec d'un agent) : blocage → boucle de re-routage bornée
- ❌ **Routeur trop coûteux** (Opus pour une simple classification) : un routeur léger suffit → Sonnet/Haiku pour le routage

## Sources
- **Anthropic — Building Effective Agents** (anthropic.com/engineering, déc. 2024) : pattern **routing** (classification → agent spécialisé)
- **TOGAF 10** (The Open Group, 2022) — gouvernance des responsabilités

## Voir aussi
- [`workflow-design.md`](workflow-design.md) — gateways décisionnels du workflow
- [`dependency-mapping.md`](dependency-mapping.md) — ordre d'exécution des agents routés
- [`parallel-orchestration.md`](parallel-orchestration.md) — agents en parallèle
- [`prompt-engineering-orchestration.md`](prompt-engineering-orchestration.md) — prompt de routage structuré
