/*
   🎯 Creacion y declaracion de variables:

    Sintaxis:
   var minusculaNombre = "" ASIGNAMOS A LA VARIABLE CON EL NOMBRE: minusculanombre un valor 
    Declaracion:
    a)explicita:
    var minusculaNombre;
    minusculaNombre = "";
    b) implicita
    var minusculaNombre = "";

*/


var nombre = 'Toño';

swal({
    title: 'Me llamo' + nombre,//Titulo
    text: "Nombre de Pila",
    icon: "info",//Tipos de iconos [succes,warning,info... ];
    button: 'Un placer teneros aqui'
});

alert('Me llamo: ' + nombre);