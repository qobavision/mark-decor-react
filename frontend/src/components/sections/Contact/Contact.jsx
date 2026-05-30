import { useState } from 'react'
import {
  ADDRESS,
  ADDRESS_SHORT,
  EMAIL,
  HOURS,
  HOURS_WEEKEND,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/config/contact'
import { buildWhatsAppUrl, whatsappInfoUrl } from '@/config/whatsapp'
import styles from './Contact.module.css'

const contactCards = [
  {
    title: 'Llámanos',
    icon: 'phone',
    main: PHONE_DISPLAY,
    sub: HOURS,
    href: PHONE_TEL,
  },
  {
    title: 'WhatsApp',
    icon: 'whatsapp',
    main: PHONE_DISPLAY,
    sub: 'Escríbenos por WhatsApp',
    href: whatsappInfoUrl,
    external: true,
  },
  {
    title: 'Escríbenos',
    icon: 'mail',
    main: EMAIL,
    sub: 'Te responderemos lo antes posible',
    href: `mailto:${EMAIL}`,
  },
  {
    title: 'Visítanos',
    icon: 'pin',
    main: ADDRESS,
    sub: ADDRESS_SHORT,
    href: MAPS_URL,
    external: true,
  },
]

const faqs = [
  {
    q: '¿Hacen visitas a domicilio?',
    a: 'Sí. Coordinamos visitas para medición, asesoría y evaluación de tu espacio sin costo adicional en zonas de cobertura.',
  },
  {
    q: '¿Cuál es el tiempo de entrega?',
    a: 'Depende del producto y del proyecto. En general, la confección e instalación toma entre 5 y 15 días hábiles después de confirmar el pedido.',
  },
  {
    q: '¿Los productos tienen garantía?',
    a: 'Sí. Todos nuestros trabajos cuentan con garantía por materiales, confección e instalación según el tipo de servicio contratado.',
  },
  {
    q: '¿Cómo solicito una cotización?',
    a: 'Puedes escribirnos por WhatsApp, completar el formulario de esta página o llamarnos. Te pediremos medidas, fotos y preferencias para prepararte una propuesta.',
  },
]

const helpOptions = [
  'Cotización de cortinas / persianas',
  'Tapizado de muebles',
  'Instalación o mantenimiento',
  'Visita y medición a domicilio',
  'Otro',
]

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
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

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function IdeaIcon() {
  return (
    <svg
      className={styles.promoIdeaSvg}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />
      <path d="M9 14.5h6" />
    </svg>
  )
}

function CardIcon({ type }) {
  const icons = { phone: <PhoneIcon />, whatsapp: <WhatsAppIcon />, mail: <MailIcon />, pin: <PinIcon /> }
  return icons[type]
}

export function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const userEmail = data.get('email')
    const userPhone = data.get('phone')
    const topic = data.get('topic')
    const message = data.get('message')

    const text = [
      'Hola Mark Decor, quisiera contactarlos.',
      '',
      `Nombre: ${name}`,
      `Correo: ${userEmail}`,
      `Teléfono: ${userPhone}`,
      `Motivo: ${topic}`,
      '',
      `Mensaje: ${message}`,
    ].join('\n')

    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
    e.currentTarget.reset()
  }

  return (
    <section id="contacto" className={styles.section} aria-labelledby="contacto-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.kicker}>Contáctanos</p>
          <h1 id="contacto-title" className={styles.title}>
            ¿Cómo podemos ayudarte?
          </h1>
        </header>

        <ul className={styles.cards}>
          {contactCards.map((card) => (
            <li key={card.title}>
              <a
                className={styles.card}
                href={card.href}
                {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.cardIcon}>
                  <CardIcon type={card.icon} />
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.cardTitle}>{card.title}</span>
                  <span className={styles.cardMain}>{card.main}</span>
                  <span className={styles.cardSub}>{card.sub}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.mainGrid}>
          <div className={styles.formBlock}>
            <h2 className={styles.blockTitle}>Envíanos un mensaje</h2>
            <p className={styles.blockLead}>
              Completa el formulario y te responderemos a la brevedad por WhatsApp o correo.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span className={styles.label}>Nombre completo *</span>
                <input className={styles.input} type="text" name="name" required autoComplete="name" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Correo electrónico *</span>
                <input className={styles.input} type="email" name="email" required autoComplete="email" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Teléfono / WhatsApp *</span>
                <input className={styles.input} type="tel" name="phone" required autoComplete="tel" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>¿En qué podemos ayudarte? *</span>
                <select className={styles.select} name="topic" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {helpOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Mensaje *</span>
                <textarea className={styles.textarea} name="message" rows={4} required />
              </label>
              <button className={styles.submit} type="submit">
                <SendIcon />
                Enviar mensaje
              </button>
              <p className={styles.privacy}>
                <LockIcon />
                Tu información está 100% protegida.
              </p>
            </form>
          </div>

          <div className={styles.mapBlock}>
            <h2 className={styles.blockTitle}>¿Dónde estamos?</h2>
            <p className={styles.blockLead}>
              Visítanos en nuestro showroom o coordina una cita previa.
            </p>
            <div className={styles.mapWrap}>
              <iframe
                className={styles.map}
                title="Ubicación Mark Decor"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={styles.locationInfo}>
              <p className={styles.locationName}>Mark Decor</p>
              <p className={styles.locationText}>{ADDRESS}</p>
              <p className={styles.locationText}>{HOURS}</p>
              <p className={styles.locationMuted}>{HOURS_WEEKEND}</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomGrid}>
          <div className={styles.faqBlock}>
            <p className={styles.kicker}>Preguntas frecuentes</p>
            <h2 className={styles.faqTitle}>¿Tienes dudas? Aquí te ayudamos</h2>
            <ul className={styles.faqList}>
              {faqs.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <li key={item.q} className={styles.faqItem}>
                    <button
                      type="button"
                      className={styles.faqBtn}
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      {item.q}
                      <ChevronIcon open={isOpen} />
                    </button>
                    {isOpen && <p className={styles.faqAnswer}>{item.a}</p>}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={styles.promoBlock}>
            <div className={styles.promoMedia} role="img" aria-label="Interior con cortinas Mark Decor" />
            <div className={styles.promoPanel}>
              <div className={styles.promoPanelLeft}>
                <span className={styles.promoIcon} aria-hidden>
                  <WhatsAppIcon />
                </span>
                <p className={styles.promoTitle}>Asesoría personalizada</p>
                <p className={styles.promoText}>
                  Te ayudamos a elegir la mejor solución para tu hogar u oficina.
                </p>
              </div>
              <div className={styles.promoPanelRight}>
                <a className={styles.promoLink} href={whatsappInfoUrl} target="_blank" rel="noopener noreferrer">
                  <span>Cuéntanos</span>
                  <span>tu</span>
                  <span className={styles.promoIdeaLine}>
                    idea
                    <span className={styles.promoIdeaIcon} aria-hidden>
                      <IdeaIcon />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
