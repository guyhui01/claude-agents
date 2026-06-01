# Audit qualité — Méta-agents : ORCHESTRATEUR-WORKFLOW + PROMPT-ENGINEER (grille v2.8 §3.5)
> Date : 2026-06-01 · Modèle : claude-opus-4-8 · Auditeur : AGENT-AUDIT-METHODO-IA (skill `audit-qualite-catalogue.md`)
> Périmètre : sous-cluster **méta-agents** du groupe Transverse/Méta — orchestrateur_workflow (15) + prompt_engineer (8) = **23 skills**

## 1. Synthèse (verdict global)

Profil **« riche non sourcé »** (comme les groupes précédents) **+ 2 findings spécifiques** :

- **D2 fort** : nombreux livrables actionnables (orchestrateur : YAML workflows, code TS MCP/SDK ; prompt-eng : templates de prompts, code eval, calculateur de coûts). Quelques sections anti-patterns déjà présentes (prompt-engineering-orchestration, system-prompt-design, few-shot-learning).
- **D3 faible** : `## Sources` = **0/23** ; `## Voir aussi` ≈ 1/23.
- **Finding A — D1 modèle « Opus 4.7 » en PROSE** (échappé au sweep `claude-opus-4-7`) : `workflow-design`, `claude-api-integration`, `workflow-catalog` (×3), `prompt-optimization` (×3), + adjacent `tech_lead/ia-workflows-dev`. → **corriger en Opus 4.8**.
- **Finding B — gap d'attribution académique** (exigé §3.5) : CoT, Few-shot, RAG, ToT, ReAct, Self-Consistency, RAGAS cités **par nom sans papier fondateur**. → ajouter les références datées (vérifiées WebSearch, §4).

⚠️ **Finding hors-scope mais critique (rh_ia)** : `rh_ia/evaluation-profils-techniques` + `transformation-rh-ia` + `redaction-offre-emploi` contiennent un **tableau de benchmarks concurrents très probablement fabriqués** (« GPT-5.5, Gemini 3.1 Pro, Grok 3 », « Opus 4.7 avr. 2026 : 64,3 % SWE-bench Pro · 1504 Elo ») — chiffres/dates invérifiables. **À traiter en priorité lors de l'audit rh_ia** (PAS un simple 4.7→4.8 : il faut retirer/sourcer les stats inventées).

## 2. Méthode
Groupe Transverse/Méta §3.5 (sous-groupe méta-agents) · extraction Explore ×2 · cotation par preuve · WebSearch des papiers académiques avant publication.

## 3. Cotation (synthèse)

### ORCHESTRATEUR-WORKFLOW (15) — §3.5
- **D1** ⚠ (« Opus 4.7 » prose ; MCP `@latest` non pinné ; LangGraph/CrewAI/AutoGen sans version) · **D2** ✓ (YAML + code TS réels) · **D3** ✗ (0 source, peu d'anti-patterns).
- Verdict : **P1 mécanique** (V1+ + fix modèle). `prompt-engineering-orchestration` proche P3 (a déjà des anti-patterns).
- Note : `anthropic-version: 2023-06-01` = **correct** (en-tête d'API courant, pas une date périmée).

### PROMPT-ENGINEER (8) — §3.5
- **D1** ⚠ (techniques sans papier fondateur — manque structurel pour ce groupe) · **D2** ✓ (templates + code) · **D3** ✗ (0 source).
- Verdict : **P1** — ici l'attribution académique n'est pas cosmétique : c'est le cœur de la crédibilité « prompt engineering ». `evals-llm-observability` déjà à `claude-opus-4-8` ✓ (corrigé v3.17.1).

## 4. Référentiels académiques à citer (vérifiés WebSearch — 0 invention)
- **Chain-of-Thought** — Wei et al., *NeurIPS 2022* (arXiv 2201.11903)
- **Self-Consistency** — Wang et al., *ICLR 2023* (arXiv 2203.11171)
- **Tree of Thoughts** — Yao et al., *NeurIPS 2023* (arXiv 2305.10601)
- **ReAct** — Yao et al., *ICLR 2023* (arXiv 2210.03629)
- **Few-shot / GPT-3** — Brown et al., *NeurIPS 2020* (arXiv 2005.14165)
- **RAG** — Lewis et al., *NeurIPS 2020* (arXiv 2005.11401)
- **Constitutional AI** — Bai et al. (Anthropic), arXiv 2212.08073 (déc. 2022)
- **RAGAS** — Es et al., *EACL 2024* (arXiv 2309.15217)
- **MCP** — modelcontextprotocol.io (spec 2025-11-25, SDK v1.x) · **Anthropic Prompt Engineering Guide** — docs.anthropic.com

## 5. Plan d'action recommandé
| Priorité | Action | Vague |
|---|---|:---:|
| **P1 (D1)** | « Opus 4.7 » prose → « Opus 4.8 » : orchestrateur (workflow-design, claude-api-integration, workflow-catalog) + prompt-optimization + tech_lead/ia-workflows-dev. Pin MCP SDK v1.x | V1 |
| **P1** | V1+ 23 skills : `## Sources` (papiers §4 datés) + `## Anti-patterns` + `## Voir aussi` ; attribution inline des techniques (CoT→Wei 2022, etc.) | V1+ |
| **P0 (séparé, rh_ia)** | Retirer/sourcer le tableau de benchmarks concurrents fabriqués (GPT-5.5/Gemini 3.1/Grok 3/Elo/SWE) — lors de l'audit rh_ia | V2 |

Séquençage : fix modèle (rapide) → V1+ orchestrateur (15) → V1+ prompt-eng (8) → 1 release v3.18.0.

## 6. Validation Guy
- [ ] V1+ de masse validé (même pattern) + attribution académique des techniques ?
- [ ] Fix « Opus 4.7 » prose → 4.8 (in-scope) : OK ?
- [ ] **rh_ia benchmarks fabriqués** : prioriser à l'audit rh_ia (ne pas bumper 4.7→4.8 en l'état) — confirmé ?
