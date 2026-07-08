# next_steps — claude-agents

> Tracker opérationnel de reprise de session (audience : Guy + Claude Code).
> En tête : prompt de démarrage paste-ready. Détail durable : mémoire `project-topologie-catalogue-claude-agents`.

---

## ▶ Prompt de démarrage (coller tel quel)

```text
Reprise session — catalogue /Users/guyhui/CLAUDE/claude-agents (repo guyhui01/claude-agents, checkout canonique unique).
Applique le rituel de démarrage. CHECK FACTUEL D'ABORD, jamais de mémoire :
  git -C /Users/guyhui/CLAUDE/claude-agents status -sb   (attendu : main EN SYNC, working tree propre)
  git describe --tags   ·   consulter next_steps.md à la racine

TÂCHE = corriger une dette de cohérence dans le README (docs-only, classe « README sync ») :
- PROBLÈME : dans README.md, section « ## Available skills (37 folders) », les dossiers
  `skills/prompt_engineer/` et `skills/solutions_architect/` sont groupés sous
  « ### Management, Consulting & Content (10) » et « ### HR & Talent (2) »,
  alors que leurs AGENTS (AGENT-PROMPT-ENGINEER, AGENT-SOLUTIONS-ARCHITECT) sont
  sous « ### Development & Engineering (16) » dans la section « ## Available agents ».
  → skill ≠ domaine de l'agent (mapping 1:1 attendu, cf. CLAUDE.md « one folder per agent »).
- VÉRIFIÉ (2026-07-08) : incohérence CONFINÉE au README. Le sidecar.json n'a pas de champ
  catégorie pour ces skills ; START.md ne groupe pas les skills (seulement les agents). Rien à corriger ailleurs.

CORRECTION (README.md, section « Available skills » uniquement) :
1. Déplacer la ligne `| skills/prompt_engineer/ | … |` de « Management, Consulting & Content »
   vers « Development & Engineering ».
2. Déplacer la ligne `| skills/solutions_architect/ | … |` de « HR & Talent »
   vers « Development & Engineering ».
3. Corriger les 3 sous-compteurs de titres : Development & Engineering 14 → 16 ;
   Management, Consulting & Content 10 → 9 ; HR & Talent 2 → 1. (Total inchangé = 37.)
   Résultat cohérent : par domaine, skills = agents, sauf Agile (11 agents → 10 dossiers,
   QA Agile + QA V-model partagent `qa_testing/`).

CONTRÔLES avant commit :
- Total skills toujours 37 ; total agents inchangé (38) ; compteurs README/START.md/AGENT-ORCHESTRATEUR cohérents.
- Parité des fences vérifiée par fichier (nombre de lignes de fence pair) ; pas de sed -i bricolé.

CLÔTURE : classe « README sync » → main direct, PAS de tag, PAS de Release (docs-only).
Commit local `docs(readme): align skill grouping with agent domains`. ⛔ push SUR ORDRE de Guy uniquement.

APRÈS ce fix : reprendre la vitrine (/Users/guyhui/CLAUDE/guyhui-showcase) pour réaligner
l'inventaire skills de docs/catalog.md sur 16/10/1/9/1 (mirroir fidèle du README corrigé),
revérif live, puis release showcase v0.4.0. Détail : guyhui-showcase/next_steps.md.
```

---

## Contexte

Dette repérée le 2026-07-08 pendant la rédaction de la page Catalog de la vitrine
`guyhui-showcase` (qui mirrore ce README). La vitrine reste volontairement en
**mirroir fidèle** du README actuel (skills groupés 14/10/1/10/2) tant que cette
dette n'est pas corrigée ici. Décision de Guy : corriger la source dans une
session dédiée claude-agents, puis revenir clore le showcase.

## Journal des jalons

- **2026-07-08** — Dette de cohérence README documentée (groupement skills
  `prompt_engineer/` + `solutions_architect/` ≠ domaine de leurs agents). Confinée
  au README (absente du sidecar et de START.md). Correction à appliquer : voir le
  prompt de reprise ci-dessus. Non encore corrigée.
