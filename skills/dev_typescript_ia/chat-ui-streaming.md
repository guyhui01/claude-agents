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
