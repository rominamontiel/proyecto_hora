const documentTime = document.getElementById('time');
const documentSecond = document.getElementById('seconds');
const documentDay = document.getElementById('day');
const documentMonth = document.getElementById('month');
const fondo = document.getElementById('dynamic-background');

var arraySemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
var arrayMes =  ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

setInterval(() =>{
    var hoy = new Date();

    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    var segundo = hoy.getSeconds();

    var dia = hoy.getDate();
    var diaSemana = hoy.getDay();

    var mes = hoy.getMonth();
    var año = hoy.getFullYear();
    
    documentDay.innerHTML = arraySemana[diaSemana] + ' ' + dia;
    documentMonth.innerHTML = arrayMes[mes] + ', ' + año;

    if(minuto < 10){
        documentTime.innerHTML = hora + ':0' + minuto;

    } else{
        documentTime.innerHTML = hora + ':' + minuto;
    }

    if(segundo < 10){
        documentSecond.innerHTML =  ': 0' + segundo;
    } else {
        documentSecond.innerHTML =  ': ' + segundo;
    }
    
    setFondo(hora);
});

function setFondo(h){

    if (h === 6 || h === 7) {
        fondo.style.backgroundImage = 'url("img/amanecer.jpg")';
    } else if(h >= 8 && h <= 11){
        fondo.style.backgroundImage = 'url("img/mañana.jpg")';
    } else if(h >= 12 && h <= 18){
        fondo.style.backgroundImage = 'url("img/dia.jpg")';
    }else if(h >= 19 && h <= 23){
        fondo.style.backgroundImage = 'url("img/noche.jpeg")';
    }else {
        fondo.style.backgroundImage = 'url("img/madrugada.png")';
    }
}

// AMANECER-- --6 - 7
// MAÑANA-- --8 - 11
// DIA-- --12 - 18
// NOCHE-- --19 - 23
// MADRUGADA-- -- 0 - 5
