# Skill — Few-Shot et In-Context Learning
> Certifications : DeepLearning.AI Prompt Engineering for Developers (Andrew Ng), Anthropic Claude Code in Action (2026)

## Objectif
Concevoir des exemples few-shot efficaces pour guider le LLM vers le format et la qualité d'output exact attendus — sélection des exemples, diversité, ordre, et dosage optimal.

## Principes du few-shot learning

```
RÈGLES D'OR
────────────────────────────────────────────────────────────
1. Les exemples doivent COUVRIR la diversité des cas attendus
2. L'ordre des exemples influence la réponse (mettre les plus proches en dernier)
3. 2-5 exemples suffisent généralement (au-delà → rendements décroissants)
4. Format des exemples IDENTIQUE au format de sortie attendu
5. Les exemples négatifs (ce qu'il ne faut PAS faire) sont aussi utiles
```

## Template few-shot standard

```
Voici des exemples du format de sortie attendu.

---EXEMPLE 1---
Input  : [Exemple d'entrée 1 — cas simple]
Output : [Sortie attendue exacte — cas simple]

---EXEMPLE 2---
Input  : [Exemple d'entrée 2 — cas modéré]
Output : [Sortie attendue exacte — cas modéré]

---EXEMPLE 3---
Input  : [Exemple d'entrée 3 — cas proche du cas réel]
Output : [Sortie attendue exacte — cas proche]

---À TON TOUR---
Input  : [CAS RÉEL À TRAITER]
Output : 
```

## Exemples appliqués au catalogue d'agents

### Few-shot pour User Stories (PO-SCRUM)
```
---EXEMPLE 1---
Besoin : "Filtrer les produits d'un catalogue e-commerce"
US     : En tant que client, je veux filtrer les produits par catégorie et prix afin de trouver rapidement ce qui correspond à mon budget. | AC: Given catalogue affiché, When je sélectionne filtre, Then liste mise à jour < 1s | 3pts | Must Have

---EXEMPLE 2---
Besoin : "Exporter les données de vente"
US     : En tant qu'admin commercial, je veux exporter le rapport des ventes en CSV afin d'analyser les performances dans Excel. | AC: Given rapport affiché, When je clique "Exporter CSV", Then téléchargement démarre < 3s | 2pts | Should Have

---À TON TOUR---
Besoin : "[BESOIN CLIENT]"
US     :
```

### Few-shot pour WSJF (PO-SAFE)
```
---EXEMPLE 1---
Feature : "Module scoring prospects"
BV=8, TC=5, RR=3, Job Size=5 → CoD=16, WSJF=3.2 → Priorité MOYENNE

---EXEMPLE 2---
Feature : "Export CSV reporting"
BV=3, TC=2, RR=1, Job Size=1 → CoD=6, WSJF=6.0 → Priorité HAUTE (petite taille)

---À TON TOUR---
Feature : "[FEATURE]"
BV=[?], TC=[?], RR=[?], Job Size=[?] → CoD=[?], WSJF=[?] →
(cotation relative, plus petit = 1 par colonne, Fibonacci — cf. skills/safe/wsjf.md)
```

## Sélection des exemples — Stratégie

```
CRITÈRES DE SÉLECTION
────────────────────────────────────────────────────────────
✓ Représentatifs : couvrent les cas limites et les cas standards
✓ Corrects : exemples validés par des experts métier
✓ Diversifiés : pas tous du même type
✓ Calibrés en difficulté : du plus simple au plus complexe
✓ Récents : si le domaine évolue vite (IA Act, SAFe versions)

PIÈGES À ÉVITER
────────────────────────────────────────────────────────────
❌ Exemples contradictoires entre eux
❌ Format d'exemple ≠ format de sortie attendu
❌ Trop d'exemples (> 5 en général)
❌ Tous les exemples du même secteur (biais)
```

## Livrables
- Bibliothèque d'exemples few-shot par domaine (US, WSJF, analyses, rapports)
- Template few-shot adapté au cas d'usage
- Guide de sélection des exemples

## Format de sortie
Précise : type de tâche, format de sortie attendu, 2-3 exemples représentatifs du domaine.
