import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { whatsappProductUrl } from '@/config/whatsapp'
import styles from './ProductCatalog.module.css'

const CATALOG_PDF = '/pdf/catalogo-mark-decor.pdf'

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

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
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

const categoryIcons = {
  roller: (
    <>
      <rect x="4" y="3" width="16" height="3" rx="1.5" />
      <rect x="6.5" y="6" width="11" height="11" rx="1" />
      <line x1="9" y1="20" x2="15" y2="20" />
    </>
  ),
  persianas: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </>
  ),
  stores: (
    <>
      <rect x="4" y="3" width="16" height="3" rx="1.5" />
      <path d="M5 6v12M19 6v12" />
      <path d="M5 18c2-2 4-2 7-2s5 0 7 2" />
    </>
  ),
  cortinas: (
    <>
      <rect x="3" y="3" width="18" height="2.5" rx="1.25" />
      <path d="M7 5.5C7 12 5.5 16 5 21M12 5.5C12 12 12 16 12 21M17 5.5C17 12 18.5 16 19 21" />
    </>
  ),
  motorizadas: (
    <>
      <rect x="4" y="3" width="16" height="3" rx="1.5" />
      <rect x="7" y="6" width="10" height="9" rx="1" />
      <circle cx="12" cy="19.5" r="2.5" />
    </>
  ),
}

// Sube videos reales a /public/videos (uno por modelo).
const categories = [
  {
    id: 'roller',
    name: 'Roller',
    variants: [
      { title: 'Roller Screen', text: 'Permite el paso de luz natural mientras protege tus espacios del sol y los rayos UV.', image: '/images/roller_pc_and_movil.png', video: '/videos/tiktok_1.mp4' },
      { title: 'Roller Blackout', text: 'Bloquea totalmente la luz exterior. Ideal para dormitorios y espacios que requieran oscuridad total.', image: '/images/roller_pc_and_movil.png', video: '/videos/tiktok_2.mp4' },
      { title: 'Roller Duo / Zebra', text: 'Combina franjas traslúcidas y opacas para regular la luz y mantener tu privacidad.', image: '/images/roller_pc_and_movil.png', video: '/videos/tiktok_3.mp4' },
    ],
  },
  {
    id: 'persianas',
    name: 'Persianas',
    variants: [
      { title: 'Persianas de madera', text: 'Calidez natural y elegancia para vestir tus ambientes.', image: '/images/persianas_pc_and_movil.png', video: '/videos/tiktok_4.mp4' },
      { title: 'Persianas de aluminio', text: 'Resistentes, fáciles de limpiar y de gran durabilidad.', image: '/images/persianas_pc_and_movil.png', video: '/videos/tiktok_5.mp4' },
      { title: 'Persianas horizontales', text: 'Control preciso de la luz con un acabado moderno.', image: '/images/persianas_pc_and_movil.png', video: '/videos/tiktok_6.mp4' },
    ],
  },
  {
    id: 'stores',
    name: 'Stores',
    variants: [
      { title: 'Stores clásicos', text: 'Suavidad y ligereza para vestir tus ventanas.', image: '/images/estores_pc_and_movil.png', video: '/videos/tiktok_1.mp4' },
      { title: 'Stores paquete', text: 'Pliegues ordenados que aportan textura y estilo.', image: '/images/estores_pc_and_movil.png', video: '/videos/tiktok_2.mp4' },
      { title: 'Stores plegables decorativos', text: 'Diseños decorativos que realzan cualquier espacio.', image: '/images/estores_pc_and_movil.png', video: '/videos/tiktok_3.mp4' },
    ],
  },
  {
    id: 'cortinas',
    name: 'Cortinas',
    variants: [
      { title: 'Cortinas decorativas', text: 'Telas y caídas que dan personalidad a tu hogar.', image: '/images/inicio_fondo_pc.png', video: '/videos/tiktok_4.mp4' },
      { title: 'Cortinas blackout', text: 'Oscuridad total para un descanso perfecto.', image: '/images/inicio_fondo_pc.png', video: '/videos/tiktok_5.mp4' },
      { title: 'Visillo o sheer', text: 'Transparencias que aportan luz y privacidad sutil.', image: '/images/inicio_fondo_pc.png', video: '/videos/tiktok_6.mp4' },
    ],
  },
  {
    id: 'motorizadas',
    name: 'Cortinas motorizadas',
    variants: [
      { title: 'Cortinas motorizadas con control remoto', text: 'Controla tus cortinas con un solo botón.', image: '/images/cortinaMotorizada_pc_and_movil.png', video: '/videos/tiktok_1.mp4' },
      { title: 'Automatización por app', text: 'Programa horarios y escenas desde tu celular.', image: '/images/cortinaMotorizada_pc_and_movil.png', video: '/videos/tiktok_2.mp4' },
      { title: 'Integración con Alexa / Google Home', text: 'Comanda tus cortinas por voz con tu asistente.', image: '/images/cortinaMotorizada_pc_and_movil.png', video: '/videos/tiktok_3.mp4' },
    ],
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

export function ProductCatalog({ activeId, onSelect, scrollOnMount = false }) {
  const [internalId, setInternalId] = useState('roller')
  const [activeVideo, setActiveVideo] = useState(null)
  const headRef = useRef(null)
  const skipScrollRef = useRef(!scrollOnMount)
  const currentId = activeId ?? internalId
  const select = onSelect ?? setInternalId

  const active = categories.find((c) => c.id === currentId) ?? categories[0]
  const others = categories.filter((c) => c.id !== active.id)

  const scrollToHead = () => {
    requestAnimationFrame(() => {
      headRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  useLayoutEffect(() => {
    if (!scrollOnMount) return
    headRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [scrollOnMount])

  useEffect(() => {
    setActiveVideo(null)
  }, [currentId])

  useEffect(() => {
    if (skipScrollRef.current) {
      skipScrollRef.current = false
      return
    }
    scrollToHead()
  }, [currentId])

  useEffect(() => {
    if (activeVideo === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeVideo])

  return (
    <section className={styles.section} aria-labelledby="catalogo-title">
      <div className={styles.inner}>
        <div id="productos-contenido" className={styles.contentHead} ref={headRef}>
          <p className={styles.kicker}>Nuestros productos</p>

          <div className={styles.head}>
            <h2 id="catalogo-title" className={styles.title}>
              {active.name}
            </h2>
            <div className={styles.headActions}>
              <a className={styles.headDownload} href={CATALOG_PDF} download>
                <DownloadIcon />
                Descargar catálogo
              </a>
            </div>
          </div>
        </div>

        <ul className={styles.showcase}>
          {active.variants.map((v) => (
            <li key={v.title} className={styles.model}>
              <div
                className={styles.modelMedia}
                style={{ backgroundImage: `url('${v.image}')` }}
                role="img"
                aria-label={v.title}
              />
              <div className={styles.modelBody}>
                <h3 className={styles.modelTitle}>{v.title}</h3>
                <p className={styles.modelText}>{v.text}</p>
                <button
                  type="button"
                  className={styles.modelCta}
                  onClick={() => setActiveVideo(v)}
                  aria-label={`Ver video de ${v.title}`}
                >
                  <PlayIcon />
                  Ver
                </button>
              </div>
            </li>
          ))}
        </ul>

        <ul className={styles.catList}>
          {others.map((c) => (
            <li key={c.id} className={styles.catRow}>
              <button
                type="button"
                className={styles.catLabel}
                onClick={() => select(c.id)}
              >
                <span className={styles.catIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {categoryIcons[c.id]}
                  </svg>
                </span>
                <span className={styles.catText}>
                  <span className={styles.catName}>{c.name}</span>
                  <span className={styles.catArrow} aria-hidden>
                    <ArrowIcon />
                  </span>
                </span>
              </button>

              <ul className={styles.thumbs}>
                {c.variants.map((v) => (
                  <li key={v.title} className={styles.thumb}>
                    <button
                      type="button"
                      className={styles.thumbBtn}
                      onClick={() => select(c.id)}
                      aria-label={`Ver ${c.name}: ${v.title}`}
                    >
                      <span
                        className={styles.thumbMedia}
                        style={{ backgroundImage: `url('${v.image}')` }}
                      />
                      <span className={styles.thumbLabel}>{v.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
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

      {activeVideo && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActiveVideo(null)}
              aria-label="Cerrar"
            >
              <CloseIcon />
            </button>
            <video
              className={styles.modalVideo}
              src={activeVideo.video}
              controls
              autoPlay
              playsInline
            />
            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{activeVideo.title}</h3>
              <p className={styles.modalText}>{activeVideo.text}</p>
              <a
                className={styles.modalQuote}
                href={whatsappProductUrl(activeVideo.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
