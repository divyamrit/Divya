if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('Service Worker is registered',reg))
        .catch((err) => console.log('Service Worker is not registered',err));
}
// if (window.location.protocol === 'http:') {
//     const requireHTTPS = document.getElementById('requireHTTPS');
//     const link = requireHTTPS.querySelector('a');
//     link.href = window.location.href.replace('http://', 'https://');
//     requireHTTPS.classList.remove('hidden');
// }
