const staticCacheName = 'site-static'; 

const assets = [
    '/',
    '/index.html',
    '/Blog.html',
    'Space_Article.html',
    '/public/App.js',
    '/public/css/Article.css',
    '/public/css/Blog.css',
    '/public/css/tailwind.css',
];
//install service worker
self.addEventListener('install', evt =>{
    console.log('service worker is installed')
    evt.waitUntil(
        caches.open(staticCacheName).then( Cache => {
            console.log('cache shell');
            Cache.addAll(assets);
        })
    );
});
//Well done
self.addEventListener('activate',evt=>{
    console.log("Service Worker Activated")
})
//Fetch Event
self.addEventListener('fetch',evt =>{
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRes =>{
            return cacheRes || fetch(evt.request);
        }))
});
