//1º Variables eje.
var nombre;
var primerApellido;
var segundoApellido;//Practica de abriros otro campo y poder recoger ese valor
var eMail;

function autorizacion() {
    //2º doy valor a las variables
    nombre=document.getElementById('nombre').value;
    primerApellido=document.getElementById('apellido').value;
    eMail=document.getElementById('email').value;
    console.log(eMail);
//3º Gestionaremos las variables


//4º Muestra de las variables o sus interacciones
document.getElementById('resultado').innerHTML=
'AUTORIZADO ACCESO A: ' + nombre + ' ' + primerApellido + '<br>'+
'validado por el email: ' + eMail;

''
    
}