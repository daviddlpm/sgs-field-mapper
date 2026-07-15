# SGS Field Mapper — PWA

## Publicación en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `sgs-field-mapper`.
2. Sube **el contenido de esta carpeta** a la raíz del repositorio: `index.html`, `manifest.webmanifest`, `service-worker.js` y `icons/`.
3. Abre **Settings > Pages**; en **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/(root)`; guarda.
4. Abre la URL HTTPS publicada. En Chrome/Edge selecciona **Instalar aplicación**; en Android usa el menú de tres puntos y **Instalar aplicación** o **Añadir a pantalla de inicio**.

## Seguridad y datos

- En el primer uso se crea una contraseña local de seis caracteres alfanuméricos; no hay contraseña universal ni recuperación.
- Guarda y descarga el proyecto antes de crear uno nuevo.
- La aplicación guarda el núcleo propio para uso sin conexión tras la primera visita. Las capas externas de mapa y librerías CDN pueden requerir conexión inicialmente.
