# Audit qualité — DEV-TYPESCRIPT-IA + DEV-DRUPAL-PHP (grille v2.8 §3.4 Dev/CMS)
> Date : 2026-06-01 · Modèle : claude-opus-4-8 · Auditeur : AGENT-AUDIT-METHODO-IA (skill `audit-qualite-catalogue.md`)
> Périmètre : DEV-TYPESCRIPT-IA (9) + DEV-DRUPAL-PHP (`dev_drupal/`, 10) = **19 skills** — complète le groupe Dev/CMS (CMS/PIM/DAM traités en v3.16.0)

## 1. Synthèse (verdict global)

Profil **« riche non sourcé »** confirmé (comme CMS/PIM/DAM) : code prêt-à-copier abondant (D2 fort), couche D3 quasi absente, versioning partiel. **+ 1 finding D1 spécifique** sur DEV-TYPESCRIPT.

- **DEV-TYPESCRIPT-IA (9)** : **D1 ⚠ — modèle `claude-opus-4-5` cité ×10 (obsolète)**, frameworks sans version (Next.js, Vercel AI SDK, React, Zod). D2 ✓ (code solide). D3 ✗ (0 Sources / 0 Anti-patterns / 0 Voir aussi sur 9/9). → **P1** (V1+ mécanique **+ correctif modèle**).
- **DEV-DRUPAL-PHP (10)** : D1 ✓ (Drupal 10, PHP 8.2, Twig 3, Commerce 2.x — tous actuels, 0 API dépréciée). D2 ✓ (code + YAML + Twig + tests). D3 ⚠/✗ (Sources : 1/10 ; Anti-patterns : 2/10 ; Voir aussi : 0/10). → **P1 mécanique** ; `drupal-theming-twig` proche ✓ (anti-patterns XSS + sources déjà présents).

**0 erreur factuelle de code** détectée. La seule non-conformité substantielle = l'ID de modèle obsolète (correctif mécanique transverse).

## 2. Méthode
Groupe Dev/CMS §3.4 · extraction Explore ×2 (briefs standard §3.1) · cotation par preuve · WebSearch des versions à publier (déjà : Drupal 11, Next.js 16, MCP) avant production.

## 3. Tableau de cotation

### DEV-TYPESCRIPT-IA (§3.4)
| Skill | D1 | D2 | D3 | Verdict |
|---|:---:|:---:|:---:|:---:|
| chat-ui-streaming | ⚠ | ✓ | ✗ | P1 |
| edge-functions-ia | ⚠ | ✓ | ✗ | P1 (modèle obsolète) |
| integration-apis-llm-ts | ⚠ | ✓ | ✗ | P1 (modèle ×2 ; « 90 % » caching à sourcer) |
| mcp-server-dev | ⚠ | ✓ | ✗ | P1 (MCP sans version) |
| nextjs-ia | ⚠ | ✓ | ✗ | P1 (modèle ×2) |
| react-patterns-ia | ⚠ | ✓ | ✗ | P1 |
| tool-use-frontend | ⚠ | ✓ | ✗ | P1 (modèle ×1) |
| typescript-avance-ia | ⚠ | ✓ | ✗ | P1 (modèle ×2) |
| vercel-ai-sdk | ⚠ | ✓ | ✗ | P1 (modèle ×4) |

### DEV-DRUPAL-PHP (§3.4)
| Skill | D1 | D2 | D3 | Verdict |
|---|:---:|:---:|:---:|:---:|
| drupal-api-rest | ✓ | ✓ | ✗ | P1 |
| drupal-commerce-catalog | ✓ | ✓ | ✗ | P1 |
| drupal-commerce-checkout | ✓ | ✓ | ✗ | P1 |
| drupal-config-yaml | ⚠ | ✓ | ⚠ | P1 (anti-patterns déjà ; version Drupal absente) |
| drupal-integration-api-tierce | ✓ | ✓ | ✗ | P1 |
| drupal-module-custom | ✓ | ✓ | ✗ | P1 |
| drupal-performance | ✓ | ✓ | ✗ | P1 |
| drupal-tests-phpunit-behat | ⚠ | ✓ | ✗ | P1 (versions PHPUnit/Behat absentes) |
| drupal-theming-twig | ✓ | ✓ | ⚠ | P3 (anti-patterns + sources déjà → proche ✓) |
| drupal-user-roles | ⚠ | ✓ | ✗ | P1 (version Drupal absente) |

## 4. Finding P1 prioritaire (D1 — correctif factuel transverse)

**Modèle obsolète `claude-opus-4-5` dans DEV-TYPESCRIPT-IA (×10, 7 skills).**
- **Constat** : le code d'exemple instancie `anthropic("claude-opus-4-5")` / `model: "claude-opus-4-5"`. L'Opus courant (juin 2026) est **`claude-opus-4-8`** ; le Sonnet courant est **`claude-sonnet-4-6`**.
- **Référence** : règle « default to the latest and most capable Claude models » + `feedback_verification_factuelle`. Un catalogue « PO/MOA AI augmenté » montrant un ID de modèle périmé se décrédibilise.
- **Recommandation** : sweep mécanique du model ID (décision de cadrage §10 : Opus 4.8 vs Sonnet 4.6 selon le cas d'usage).

## 5. Findings P1 transverses (V1+ mécanique)
Mêmes manques que CMS/PIM/DAM : `## Sources` (~17/19 absentes), `## Anti-patterns` (~15/19), `## Voir aussi` (19/19), versioning des frameworks (Next.js, Vercel AI SDK, MCP, Zod, PHPUnit/Behat, version Drupal manquante sur 4 skills).

## 6. Findings P3
- `drupal-theming-twig` : déjà anti-patterns + sources → simple normalisation au format `## Sources` / `## Voir aussi`.
- « 90 % d'économie » (prompt caching, `integration-apis-llm-ts`) : à sourcer (doc Anthropic prompt caching) ou nuancer.

## 7. Constats transversaux
- Homogénéité forte → V1+ de masse mécaniquement efficace.
- DEV-TS : surface d'intégration LLM (Anthropic SDK, Vercel AI SDK, MCP) = **vitrine du positionnement IA** → soigner versions + sources officielles (docs.anthropic.com, sdk.vercel.ai, modelcontextprotocol.io).
- DEV-DRUPAL : exemples B2B télécom/industrie anonymisés (câbles FTTH) — conformes `feedback_catalogue_generaliste`.

## 8. Métriques
- Distribution (19) : ✓ = 0 · P3 = 1 (`drupal-theming-twig`) · **P1 = 18** · P0 = 0.
- Certif déclarée : 100 %. `## Sources` : ~5 %. `## Anti-patterns` : ~16 %. `## Voir aussi` : 0 %.
- Code factuellement correct : oui (0 API dépréciée Drupal, 0 bug de code) ; **1 ID de modèle obsolète** (DEV-TS).

## 9. Plan d'action recommandé
| Priorité | Action | Vague | Budget |
|---|---|:---:|---|
| **P1 (D1)** | Sweep `claude-opus-4-5` → modèle courant (DEV-TS, 7 skills) | V1 | ~15 min |
| **P1** | V1+ mécanique 19 skills (Sources + Anti-patterns + Voir aussi + versioning), WebSearch préalable (MCP, Vercel AI SDK, PHPUnit, Drupal/PHP) | V1+ | 2 sous-lots (TS / Drupal), 1 commit/sous-lot |
| P3 | Sourcer « 90 % » caching + normaliser `drupal-theming-twig` | V1+ | inclus |

**Séquençage** : DEV-TYPESCRIPT (avec sweep modèle) → DEV-DRUPAL. 1 release minor (v3.17.0) groupée.

## 10. Validation Guy
- [ ] Diagnostic « riche non sourcé » + V1+ de masse validé (même pattern que v3.16.0) ?
- [ ] **Sweep modèle** : `claude-opus-4-5` → **`claude-opus-4-8`** (même tier) ou **`claude-sonnet-4-6`** (défaut coût/latence pour front/streaming/tool-use) ?
- [ ] V2 nécessaire sur un skill ? (a priori non — code déjà solide ; tout en V1+)
