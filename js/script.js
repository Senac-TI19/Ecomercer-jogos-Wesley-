

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
let gerachave = document.querySelector("#gerachave")

let chave = document.querySelector('#key')

let cartao = document.querySelector('#cartao')


function chavealeatoria(){

    if(cartao.value.length < 15){
        window.alert('Erro! faltam digitos')
    }else{
        chave.innerHTML = "<strong>cUFSqRdqG8BAM2uzY9UMbgE8rfc</strong>"
    }
    
}

