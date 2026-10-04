# Infware.com

Sitio corporativo de **Infware** — soporte técnico TI, redes, integración de sistemas, dominios, DNS, SSL, hosting y VPS (Tijuana, B.C.).

Construido con **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**, exportado como sitio **100 % estático** (sin servidor Node, sin APIs). Funciona en Hostinger compartido, GitHub Pages o cualquier hosting de archivos.

## Cómo ejecutar

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # genera el sitio estático en /out
npm run export    # alias de build (en Next 14+ `next export` se reemplazó por output: 'export')
npm start         # sirve /out localmente para revisarlo
```

Requiere Node 18.18 o superior.

## Estructura

```
app/         layout (SEO, fuentes), página principal, estilos globales
components/  Navbar, Hero, ServicesGrid, HostingSection, SolutionsSection,
             WhyInfware, Testimonials, ContactForm, Footer, FloatingCTA…
data/        contenido del sitio (servicios, hosting, testimonios, contacto)
utils/       URLs de imágenes y créditos, helpers
public/      favicon.svg, CNAME
```

Para cambiar textos, precios o datos de contacto edita `data/services.ts` y `data/site.ts`.

## Formulario de contacto

No hay backend: el formulario valida en el navegador, muestra *“Solicitud recibida. Te contactaremos pronto.”* y abre el cliente de correo del visitante con la solicitud dirigida a `ventas@infware.com`.

## Despliegue en Hostinger (hosting compartido)

1. `npm run build`
2. En hPanel → **Administrador de archivos** abre `public_html/` (borra el `index.html` por defecto si existe).
3. Sube **el contenido** de la carpeta `out/` (no la carpeta en sí). Puedes comprimirlo en `.zip`, subirlo y usar *Extraer*.
4. Activa SSL en hPanel → **Seguridad → SSL** y fuerza HTTPS.

Las rutas usan `trailingSlash: true`, por lo que cada página es `carpeta/index.html` y no requiere reglas de reescritura en `.htaccess`.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica `out/` en cada push a `main`. En el repositorio: **Settings → Pages → Source: GitHub Actions**. El dominio se conserva con `public/CNAME`.

## Créditos de imágenes

Fotografías de [Unsplash](https://unsplash.com) (licencia Unsplash), cargadas de forma remota:

| Uso | Foto |
|---|---|
| Hero — centro de datos | https://unsplash.com/photos/1558494949-ef010cbdcc31 |
| Soporte técnico | https://unsplash.com/photos/1573164713988-8665fc963095 |
| Cableado de red | https://unsplash.com/photos/1544197150-b99a580bb7a8 |
| Ciberseguridad | https://unsplash.com/photos/1550751827-4bd374c3f58b |
| Almacenamiento (disco duro) | https://unsplash.com/photos/1597852074816-d933c7d2b988 |
| Red global / nube | https://unsplash.com/photos/1451187580459-43490279c0fa |
| Infraestructura TI | https://unsplash.com/photos/1600267185393-e158a98703de |

> `source.unsplash.com` fue dado de baja por Unsplash, por eso se usan URLs directas de `images.unsplash.com`.
