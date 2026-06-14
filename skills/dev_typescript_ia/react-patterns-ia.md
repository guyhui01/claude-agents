# Skill — React AI Patterns
> Certifications: Meta Front-End Developer Certificate · Vercel Next.js

## Objective
Apply React patterns suited to AI interfaces: LLM state, optimistic UI, streaming.

## Pattern — Optimistic UI for generation
```typescript
function UserStoryGenerator() {
  const [stories, setStories] = useState<UserStory[]>([])
  const [generating, setGenerating] = useState(false)

  async function handleGenerate(feature: string) {
    // Immediately add an optimistic placeholder
    const tempId = crypto.randomUUID()
    setStories(prev => [...prev, { id: tempId, title: "Generating...", status: "generating" }])
    setGenerating(true)

    try {
      const story = await generateUserStory(feature)
      // Replace the placeholder with the real result
      setStories(prev => prev.map(s => s.id === tempId ? { ...story, status: "done" } : s))
    } catch {
      setStories(prev => prev.filter(s => s.id !== tempId))
      toast.error("Generation error")
    } finally {
      setGenerating(false)
    }
  }
}
```

## Pattern — Streaming state management
```typescript
function StreamingText({ prompt }: { prompt: string }) {
  const [text, setText] = useState("")
  const [status, setStatus] = useState<"idle" | "streaming" | "done" | "error">("idle")

  useEffect(() => {
    let cancelled = false
    setStatus("streaming")
    setText("")

    streamText(prompt).then(async (stream) => {
      for await (const chunk of stream) {
        if (cancelled) break
        setText(prev => prev + chunk)
      }
      if (!cancelled) setStatus("done")
    }).catch(() => { if (!cancelled) setStatus("error") })

    return () => { cancelled = true }
  }, [prompt])

  return <div>{text}{status === "streaming" && <BlinkingCursor />}</div>
}
```

## Pattern — Skeleton loading for AI content
```typescript
function AIContent({ isLoading, content }: { isLoading: boolean; content: string }) {
  if (isLoading) return (
    <div className="space-y-2 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
  return <ReactMarkdown>{content}</ReactMarkdown>
}
```

## Pattern — Error Boundary for LLM calls
```typescript
class LLMErrorBoundary extends React.Component {
  state = { hasError: false, error: null }
  static getDerivedStateFromError(error) { return { hasError: true, error } }
  render() {
    if (this.state.hasError) return (
      <div className="text-red-500 p-4 border border-red-200 rounded">
        <p>AI error: {this.state.error?.message}</p>
        <button onClick={() => this.setState({ hasError: false })}>Retry</button>
      </div>
    )
    return this.props.children
  }
}
```

## Deliverables
- React components with LLM states (idle/loading/streaming/done/error)
- Optimistic UI for generation actions
- Skeleton loaders suited to AI content
- Error Boundary for LLM errors

## Output format
Specify: interface type (chat, generation, copilot) · UI library (shadcn, MUI, Tailwind) · precise use case

## Anti-patterns
- ❌ **Optimistic UI without rollback** on error: inconsistent state → remove/restore the placeholder in `catch` (done here ✓)
- ❌ **Streaming without cancellation on unmount**: `setState` after unmount, leak → `cancelled` flag + cleanup (done here ✓)
- ❌ **Error Boundary without reset**: the user stays stuck → "Retry" button that resets the state
- ❌ **Unsanitized LLM Markdown**: XSS → rehype-sanitize (see `chat-ui-streaming.md`)
- ❌ **Implicit dependencies** (`streamText`, `toast`, `BlinkingCursor` not imported): non-self-contained code → explicit imports
- ❌ **No status state** (idle/streaming/done/error): ambiguous UX → explicit state machine

## Sources
- **React 19** — react.dev (Meta): Suspense, transitions, Error Boundary
- **Vercel AI SDK** — ai-sdk.dev (`useChat`/`useCompletion` for client-side LLM state)
- **react-markdown** + **rehype-sanitize** — secure Markdown rendering

## See also
- [`chat-ui-streaming.md`](chat-ui-streaming.md) — full chat component (streaming, stop, scroll)
- [`vercel-ai-sdk.md`](vercel-ai-sdk.md) — SDK hooks and streaming
- [`nextjs-ia.md`](nextjs-ia.md) — App Router integration
- [`tool-use-frontend.md`](tool-use-frontend.md) — displaying tool calls
