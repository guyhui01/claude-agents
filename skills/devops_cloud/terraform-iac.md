# Skill — Terraform Infrastructure as Code
> Certifications : HashiCorp Terraform Associate 003 (2026), AWS Solutions Architect Professional, Google Cloud Professional DevOps

## Objectif
Concevoir et opérer une infrastructure cloud reproductible avec Terraform — modules réutilisables, state management sécurisé, workflows GitOps via Terragrunt et gouvernance multi-comptes.

## Modules & Structure

### Structure de projet recommandée

```
infra/
├── modules/                  # Modules réutilisables
│   ├── eks-cluster/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── versions.tf
│   ├── rds-postgres/
│   └── vpc-standard/
├── environments/             # Terragrunt DRY
│   ├── terragrunt.hcl        # Root config
│   ├── dev/
│   │   └── terragrunt.hcl
│   ├── staging/
│   └── prod/
│       ├── terragrunt.hcl
│       ├── eks/
│       │   └── terragrunt.hcl
│       └── rds/
│           └── terragrunt.hcl
└── .github/workflows/
    └── terraform.yml
```

### Module VPC standard

```hcl
# modules/vpc-standard/main.tf
terraform {
  required_version = ">= 1.7.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.8.0"

  name = var.name
  cidr = var.cidr

  azs             = var.availability_zones
  private_subnets = var.private_subnet_cidrs
  public_subnets  = var.public_subnet_cidrs
  intra_subnets   = var.intra_subnet_cidrs   # Pour RDS, pas d'accès internet

  enable_nat_gateway     = true
  single_nat_gateway     = var.environment != "prod"
  one_nat_gateway_per_az = var.environment == "prod"

  enable_dns_hostnames = true
  enable_dns_support   = true

  # Tags pour Kubernetes
  public_subnet_tags = {
    "kubernetes.io/role/elb"                    = "1"
    "kubernetes.io/cluster/${var.cluster_name}" = "shared"
  }
  private_subnet_tags = {
    "kubernetes.io/role/internal-elb"           = "1"
    "kubernetes.io/cluster/${var.cluster_name}" = "shared"
  }

  tags = merge(var.tags, {
    Environment = var.environment
    ManagedBy   = "terraform"
  })
}
```

### Remote Backend S3 + DynamoDB

```hcl
# backend.tf (généré par Terragrunt)
terraform {
  backend "s3" {
    bucket         = "company-terraform-state-prod"
    key            = "prod/eks/terraform.tfstate"
    region         = "eu-west-1"
    encrypt        = true
    kms_key_id     = "arn:aws:kms:eu-west-1:123456789:key/mrk-xxxxx"
    dynamodb_table = "terraform-state-lock"

    # Assume role pour isolation compte
    role_arn = "arn:aws:iam::123456789:role/TerraformStateRole"
  }
}
```

### Terragrunt — Configuration DRY multi-env

```hcl
# environments/terragrunt.hcl (root)
locals {
  account_vars = read_terragrunt_config(find_in_parent_folders("account.hcl"))
  env_vars     = read_terragrunt_config(find_in_parent_folders("env.hcl"))

  account_id  = local.account_vars.locals.account_id
  environment = local.env_vars.locals.environment
  aws_region  = "eu-west-1"
}

remote_state {
  backend = "s3"
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
  config = {
    bucket         = "company-tf-state-${local.account_id}"
    key            = "${path_relative_to_include()}/terraform.tfstate"
    region         = local.aws_region
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<EOF
provider "aws" {
  region = "${local.aws_region}"
  default_tags {
    tags = {
      Environment = "${local.environment}"
      ManagedBy   = "terragrunt"
      Account     = "${local.account_id}"
    }
  }
}
EOF
}
```

```hcl
# environments/prod/eks/terragrunt.hcl
include "root" {
  path = find_in_parent_folders()
}

terraform {
  source = "../../../modules//eks-cluster"
}

dependency "vpc" {
  config_path = "../vpc"
  mock_outputs = {
    vpc_id          = "vpc-mock"
    private_subnets = ["subnet-mock1", "subnet-mock2"]
  }
}

inputs = {
  cluster_name    = "prod-cluster"
  cluster_version = "1.30"
  vpc_id          = dependency.vpc.outputs.vpc_id
  subnet_ids      = dependency.vpc.outputs.private_subnets

  node_groups = {
    general = {
      instance_types = ["m6i.xlarge"]
      min_size       = 3
      max_size       = 10
      desired_size   = 3
    }
    gpu = {
      instance_types = ["g5.xlarge"]
      min_size       = 0
      max_size       = 5
      desired_size   = 0
      taints = [{
        key    = "nvidia.com/gpu"
        value  = "true"
        effect = "NO_SCHEDULE"
      }]
    }
  }
}
```

## Workflow Plan/Apply & Gouvernance

### Pipeline GitHub Actions Terraform

```yaml
# .github/workflows/terraform.yml
name: Terraform

on:
  pull_request:
    paths: ["infra/**"]
  push:
    branches: [main]
    paths: ["infra/**"]

jobs:
  terraform-plan:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789:role/TerraformPlanRole
          aws-region: eu-west-1
      - uses: hashicorp/setup-terraform@v3
        with:
          terraform_version: 1.8.x
      - uses: gruntwork-io/terragrunt-action@v2
        with:
          tf_version: 1.8.x
          tg_version: 0.58.x
          tg_command: run-all plan --terragrunt-non-interactive
          tg_dir: infra/environments/prod
      - name: Post plan to PR
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              ...context.repo,
              issue_number: context.issue.number,
              body: `## Terraform Plan\n\`\`\`\n${process.env.PLAN_OUTPUT}\n\`\`\``
            })
```

### Commandes Terraform essentielles

```bash
# Initialisation avec migration de state
terraform init -migrate-state -backend-config=env/prod.hcl

# Plan avec output sauvegardé
terraform plan -out=tfplan -var-file=prod.tfvars

# Apply depuis plan sauvegardé (reproductible)
terraform apply tfplan

# Import ressource existante
terraform import aws_s3_bucket.existing company-bucket-prod

# State management
terraform state list
terraform state mv aws_instance.old aws_instance.new
terraform state rm aws_instance.to_delete

# Workspace pour environnements légers
terraform workspace new staging
terraform workspace select staging

# Taint pour forcer la recréation
terraform taint aws_instance.problematic
terraform plan  # Confirmer la recréation

# Visualiser le graphe de dépendances
terraform graph | dot -Tsvg > infra.svg
```

### Bonnes pratiques sécurité IaC

| Pratique | Outil | Commande |
|----------|-------|---------|
| Scan de sécurité IaC | Checkov | `checkov -d . --framework terraform` |
| Coûts estimés | Infracost | `infracost breakdown --path .` |
| Lint & style | TFLint | `tflint --recursive` |
| Formatting | Terraform fmt | `terraform fmt -recursive -check` |
| Drift detection | Driftctl | `driftctl scan` |
| Docs automatiques | terraform-docs | `terraform-docs markdown . > README.md` |

## Livrables
- Modules Terraform réutilisables avec variables/outputs documentés
- Configuration Terragrunt DRY multi-environnement / multi-compte
- Pipeline CI/CD avec plan automatique sur PR et apply protégé
- Remote state S3 chiffré + locking DynamoDB
- Rapport Checkov + estimation Infracost
- Documentation auto-générée des modules

## Format de sortie
Précise : cloud provider (AWS/GCP/Azure), environnements (dev/staging/prod), compte unique ou multi-comptes, services à provisionner (VPC, EKS, RDS, etc.), région(s) cible(s), contraintes de conformité (SOC2, PCI, HIPAA).
