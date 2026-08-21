# 🚀 Guía de Despliegue en GitHub Pages (SGS Field Mapper v19.6)

Este paquete contiene todos los archivos preparados y optimizados para funcionar como una **PWA nativa en tablet Android, móvil y PC** a través de **GitHub Pages (HTTPS)**.

---

## 📂 Archivos del Paquete de Despliegue
* `index.html`: La aplicación completa autocontenida con todas las vistas, motor de cálculo acústico, editor de tramos horarios y exportador a Excel.
* `sw.js`: Service Worker configurado con rutas relativas (`./`) para permitir el funcionamiento **100% Offline** en campo.
* `manifest.json`: Manifiesto de la aplicación para que Android permita instalarla como App nativa en la pantalla de inicio.
* `icon-192.png`: Icono de alta resolución para la pantalla de inicio de la tablet.
* `icon-512.png`: Icono splash para la carga de la aplicación.
* `.nojekyll`: Archivo especial de GitHub Pages para evitar que se filtren archivos con guiones bajos o puntos.

---

## 📋 Pasos para Desplegar en GitHub en 2 Minutos

### Opción A: A través de la Web de GitHub (Sin comandos)
1. Entra en tu repositorio de GitHub (o crea uno nuevo llamado, por ejemplo, `sgs-field-mapper`).
2. Haz clic en **Add file** $\rightarrow$ **Upload files**.
3. Arrastra los 6 archivos de esta carpeta (`index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `.nojekyll`) y pulsa **Commit changes**.
4. Ve a la pestaña **Settings** (Configuración) de tu repositorio.
5. En el menú lateral izquierdo, haz clic en **Pages**.
6. En el apartado **Build and deployment**:
   * **Source**: *Deploy from a branch*.
   * **Branch**: Selecciona `main` (o `master`) y la carpeta `/ (root)`.
   * Pulsa **Save**.
7. En 1 minuto, GitHub te dará el enlace HTTPS:
   `https://<tu-usuario>.github.io/<tu-repositorio>/`

---

## 📱 Cómo Usarlo en tu Tablet Android
1. Abre el enlace de GitHub Pages en **Google Chrome** en tu tablet.
2. Toca en el menú de Chrome (los 3 puntos arriba a la derecha) y selecciona **"Añadir a la pantalla de inicio"** o **"Instalar aplicación"**.
3. La aplicación se instalará como una App nativa con su icono SGS.
4. **¡Listo!** Ya dispones de:
   * 🎙️ **Dictado por voz sin restricciones**.
   * 🗺️ **Mapeo cartográfico de linderos, focos y puntos**.
   * ⏰ **Definición de tramos horarios en focos**.
   * ⚡ **Auto-agrupación de fases de ruido**.
   * 📊 **Exportación instantánea a Excel 023_RA**.
   * 📶 **Uso en campo sin internet ni cobertura**.
