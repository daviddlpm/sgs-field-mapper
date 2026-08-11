# SGS Field Mapper [v18]

Editor cartográfico de campo para trabajos de acústica y olfatometría (SGS Tecnos). Aplicación de una sola página (HTML/JS), sin backend, con cifrado local AES-GCM y mapa base descargable para trabajar sin conexión.

## Uso rápido (GitHub Pages)

1. Sube este repositorio a GitHub (ver más abajo).
2. En **Settings → Pages**, selecciona la rama `main` y la carpeta `/ (root)`.
3. GitHub publicará la app en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.
4. Abre esa URL, crea tu contraseña local de 6 caracteres y ya puedes trabajar.

No hace falta ningún paso de compilación: `index.html` contiene toda la aplicación (Leaflet, ExcelJS, JSZip, tipografías, etc. van embebidos).

## Subir el repositorio desde cero

```bash
git init
git add index.html README.md .nojekyll
git commit -m "SGS Field Mapper v18"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<nombre-del-repo>.git
git push -u origin main
```

Después activa GitHub Pages como se indica arriba.

## Modo offline

1. Con conexión, abre **Mapas offline** en la barra superior.
2. Elige la zona (vista actual o todo el proyecto) y el zoom máximo, y pulsa **Descargar y guardar mapa**. Las teselas quedan guardadas en el propio dispositivo (IndexedDB), no en GitHub.
3. Para llevar el mismo mapa a otro móvil/tablet, usa **Exportar pack de mapa** (`.sgsmap`) y luego **Importar pack de mapa** en el otro dispositivo.

## Notas de seguridad

- La contraseña y los proyectos guardados localmente se cifran con AES-GCM (PBKDF2, 310.000 iteraciones) y **no salen del dispositivo**: GitHub Pages solo sirve el archivo estático de la aplicación.
- No existe contraseña universal ni puerta trasera; si se olvida la contraseña solo se pueden borrar los datos cifrados locales, no recuperarlos.

## Archivos

- `index.html` — aplicación completa (única página).
- `.nojekyll` — evita que GitHub Pages procese el sitio con Jekyll (necesario porque el HTML embebe recursos que Jekyll podría alterar).
