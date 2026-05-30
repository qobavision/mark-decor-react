import { whatsappProjectUrl, whatsappQuoteUrl } from '@/config/whatsapp'
import styles from './CtaBanner.module.css'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

/** @param {{ variant?: 'experiences' | 'choose' | 'advisory' }} props */
export function CtaBanner({ variant = 'experiences' }) {
  if (variant === 'choose') {
    return (
      <section className={styles.section} aria-label="Asesoría de productos">
        <div className={styles.bannerChoose}>
          <div className={styles.chooseMediaWrap}>
            <div className={styles.chooseMedia} role="img" aria-label="Asesoría Mark Decor" />
            <span className={styles.chooseMediaFade} aria-hidden />
          </div>

          <div className={styles.chooseContent}>
            <h2 className={styles.chooseTitle}>
              ¿No sabes cuál <span className={styles.chooseAccent}>elegir?</span>
            </h2>
            <p className={styles.chooseText}>
              Te asesoramos según tu espacio, estilo y necesidad.
            </p>
          </div>

          <div className={styles.chooseAction}>
            <a
              className={styles.chooseCta}
              href={whatsappProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Cotiza tu proyecto
            </a>
          </div>

          <span className={styles.chooseDecorDots} aria-hidden />
          <span className={styles.chooseDecorBlob} aria-hidden />
        </div>
      </section>
    )
  }

  if (variant === 'advisory') {
    return (
      <section className={styles.section} aria-label="Cotiza tu proyecto">
        <div className={styles.bannerAdvisory}>
          <div className={styles.advisoryContent}>
            <h2 className={styles.advisoryTitle}>
              Tu espacio merece una solución a medida
            </h2>
            <p className={styles.advisoryText}>
              Coordinamos visita, medición e instalación con nuestro equipo.
              Cuéntanos tu proyecto y te respondemos por WhatsApp.
            </p>
            <a
              className={styles.advisoryCta}
              href={whatsappProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Cotiza tu proyecto
            </a>
          </div>

          <div className={styles.advisoryVisual}>
            <svg
              className={styles.advisoryCurve}
              viewBox="0 0 80 200"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path fill="#fff" d="M0,0 C55,18 45,182 0,200 L0,0 Z" />
            </svg>
            <div
              className={styles.advisoryMedia}
              role="img"
              aria-label="Asesora Mark Decor"
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section} aria-label="Cotiza tu proyecto">
      <div className={styles.bannerExperiences}>
        <div className={styles.experiencesPanel}>
          <h2 className={styles.experiencesTitle}>
            Creamos más que espacios, creamos experiencias.
          </h2>
          <a
            className={styles.experiencesCta}
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Cotiza ahora
          </a>
        </div>
        <div className={styles.experiencesMedia} role="img" aria-label="Sala decorada por Mark Decor" />
      </div>
    </section>
  )
}
