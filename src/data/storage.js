// Persists quiz results to localStorage so they survive reloads.
const KEY = 'wiygl.results.v1'

export function loadResults() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

// result: { primary, secondary, tertiary, ranked, date }
export function saveResult(result) {
  const all = loadResults()
  const entry = { ...result, date: new Date().toISOString() }
  const next = [entry, ...all].slice(0, 10) // keep last 10
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* ignore quota errors */
  }
  return entry
}

export function clearResults() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}

export function latestResult() {
  return loadResults()[0] || null
}
