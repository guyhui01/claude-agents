# Skill — AI for Growth & Personalization
> Certifications: AWS ML Specialty (2026), Google Cloud Professional ML Engineer, Anthropic Certified AI Professional 2026, Reforge Growth Series

## Objective
Use AI/ML to personalize the user experience at scale — recommendations, propensity scoring (churn/conversion), dynamic pricing, and dynamic content adapted to profile and behavior.

## Personalized Recommendations

### Recommendation Engine — Collaborative Filtering

```python
# recommendation_engine.py
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from scipy.sparse import csr_matrix
from implicit import als  # Alternating Least Squares for implicit feedback

class CollaborativeRecommender:
    """Item-to-item and user-to-item recommendations via ALS."""

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
        interactions_df: user_id | item_id | weight (e.g. views, purchases, duration)
        """
        # Sparse user × item matrix
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
        # ALS requires item × user
        self.model.fit(self.user_item_matrix.T)

    def recommend(self, user_id: str, n: int = 10, filter_already_seen: bool = True) -> list[dict]:
        """Return the top N recommendations for a user."""
        user_idx_map = {u: i for i, u in enumerate(self.user_ids)}
        item_idx_map = {i: it for i, it in enumerate(self.item_ids)}

        if user_id not in user_idx_map:
            return self.popular_items(n)  # Cold start: popularity

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
        """Cold-start fallback: most popular items."""
        item_popularity = np.asarray(self.user_item_matrix.sum(axis=0)).flatten()
        top_indices = item_popularity.argsort()[-n:][::-1]
        return [{"item_id": self.item_ids[i], "score": float(item_popularity[i])} for i in top_indices]

    def similar_items(self, item_id: str, n: int = 5) -> list[dict]:
        """Similar items (item-to-item)."""
        item_idx_map = {it: i for i, it in enumerate(self.item_ids)}
        if item_id not in item_idx_map:
            return []
        idx = item_idx_map[item_id]
        similar = self.model.similar_items(idx, N=n + 1)[1:]  # Exclude itself
        rev_idx = {i: it for i, it in enumerate(self.item_ids)}
        return [{"item_id": rev_idx[i], "score": float(s)} for i, s in similar]
```

### FastAPI recommendation API

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
    # Redis cache — avoid repeated computation
    cache_key = f"reco:{user_id}:{context}:{n}"
    cached = cache.get(cache_key)
    if cached:
        return {"user_id": user_id, "recommendations": json.loads(cached), "from_cache": True}

    # Fetch recommendations
    recommendations = recommender.recommend(user_id, n=n)

    # Diversification (re-ranking)
    recommendations = diversify_recommendations(recommendations, max_same_category=3)

    cache.setex(cache_key, CACHE_TTL, json.dumps(recommendations))
    return {"user_id": user_id, "recommendations": recommendations, "from_cache": False}
```

## ML Scoring — Churn Propensity

```python
# churn_scoring.py
import pandas as pd
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.calibration import CalibratedClassifierCV
import shap

class ChurnPredictor:
    """Churn-propensity scoring model with SHAP explainability."""

    def __init__(self):
        base_model = GradientBoostingClassifier(
            n_estimators=200, max_depth=5, learning_rate=0.05,
            subsample=0.8, random_state=42
        )
        # Calibration for reliable probabilities
        self.model = CalibratedClassifierCV(base_model, method="isotonic", cv=5)
        self.explainer = None
        self.feature_names = None

    def build_features(self, events_df: pd.DataFrame, users_df: pd.DataFrame) -> pd.DataFrame:
        """Build the features for churn scoring."""
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
        """Predict and explain each score with SHAP."""
        probas = self.model.predict_proba(X)[:, 1]
        shap_values = self.explainer.shap_values(X)

        results = X.copy()
        results["churn_proba"] = probas
        results["risk_level"] = pd.cut(probas, bins=[0, 0.3, 0.6, 1.0],
                                        labels=["LOW", "MEDIUM", "HIGH"])

        # Top 3 explanatory features per user
        abs_shap = np.abs(shap_values)
        top_features_idx = abs_shap.argsort(axis=1)[:, -3:][:, ::-1]
        results["top_reasons"] = [
            [f"{self.feature_names[i]}: {shap_values[row, i]:+.3f}"
             for i in top_features_idx[row]]
            for row in range(len(X))
        ]
        return results.sort_values("churn_proba", ascending=False)
```

## Dynamic Content & Personalization

### LLM personalization with Anthropic

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
    """Generate personalized content based on the segment and context."""
    prompts = {
        UserSegment.AT_RISK: f"""Generate an in-app message (60 words max) to re-engage an at-risk user.
Context: {user_context['last_feature_used']} used {user_context['days_inactive']} days ago.
Objective: Bring them back to the key feature without being intrusive.
Tone: Helpful, direct, personalized.""",

        UserSegment.NEW_USER: f"""Generate an onboarding tooltip (40 words max) to guide a new user.
They just performed: {user_context['last_action']}.
Recommended next step: {user_context['next_suggested_action']}.
Tone: Encouraging, simple.""",

        UserSegment.POWER_USER: f"""Generate a cross-sell message (50 words max) for a power user.
Features used: {', '.join(user_context['top_features'])}.
Premium feature available: {user_context['upsell_feature']}.
Tone: Validating, expert.""",
    }

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=200,
        messages=[{"role": "user", "content": prompts.get(segment, "")}]
    )
    return response.content[0].text
```

## Deliverables
- Recommendation engine (collaborative filtering + content-based) deployed as an API
- Churn scoring model with SHAP explanations exposed via API
- Conversion propensity model (ML lead scoring)
- Content personalization system (in-app, email, ads)
- Automatic training pipeline (weekly retraining)
- Model monitoring dashboard (data drift, performance)

## Output format
Specify: user volume, available data (events, purchases, profile), tolerable recommendation latency (< 50ms = pre-computation required), priority use case (churn/conversion/recommendation), ML stack (SageMaker/Vertex/Azure ML), serving framework (FastAPI/BentoML/Ray Serve).

## Sources
- **Hu, Koren & Volinsky** — *Collaborative Filtering for Implicit Feedback Datasets* (ICDM 2008) — the foundation of ALS (Alternating Least Squares)
- **Lundberg & Lee** — *A Unified Approach to Interpreting Model Predictions (SHAP)* (NeurIPS 2017) — explainability via Shapley values
- **Jerome Friedman** — *Greedy Function Approximation: A Gradient Boosting Machine* (Annals of Statistics, 2001) — churn/propensity scoring
- **Platt (1999) / calibration** — `CalibratedClassifierCV`: essential to interpret scores as probabilities
- **EU AI Act 2024/1689 & GDPR** — personalization/scoring: legal basis, transparency, right to object (the ALS hyperparameters and churn thresholds cited are **starting values to validate**, not standards)

## Anti-patterns
- **Filter bubble**: recommendations with no diversity/exploration → lock-in and saturation.
- **Uncalibrated churn scores**: treating an uncalibrated model output as a probability.
- **Personalization with no legal basis**: profiling/scoring with no consent or information (GDPR, AI Act).
- **Unmonitored model**: no data-drift detection or retraining → silent degradation.
- **Opaque/discriminatory dynamic pricing**: legal and reputational risk.

## See also
- [lifecycle-marketing.md](lifecycle-marketing.md) — activate churn scoring in sequences
- [automation-growth.md](automation-growth.md) — orchestrate personalization in workflows
- [`../data_scientist/modelisation-ml.md`](../data_scientist/modelisation-ml.md) — model training, evaluation, and calibration
- [`../../AGENT-AI-ARCHITECT.md`](../../AGENT-AI-ARCHITECT.md) — ML serving architecture (latency, feature store)
