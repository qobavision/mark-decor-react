import { Link } from 'react-router-dom'
import styles from './Upholstery.module.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Upholstery() {
  return (
    <section id="tapizado" className={styles.section} aria-labelledby="tapizado-title">
      <div className={styles.inner}>
        <div className={styles.banner}>
          <span className={styles.decorBlob} aria-hidden />
          <span className={styles.decorDots} aria-hidden />

          <div
            className={styles.media}
            role="img"
            aria-label="Sofá renovado con tapizado nuevo"
          />

          <div className={styles.content}>
            <p className={styles.kicker}>Tapizado de muebles</p>
            <h2 id="tapizado-title" className={styles.title}>
              Dale nueva vida
              <br />
              <span className={styles.accent}>a tus muebles</span>
            </h2>
            <p className={styles.text}>
              Renovamos tus sillones, sillas y muebles con telas modernas y resistentes.
            </p>
            <Link className={styles.button} to="/servicios" state={{ svc: 'tapizado' }}>
              Conoce más
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
