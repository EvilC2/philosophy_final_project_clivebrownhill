import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { philosophies, philosophyById } from '../data/philosophies'
import { loadResults, latestResult, clearResults } from '../data/storage'
import ResultView from '../components/ResultView'

// CLIVE'S REFLECTION — personal essay shown in the expandable band.
const cliveEssay = [
  'My results for the good life quiz were initially unexpected but, honestly, quite interesting. Before doing this research I considered myself to have Stoic qualities with some other "thing" as the epicenter. What that other thing was? I was not sure. But after looking further into the meanings of all the ethical frameworks, as well as incorporating work I had done with a psychologist, I came to agree most with Maslow’s theory of self-actualization, on top of the Stoicism piece already mentioned (stoicism as the second voice). I spent ages correcting and perfecting the quiz to a point where I think it has gotten pretty accurate, and now even though when I take it I often get self-actualization as my top philosophy - instead of talking about it - I wanted to analyze the other top results that I, initially, wouldn’t say I align with as my primary philosophical framework, but after much self-reflection, can appreciate my akinness to. Instead of assuming there are flaws in the quiz, I’m going to assume the following results are genuine and talk about them as if the result is pointing to something real.',
  'Existentialism (my most common top philosophy other than self-actualization) the way de Beauvoir frames it, is the idea that there’s no preset meaning to your life: you build who you are through the choices you actually make. I’ve come to realize that’s exactly what my personal motto that a psychologist helped me find; "maximize progress", means to me. It’s not about reaching some fixed “final version” of myself, but is rather the commitment to keep choosing growth and hardwork, forever pushing to be better, and not outsource that definition to a single end goal. It annoys me when people try to “find themselves” because you are yourself, and I think what’s always resonated more with me is that I can build myself.',
  'Stoicism didn’t catch me off guard. Of all the results, it was the one I’d already put words to before this project and I aligned with it because of the modern interpretations that encourage drive for hard work and discipline. Stoicism is defined as the belief that you can’t control what happens to you, only how you respond, and that the right response comes from reason and discipline, not just emotion. As stated, that definition shows up most clearly in how I think about hard things. I don’t avoid difficulty - if anything I seek it, because I’ve found that’s the only way I actually develop. This isn’t to say that when doing difficult things, whether it be physical or mental, there isn’t emotion, thoughts of quitting, and unpleasantness - I experience all these things - but it’s that going through that process is what transforms you into the person your younger self would look up to. It’s not just to get stronger legs by running that extra mile, it’s that by running that extra distance, you know you can do it - and you know that you are a better man because of it.',
  'Nussbaum’s capability approach took me longer to understand, and I’ll be honest, it’s still the result I’m least settled on. Her argument is that a good life isn’t just a matter of mindset or character, it requires that people actually have the conditions to develop those things in the first place. I agree with that in principle - a poor person has fewer opportunities to live a traditional wealthy “good life” than a rich person. Where I push back, or at least can’t fully understand, is to accept where you are as a place you’re stuck in. Whether you’re rich or poor, in my mind, it’s about progress: how far can I exceed my starting point. It’s something that has always frustrated me with Hinduism, the idea that you are where you are because of Karma in your past lives. I believe that this mindset is so restrictive because it causes you to accept where you are and try to be a simple, kind, “good” person - instead of trying to break out from the chains you were born into, rich or poor, and become the best version of yourself possible from that point. For this reason I don’t think I am able to accept the capability approach as my good life.',
  'One value that never showed up as its own result or a property of other results, but that I’d put at the center of how I want to live, is love. I think the reason it didn’t register as its own philosophy is that for me, love isn’t separate from the rest of it and the answers I chose reflected that. It’s something you build and practice, not something that just happens to you and showing up for the people you care about is a discipline in itself, the same way running that extra mile is. You do it not because it’s always easy but because it makes you grow as a person and share that growth with others.',
  'While I believe that self-actualization, the idea of becoming the most self-realized version of yourself, is the end goal and the secret to living the good life - I also think that the way of doing this follows a very stoic approach, and I believe that the reason for doing it is existentialist. Let me explain. I do not believe in fate, nor do I believe in god in the “all-seeing, all-knowing” sense. I believe that we define our own existence and that my existence is defined by maximizing progress, or in other words, self-actualization. I believe this so strongly that I can not truly understand, at a personal level, the other good life frameworks. I believe that it’s impossible to truly reach a fully realized existence but through the ups and downs, every day I try to keep working towards that goal. During this journey I want to give the most back to the world as possible, whether it be loving and caring for people, or innovating and changing the world. The way I visualize doing this I believe to be stoic, always trying to push myself to do one more thing for myself and the others around me.',
  'After that reflection, what I’m now sitting with is the realization that to stay disciplined and truly follow what I am saying is inconceivably difficult, and every day I fail to live flawlessly. I want to excel socially, physically, emotionally, mentally, financially - but it’s so hard because of the constant temptations and distractions of life. To truly live perfectly is something I doubt I’ll ever be able to accomplish, but I’ll always be working to get there. And if in the moment I fail, I know my conscience will never stop screaming at me to do better.'
]

// RYAN'S REFLECTION — personal essay shown in the expandable band.
const ryanEssay = [
  'My result was Stoicism, Marcus Aurelius, and it made more sense than I expected. The tagline is "the good life is a disciplined one," which sounds kind of rigid to some, but to me it\'s quite honest. The whole idea is that a good life doesn\'t come from what happens to you, it comes from how you respond. You don\'t control outcomes, you only control your own mind and decisions. Everything else is outside your reach.',
  'The quiz listed my strengths as staying calm when everything around you isn\'t, following through on what you decide to do, and separating what\'s yours to control from what isn\'t. I didn\'t think of those as strengths before seeing them written out, but yeah, that\'s probably accurate.',
  'There\'s a question about what goes through your head at 2am when you can\'t sleep. One of the answers is "most of what I\'m spiraling about isn\'t even in my control." I picked that one without thinking too deeply, but it\'s probably the most honest answer I gave. Because that\'s a real thing I deal with. I regularly find myself going over some situation in my head and at a certain point I catch myself and realize none of it is in my hands. The only thing left is deciding how I\'m going to show up. That moment of redirecting is basically the whole Stoic practice.',
  'I train a lot, and the Stoic thing makes the most sense to me through that lens. When you\'re in the middle of something hard and your brain is telling you to stop, there\'s a moment where you decide what kind of person you are. Discipline is just that decision made enough times that it stops feeling like a decision. You\'ve built something in yourself that doesn\'t cave as easily.',
  'Marcus Aurelius ran the Roman empire through wars and plagues and spent his nights writing to himself about how to stay a decent person, not to publish, just to hold himself accountable. His journal, The Meditations, is a guy at the highest level of external pressure refusing to let that pressure become who he is. That\'s what stoicism means to me.',
  'My second result was Existentialist Ethics, which is Simone de Beauvoir. The quiz said I keep asking "is this actually mine?" and honestly that\'s true. The main idea is that your life doesn\'t come with meaning already built in. You make yourself who you are through your choices. To me that connects with Stoicism because they\'re both about taking ownership. One says own your reactions, the other says own your choices.',
  'One thing the quiz warned me about was mixing up holding a feeling in with actually being in control of it. That stuck with me. Sometimes staying calm is real self-control and sometimes I\'m just dodging the feeling. Stoicism isn\'t supposed to mean you don\'t feel anything. You still feel it, you just don\'t let it take over. I\'m not always sure I do that part right.',
  'Honestly what I want out of life is to handle things well even when stuff isn\'t going my way. Like, still be myself when I\'m under pressure. Stoicism doesn\'t say life will be easy or comfortable, it just says if you\'re solid on the inside, the bad stuff doesn\'t get to change who you are. That makes more sense to me than most other ideas about what a good life is.',
]

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  } catch {
    return ''
  }
}

export default function Home() {
  const navigate = useNavigate()
  const [active, setActive] = useState(null) // active philosophy for expanded panel
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [viewing, setViewing] = useState(null) // { ranked, dateLabel } for full history result
  const [cliveOpen, setCliveOpen] = useState(true) // Clive's reflection band expanded state
  const [ryanOpen, setRyanOpen] = useState(false) // Ryan's reflection band expanded state

  // Build a ranked id array from a stored history entry (back-compat safe).
  function rankedFrom(entry) {
    if (entry.ranked && entry.ranked.length) return entry.ranked
    return [entry.primary, entry.secondary, entry.tertiary].filter(Boolean)
  }

  useEffect(() => {
    setHistory(loadResults())
  }, [])

  // close panel on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const last = latestResult()
  const lastPrimary = last ? philosophyById[last.primary] : null

  return (
    <div className={`page ${active ? 'page--shifted' : ''}`}>
      <header className="banner">
        <div className="banner-glow" />
        <h1 className="banner-title">What Is Your Good Life?</h1>
        <p className="banner-subtitle">
          Fifteen philosophies. One question. Yours to answer.
        </p>
        <button className="cta banner-cta" onClick={() => navigate('/quiz')}>
          Take the quiz →
        </button>
      </header>

      {/* Your last result — pulled from localStorage */}
      {lastPrimary && (
        <section className="last-result">
          <div
            className="last-result-thumb"
            style={{ backgroundImage: `url(${lastPrimary.image})` }}
          />
          <div className="last-result-body">
            <span className="last-result-label">Your last result</span>
            <h3>{lastPrimary.name}</h3>
            <p>{lastPrimary.tagline}</p>
          </div>
          <div className="last-result-actions">
            <button className="cta cta-sm" onClick={() => navigate('/quiz')}>
              Retake →
            </button>
            <button
              className="cta cta-ghost cta-sm"
              onClick={() => setShowHistory((s) => !s)}
            >
              {showHistory ? 'Hide history' : `History (${history.length})`}
            </button>
          </div>
        </section>
      )}

      {showHistory && history.length > 0 && (
        <section className="history">
          <p className="history-hint">Tap any result to see the full breakdown.</p>
          <ul>
            {history.map((h, i) => {
              const p = philosophyById[h.primary]
              if (!p) return null
              const sec = philosophyById[h.secondary]
              return (
                <li key={i}>
                  <button
                    className="history-item"
                    onClick={() =>
                      setViewing({
                        ranked: rankedFrom(h),
                        dateLabel: formatDate(h.date)
                      })
                    }
                  >
                    <span
                      className="history-thumb"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <span className="history-text">
                      <strong>{p.name}</strong>
                      {sec && <em> + {sec.name}</em>}
                    </span>
                    <span className="history-date">{formatDate(h.date)}</span>
                    <span className="history-arrow">→</span>
                  </button>
                </li>
              )
            })}
          </ul>
          <button
            className="link-btn"
            onClick={() => {
              clearResults()
              setHistory([])
              setShowHistory(false)
            }}
          >
            Clear history
          </button>
        </section>
      )}

      {/* CLIVE'S REFLECTION — expandable essay band, terracotta accent */}
      <section className={`clive-band ${cliveOpen ? 'clive-band--open' : ''}`}>
        <button
          className="clive-toggle"
          onClick={() => setCliveOpen((o) => !o)}
          aria-expanded={cliveOpen}
        >
          <span className="clive-label">Clive's Reflection</span>
          <span className="clive-toggle-meta">
            <span className="clive-toggle-hint">
              {cliveOpen ? 'Hide' : 'Read'} my good life
            </span>
            <span className="clive-chevron" aria-hidden="true">
              ▾
            </span>
          </span>
        </button>

        {cliveOpen && (
          <div className="clive-essay">
            <h2 className="clive-essay-title">My Good Life</h2>
            <p className="clive-essay-sub">
              Self-actualization, by way of Stoicism, for an existentialist reason.
            </p>
            {cliveEssay.map((para, i) => (
              <p key={i} className={i === 0 ? 'clive-para clive-para--lead' : 'clive-para'}>
                {para}
              </p>
            ))}
            <p className="clive-signoff">— Clive</p>
          </div>
        )}
      </section>

      {/* RYAN'S REFLECTION — expandable essay band, steel-blue accent */}
      <section className={`ryan-band ${ryanOpen ? 'ryan-band--open' : ''}`}>
        <button
          className="ryan-toggle"
          onClick={() => setRyanOpen((o) => !o)}
          aria-expanded={ryanOpen}
        >
          <span className="ryan-label">Ryan's Reflection</span>
          <span className="ryan-toggle-meta">
            <span className="ryan-toggle-hint">
              {ryanOpen ? 'Hide' : 'Read'} my good life
            </span>
            <span className="ryan-chevron" aria-hidden="true">
              ▾
            </span>
          </span>
        </button>

        {ryanOpen && (
          <div className="ryan-essay">
            <h2 className="ryan-essay-title">My Good Life</h2>
            <p className="ryan-essay-sub">
              Stoicism. The good life is a disciplined one.
            </p>
            {ryanEssay.map((para, i) => (
              <p key={i} className={i === 0 ? 'ryan-para ryan-para--lead' : 'ryan-para'}>
                {para}
              </p>
            ))}
            <p className="ryan-signoff">— Ryan</p>
          </div>
        )}
      </section>

      <main className="grid-wrap">
        <h2 className="section-heading">Explore the philosophies</h2>
        <div className="grid">
          {philosophies.map((p) => (
            <button
              key={p.id}
              className={`card ${active && active.id === p.id ? 'card--active' : ''}`}
              onClick={() => setActive(p)}
            >
              <div
                className="card-img"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="card-front">
                <h3 className="card-name">{p.name}</h3>
                <p className="card-thinker">{p.thinker}</p>
                <p className="card-tagline">{p.tagline}</p>
                <p className="card-def">{p.short}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="cta-wrap">
          <button className="cta cta-lg" onClick={() => navigate('/quiz')}>
            Take the quiz to find out yours →
          </button>
        </div>
      </main>

      {/* Expanded philosophy panel — pushes content over, large, click-off to close */}
      {active && (
        <div className="overlay" onClick={() => setActive(null)} />
      )}
      <aside className={`panel ${active ? 'panel--open' : ''}`}>
        {active && (
          <>
            <button
              className="panel-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div
              className="panel-hero"
              style={{ backgroundImage: `url(${active.image})` }}
            >
              <div className="panel-hero-fade" />
              <div className="panel-hero-text">
                <h2 className="panel-name">{active.name}</h2>
                <p className="panel-thinker">{active.thinker}</p>
              </div>
            </div>
            <div className="panel-body">
              <p className="panel-tagline">{active.tagline}</p>
              <div className="panel-long">
                {active.long.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <h4 className="panel-traits-title">
                People drawn to this philosophy tend to...
              </h4>
              <ul className="panel-traits">
                {active.traits.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <button
                className="cta cta-lg panel-quiz-cta"
                onClick={() => navigate('/quiz')}
              >
                Is this you? Take the quiz →
              </button>
            </div>
          </>
        )}
      </aside>

      {/* Full result page for a past history entry */}
      {viewing && (
        <div className="result-modal">
          <button
            className="result-modal-back"
            onClick={() => setViewing(null)}
          >
            ← Back to explorer
          </button>
          <ResultView
            ranked={viewing.ranked}
            dateLabel={viewing.dateLabel}
            footer={
              <div className="result-actions">
                <button
                  className="cta cta-lg"
                  onClick={() => setViewing(null)}
                >
                  ← Back to explorer
                </button>
                <button
                  className="cta cta-ghost cta-lg"
                  onClick={() => navigate('/quiz')}
                >
                  Retake quiz
                </button>
              </div>
            }
          />
        </div>
      )}
    </div>
  )
}
