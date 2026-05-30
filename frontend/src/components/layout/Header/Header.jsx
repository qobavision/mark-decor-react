import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { whatsappQuoteUrl } from '@/config/whatsapp'
import { LOGO_MAIN } from '@/config/brand'
import styles from './Header.module.css'

const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

function WhatsAppIcon() {
  return (
    <svg
      className={styles.ctaIcon}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

const contentScrollTargets = {
  '/servicios': 'servicios-contenido',
  '/nosotros': 'nosotros-historia',
}

export function Header({ solid = false }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const close = () => setOpen(false)

  const goTo = (to) => (e) => {
    e.preventDefault()
    close()

    if (location.pathname === to) {
      const targetId = contentScrollTargets[to]
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    navigate(to)
  }

  return (
    <header className={`${styles.header} ${solid ? styles.headerSolid : ''}`}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/" onClick={goTo('/')} aria-label="Mark Decor inicio">
          <img className={styles.logo} src={LOGO_MAIN} alt="Mark Decor" />
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.to} onClick={goTo(item.to)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={styles.cta}
          href={whatsappQuoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <WhatsAppIcon />
          Cotizar
        </a>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ''}`}
        aria-label="Menú móvil"
      >
        <ul className={styles.mobileList}>
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.to} onClick={goTo(item.to)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
