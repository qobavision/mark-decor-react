import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './About.module.css'

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      <path d="M12 4V2M20 12h2M12 20v2M4 12H2" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
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

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <circle cx="12" cy="10" r="2.2" />
      <path d="M9.5 16c.7-1.2 1.5-1.8 2.5-1.8s1.8.6 2.5 1.8" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20s-7-4.4-7-9.5A3.8 3.8 0 0 1 12 7a3.8 3.8 0 0 1 7 3.5C19 15.6 12 20 12 20Z" />
    </svg>
  )
}

const values = [
  { title: 'Calidad', tone: 'pink', icon: <ShieldCheckIcon />, text: 'Trabajamos con materiales de alta calidad para asegurar durabilidad y estilo.' },
  { title: 'Confianza', tone: 'teal', icon: <HandshakeIcon />, text: 'Construimos relaciones duraderas basadas en la transparencia y el respeto.' },
  { title: 'Compromiso', tone: 'pink', icon: <CheckIcon />, text: 'Nos involucramos en cada proyecto como si fuera nuestro.' },
  { title: 'Pasión', tone: 'teal', icon: <HeartIcon />, text: 'Nos mueve transformar espacios y superar expectativas.' },
]

const team = [
  { name: 'Ronald Gómez', role: 'Fundador y Gerente General', photo: '/images/gerente_pc_and_movil.jpg', text: 'Nos apasiona ofrecer soluciones excepcionales en decoración de interiores y ser el mejor aliado para nuestros clientes.' },
  { name: 'Alfredo Naucar', role: 'Asesor Comercial e Instalador', photo: '/images/asesor_comercial_pc_and_movil.png', text: 'Nuestros principales compromisos son la seguridad, la puntualidad y la comodidad en cada proyecto.' },
  { name: 'Rita Arce', role: 'Diseñadora de Interiores', photo: '/images/diseñadora_pc_and_movil.png', text: 'Nuestra dedicación es entender las necesidades de cada cliente para brindarle una experiencia excepcional.' },
  { name: 'Jorge Martínez', role: 'Instalador Profesional', photo: '/images/instalador_pc_and_movil.png', text: 'Garantiza instalaciones seguras, precisas y de alta calidad.' },
]

export function About({ scrollOnMount = false }) {
  const [active, setActive] = useState(null)
  const storyRef = useRef(null)

  useLayoutEffect(() => {
    if (!scrollOnMount) return
    storyRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [scrollOnMount])

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

  const member = active !== null ? team[active] : null

  return (
    <section id="nosotros" className={styles.section} aria-labelledby="nosotros-title">
      <div className={styles.inner}>
        <h2 id="nosotros-title" className={styles.srOnly}>
          Nosotros
        </h2>

        {/* Nuestra historia */}
        <div className={styles.storyRow}>
          <div className={styles.storyContent}>
            <h3 id="nosotros-historia" ref={storyRef} className={styles.blockTitle}>
              Nuestra <span className={styles.accent}>historia</span>
            </h3>
            <p className={styles.paragraph}>
              Mark Decor nació de la pasión por transformar espacios y de la
              convicción de que cada ambiente merece un toque único. Lo que
              comenzó como un pequeño taller, hoy es una marca consolidada en el
              rubro de la decoración de interiores.
            </p>
            <p className={styles.paragraph}>
              Con más de una década de experiencia, hemos acompañado a cientos de
              familias y empresas, ofreciendo cortinas, tapizados, persianas,
              rollers y estores hechos a la medida de cada proyecto.
            </p>
            <p className={styles.paragraph}>
              Cada instalación refleja nuestro compromiso: un trabajo cuidado,
              puntual y de la mano de un equipo experto, para que tu espacio quede
              tan funcional como hermoso.
            </p>
          </div>
          <div className={styles.storyMediaWrap}>
            <span className={styles.dotsTopRight} aria-hidden />
            <span className={`${styles.blob} ${styles.blobPink}`} aria-hidden />
            <div
              className={styles.storyMedia}
              role="img"
              aria-label="Espacio decorado por Mark Decor"
            />
          </div>
        </div>

        {/* Misión y visión */}
        <h3 className={styles.blockTitle}>
          Nuestra <span className={styles.accentTeal}>misión y visión</span>
        </h3>
        <div className={styles.mvRow}>
          <div className={styles.mvCards}>
            <article className={styles.mvCard}>
              <span className={`${styles.mvIcon} ${styles.tonePink}`}>
                <TargetIcon />
              </span>
              <h4 className={styles.mvCardTitle}>Misión</h4>
              <p className={styles.mvCardText}>
                Transformar cada espacio en un lugar acogedor y elegante que
                refleje el estilo único de nuestros clientes, brindando una
                experiencia cómoda y placentera gracias a una amplia gama de
                productos y un equipo de instaladores altamente capacitados.
              </p>
            </article>
            <article className={styles.mvCard}>
              <span className={`${styles.mvIcon} ${styles.toneTeal}`}>
                <EyeIcon />
              </span>
              <h4 className={styles.mvCardTitle}>Visión</h4>
              <p className={styles.mvCardText}>
                Generar un impacto positivo en la sociedad, transformando hogares
                y espacios comerciales en ambientes acogedores y elegantes que
                reflejen la personalidad y el estilo de vida de cada cliente.
              </p>
            </article>
          </div>
          <div className={styles.mvMediaWrap}>
            <span className={`${styles.blob} ${styles.blobTeal}`} aria-hidden />
            <div
              className={styles.mvMedia}
              role="img"
              aria-label="Detalle de cortinas Mark Decor"
            />
          </div>
        </div>

        {/* Valores */}
        <h3 className={styles.blockTitle}>
          Nuestros <span className={styles.accent}>valores</span>
        </h3>
        <ul className={styles.values}>
          {values.map((v) => (
            <li key={v.title} className={styles.valueItem}>
              <span
                className={`${styles.valueIcon} ${
                  v.tone === 'teal' ? styles.toneTeal : styles.tonePink
                }`}
              >
                {v.icon}
              </span>
              <h4 className={styles.valueTitle}>{v.title}</h4>
              <p className={styles.valueText}>{v.text}</p>
            </li>
          ))}
        </ul>

        {/* Equipo */}
        <h3 className={styles.blockTitle}>
          Nuestro <span className={styles.accentTeal}>equipo</span>
        </h3>
        <p className={styles.teamIntro}>
          Contamos con un equipo de profesionales apasionados por el diseño, la
          decoración y la funcionalidad. Juntos trabajamos para crear espacios
          únicos y personalizados.
        </p>
        <ul className={styles.team}>
          {team.map((m, i) => (
            <li key={m.name} className={styles.member}>
              <button
                type="button"
                className={styles.memberBtn}
                onClick={() => setActive(i)}
                aria-label={`Ver información de ${m.name}`}
              >
                <span
                  className={styles.memberPhoto}
                  style={{ backgroundImage: `url('${m.photo}')` }}
                />
                <h4 className={styles.memberName}>{m.name}</h4>
                <p className={styles.memberRole}>{m.role}</p>
                <p className={styles.memberText}>{m.text}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {member && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={member.name}
          onClick={() => setActive(null)}
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActive(null)}
              aria-label="Cerrar"
            >
              <CloseIcon />
            </button>
            <div
              className={styles.modalPhoto}
              style={{ backgroundImage: `url('${member.photo}')` }}
              role="img"
              aria-label={member.name}
            />
            <h4 className={styles.modalName}>{member.name}</h4>
            <p className={styles.modalRole}>{member.role}</p>
            <p className={styles.modalText}>{member.text}</p>
          </div>
        </div>
      )}
    </section>
  )
}
