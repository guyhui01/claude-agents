# Skill — Feature Engineering & Préparation des Données
> Certifications : IBM Data Science · Azure DP-100 · Databricks ML Associate

## Objectif
Transformer les données brutes en features pertinentes pour maximiser la performance des modèles ML.

## Pipeline de préparation des données

### 1. Nettoyage
```python
from sklearn.impute import SimpleImputer, KNNImputer

# Imputation numérique
imputer = SimpleImputer(strategy='median')
X_num = imputer.fit_transform(df[num_cols])

# Imputation catégorielle
imputer_cat = SimpleImputer(strategy='most_frequent')
X_cat = imputer_cat.fit_transform(df[cat_cols])
```

### 2. Encodage des variables catégorielles
```python
from sklearn.preprocessing import OrdinalEncoder, OneHotEncoder

# Ordinal (catégories avec ordre)
enc = OrdinalEncoder(categories=[['faible','moyen','élevé']])

# One-Hot (catégories sans ordre, faible cardinalité)
ohe = OneHotEncoder(drop='first', sparse=False)

# Target Encoding (haute cardinalité)
from category_encoders import TargetEncoder
te = TargetEncoder()
```

### 3. Normalisation / Standardisation
```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler

# StandardScaler : données gaussiennes (mean=0, std=1)
# MinMaxScaler : données bornées [0,1]
# RobustScaler : données avec outliers (résistant aux extrêmes)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```

### 4. Feature Engineering avancé
```python
# Combinaisons de features
df['ratio_A_B'] = df['A'] / (df['B'] + 1e-6)
df['interaction'] = df['A'] * df['B']

# Features temporelles
df['hour'] = df['timestamp'].dt.hour
df['day_of_week'] = df['timestamp'].dt.dayofweek
df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)

# Transformation log (distributions asymétriques)
df['log_amount'] = np.log1p(df['amount'])
```

### 5. Sélection de features
```python
from sklearn.feature_selection import SelectKBest, f_classif, RFE
from sklearn.ensemble import RandomForestClassifier

# Importance par Random Forest
rf = RandomForestClassifier()
rf.fit(X, y)
importances = pd.Series(rf.feature_importances_, index=X.columns)
importances.sort_values(ascending=False).head(20).plot(kind='bar')

# Recursive Feature Elimination
rfe = RFE(estimator=rf, n_features_to_select=20)
X_selected = rfe.fit_transform(X, y)
```

## Pipeline sklearn complet
```python
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), num_cols),
    ('cat', OneHotEncoder(drop='first'), cat_cols)
])

pipeline = Pipeline([
    ('prep', preprocessor),
    ('model', RandomForestClassifier())
])
```

## Livrables
- Pipeline de preprocessing réutilisable
- Rapport d'importance des features
- Dataset transformé prêt pour la modélisation
- Documentation des choix de transformation

## Format de sortie
Précise : type de données (tabular, texte, image, time series) · variable cible · algorithme prévu · contraintes (temps de calcul, interprétabilité)
