function inicio() {
    //1º declaracion de variables
    var hoy = new Date();

    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();

    var dia = hoy.getDate();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();

    m = ponerCero(m);
    s =ponerCero(s);

    document.getElementById('reloj').innerHTML = '🕗' + h + ':' + m + ':' + s

    switch (mes) {
        case 0:
            mes = 'Enero'
            break;
        case 1:
            mes = 'Febrero'
            break;
        case 2:
            mes = 'Marzo'
            break;
        case 3:
            mes = 'Abril'
            break;
        case 4:
            mes = 'Mayo'
            break;
        case 5:
            mes = 'Junio'
            break;
        case 6:
            mes = 'Julio'
            break;
        case 7:
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Septiembre'
            break;
        case 9:
            mes = 'Octubre'
            break;
        case 10:
            mes = 'Noviembre'
            break;
        case 11:
            mes = 'Diciembre'
            break;


        default:
            mes = 'Error de conexion'
            break;
    }

document.getElementById('hoy').innerHTML= dia + ' '+ mes+ ' ' + año 
//Redundancia de funciones
/*
Aparte de poder mostra la redundancia de funciones, podemos ver la capacidad de los callback
setTimeout() con una funcion principal que no es otra que la de ejecutar una funcion tras un 
periodo de tiempo determinado
    Sintaxis:
    argumento1: Llama a la funcion a ejecutar en el tiempo acotado
    argumento2: tiempo que se ha acotado a la funcion, medido en milisegungo

    setTimeout(function(){
        funtion callback/argumento1
    }, tiempo/argumento2)
*/

 var t =setTimeout(function(){inicio()},1000);

}
//Maquina perfecta:ESTRUCTURA DE EJECUCION PURA
// Funcion que genera una estructura que mimetizará con el parametro
function ponerCero(x){
    if (x<10) {
        x = '0'+x
    }
    return x;
}
//Ejercicio Replicar una ejecucion pura para el parametro horas, y que defina en una condicion
//am o pm en definitiva un sol o una luna

function solLuna(i){
    if(i<=12) {
    i = "☀️AM " + i;
    } else{
    i = "🌕PM " + (i-12);
    }
     return i;//resultado de la maquina perfecta, no olvide sacar la variable que sustituye el parametro
    }