let CACHE_NAME = 'static-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'resources/css/hcw.min.css',
        'resources/js/escript.js',
        'resources/js/escript2.js',
        'resources/img/hard-hat-192.png',
        'resources/img/hard-hat-solid.png',
        'resources/img/hard-hat-solid.svg',
        'resources/img/hard-hat-solid.webp',
        'resources/img/user-alt-solid.svg',
        'resources/img/obra/imagem0.jpg',
        'resources/img/obra/imagem1.jpg',
        'resources/img/obra/imagem2.jpg',
        'resources/img/obra/imagem3.jpg',
        'resources/img/obra/imagem4.jpg',
        'resources/img/obra/imagem5.jpg',
        'resources/img/obra/imagem6.jpg',
        'resources/img/obra/imagem7.jpg',
        'resources/img/obra/imagem8.jpg',
        'resources/img/obra/imagem9.jpg',
        'resources/img/obra/imagem10.jpg',
        'resources/img/obra/imagem11.jpg',
        'resources/img/obra/imagem12.jpg',
        'resources/img/obra/imagem13.jpg',
        'resources/img/obra/imagem14.jpg',
        'resources/img/obra/imagem15.jpg',
        'resources/img/obra/imagem16.jpg',
        'resources/img/obra/imagem17.jpg',
        'resources/img/obra/imagem18.jpg',
        'resources/img/obra/imagem19.jpg',
        'resources/img/obra/imagem20.jpg',
        'resources/img/obra/imagem21.jpg',
        'resources/img/obra/imagem22.jpg',
        'resources/img/obra/imagem23.jpg',
        'resources/img/obra/imagem24.jpg',
        'resources/img/obra/imagem25.jpg',
        'resources/img/obra/imagem26.jpg',
        'resources/img/obra/imagem27.jpg',
        'resources/img/obra/imagem28.jpg',
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys
        .filter(function(key) { return key.indexOf(CACHE_NAME) !== 0; })
        .map(function(key) { return caches.delete(key); })
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});
