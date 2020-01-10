const btnMenu = document.getElementById('btn-menu');
const contentMenu = document.getElementById('content-menu');
const botoncito = document.getElementById('botoncito');
const circulo = document.getElementById('circulo');
// documentSecond

var verSegundos = false;

btnMenu.onclick = function(){
    contentMenu.classList.toggle('hide');
}

botoncito.onclick = function(){
    verSegundos = !verSegundos;
    btnActive(verSegundos);
}

function btnActive(v){
    if(v){
        botoncito.style.background = '#56af6d';
        circulo.style.transform = 'translateX(22px)';
        documentSecond.classList.toggle('hide');
    }else{
        botoncito.style.background = 'rgba(255, 255, 255, 0.5)';
        circulo.style.transform = 'translateX(0)';
        documentSecond.classList.toggle('hide');
    }
}

