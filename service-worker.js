const VERSION = 'sgs-field-mapper-v1';
const CORE = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('sgs-field-mapper-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy=res.clone(); caches.open(VERSION).then(c => c.put(req,copy)); return res; }).catch(() => caches.match('./index.html'))));
    return;
  }
  // Runtime caching for allowed public assets and map tiles. Tile availability offline depends on prior visit/download.
  event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if(res && res.ok){ const copy=res.clone(); caches.open('sgs-runtime-assets-v1').then(c => c.put(req,copy)); } return res; }).catch(() => hit)));
});
