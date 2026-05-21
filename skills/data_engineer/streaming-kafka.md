# Skill — Streaming de Données & Apache Kafka
> Certifications : Confluent CCDAK · Google PDE · AWS DEA-C01

## Objectif
Concevoir et exploiter des pipelines de données en temps réel avec Apache Kafka et les frameworks de stream processing.

## Architecture Kafka
```
Producers → Topics (partitions) → Consumers

Topic = log immuable partitionné
Partition = unité de parallélisme (1 consommateur par partition)
Consumer Group = lecture parallèle d'un topic
Offset = position du consommateur dans la partition
Retention = durée de rétention des messages (défaut 7 jours)
```

## Kafka Producers — envoi d'événements
```python
from confluent_kafka import Producer
import json
from datetime import datetime

conf = {
    'bootstrap.servers': 'broker1:9092,broker2:9092',
    'acks': 'all',              # Durabilité max
    'retries': 3,
    'compression.type': 'snappy'
}

producer = Producer(conf)

def delivery_callback(err, msg):
    if err:
        print(f"Message failed: {err}")

# Envoi d'un événement
event = {
    'user_id': 'usr_123',
    'action': 'purchase',
    'amount': 49.99,
    'timestamp': datetime.utcnow().isoformat()
}

producer.produce(
    topic='user-events',
    key=event['user_id'],
    value=json.dumps(event),
    callback=delivery_callback
)
producer.flush()
```

## Kafka Consumers — consommation fiable
```python
from confluent_kafka import Consumer
import json

consumer = Consumer({
    'bootstrap.servers': 'broker1:9092',
    'group.id': 'analytics-pipeline',
    'auto.offset.reset': 'earliest',
    'enable.auto.commit': False  # Commit manuel pour garantir le traitement
})

consumer.subscribe(['user-events'])

try:
    while True:
        msg = consumer.poll(timeout=1.0)
        if msg is None:
            continue
        if msg.error():
            print(f"Error: {msg.error()}")
            continue
        
        event = json.loads(msg.value())
        process_event(event)
        consumer.commit(asynchronous=False)  # Commit après traitement

finally:
    consumer.close()
```

## Kafka Streams / ksqlDB — transformations SQL
```sql
-- ksqlDB : agrégations en temps réel
CREATE STREAM user_events (
    user_id VARCHAR,
    action VARCHAR,
    amount DOUBLE,
    timestamp VARCHAR
) WITH (KAFKA_TOPIC='user-events', VALUE_FORMAT='JSON');

-- Agrégation glissante (tumbling window 5 min)
CREATE TABLE purchase_stats AS
SELECT
    user_id,
    COUNT(*) AS nb_purchases,
    SUM(amount) AS total_amount,
    WINDOWSTART AS window_start
FROM user_events
WHERE action = 'purchase'
WINDOW TUMBLING (SIZE 5 MINUTES)
GROUP BY user_id
EMIT CHANGES;
```

## Apache Flink — stream processing avancé
```python
from pyflink.datastream import StreamExecutionEnvironment
from pyflink.table import StreamTableEnvironment

env = StreamExecutionEnvironment.get_execution_environment()
env.set_parallelism(4)
t_env = StreamTableEnvironment.create(env)

# Source Kafka
t_env.execute_sql("""
    CREATE TABLE events (
        user_id STRING,
        action STRING,
        amount DOUBLE,
        ts TIMESTAMP(3),
        WATERMARK FOR ts AS ts - INTERVAL '5' SECOND
    ) WITH (
        'connector' = 'kafka',
        'topic' = 'user-events',
        'properties.bootstrap.servers' = 'broker1:9092',
        'format' = 'json'
    )
""")

# Transformation + Sink
t_env.execute_sql("""
    INSERT INTO purchase_summary
    SELECT user_id, COUNT(*) AS cnt, SUM(amount) AS total
    FROM events
    WHERE action = 'purchase'
    GROUP BY user_id, TUMBLE(ts, INTERVAL '5' MINUTE)
""")
```

## Métriques de monitoring Kafka
- **Consumer Lag** : retard de consommation (alerter si > seuil)
- **Throughput** : messages/seconde par topic
- **Partition skew** : déséquilibre entre partitions
- **Replication lag** : retard de réplication des replicas

## Livrables
- Producer/Consumer Python robuste (retry, DLQ)
- Topologie Kafka Streams / Flink documentée
- Configuration du cluster (replication, retention, partitions)
- Dashboard de monitoring (Confluent Control Center / Grafana)

## Format de sortie
Précise : volume d'événements/seconde · latence maximale tolérée · durée de rétention · transformations nécessaires · destination (DB, DWH, S3)
