# Skill — Orchestration de Pipelines & Apache Airflow
> Certifications : Google PDE · Databricks Data Engineer Associate · AWS DEA-C01

## Objectif
Orchestrer, monitorer et maintenir des pipelines de données complexes avec Apache Airflow ou les équivalents cloud (Cloud Composer, MWAA, Astronomer).

## Concepts Airflow
```
DAG (Directed Acyclic Graph) → Pipeline de tâches ordonnées
Task / Operator              → Unité de travail
Scheduler                    → Planificateur (cron-like)
Executor                     → Moteur d'exécution (Local, Celery, K8s)
XCom                         → Communication entre tâches
Connection                   → Credentials vers services externes
Variable                     → Paramètres globaux du DAG
```

## DAG professionnel — bonnes pratiques
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
    'sla': timedelta(hours=2)  # Alerte si dépasse 2h
}

with DAG(
    dag_id='pipeline_clients_daily',
    default_args=default_args,
    description='Pipeline ingestion clients quotidien',
    schedule_interval='0 3 * * *',
    start_date=datetime(2026, 1, 1),
    catchup=False,
    tags=['production', 'clients', 'daily'],
    doc_md="""
    ## Pipeline Clients Quotidien
    Ingère et transforme les données clients depuis Salesforce.
    SLA: 5h00 chaque matin.
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
            bash_command='dbt run --select marts.clients --profiles-dir /app/dbt'
        )
        test_dbt = BashOperator(
            task_id='dbt_test',
            bash_command='dbt test --select marts.clients --profiles-dir /app/dbt'
        )
        run_dbt >> test_dbt

    notify_success = PythonOperator(
        task_id='notify_success',
        python_callable=send_success_notification
    )

    start >> tg_extract >> tg_transform >> notify_success >> end
```

## Sensors — attendre une condition
```python
from airflow.sensors.filesystem import FileSensor
from airflow.providers.google.cloud.sensors.gcs import GCSObjectExistenceSensor

# Attendre un fichier sur GCS
wait_for_file = GCSObjectExistenceSensor(
    task_id='wait_for_export',
    bucket='data-landing',
    object='exports/clients_{{ ds }}.parquet',
    poke_interval=300,   # Vérifier toutes les 5 min
    timeout=3600,        # Timeout après 1h
    mode='reschedule'    # Libérer le worker entre les vérifications
)
```

## Monitoring et alertes
```python
# Callback sur failure
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

## Livrables
- DAG documenté avec TaskGroups et SLA
- Tests de DAG (pytest + pytest-airflow)
- Runbook opérationnel (incidents, re-run, debug)
- Dashboard de monitoring (succès/échecs, durée)

## Format de sortie
Précise : nombre de pipelines · fréquence · sources/destinations · dépendances entre DAGs · environnement Airflow (self-hosted, Cloud Composer, Astronomer)
