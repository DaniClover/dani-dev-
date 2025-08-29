# Dani Portfolio (Astro)

Proyecto base estilo Rawen, pero con identidad de Dani 🦇.

## Requisitos
- Node.js 18+
- Una cuenta de Spotify Developer (para la sección "Listening on Spotify")

## Variables de entorno (crear un archivo .env en la raíz)
```env
SPOTIFY_CLIENT_ID=tu_client_id
SPOTIFY_CLIENT_SECRET=tu_client_secret
SPOTIFY_REFRESH_TOKEN=tu_refresh_token
```

## Scripts
```bash
npm install
npm run dev
# build
npm run build
npm run preview
```

## Estructura
- `src/pages/index.astro` arma la home con secciones: Hero, Spotify, Skills, Projects y Socials.
- `src/pages/api/spotify.ts` endpoint para traer la canción actual.
- `public/spotify.js` frontend que consulta el endpoint.
- `src/styles/global.css` estilos base (oscuro, moderno).
