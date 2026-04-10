import { useEffect, useState } from 'react'
import pinIcon from './assets/alfinete.png'
import regionIcon from './assets/brasil.png'
import calendarIcon from './assets/calendario.png'
import './App.css'

const WEDDING = {
  couple: 'Letícia & André',
  location: "Arraial d'Ajuda",
  region: 'Bahia, Brasil',
  venue: 'Casa da Praia',
  dateLabel: '12 de setembro de 2026',
  targetDate: '2026-09-12T00:00:00-03:00',
}

const scheduleItems = [
  {
    date: '10/09',
    title: 'Dia Livre',
    location: 'Rua do Mucugê e arredores',
    dressCode: 'Livre',
    description:
      'Chegada e exploração do charme noturno de Arraial na famosa rua do Mucugê. Desfrutem de Arraial como preferirem.',
    notes: [],
  },
  {
    date: '11/09',
    title: 'Beach Day',
    location: 'Ainda a definir',
    dressCode: 'Roupas brancas de praia',
    description: 'Aproveitem a manhã de sexta-feira na praia. Recepção descontraída a partir das 14h.',
    notes: [
      'Cada um será responsável pela sua comanda.',
    ],
  },
  {
    date: '12/09',
    title: 'Casamento',
    location: 'Casa da Praia',
    dressCode: 'Esporte fino',
    description: 'O grande dia da celebração.',
    notes: [],
  },
  {
    date: '13/09',
    title: 'Dia da Ressaca',
    location: 'Praia e arredores',
    dressCode: 'Leve e confortável',
    description: 'Dia de descanso. Vamos curtir a praia!',
    notes: [],
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

  const eventFacts = [
    { label: 'Data', value: WEDDING.dateLabel, icon: calendarIcon },
    { label: 'Região', value: WEDDING.region, icon: regionIcon },
    { label: 'Local', value: WEDDING.venue, icon: pinIcon },
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
            <h1>{WEDDING.couple}</h1>
            <p className="hero-lead">
              Uma contagem regressiva para o dia em que celebraremos amor, mar e
              encontros inesquecíveis em Arraial d'Ajuda.
            </p>

            <dl className="event-facts">
              {eventFacts.map((fact) => (
                <div key={fact.label}>
                  <img src={fact.icon} alt="" aria-hidden="true" />
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <section
            className="countdown-card"
            aria-label="Contagem regressiva para o casamento"
          >
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

      <section className="content-section content-section--divided" id="roteiro">
        <div className="section-heading section-heading--centered">
          <h2>Roteiro</h2>
          <p className="section-kicker">10/09 - 14/09</p>
        </div>

        <div className="timeline-shell">
          <div className="timeline">
            {scheduleItems.map((item, index) => (
              <article
                className={`timeline-item ${
                  index % 2 === 0 ? 'timeline-item--top' : 'timeline-item--bottom'
                }`}
                key={item.title}
              >
                <div className="timeline-item__marker" aria-hidden="true"></div>
                <div className="timeline-item__content">
                  <p className="timeline-item__date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-item__description">{item.description}</p>

                  <div className="timeline-item__meta">
                    <p>
                      <strong>Local:</strong> {item.location}
                    </p>
                    <p>
                      <strong>Traje:</strong> {item.dressCode}
                    </p>
                  </div>

                  {item.notes.length > 0 ? (
                    <ul className="timeline-item__notes">
                      {item.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--divided" id="hospedagem">
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

      <section
        className="content-section content-section--divided"
        id="deslocamento"
      >
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
