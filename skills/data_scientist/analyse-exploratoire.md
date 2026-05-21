# Skill — Analyse Exploratoire des Données (EDA)
> Certifications : IBM Data Science · Google Advanced Data Analytics · Kaggle

## Objectif
Comprendre, nettoyer et visualiser un dataset pour en extraire des insights avant toute modélisation.

## Checklist EDA standard

### 1. Vue d'ensemble du dataset
```python
import pandas as pd
import numpy as np

df.shape          # (lignes, colonnes)
df.dtypes         # types de données
df.info()         # aperçu complet
df.describe()     # statistiques descriptives
df.head(10)       # premiers enregistrements
df.isnull().sum() # valeurs manquantes
df.duplicated().sum() # doublons
```

### 2. Analyse des valeurs manquantes
```python
# Taux de complétude par colonne
missing_rate = df.isnull().mean().sort_values(ascending=False)

# Seuils de décision :
# < 5%  → imputation (médiane, moyenne, mode)
# 5-20% → imputation avancée (KNN, régression)
# > 20% → évaluer suppression de la colonne
```

### 3. Distribution des variables
```python
import matplotlib.pyplot as plt
import seaborn as sns

# Variables numériques
df.hist(figsize=(15,10))

# Variables catégorielles
df['col'].value_counts().plot(kind='bar')

# Détection outliers (IQR)
Q1, Q3 = df['col'].quantile([0.25, 0.75])
IQR = Q3 - Q1
outliers = df[(df['col'] < Q1-1.5*IQR) | (df['col'] > Q3+1.5*IQR)]
```

### 4. Corrélations
```python
# Matrice de corrélation
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')

# Scatter plot paires de variables
sns.pairplot(df, hue='target')
```

## Questions à répondre à l'issue de l'EDA
- Quelle est la qualité globale des données (score /10) ?
- Quelles features semblent les plus prédictives de la cible ?
- Y a-t-il un déséquilibre de classes (classification) ?
- Des transformations sont-elles nécessaires (log, normalisation, encodage) ?
- Des anomalies ou erreurs de données ont-elles été détectées ?

## Livrables
- Notebook EDA complet (Jupyter)
- Rapport de qualité données (1 page)
- Liste des transformations recommandées
- Visualisations clés (5-10 graphiques commentés)

## Format de sortie
Précise : dataset (nom, taille, source) · variable cible · type de problème (classification, régression, clustering) · contraintes métier
