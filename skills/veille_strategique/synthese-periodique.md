# Skill — Production de Synthèses Périodiques de Veille
> Certifications : SIC (SCIP — Strategic Consortium of Intelligence Professionals), HubSpot Content Marketing (HubSpot), Google Analytics Certification (Google)

## Objectif
Produire des synthèses de veille claires, sourcées et actionnables — hebdomadaires ou mensuelles — adaptées à différents formats de diffusion (note interne, LinkedIn, newsletter, présentation CODIR).

## Principe de structuration — Pyramide de Minto
> **B. Minto, *The Pyramid Principle*, 1987.** Commencer par le message-clé (la réponse / le « so what »), puis dérouler les arguments groupés, enfin les détails/sources. Format **SCQA** pour l'accroche : *Situation → Complication → Question → Answer*. Une synthèse de veille = 1 message principal soutenu par 3-5 faits hiérarchisés, chacun sourcé et daté.

## Template — Synthèse hebdomadaire (format court)

```markdown
# VEILLE IA — Semaine [N] — [DATE]
*Par Guy HUI-BON-HOA | 5 min de lecture*

## ⚡ Le fait marquant
**[TITRE ACCROCHEUR]**
[Description en 3-4 lignes. Source : [LIEN]]
→ Ce que ça change pour vous : [implication concrète]

## 📌 3 news à retenir
1. **[NEWS 1]** — [Source] — [Impact : High/Medium/Low]
2. **[NEWS 2]** — [Source] — [Impact]
3. **[NEWS 3]** — [Source] — [Impact]

## 🔧 1 outil à tester
**[NOM OUTIL]** — [Description 1 ligne]
Cas d'usage : [Comment l'utiliser concrètement]
Lien : [URL]

## 💬 La citation de la semaine
*"[CITATION]"* — [Auteur, source]

---
*Vous avez une info à partager ? Répondez à ce message.*
```

## Template — Synthèse mensuelle (format complet)

```markdown
# VEILLE STRATÉGIQUE IA — [MOIS ANNÉE]
Préparée par Guy HUI-BON-HOA | Consultant PO IA

## 📊 CHIFFRES CLÉS DU MOIS
- [Statistique 1 avec source]
- [Statistique 2 avec source]
- [Statistique 3 avec source]

## 🔥 TOP 5 FAITS MARQUANTS
### 1. [TITRE]
[Description 5-8 lignes. Sources multiples.]
**Impact business :** [Opportunité / Risque / Neutre]
**Recommandation :** [Action concrète]

[Répéter pour 2, 3, 4, 5]

## 🚀 TENDANCES EN ACCÉLÉRATION
| Tendance | Horizon | Maturité | Intérêt pour Guy |
|---|---|---|---|
| [T1] | 6 mois | Forte | ⭐⭐⭐ |

## ⚠ RISQUES À SURVEILLER
- [Risque 1 : description + surveillance recommandée]

## 💡 OPPORTUNITÉS DE MISSIONS
- [Opportunité identifiée + qualification (secteur, timing)]

## 📚 RESSOURCES RECOMMANDÉES
- [Livre / Article / Vidéo — description courte]

---
*Sources : [liste des sources utilisées]*
```

## Template — Post LinkedIn veille (format réseau social)

```
🔍 VEILLE IA — [SUJET]

[ACCROCHE choc en 1 ligne]

[2-3 paragraphes courts — faits + analyse]

💡 Ce que ça signifie pour les équipes produit :
→ [Implication 1]
→ [Implication 2]
→ [Implication 3]

Vous avez expérimenté ça ? Partagez en commentaire 👇

#IA #ProductManagement #GenAI #Claude #SAFe #Anthropic
```

## Calendrier éditorial veille

| Format | Fréquence | Canal | Temps rédaction |
|---|---|---|---|
| Flash hebdo | Lundi matin | LinkedIn | 20 min |
| Synthèse mensuelle | 1er du mois | Newsletter / Confluence | 90 min |
| Benchmark outil | Sur actu | LinkedIn + blog | 30 min |
| Analyse tendance | Trimestriel | Note stratégique | 3h |

## Livrables
- Synthèse hebdomadaire (Markdown / LinkedIn)
- Rapport mensuel complet
- Post LinkedIn prêt à publier
- Calendrier éditorial personnalisé

## Format de sortie
Précise : format souhaité (hebdo / mensuel / LinkedIn), périmètre de veille, audience cible, ton (expert / vulgarisation).

## Anti-patterns
- ❌ **Synthèse sans message-clé** : empiler des news sans hiérarchie Minto → le lecteur ne retient rien.
- ❌ **Chiffres « clés » sans source ni date** : la section « chiffres clés » exige source primaire + année (jamais de stat fabriquée).
- ❌ **Pas de recommandation** : chaque synthèse se clôt par l'actionnable (« ce que ça change pour vous »).
- ❌ **Ton uniforme tous canaux** : adapter au support (CODIR ≠ LinkedIn ≠ note interne).

## Voir aussi
- [`veille-ia-llm.md`](veille-ia-llm.md) — matière première (faits modèles)
- [`analyse-tendances.md`](analyse-tendances.md) · [`detection-signaux-faibles.md`](detection-signaux-faibles.md) — contenu à synthétiser
- `AGENT-REDACTEUR-IA.md` — mise en forme éditoriale pour diffusion (frontière : VEILLE produit la matière)
- `AGENT-PROMPT-ENGINEER.md` — gabarits de génération assistée

## Sources
- **Minto** : Barbara Minto, *The Pyramid Principle: Logic in Writing and Thinking* (1987)
- **SCIP** — Strategic Consortium of Intelligence Professionals · scip.org (règle d'or : sourcer date + source primaire + fiabilité)
- Méthode SCQA (Situation-Complication-Question-Answer) pour les accroches
