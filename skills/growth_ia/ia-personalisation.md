# Skill — IA au Service du Growth & Personnalisation
> Certifications : AWS ML Specialty (2026), Google Cloud Professional ML Engineer, Anthropic Certified AI Professional 2026, Reforge Growth Series

## Objectif
Utiliser l'IA/ML pour personnaliser l'expérience utilisateur à grande échelle — recommandations, scoring de propension (churn/conversion), dynamic pricing et contenu dynamique adapté au profil et au comportement.

## Recommandations Personnalisées

### Moteur de Recommandations — Filtrage Collaboratif

```python
# recommendation_engine.py
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from scipy.sparse import csr_matrix
from implicit import als  # Alternating Least Squares pour implicit feedback

class CollaborativeRecommender:
    """Recommandations item-to-item et user-to-item via ALS."""

    def __init__(self, factors: int = 50, iterations: int = 20, regularization: float = 0.01):
        self.model = als.AlternatingLeastSquares(
            factors=factors,
            iterations=iterations,
            regularization=regularization,
            use_gpu=False,
        )
        self.user_item_matrix = None
        self.item_ids = None
        self.user_ids = None

    def fit(self, interactions_df: pd.DataFrame):
        """
        interactions_df : user_id | item_id | weight (ex: vues, achats, durée)
        """
        # Matrice sparse user × item
        self.user_ids = interactions_df["user_id"].unique()
        self.item_ids = interactions_df["item_id"].unique()

        user_idx = {u: i for i, u in enumerate(self.user_ids)}
        item_idx = {it: i for i, it in enumerate(self.item_ids)}

        rows = interactions_df["user_id"].map(user_idx)
        cols = interactions_df["item_id"].map(item_idx)
        data = interactions_df["weight"].values

        self.user_item_matrix = csr_matrix(
            (data, (rows, cols)),
            shape=(len(self.user_ids), len(self.item_ids))
        )
        # ALS nécessite item × user
        self.model.fit(self.user_item_matrix.T)

    def recommend(self, user_id: str, n: int = 10, filter_already_seen: bool = True) -> list[dict]:
        """Retourne les N meilleures recommandations pour un utilisateur."""
        user_idx_map = {u: i for i, u in enumerate(self.user_ids)}
        item_idx_map = {i: it for i, it in enumerate(self.item_ids)}

        if user_id not in user_idx_map:
            return self.popular_items(n)  # Cold start : popularité

        user_idx = user_idx_map[user_id]
        recommendations = self.model.recommend(
            user_idx, self.user_item_matrix, N=n,
            filter_already_liked=filter_already_seen,
        )
        return [
            {"item_id": item_idx_map[item], "score": float(score)}
            for item, score in recommendations
        ]

    def popular_items(self, n: int = 10) -> list[dict]:
        """Fallback cold-start : items les plus populaires."""
        item_popularity = np.asarray(self.user_item_matrix.sum(axis=0)).flatten()
        top_indices = item_popularity.argsort()[-n:][::-1]
        return [{"item_id": self.item_ids[i], "score": float(item_popularity[i])} for i in top_indices]

    def similar_items(self, item_id: str, n: int = 5) -> list[dict]:
        """Items similaires (item-to-item)."""
        item_idx_map = {it: i for i, it in enumerate(self.item_ids)}
        if item_id not in item_idx_map:
            return []
        idx = item_idx_map[item_id]
        similar = self.model.similar_items(idx, N=n + 1)[1:]  # Exclure lui-même
        rev_idx = {i: it for i, it in enumerate(self.item_ids)}
        return [{"item_id": rev_idx[i], "score": float(s)} for i, s in similar]
```

### API FastAPI de recommandation

```python
# recommendations_api.py
from fastapi import FastAPI, Depends
import redis
import json

app = FastAPI(title="Recommendations API")
cache = redis.Redis(host="redis", port=6379, decode_responses=True)

CACHE_TTL = 300  # 5 minutes

@app.get("/recommendations/{user_id}")
async def get_recommendations(
    user_id: str,
    n: int = 10,
    context: str = "homepage",     # homepage, product_page, email
) -> dict:
    # Cache Redis — éviter les calculs répétés
    cache_key = f"reco:{user_id}:{context}:{n}"
    cached = cache.get(cache_key)
    if cached:
        return {"user_id": user_id, "recommendations": json.loads(cached), "from_cache": True}

    # Récupération des recommandations
    recommendations = recommender.recommend(user_id, n=n)

    # Diversification (re-ranking)
    recommendations = diversify_recommendations(recommendations, max_same_category=3)

    cache.setex(cache_key, CACHE_TTL, json.dumps(recommendations))
    return {"user_id": user_id, "recommendations": recommendations, "from_cache": False}
```

## Scoring ML — Propension au Churn

```python
# churn_scoring.py
import pandas as pd
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.calibration import CalibratedClassifierCV
import shap

class ChurnPredictor:
    """Modèle de scoring propension au churn avec explicabilité SHAP."""

    def __init__(self):
        base_model = GradientBoostingClassifier(
            n_estimators=200, max_depth=5, learning_rate=0.05,
            subsample=0.8, random_state=42
        )
        # Calibration pour avoir des probabilités fiables
        self.model = CalibratedClassifierCV(base_model, method="isotonic", cv=5)
        self.explainer = None
        self.feature_names = None

    def build_features(self, events_df: pd.DataFrame, users_df: pd.DataFrame) -> pd.DataFrame:
        """Construit les features pour le scoring churn."""
        cutoff = events_df["event_date"].max() - pd.Timedelta(days=7)

        engagement = events_df[events_df["event_date"] > cutoff].groupby("user_id").agg(
            sessions_7d=("session_id", "nunique"),
            features_used_7d=("feature_name", "nunique"),
            ai_queries_7d=("event_name", lambda x: (x == "ai_query_submitted").sum()),
        ).reset_index()

        features = users_df.merge(engagement, on="user_id", how="left").fillna(0)
        return features

    def fit(self, X: pd.DataFrame, y: pd.Series):
        self.feature_names = X.columns.tolist()
        self.model.fit(X, y)
        self.explainer = shap.TreeExplainer(self.model.calibrated_classifiers_[0].estimator)

    def predict_with_explanation(self, X: pd.DataFrame) -> pd.DataFrame:
        """Prédit et explique chaque score avec SHAP."""
        probas = self.model.predict_proba(X)[:, 1]
        shap_values = self.explainer.shap_values(X)

        results = X.copy()
        results["churn_proba"] = probas
        results["risk_level"] = pd.cut(probas, bins=[0, 0.3, 0.6, 1.0],
                                        labels=["LOW", "MEDIUM", "HIGH"])

        # Top 3 features explicatives par utilisateur
        abs_shap = np.abs(shap_values)
        top_features_idx = abs_shap.argsort(axis=1)[:, -3:][:, ::-1]
        results["top_reasons"] = [
            [f"{self.feature_names[i]}: {shap_values[row, i]:+.3f}"
             for i in top_features_idx[row]]
            for row in range(len(X))
        ]
        return results.sort_values("churn_proba", ascending=False)
```

## Contenu Dynamique & Personnalisation

### Personnalisation LLM avec Anthropic

```python
# dynamic_content.py
import anthropic
from enum import Enum

client = anthropic.Anthropic()

class UserSegment(Enum):
    POWER_USER = "power_user"
    AT_RISK = "at_risk"
    NEW_USER = "new_user"
    ENTERPRISE = "enterprise"

def generate_personalized_content(
    segment: UserSegment,
    user_context: dict,
    content_type: str = "in_app_message",
) -> str:
    """Génère un contenu personnalisé selon le segment et le contexte."""
    prompts = {
        UserSegment.AT_RISK: f"""Génère un message in-app (60 mots max) pour réengager un utilisateur à risque.
Contexte : {user_context['last_feature_used']} utilisé il y a {user_context['days_inactive']} jours.
Objectif : Les ramener sur la fonctionnalité clé sans être intrusif.
Ton : Utile, direct, personnalisé.""",

        UserSegment.NEW_USER: f"""Génère un tooltip d onboarding (40 mots max) pour guider un nouvel utilisateur.
Ils viennent d effectuer : {user_context['last_action']}.
Prochaine étape recommandée : {user_context['next_suggested_action']}.
Ton : Encourageant, simple.""",

        UserSegment.POWER_USER: f"""Génère un message de cross-sell (50 mots max) pour un power user.
Features utilisées : {', '.join(user_context['top_features'])}.
Feature premium disponible : {user_context['upsell_feature']}.
Ton : Valorisant, expert.""",
    }

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=200,
        messages=[{"role": "user", "content": prompts.get(segment, "")}]
    )
    return response.content[0].text
```

## Livrables
- Moteur de recommandations (collaborative filtering + content-based) déployé en API
- Modèle de churn scoring avec SHAP explanations exposées via API
- Modèle de propension à la conversion (lead scoring ML)
- Système de personnalisation de contenu (in-app, email, ads)
- Pipeline d'entraînement automatique (retraining hebdomadaire)
- Dashboard monitoring des modèles (data drift, performance)

## Format de sortie
Précise : volume d'utilisateurs, données disponibles (events, achats, profil), latence tolérable pour la recommandation (< 50ms = pré-calcul requis), cas d'usage prioritaire (churn/conversion/recommandation), stack ML (SageMaker/Vertex/Azure ML), framework de serving (FastAPI/BentoML/Ray Serve).
