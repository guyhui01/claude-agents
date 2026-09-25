# Skill — Data Streaming & Apache Kafka
> Certifications: Confluent CCDAK · Google PDE · AWS DEA-C01

## Objective
Design and operate real-time data pipelines with Apache Kafka and stream processing frameworks.

## Kafka architecture
```
Producers → Topics (partitions) → Consumers

Topic = immutable partitioned log
Partition = unit of parallelism (1 consumer per partition)
Consumer Group = parallel reading of a topic
Offset = consumer position in the partition
Retention = message retention duration (default 7 days)
```

## Kafka Producers — sending events
```python
from confluent_kafka import Producer
import json
from datetime import datetime

conf = {
    'bootstrap.servers': 'broker1:9092,broker2:9092',
    'acks': 'all',              # Max durability
    'retries': 3,
    'compression.type': 'snappy'
}

producer = Producer(conf)

def delivery_callback(err, msg):
    if err:
        print(f"Message failed: {err}")

# Send an event
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

## Kafka Consumers — reliable consumption
```python
from confluent_kafka import Consumer
import json

consumer = Consumer({
    'bootstrap.servers': 'broker1:9092',
    'group.id': 'analytics-pipeline',
    'auto.offset.reset': 'earliest',
    'enable.auto.commit': False  # Manual commit to guarantee processing
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
        consumer.commit(asynchronous=False)  # Commit after processing

finally:
    consumer.close()
```

## Kafka Streams / ksqlDB — SQL transformations
```sql
-- ksqlDB: real-time aggregations
CREATE STREAM user_events (
    user_id VARCHAR,
    action VARCHAR,
    amount DOUBLE,
    timestamp VARCHAR
) WITH (KAFKA_TOPIC='user-events', VALUE_FORMAT='JSON');

-- Windowed aggregation (5-min tumbling window)
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

## Apache Flink — advanced stream processing
```python
from pyflink.datastream import StreamExecutionEnvironment
from pyflink.table import StreamTableEnvironment

env = StreamExecutionEnvironment.get_execution_environment()
env.set_parallelism(4)
t_env = StreamTableEnvironment.create(env)

# Kafka source
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

## Kafka monitoring metrics
- **Consumer Lag**: consumption delay (alert if > threshold)
- **Throughput**: messages/second per topic
- **Partition skew**: imbalance across partitions
- **Replication lag**: replica replication delay

## Deliverables
- Robust Python Producer/Consumer (retry, DLQ)
- Documented Kafka Streams / Flink topology
- Cluster configuration (replication, retention, partitions)
- Monitoring dashboard (Confluent Control Center / Grafana)

## Output format
Specify: events/second volume · max tolerated latency · retention duration · required transformations · destination (DB, DWH, S3)
