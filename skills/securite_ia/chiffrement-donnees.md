# Skill — Chiffrement des Données & Protection de la Confidentialité IA
> Certifications : CISSP · AWS Security Specialty · AZ-500 · Google PCSE

## Objectif
Protéger les données sensibles utilisées par les systèmes IA : données d'entraînement, prompts, réponses et modèles.

## Chiffrement at Rest
```python
# AWS KMS — chiffrement transparent des données
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

# Chiffrement côté application (AES-256-GCM)
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

def encrypt_field(data: str, key: bytes) -> tuple[bytes, bytes]:
    aesgcm = AESGCM(key)
    nonce = os.urandom(12)  # 96-bit nonce unique par chiffrement
    ciphertext = aesgcm.encrypt(nonce, data.encode(), None)
    return nonce, ciphertext
```

## Chiffrement in Transit
```python
# TLS 1.3 configuration (uvicorn / nginx)
# uvicorn avec TLS
import uvicorn
uvicorn.run(
    app,
    ssl_keyfile="/etc/ssl/private/server.key",
    ssl_certfile="/etc/ssl/certs/server.crt",
    ssl_version=ssl.PROTOCOL_TLS_CLIENT,
    # TLS 1.3 seulement
    ssl_ciphers="TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256"
)
```

## Differential Privacy — protéger les données d'entraînement
```python
# Entraînement avec DP-SGD (TensorFlow Privacy)
import tensorflow_privacy as tf_privacy

optimizer = tf_privacy.DPKerasSGDOptimizer(
    l2_norm_clip=1.0,        # Clipping du gradient
    noise_multiplier=1.1,    # Bruit ajouté
    num_microbatches=256,
    learning_rate=0.01
)

# Calcul du budget de confidentialité (epsilon)
from tensorflow_privacy.privacy.analysis import compute_dp_sgd_privacy

epsilon, _ = compute_dp_sgd_privacy.compute_dp_sgd_privacy(
    n=60000,               # Taille du dataset
    batch_size=256,
    noise_multiplier=1.1,
    epochs=10,
    delta=1e-5
)
print(f"(ε, δ)-DP: ({epsilon:.2f}, 1e-5)")
# Epsilon < 3 : très forte protection
# Epsilon 3-10 : bonne protection
```

## Pseudonymisation et Anonymisation
```python
import hashlib
import re
from faker import Faker

fake = Faker('fr_FR')

def pseudonymize_conversation(text: str, user_id: str) -> str:
    # Remplacer le user_id par un hash cohérent (même hash → même pseudonyme)
    pseudo_id = hashlib.sha256(f"{user_id}:salt".encode()).hexdigest()[:12]
    
    # Détecter et remplacer les PII avec des expressions régulières
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

## Politique de rétention des données IA
| Données | Rétention | Suppression |
|---|---|---|
| Conversations utilisateurs | 90 jours | Automatique + droit à l'oubli |
| Logs de sécurité | 12 mois | Archivage WORM |
| Modèles en production | Durée de vie | Au décommissionnement |
| Données d'entraînement | 5 ans | Avec audit trail |
| API keys | Jusqu'à révocation | Sur demande |

## Livrables
- Architecture de chiffrement documentée
- Politique de gestion des clés (KMS)
- Rapport de conformité chiffrement
- Procédure de pseudonymisation des datasets

## Format de sortie
Précise : type de données (PII, santé, financières) · cloud provider · réglementation (RGPD, HDS, PCI-DSS) · niveau de sensibilité · contraintes de performance
