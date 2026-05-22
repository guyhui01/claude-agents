# Skill — React Patterns IA
> Certifications : Meta Front-End Developer Certificate · Vercel Next.js

## Objectif
Appliquer les patterns React adaptés aux interfaces IA : état LLM, optimistic UI, streaming.

## Pattern — Optimistic UI pour la génération
```typescript
function UserStoryGenerator() {
  const [stories, setStories] = useState<UserStory[]>([])
  const [generating, setGenerating] = useState(false)

  async function handleGenerate(feature: string) {
    // Ajouter immédiatement un placeholder optimiste
    const tempId = crypto.randomUUID()
    setStories(prev => [...prev, { id: tempId, title: "Génération en cours...", status: "generating" }])
    setGenerating(true)

    try {
      const story = await generateUserStory(feature)
      // Remplacer le placeholder par le résultat réel
      setStories(prev => prev.map(s => s.id === tempId ? { ...story, status: "done" } : s))
    } catch {
      setStories(prev => prev.filter(s => s.id !== tempId))
      toast.error("Erreur de génération")
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

## Pattern — Skeleton loading pour le contenu IA
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

## Pattern — Error Boundary pour les appels LLM
```typescript
class LLMErrorBoundary extends React.Component {
  state = { hasError: false, error: null }
  static getDerivedStateFromError(error) { return { hasError: true, error } }
  render() {
    if (this.state.hasError) return (
      <div className="text-red-500 p-4 border border-red-200 rounded">
        <p>Erreur IA : {this.state.error?.message}</p>
        <button onClick={() => this.setState({ hasError: false })}>Réessayer</button>
      </div>
    )
    return this.props.children
  }
}
```

## Livrables
- Composants React avec états LLM (idle/loading/streaming/done/error)
- Optimistic UI pour les actions de génération
- Skeleton loaders adaptés au contenu IA
- Error Boundary pour les erreurs LLM

## Format de sortie
Précise : type d'interface (chat, génération, copilot) · bibliothèque UI (shadcn, MUI, Tailwind) · cas d'usage précis
