const CACHE_NAME = 'meow-fwt-v1';
const ASSETS = [
  './',
  './index.html',
  './html2canvas.js',
  './jspdf.js',
  './qrcode.js',
  './icon.png'
];

// Instalar: guarda todo en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activar: borra cachés viejas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: sirve desde caché si está offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).catch(() => {
        // Si falla la red y es una navegación, devuelve el index
        if (e.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
