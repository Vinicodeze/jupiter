// carrosel

const carrosselContainer = document.querySelector('.carrosel-container');
const itensCarrossel = document.querySelectorAll('.carrosel-item');

let indiceAtual =0;
const totalItens = itensCarrossel.length;

function proximaLua(){
    if(indiceAtual >= totalItens -1){
        indiceAtual =0;
    }
    else{
        indiceAtual++;
    }

    carrosselContainer.style.transform = `translateX(${-indiceAtual * 100}%)`;
}
setInterval(proximaLua, 4000);