import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { rankPhilosophies } from '../data/scoring'
import { philosophyById } from '../data/philosophies'
import { saveResult } from '../data/storage'
import ResultView from '../components/ResultView'

const STAGE = { INTRO: 'intro', QUIZ: 'quiz', RESULT: 'result' }

export default function Quiz() {
  const navigate = useNavigate()
  const [stage, setStage] = useState(STAGE.INTRO)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([]) // selected option objects
  const [fading, setFading] = useState(false)

  function start() {
    setStage(STAGE.QUIZ)
    setCurrent(0)
    setAnswers([])
  }

  function choose(option) {
    const next = [...answers]
    next[current] = option
    setAnswers(next)
    setFading(true)
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1)
      } else {
        setStage(STAGE.RESULT)
      }
      setFading(false)
    }, 220)
  }

  function goBack() {
    if (current === 0) {
      setStage(STAGE.INTRO)
      return
    }
    setFading(true)
    setTimeout(() => {
      setCurrent((c) => c - 1)
      setFading(false)
    }, 180)
  }

  function retake() {
    setStage(STAGE.INTRO)
    setCurrent(0)
    setAnswers([])
  }

  if (stage === STAGE.INTRO) {
    return (
      <div className="page quiz-page">
        <div className="quiz-intro">
          <button className="link-btn back-home" onClick={() => navigate('/')}>
            ← Back to explorer
          </button>
          <h1 className="banner-title">What Is Your Good Life?</h1>
          <p className="intro-text">
            Before you start, make a choice: answer as you actually are right
            now, or answer as who you're trying to become. Both are valid. But
            pick one and stick with it — the quiz can only tell you something
            true if you're honest about which version of yourself you're
            bringing to it.
          </p>
          <button className="cta cta-lg" onClick={start}>
            I'm ready →
          </button>
        </div>
      </div>
    )
  }

  if (stage === STAGE.RESULT) {
    return <Result answers={answers} onRetake={retake} navigate={navigate} />
  }

  // QUIZ stage
  const question = questions[current]
  const progress = ((current + 1) / questions.length) * 100

  return (
    <div className="page quiz-page">
      <div className="quiz-topbar">
        <button className="link-btn" onClick={goBack}>
          ← Back
        </button>
        <p className="progress-count">
          {current + 1} / {questions.length}
        </p>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className={`question-block ${fading ? 'fade-out' : 'fade-in'}`}>
        <h2 className="question-text">{question.q}</h2>
        <div className="options">
          {question.options.map((opt, i) => {
            const selected = answers[current] === opt
            return (
              <button
                key={i}
                className={`option-card ${selected ? 'option-card--sel' : ''}`}
                onClick={() => choose(opt)}
              >
                <span className="option-key">{String.fromCharCode(65 + i)}</span>
                {opt.text}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Result({ answers, onRetake, navigate }) {
  const ranked = rankPhilosophies(answers)
  const [copied, setCopied] = useState(false)
  const savedRef = useRef(false)

  // Save result once, on mount.
  useEffect(() => {
    if (savedRef.current) return
    savedRef.current = true
    saveResult({
      primary: ranked[0],
      secondary: ranked[1],
      tertiary: ranked[2],
      ranked
    })
  }, [ranked])

  function copyResult() {
    const p = (id) => philosophyById[id]
    const text = `My good life is ${p(ranked[0]).name} — "${p(ranked[0]).tagline}" (also resonated with ${p(ranked[1]).name} & ${p(ranked[2]).name}). What's yours?`
    navigator.clipboard?.writeText(text).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      },
      () => {}
    )
  }

  return (
    <div className="page">
      <ResultView
        ranked={ranked}
        showConfetti
        savedNote
        footer={
          <div className="result-actions">
            <button className="cta cta-lg" onClick={() => navigate('/')}>
              Explore all philosophies →
            </button>
            <button className="cta cta-ghost cta-lg" onClick={onRetake}>
              Retake quiz
            </button>
            <button className="cta cta-ghost cta-lg" onClick={copyResult}>
              {copied ? '✓ Copied!' : 'Share result'}
            </button>
          </div>
        }
      />
    </div>
  )
}
