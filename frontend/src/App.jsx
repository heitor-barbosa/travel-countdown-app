import { useEffect, useState } from 'react'
import pinIcon from './assets/hero_card_images/alfinete.png'
import regionIcon from './assets/hero_card_images/brasil.png'
import calendarIcon from './assets/hero_card_images/calendario.png'
import ruaDoMucugeImage from './assets/schedule_images/rua-do-mucuge.jpg'
import sextaImage from './assets/schedule_images/sexta.jpg'
import casamentoImage from './assets/schedule_images/casamento.jpg'
import ressacaImage from './assets/schedule_images/ressaca.jpg'
import './App.css'

const WEDDING = {
  couple: 'Letícia & André',
  initials: 'L&A',
  location: "Arraial d'Ajuda",
  region: 'Bahia, Brasil',
  venue: 'Casa da Praia',
  dateLabel: '12 de setembro de 2026',
  targetDate: '2026-09-12T00:00:00-03:00',
}

const scheduleItems = [
  {
    day: '01',
    date: '10/09',
    title: 'Chegada e noite no Mucugê',
    location: 'Rua do Mucugê e arredores',
    dressCode: 'Livre',
    description:
      'Chegada e exploração do charme noturno de Arraial na famosa rua do Mucugê. Desfrutem de Arraial como preferirem.',
    image: ruaDoMucugeImage,
    imageAlt: 'Rua do Mucugê ao entardecer',
    agenda: [
      { time: '14:00', label: 'Chegada em Porto Seguro e deslocamento para Arraial' },
      { time: '16:30', label: 'Check-in no hotel e tempo livre para descansar' },
      { time: '19:30', label: 'Passeio e jantar no Mucugê' },
    ],
    notes: ['Bom momento para mercado, farmácia e ajustes da estadia.'],
  },
  {
    day: '02',
    date: '11/09',
    title: 'Beach Day',
    location: 'Ainda a definir',
    dressCode: 'Roupas brancas de praia',
    description:
      'Aproveitem a manhã de sexta-feira na praia.',
    image: sextaImage,
    imageAlt: 'Cenário para o beach day de sexta-feira',
    agenda: [
      { time: '09:00', label: 'Manhã livre para praia e descanso' },
      { time: '14:00', label: 'Recepção descontraída com os convidados' },
      { time: '17:30', label: 'Fim de tarde livre em Arraial' },
    ],
    notes: ['Cada um será responsável pela sua comanda.'],
  },
  {
    day: '03',
    date: '12/09',
    title: 'Casamento',
    location: 'Casa da Praia',
    dressCode: 'Esporte fino',
    description: 'O grande dia da celebração.',
    image: casamentoImage,
    imageAlt: 'Foto do casamento na Casa da Praia',
    agenda: [
      { time: '10:00', label: 'Manhã livre e preparação com calma' },
      { time: '15:30', label: 'Saída para a Casa da Praia' },
      { time: '16:00', label: 'Cerimônia e início da celebração' },
      { time: '22:00', label: 'Festa noite adentro' },
    ],
    notes: ['Vale alinhar deslocamento e horário de saída com antecedência.'],
  },
  {
    day: '04',
    date: '13/09',
    title: 'Dia da Ressaca',
    location: 'Praia e arredores',
    dressCode: 'Leve e confortável',
    description: 'Dia de descanso. Vamos curtir a praia!',
    image: ressacaImage,
    imageAlt: 'Foto do domingo de ressaca na praia',
    agenda: [
      { time: '10:30', label: 'Café da manhã tardio com vista para o mar' },
      { time: '12:00', label: 'Praia, piscina ou descanso no hotel' },
      { time: '16:00', label: 'Último passeio antes da volta' },
    ],
    notes: ['Boa janela para check-out tardio ou retorno sem pressa.'],
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
            <span className="brand-mark" aria-hidden="true">
              {WEDDING.initials}
            </span>
            <p className="site-header__date">12 . 09 . 2026</p>
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
              Uma contagem regressiva para o casamento de Letícia e André, em Arraial d'Ajuda.
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

        <div className="itinerary-shell">
          <div className="itinerary-list">
            {scheduleItems.map((item) => (
              <article className="itinerary-item" key={item.title}>
                <div className="itinerary-item__rail">
                  <div className="itinerary-item__marker">
                    <span>DIA</span>
                    <strong>{item.day}</strong>
                  </div>
                </div>

                <div className="itinerary-item__card">
                  <div className="itinerary-item__media">
                    <img src={item.image} alt={item.imageAlt} className="itinerary-item__image" />
                  </div>

                  <div className="itinerary-item__content">
                    <div className="itinerary-item__header">
                      <div>
                        <p className="itinerary-item__date">{item.date}</p>
                        <h3>{item.title}</h3>
                      </div>

                      <div className="itinerary-item__tags">
                        <span>{item.location}</span>
                        <span>{item.dressCode}</span>
                      </div>
                    </div>

                    <p className="itinerary-item__description">{item.description}</p>

                    <ul className="itinerary-item__agenda">
                      {item.agenda.map((entry) => (
                        <li key={`${item.title}-${entry.time}`}>
                          <strong>{entry.time}</strong>
                          <span>{entry.label}</span>
                        </li>
                      ))}
                    </ul>

                    {item.notes.length > 0 ? (
                      <ul className="itinerary-item__notes">
                        {item.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
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
