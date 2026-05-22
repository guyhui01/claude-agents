#!/usr/bin/env node
/**
 * MCP Server — Confluence Integration
 * Publie les livrables des workflows (WF-004, WF-001, WF-002) dans Confluence
 * depuis Claude Code CLI
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";

const {
  CONFLUENCE_BASE_URL,
  CONFLUENCE_EMAIL,
  CONFLUENCE_API_TOKEN,
  CONFLUENCE_DEFAULT_SPACE = "",
} = process.env;

if (!CONFLUENCE_BASE_URL || !CONFLUENCE_EMAIL || !CONFLUENCE_API_TOKEN) {
  process.stderr.write(
    "ERREUR : Variables manquantes — CONFLUENCE_BASE_URL, CONFLUENCE_EMAIL, CONFLUENCE_API_TOKEN\n"
  );
  process.exit(1);
}

const confluence = axios.create({
  baseURL: `${CONFLUENCE_BASE_URL}/wiki/rest/api`,
  auth: { username: CONFLUENCE_EMAIL, password: CONFLUENCE_API_TOKEN },
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

// ─── Conversion Markdown → Confluence Storage Format (XHTML) ─────────────────

function markdownToStorage(md: string): string {
  return (
    md
      // Blocs de code (traiter avant les inline)
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        (_, lang, code) =>
          `<ac:structured-macro ac:name="code">` +
          `<ac:parameter ac:name="language">${lang || "text"}</ac:parameter>` +
          `<ac:plain-text-body><![CDATA[${code.trim()}]]></ac:plain-text-body>` +
          `</ac:structured-macro>`
      )
      // Titres
      .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/^# (.+)$/gm, "<h1>$1</h1>")
      // Gras et italique
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // Code inline
      .replace(/`([^`\n]+)`/g, "<code>$1</code>")
      // Liens
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
      // Séparateur
      .replace(/^---+$/gm, "<hr/>")
      // Listes non ordonnées (groupées)
      .replace(/(^- .+$\n?)+/gm, (block) => {
        const items = block
          .trim()
          .split("\n")
          .map((line) => `<li>${line.replace(/^- /, "")}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      })
      // Listes ordonnées (groupées)
      .replace(/(^\d+\. .+$\n?)+/gm, (block) => {
        const items = block
          .trim()
          .split("\n")
          .map((line) => `<li>${line.replace(/^\d+\. /, "")}</li>`)
          .join("");
        return `<ol>${items}</ol>`;
      })
      // Blocs de citation
      .replace(/^> (.+)$/gm, "<blockquote><p>$1</p></blockquote>")
      // Paragraphes (lignes non déjà balisées et non vides)
      .replace(
        /^(?!<[huolpbcaetids]|\s*$)(.+)$/gm,
        "<p>$1</p>"
      )
      // Nettoyer les lignes vides multiples
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

interface ConfluencePage {
  id: string;
  title: string;
  _links: { webui: string };
  version: { number: number };
}

// ─── Définition des outils ───────────────────────────────────────────────────

const TOOLS = [
  {
    name: "confluence_create_page",
    description:
      "Crée une nouvelle page Confluence depuis un contenu Markdown. " +
      "Parfait pour publier les livrables WF-004 (rapport conseil), WF-001 (backlog), WF-002 (PI objectives).",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "Titre de la page" },
        content: {
          type: "string",
          description: "Contenu en Markdown — sera converti en format Confluence automatiquement",
        },
        space_key: {
          type: "string",
          description: `Clé de l'espace Confluence (ex: PROJ, TEAM, DOC). Défaut: ${CONFLUENCE_DEFAULT_SPACE || "à renseigner"}`,
        },
        parent_title: {
          type: "string",
          description: "Titre de la page parente (optionnel — crée à la racine de l'espace si absent)",
        },
      },
      required: ["title", "content"],
    },
  },
  {
    name: "confluence_update_page",
    description:
      "Met à jour le contenu d'une page Confluence existante. " +
      "Incrémente automatiquement la version.",
    inputSchema: {
      type: "object",
      properties: {
        page_id: { type: "string", description: "ID de la page à mettre à jour" },
        title: { type: "string", description: "Nouveau titre (laisser vide pour conserver l'actuel)" },
        content: { type: "string", description: "Nouveau contenu en Markdown" },
      },
      required: ["page_id", "content"],
    },
  },
  {
    name: "confluence_search_page",
    description:
      "Recherche des pages Confluence par titre ou mots-clés. " +
      "Retourne les IDs nécessaires pour confluence_update_page.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Titre ou mots-clés à rechercher" },
        space_key: {
          type: "string",
          description: "Limiter la recherche à un espace (optionnel)",
        },
        max_results: { type: "number", description: "Nombre max de résultats (défaut: 10)" },
      },
      required: ["query"],
    },
  },
  {
    name: "confluence_publish_report",
    description:
      "Publie un rapport de mission structuré (WF-004) avec un template professionnel. " +
      "Crée une page avec en-tête auteur, date, statut, et corps du rapport.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "Titre du rapport (ex: Audit Maturité IA — Client XYZ)" },
        content: { type: "string", description: "Corps du rapport en Markdown" },
        space_key: { type: "string", description: "Espace de destination" },
        author: {
          type: "string",
          description: "Auteur du rapport (défaut: Guy HUIBONHOA — Adservio)",
        },
        client: { type: "string", description: "Nom du client (pour l'en-tête)" },
        parent_title: {
          type: "string",
          description: "Page parente (ex: Missions 2026)",
        },
        status: {
          type: "string",
          enum: ["Brouillon", "En révision", "Validé", "Livré"],
          description: "Statut du document (défaut: Brouillon)",
        },
      },
      required: ["title", "content", "space_key"],
    },
  },
];

// ─── Serveur MCP ─────────────────────────────────────────────────────────────

const server = new Server(
  { name: "mcp-confluence", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    switch (name) {
      // ── Créer une page ────────────────────────────────────────────────────
      case "confluence_create_page": {
        const spaceKey = (args.space_key as string) || CONFLUENCE_DEFAULT_SPACE;
        if (!spaceKey) throw new Error("space_key requis (ou définir CONFLUENCE_DEFAULT_SPACE)");

        const body: Record<string, unknown> = {
          type: "page",
          title: args.title,
          space: { key: spaceKey },
          body: {
            storage: {
              value: markdownToStorage(args.content as string),
              representation: "storage",
            },
          },
        };

        if (args.parent_title) {
          const searchRes = await confluence.get("/content/search", {
            params: { cql: `title = "${args.parent_title}" AND space = "${spaceKey}"`, limit: 1 },
          });
          if (searchRes.data.results?.length > 0) {
            body["ancestors"] = [{ id: searchRes.data.results[0].id }];
          }
        }

        const res = await confluence.post("/content", body);
        const page = res.data as ConfluencePage;
        return {
          content: [
            {
              type: "text",
              text: [
                `✅ Page créée : **${page.title}**`,
                `ID  : ${page.id}`,
                `URL : ${CONFLUENCE_BASE_URL}/wiki${page._links.webui}`,
              ].join("\n"),
            },
          ],
        };
      }

      // ── Mettre à jour une page ────────────────────────────────────────────
      case "confluence_update_page": {
        const current = await confluence.get(`/content/${args.page_id}`, {
          params: { expand: "version,title" },
        });
        const currentPage = current.data as ConfluencePage;

        const res = await confluence.put(`/content/${args.page_id}`, {
          version: { number: currentPage.version.number + 1 },
          title: (args.title as string) || currentPage.title,
          type: "page",
          body: {
            storage: {
              value: markdownToStorage(args.content as string),
              representation: "storage",
            },
          },
        });

        const page = res.data as ConfluencePage;
        return {
          content: [
            {
              type: "text",
              text: [
                `✅ Page mise à jour : **${page.title}**`,
                `Version : ${currentPage.version.number} → ${currentPage.version.number + 1}`,
                `URL : ${CONFLUENCE_BASE_URL}/wiki${page._links.webui}`,
              ].join("\n"),
            },
          ],
        };
      }

      // ── Rechercher des pages ──────────────────────────────────────────────
      case "confluence_search_page": {
        const spaceFilter = args.space_key ? ` AND space = "${args.space_key}"` : "";
        const cql = `title ~ "${args.query}"${spaceFilter} ORDER BY lastmodified DESC`;

        const res = await confluence.get("/content/search", {
          params: { cql, limit: (args.max_results as number) || 10, expand: "space,version" },
        });

        if (!res.data.results?.length) {
          return {
            content: [{ type: "text", text: `Aucune page trouvée pour "${args.query}"` }],
          };
        }

        const lines = [
          `**${res.data.totalSize}** page(s) trouvée(s) pour "${args.query}" :`,
          "",
          ...res.data.results.map(
            (p: ConfluencePage & { space: { key: string } }) =>
              `• **${p.id}** [${p.space?.key}] — ${p.title}`
          ),
          "",
          "Utilise l'ID pour confluence_update_page.",
        ];

        return { content: [{ type: "text", text: lines.join("\n") }] };
      }

      // ── Publier un rapport de mission ─────────────────────────────────────
      case "confluence_publish_report": {
        const spaceKey = args.space_key as string;
        const author = (args.author as string) || "Guy HUIBONHOA — Adservio";
        const status = (args.status as string) || "Brouillon";
        const date = new Date().toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        const header = [
          `<ac:structured-macro ac:name="info">`,
          `<ac:rich-text-body>`,
          `<p><strong>Auteur :</strong> ${author} | <strong>Date :</strong> ${date} | <strong>Statut :</strong> ${status}${args.client ? ` | <strong>Client :</strong> ${args.client}` : ""}</p>`,
          `</ac:rich-text-body>`,
          `</ac:structured-macro>`,
        ].join("");

        const body: Record<string, unknown> = {
          type: "page",
          title: args.title,
          space: { key: spaceKey },
          body: {
            storage: {
              value: header + "\n" + markdownToStorage(args.content as string),
              representation: "storage",
            },
          },
        };

        if (args.parent_title) {
          const searchRes = await confluence.get("/content/search", {
            params: { cql: `title = "${args.parent_title}" AND space = "${spaceKey}"`, limit: 1 },
          });
          if (searchRes.data.results?.length > 0) {
            body["ancestors"] = [{ id: searchRes.data.results[0].id }];
          }
        }

        const res = await confluence.post("/content", body);
        const page = res.data as ConfluencePage;
        return {
          content: [
            {
              type: "text",
              text: [
                `✅ Rapport publié : **${page.title}**`,
                `Statut : ${status}${args.client ? ` | Client : ${args.client}` : ""}`,
                `URL    : ${CONFLUENCE_BASE_URL}/wiki${page._links.webui}`,
              ].join("\n"),
            },
          ],
        };
      }

      default:
        throw new Error(`Outil inconnu : ${name}`);
    }
  } catch (err: unknown) {
    const msg = axios.isAxiosError(err)
      ? `Erreur Confluence API ${err.response?.status} : ${JSON.stringify(
          err.response?.data?.message || err.response?.data?.errors || err.message
        )}`
      : err instanceof Error
        ? err.message
        : String(err);
    return { content: [{ type: "text", text: `❌ ${msg}` }], isError: true };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
