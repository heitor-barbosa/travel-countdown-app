import { useEffect, useState } from 'react'
import pinIcon from './assets/hero_card_images/alfinete.png'
import regionIcon from './assets/hero_card_images/brasil.png'
import calendarIcon from './assets/hero_card_images/calendario.png'
import ruaDoMucugeImage from './assets/schedule_images/rua-do-mucuge.jpg'
import sextaImage from './assets/schedule_images/sexta.jpg'
import casamentoImage from './assets/schedule_images/casamento.jpg'
import ressacaImage from './assets/schedule_images/ressaca.jpg'
import lugarIcon from './assets/hospedagem_cards/lugar.png'
import camaDeCasalIcon from './assets/hospedagem_cards/cama-de-casal.png'
import suporteIcon from './assets/hospedagem_cards/suporte.png'
import stayCalendarIcon from './assets/hotel_card_icons/calendario.png'
import cafeIcon from './assets/hotel_card_icons/xicara-de-cafe.png'
import piscinaIcon from './assets/hotel_card_icons/piscina.png'
import spaIcon from './assets/hotel_card_icons/spa.png'
import tenisIcon from './assets/hotel_card_icons/tenis.png'
import wifiIcon from './assets/hotel_card_icons/sinal-de-wi-fi.png'
import estacionamentoIcon from './assets/hotel_card_icons/carro-estacionado.png'
import saintTropezImage from './assets/hotel_images/saint-tropez.jpg'
import pitingaImage from './assets/hotel_images/Pousada-Pitinga-Bahia.jpg'
import marambaiaImage from './assets/hotel_images/pousada-marambaia.webp'
import './App.css'

const WEDDING = {
  couple: 'Letícia & André',
  initials: 'L&A',
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

const stayHighlights = [
  {
    title: 'Próximas ao evento',
    text: 'Todas as opções sugeridas ficam perto do local do casamento.',
    icon: lugarIcon,
  },
  {
    title: 'Para todos os estilos',
    text: 'Opções de resorts, pousadas e hotéis boutique para diferentes preferências.',
    icon: camaDeCasalIcon,
  },
  {
    title: 'Dúvidas?',
    text: 'Fale com nossa equipe se precisar de ajuda para escolher sua hospedagem.',
    icon: suporteIcon,
  },
]

const staySuggestions = [
  {
    name: 'Saint Tropez Praia Hotel',
    url: 'https://www.saint-tropez.com.br/',
    location: 'Estr. de Pitinga, 100',
    note: 'Resort pé na areia com infraestrutura completa, piscinas, restaurante e conforto para toda a fam\u00EDlia.',
    image: saintTropezImage,
    imageAlt: 'Área externa do Saint Tropez Praia Hotel',
    amenities: [
      { label: 'Café da manhã', icon: cafeIcon },
      { label: 'Piscina', icon: piscinaIcon },
      { label: 'Spa', icon: spaIcon },
      { label: 'Quadra de tênis', icon: tenisIcon },
    ],
  },
  {
    name: 'Hotel Pousada Pitinga',
    url: 'https://hotelpousadapitinga.com.br/',
    location: 'Hotel Pousada Pitinga Roteiros de Charme',
    note: 'Pousada charmosa e acolhedora, no coração do Arraial, perfeita para casais e momentos especiais.',
    image: pitingaImage,
    imageAlt: 'Fachada da Pousada Pitinga',
    amenities: [
      { label: 'Café da manhã', icon: cafeIcon },
      { label: 'Piscina', icon: piscinaIcon },
      { label: 'Ar-condicionado', icon: tenisIcon },
      { label: 'Wi-Fi', icon: wifiIcon },
    ],
  },
  {
    name: 'Hotel Pousada Marambaia',
    url: 'http://www.hotelmarambaia.com.br/',
    location: 'Alameda dos Flamboyants, 116 - Centro',
    note: 'Ambiente tranquilo e elegante, a poucos passos da praia e do centro histórico.',
    image: marambaiaImage,
    imageAlt: 'Piscina da Pousada Marambaia',
    amenities: [
      { label: 'Café da manhã', icon: cafeIcon },
      { label: 'Wi-Fi', icon: wifiIcon },
      { label: 'Estacionamento', icon: estacionamentoIcon },
      { label: 'Bar', icon: spaIcon },
    ],
  },
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
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(WEDDING.targetDate))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const syncHeaderState = () => {
      const heroSection = document.getElementById('inicio')
      const root = document.documentElement

      if (!heroSection) {
        return
      }

      const { bottom } = heroSection.getBoundingClientRect()
      const heroHeight = heroSection.offsetHeight
      const compactHeaderHeight = window.innerWidth <= 560
        ? 104
        : window.innerWidth <= 720
          ? 108
          : 112
      const maxStickyOffset = Math.max(0, heroHeight - compactHeaderHeight)
      const stickyOffset = Math.max(0, Math.min(window.scrollY, maxStickyOffset))

      root.style.setProperty('--sticky-hero-height', `${heroHeight}px`)
      root.style.setProperty('--sticky-hero-offset', `${stickyOffset}px`)
      setIsHeaderCompact(bottom <= 140)
    }

    syncHeaderState()
    window.addEventListener('scroll', syncHeaderState, { passive: true })
    window.addEventListener('resize', syncHeaderState)

    return () => {
      window.removeEventListener('scroll', syncHeaderState)
      window.removeEventListener('resize', syncHeaderState)
    }
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
      <header className={`site-header ${isHeaderCompact ? 'site-header--compact' : ''}`}>
        <div className="site-header__inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true">
              {WEDDING.initials}
            </span>
            <p className="site-header__date">12 . 09 . 2026</p>
          </a>

          <div className="site-header__actions">
            <nav className="main-nav" aria-label="Navegação principal">
              <a href="#inicio">Início</a>
              <a href="#roteiro">Roteiro</a>
              <a href="#hospedagem">Hospedagem</a>
            </nav>

            <button className="rsvp-button" type="button">
              <span>Confirme sua presença</span>
              <span className="rsvp-button__icon" aria-hidden="true">
                ♡
              </span>
            </button>
          </div>
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
        <div className="stay-showcase">
          <div className="stay-showcase__hero">
            <h2>Hospedagem</h2>
            <span className="stay-showcase__ornament" aria-hidden="true">♥</span>
            <p className="stay-showcase__lead">
              Selecionamos algumas opções de hospedagem em Arraial d'Ajuda
              para que você tenha uma estadia confortável e aproveite cada momento.
            </p>
          </div>

          <div className="stay-pillars">
            {stayHighlights.map((item) => (
              <article className="stay-pillar" key={item.title}>
                <span className="stay-pillar__icon" aria-hidden="true">
                  <img src={item.icon} alt="" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="stay-suggestions">
            <div className="stay-suggestions__header">
              <h3>Nossas sugestões</h3>
              <span className="stay-suggestions__ornament" aria-hidden="true">♥</span>
              <p>Opções selecionadas com carinho para receber você em Arraial d’Ajuda.</p>
            </div>

            <div className="stay-hotel-grid">
              {staySuggestions.map((hotel) => (
                <article className="stay-hotel-card" key={hotel.name}>
                  <div className="stay-hotel-card__media">
                    <img src={hotel.image} alt={hotel.imageAlt} className="stay-hotel-card__image" />
                  </div>

                  <div className="stay-hotel-card__body">
                    <h3>{hotel.name}</h3>

                    <div className="stay-hotel-card__stars" aria-hidden="true">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    <p className="stay-hotel-card__location">
                      <img src={lugarIcon} alt="" aria-hidden="true" />
                      <span>{hotel.location}</span>
                    </p>

                    <p className="stay-hotel-card__text">{hotel.note}</p>

                    <div className="stay-hotel-card__tags">
                      {hotel.amenities.map((amenity) => (
                        <span key={`${hotel.name}-${amenity.label}`}>
                          <img src={amenity.icon} alt="" aria-hidden="true" />
                          <span>{amenity.label}</span>
                        </span>
                      ))}
                    </div>

                    <a
                      className="stay-hotel-card__link"
                      href={hotel.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Ver detalhes e reservar</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <article className="stay-tip-card">
            <div className="stay-tip-card__icon" aria-hidden="true">
              <img src={stayCalendarIcon} alt="" />
            </div>
            <div>
              <p className="stay-tip-card__label">Dica importante</p>
              <p className="stay-tip-card__text">
                Arraial d'Ajuda é um destino muito procurado, especialmente em setembro.
                Recomendamos reservar sua hospedagem com antecedência para garantir
                as melhores opções e tarifas.
              </p>
            </div>
            <div className="stay-tip-card__leaf" aria-hidden="true"></div>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__brand-block">
              <div className="site-footer__brand">
                <span className="site-footer__brand-mark" aria-hidden="true">
                  {WEDDING.initials}
                </span>
                <div>
                  <p className="site-footer__eyebrow">Casamento</p>
                  <h2>{WEDDING.couple}</h2>
                </div>
              </div>

              <p className="site-footer__lead">
                Nossa equipe est&aacute; &agrave; disposi&ccedil;&atilde;o para ajudar voc&ecirc;s com
                reservas, orienta&ccedil;&otilde;es e detalhes finais da viagem para Arraial d&apos;Ajuda.
              </p>

              <div className="site-footer__meta">
                <span>{WEDDING.dateLabel}</span>
                <span>{WEDDING.region}</span>
                <span>{WEDDING.venue}</span>
              </div>
            </div>

            <div className="site-footer__panel">
              <p className="site-footer__panel-title">Precisa de ajuda?</p>

              <div className="site-footer__contacts">
                <div>
                  <strong>Contato</strong>
                  <span>A'mar Eventos</span>
                  <span>(73) 99858-3444 - Dayane</span>
                  <span>(17) 99153-2924 - Grasi</span>
                </div>

                <a href="mailto:hospedagem@leticiaeandre.com">
                  <strong>E-mail</strong>
                  <span>hospedagem@leticiaeandre.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <nav className="site-footer__nav" aria-label="Links do rodap&eacute;">
              <a href="#inicio">In&iacute;cio</a>
              <a href="#roteiro">Roteiro</a>
              <a href="#hospedagem">Hospedagem</a>
            </nav>

            <p className="site-footer__note">
              Feito para orientar os convidados e concentrar as informa&ccedil;&otilde;es principais do casamento.
            </p>
          </div>
        </div>
      </footer>

    </main>
  )
}

export default App
