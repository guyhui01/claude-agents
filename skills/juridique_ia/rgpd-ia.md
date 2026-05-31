# Skill — RGPD appliqué aux Systèmes IA

> Certifications : CIPP/E · CIPM · DPO Certifié CNIL · ISO/IEC 27701 Lead Implementer
> Agent : AGENT-JURIDIQUE-IA.md
> Référentiels : **RGPD UE 2016/679** (art. 6, 9, 12, 13-14, 15-22, 30, 35) · **CNIL** Recommandations IA (2024-2025) · **AI Act UE 2024/1689** (art. 14, 50, 86) · PSD2 Directive (UE) 2015/2366

## Objectif

Garantir la conformité **RGPD** des projets IA : bases légales, droits des personnes, minimisation, décision automatisée (art. 22), et articulation avec l'**AI Act**.

## Cadre référentiels mobilisés

| Sujet | Référentiel |
|---|---|
| Bases légales | RGPD art. 6 (+ art. 9/10 données sensibles/pénales) |
| Droits des personnes | RGPD art. 12-22 (délais art. 12.3) |
| Décision automatisée | RGPD art. 22 + AI Act art. 14 (supervision) + art. 86 (explication) |
| Registre / DPIA | RGPD art. 30 / art. 35 |
| Doctrine IA | **CNIL Recommandations IA** (oct. 2024 + avr. 2025) — base légale entraînement, intérêt légitime |

## Bases légales pour l'IA (art. 6 RGPD)
| Base légale | Conditions | Usage IA typique |
|---|---|---|
| **Consentement** | Libre, éclairé, spécifique, révocable | Personnalisation, profiling marketing |
| **Contrat** | Nécessaire à l'exécution | Recommandations dans une app |
| **Obligation légale** | Imposée par le droit UE/national | Détection de fraude (ex. **PSD2 — Dir. (UE) 2015/2366**) |
| **Intérêt vital** | Survie d'une personne | IA médicale d'urgence |
| **Mission d'intérêt public** | Autorité publique | IA dans les services publics |
| **Intérêt légitime** | Test de mise en balance (art. 6.1.f) | Sécurité, analytics B2B, **entraînement (cf. CNIL 2024)** |

> **CNIL Recommandations IA (2024-2025)** : l'intérêt légitime peut fonder la constitution de bases de données d'entraînement, sous conditions (test de mise en balance, mesures pour les droits des personnes, transparence). À documenter.

## Minimisation des données en IA
```python
# Principe : collecter uniquement ce qui est nécessaire à l'objectif (art. 5.1.c)

# ❌ À éviter : tout collecter "au cas où"
training_data = db.query("SELECT * FROM users")  # Trop large

# ✅ Minimisation stricte
training_data = db.query("""
    SELECT age_bucket,        -- pas l'âge exact
           region,            -- pas l'adresse
           product_category,  -- pas les détails produit
           churn_label        -- la cible uniquement
    FROM users WHERE consent_ml = TRUE
""")

# Pseudonymisation avant utilisation (art. 4.5)
def pseudonymize(df):
    df['user_id'] = df['user_id'].apply(
        lambda x: hashlib.sha256(f"{x}:{SALT}".encode()).hexdigest())
    return df.drop(columns=['email', 'name', 'phone'])
```

## Droits des personnes — implémentation technique
> Délai de réponse : **1 mois**, prorogeable de **2 mois** si complexité (RGPD art. 12.3).
```python
# Droit d'accès (art. 15) — réponse ≤ 1 mois (art. 12.3)
def get_user_data(user_id: str) -> dict:
    return {"conversations": db.get_conversations(user_id),
            "profile": db.get_profile(user_id),
            "ml_predictions": model_store.get_predictions(user_id),
            "training_data": training_store.check_presence(user_id)}

# Droit à l'effacement (art. 17)
async def delete_user_data(user_id: str):
    await db.delete_conversations(user_id); await db.delete_profile(user_id)
    await vector_db.delete_embeddings(user_id)
    await ml_pipeline.schedule_retraining(exclude_user=user_id)  # si présent dans le training set
    await audit_log.record(f"GDPR_DELETE:{user_id}")

# Portabilité (art. 20)
def export_user_data(user_id: str) -> bytes:
    return json.dumps(get_user_data(user_id), ensure_ascii=False, indent=2).encode('utf-8')

# Opposition au profilage (art. 21)
def opt_out_profiling(user_id: str):
    db.set_flag(user_id, 'profiling_consent', False)
    ml_pipeline.remove_from_personalization(user_id)
```

## Profiling et décision automatisée (art. 22)
```
Art. 22 : interdiction des décisions ENTIÈREMENT automatisées produisant
des effets juridiques ou significatifs, SAUF : exécution d'un contrat,
autorisation par le droit UE, ou consentement explicite.

Droits associés : intervention humaine · expression du point de vue · contestation.
Couplage AI Act : art. 14 (supervision humaine) + art. 86 (droit à l'explication
d'une décision individuelle prise sur la base d'un système haut risque).

Exemples : scoring de crédit · tri automatique de CV · évaluation automatisée
(→ ces usages sont aussi "haut risque" AI Act, Annexe III).
```

## RGPD × AI Act : articulation
| Obligation | RGPD | AI Act |
|---|---|---|
| Transparence vers la personne | Art. 13-14 | **Art. 50** (transparence) |
| Supervision humaine | Art. 22 | **Art. 14** |
| Documentation | Art. 30 (registre) | **Art. 11 + Annexe IV** (doc technique) |
| Évaluation des risques | **DPIA art. 35** | **Art. 9** (risk management system) |
| Explication d'une décision | Art. 22 | **Art. 86** (explication décision individuelle) |

> DPIA (RGPD) et évaluation de conformité AI Act sont **complémentaires** : la première traite le risque pour les personnes, la seconde la conformité produit. Cf. [`dpia-systemes-ia.md`](dpia-systemes-ia.md).

## Anti-patterns

- ❌ **Intérêt légitime « par défaut »** sans test de mise en balance documenté (art. 6.1.f)
- ❌ **Tout collecter « au cas où »** : viole la minimisation (art. 5.1.c)
- ❌ **Effacement (art. 17) qui oublie le training set** : la donnée persiste dans le modèle/embeddings
- ❌ **Décision 100% automatisée sans recours humain** (viole art. 22 + AI Act art. 14)
- ❌ **Confondre pseudonymisation et anonymisation** : la pseudonymisation reste de la donnée personnelle
- ❌ **Citer une base légale sans la qualifier** par traitement (chaque finalité = une base)
- ❌ **Ignorer les Recommandations CNIL IA 2024-2025** sur l'entraînement et l'intérêt légitime

## Livrables
- Registre des traitements IA (art. 30)
- Politique de minimisation des données
- Procédures des droits des personnes (6 droits, délais art. 12.3)
- Analyse de la base légale par système IA (test de mise en balance si intérêt légitime)
- Formation RGPD × IA pour les équipes projet

## Format de sortie
Précise : type de traitement IA · données traitées · base légale envisagée · présence de profilage/décision automatisée · nationalité/résidence des personnes concernées.

## Sources
- **RGPD** — Règlement (UE) 2016/679 (art. 5, 6, 9, 12, 13-22, 30, 35) — eur-lex.europa.eu
- **CNIL** — Recommandations sur l'IA (octobre 2024 + avril 2025) — cnil.fr (base légale, intérêt légitime, droits des personnes)
- **AI Act** — Règlement (UE) 2024/1689 (art. 14 supervision, art. 50 transparence, art. 86 explication)
- **PSD2** — Directive (UE) 2015/2366 du 25 novembre 2015 (services de paiement, détection de fraude)
- **ISO/IEC 27701:2019** — extension vie privée de l'ISO 27001 (PIMS)

## Voir aussi
- [`dpia-systemes-ia.md`](dpia-systemes-ia.md) — DPIA art. 35 (complémentaire)
- [`ai-act-conformite.md`](ai-act-conformite.md) — couplage haut risque + transparence
- [`gouvernance-ethique-ia.md`](gouvernance-ethique-ia.md) — EIA éthique (au-delà du RGPD)
- [`contrats-ia.md`](contrats-ia.md) — DPA (art. 28) et clauses données
- [`propriete-intellectuelle-ia.md`](propriete-intellectuelle-ia.md) — données d'entraînement et droits
