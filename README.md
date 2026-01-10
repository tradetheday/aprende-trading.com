# Aprende Trading - Sitio Web

Sitio web de trading educativo construido con Astro y desplegado en Cloudflare Pages.

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## Despliegue en Cloudflare Pages

### Opcion 1: Conexion con GitHub (Recomendado)

1. Sube este proyecto a un repositorio de GitHub
2. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project" → "Connect to Git"
4. Selecciona el repositorio
5. Configura:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18 o superior

### Opcion 2: Despliegue Directo con Wrangler

```bash
# Instalar Wrangler
npm install -g wrangler

# Autenticarse
wrangler login

# Desplegar
wrangler pages deploy dist --project-name=aprende-trading
```

## Estructura del Proyecto

```
site/
├── public/           # Archivos estaticos
│   ├── images/       # Imagenes del sitio
│   ├── _headers      # Headers de Cloudflare
│   └── _redirects    # Redirecciones de URLs antiguas
├── src/
│   ├── content/blog/ # Articulos en Markdown
│   ├── components/   # Componentes Astro
│   ├── layouts/      # Layouts
│   └── pages/        # Paginas
└── astro.config.mjs  # Configuracion de Astro
```

## SEO

- Sitemap automatico en `/sitemap-index.xml`
- RSS feed en `/rss.xml`
- Redirecciones 301 para URLs antiguas de WordPress
- Meta tags optimizados para redes sociales
