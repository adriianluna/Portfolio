# Adrián Luna Domínguez — Portfolio

Portfolio web profesional construido con **Angular 21**, **Tailwind CSS** y desplegado en **Vercel**.

## Stack

- Angular 21 (standalone components)
- Tailwind CSS 3
- TypeScript
- Google Fonts: Bebas Neue + Space Grotesk + JetBrains Mono
- Devicons CDN
- GitHub API (repositorios en tiempo real)

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4200)
npm run dev
```

---

## Build de producción

```bash
npm run build
```

Genera los archivos estáticos en `dist/portFolio/browser/`.

---

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Entra en [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta automáticamente el `vercel.json` — no hace falta configurar nada más.
4. Haz clic en **Deploy**.

El archivo `vercel.json` ya incluye:
- **Build command:** `npm run build`
- **Output directory:** `dist/portFolio/browser`
- **Rewrites:** todas las rutas apuntan a `index.html` (necesario para SPA)

---

## Personalización

### Foto de perfil

Añade tu imagen en `public/` y reemplaza el placeholder en `src/app/components/hero/hero.html`:

```html
<!-- Dentro de .hero__avatar, reemplaza el contenido por: -->
<img src="tu-foto.jpg" alt="Adrián Luna" style="width:100%;height:100%;object-fit:cover;" />
```

### Live Demo en tarjetas de proyectos

Los repositorios de GitHub muestran el botón **Live Demo** automáticamente si tienen el campo **Website** configurado en la página del repo (Settings → Website).

---

## Estructura del proyecto

```
src/app/
├── components/
│   ├── navbar/       # Navbar fija con blur al hacer scroll
│   ├── hero/         # Hero con avatar circular y animaciones
│   ├── about/        # Sobre mí con stats
│   ├── skills/       # Grid de tecnologías con devicons
│   ├── projects/     # Repositorios en tiempo real desde GitHub API
│   ├── contact/      # Email, LinkedIn, GitHub
│   └── footer/       # Copyright
├── app.ts
├── app.html
└── app.css

vercel.json           # Configuración de despliegue en Vercel
tailwind.config.js    # Configuración de Tailwind CSS
postcss.config.js     # Configuración de PostCSS
```
