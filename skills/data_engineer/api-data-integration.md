# Skill — APIs & Intégration de Données
> Certifications : AWS DEA-C01 · Azure DP-203 · Confluent CCDAK

## Objectif
Concevoir et implémenter des intégrations robustes entre systèmes via des APIs REST, GraphQL et des connecteurs de données.

## Patterns d'intégration API

### REST API — bonnes pratiques consommation
```python
import requests
import time
from typing import Optional

class APIClient:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        })
    
    def get(self, endpoint: str, params: dict = None,
            max_retries: int = 3) -> dict:
        url = f"{self.base_url}/{endpoint}"
        for attempt in range(max_retries):
            try:
                response = self.session.get(url, params=params, timeout=30)
                response.raise_for_status()
                return response.json()
            except requests.exceptions.RateLimitError:
                wait = 2 ** attempt
                time.sleep(wait)
            except requests.exceptions.HTTPError as e:
                if e.response.status_code == 429:  # Rate limit
                    time.sleep(int(e.response.headers.get('Retry-After', 60)))
                else:
                    raise
        raise Exception(f"Max retries reached for {url}")
    
    def paginate(self, endpoint: str, page_size: int = 100):
        page = 1
        while True:
            data = self.get(endpoint, params={'page': page, 'limit': page_size})
            yield from data.get('results', [])
            if not data.get('next'):
                break
            page += 1
```

### Airbyte — connecteurs low-code
```yaml
# Connexion source → destination sans code
Source:
  - Salesforce CRM
  - HubSpot
  - Google Analytics 4
  - PostgreSQL / MySQL
  - REST APIs custom

Destination:
  - BigQuery
  - Snowflake
  - Databricks
  - PostgreSQL (DWH)

Sync modes:
  - Full Refresh (remplacement complet)
  - Incremental Append (ajout des nouvelles lignes)
  - Incremental Dedup (upsert, dédoublonnage)
```

### Webhook — ingestion temps réel
```python
from fastapi import FastAPI, Request, BackgroundTasks
import hmac, hashlib, json

app = FastAPI()

async def process_event(event: dict):
    # Traitement asynchrone de l'événement
    await insert_to_warehouse(event)
    await trigger_downstream_pipeline(event)

@app.post("/webhook/events")
async def receive_webhook(request: Request, background_tasks: BackgroundTasks):
    # Vérification signature HMAC
    signature = request.headers.get('X-Signature-256')
    body = await request.body()
    expected = hmac.new(SECRET_KEY, body, hashlib.sha256).hexdigest()
    if not hmac.compare_digest(f"sha256={expected}", signature):
        raise HTTPException(status_code=401, detail="Invalid signature")
    
    event = json.loads(body)
    background_tasks.add_task(process_event, event)
    return {"status": "accepted"}
```

## Formats de données courants
| Format | Usage | Avantages |
|---|---|---|
| **JSON** | APIs, events | Flexible, lisible |
| **Parquet** | Stockage analytique | Colonnaire, compressé, rapide |
| **Avro** | Kafka / streaming | Schéma embarqué, évolution |
| **Delta** | Lakehouse | ACID, time travel, upsert |
| **CSV** | Échanges legacy | Universel, simple |

## Livrables
- Client API réutilisable avec retry/pagination
- Pipeline Airbyte configuré (connecteurs)
- Endpoint webhook sécurisé
- Tests d'intégration (pytest + responses mock)
- Documentation API (OpenAPI Spec)

## Format de sortie
Précise : API source (nom, auth method, pagination) · volume d'événements/appels · fréquence · destination · format de données attendu
