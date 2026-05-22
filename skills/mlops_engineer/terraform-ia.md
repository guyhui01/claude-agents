# Skill — Infrastructure as Code IA (Terraform)
> Certifications : HashiCorp Terraform Associate

## Objectif
Provisionner l'infrastructure IA (GPU instances, vector DB, services LLM) avec Terraform.

## Structure de projet Terraform IA
```
terraform/
├── main.tf          ← ressources principales
├── variables.tf     ← variables d'entrée
├── outputs.tf       ← valeurs exportées
├── providers.tf     ← configuration des providers
└── modules/
    ├── gpu-cluster/ ← cluster K8s avec nœuds GPU
    ├── vector-db/   ← Qdrant ou pgvector
    └── monitoring/  ← Grafana + Prometheus
```

## Exemple — GPU Instance AWS pour vLLM
```hcl
# providers.tf
terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
  backend "s3" {
    bucket = "terraform-state-ia"
    key    = "prod/llm-serving"
    region = "eu-west-1"
  }
}

# main.tf
resource "aws_instance" "vllm_server" {
  ami           = "ami-0c55b159cbfafe1f0"  # Deep Learning AMI
  instance_type = "g5.xlarge"               # A10G GPU 24GB VRAM
  subnet_id     = aws_subnet.private.id

  root_block_device {
    volume_size = 100
    volume_type = "gp3"
  }

  tags = {
    Name        = "vllm-production"
    Environment = var.environment
    CostCenter  = "ia-platform"
  }

  user_data = templatefile("scripts/install_vllm.sh", {
    model_id = var.llm_model_id
  })
}

# Auto Scaling Group pour haute dispo
resource "aws_autoscaling_group" "vllm_asg" {
  min_size         = 1
  max_size         = 4
  desired_capacity = var.environment == "prod" ? 2 : 1
  # ...
}
```

## Modules réutilisables IA
```hcl
# Module vector DB (Qdrant sur ECS)
module "qdrant" {
  source         = "./modules/vector-db"
  instance_type  = "r6g.xlarge"  # Optimisé mémoire
  storage_gb     = 500
  environment    = var.environment
}

# Module monitoring LLM
module "monitoring" {
  source          = "./modules/monitoring"
  grafana_version = "10.2"
  langfuse_url    = var.langfuse_url
}
```

## Variables et secrets
```hcl
# variables.tf
variable "anthropic_api_key" {
  description = "Clé API Anthropic"
  type        = string
  sensitive   = true  # Masqué dans les logs
}

# Utiliser AWS Secrets Manager pour les secrets
data "aws_secretsmanager_secret_version" "llm_keys" {
  secret_id = "prod/llm-api-keys"
}
```

## Livrables
- Infrastructure Terraform modulaire et versionée
- State backend sécurisé (S3 + DynamoDB lock)
- Variables d'environnement (dev/staging/prod)
- Estimation de coût (`terraform plan` + Infracost)

## Format de sortie
Précise : cloud provider · ressources nécessaires · environnements (dev/prod) · budget mensuel cible
