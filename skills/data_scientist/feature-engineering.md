# Skill — Feature Engineering & Data Preparation
> Certifications: IBM Data Science · Azure DP-100 · Databricks ML Associate

## Objective
Transform raw data into relevant features to maximize ML model performance.

## Data preparation pipeline

### 1. Cleaning
```python
from sklearn.impute import SimpleImputer, KNNImputer

# Numeric imputation
imputer = SimpleImputer(strategy='median')
X_num = imputer.fit_transform(df[num_cols])

# Categorical imputation
imputer_cat = SimpleImputer(strategy='most_frequent')
X_cat = imputer_cat.fit_transform(df[cat_cols])
```

### 2. Categorical variable encoding
```python
from sklearn.preprocessing import OrdinalEncoder, OneHotEncoder

# Ordinal (ordered categories)
enc = OrdinalEncoder(categories=[['low','medium','high']])

# One-Hot (unordered categories, low cardinality)
ohe = OneHotEncoder(drop='first', sparse=False)

# Target Encoding (high cardinality)
from category_encoders import TargetEncoder
te = TargetEncoder()
```

### 3. Normalization / Standardization
```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler

# StandardScaler: Gaussian data (mean=0, std=1)
# MinMaxScaler: bounded data [0,1]
# RobustScaler: data with outliers (resistant to extremes)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```

### 4. Advanced feature engineering
```python
# Feature combinations
df['ratio_A_B'] = df['A'] / (df['B'] + 1e-6)
df['interaction'] = df['A'] * df['B']

# Time features
df['hour'] = df['timestamp'].dt.hour
df['day_of_week'] = df['timestamp'].dt.dayofweek
df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)

# Log transformation (skewed distributions)
df['log_amount'] = np.log1p(df['amount'])
```

### 5. Feature selection
```python
from sklearn.feature_selection import SelectKBest, f_classif, RFE
from sklearn.ensemble import RandomForestClassifier

# Importance via Random Forest
rf = RandomForestClassifier()
rf.fit(X, y)
importances = pd.Series(rf.feature_importances_, index=X.columns)
importances.sort_values(ascending=False).head(20).plot(kind='bar')

# Recursive Feature Elimination
rfe = RFE(estimator=rf, n_features_to_select=20)
X_selected = rfe.fit_transform(X, y)
```

## Complete sklearn pipeline
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

## Deliverables
- Reusable preprocessing pipeline
- Feature importance report
- Transformed dataset ready for modeling
- Documentation of the transformation choices

## Output format
Specify: data type (tabular, text, image, time series) · target variable · planned algorithm · constraints (compute time, interpretability)
