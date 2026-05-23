# Skill QA Agile — Tests IA (ISTQB® AI Testing)

> **Méthodologie :** Agile

## Spécificités des systèmes IA à tester

| Caractéristique | Impact sur les tests |
|---|---|
| **Non-déterminisme** | Résultats variables → pas de résultat attendu unique |
| **Apprentissage continu** | Le modèle peut dériver → tests de monitoring |
| **Données d'entraînement** | Biais, qualité, représentativité |
| **Boîte noire** | Difficile d'expliquer pourquoi une erreur |
| **Confiance / score** | Seuils d'acceptabilité à définir |

## Types de tests IA (ISTQB AI Testing)

| Type | Objectif |
|---|---|
| **Test de données** | Qualité, biais, exhaustivité des datasets |
| **Test de modèle** | Précision, rappel, F1-score, AUC |
| **Test fonctionnel** | Le système IA répond correctement aux cas métier |
| **Test d'équité (Fairness)** | Pas de discrimination selon groupe |
| **Test de robustesse** | Comportement face à des données inhabituelles |
| **Test d'explicabilité** | La décision IA est compréhensible |
| **Test de dérive (Drift)** | Dégradation du modèle dans le temps |

## Métriques de qualité IA

```
PRÉCISION (Accuracy) : (TP + TN) / Total
PRÉCISION (Precision) : TP / (TP + FP)
RAPPEL (Recall) : TP / (TP + FN)
F1-SCORE : 2 × (Precision × Recall) / (Precision + Recall)
AUC-ROC : Capacité discriminante du modèle

Seuils d'acceptabilité à définir avec le métier :
- Précision cible : > [X]%
- Rappel cible : > [X]% (critique si faux négatifs dangereux)
- Taux d'erreur acceptable : < [X]%
```

## Template cas de test IA

```
ID : TIA-[XXX]
Composant IA : [nom du modèle / service]
Type : ☐ Fonctionnel ☐ Robustesse ☐ Équité ☐ Dérive

ENTRÉE (Input) :
[Description de la donnée fournie au modèle]

RÉSULTAT ATTENDU :
Classe attendue : [label]
Score de confiance minimum : > [X]%
Temps de réponse : < [X ms]

RÉSULTAT OBTENU :
Classe prédite : [...]
Score : [X]%
Temps : [X ms]

STATUT : ☐ Pass  ☐ Fail  ☐ Ambigu (à évaluer avec le métier)
```

## Checklist test d'un LLM / chatbot IA

```
FONCTIONNEL :
☐ Réponses correctes sur les cas nominaux
☐ Gestion des questions hors périmètre
☐ Cohérence des réponses sur questions similaires
☐ Respect des contraintes (langue, ton, longueur)

ROBUSTESSE :
☐ Comportement avec entrées malformées
☐ Résistance aux prompt injections
☐ Gestion des demandes inappropriées

QUALITÉ :
☐ Pas d'hallucinations sur faits vérifiables
☐ Citations sources si applicable
☐ Pas de biais discriminatoires détectés
```
