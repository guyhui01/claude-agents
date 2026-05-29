# Skill — Pipelines d'Ingestion de Données
> Certifications : Google PDE · AWS DEA-C01 · Azure DP-203 · Databricks Data Engineer Associate

## Objectif
Concevoir et implémenter des pipelines d'ingestion robustes pour collecter, transformer et charger des données depuis diverses sources.

## Patterns d'ingestion

### Batch vs. Streaming
| Aspect | Batch | Streaming |
|---|---|---|
| Latence | Minutes à heures | Millisecondes à secondes |
| Volume | Gros volumes | Événements continus |
| Complexité | Faible | Élevée |
| Coût | Faible | Élevé |
| Use cases | ETL nuit, rapports J+1 | Fraude, alertes, IoT |

### ELT vs. ETL (2026)
```
ETL (Extract → Transform → Load)
  → Transformation avant chargement
  → Adapté aux data warehouses traditionnels

ELT (Extract → Load → Transform)
  → Chargement brut, transformation dans le DWH/Lake
  → Standard moderne (dbt + Snowflake/BigQuery/Databricks)
```

## Apache Airflow — orchestration de pipelines
```python
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.providers.postgres.operators.postgres import PostgresOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-team',
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
    'email_on_failure': True
}

with DAG(
    'ingestion_clients',
    default_args=default_args,
    schedule_interval='0 2 * * *',  # Chaque nuit à 2h
    start_date=datetime(2026, 1, 1),
    catchup=False
) as dag:
    
    extract = PythonOperator(
        task_id='extract_from_api',
        python_callable=extract_data
    )
    
    transform = PythonOperator(
        task_id='transform_data',
        python_callable=transform_data
    )
    
    load = PythonOperator(
        task_id='load_to_warehouse',
        python_callable=load_data
    )
    
    extract >> transform >> load
```

## Kafka — ingestion streaming
```python
from confluent_kafka import Producer, Consumer

# Producteur
producer = Producer({'bootstrap.servers': 'localhost:9092'})
producer.produce('events', key='user_123', value='{"action": "purchase"}')
producer.flush()

# Consommateur
consumer = Consumer({
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'data-pipeline',
    'auto.offset.reset': 'earliest'
})
consumer.subscribe(['events'])

while True:
    msg = consumer.poll(timeout=1.0)
    if msg and not msg.error():
        process_event(msg.value())
```

## Qualité des données en ingestion
```python
import great_expectations as gx
# Great Expectations >= 0.18 (Fluent Datasource API — `ge.dataset.PandasDataset` est obsolète)

context = gx.get_context()

# Pandas Datasource + DataFrame Asset + Batch Definition
batch_def = (
    context.data_sources.add_pandas("ingestion")
    .add_dataframe_asset(name="data")
    .add_batch_definition_whole_dataframe("validation")
)
batch = batch_def.get_batch(batch_parameters={"dataframe": df})

# Attentes à valider sur le batch
expectations = [
    gx.expectations.ExpectColumnValuesToNotBeNull(column="user_id"),
    gx.expectations.ExpectColumnValuesToBeBetween(column="age", min_value=0, max_value=150),
    gx.expectations.ExpectColumnValuesToMatchRegex(column="email", regex=r"^[\w\.-]+@[\w\.-]+\.\w+$"),
]
results = batch.validate(expectations)
if not results.success:
    raise ValueError(f"Data quality check failed: {results}")
```

## Livrables
- DAG Airflow documenté (batch)
- Pipeline Kafka/Flink (streaming)
- Tests de qualité données (Great Expectations)
- Monitoring et alertes d'ingestion

## Format de sortie
Précise : sources de données (API, DB, fichiers, streaming) · volume (lignes/jour) · fréquence · destination · contraintes de latence · outils préférés (cloud provider)
