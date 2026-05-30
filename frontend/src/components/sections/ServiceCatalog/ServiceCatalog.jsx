import { useLayoutEffect, useRef } from 'react'
import styles from './ServiceCatalog.module.css'

const services = [
  {
    id: 'confeccion',
    name: 'Confección',
    image: '/images/confeccion_pc.png',
    text: 'Fabricamos cortinas, persianas y rollers a tu medida con telas de calidad y acabados impecables.',
    highlights: [
      'Cortinas a medida con acabados personalizados',
      'Persianas confeccionadas con calce perfecto',
      'Rollers blackout, screen o duo según tu espacio',
    ],
    icon: (
      <>
        <path d="M3 17h13a4 4 0 0 0 4-4V6" />
        <path d="M17 6h4" />
        <path d="M7 17l2.5-4.5" />
        <path d="M3 21h15" />
        <circle cx="9.5" cy="12.5" r="1" />
      </>
    ),
  },
  {
    id: 'instalacion',
    name: 'Instalación',
    image: '/images/intalacion_pc_and_movil.png',
    text: 'Montaje profesional de cortinas, persianas y sistemas para un acabado seguro, nivelado y duradero.',
    highlights: [
      'Instalación de cortinas con rieles y ganchos',
      'Fijación de persianas con precisión',
      'Colocación de mecanismos manuales y motorizados',
    ],
    icon: (
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-.5-.5-2.1 2.6-2.6Z" />
    ),
    teal: true,
  },
  {
    id: 'tapizado',
    name: 'Tapizado',
    image: '/images/tapizado_pc_and_movil.png',
    text: 'Renovamos sillones, sillas y cojines con telas modernas y resistentes para devolverles confort y estilo.',
    highlights: [
      'Tapizado de sillones del hogar y oficina',
      'Recuperación de sillas y asientos',
      'Renovación de cojines con nuevas telas y relleno',
    ],
    icon: (
      <>
        <path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        <path d="M5 11a2 2 0 0 0-2 2v3h18v-3a2 2 0 0 0-2-2c-1 0-2 .9-2 2v1H7v-1c0-1.1-1-2-2-2Z" />
        <path d="M5 19v1M19 19v1M5 16v3M19 16v3" />
      </>
    ),
  },
  {
    id: 'lavado',
    name: 'Lavado',
    image: '/images/lavado_pc_and_movil.png',
    text: 'Limpieza y mantenimiento especializado de cortinas, sillones y persianas para prolongar su vida útil.',
    highlights: [
      'Lavado profundo de cortinas y telas',
      'Limpieza de sillones y eliminación de manchas',
      'Mantenimiento y cuidado de persianas',
    ],
    icon: (
      <>
        <path d="M12 3c3.5 4 5.5 6.7 5.5 9.3A5.5 5.5 0 0 1 12 18a5.5 5.5 0 0 1-5.5-5.7C6.5 9.7 8.5 7 12 3Z" />
        <path d="M9.8 12.5a2.2 2.2 0 0 0 2.2 2.2" />
        <path d="M5 21c1.2-1 2-1 3.2 0 1.2 1 2 1 3.2 0 1.2-1 2-1 3.2 0 1.2 1 2 1 3.2 0" />
      </>
    ),
    teal: true,
  },
]

function AdvisoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M4.5 19v-1a4.5 4.5 0 0 1 4.5-4.5h2" />
      <circle cx="17.5" cy="16.5" r="2.8" />
      <path d="m19.6 18.6 1.9 1.9" />
    </svg>
  )
}

function QualityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  )
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.5 5.5a3 3 0 0 0-.7 3l-7 7 1.7 1.7 7-7a3 3 0 0 0 3.8-3.9l-1.9 1.9-1.7-.3-.3-1.7 1.9-1.9a3 3 0 0 0-2.6 1.1Z" />
      <path d="m6 16-2.5 2.5 2 2L8 18" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const trustItems = [
  { icon: <AdvisoryIcon />, tone: 'teal', l1: 'Asesoría', l2: 'personalizada' },
  { icon: <QualityIcon />, tone: 'pink', l1: 'Materiales de', l2: 'alta calidad' },
  { icon: <ToolsIcon />, tone: 'teal', l1: 'Instalación', l2: 'profesional' },
  { icon: <ShieldCheckIcon />, tone: 'pink', l1: 'Garantía', l2: 'asegurada' },
]

/** @param {{ scrollToId?: string | null, scrollOnMount?: boolean }} props */
export function ServiceCatalog({ scrollToId = null, scrollOnMount = false }) {
  const headRef = useRef(null)
  const cardRefs = useRef({})

  useLayoutEffect(() => {
    if (scrollToId && cardRefs.current[scrollToId]) {
      cardRefs.current[scrollToId].scrollIntoView({ behavior: 'auto', block: 'start' })
      return
    }

    if (scrollOnMount) {
      headRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  }, [scrollToId, scrollOnMount])

  return (
    <section className={styles.section} aria-labelledby="servicios-catalogo-title">
      <div className={styles.inner}>
        <div id="servicios-contenido" className={styles.head} ref={headRef}>
          <p className={styles.kicker}>Nuestros servicios</p>
          <h2 id="servicios-catalogo-title" className={styles.title}>
            Soluciones <span className={styles.accent}>a tu medida</span>
          </h2>
          <p className={styles.lead}>
            Cada servicio está pensado para brindarte calidad, funcionalidad y estilo.
          </p>
        </div>

        <ul className={styles.list}>
          {services.map((service, index) => (
            <li
              key={service.id}
              id={`servicio-${service.id}`}
              ref={(el) => {
                cardRefs.current[service.id] = el
              }}
              className={`${styles.card} ${index % 2 === 1 ? styles.cardReverse : ''}`}
            >
              <div
                className={styles.media}
                style={{ backgroundImage: `url('${service.image}')` }}
                role="img"
                aria-label={service.name}
              />

              <div className={styles.body}>
                <span
                  className={`${styles.icon} ${service.teal ? styles.iconTeal : ''}`}
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {service.icon}
                  </svg>
                </span>
                <h3 className={styles.cardTitle}>{service.name}</h3>
                <p className={styles.cardText}>{service.text}</p>
                <ul className={styles.highlights}>
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.trustWrap}>
          <ul className={styles.trust} aria-label="Ventajas Mark Decor">
            {trustItems.map((item) => (
              <li key={item.l1} className={styles.trustItem}>
                <span
                  className={`${styles.trustIcon} ${
                    item.tone === 'teal' ? styles.toneTeal : styles.tonePink
                  }`}
                >
                  {item.icon}
                </span>
                <p className={styles.trustTitle}>
                  {item.l1}
                  <br />
                  {item.l2}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
