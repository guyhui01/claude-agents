# Skill — Architecture AWS pour Projets IA/Data
> Certifications : AWS Solutions Architect Professional (SAP-C02 2026), AWS ML Specialty, AWS DevOps Professional, Well-Architected Framework

## Objectif
Concevoir des architectures AWS robustes et économiques pour les workloads IA/Data, en appliquant le Well-Architected Framework sur les 6 pilliers — avec focus sur EKS, Bedrock, SageMaker et les patterns data lakehouse.

## Services Clés & Patterns

### Architecture Data Lakehouse sur AWS

```
┌─────────────────────────────────────────────────────────────┐
│                      DATA SOURCES                           │
│  RDS/Aurora ──► DMS   Kafka/MSK   S3 (raw)   APIs externes │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                   INGESTION & STREAMING                      │
│   Kinesis Data Streams ──► Kinesis Firehose ──► S3          │
│   MSK (Kafka) ──► Lambda (Consumer) ──► S3                  │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                   DATA LAKE (S3 + Lake Formation)            │
│   s3://datalake-prod/                                        │
│   ├── raw/          (données brutes, partitionnées par date) │
│   ├── curated/      (transformées, format Parquet/Iceberg)   │
│   └── aggregated/   (prêtes à la consommation analytique)   │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│              TRANSFORM & ML (Glue + SageMaker)              │
│   AWS Glue ETL ──► Iceberg Tables ──► Athena / Redshift     │
│   SageMaker Feature Store ──► SageMaker Training/Inference  │
│   Bedrock (LLM) ──► API Gateway ──► Applications            │
└─────────────────────────────────────────────────────────────┘
```

### Infrastructure EKS avec Terraform

```hcl
# eks-cluster.tf
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "ai-platform-prod"
  cluster_version = "1.30"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = false  # VPN uniquement

  # Encryption du cluster avec KMS
  cluster_encryption_config = {
    resources        = ["secrets"]
    provider_key_arn = aws_kms_key.eks.arn
  }

  # Add-ons managés par AWS
  cluster_addons = {
    coredns                = { most_recent = true }
    kube-proxy             = { most_recent = true }
    vpc-cni                = { most_recent = true }
    aws-ebs-csi-driver     = { most_recent = true }
    aws-efs-csi-driver     = { most_recent = true }
  }

  eks_managed_node_groups = {
    # Noeud général
    general = {
      instance_types = ["m6i.2xlarge", "m6a.2xlarge"]
      capacity_type  = "ON_DEMAND"
      min_size       = 3
      max_size       = 12
      desired_size   = 3
      disk_size      = 100
    }
    # Noeud GPU pour inférence ML
    inference_gpu = {
      instance_types = ["g5.2xlarge"]
      capacity_type  = "SPOT"
      min_size       = 0
      max_size       = 8
      desired_size   = 0
      taints = [{
        key    = "nvidia.com/gpu"
        value  = "true"
        effect = "NO_SCHEDULE"
      }]
      labels = { workload = "ml-inference" }
    }
    # Karpenter fallback sur Graviton (économique)
    graviton = {
      instance_types = ["m7g.xlarge", "m7g.2xlarge"]
      capacity_type  = "SPOT"
      ami_type       = "AL2_ARM_64"
      min_size       = 0
      max_size       = 20
      desired_size   = 0
    }
  }
}
```

### Amazon Bedrock — Intégration IA

```python
# bedrock_client.py
import boto3
import json
from typing import Iterator

class BedrockClient:
    def __init__(self, region: str = "us-east-1"):
        self.client = boto3.client("bedrock-runtime", region_name=region)
        self.agent_client = boto3.client("bedrock-agent-runtime", region_name=region)

    def invoke_with_streaming(
        self,
        prompt: str,
        model_id: str = "anthropic.claude-sonnet-4-6",
        max_tokens: int = 4096,
    ) -> Iterator[str]:
        """Invocation Bedrock avec streaming."""
        body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": max_tokens,
            "messages": [{"role": "user", "content": prompt}],
        })
        response = self.client.invoke_model_with_response_stream(
            modelId=model_id,
            body=body,
            contentType="application/json",
        )
        for event in response["body"]:
            chunk = json.loads(event["chunk"]["bytes"])
            if chunk["type"] == "content_block_delta":
                yield chunk["delta"].get("text", "")

    def invoke_agent(
        self,
        agent_id: str,
        agent_alias_id: str,
        session_id: str,
        input_text: str,
    ) -> str:
        """Invoquer un Bedrock Agent (RAG + tools)."""
        response = self.agent_client.invoke_agent(
            agentId=agent_id,
            agentAliasId=agent_alias_id,
            sessionId=session_id,
            inputText=input_text,
            enableTrace=True,
        )
        completion = ""
        for event in response["completion"]:
            if "chunk" in event:
                completion += event["chunk"]["bytes"].decode()
        return completion
```

### SageMaker MLflow — Training Pipeline

```python
# sagemaker_training.py
import sagemaker
from sagemaker.pytorch import PyTorch
from sagemaker.experiments import Run

session = sagemaker.Session()
role = "arn:aws:iam::123456789:role/SageMakerExecutionRole"

# Lancer un training job avec tracking MLflow
with Run(experiment_name="fine-tuning-llm", sagemaker_session=session) as run:
    estimator = PyTorch(
        entry_point="train.py",
        source_dir="./src",
        role=role,
        instance_type="ml.p4d.24xlarge",  # 8x A100
        instance_count=1,
        framework_version="2.3",
        py_version="py311",
        hyperparameters={
            "epochs": 3,
            "learning-rate": 2e-5,
            "batch-size": 16,
            "model-name": "meta-llama/Llama-3-8b",
        },
        environment={
            "MLFLOW_TRACKING_URI": "arn:aws:sagemaker:...:mlflow-tracking-server/prod",
        },
        checkpoint_s3_uri="s3://ml-checkpoints-prod/llm-training/",
    )
    estimator.fit({
        "train": "s3://ml-datasets-prod/train/",
        "validation": "s3://ml-datasets-prod/val/",
    })
```

## Well-Architected Framework — Checklist IA/Data

| Pilier | Points clés |
|--------|------------|
| Operational Excellence | IaC Terraform, CI/CD pipelines, runbooks, chaos engineering |
| Security | IAM least privilege, KMS encryption at rest/transit, VPC endpoints, GuardDuty |
| Reliability | Multi-AZ, Auto Scaling, backup S3 versioning, RDS Multi-AZ |
| Performance | Graviton3 pour CPU, GPU instances pour ML, ElastiCache, Spot pour training |
| Cost Optimization | Reserved Instances (prod), Spot (ML training), S3 Intelligent-Tiering, rightsizing |
| Sustainability | Graviton (40% moins énergie), régions bas carbone, S3 Glacier pour cold data |

### Pattern IAM — Moindre privilège pour SageMaker

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::ml-datasets-prod",
        "arn:aws:s3:::ml-datasets-prod/*",
        "arn:aws:s3:::ml-checkpoints-prod/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": ["bedrock:InvokeModel"],
      "Resource": "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-sonnet-4-6*"
    },
    {
      "Effect": "Deny",
      "Action": "*",
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {"aws:RequestedRegion": ["eu-west-1", "us-east-1"]}
      }
    }
  ]
}
```

## Livrables
- Architecture diagram AWS (Draw.io / Lucidchart)
- Modules Terraform pour EKS + RDS + S3 + IAM
- Pipeline SageMaker MLOps de bout en bout
- Intégration Bedrock avec streaming et agents
- Rapport Well-Architected Review
- Estimation de coûts (AWS Pricing Calculator + Infracost)

## Format de sortie
Précise : cas d'usage IA/data (LLM, MLOps, data platform), régions AWS cibles, contraintes de conformité (RGPD, SOC2, HIPAA), budget mensuel estimé, équipe (taille, expertise), services déjà en place.
