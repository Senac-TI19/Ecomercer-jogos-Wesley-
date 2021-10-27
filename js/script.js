

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

const godofwar = document.querySelector("click_Gow")

const Battlefield = document.querySelector("click_bf")

const farcry = document.querySelector("click_far")

const preco = document.querySelector("preco")

const imagem = document.querySelector("visualiza_produto")

const descri = document.querySelector("desc_produto")

const titulo = document.querySelector("titulo_produto2")

 let   gow = {
        nome: 'God Of War',
        Preco: 199.90,
        descricao: "God of War é uma série de jogos eletrônicos de ação-aventura criada por David Jaffe da Santa Monica Studio, da Sony. Iniciada em 2005 no console PlayStation 2, tornou-se carro-chefe para a marca PlayStation, consistindo em oito jogos em várias plataformas, com um nono atualmente em desenvolvimento."
    }
let bf = {
        nome: 'Battlefield 2042',
        Preco: 299.90,
        descricao: "Battlefield 2042 é um videogame de tiro em primeira pessoa desenvolvido pela DICE e publicado pela Electronic Arts. É a décima sétima edição da série Battlefield e sucessora do Battlefield V. 2018."
    }
let Farcry = {
        nome: 'Far Cry 6',
        Preco: 199.90,
        descricao: "Far Cry 6 é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Ubisoft Toronto e publicado pela Ubisoft. É o sexto título principal da série Far Cry e foi lançado em 7 de outubro de 2021 para Amazon Luna, Google Stadia, Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One e Xbox Series X/S."
    }




godofwar.addEventListener("onclick",God())


function God(){

imagem.innerHTML = `<img width="100"  src="img/gow.jpg" alt="">`

titulo.innerText = "God Of war"

preco.innerHTML = 99.90

descri.innerHTML = gow.descricao

}

Battlefield.addEventListener("onclick",bf42())

function bf42(){

    imagem.innerHTML = `<img width="100"  src="img/BF.jpg" alt="">`

    titulo.innerText = "Battlefield 2042"
    
    preco.innerHTML = 199.90
    
    descri.innerHTML = bf.descricao
    
}

farcry.addEventListener("onclick",Far6())

function Far6(){

    imagem.innerHTML = `<img width="100"  src="img/farcry6.jpg" alt="">`

    titulo.innerText = "Far cry 6"
    
    preco.innerHTML = 199.90
    
    descri.innerHTML = Farcry.descricao
    
}
