# Skill — Chat UI & Streaming Responses
> Certifications : DeepLearning.AI JS/TS · Meta Front-End Developer

## Objectif
Implémenter une interface de chat avec streaming token par token, états de chargement et gestion des erreurs.

## Composant Chat complet
```typescript
"use client"
import { useChat } from "ai/react"
import { useRef, useEffect } from "react"

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error, stop } = useChat({
    api: "/api/chat",
    onError: (err) => toast.error(err.message)
  })
  const bottomRef = useRef<HTMLDivElement>(null)

  // Auto-scroll vers le bas
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} content={m.content} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input value={input} onChange={handleInputChange}
            placeholder="Votre message..." disabled={isLoading} className="flex-1 input" />
          {isLoading
            ? <button type="button" onClick={stop}>Stop</button>
            : <button type="submit" disabled={!input.trim()}>Envoyer</button>
          }
        </div>
      </form>
    </div>
  )
}
```

## Affichage du streaming (Markdown)
```typescript
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

function MessageBubble({ role, content }: { role: string; content: string }) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-3xl rounded-lg p-3 ${role === "user" ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
        <ReactMarkdown components={{ code: CodeBlock }}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
```

## Typing indicator animé
```typescript
function TypingIndicator() {
  return (
    <div className="flex gap-1 p-3 bg-gray-100 rounded-lg w-fit">
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  )
}
```

## Fonctionnalités avancées
- **Copy to clipboard** : bouton sur chaque message assistant
- **Regenerate** : relancer la dernière réponse
- **Message actions** : like / dislike pour le feedback
- **File attachments** : drag & drop avec prévisualisation
- **Voice input** : Web Speech API

## Livrables
- Composant Chat complet avec streaming
- Typing indicator et auto-scroll
- Gestion des erreurs (toast notifications)
- Bouton Stop pour interrompre la génération

## Format de sortie
Précise : framework CSS (Tailwind, shadcn/ui) · fonctionnalités souhaitées · multi-modal (images) · historique persistant

## Anti-patterns
- ❌ **Markdown LLM rendu sans sanitisation** : XSS via la réponse du modèle → sanitiser le HTML (rehype-sanitize)
- ❌ **Pas de bouton Stop / d'abort** sur un stream long : l'utilisateur est bloqué → exposer `stop()`
- ❌ **Pas d'`aria-live`** sur la zone de messages streamés : inaccessibilité lecteur d'écran → région live polie
- ❌ **État d'erreur invisible** : échec silencieux → afficher l'erreur + retry (cf. `onError`)
- ❌ **Auto-scroll forcé** quand l'utilisateur a remonté l'historique : frustrant → ne scroller que si déjà en bas
- ❌ **`ai/react`** (AI SDK v4) : sur AI SDK 5, le hook vient de `@ai-sdk/react` → vérifier la version

## Sources
- **Vercel AI SDK** — ai-sdk.dev (`useChat`, streaming SSE ; AI SDK 5 → `@ai-sdk/react`)
- **React 19** — react.dev (Meta) · **react-markdown** + **rehype-sanitize** — sécurité du rendu
- **WAI-ARIA 1.2** — `aria-live` pour les messages dynamiques — w3.org/TR/wai-aria

## Voir aussi
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — backend streaming consommé par cette UI
- [`react-patterns-ia.md`](react-patterns-ia.md) — patterns d'état (optimistic, streaming, error boundary)
- [`nextjs-ia.md`](nextjs-ia.md) — route API streaming associée
- [`../cms_digital/accessibilite-numerique.md`](../cms_digital/accessibilite-numerique.md) — accessibilité (aria-live, WCAG)
