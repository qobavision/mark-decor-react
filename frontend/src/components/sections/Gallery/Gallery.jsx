import { useEffect, useState } from 'react'
import styles from './Gallery.module.css'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

const projects = [
  { src: '/videos/tiktok_1.mp4', title: 'Proyecto Mark Decor 1' },
  { src: '/videos/tiktok_2.mp4', title: 'Proyecto Mark Decor 2' },
  { src: '/videos/tiktok_3.mp4', title: 'Proyecto Mark Decor 3' },
  { src: '/videos/tiktok_4.mp4', title: 'Proyecto Mark Decor 4' },
  { src: '/videos/tiktok_5.mp4', title: 'Proyecto Mark Decor 5' },
  { src: '/videos/tiktok_6.mp4', title: 'Proyecto Mark Decor 6' },
]

const MOBILE_QUERY = '(max-width: 560px)'
const getStep = (mobile) => (mobile ? 2 : 4)
const getInitial = (mobile) => (mobile ? 1 : 4)

export function Gallery() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  )
  const [visible, setVisible] = useState(getInitial(isMobile))
  const [active, setActive] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => {
      setIsMobile(e.matches)
      setVisible(getInitial(e.matches))
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const step = getStep(isMobile)
  const initial = getInitial(isMobile)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const handleEnter = (e) => {
    const video = e.currentTarget.querySelector('video')
    if (video) {
      video.currentTime = 0
      video.play().catch(() => {})
    }
  }

  const handleLeave = (e) => {
    const video = e.currentTarget.querySelector('video')
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  const shown = projects.slice(0, visible)

  return (
    <section id="galeria" className={styles.section} aria-labelledby="galeria-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>Nuestro trabajo</p>
        <h2 id="galeria-title" className={styles.title}>
          Proyectos <span className={styles.accent}>que inspiran</span>
        </h2>
        <p className={styles.subtitle}>
          Descubre cómo transformamos espacios en lugares únicos y funcionales.
          Cada proyecto refleja nuestra pasión por el diseño y los detalles.
        </p>

        <ul className={styles.grid}>
          {shown.map((p, i) => (
            <li key={p.src} className={styles.card}>
              <button
                type="button"
                className={styles.cardBtn}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={() => setActive(i)}
                aria-label={`Reproducir: ${p.title}`}
              >
                <video
                  className={styles.video}
                  src={`${p.src}#t=0.1`}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <span className={styles.overlay} aria-hidden />
                <span className={styles.playBadge} aria-hidden>
                  <PlayIcon />
                </span>
                <span className={styles.caption}>{p.title}</span>
              </button>
            </li>
          ))}
        </ul>

        {(visible < projects.length || visible > initial) && (
          <div className={styles.actions}>
            {visible < projects.length ? (
              <button
                type="button"
                className={styles.more}
                onClick={() => setVisible((v) => Math.min(v + step, projects.length))}
              >
                Ver más proyectos
              </button>
            ) : (
              <button
                type="button"
                className={styles.less}
                onClick={() => setVisible(initial)}
              >
                Ver menos
              </button>
            )}
          </div>
        )}
      </div>

      {active !== null && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={shown[active]?.title}
          onClick={() => setActive(null)}
        >
          <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActive(null)}
              aria-label="Cerrar"
            >
              <CloseIcon />
            </button>
            <video
              className={styles.modalVideo}
              src={shown[active]?.src}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
