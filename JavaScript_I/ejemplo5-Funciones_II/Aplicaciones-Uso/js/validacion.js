//1º Declararnos las variables

var nombre = "";
var apellidos = "";
var email = "";
var telefono = "";
var direccion = "";
/* var ciudad = ""; */
var codigoPostal = "";
var edad = "";
var dni = "";
var sexo = "";

//2º Tratamiento de los datos

/*
                                El método addEventListener

        Como un elemento expectante, dentro del entorno de nuestro cliente(Navegador),
        a un evento o a la interaccion del usuario. 
        * Se trabaja directamente desde js y solo hace referencias al evento.
        ** Sintaxis:
            Parte de una referencia, asociada al html y expectante a su presencia (primer Parámetro), seguidamente
            se ejecutará la funcion asociada o indicada (segundo parámetro). Podremos encontrar de forma opcional
             redefinido por las variables true o false (tercer Parámetro)

            target.addEventListener('Tipo de evento', funcion_a_LANZAR,boolean )

*/


enviar.addEventListener('click', capturarForm);

function capturarForm() {
    nombre = document.getElementById('inputNombre').value;
    apellidos = document.getElementById('inputApellidos').value;
    email = document.getElementById('inputEmail').value;
    telefono = document.getElementById('inputTelefono').value;
    direccion = document.getElementById('inputDireccion').value;
   /*  ciudad = document.getElementById('inputCiudad').value; */
    codigoPostal = document.getElementById('inputCp').value;
    edad = document.getElementById('inputEdad').value;
    dni = document.getElementById('inputDni').value;
    sexo = document.getElementById('inputSexo').selectedIndex;

    validarDatos();
}

function exito() {
    swal('Enhorabuena! Datos enviados correctamente');
}
//desgranar las funciones
function validarDatos() {

    if (!(isNaN(nombre))) {
        mostrarError('inputNombre');
    }
    if (!(isNaN(apellidos))) {
        mostrarError('inputApellidos');
    }
    if (direccion == '') {
        mostrarError('inputDireccion');
    }
   /*  if (ciudad = "") {
        mostrarError('inputCiudad');
    } */
    /*
    el método .test() comparar el expresion regular con la varibles, si cumple los parametros de las expresion regular entonces == true
    ESTRUCTURAS DE CONTROL:
    /^\ Inicio de estructura
    {d} nº de digitos
    $/ final de la expresion regular
    [] condiciones de intervalo de los caractares y los numeros
    ? operador condicional
    */
    if (!(/^\d{5}$/.test(codigoPostal))) {
        mostrarError('inputCp');
    }
    if (email == '') {
        mostrarError('inputEmail');
    }
    if (!(/^\d{9}$/.test(telefono))) {
        mostrarError('inputTelefono');
    }
    if ((isNaN(edad))) {
        mostrarError('inputEdad');
    }
    if (dni == '') {
        mostrarError('inputDni');
    }
    if (sexo == null || sexo == 0) {
        mostrarError('inputSexo');
    }

}

function mostrarError(id){

    document.getElementById(id).value ='' //Valores añadidos
    /*
    Metodos de llamada desde javaScript a Css, precissamente con el interes de mostrar cambios perceptivos al usuario desde error hasta exito
    */
   document.getElementById(id).classList.add('warning');//Podemos añadir classes de otros frameWork (ej: is-invalid)
   /*
   mensaje al usuario
   */
  swal('Revise los campos');
}



