import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/config/contact'
import { SOCIAL_LINKS } from '@/config/social'
import { whatsappQuoteUrl } from '@/config/whatsapp'
import styles from './Footer.module.css'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.4-1.3h1.4V5.8c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.6V14h2.2v7h2.7Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 3c.3 2 1.6 3.6 3.7 3.9v2.6c-1.3 0-2.6-.4-3.7-1.1v5.9a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3H16Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2V5Z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, icon: <FacebookIcon /> },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: <InstagramIcon /> },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: <TikTokIcon /> },
  { label: 'WhatsApp', href: whatsappQuoteUrl, icon: <WhatsAppIcon /> },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <img className={styles.logo} src="/images/logo.svg" alt="Mark Decor" />
          <p className={styles.tagline}>
            Transformamos tus espacios con estilo, funcionalidad y calidad.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Contáctanos</p>
          <ul className={styles.contactList}>
            <li>
              <PhoneIcon />
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <PinIcon />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <ClockIcon />
              <span>{HOURS}</span>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Síguenos</p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                className={styles.social}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Reclamaciones</p>
          <a className={styles.claimBtn} href="#" aria-label="Libro de reclamaciones">
            <BookIcon />
            <span>
              Libro de
              <br />
              Reclamaciones
            </span>
          </a>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={styles.barInner}>
          <p className={styles.copy}>
            © {year} Mark Decor. Todos los derechos reservados.
          </p>
          <nav className={styles.legal} aria-label="Legal">
            <a href="#">Políticas de privacidad</a>
            <span aria-hidden>|</span>
            <a href="#">Términos y condiciones</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
