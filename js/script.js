

if('serviceWorker' in  navigator){
    window.addEventListener("load",function(){
        this.navigator.serviceWorker.register("service_work.js")
        .then(function (registro){
            console.log('service worker registrado com sucesso', registro)
        })
        .catch(function(erro){
            console.log('service worker não registrou', erro)
        })
    })
}


