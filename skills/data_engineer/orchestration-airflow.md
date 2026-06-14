# Skill — Pipeline Orchestration & Apache Airflow
> Certifications: Google PDE · Databricks Data Engineer Associate · AWS DEA-C01

## Objective
Orchestrate, monitor and maintain complex data pipelines with Apache Airflow or the cloud equivalents (Cloud Composer, MWAA, Astronomer).

## Airflow concepts
```
DAG (Directed Acyclic Graph) → Pipeline of ordered tasks
Task / Operator              → Unit of work
Scheduler                    → Scheduler (cron-like)
Executor                     → Execution engine (Local, Celery, K8s)
XCom                         → Communication between tasks
Connection                   → Credentials to external services
Variable                     → Global DAG parameters
```

## Professional DAG — best practices
```python
from airflow import DAG
from airflow.operators.python import PythonOperator, BranchPythonOperator
from airflow.operators.empty import EmptyOperator
from airflow.providers.google.cloud.operators.bigquery import BigQueryInsertJobOperator
from airflow.utils.task_group import TaskGroup
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-team',
    'depends_on_past': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
    'retry_exponential_backoff': True,
    'email_on_failure': True,
    'email': ['data-alerts@company.com'],
    'sla': timedelta(hours=2)  # Alert if it exceeds 2h
}

with DAG(
    dag_id='pipeline_customers_daily',
    default_args=default_args,
    description='Daily customer ingestion pipeline',
    schedule_interval='0 3 * * *',
    start_date=datetime(2026, 1, 1),
    catchup=False,
    tags=['production', 'customers', 'daily'],
    doc_md="""
    ## Daily Customer Pipeline
    Ingests and transforms customer data from Salesforce.
    SLA: 5:00 a.m. each morning.
    """
) as dag:

    start = EmptyOperator(task_id='start')
    end = EmptyOperator(task_id='end')

    with TaskGroup("extraction") as tg_extract:
        extract_crm = PythonOperator(
            task_id='extract_salesforce',
            python_callable=extract_from_salesforce
        )
        extract_web = PythonOperator(
            task_id='extract_web_events',
            python_callable=extract_web_events
        )

    with TaskGroup("transformation") as tg_transform:
        run_dbt = BashOperator(
            task_id='dbt_run',
            bash_command='dbt run --select marts.customers --profiles-dir /app/dbt'
        )
        test_dbt = BashOperator(
            task_id='dbt_test',
            bash_command='dbt test --select marts.customers --profiles-dir /app/dbt'
        )
        run_dbt >> test_dbt

    notify_success = PythonOperator(
        task_id='notify_success',
        python_callable=send_success_notification
    )

    start >> tg_extract >> tg_transform >> notify_success >> end
```

## Sensors — wait for a condition
```python
from airflow.sensors.filesystem import FileSensor
from airflow.providers.google.cloud.sensors.gcs import GCSObjectExistenceSensor

# Wait for a file on GCS
wait_for_file = GCSObjectExistenceSensor(
    task_id='wait_for_export',
    bucket='data-landing',
    object='exports/customers_{{ ds }}.parquet',
    poke_interval=300,   # Check every 5 min
    timeout=3600,        # Timeout after 1h
    mode='reschedule'    # Release the worker between checks
)
```

## Monitoring and alerts
```python
# Failure callback
def on_failure_callback(context):
    task_instance = context['task_instance']
    send_slack_message(
        channel='#data-alerts',
        text=f"❌ DAG `{context['dag'].dag_id}` - Task `{task_instance.task_id}` FAILED\n"
             f"Execution date: {context['execution_date']}\n"
             f"Log: {task_instance.log_url}"
    )

default_args['on_failure_callback'] = on_failure_callback
```

## Deliverables
- Documented DAG with TaskGroups and SLA
- DAG tests (pytest + pytest-airflow)
- Operational runbook (incidents, re-run, debug)
- Monitoring dashboard (successes/failures, duration)

## Output format
Specify: number of pipelines · frequency · sources/destinations · dependencies between DAGs · Airflow environment (self-hosted, Cloud Composer, Astronomer)
