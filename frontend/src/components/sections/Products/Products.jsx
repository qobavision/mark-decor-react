import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Products.module.css'

const CAROUSEL_BREAKPOINT = 980
const SCROLL_SPEED = 0.32
const IDLE_RESUME_MS = 2500

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

const marqueeProducts = [...products, ...products]

const badges = [
  { icon: <MedalIcon />, l1: 'Materiales', l2: 'de alta calidad' },
  { icon: <ToolsIcon />, l1: 'Instalación', l2: 'profesional' },
  { icon: <RulerIcon />, l1: 'Diseños', l2: 'a tu medida' },
  { icon: <ShieldIcon />, l1: 'Garantía', l2: 'asegurada' },
]

function ProductCard({ product, tabIndex, ariaHidden = false }) {
  const tabClass = tabIndex % 2 === 0 ? styles.tabPink : styles.tabTeal

  return (
    <li className={styles.card} aria-hidden={ariaHidden || undefined}>
      <Link
        className={styles.cardLink}
        to="/productos"
        state={{ cat: product.cat }}
        aria-label={product.label}
        tabIndex={ariaHidden ? -1 : undefined}
      >
        <div
          className={styles.media}
          style={{ backgroundImage: `url('${product.image}')` }}
          role="img"
          aria-label={product.label}
        />
        <span className={`${styles.tab} ${tabClass}`}>
          <span className={styles.tabLabel}>{product.label}</span>
          <ArrowIcon />
        </span>
      </Link>
    </li>
  )
}

export function Products() {
  const viewportRef = useRef(null)
  const autoPausedRef = useRef(false)
  const isAutoScrollingRef = useRef(false)
  const idleTimerRef = useRef(null)

  const resumeAuto = () => {
    autoPausedRef.current = false
  }

  const pauseAuto = () => {
    autoPausedRef.current = true
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(resumeAuto, IDLE_RESUME_MS)
  }

  const handleTouchStart = () => {
    pauseAuto()
  }

  const handleTouchEnd = () => {
    pauseAuto()
  }

  const handleScroll = () => {
    if (isAutoScrollingRef.current) return
    pauseAuto()
  }

  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const mq = window.matchMedia(`(max-width: ${CAROUSEL_BREAKPOINT}px)`)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let rafId = 0

    const loopScroll = () => {
      const half = viewport.scrollWidth / 2
      if (half > 0 && viewport.scrollLeft >= half) {
        viewport.scrollLeft -= half
      }
    }

    const tick = () => {
      if (mq.matches && !reduceMotion.matches && !autoPausedRef.current) {
        isAutoScrollingRef.current = true
        viewport.scrollLeft += SCROLL_SPEED
        loopScroll()
        requestAnimationFrame(() => {
          isAutoScrollingRef.current = false
        })
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    const onMqChange = () => {
      if (!mq.matches) resumeAuto()
    }

    mq.addEventListener('change', onMqChange)

    return () => {
      cancelAnimationFrame(rafId)
      mq.removeEventListener('change', onMqChange)
    }
  }, [])

  return (
    <section id="productos" className={styles.section} aria-labelledby="productos-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>Nuestros productos</p>
        <h2 id="productos-title" className={styles.title}>
          Diseño y funcionalidad en <span className={styles.accent}>cada detalle</span>
        </h2>

        <ul className={styles.grid} aria-label="Productos Mark Decor">
          {products.map((p, i) => (
            <ProductCard key={p.label} product={p} tabIndex={i} />
          ))}
        </ul>

        <div
          ref={viewportRef}
          className={styles.marqueeViewport}
          aria-label="Productos Mark Decor"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
        >
          <ul className={styles.marqueeTrack}>
            {marqueeProducts.map((p, i) => (
              <ProductCard
                key={`${p.cat}-${i}`}
                product={p}
                tabIndex={i % products.length}
                ariaHidden={i >= products.length}
              />
            ))}
          </ul>
        </div>

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
