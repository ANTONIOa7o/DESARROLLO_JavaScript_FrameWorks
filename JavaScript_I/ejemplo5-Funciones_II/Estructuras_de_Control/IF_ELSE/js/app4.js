/*
 * Calculo credito
crt = crédito*interes*tiempo

Partiendo de las siguientes condiciones que ofrece este empresa de creditos: Micro-creditos
Definimos:
a. Tiempo:
    - a 24 meses el tipo de interés será 15%
    - a 60 meses el tipo de interes será del 10%
    - a partir de 60 meses es tipo de interes será de 8%
*/

function calcular() {
    //variables eje
    var tiempo = parseFloat(window.prompt('Introduce el tiempo a pagar comodamente:'));
    var capital = parseFloat(window.prompt('Introduce lo que vale tu ilusion: '));
    var interes = 0;
    //variable sucedania
    

    //Desarrollamos el analisis de las varibles, estructura de control

    if (tiempo <= 24) {
        interes = 0.15
    } else if (tiempo <= 60) {
        interes = 0.10
    } else {
        interes = 0.08
    }

var pago =(capital*interes)/tiempo;

document.getElementById('resultado').innerText =
'Credito solicitado: ' + capital + '€' + '\n' + 
'Tipo de interes: ' + interes*100 +'%'+ '\n' + 
'Tiempo a pagar: ' + tiempo + 'meses' + '\n'+
'total a pagar comodamente: '  + pago + '€/mes'

var mordida = pago*0.3; //abono a CC.AA
console.log('importe por asesoramiento: ' +  mordida + '€');


}
//Revisar para imprimir, o boton de impresion