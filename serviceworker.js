const cachename = 'cache-app-v1'

const recursosChacheados = [
    "./css/styles.css",
    "./index.html",
    "./finalizar_compra.html",
    "./js/script.js",
    "./produtos/bf.html",
    "./produtos/Gow.html",
    "./produtos/farcry.html",
    "./img/BF.jpg",
    "./img/gow.jpg",
    "./img/farcry6.jpg",
    "./img/pacman.jpg",
    "./img/pacman.gif",
    "./img/tijolos.jpg",
    "./img/favicon-512x512.png",
    "./icon/favicon.ico",
    "./fonts/Gameplay.ttf"
]

self.addEventListener('install',function(event){
    console.log('Service worker instalado')
    event.waitUntil(caches.open(cachename).then(function(cache){
        cache.addAll(recursosChacheados)
    }))
})

self.addEventListener('activate', function(){
    console.log("service worker ativado")
})