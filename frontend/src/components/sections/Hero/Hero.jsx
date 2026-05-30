import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { whatsappQuoteUrl } from '@/config/whatsapp'
import styles from './Hero.module.css'

/**
 * Slides del banner. Para cambiar el fondo de cada uno, reemplaza `image`
 * (escritorio) e `imageMobile` (vertical) por las rutas en /images.
 */
const slides = [
  {
    image: '/images/inicio_fondo_pc.png',
    imageMobile: '/images/inicio_fondo_telefono.png',
    titleTop: 'Crea espacios',
    titleBottom: 'que te',
    highlight: 'inspiren',
    lead: 'Confección, venta e instalación de cortinas, persianas, rollers y más. Calidad, diseño y funcionalidad para cada ambiente.',
  },
  {
    image: '/images/inicio_fondo_pc_2.png',
    imageMobile: '/images/inicio_fondo_telefono_2.png',
    titleTop: 'Dale nueva vida',
    titleBottom: 'a tus',
    highlight: 'muebles',
    lead: 'Tapizado de sillones, sofás, sillas y cojines. Recuperamos tus muebles con telas y acabados de primera calidad.',
  },
  {
    image: '/images/inicio_fondo_pc_3.png',
    imageMobile: '/images/inicio_fondo_telefono_3.png',
    titleTop: 'Controla la luz',
    titleBottom: 'a tu',
    highlight: 'medida',
    lead: 'Cortinas roller, motorizadas y tapizado de muebles: privacidad, confort y estilo para tu hogar.',
  },
]

const AUTOPLAY_MS = 6000

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

const features = [
  {
    label: 'Roller',
    category: 'roller',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="3" rx="1.5" />
        <line x1="6.5" y1="6" x2="6.5" y2="17" />
        <line x1="17.5" y1="6" x2="17.5" y2="17" />
        <rect x="6.5" y="6" width="11" height="11" rx="1" />
        <line x1="9" y1="20" x2="15" y2="20" />
      </>
    ),
  },
  {
    label: 'Persianas',
    category: 'persianas',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="16" x2="20" y2="16" />
      </>
    ),
  },
  {
    label: 'Stores',
    category: 'stores',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="3" rx="1.5" />
        <path d="M5 6v12M19 6v12" />
        <path d="M5 18c2-2 4-2 7-2s5 0 7 2" />
        <line x1="12" y1="18" x2="12" y2="21" />
      </>
    ),
  },
  {
    label: 'Cortinas',
    category: 'cortinas',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="2.5" rx="1.25" />
        <path d="M7 5.5C7 12 5.5 16 5 21M12 5.5C12 12 12 16 12 21M17 5.5C17 12 18.5 16 19 21" />
      </>
    ),
  },
  {
    label: 'Cortinas motorizadas',
    teal: true,
    category: 'motorizadas',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="3" rx="1.5" />
        <rect x="7" y="6" width="10" height="9" rx="1" />
        <circle cx="12" cy="19.5" r="2.5" />
        <path d="M12 18v-1.5M12 21v0.5M10 19.5h-0.5M14 19.5h0.5" />
      </>
    ),
  },
  {
    label: 'Tapizado',
    teal: true,
    category: 'tapizado',
    icon: (
      <>
        <path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        <path d="M5 11a2 2 0 0 0-2 2v3h18v-3a2 2 0 0 0-2-2c-1 0-2 .9-2 2v1H7v-1c0-1.1-1-2-2-2Z" />
        <path d="M5 19v1M19 19v1M5 16v3M19 16v3" />
      </>
    ),
  },
]

export function Hero({ onSelectCategory }) {
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const location = useLocation()
  const navigate = useNavigate()

  const viewProducts = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate('/productos')
  }

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS,
    )
    return () => clearInterval(id)
  }, [index])

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div
        className={styles.bg}
        style={{
          '--bg-pc': `url('${slide.image}')`,
          '--bg-mobile': `url('${slide.imageMobile}')`,
        }}
        aria-hidden
      />
      <div className={styles.overlay} aria-hidden />

      <div className={styles.inner}>
        <div key={index} className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            {slide.titleTop}
            <br />
            {slide.titleBottom} <span className={styles.script}>{slide.highlight}</span>
          </h1>
          <p className={styles.lead}>{slide.lead}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#productos" onClick={viewProducts}>
              Ver productos
            </a>
            <a
              className={styles.secondary}
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Cotizar ahora
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomStack}>
        <div className={styles.dots} role="tablist" aria-label="Cambiar diapositiva">
          {slides.map((s, i) => (
            <button
              key={s.highlight}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <ul className={styles.featureBar}>
          {features.map((f) => (
            <li key={f.label} className={styles.feature}>
              <button
                type="button"
                className={styles.featureBtn}
                onClick={() => onSelectCategory?.(f.category)}
                aria-label={f.category === 'tapizado' ? `Ir a ${f.label}` : `Ver ${f.label} en productos`}
              >
                <svg
                  className={`${styles.featureIcon} ${f.teal ? styles.featureIconTeal : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {f.icon}
                </svg>
                <span className={styles.featureLabel}>{f.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
