
//1º variable eje

var n1 = parseInt(window.prompt('Introduce el primer número'));
var n2 =parseInt(window.prompt('Introduce el segundo número'));


function sumar(){
    var resultado = n1+n2;//variable local
    swal('la suma es: ' + resultado);

}

function restar(){      //variables globales
    swal('la resta es: ' + (n1-n2));

}

function multiplicar(n1,n2){ //estructura definida y explicita de la funcion
    console.log(n1)
    swal('la multiplicacion es: ' + (n1*n2));

}

function dividir() {
    swal('La division es: ' + (n1/n2) );
    
}

