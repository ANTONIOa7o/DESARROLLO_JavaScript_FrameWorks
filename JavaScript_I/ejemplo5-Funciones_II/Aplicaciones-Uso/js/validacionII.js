function mensaje() {
    var eMail = inputEmail.value;
    var miClave = inputClave.value;


    if (miClave.length !=0 && eMail.length !=0)  {//famosos patter o estructuras de control, siendo muy útil el metodo .test
        document.getElementById('resultado').innerHTML=
        ' Clave Correcta: Acceda a pagina principal , pulse para ingresar ' 
    } else {
        swal('Son necesarios clave y email'); 
    }
}

function limpiar() {
    document.getElementById('resultado').innerHTML=''
}

function secundaria() {
    location.href="Validaciones.html";


    
}