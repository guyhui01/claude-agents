# Skill — RGPD appliqué aux Systèmes IA
> Certifications : CIPP/E · CIPM · DPO Certifié CNIL · ISO 27701 Lead Implementer

## Objectif
Garantir la conformité RGPD des projets IA : bases légales, droits des personnes, minimisation des données, et articulation avec l'AI Act.

## Bases légales pour l'IA (Art. 6 RGPD)
| Base légale | Conditions | Usage IA typique |
|---|---|---|
| **Consentement** | Libre, éclairé, spécifique, révocable | Personnalisation, profiling marketing |
| **Contrat** | Nécessaire à l'exécution | Recommandations dans une app |
| **Obligation légale** | Imposée par le droit UE/national | Détection fraude (directive PSD2) |
| **Intérêt vital** | Survie d'une personne | IA médicale d'urgence |
| **Mission d'intérêt public** | Autorité publique | IA dans les services publics |
| **Intérêt légitime** | Équilibre avec droits des personnes | Sécurité, analytics B2B |

## Minimisation des données en IA
```python
# Principe : collecter uniquement ce qui est nécessaire à l'objectif

# ❌ Pratique à éviter : tout collecter "au cas où"
training_data = db.query("SELECT * FROM users")  # Trop large

# ✅ Minimisation stricte
training_data = db.query("""
    SELECT 
        age_bucket,          -- Pas l'âge exact
        region,              -- Pas l'adresse
        product_category,    -- Pas les détails produit
        churn_label          -- La cible uniquement
    FROM users
    WHERE consent_ml = TRUE  -- Uniquement les personnes ayant consenti
""")

# Pseudonymisation avant utilisation
def pseudonymize(df):
    df['user_id'] = df['user_id'].apply(
        lambda x: hashlib.sha256(f"{x}:{SALT}".encode()).hexdigest()
    )
    return df.drop(columns=['email', 'name', 'phone'])
```

## Droits des personnes — implémentation technique
```python
# Droit d'accès (Art. 15) — < 1 mois
def get_user_data(user_id: str) -> dict:
    return {
        "conversations": db.get_conversations(user_id),
        "profile": db.get_profile(user_id),
        "ml_predictions": model_store.get_predictions(user_id),
        "training_data": training_store.check_presence(user_id)
    }

# Droit à l'oubli (Art. 17) — < 1 mois
async def delete_user_data(user_id: str):
    await db.delete_conversations(user_id)
    await db.delete_profile(user_id)
    await vector_db.delete_embeddings(user_id)
    # Réentraîner le modèle si l'utilisateur était dans le training set
    await ml_pipeline.schedule_retraining(exclude_user=user_id)
    await audit_log.record(f"GDPR_DELETE:{user_id}")

# Droit à la portabilité (Art. 20)
def export_user_data(user_id: str) -> bytes:
    data = get_user_data(user_id)
    return json.dumps(data, ensure_ascii=False, indent=2).encode('utf-8')

# Droit d'opposition au profilage (Art. 21)
def opt_out_profiling(user_id: str):
    db.set_flag(user_id, 'profiling_consent', False)
    ml_pipeline.remove_from_personalization(user_id)
```

## Profiling et décision automatisée (Art. 22)
```
Art. 22 interdit les décisions ENTIÈREMENT automatisées ayant
des effets juridiques ou significatifs, SAUF :
  → Nécessaire à l'exécution d'un contrat
  → Autorisée par le droit de l'UE
  → Basée sur le consentement explicite

Droits associés :
  → Obtenir une intervention humaine
  → Exprimer son point de vue
  → Contester la décision

Exemples de systèmes IA Art. 22 :
  → Scoring de crédit automatique
  → Tri automatique de CV
  → Évaluation automatique des performances
```

## RGPD × AI Act : articulation
| Obligation | RGPD | AI Act |
|---|---|---|
| Transparence | Art. 13-14 | Art. 13 AI Act |
| Supervision humaine | Art. 22 | Art. 14 AI Act |
| Documentation | Art. 30 (registre) | Documentation technique |
| Évaluation des risques | DPIA (Art. 35) | Risk management system |
| Droits des personnes | Art. 15-22 | Art. 68-69 AI Act |

## Livrables
- Registre des traitements IA (Art. 30)
- Politique de minimisation des données
- Procédures droits des personnes (6 droits)
- Analyse de la base légale par système IA
- Formation RGPD × IA pour les équipes projet

## Format de sortie
Précise : type de traitement IA · données traitées · base légale envisagée · présence de profilage/décision automatisée · nationalité des personnes concernées
