# WF-005 — Veille Stratégique & Growth

> Signal marché / cadence hebdo → synthèse qualifiée → contenu thought-leadership → publication  
> Certifications mobilisées : SIC (SCIP) · HubSpot Content Marketing · Google Analytics · PMI-ACP

---

## Carte d'identité

```yaml
id: "WF-005"
nom: "Veille Stratégique & Growth"
domaine: "Management & Conseil"
declencheur: "Cadence hebdomadaire / mensuelle ou signal marché détecté"
resultat_final: "Synthèse veille qualifiée + contenu thought-leadership prêt à publier"
duree_estimee: "30-60 min"
modele_recommande: "claude-sonnet-4-6"
modele_raison: "Workflow léger : 3 agents, tâches de collecte, qualification et rédaction éditoriale. Sonnet 4.6 est suffisant et optimal — rapidité et coût maîtrisé pour une cadence hebdomadaire."
modele_alternatif: "claude-opus-4-8"  # si synthèse mensuelle stratégique approfondie avec analyse tendances PESTEL
agents_core:
  - VEILLE-STRATEGIQUE   # collecte, qualification, synthèse intelligence
  - GROWTH-IA            # stratégie de contenu, SEO, acquisition
  - REDACTEUR-IA         # rédaction et adaptation formats de publication
agents_optionnels:
  - JURIDIQUE-IA         # si vérification contractuelle ou conformité requise
  - FINANCIAL-ANALYST    # si scoring d'opportunités de missions
  - CONSULTANT-IA        # si analyse approfondie d'un signal stratégique
statut: "disponible"
version: "1.1"
```

---

## Agents mobilisés

| Étape | Agent | Rôle dans le workflow | Output |
|---|---|---|---|
| 1 | VEILLE-STRATEGIQUE | Collecte, filtrage, qualification des signaux | Radar veille qualifié |
| 2 | GROWTH-IA | Stratégie de diffusion, calendrier éditorial | Plan contenu + SEO |
| 3 | REDACTEUR-IA | Rédaction synthèse + posts LinkedIn | Contenus prêts à publier |
| opt | JURIDIQUE-IA | Vérification clause contractuelle ou conformité | Note juridique |
| opt | FINANCIAL-ANALYST | Scoring opportunités de missions identifiées | Tableau scoring missions |

---

## Paramètres contextuels

```
CONTEXTE VEILLE (à renseigner avant le démarrage)
──────────────────────────────────────────────────────
Format cible       : [Flash hebdo / Synthèse mensuelle / Post LinkedIn / Note stratégique]
Périmètre veille   : [IA/LLM / Conseil IA / Marché emploi / Réglementaire / Tech stack]
Audience           : [LinkedIn public / Newsletter clients / Réseau perso / Usage interne]
Ton                : [Expert technique / Vulgarisation / Thought leader / Neutre]
Horizon            : [3 mois / 12 mois / 3 ans]
Sources à prioriser: [ArXiv / GitHub / LinkedIn / RFP / Presse spécialisée]
Opportunités focus : [Missions CAC40 / Formations / Partenariats / Positionnement]
```

---

## Diagramme de flux BPMN

```
(DÉBUT — Cadence hebdomadaire / signal détecté)
        │
        ▼
[STEP-01 — VEILLE-STRATEGIQUE]
  Collecte multi-sources,
  filtrage 3 critères SCIP,
  qualification signaux faibles/forts
        │
        ▼
<GATEWAY — Signal fort identifié avec opportunité mission ?>
  ├── OUI ──▶ [STEP-01B — FINANCIAL-ANALYST] (optionnel)
  │            Scoring opportunité, ROI mission estimé
  └── NON ──▶ (bypass)
        │
        ▼
[STEP-02 — GROWTH-IA]
  Stratégie de diffusion,
  sélection canaux (LinkedIn / newsletter / blog),
  plan de contenu semaine/mois
        │
        ▼
[STEP-03 — REDACTEUR-IA]
  Rédaction :
  - Synthèse veille (format cible)
  - Post(s) LinkedIn prêt(s) à publier
  - Note interne si applicable
        │
        ▼
<GATEWAY — Vérification contractuelle ou conformité requise ?>
  ├── OUI ──▶ [STEP-04 — JURIDIQUE-IA]
  │            Vérification clause, note conformité
  └── NON ──▶ (bypass)
        │
        ▼
(FIN — Contenu validé, prêt à publication)
```

---

## Étapes détaillées

### STEP-01 — VEILLE-STRATEGIQUE

```yaml
etape:
  id: "STEP-01"
  agent: "AGENT-VEILLE-STRATEGIQUE"
  role: "Collecte et qualification des signaux intelligence"
  input:
    - "Périmètre de veille : [domaines à surveiller]"
    - "Sources disponibles cette semaine"
    - "Contexte : signaux récents déjà identifiés"
    - "Horizon de focus : [court / moyen / long terme]"
  output_attendu:
    - "Top 5 faits marquants classés par impact (High / Medium / Low)"
    - "Radar signaux faibles : opportunités en formation"
    - "1-2 outils ou technologies à surveiller / tester"
    - "Analyse tendances PESTEL si synthèse mensuelle"
    - "Opportunités de missions identifiées avec qualification"
  condition_passage: "Signaux qualifiés et hiérarchisés avant rédaction"
  duree_estimee: "15-20 min"
  execution: "séquentielle — ouvre le workflow"
```

### STEP-02 — GROWTH-IA

```yaml
etape:
  id: "STEP-02"
  agent: "AGENT-GROWTH-IA"
  role: "Stratégie de contenu et plan de diffusion"
  input:
    - "Signaux qualifiés et faits marquants (STEP-01)"
    - "Audience cible et canaux disponibles"
    - "Objectifs growth : notoriété / engagement / leads missions"
    - "Calendrier éditorial existant"
  output_attendu:
    - "Sélection des sujets à traiter cette semaine (1-3 max)"
    - "Format recommandé par sujet (post LinkedIn / article / newsletter)"
    - "Angle éditorial et accroche pour chaque contenu"
    - "Hashtags et mentions à utiliser (SEO LinkedIn)"
    - "Meilleur timing de publication (jour / heure)"
  duree_estimee: "10 min"
  execution: "séquentielle après STEP-01"
```

### STEP-03 — REDACTEUR-IA

```yaml
etape:
  id: "STEP-03"
  agent: "AGENT-REDACTEUR-IA"
  role: "Rédaction des contenus de veille"
  input:
    - "Signaux qualifiés (STEP-01)"
    - "Stratégie de contenu et angles éditoriaux (STEP-02)"
    - "Format cible : [flash hebdo / mensuel / LinkedIn / note interne]"
    - "Ton : [expert / vulgarisation / thought leader]"
  output_attendu:
    - "Synthèse veille au format demandé (Markdown)"
    - "1-3 posts LinkedIn prêts à copier-coller"
    - "Note interne si usage CODIR / newsletter"
    - "Citation de la semaine pour engagement"
  duree_estimee: "15 min"
  execution: "séquentielle après STEP-02"
```

### STEP-04 — JURIDIQUE-IA (optionnel)

```yaml
etape:
  id: "STEP-04"
  agent: "AGENT-JURIDIQUE-IA"
  condition_activation: "Vérification contractuelle ou contenu avec implications légales"
  role: "Vérification conformité et clauses contractuelles"
  input:
    - "Contenu rédigé (STEP-03)"
    - "Document contractuel à vérifier (si applicable)"
    - "Question de conformité spécifique"
  output_attendu:
    - "Note de vérification (vert / orange / rouge)"
    - "Points d'attention RGPD / AI Act si applicable"
    - "Modifications recommandées sur le contenu"
  duree_estimee: "10 min"
  execution: "séquentielle — optionnelle avant publication"
```

---

## Templates de contenus — Rappels formats

### Flash hebdomadaire (20 min de rédaction)

```markdown
# VEILLE IA — Semaine [N] — [DATE]
*Par Guy HUIBONHOA | 5 min de lecture*

## Le fait marquant
**[TITRE ACCROCHEUR]**
[3-4 lignes. Source : [LIEN]]
→ Ce que ça change : [implication concrète]

## 3 news à retenir
1. **[NEWS 1]** — [Source] — Impact : High/Medium/Low
2. **[NEWS 2]** — [Source] — Impact : ...
3. **[NEWS 3]** — [Source] — Impact : ...

## 1 outil à tester
**[NOM]** — [Description 1 ligne]
Cas d'usage : [Comment l'utiliser concrètement]

## Citation de la semaine
*"[CITATION]"* — [Auteur]
```

### Post LinkedIn (accroche + analyse)

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

---

## Livrables finaux

```
CHECKLIST WF-005
──────────────────────────────────────────────────────
□ Top 5 faits marquants qualifiés (High/Medium/Low)
□ Radar signaux faibles (opportunités en formation)
□ Synthèse veille au format demandé (hebdo ou mensuel)
□ 1-3 posts LinkedIn prêts à publier
□ Plan de publication (canaux + timing)
□ [optionnel] Note juridique / conformité
□ [optionnel] Scoring opportunités de missions
```

---

## Cadence recommandée

| Fréquence | Format | Agent principal | Temps |
|---|---|---|---|
| Lundi matin | Flash hebdo + 1 post LinkedIn | VEILLE-STRATEGIQUE + REDACTEUR-IA | 30 min |
| 1er du mois | Synthèse mensuelle complète | Workflow complet WF-005 | 60 min |
| Sur signal fort | Note stratégique rapide | VEILLE-STRATEGIQUE + CONSULTANT-IA | 20 min |
| Trimestriel | Analyse tendances approfondie | VEILLE-STRATEGIQUE + CDO-DIRECTEUR-IA | 90 min |

---

## Commande de démarrage rapide

```
Lis le fichier AGENT-ORCHESTRATEUR-WORKFLOW.md et adopte le rôle d'orchestrateur.
Confirme que tu es prêt, puis charge le workflow WF-005 depuis workflows/WF-005-veille-growth.md.

Contexte veille :
- Format cible : [Flash hebdo / Synthèse mensuelle / Post LinkedIn]
- Périmètre : [IA/LLM / Conseil IA / Marché / Réglementaire]
- Audience : [LinkedIn / Newsletter / Interne]

Lance STEP-01 avec AGENT-VEILLE-STRATEGIQUE.
```
