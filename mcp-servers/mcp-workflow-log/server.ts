#!/usr/bin/env node
/**
 * MCP Server — Workflow Log
 * Journal de bord des missions : trace chaque workflow exécuté, pour quel client,
 * avec quels livrables. Utile pour le reporting mensuel et la facturation.
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOG_FILE = resolve(
  process.env.WORKFLOW_LOG_PATH || resolve(__dirname, "workflow_log.json")
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface WorkflowEntry {
  id: string;
  workflow_id: string; // WF-001 à WF-005
  workflow_name: string;
  client: string;
  date: string; // ISO 8601
  duration_min?: number;
  deliverables: string[];
  agents_used: string[];
  notes?: string;
  status: "en_cours" | "terminé" | "archivé";
  jira_keys?: string[];       // Issues Jira créées
  confluence_urls?: string[]; // Pages Confluence publiées
}

interface LogFile {
  entries: WorkflowEntry[];
  last_updated: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function loadLog(): LogFile {
  if (!existsSync(LOG_FILE)) return { entries: [], last_updated: new Date().toISOString() };
  try {
    return JSON.parse(readFileSync(LOG_FILE, "utf-8")) as LogFile;
  } catch {
    return { entries: [], last_updated: new Date().toISOString() };
  }
}

function saveLog(log: LogFile): void {
  log.last_updated = new Date().toISOString();
  writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), "utf-8");
}

function generateId(): string {
  return `WF-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

const WF_NAMES: Record<string, string> = {
  "WF-001": "Cadrage Produit IA",
  "WF-002": "Delivery Agile SAFe",
  "WF-003": "Lancement Application IA",
  "WF-004": "Mission Conseil IA",
  "WF-005": "Veille Stratégique & Growth",
};

// ─── Définition des outils ───────────────────────────────────────────────────

const TOOLS = [
  {
    name: "log_workflow_run",
    description:
      "Enregistre une exécution de workflow dans le journal de bord. " +
      "À appeler en fin de workflow pour tracer la mission et les livrables produits.",
    inputSchema: {
      type: "object",
      properties: {
        workflow_id: {
          type: "string",
          enum: ["WF-001", "WF-002", "WF-003", "WF-004", "WF-005"],
          description: "Identifiant du workflow exécuté",
        },
        client: { type: "string", description: "Nom du client ou contexte (ex: secteur télécom, Mission interne)" },
        deliverables: {
          type: "array",
          items: { type: "string" },
          description: "Liste des livrables produits (ex: Backlog 12 US, Roadmap IA 12 mois)",
        },
        agents_used: {
          type: "array",
          items: { type: "string" },
          description: "Agents mobilisés (ex: BUSINESS-ANALYST, PO-SCRUM)",
        },
        duration_min: { type: "number", description: "Durée réelle en minutes" },
        notes: { type: "string", description: "Notes libres sur le contexte ou les décisions prises" },
        jira_keys: {
          type: "array",
          items: { type: "string" },
          description: "Clés des issues Jira créées (ex: PROJ-42, PROJ-43)",
        },
        confluence_urls: {
          type: "array",
          items: { type: "string" },
          description: "URLs des pages Confluence publiées",
        },
        status: {
          type: "string",
          enum: ["en_cours", "terminé"],
          description: "Statut (défaut: terminé)",
        },
      },
      required: ["workflow_id", "client", "deliverables"],
    },
  },
  {
    name: "get_workflow_history",
    description:
      "Retourne l'historique récent des workflows exécutés. " +
      "Filtrable par workflow ID, client ou période.",
    inputSchema: {
      type: "object",
      properties: {
        workflow_id: {
          type: "string",
          description: "Filtrer par workflow (ex: WF-004). Laisse vide pour tout voir.",
        },
        client: { type: "string", description: "Filtrer par client (recherche partielle)" },
        last_n: { type: "number", description: "Nombre d'entrées récentes à retourner (défaut: 10)" },
        month: {
          type: "string",
          description: "Filtrer par mois (format: YYYY-MM, ex: 2026-05)",
        },
      },
    },
  },
  {
    name: "get_client_history",
    description:
      "Retourne tous les workflows exécutés pour un client donné. " +
      "Utile pour préparer un bilan de mission ou une facture.",
    inputSchema: {
      type: "object",
      properties: {
        client: { type: "string", description: "Nom du client (recherche partielle, insensible à la casse)" },
      },
      required: ["client"],
    },
  },
  {
    name: "get_monthly_summary",
    description:
      "Génère un résumé mensuel des missions : nombre de workflows, clients, livrables. " +
      "Format prêt à inclure dans un reporting d'activité ou une note CODIR.",
    inputSchema: {
      type: "object",
      properties: {
        month: {
          type: "string",
          description: "Mois à résumer (format: YYYY-MM, ex: 2026-05). Défaut: mois en cours.",
        },
      },
    },
  },
];

// ─── Serveur MCP ─────────────────────────────────────────────────────────────

const server = new Server(
  { name: "mcp-workflow-log", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    switch (name) {
      // ── Logger une exécution ──────────────────────────────────────────────
      case "log_workflow_run": {
        const log = loadLog();
        const wfId = args.workflow_id as string;
        const entry: WorkflowEntry = {
          id: generateId(),
          workflow_id: wfId,
          workflow_name: WF_NAMES[wfId] || wfId,
          client: args.client as string,
          date: new Date().toISOString(),
          deliverables: (args.deliverables as string[]) || [],
          agents_used: (args.agents_used as string[]) || [],
          duration_min: args.duration_min as number | undefined,
          notes: args.notes as string | undefined,
          status: (args.status as "en_cours" | "terminé") || "terminé",
          jira_keys: args.jira_keys as string[] | undefined,
          confluence_urls: args.confluence_urls as string[] | undefined,
        };
        log.entries.push(entry);
        saveLog(log);

        const durationStr = entry.duration_min ? ` | Durée: ${entry.duration_min} min` : "";
        const jiraStr = entry.jira_keys?.length
          ? `\nJira   : ${entry.jira_keys.join(", ")}`
          : "";
        const confStr = entry.confluence_urls?.length
          ? `\nConf.  : ${entry.confluence_urls.length} page(s) publiée(s)`
          : "";

        return {
          content: [
            {
              type: "text",
              text: [
                `✅ **${entry.workflow_name}** enregistré`,
                `Client : ${entry.client}${durationStr}`,
                `Livrables : ${entry.deliverables.join(" · ")}`,
                jiraStr,
                confStr,
                `\nID entrée : ${entry.id}`,
              ]
                .filter(Boolean)
                .join("\n"),
            },
          ],
        };
      }

      // ── Historique des workflows ──────────────────────────────────────────
      case "get_workflow_history": {
        const log = loadLog();
        let entries = [...log.entries];

        if (args.workflow_id) {
          entries = entries.filter((e) => e.workflow_id === args.workflow_id);
        }
        if (args.client) {
          const q = (args.client as string).toLowerCase();
          entries = entries.filter((e) => e.client.toLowerCase().includes(q));
        }
        if (args.month) {
          entries = entries.filter((e) => e.date.startsWith(args.month as string));
        }

        // Trier par date décroissante et limiter
        entries = entries
          .sort((a, b) => b.date.localeCompare(a.date))
          .slice(0, (args.last_n as number) || 10);

        if (entries.length === 0) {
          return { content: [{ type: "text", text: "Aucune entrée dans le journal pour ces critères." }] };
        }

        const lines = [
          `**${entries.length}** exécution(s) dans le journal :`,
          "",
          ...entries.map((e) => {
            const date = new Date(e.date).toLocaleDateString("fr-FR");
            const dur = e.duration_min ? ` (${e.duration_min} min)` : "";
            return [
              `**${e.workflow_id}** — ${e.workflow_name} | ${e.client} | ${date}${dur}`,
              `  Livrables : ${e.deliverables.join(" · ")}`,
              e.jira_keys?.length ? `  Jira : ${e.jira_keys.join(", ")}` : "",
            ]
              .filter(Boolean)
              .join("\n");
          }),
        ];

        return { content: [{ type: "text", text: lines.join("\n") }] };
      }

      // ── Historique par client ─────────────────────────────────────────────
      case "get_client_history": {
        const log = loadLog();
        const q = (args.client as string).toLowerCase();
        const entries = log.entries
          .filter((e) => e.client.toLowerCase().includes(q))
          .sort((a, b) => b.date.localeCompare(a.date));

        if (entries.length === 0) {
          return {
            content: [
              { type: "text", text: `Aucun workflow enregistré pour le client "${args.client}".` },
            ],
          };
        }

        const totalDuration = entries.reduce((sum, e) => sum + (e.duration_min || 0), 0);
        const wfCounts = entries.reduce<Record<string, number>>((acc, e) => {
          acc[e.workflow_id] = (acc[e.workflow_id] || 0) + 1;
          return acc;
        }, {});

        const lines = [
          `**Historique client : ${args.client}**`,
          `Missions : ${entries.length} | Durée totale : ${totalDuration} min`,
          `Workflows : ${Object.entries(wfCounts)
            .map(([k, v]) => `${k} x${v}`)
            .join(", ")}`,
          "",
          ...entries.map((e) => {
            const date = new Date(e.date).toLocaleDateString("fr-FR");
            return `${date} | **${e.workflow_id}** — ${e.deliverables.join(" · ")}`;
          }),
        ];

        return { content: [{ type: "text", text: lines.join("\n") }] };
      }

      // ── Résumé mensuel ────────────────────────────────────────────────────
      case "get_monthly_summary": {
        const month =
          (args.month as string) || new Date().toISOString().slice(0, 7);
        const log = loadLog();
        const entries = log.entries.filter((e) => e.date.startsWith(month));

        if (entries.length === 0) {
          return {
            content: [{ type: "text", text: `Aucun workflow enregistré en ${month}.` }],
          };
        }

        const clients = [...new Set(entries.map((e) => e.client))];
        const wfCounts = entries.reduce<Record<string, number>>((acc, e) => {
          acc[e.workflow_id] = (acc[e.workflow_id] || 0) + 1;
          return acc;
        }, {});
        const allDeliverables = entries.flatMap((e) => e.deliverables);
        const totalDuration = entries.reduce((sum, e) => sum + (e.duration_min || 0), 0);
        const jiraCount = entries.reduce(
          (sum, e) => sum + (e.jira_keys?.length || 0),
          0
        );
        const confCount = entries.reduce(
          (sum, e) => sum + (e.confluence_urls?.length || 0),
          0
        );

        const [year, mon] = month.split("-");
        const monthName = new Date(
          parseInt(year),
          parseInt(mon) - 1
        ).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

        const lines = [
          `## Résumé d'activité — ${monthName}`,
          "",
          `**Missions** : ${entries.length} workflow(s) exécuté(s)`,
          `**Clients**  : ${clients.length} — ${clients.join(", ")}`,
          `**Durée**    : ${totalDuration} min (${Math.round(totalDuration / 60 * 10) / 10}h)`,
          "",
          `**Répartition workflows :**`,
          ...Object.entries(wfCounts).map(
            ([k, v]) => `  • ${k} ${WF_NAMES[k] || ""} : ${v} exécution(s)`
          ),
          "",
          `**Livrables produits** : ${allDeliverables.length}`,
          ...allDeliverables.slice(0, 10).map((d) => `  • ${d}`),
          allDeliverables.length > 10 ? `  … et ${allDeliverables.length - 10} autres` : "",
          "",
          jiraCount > 0 ? `**Jira** : ${jiraCount} issues créées` : "",
          confCount > 0 ? `**Confluence** : ${confCount} pages publiées` : "",
        ].filter((l) => l !== undefined && l !== null);

        return { content: [{ type: "text", text: lines.join("\n") }] };
      }

      default:
        throw new Error(`Outil inconnu : ${name}`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { content: [{ type: "text", text: `❌ ${msg}` }], isError: true };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
