import { philosophyById } from '../data/philosophies'
import { profiles } from '../data/profiles'

// Renders a full result page from a `ranked` array of philosophy ids.
// Shared by the quiz (fresh result) and the home history viewer.
export default function ResultView({
  ranked,
  showConfetti = false,
  savedNote = false,
  dateLabel = null,
  footer = null
}) {
  const primary = philosophyById[ranked[0]]
  const second = philosophyById[ranked[1]]
  const third = philosophyById[ranked[2]]
  const spectrum = ranked.slice(0, 6).map((id) => philosophyById[id])

  const primaryProfile = profiles[primary.id]?.primary
  const secondProfile = profiles[second.id]?.secondary

  return (
    <div className="result-page">
      {showConfetti && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </div>
      )}

      <div
        className="result-hero"
        style={{ backgroundImage: `url(${primary.image})` }}
      >
        <div className="result-hero-fade" />
        <div className="result-hero-inner">
          {dateLabel && <p className="result-date-chip">{dateLabel}</p>}
          <p className="result-eyebrow">Your good life is</p>
          <h1 className="result-name">{primary.name}</h1>
          <p className="result-tagline">{primary.tagline}</p>
          <p className="result-thinker-line">after {primary.thinker}</p>
        </div>
      </div>

      <div className="result-body">
        <div className="result-long">
          {primary.long.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Personality-test-style extras, tailored to your top two */}
        {primaryProfile && (
          <div className="profile">
            <h3 className="result-also">What this says about you</h3>
            <div className="profile-grid">
              <div className="profile-card">
                <h4>✦ Where you shine</h4>
                <ul>
                  {primaryProfile.strengths.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="profile-card">
                <h4>♡ Who &amp; what you’re drawn to</h4>
                <ul>
                  {primaryProfile.likes.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="profile-lookout">
              <strong>Watch out for:</strong> {primaryProfile.lookout}
            </p>
            {secondProfile && (
              <div className="profile-second">
                <h4>Your second voice — {second.name}</h4>
                <p>{secondProfile.note}</p>
                <ul>
                  {secondProfile.also.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <h4 className="result-traits-title">
          People drawn to this philosophy tend to...
        </h4>
        <ul className="result-traits">
          {primary.traits.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <h3 className="result-also">You also resonated with:</h3>
        <div className="result-secondary">
          {[second, third].map((p) => (
            <div
              key={p.id}
              className="result-sec-card"
              style={{ backgroundImage: `url(${p.image})` }}
            >
              <div className="result-sec-fade" />
              <div className="result-sec-text">
                <h4>{p.name}</h4>
                <p className="card-tagline">{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="result-also">Your full spectrum</h3>
        <ol className="spectrum">
          {spectrum.map((p, i) => (
            <li key={p.id} className={i === 0 ? 'spectrum--top' : ''}>
              <span className="spectrum-rank">{i + 1}</span>
              <span className="spectrum-name">{p.name}</span>
              <span className="spectrum-thinker">{p.thinker}</span>
            </li>
          ))}
        </ol>

        {savedNote && <p className="result-saved">✓ Saved to your history</p>}

        {footer}
      </div>
    </div>
  )
}
