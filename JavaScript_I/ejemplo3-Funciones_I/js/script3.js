/*
    Como métod su sintxis: .getElementById('nombreId');
        Definido como LA PROYECCION DE UN ELEMENTO QUE CONTENDRÁ LA DEFINICIÓN QUE TRASLADA EL id.
        En definitiva poder manipular u obtener informacion de un elemento y su contenido dentro del
        DocType
        id- referenciador que html para conectar al documento desde otros entornos

*/

/*
Objeto Math integrado(metalenguaje de js), permitirá realizar operaciones matematícas en js. 
(Math es un objeto global de js, con una caracteristica que lo diferencia de otros es estático y ademas
    no podrá instaciar objetos) trabajará como otros metodos hacia las clases 
*/

function funcionesMath() {
var numero = 8;//number
var texto = numero.toString();//string

document.getElementById('resultado').innerHTML = 
' <label style="color:red"> Logaritmo: </label>'  + Math.log(1000) + '<br>'+
'Exponencial de 8: ' + Math.exp(8)  + '<br>'+
'Raiz Cuadrado 9: ' + Math.sqrt(9)  + '<br>'+
'Pontencia 4, elevado a 8: ' + Math.pow(4,8)  + '<br>'+//Base,exponente
'Valor absoluto: ' + Math.abs(-6586)  + '<br>'+
'Redondeo medio: ' + Math.round(6.3458)  + '<br>'+
'Redondeo al alza: ' + Math.ceil(6.3458) + '<br>'+
'Redondeo a la baja: ' + Math.floor(6.3458)+ '<br>'+
'Random o semilla: ' + Math.random() + '<br>'+
'Random del 1 al 10 ' + Math.random(1)*10 +
'Valor maximo: ' + Math.max(5,8,9,2,1,6) + '<br>'+
'Valor minimo: ' + Math.min(5,8,9,2,1,6)+ '<br>'+
'Coseno de Pi (Anidando 1 metodo en otro)' + Math.cos(Math.PI) + '<br>' + 
/*
Vamos a diferenciar el método objeto de un metodo 
*/
'Tranformacion de numero a string ' + texto;
/*
Fehacientemente que texto es un string
*/
console.log(typeof(texto));
console.log(typeof(numero));
}
 
/*
Funciones de caracteres String, de uso principal para las representaciones o manipulaciones
de una secuencia de caracteres.Siendo muy util que Los caracteres, puede estar todo definido como string/caracteres
y almacenar datos
*/

function funcionesString() {

    var texto = 'JAVASCRIPT Estructura de Cadena de Texto(6)'
    document.getElementById('resultado').innerHTML=
    'Minusculas: '+ texto.toLocaleLowerCase() + '<br>'+
    'Mayuscula: ' + texto.toLocaleUpperCase()+ '<br>'+
    'Longitud de la cadena de texto: ' + texto.length + '<br>'+
    'Valor del Unicode: ' + texto.charCodeAt(texto.indexOf('J'))+ '<br>'+
    //llamamos a un objeto String, al igual que a Math
    'Unicode: ' + String.fromCharCode(960);
    
}
/*
Objeto Date, integrado en js, y nos ofrece y almacena las fechas, horas, ..., Y provee
de metodo para manejarlos, ed como Math.metoDos(), esa caracteristica estática de Math, no
se producirá aqui. 
Sintaxis: 
var fecha = new Date()

Conclusion-> Cada vez que invoco, llamo, instancio la variable fecha, me asigna automaticamente
un objeto defino por su metodo; Dicho objeto se presente en subitamente y desaparece subitamente
*/

function funcionesDate() {
    var fecha = new Date();
    document.getElementById('resultado').innerHTML=
    'Fecha: ' + fecha.toLocaleDateString()+ '<br>'+
    'Hora: ' + fecha.toLocaleTimeString()+ '<br>'+
    'Minutos: ' + fecha.getMinutes()+ '<br>'+
    'Segundos; ' + fecha.getSeconds()+ '<br>'+
    'Mes: ' + (fecha.getMonth()+1) + '<br>'+//? 0 al 20 , el primer elemento siempre, siempre, siempre será el 0
    'Dia de la semana: ' + fecha.getDate() + '<br>'+
    'Nº que respresenta de la semana: ' + fecha.getDay(); 

}