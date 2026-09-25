# Skill — APIs & Data Integration
> Certifications: AWS DEA-C01 · Azure DP-203 · Confluent CCDAK

## Objective
Design and implement robust integrations between systems via REST and GraphQL APIs and data connectors.

## API integration patterns

### REST API — consumption best practices
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
            except requests.exceptions.HTTPError as e:
                if e.response is not None and e.response.status_code == 429:
                    # Rate limit (HTTP 429) — respect Retry-After or exponential backoff
                    wait = int(e.response.headers.get('Retry-After', 2 ** attempt))
                    time.sleep(wait)
                else:
                    raise
            except (requests.exceptions.Timeout, requests.exceptions.ConnectionError):
                # Transient errors — exponential backoff
                time.sleep(2 ** attempt)
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

### Airbyte — low-code connectors
```yaml
# Source → destination connection with no code
Source:
  - Salesforce CRM
  - HubSpot
  - Google Analytics 4
  - PostgreSQL / MySQL
  - Custom REST APIs

Destination:
  - BigQuery
  - Snowflake
  - Databricks
  - PostgreSQL (DWH)

Sync modes:
  - Full Refresh (complete replacement)
  - Incremental Append (add new rows)
  - Incremental Dedup (upsert, deduplication)
```

### Webhook — real-time ingestion
```python
from fastapi import FastAPI, Request, BackgroundTasks
import hmac, hashlib, json

app = FastAPI()

async def process_event(event: dict):
    # Asynchronous event processing
    await insert_to_warehouse(event)
    await trigger_downstream_pipeline(event)

@app.post("/webhook/events")
async def receive_webhook(request: Request, background_tasks: BackgroundTasks):
    # HMAC signature verification
    signature = request.headers.get('X-Signature-256')
    body = await request.body()
    expected = hmac.new(SECRET_KEY, body, hashlib.sha256).hexdigest()
    if not hmac.compare_digest(f"sha256={expected}", signature):
        raise HTTPException(status_code=401, detail="Invalid signature")

    event = json.loads(body)
    background_tasks.add_task(process_event, event)
    return {"status": "accepted"}
```

## Common data formats
| Format | Use | Advantages |
|---|---|---|
| **JSON** | APIs, events | Flexible, readable |
| **Parquet** | Analytical storage | Columnar, compressed, fast |
| **Avro** | Kafka / streaming | Embedded schema, evolution |
| **Delta** | Lakehouse | ACID, time travel, upsert |
| **CSV** | Legacy exchange | Universal, simple |

## Deliverables
- Reusable API client with retry/pagination
- Configured Airbyte pipeline (connectors)
- Secure webhook endpoint
- Integration tests (pytest + responses mock)
- API documentation (OpenAPI Spec)

## Output format
Specify: source API (name, auth method, pagination) · events/calls volume · frequency · destination · expected data format
