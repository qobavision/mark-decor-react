# Mar Decor — sitio web

Landing y futuras áreas (paneles admin / trabajadores) sobre **React**. Backend y datos: **Supabase** cuando toque; por ahora solo frontend.

## Stack recomendado (esta etapa)

| Uso | Tecnología | Por qué |
|-----|------------|---------|
| UI | **React 18** + **Vite** | Estándar en producción, build rápido, buen ecosistema |
| Estilos | **CSS + variables** (`src/styles/tokens.css`) | Un solo lugar para colores y tipografía; sin dependencia extra |
| Hosting estático | Netlify, Vercel, Cloudflare Pages, etc. | Ideal para SPA tras `npm run build` |
| Datos / auth / paneles (después) | **Supabase** | Postgres, auth, storage, APIs sin montar FastAPI desde cero |

Angular no encaja en “solo más pesado”: aquí React es el tamaño adecuado para microempresa y escala bien si creces.

## Estructura

```text
MARK DECOR PAGINA/
├── frontend/                 ← aplicación React (trabajar aquí)
│   ├── public/
│   │   ├── images/           ← fotos pesadas; URL: /images/archivo.jpg
│   │   └── favicon.svg
│   ├── src/
│   │   ├── assets/images/    ← logos importados en código (+ README)
│   │   ├── components/
│   │   │   ├── layout/       ← Header, Footer
│   │   │   └── sections/     ← Hero, Services, etc.
│   │   ├── pages/            ← LandingPage (luego más páginas)
│   │   └── styles/
│   │       ├── tokens.css    ← **Colores y tokens globales**
│   │       └── global.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js        ← alias `@` → `src`
├── ChatGPT Image *.png       ← referencias de diseño (no van al build)
└── README.md
```

## Cambiar la paleta de la web

Edita **`frontend/src/styles/tokens.css`**: variables `--color-primary`, `--color-accent`, fondos y textos. El resto de componentes usa esas variables.

## Comandos

```bash
cd frontend
npm install
npm run dev      # desarrollo
npm run build    # producción → frontend/dist
npm run preview  # probar el build localmente
```

## Imágenes

- **Logo en header:** pon el archivo en `src/assets/images/` e impórtalo en `Header.jsx`, o usa `public/images/logo.png` y `src="/images/logo.png"`.
- **Guías visuales** en la raíz del repo: no las muevas al `public` salvo que quieras servirlas en la web; son solo referencia.

## Próximos pasos (cuando quieras)

- Sustituir textos y bloque de contacto con tus datos reales.
- Galería de trabajos (imágenes en `public/images/` o Supabase Storage).
- Rutas (`react-router-dom`) y layouts para paneles con Supabase Auth.
