import { useEffect, useState } from 'react'
import './App.css'

const TRIP = {
  destination: "Arraial d'Ajuda",
  city: 'Bahia, Brasil',
  dateLabel: '7 de setembro de 2026',
  targetDate: '2026-09-07T00:00:00-03:00',
}

function getTimeLeft(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  }
}

function App() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(TRIP.targetDate))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(TRIP.targetDate))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  const countdownUnits = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ]

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden="true"></span>
            <div className="brand-copy">
              <p className="eyebrow">Travel Countdown</p>
              <strong>{TRIP.destination}</strong>
            </div>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="/">Início</a>
            <a href="/">Roteiro</a>
            <a href="/">Checklist</a>
            <a href="/">Galeria</a>
          </nav>
        </div>
      </header>

      <section className="hero-panel">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="trip-pill">{TRIP.city}</span>
            <h1>{TRIP.destination}</h1>
            <p className="trip-date">{TRIP.dateLabel}</p>
          </div>

          <section
            className="countdown-card"
            aria-label="Contagem regressiva para a viagem"
          >
            {timeLeft.isExpired ? (
              <div className="countdown-finished">
                <p className="countdown-finished__badge">A viagem chegou</p>
                <h2>Hora de partir.</h2>
              </div>
            ) : (
              <div className="countdown-grid">
                {countdownUnits.map((unit) => (
                  <article className="time-block" key={unit.label}>
                    <span className="time-block__value">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="time-block__label">{unit.label}</span>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

export default App
