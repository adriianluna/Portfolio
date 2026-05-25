# Adrián Luna Domínguez — Portfolio

Portfolio web profesional construido con **Angular 21**, **Tailwind CSS** y desplegable en **Railway** y **Vercel**.

## Stack

- Angular 21 (standalone components)
- Tailwind CSS 3
- TypeScript
- Express (servidor de producción)
- Google Fonts: Bebas Neue + Space Grotesk + JetBrains Mono
- Devicons CDN

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

El build genera los archivos estáticos en `dist/portFolio/browser/`.

---

## Despliegue en Railway

Railway detecta automáticamente Node.js con `npm run build` y `npm start`.

### Pasos:

1. Sube el repositorio a GitHub.
2. Entra en [railway.app](https://railway.app) y crea un nuevo proyecto desde tu repo.
3. Railway ejecutará `npm run build` (genera `dist/portFolio/browser/`) y luego `npm start` (arranca `server.js`).
4. Configura la variable de entorno si necesitas un puerto específico:
   - `PORT` → Railway lo inyecta automáticamente (`process.env.PORT`).
5. Haz clic en **Deploy** y Railway te dará una URL pública.

### Variables de entorno en Railway

| Variable | Descripción         | Valor por defecto |
|----------|---------------------|-------------------|
| `PORT`   | Puerto del servidor | 3000 (Railway lo sobreescribe) |

No se necesita ninguna configuración adicional.

---

## Despliegue en Vercel

Vercel sirve sitios estáticos directamente desde la carpeta `dist/`.

### Pasos:

1. Sube el repositorio a GitHub.
2. Entra en [vercel.com](https://vercel.com) y crea un nuevo proyecto importando el repo.
3. En la configuración del proyecto:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/portFolio/browser`
   - **Install Command:** `npm install`
4. Haz clic en **Deploy**.

> **Nota:** Vercel sirve archivos estáticos, por lo que no necesitas `server.js`. El routing de Angular SPA se gestiona automáticamente con un archivo `vercel.json` (opcional):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Personalización

### Foto de perfil

Sustituye el placeholder en `src/app/components/hero/hero.html`. Añade tu imagen en `public/` y úsala así:

```html
<!-- En hero.html, reemplaza el contenido de .hero__avatar -->
<img src="tu-foto.jpg" alt="Adrián Luna" style="width:100%;height:100%;object-fit:cover;" />
```

### Links de LinkedIn y GitHub

Busca y reemplaza los placeholders en estos archivos:

- `src/app/components/contact/contact.html` → `YOUR_LINKEDIN`, `YOUR_GITHUB`
- `src/app/components/footer/footer.html` → `YOUR_LINKEDIN`, `YOUR_GITHUB`

### Proyectos reales

Edita el array `projects` en `src/app/components/projects/projects.ts` con tus proyectos reales y sustituye los `'#'` de `github` y `demo` por las URLs correspondientes.

---

## Estructura del proyecto

```
src/app/
├── components/
│   ├── navbar/       # Navbar fija con blur al hacer scroll
│   ├── hero/         # Sección hero con avatar circular y animaciones
│   ├── about/        # Sobre mí con stats
│   ├── skills/       # Grid de tecnologías con devicons
│   ├── projects/     # 3 tarjetas de proyectos
│   ├── contact/      # Email, LinkedIn, GitHub
│   └── footer/       # Copyright
├── app.ts            # Componente raíz
├── app.html          # Template raíz
└── app.css           # Estilos globales del componente raíz

server.js             # Servidor Express para Railway
tailwind.config.js    # Configuración de Tailwind CSS
postcss.config.js     # Configuración de PostCSS
```
