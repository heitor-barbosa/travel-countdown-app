import { useEffect, useState } from 'react'
import './App.css'

const WEDDING = {
  couple: 'Letícia & André',
  location: "Arraial d'Ajuda",
  region: 'Bahia, Brasil',
  venue: 'Casa da Praia',
  dressCode: 'Esporte fino',
  dateLabel: '12 de setembro de 2026',
  targetDate: '2026-09-12T00:00:00-03:00',
}

const scheduleItems = [
  {
    date: '10/09',
    title: 'Dia livre',
    description:
      'Chegada a Arraial e noite para conhecer a Rua do Mucugê no seu ritmo.',
  },
  {
    date: '11/09',
    title: 'Beach day',
    description:
      'Recepção descontraída a partir das 14h, com roupas brancas de praia.',
  },
  {
    date: '12/09',
    title: 'Casamento',
    description: 'Celebração principal na Casa da Praia com traje esporte fino.',
  },
  {
    date: '13/09',
    title: 'Dia da ressaca',
    description: 'Descanso, reencontros e mais um dia para curtir o litoral.',
  },
]

const hotels = [
  'Saint Tropez Praia Hotel',
  'Hotel Pousada Pitanga',
  'Hotel Pousada Marambaia',
  'Hotel Boutique Kuara',
  'Hotel Boutique Santa Aldeia',
]

const flights = [
  'Brasília (BSB) -> Porto Seguro (BPS)',
  'São Paulo (GRU ou CGH) -> Porto Seguro (BPS)',
  'Rio de Janeiro (GIG) -> Porto Seguro (BPS)',
  'Belo Horizonte (CNF) -> Porto Seguro (BPS)',
]

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
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(WEDDING.targetDate))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(WEDDING.targetDate))
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
          <a className="brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true"></span>
            <div className="brand-copy">
              <p className="eyebrow">Casamento à beira-mar</p>
              <strong>{WEDDING.couple}</strong>
            </div>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#roteiro">Roteiro</a>
            <a href="#hospedagem">Hospedagem</a>
            <a href="#deslocamento">Deslocamento</a>
          </nav>
        </div>
      </header>

      <section className="hero-panel" id="inicio">
        <div className="hero-backdrop" aria-hidden="true"></div>
        <div className="hero-main">
          <div className="hero-copy">
            {/* <span className="trip-pill">Casamento à beira-mar</span> */}
            <h1>{WEDDING.couple}</h1>
            <p className="hero-lead">
              Contagem regressiva para celebrar em {WEDDING.location}, com os pés
              na areia e clima de fim de tarde.
            </p>

            <dl className="event-facts">
              <div>
                <dt>Data</dt>
                <dd>{WEDDING.dateLabel}</dd>
              </div>
              <div>
                <dt>Local</dt>
                <dd>{WEDDING.venue}</dd>
              </div>
              <div>
                <dt>Região</dt>
                <dd>{WEDDING.region}</dd>
              </div>
              <div>
                <dt>Traje</dt>
                <dd>{WEDDING.dressCode}</dd>
              </div>
            </dl>
          </div>

          <section
            className="countdown-card"
            aria-label="Contagem regressiva para o casamento"
          >
            <p className="countdown-card__eyebrow">Faltam</p>

            {timeLeft.isExpired ? (
              <div className="countdown-finished">
                <p className="countdown-finished__badge">O grande dia chegou</p>
                <h2>Hora de celebrar.</h2>
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

      <section className="content-section" id="roteiro">
        <div className="section-heading">
          <p className="section-kicker">Roteiro</p>
          <h2>Roteiro</h2>
        </div>

        <div className="schedule-grid">
          {scheduleItems.map((item) => (
            <article className="schedule-card" key={item.title}>
              <p className="schedule-card__date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="hospedagem">
        <div className="section-heading">
          <p className="section-kicker">Estadia</p>
          <h2>Sugestões de hospedagem</h2>
        </div>

        <div className="info-card">
          <p className="info-intro">
            O manual indica liberdade total para escolher onde ficar em
            Arraial d'Ajuda. Estas são algumas opções citadas para começar sua
            busca.
          </p>

          <ul className="link-list">
            {hotels.map((hotel) => (
              <li key={hotel}>{hotel}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section" id="deslocamento">
        <div className="section-heading">
          <p className="section-kicker">Logística</p>
          <h2>Como chegar</h2>
        </div>

        <div className="travel-grid">
          <article className="info-card">
            <h3>Voos</h3>
            <ul className="link-list">
              {flights.map((flight) => (
                <li key={flight}>{flight}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <h3>Transfer</h3>
            <p>
              O manual recomenda considerar transfer privativo entre o aeroporto
              e Arraial d'Ajuda, principalmente para mais conforto na chegada.
            </p>
          </article>

          <article className="info-card">
            <h3>Aluguel de carro</h3>
            <p>
              Vale para quem quer mais flexibilidade durante a estadia e pensa
              em explorar praias e arredores com calma.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
