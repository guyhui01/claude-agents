# Skill — BI Augmentée par l'IA (Copilot, Q&A, Smart Narratives)
> Certifications : PL-300 Microsoft · DP-600 Microsoft Fabric · Claude Code 101 (Anthropic 2026) · Claude Code in Action (Anthropic 2026)

## Objectif
Intégrer l'IA générative dans les workflows BI : Copilot Power BI, Q&A en langage naturel, génération automatique de narratives, analyse assistée par Claude — pour accélérer la production d'insights et démocratiser l'accès à la donnée.

## Panorama des capacités IA dans la BI

```
OUTIL                     CAPACITÉ                              MATURITÉ (2026)
──────────────────────── ─────────────────────────────────────  ─────────────────────────
Power BI Copilot          Génère des rapports depuis description  GA (Premium P1+ / Fabric)
(Microsoft Fabric)        Résume les données en langage naturel   Très utile pour prototypage
                          Crée des mesures DAX depuis prompts

Power BI Q&A              Questions en langage naturel           GA depuis 2019
                          "Quelle région a le plus de CA ?"      Limité aux datasets configurés

Smart Narratives          Génère du texte décrivant les données  GA — limité, peu contextuel
(Power BI)                automatiquement sur les visuels

Tableau Pulse             IA qui explique les tendances           GA (Tableau Cloud 2024)
                          et envoie des digests personnalisés

Looker Conversational     Questions en langage naturel           Beta (2026)
Analytics                 dans l'interface Looker

Claude + BI               Analyse des données exportées          Très flexible, illimité
(custom)                  Génération de DAX, LookML, SQL
                          Interprétation des résultats
```

## Power BI Copilot — Commandes efficaces

```
DANS POWER BI DESKTOP / SERVICE (bouton Copilot) :

"Crée une page de rapport avec l'évolution mensuelle du CA net
 et une comparaison par région pour les 12 derniers mois"

"Génère une mesure DAX pour le CA Year-to-Date avec comparaison N-1"

"Résume en 3 phrases les principales tendances de ce rapport"

"Quels sont les 5 clients qui ont le plus augmenté leur CA vs l'année dernière ?"

"Crée un visuel montrant la corrélation entre le délai de livraison et le NPS"
```

## Q&A Power BI — Configuration optimale

```
SYNONYMES À CONFIGURER DANS LE DATASET :
  "CA", "chiffre d'affaires", "revenus", "ventes" → [Net Revenue]
  "clients", "acheteurs", "customers"              → dim_customer
  "mois dernier", "M-1", "mois précédent"          → période relative

QUESTIONS TYPES QUE CELA DÉBLOQUE :
  "Quel est le CA du mois dernier par région ?"
  "Top 10 produits par ventes cette année"
  "Combien de nouveaux clients en juin 2026 ?"
  "Évolution du panier moyen par trimestre"

CONFIGURATION :
  Dataset → Schéma → Synonymes → Ajouter par colonne et par table
  Dataset → Questions proposées → Ajouter les questions fréquentes
```

## Claude + BI — Prompts pour analyste

```python
# Utilisation de Claude pour analyser un export Power BI / CSV
import anthropic

ANALYSIS_PROMPT = """Tu es un Business Intelligence Analyst expert.
Analyse le rapport de données suivant et fournis :
1. Les 3 insights les plus importants
2. Les anomalies ou points d'attention
3. 2 recommandations actionnables pour la direction
4. Un titre percutant pour le CODIR (affirmation, pas description)

Contexte : {context}

Données (CSV) :
{data}
"""

client = anthropic.Anthropic()

def analyze_bi_data(csv_data: str, context: str) -> str:
    message = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=2048,
        system="Tu réponds toujours en français, de façon concise et orientée décision.",
        messages=[{
            "role": "user",
            "content": ANALYSIS_PROMPT.format(context=context, data=csv_data)
        }]
    )
    return message.content[0].text

# Générer du DAX depuis une description métier
def generate_dax(metric_description: str, model_context: str) -> str:
    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": f"""Génère une mesure DAX Power BI pour :
{metric_description}

Contexte du modèle de données :
{model_context}

Fournis uniquement le code DAX avec commentaires."""
        }]
    )
    return message.content[0].text
```

## Tableau Pulse — Configuration des insights

```
DANS TABLEAU CLOUD / SERVER :
  1. Créer une métrique Pulse depuis un classeur existant
  2. Définir :
     □ Métrique principale : [Net Revenue]
     □ Dimension de comparaison : [Region]
     □ Période : Hebdomadaire
     □ Comparaison : vs semaine précédente + vs N-1

RÉSULTAT :
  Tableau Pulse génère automatiquement :
  → "Le CA a augmenté de 12% cette semaine. La région EMEA
     a enregistré la plus forte croissance (+18%), portée par
     3 nouveaux clients en Allemagne."
  → Digest email quotidien/hebdomadaire personnalisé par utilisateur
```

## Bonnes pratiques IA en BI

```
FAIRE ✅                                     NE PAS FAIRE ❌
────────────────────────────────────────    ─────────────────────────────────────────────
Valider chaque chiffre généré par IA        Publier un rapport IA sans validation humaine
Documenter les prompts efficaces            Utiliser l'IA sur des données personnelles (RGPD)
Former les utilisateurs à lire les IA       Remplacer l'analyse critique par l'IA seule
Utiliser l'IA pour le draft, humain pour    Croire qu'un narratif IA = insight validé
  la validation finale
Citer la source dans les narratives IA
```

## Livrables
- Configuration Power BI Copilot + Q&A (synonymes, questions)
- Scripts Python d'analyse BI assistée par Claude
- Guide utilisateurs BI IA (prompts efficaces, bonnes pratiques)
- Tableau de bord usage Copilot (adoption, questions fréquentes)
- Charte d'usage IA dans la BI (RGPD, validation, citation)

## Format de sortie
Précise : **outil BI** (Power BI Fabric, Tableau Cloud, Looker…), **capacité IA cible** (Copilot, Q&A, Pulse, Claude custom…), **cas d'usage** (prototypage, self-service utilisateurs, CODIR automatisé), **contraintes** (RGPD, données sensibles, budget API), **niveau de maturité BI** de l'organisation.
