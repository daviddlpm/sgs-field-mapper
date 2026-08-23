// SGS Field Mapper · Service Worker de Alta Disponibilidad & Actualización Inmediata
const CACHE_NAME = 'sgs-fieldmapper-v20-69-mt-ldi-dynamic';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalación: Forzar activación inmediata
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activación: Eliminar cualquier caché antiguo y tomar control de las pestañas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptor de peticiones con estrategia NETWORK-FIRST para index.html
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  const url = event.request.url;
  const isHtml = event.request.mode === 'navigate' || url.includes('index.html') || url.endsWith('/') || url.endsWith('.html');
  
  if (isHtml) {
    // 1. Network-First: Siempre busca la versión más reciente en GitHub Pages
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback offline si no hay conexión a internet
        return caches.match(event.request).then(cached => cached || caches.match('./index.html'));
      })
    );
    return;
  }
  
  // 2. Cache-First con fallback a red para recursos estáticos (iconos, fuentes)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});
