import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import { socialFloatUrls } from "../config/social.js";

// ============================================
// ICONOS (SVG inline)
// ============================================

const Icons = {
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  arrowRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  chevronDown: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  ruler: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  ),
  palette: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.01 17.461 2 12 2z" />
    </svg>
  ),
  tools: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  ),
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  curtains: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v18" />
      <path d="M20 3v18" />
      <path d="M4 7h16" />
      <path d="M4 11h16" />
      <path d="M4 15h16" />
      <path d="M4 19h16" />
    </svg>
  ),
  blinds: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  ),
  sunshade: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 10-4-10" />
      <path d="M8 18l4-10 4 10" />
    </svg>
  ),
  sofa: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
    </svg>
  ),
};

function SocialFloat({ open }) {
  if (open) return null;

  const items = [
    { id: "whatsapp", href: socialFloatUrls.whatsapp, label: "Escríbenos por WhatsApp", icon: Icons.whatsapp, mod: "whatsapp" },
    { id: "tiktok", href: socialFloatUrls.tiktok, label: "TikTok", icon: Icons.tiktok, mod: "tiktok" },
    { id: "instagram", href: socialFloatUrls.instagram, label: "Instagram", icon: Icons.instagram, mod: "instagram" },
    { id: "facebook", href: socialFloatUrls.facebook, label: "Facebook", icon: Icons.facebook, mod: "facebook" },
  ];

  return (
    <nav className="social-float" aria-label="Redes sociales">
      <ul className="social-float__list">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`social-float__item${index === 0 ? " social-float__item--lead" : ""}`}
          >
            <a
              href={item.href}
              className={`social-float__link social-float__link--${item.mod}`}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-float__icon" aria-hidden="true">
                {item.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const categories = [
  {
    id: 1,
    title: "Cortinas Roller",
    description: "Elegancia y funcionalidad en un solo sistema. Control de luz preciso.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    badge: "Más vendido",
    icon: Icons.curtains,
  },
  {
    id: 2,
    title: "Persianas",
    description: "Diseños clásicos y modernos para controlar la privacidad y la luz.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    icon: Icons.blinds,
  },
  {
    id: 3,
    title: "Estores & Toldos",
    description: "Soluciones versátiles para interior y exterior con estilo único.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    icon: Icons.sunshade,
  },
  {
    id: 4,
    title: "Tapizados & Cojines",
    description: "Renueva tus espacios con telas premium y acabados a medida.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    icon: Icons.sofa,
  },
];

const features = [
  {
    icon: Icons.ruler,
    title: "Medición Precisa",
    text: "Visitamos tu espacio y tomamos medidas exactas para un ajuste perfecto.",
  },
  {
    icon: Icons.palette,
    title: "Diseño Personalizado",
    text: "Miles de telas, colores y texturas para que tu estilo sea único.",
  },
  {
    icon: Icons.tools,
    title: "Instalación Profesional",
    text: "Equipo especializado que garantiza acabados impecables en cada proyecto.",
  },
];

const galleryItems = [
  {
    id: 1,
    title: "Sala Minimalista",
    category: "Cortinas Roller",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Dormitorio Principal",
    category: "Persianas blackout",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Terraza Moderna",
    category: "Toldos retráctiles",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Oficina Corporativa",
    category: "Estores enrollables",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Cocina Contemporánea",
    category: "Cortinas sheer",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Living de Lujo",
    category: "Tapizado a medida",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
];

const processSteps = [
  {
    icon: Icons.search,
    title: "Consulta",
    description: "Agenda una visita gratuita. Evaluamos tu espacio, necesidades y estilo.",
  },
  {
    icon: Icons.ruler,
    title: "Medición",
    description: "Tomamos medidas exactas y te mostramos muestras de telas y materiales.",
  },
  {
    icon: Icons.palette,
    title: "Fabricación",
    description: "Creamos tu producto a medida con los mejores materiales del mercado.",
  },
  {
    icon: Icons.tools,
    title: "Instalación",
    description: "Instalamos con precisión y dejamos todo impecable. Garantía incluida.",
  },
];

const productCatalog = [
  {
    id: "roller",
    title: "Cortinas roller",
    excerpt: "Sistema enrollable en screen, blackout o translúcido. Ideal para living y dormitorios; motorización disponible.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=960&q=80",
    tags: ["Medida exacta", "Fácil mantenimiento"],
  },
  {
    id: "persianas",
    title: "Persianas",
    excerpt: "Verticales u horizontales, aluminio o madera. Control preciso de luz y privacidad con estética clásica o minimal.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=960&q=80",
    tags: ["Blackout", "Oficina y hogar"],
  },
  {
    id: "estores",
    title: "Estores",
    excerpt: "Paqueto, plisado o enrollable: soluciones compactas para ventanas especiales y espacios reducidos.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=960&q=80",
    tags: ["Ventanas pequeñas", "Sobre medida"],
  },
  {
    id: "toldos",
    title: "Toldos",
    excerpt: "Protección solar en terrazas y fachadas. Brazos retráctiles y lonas de alta durabilidad.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=960&q=80",
    tags: ["Exterior", "Resistente UV"],
  },
  {
    id: "tapizados",
    title: "Tapizados",
    excerpt: "Renovación de sillones y cabeceras con telas antimanchas y acabados artesanales.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=960&q=80",
    tags: ["Muebles a medida", "Telas premium"],
  },
  {
    id: "cojines",
    title: "Cojines y textiles",
    excerpt: "Cojines decorativos, fundas y complementos para unificar la paleta de tu ambiente.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=960&q=80",
    tags: ["Decoración", "Combinaciones"],
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Mark Decor transformó completamente mi living. Las cortinas roller quedaron perfectas, la atención fue impecable y la instalación super rápida. ¡Totalmente recomendados!",
    name: "María Fernanda López",
    role: "Cliente Residencial - Miraflores",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "Contratamos para renovar todas las persianas de nuestra oficina. El resultado superó nuestras expectativas. Profesionales, puntuales y con un ojo increíble para el diseño.",
    name: "Carlos Mendoza",
    role: "CEO - Grupo Andino",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "Los tapizados y cojines que hicieron para mi terraza son espectaculares. La calidad de las telas es premium y el acabado es de otro nivel. Volveré a contratarlos sin duda.",
    name: "Luciana Rojas",
    role: "Diseñadora de Interiores",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    stars: 5,
  },
];

const footerLinks = {
  productos: [
    { label: "Cortinas Roller", href: "#" },
    { label: "Persianas", href: "#" },
    { label: "Estores", href: "#" },
    { label: "Toldos", href: "#" },
    { label: "Tapizados", href: "#" },
    { label: "Cojines", href: "#" },
    { label: "Mamparas", href: "#" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Nuestro Proceso", href: "#" },
    { label: "Galería de Proyectos", href: "#" },
    { label: "Blog de Decoración", href: "#" },
    { label: "Trabaja con Nosotros", href: "#" },
  ],
  soporte: [
    { label: "Centro de Ayuda", href: "#" },
    { label: "Preguntas Frecuentes", href: "#" },
    { label: "Garantía", href: "#" },
    { label: "Política de Devolución", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
};

function Header({ scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Galería", href: "#galeria" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <div className="header__logo-icon">M</div>
          <span className="header__logo-text">
            Mark <span>Decor</span>
          </span>
        </a>

        <nav
          className={`header__nav ${mobileMenuOpen ? "header__nav--open" : ""}`}
          aria-hidden={!mobileMenuOpen}
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="header__nav-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#login" className="header__login" onClick={closeMenu}>
            {Icons.user}
            <span>Ingresar</span>
          </a>
          <button
            type="button"
            className="header__mobile-toggle"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__background">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop"
          alt="Interior elegante con cortinas modernas"
        />
      </div>

      <div className="hero__content">
        <div className="hero__eyebrow">Decoración de Interiores</div>
        <h1 className="hero__title">
          Transforma tus espacios con <span>diseño a medida</span>
        </h1>
        <p className="hero__description">
          Especialistas en cortinas roller, persianas, estores, toldos y tapizados. Creamos ambientes únicos con materiales premium y
          acabados impecables.
        </p>
        <div className="hero__actions">
          <a href="#productos" className="btn btn--primary">
            Explorar Productos
            {Icons.arrowRight}
          </a>
          <a href="#contacto" className="btn btn--secondary">
            Cotizar Proyecto
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Descubre más</span>
        {Icons.chevronDown}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="productos" className="categories">
      <div className="section-header">
        <span className="section-header__eyebrow">Nuestros Productos</span>
        <h2 className="section-header__title">
          Soluciones para cada <span>espacio</span>
        </h2>
        <p className="section-header__description">
          Desde cortinas blackout para tu dormitorio hasta toldos para tu terraza. Tenemos la solución perfecta para cada necesidad.
        </p>
      </div>

      <div className="categories__grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.title} className="category-card__image" loading="lazy" />
            <div className="category-card__overlay" />
            {cat.badge ? <span className="category-card__badge">{cat.badge}</span> : null}
            <div className="category-card__content">
              <h3 className="category-card__title">
                {cat.title}
                <span className="category-card__arrow">{Icons.arrowRight}</span>
              </h3>
              <p className="category-card__description">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCatalog() {
  return (
    <section id="catalogo" className="product-catalog">
      <div className="section-header">
        <span className="section-header__eyebrow">Catálogo</span>
        <h2 className="section-header__title">
          Línea completa de <span>productos</span>
        </h2>
        <p className="section-header__description">
          Cada solución se fabrica e instala a medida. Elige categoría y cuéntanos tu proyecto: te asesoramos sin compromiso.
        </p>
      </div>

      <div className="product-catalog__list">
        {productCatalog.map((product, index) => (
          <article
            key={product.id}
            className={`product-card${index % 2 === 1 ? " product-card--reverse" : ""}`}
          >
            <div className="product-card__media">
              <img src={product.image} alt={product.title} loading="lazy" />
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__excerpt">{product.excerpt}</p>
              <ul className="product-card__tags">
                {product.tags.map((tag) => (
                  <li key={tag} className="product-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="product-card__cta btn btn--outline">
                Consultar este producto
                {Icons.arrowRight}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <div className="about__image">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop" alt="Showroom de Mark Decor" />
          </div>
        </div>

        <div className="about__content">
          <span className="about__eyebrow">Sobre Nosotros</span>
          <h2 className="about__title">
            Más de 15 años creando <span>espacios únicos</span>
          </h2>
          <p className="about__description">
            En Mark Decor combinamos artesanía tradicional con tecnología de vanguardia. Cada proyecto es una obra personalizada, diseñada
            para reflejar tu personalidad y satisfacer tus necesidades de confort, privacidad y estética.
          </p>

          <div className="about__features">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-item__icon">{feature.icon}</div>
                <h4 className="feature-item__title">{feature.title}</h4>
                <p className="feature-item__text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <div className="section-header">
        <span className="section-header__eyebrow">Proyectos Realizados</span>
        <h2 className="section-header__title">
          Inspiración para tu <span>hogar</span>
        </h2>
        <p className="section-header__description">Cada imagen es un proyecto real. Descubre lo que podemos hacer por tu espacio.</p>
      </div>

      <div className="gallery__grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-item__image" loading="lazy" />
            <div className="gallery-item__overlay">
              <h3 className="gallery-item__title">{item.title}</h3>
              <span className="gallery-item__category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="process">
      <div className="process__container">
        <div className="section-header">
          <span className="section-header__eyebrow">Cómo Trabajamos</span>
          <h2 className="section-header__title">
            Tu proyecto en <span>4 pasos</span>
          </h2>
          <p className="section-header__description">
            Un proceso claro de principio a fin: te acompañamos en cada etapa para que el resultado sea exactamente lo que imaginaste.
          </p>
        </div>

        <ol className="process-timeline">
          {processSteps.map((step, idx) => (
            <li key={step.title} className="process-timeline__item">
              <div className="process-timeline__track" aria-hidden="true">
                {idx < processSteps.length - 1 ? <span className="process-timeline__line" /> : null}
              </div>
              <div className="process-timeline__card">
                <span className="process-timeline__badge">{String(idx + 1).padStart(2, "0")}</span>
                <div className="process-timeline__icon">{step.icon}</div>
                <h3 className="process-timeline__title">{step.title}</h3>
                <p className="process-timeline__desc">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const slidesRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;

    const measure = () => setTrackWidth(track.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = slidesRef.current;
    if (!el || !trackWidth) return;
    el.style.transform = `translate3d(-${active * trackWidth}px, 0, 0)`;
  }, [active, trackWidth]);

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="section-header">
          <span className="section-header__eyebrow">Testimonios</span>
          <h2 className="section-header__title">
            Lo que dicen nuestros <span>clientes</span>
          </h2>
        </div>

        <div className="testimonials__slider">
          <div className="testimonials__track" ref={trackRef}>
            <div className="testimonials__slides" ref={slidesRef}>
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="testimonials__slide"
                  style={
                    trackWidth > 0
                      ? { flex: `0 0 ${trackWidth}px`, width: trackWidth, maxWidth: trackWidth }
                      : undefined
                  }
                >
                  <div className="testimonial-card">
                    <p className="testimonial-card__quote">{t.quote}</p>
                    <div className="testimonial-card__author">
                      <img src={t.avatar} alt="" className="testimonial-card__avatar" />
                      <span className="testimonial-card__name">{t.name}</span>
                      <span className="testimonial-card__role">{t.role}</span>
                      <div className="testimonial-card__stars" aria-hidden="true">
                        {[...Array(t.stars)].map((_, i) => (
                          <span key={i}>{Icons.star}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials__nav">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`testimonials__dot ${idx === active ? "testimonials__dot--active" : ""}`}
                onClick={() => setActive(idx)}
                aria-label={`Ver testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="contacto" className="cta-banner">
      <div className="cta-banner__container">
        <h2 className="cta-banner__title">¿Listo para transformar tu espacio?</h2>
        <p className="cta-banner__description">
          Agenda una visita gratuita y recibe asesoría personalizada de nuestros expertos en decoración.
        </p>
        <div className="cta-banner__actions">
          <a href="#cotizar" className="btn btn--primary">
            Solicitar Cotización
            {Icons.arrowRight}
          </a>
          <a href={socialFloatUrls.whatsapp} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            <span className="btn__icon" aria-hidden="true">
              {Icons.whatsapp}
            </span>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <div className="footer__brand-icon">M</div>
              Mark <span>Decor</span>
            </div>
            <p className="footer__brand-description">
              Especialistas en decoración de interiores con más de 15 años de experiencia. Transformamos espacios con cortinas, persianas,
              toldos y tapizados de alta calidad.
            </p>
            <div className="footer__brand-socials">
              <a href={socialFloatUrls.facebook} className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                {Icons.facebook}
              </a>
              <a href={socialFloatUrls.instagram} className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                {Icons.instagram}
              </a>
              <a href={socialFloatUrls.tiktok} className="footer__social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                {Icons.tiktok}
              </a>
              <a href={socialFloatUrls.whatsapp} className="footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                {Icons.whatsapp}
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Productos</h4>
            <ul className="footer__column-list">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__column-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Empresa</h4>
            <ul className="footer__column-list">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__column-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Soporte</h4>
            <ul className="footer__column-list">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__column-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Mark Decor. Todos los derechos reservados.</p>
          <div className="footer__credits">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="homepage">
      <Header scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <SocialFloat open={mobileMenuOpen} />
      <Hero />
      <Categories />
      <ProductCatalog />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
