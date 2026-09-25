# Skill — AI Infrastructure as Code (Terraform)
> Certifications: HashiCorp Terraform Associate

## Objective
Provision AI infrastructure (GPU instances, vector DB, LLM services) with Terraform.

## AI Terraform project structure
```
terraform/
├── main.tf          ← main resources
├── variables.tf     ← input variables
├── outputs.tf       ← exported values
├── providers.tf     ← provider configuration
└── modules/
    ├── gpu-cluster/ ← K8s cluster with GPU nodes
    ├── vector-db/   ← Qdrant or pgvector
    └── monitoring/  ← Grafana + Prometheus
```

## Example — AWS GPU Instance for vLLM
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

# Auto Scaling Group for high availability
resource "aws_autoscaling_group" "vllm_asg" {
  min_size         = 1
  max_size         = 4
  desired_capacity = var.environment == "prod" ? 2 : 1
  # ...
}
```

## Reusable AI modules
```hcl
# Vector DB module (Qdrant on ECS)
module "qdrant" {
  source         = "./modules/vector-db"
  instance_type  = "r6g.xlarge"  # Memory-optimized
  storage_gb     = 500
  environment    = var.environment
}

# LLM monitoring module
module "monitoring" {
  source          = "./modules/monitoring"
  grafana_version = "10.2"
  langfuse_url    = var.langfuse_url
}
```

## Variables and secrets
```hcl
# variables.tf
variable "anthropic_api_key" {
  description = "Anthropic API key"
  type        = string
  sensitive   = true  # Masked in the logs
}

# Use AWS Secrets Manager for secrets
data "aws_secretsmanager_secret_version" "llm_keys" {
  secret_id = "prod/llm-api-keys"
}
```

## Deliverables
- Modular, versioned Terraform infrastructure
- Secure state backend (S3 + DynamoDB lock)
- Environment variables (dev/staging/prod)
- Cost estimate (`terraform plan` + Infracost)

## Output format
Specify: cloud provider · required resources · environments (dev/prod) · target monthly budget
