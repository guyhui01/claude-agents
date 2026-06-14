# Skill — Chat UI & Streaming Responses
> Certifications: DeepLearning.AI JS/TS · Meta Front-End Developer

## Objective
Implement a chat interface with token-by-token streaming, loading states, and error handling.

## Full Chat component
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

  // Auto-scroll to the bottom
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
            placeholder="Your message..." disabled={isLoading} className="flex-1 input" />
          {isLoading
            ? <button type="button" onClick={stop}>Stop</button>
            : <button type="submit" disabled={!input.trim()}>Send</button>
          }
        </div>
      </form>
    </div>
  )
}
```

## Rendering the stream (Markdown)
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

## Animated typing indicator
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

## Advanced features
- **Copy to clipboard**: button on each assistant message
- **Regenerate**: rerun the last response
- **Message actions**: like / dislike for feedback
- **File attachments**: drag & drop with preview
- **Voice input**: Web Speech API

## Deliverables
- Full Chat component with streaming
- Typing indicator and auto-scroll
- Error handling (toast notifications)
- Stop button to interrupt generation

## Output format
Specify: CSS framework (Tailwind, shadcn/ui) · desired features · multi-modal (images) · persistent history

## Anti-patterns
- ❌ **LLM Markdown rendered without sanitization**: XSS via the model's response → sanitize the HTML (rehype-sanitize)
- ❌ **No Stop / abort button** on a long stream: the user is stuck → expose `stop()`
- ❌ **No `aria-live`** on the streamed messages area: screen-reader inaccessibility → polite live region
- ❌ **Invisible error state**: silent failure → show the error + retry (see `onError`)
- ❌ **Forced auto-scroll** when the user has scrolled up the history: frustrating → only scroll if already at the bottom
- ❌ **`ai/react`** (AI SDK v4): on AI SDK 5, the hook comes from `@ai-sdk/react` → check the version

## Sources
- **Vercel AI SDK** — ai-sdk.dev (`useChat`, SSE streaming; AI SDK 5 → `@ai-sdk/react`)
- **React 19** — react.dev (Meta) · **react-markdown** + **rehype-sanitize** — render security
- **WAI-ARIA 1.2** — `aria-live` for dynamic messages — w3.org/TR/wai-aria

## See also
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — streaming backend consumed by this UI
- [`react-patterns-ia.md`](react-patterns-ia.md) — state patterns (optimistic, streaming, error boundary)
- [`nextjs-ia.md`](nextjs-ia.md) — associated streaming API route
- [`../cms_digital/accessibilite-numerique.md`](../cms_digital/accessibilite-numerique.md) — accessibility (aria-live, WCAG)
