import { philosophyOrder } from './philosophies'

// answers: array of selected option objects (each has .tags)
// Returns philosophy ids ranked by score desc, list-order as tiebreaker.
export function rankPhilosophies(answers) {
  const scores = Object.fromEntries(philosophyOrder.map((id) => [id, 0]))
  for (const opt of answers) {
    if (!opt) continue
    for (const tag of opt.tags) scores[tag] += 1
    // The option's "lead" philosophy (its dominant theme) gets +1 more, so a
    // strong pick reads as +2 for the lead and +1 for its two bundle-mates.
    // Each philosophy leads an equal number of times across the quiz, so the
    // total points available per philosophy stay equal. The math stays fair.
    if (opt.lead) scores[opt.lead] += 1
  }
  return [...philosophyOrder].sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a]
    return philosophyOrder.indexOf(a) - philosophyOrder.indexOf(b)
  })
}
