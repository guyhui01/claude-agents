# Skill — Data Ingestion Pipelines
> Certifications: Google PDE · AWS DEA-C01 · Azure DP-203 · Databricks Data Engineer Associate

## Objective
Design and implement robust ingestion pipelines to collect, transform and load data from various sources.

## Ingestion patterns

### Batch vs. Streaming
| Aspect | Batch | Streaming |
|---|---|---|
| Latency | Minutes to hours | Milliseconds to seconds |
| Volume | Large volumes | Continuous events |
| Complexity | Low | High |
| Cost | Low | High |
| Use cases | Nightly ETL, D+1 reports | Fraud, alerts, IoT |

### ELT vs. ETL (2026)
```
ETL (Extract → Transform → Load)
  → Transformation before loading
  → Suited to traditional data warehouses

ELT (Extract → Load → Transform)
  → Raw load, transformation in the DWH/Lake
  → Modern standard (dbt + Snowflake/BigQuery/Databricks)
```

## Apache Airflow — pipeline orchestration
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
    'ingestion_customers',
    default_args=default_args,
    schedule_interval='0 2 * * *',  # Every night at 2 a.m.
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

## Kafka — streaming ingestion
```python
from confluent_kafka import Producer, Consumer

# Producer
producer = Producer({'bootstrap.servers': 'localhost:9092'})
producer.produce('events', key='user_123', value='{"action": "purchase"}')
producer.flush()

# Consumer
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

## Data quality at ingestion
```python
import great_expectations as gx
# Great Expectations >= 0.18 (Fluent Datasource API — `ge.dataset.PandasDataset` is deprecated)

context = gx.get_context()

# Pandas Datasource + DataFrame Asset + Batch Definition
batch_def = (
    context.data_sources.add_pandas("ingestion")
    .add_dataframe_asset(name="data")
    .add_batch_definition_whole_dataframe("validation")
)
batch = batch_def.get_batch(batch_parameters={"dataframe": df})

# Expectations to validate on the batch
expectations = [
    gx.expectations.ExpectColumnValuesToNotBeNull(column="user_id"),
    gx.expectations.ExpectColumnValuesToBeBetween(column="age", min_value=0, max_value=150),
    gx.expectations.ExpectColumnValuesToMatchRegex(column="email", regex=r"^[\w\.-]+@[\w\.-]+\.\w+$"),
]
results = batch.validate(expectations)
if not results.success:
    raise ValueError(f"Data quality check failed: {results}")
```

## Deliverables
- Documented Airflow DAG (batch)
- Kafka/Flink pipeline (streaming)
- Data quality tests (Great Expectations)
- Ingestion monitoring and alerts

## Output format
Specify: data sources (API, DB, files, streaming) · volume (rows/day) · frequency · destination · latency constraints · preferred tools (cloud provider)
