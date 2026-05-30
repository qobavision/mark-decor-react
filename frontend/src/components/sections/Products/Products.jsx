import { Link } from 'react-router-dom'
import styles from './Products.module.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
      <path d="M12 6.5l.9 1.8 2 .3-1.45 1.4.35 2L12 11.9l-1.8.9.35-2L9.1 9.4l2-.3.9-1.6Z" />
    </svg>
  )
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.5 5.5a3 3 0 0 0-.7 3l-7 7 1.7 1.7 7-7a3 3 0 0 0 3.8-3.9l-1.9 1.9-1.7-.3-.3-1.7 1.9-1.9a3 3 0 0 0-2.6 1.1Z" />
      <path d="m6 16-2.5 2.5 2 2L8 18" />
    </svg>
  )
}

function RulerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 16 16 4l4 4L8 20l-4 0 0-4Z" />
      <path d="M9 7l2 2M7 9l1.5 1.5M12 10l2 2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const products = [
  { label: 'Roller', cat: 'roller', image: '/images/roller_pc_and_movil.png' },
  { label: 'Persianas', cat: 'persianas', image: '/images/persianas_pc_and_movil.png' },
  { label: 'Stores', cat: 'stores', image: '/images/estores_pc_and_movil.png' },
  { label: 'Cortinas', cat: 'cortinas', image: '/images/inicio_fondo_pc.png' },
  { label: 'Cortinas motorizadas', cat: 'motorizadas', image: '/images/cortinaMotorizada_pc_and_movil.png' },
]

const badges = [
  { icon: <MedalIcon />, l1: 'Materiales', l2: 'de alta calidad' },
  { icon: <ToolsIcon />, l1: 'Instalación', l2: 'profesional' },
  { icon: <RulerIcon />, l1: 'Diseños', l2: 'a tu medida' },
  { icon: <ShieldIcon />, l1: 'Garantía', l2: 'asegurada' },
]

export function Products() {
  return (
    <section id="productos" className={styles.section} aria-labelledby="productos-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>Nuestros productos</p>
        <h2 id="productos-title" className={styles.title}>
          Diseño y funcionalidad en <span className={styles.accent}>cada detalle</span>
        </h2>

        <ul className={styles.grid}>
          {products.map((p, i) => (
            <li key={p.label} className={styles.card}>
              <Link
                className={styles.cardLink}
                to="/productos"
                state={{ cat: p.cat }}
                aria-label={p.label}
              >
                <div
                  className={styles.media}
                  style={{ backgroundImage: `url('${p.image}')` }}
                  role="img"
                  aria-label={p.label}
                />
                <span
                  className={`${styles.tab} ${i % 2 === 0 ? styles.tabPink : styles.tabTeal}`}
                >
                  <span className={styles.tabLabel}>{p.label}</span>
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles.badges}>
          {badges.map((b) => (
            <li key={b.l1} className={styles.badge}>
              <span className={styles.badgeIcon}>{b.icon}</span>
              <span className={styles.badgeText}>
                {b.l1}
                <br />
                {b.l2}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
