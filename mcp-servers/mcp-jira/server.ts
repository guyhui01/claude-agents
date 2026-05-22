#!/usr/bin/env node
/**
 * MCP Server — Jira Integration
 * Expose les outils Jira à Claude Code CLI pour créer issues, backlog, epics
 * depuis les outputs des workflows WF-001, WF-002, WF-004
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";

const {
  JIRA_BASE_URL,
  JIRA_EMAIL,
  JIRA_API_TOKEN,
  JIRA_PROJECT_KEY = "PROJ",
  JIRA_STORY_POINTS_FIELD = "customfield_10016",
} = process.env;

if (!JIRA_BASE_URL || !JIRA_EMAIL || !JIRA_API_TOKEN) {
  process.stderr.write(
    "ERREUR : Variables manquantes — JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN\n"
  );
  process.exit(1);
}

const jira = axios.create({
  baseURL: `${JIRA_BASE_URL}/rest/api/3`,
  auth: { username: JIRA_EMAIL, password: JIRA_API_TOKEN },
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

/** Convertit un texte plain en Atlassian Document Format (ADF) */
function toAdf(text: string) {
  const paragraphs = (text || "").split(/\n{2,}/).filter(Boolean);
  return {
    version: 1,
    type: "doc",
    content: paragraphs.map((para) => ({
      type: "paragraph",
      content: [{ type: "text", text: para.trim() }],
    })),
  };
}

interface JiraIssue {
  key: string;
  fields: { summary: string; status: { name: string }; issuetype: { name: string } };
}

// ─── Définition des outils ───────────────────────────────────────────────────

const TOOLS = [
  {
    name: "jira_create_story",
    description:
      "Crée une User Story Jira depuis un output WF-001 (Cadrage Produit IA). " +
      "Utilise le projet défini dans JIRA_PROJECT_KEY.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "Titre de la User Story" },
        description: {
          type: "string",
          description: 'Format recommandé : "En tant que [persona], je veux [action] afin de [bénéfice]"',
        },
        acceptance_criteria: {
          type: "string",
          description: "Critères d'acceptation (Gherkin : Given / When / Then)",
        },
        story_points: { type: "number", description: "Estimation en story points" },
        epic_key: {
          type: "string",
          description: "Clé de l'Epic parent (optionnel, ex: PROJ-10)",
        },
        priority: {
          type: "string",
          enum: ["Highest", "High", "Medium", "Low", "Lowest"],
          description: "Priorité (défaut: Medium)",
        },
      },
      required: ["title"],
    },
  },
  {
    name: "jira_bulk_create_backlog",
    description:
      "Crée plusieurs User Stories en une seule opération depuis le backlog produit WF-001. " +
      "Idéal après la rédaction du backlog initial (8-15 US).",
    inputSchema: {
      type: "object",
      properties: {
        stories: {
          type: "array",
          description: "Liste des User Stories à créer",
          items: {
            type: "object",
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              story_points: { type: "number" },
              acceptance_criteria: { type: "string" },
              priority: {
                type: "string",
                enum: ["Highest", "High", "Medium", "Low", "Lowest"],
              },
            },
            required: ["title"],
          },
        },
        epic_key: {
          type: "string",
          description: "Epic parent commun à toutes les stories (optionnel)",
        },
      },
      required: ["stories"],
    },
  },
  {
    name: "jira_create_epic",
    description:
      "Crée un Epic Jira depuis les outputs WF-001 ou WF-002 (Delivery SAFe). " +
      "Un Epic regroupe plusieurs User Stories liées.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "Titre de l'Epic" },
        description: { type: "string", description: "Description et objectif de l'Epic" },
        epic_name: {
          type: "string",
          description: "Nom court affiché sur les stories enfants (défaut: titre tronqué)",
        },
      },
      required: ["title"],
    },
  },
  {
    name: "jira_get_project_info",
    description:
      "Récupère les métadonnées du projet Jira : boards, composants, membres. " +
      "Utile pour connaître les clés disponibles avant de créer des issues.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "jira_search_issues",
    description:
      "Recherche des issues Jira en JQL. Exemples : sprint actif, epics ouverts, stories par statut.",
    inputSchema: {
      type: "object",
      properties: {
        jql: {
          type: "string",
          description:
            'Requête JQL. Exemples : "project = PROJ AND sprint in openSprints()" / "issuetype = Epic AND status != Done"',
        },
        max_results: {
          type: "number",
          description: "Nombre max de résultats (défaut: 20)",
        },
      },
      required: ["jql"],
    },
  },
];

// ─── Serveur MCP ─────────────────────────────────────────────────────────────

const server = new Server(
  { name: "mcp-jira", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    switch (name) {
      // ── Créer une User Story ─────────────────────────────────────────────
      case "jira_create_story": {
        const fields: Record<string, unknown> = {
          project: { key: JIRA_PROJECT_KEY },
          issuetype: { name: "Story" },
          summary: args.title,
          priority: { name: (args.priority as string) || "Medium" },
        };
        if (args.description) fields["description"] = toAdf(args.description as string);
        if (args.story_points) fields[JIRA_STORY_POINTS_FIELD] = args.story_points;
        if (args.epic_key) fields["customfield_10014"] = args.epic_key; // Epic Link
        // Acceptance criteria dans le champ dédié si disponible
        if (args.acceptance_criteria) {
          fields["customfield_10006"] = args.acceptance_criteria;
        }

        const res = await jira.post("/issue", { fields });
        return {
          content: [
            {
              type: "text",
              text: [
                `✅ User Story créée : **${res.data.key}**`,
                `Titre : ${args.title}`,
                `URL   : ${JIRA_BASE_URL}/browse/${res.data.key}`,
                args.story_points ? `Points: ${args.story_points}` : "",
              ]
                .filter(Boolean)
                .join("\n"),
            },
          ],
        };
      }

      // ── Bulk : créer plusieurs stories ──────────────────────────────────
      case "jira_bulk_create_backlog": {
        const stories = args.stories as Array<{
          title: string;
          description?: string;
          story_points?: number;
          acceptance_criteria?: string;
          priority?: string;
        }>;

        const created: string[] = [];
        const failed: string[] = [];

        for (const story of stories) {
          try {
            const fields: Record<string, unknown> = {
              project: { key: JIRA_PROJECT_KEY },
              issuetype: { name: "Story" },
              summary: story.title,
              priority: { name: story.priority || "Medium" },
            };
            if (story.description) fields["description"] = toAdf(story.description);
            if (story.story_points) fields[JIRA_STORY_POINTS_FIELD] = story.story_points;
            if (args.epic_key) fields["customfield_10014"] = args.epic_key;

            const res = await jira.post("/issue", { fields });
            const pts = story.story_points ? ` (${story.story_points} pts)` : "";
            created.push(`${res.data.key}${pts} — ${story.title}`);
          } catch {
            failed.push(story.title);
          }
        }

        const lines = [
          `✅ ${created.length}/${stories.length} stories créées dans **${JIRA_PROJECT_KEY}** :`,
          ...created.map((s) => `  • ${s}`),
        ];
        if (failed.length > 0) {
          lines.push(`\n⚠️ Échecs (${failed.length}) :`, ...failed.map((s) => `  • ${s}`));
        }

        return { content: [{ type: "text", text: lines.join("\n") }] };
      }

      // ── Créer un Epic ────────────────────────────────────────────────────
      case "jira_create_epic": {
        const epicName = (args.epic_name as string) || (args.title as string).slice(0, 50);
        const fields: Record<string, unknown> = {
          project: { key: JIRA_PROJECT_KEY },
          issuetype: { name: "Epic" },
          summary: args.title,
          customfield_10011: epicName, // Epic Name (champ obligatoire sur Jira Cloud)
        };
        if (args.description) fields["description"] = toAdf(args.description as string);

        const res = await jira.post("/issue", { fields });
        return {
          content: [
            {
              type: "text",
              text: [
                `✅ Epic créé : **${res.data.key}**`,
                `Titre : ${args.title}`,
                `URL   : ${JIRA_BASE_URL}/browse/${res.data.key}`,
                `\nUtilise epic_key: "${res.data.key}" pour lier tes stories à cet epic.`,
              ].join("\n"),
            },
          ],
        };
      }

      // ── Info projet ──────────────────────────────────────────────────────
      case "jira_get_project_info": {
        const [projRes, boardRes] = await Promise.allSettled([
          jira.get(`/project/${JIRA_PROJECT_KEY}`),
          jira.get(`/board?projectKeyOrId=${JIRA_PROJECT_KEY}`),
        ]);

        const proj =
          projRes.status === "fulfilled" ? projRes.value.data : null;
        const boards =
          boardRes.status === "fulfilled"
            ? boardRes.value.data.values?.map(
                (b: { id: number; name: string; type: string }) =>
                  `  • Board ${b.id}: ${b.name} (${b.type})`
              ) || []
            : ["  (boards inaccessibles — vérifier les permissions Jira Software)"];

        const lines = proj
          ? [
              `Projet : **${proj.name}** (${proj.key})`,
              `Type   : ${proj.projectTypeKey}`,
              `Lead   : ${proj.lead?.displayName || "—"}`,
              ``,
              `Boards :`,
              ...boards,
              ``,
              `Conseil : lance 'jira_search_issues' avec JQL "project = ${JIRA_PROJECT_KEY} AND sprint in openSprints()" pour voir le sprint actif.`,
            ]
          : [`❌ Projet ${JIRA_PROJECT_KEY} introuvable — vérifier JIRA_PROJECT_KEY`];

        return { content: [{ type: "text", text: lines.join("\n") }] };
      }

      // ── Recherche JQL ────────────────────────────────────────────────────
      case "jira_search_issues": {
        const res = await jira.get("/search", {
          params: {
            jql: args.jql,
            maxResults: (args.max_results as number) || 20,
            fields: "summary,status,assignee,issuetype,priority," + JIRA_STORY_POINTS_FIELD,
          },
        });

        if (res.data.issues.length === 0) {
          return {
            content: [{ type: "text", text: "Aucune issue trouvée pour cette requête JQL." }],
          };
        }

        const lines = [
          `**${res.data.total}** issue(s) — JQL : \`${args.jql}\``,
          "",
          ...res.data.issues.map((i: JiraIssue) => {
            const pts = (i.fields as Record<string, unknown>)[JIRA_STORY_POINTS_FIELD];
            const ptsStr = pts ? ` (${pts} pts)` : "";
            return `• **${i.key}** [${i.fields.status.name}]${ptsStr} — ${i.fields.summary}`;
          }),
        ];

        if (res.data.total > res.data.issues.length) {
          lines.push(
            `\n… et ${res.data.total - res.data.issues.length} autres. Augmente max_results pour voir la suite.`
          );
        }

        return { content: [{ type: "text", text: lines.join("\n") }] };
      }

      default:
        throw new Error(`Outil inconnu : ${name}`);
    }
  } catch (err: unknown) {
    const msg = axios.isAxiosError(err)
      ? `Erreur Jira API ${err.response?.status} : ${JSON.stringify(err.response?.data?.errors || err.response?.data?.errorMessages || err.message)}`
      : err instanceof Error
        ? err.message
        : String(err);
    return { content: [{ type: "text", text: `❌ ${msg}` }], isError: true };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
