# Skill — Data Encryption & AI Privacy Protection
> Certifications: CISSP · AWS Security Specialty · AZ-500 · Google PCSE

## Objective
Protect the sensitive data used by AI systems: training data, prompts, responses and models.

## Encryption at Rest
```python
# AWS KMS — transparent data encryption
import boto3
from botocore.config import Config

kms = boto3.client('kms', config=Config(region_name='eu-west-1'))

def encrypt_sensitive_data(plaintext: str, key_alias: str) -> dict:
    response = kms.encrypt(
        KeyId=f'alias/{key_alias}',
        Plaintext=plaintext.encode(),
        EncryptionContext={
            'service': 'llm-conversation',
            'environment': 'production'
        }
    )
    return {
        'ciphertext': base64.b64encode(response['CiphertextBlob']).decode(),
        'key_id': response['KeyId']
    }

# Application-side encryption (AES-256-GCM)
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

def encrypt_field(data: str, key: bytes) -> tuple[bytes, bytes]:
    aesgcm = AESGCM(key)
    nonce = os.urandom(12)  # 96-bit nonce, unique per encryption
    ciphertext = aesgcm.encrypt(nonce, data.encode(), None)
    return nonce, ciphertext
```

## Encryption in Transit
```python
# TLS 1.3 configuration (uvicorn / nginx)
# uvicorn with TLS
import uvicorn
uvicorn.run(
    app,
    ssl_keyfile="/etc/ssl/private/server.key",
    ssl_certfile="/etc/ssl/certs/server.crt",
    ssl_version=ssl.PROTOCOL_TLS_CLIENT,
    # TLS 1.3 only
    ssl_ciphers="TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256"
)
```

## Differential Privacy — protecting training data
```python
# Training with DP-SGD (TensorFlow Privacy)
import tensorflow_privacy as tf_privacy

optimizer = tf_privacy.DPKerasSGDOptimizer(
    l2_norm_clip=1.0,        # Gradient clipping
    noise_multiplier=1.1,    # Added noise
    num_microbatches=256,
    learning_rate=0.01
)

# Privacy budget computation (epsilon)
from tensorflow_privacy.privacy.analysis import compute_dp_sgd_privacy

epsilon, _ = compute_dp_sgd_privacy.compute_dp_sgd_privacy(
    n=60000,               # Dataset size
    batch_size=256,
    noise_multiplier=1.1,
    epochs=10,
    delta=1e-5
)
print(f"(ε, δ)-DP: ({epsilon:.2f}, 1e-5)")
# Epsilon < 3: very strong protection
# Epsilon 3-10: good protection
```

## Pseudonymization and Anonymization
```python
import hashlib
import re
from faker import Faker

fake = Faker('fr_FR')

def pseudonymize_conversation(text: str, user_id: str) -> str:
    # Replace the user_id with a consistent hash (same hash → same pseudonym)
    pseudo_id = hashlib.sha256(f"{user_id}:salt".encode()).hexdigest()[:12]
    
    # Detect and replace PII with regular expressions
    text = re.sub(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
                  '[EMAIL]', text)
    text = re.sub(r'\b(\+33|0)[1-9](\d{2}){4}\b', '[PHONE]', text)
    text = re.sub(r'\b\d{1,2}/\d{1,2}/\d{4}\b', '[DATE]', text)
    
    return text

# Microsoft Presidio — NER-based PII detection
from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine

analyzer = AnalyzerEngine()
anonymizer = AnonymizerEngine()

def anonymize_with_presidio(text: str, language: str = "fr") -> str:
    results = analyzer.analyze(text=text, language=language)
    return anonymizer.anonymize(text=text, analyzer_results=results).text
```

## AI data retention policy
| Data | Retention | Deletion |
|---|---|---|
| User conversations | 90 days | Automatic + right to be forgotten |
| Security logs | 12 months | WORM archiving |
| Production models | Lifetime | At decommissioning |
| Training data | 5 years | With audit trail |
| API keys | Until revocation | On request |

## Deliverables
- Documented encryption architecture
- Key management policy (KMS)
- Encryption compliance report
- Dataset pseudonymization procedure

## Output format
Specify: data type (PII, health, financial) · cloud provider · regulation (GDPR, HDS, PCI-DSS) · sensitivity level · performance constraints
