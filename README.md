# SGS Field Mapper v20.52 MT LDI

Aplicación web de campo (PWA) para cartografía y ensayos de **acústica ambiental** del Laboratorio SGS Tecnos (ISO/IEC 17025, UNE-EN ISO 1996). Funciona **100 % offline** en tablet Android y se despliega en **GitHub Pages**.

## Uso rápido

1. Abre la URL de la app (GitHub Pages) en Chrome de la tablet.
2. La primera vez, define una **contraseña local de 6 caracteres**. Cifra los datos con AES-GCM en el propio dispositivo: no hay puerta trasera ni recuperación.
3. Menú **⋮ → Añadir a pantalla de inicio** para instalarla como aplicación.
4. Trabaja sin cobertura: el mapa se cachea y los datos se guardan cifrados en el dispositivo.

## Qué incluye

- **Mapa Leaflet** con puntos, líneas, polígonos y parcelas; coordenadas UTM ETRS89 y edición de vértices.
- **5 módulos acústicos** (registro 023_RA): Datos Generales, Entorno, Plan de Muestreo, Metodología/LDI y Medidas.
- **Fotografías** por elemento, con separación *punto de medida* / *ruido de fondo* en puntos de control. Se **comprimen automáticamente** al añadirlas (máx. 1400 px, JPEG) para no llenar el almacenamiento.
- **Exportación**: libro **Excel** completo (portada, índice, los 5 módulos y una hoja por carpeta con fotos), **KMZ** (Google Earth / MapMarker) y **JPG** del plano.
- **Caché offline** de teselas cartográficas.

## Estructura del repositorio

```
index.html        Aplicación completa (HTML + CSS + JS, librerías embebidas)
sw.js             Service Worker (offline / caché del shell)
manifest.json     Manifiesto PWA (instalación en Android)
icon-192.png      Iconos de la aplicación
icon-512.png
.nojekyll         Evita el procesado Jekyll en GitHub Pages
CHANGELOG_v20.52.md
HISTORIAL_DE_VERSIONES_Y_EVOLUCION_TECNICA.md
MANUAL_DE_INSTRUCCIONES_Y_CASOS_PRACTICOS.html
GUIA_VISUAL_METODOLOGIA_LDI.html
```

## Despliegue en GitHub Pages

```bash
git add .
git commit -m "SGS Field Mapper v20.52 MT LDI"
git push
```

En el repositorio: **Settings → Pages → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. Todas las rutas son relativas (`./`), por lo que funciona igual en un subdirectorio (`usuario.github.io/repo/`).

> Tras publicar una versión nueva, la app se actualiza al abrirla con conexión (el Service Worker usa una caché versionada, `sgs-fieldmapper-v20-50-mt-ldi`). Si hiciera falta forzarlo: cerrar y reabrir la app, o borrar los datos del sitio en Chrome.

## Copias de seguridad

Los datos viven **solo en el dispositivo** y están cifrados. Antes de reinstalar, cambiar de tablet o borrar datos del navegador, exporta el proyecto (**Guardar proyecto** → `.json`, o KMZ/Excel). La app avisa cuando el proyecto se acerca al límite de almacenamiento del navegador.

## Notas técnicas

- Sin dependencias externas en tiempo de ejecución: Leaflet, ExcelJS, JSZip y html2canvas van embebidos (funciona sin CDN y con CSP estricta).
- Compatibilidad de datos: los proyectos guardados con v20.49, v20.50 y v20.51 se abren sin cambios.
