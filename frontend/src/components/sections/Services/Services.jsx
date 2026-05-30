import { Link } from 'react-router-dom'
import styles from './Services.module.css'

function SewingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 17h13a4 4 0 0 0 4-4V6" />
      <path d="M17 6h4" />
      <circle cx="9" cy="17" r="0" />
      <path d="M7 17l2.5-4.5" />
      <path d="M3 21h15" />
      <circle cx="9.5" cy="12.5" r="1" />
    </svg>
  )
}

function ToolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-.5-.5-2.1 2.6-2.6Z" />
    </svg>
  )
}

function ChairIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <path d="M5 11a2 2 0 0 0-2 2v3h18v-3a2 2 0 0 0-2-2c-1 0-2 .9-2 2v1H7v-1c0-1.1-1-2-2-2Z" />
      <path d="M5 19v1M19 19v1M5 16v3M19 16v3" />
    </svg>
  )
}

function WashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3c3.5 4 5.5 6.7 5.5 9.3A5.5 5.5 0 0 1 12 18a5.5 5.5 0 0 1-5.5-5.7C6.5 9.7 8.5 7 12 3Z" />
      <path d="M9.8 12.5a2.2 2.2 0 0 0 2.2 2.2" />
      <path d="M5 21c1.2-1 2-1 3.2 0 1.2 1 2 1 3.2 0 1.2-1 2-1 3.2 0 1.2 1 2 1 3.2 0" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

const services = [
  {
    id: 'confeccion',
    title: 'Confección',
    image: '/images/confeccion_pc.png',
    text: 'Fabricación de cortinas y persianas con acabados de alta calidad.',
    icon: <SewingIcon />,
  },
  {
    id: 'instalacion',
    title: 'Instalación',
    image: '/images/intalacion_pc_and_movil.png',
    text: 'Instalación profesional para un acabado perfecto y duradero.',
    icon: <ToolIcon />,
    teal: true,
  },
  {
    id: 'tapizado',
    title: 'Tapizado',
    image: '/images/tapizado_pc_and_movil.png',
    text: 'Renovamos tus muebles, sillones y sillas con telas de alta resistencia.',
    icon: <ChairIcon />,
  },
  {
    id: 'lavado',
    title: 'Lavado',
    image: '/images/lavado_pc_and_movil.png',
    text: 'Lavado y mantenimiento de cortinas, sillones y colchones.',
    icon: <WashIcon />,
    teal: true,
  },
]

export function Services() {
  return (
    <section id="servicios" className={styles.section} aria-labelledby="servicios-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>Lo que hacemos</p>
        <h2 id="servicios-title" className={styles.title}>
          Soluciones <span className={styles.accent}>a tu medida</span>
        </h2>

        <ul className={styles.grid}>
          {services.map((s) => (
            <li key={s.id} className={styles.card}>
              <Link
                className={styles.cardLink}
                to="/servicios"
                state={{ svc: s.id }}
                aria-label={s.title}
              >
                <div
                  className={`${styles.media} ${s.image ? '' : styles.mediaPlaceholder}`}
                  style={s.image ? { backgroundImage: `url('${s.image}')` } : undefined}
                  role="img"
                  aria-label={s.title}
                />
                <div className={styles.body}>
                  <span className={`${styles.icon} ${s.teal ? styles.iconTeal : ''}`}>
                    {s.icon}
                  </span>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardText}>{s.text}</p>
                  <span
                    className={`${styles.arrow} ${s.teal ? styles.arrowTeal : ''}`}
                    aria-hidden
                  >
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
