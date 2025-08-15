const CACHE_NAME = 'unity-webgl-v1';
const urlsToCache = [
  './',
  './index.html',
  './Build/my-new-scene.loader.js',
  './Build/my-new-scene.framework.js',
  './Build/my-new-scene.data',
  './Build/my-new-scene.wasm'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});