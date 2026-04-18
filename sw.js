/* ============================================================
   VialNic — Service Worker
   Versión: cambia este número cada vez que hagas un deploy
   con cambios en CSS o JS. Esto fuerza que TODOS los usuarios
   descarten su caché viejo y descarguen los archivos nuevos.
   ============================================================ */
const CACHE_VERSION = 'vialnic-v6';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js'
];

/* ── Instalación: guarda los assets en caché nueva ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS))
  );
  // Activa inmediatamente sin esperar a que se cierren tabs viejas
  self.skipWaiting();
});

/* ── Activación: borra cachés viejas ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      )
    )
  );
  // Toma control de todas las tabs abiertas inmediatamente
  self.clients.claim();
});

/* ── Fetch: Network-first para HTML/CSS/JS, caché como fallback ── */
self.addEventListener('fetch', event => {
  // Solo interceptar peticiones del mismo origen
  if (!event.request.url.startsWith(self.location.origin)) return;

  const url = new URL(event.request.url);
  const isAsset = /\.(css|js|html)(\?.*)?$/.test(url.pathname) || url.pathname === '/';

  if (isAsset) {
    // Network-first: siempre intenta bajar la versión más nueva
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Guarda la respuesta fresca en caché
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  }
});
