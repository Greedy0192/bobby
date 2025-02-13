self.addEventListener('install', (event) => {
    console.log('Service Worker installerad!');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
