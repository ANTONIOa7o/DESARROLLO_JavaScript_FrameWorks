

function calcular() {
    //variable eje
    var peso = calculoPeso.value;
    var altura = calculoAltura.value;
    //Variable residual
    var imc = 0;
    var respuesta = document.getElementById('resultado');
    // ⇓
    imc = peso / (Math.pow(altura, 2));
    console.log(imc);
    /*
     *Intervalos de imc:
        ->   <= 18.5 Peso por debajo delo normal, 
        -> <=24.9 Peso standar o saludable
        -> <=29.9 Sobre peso indice poco saludable
        -> 30 en obesidad y trastorno
    */
    if (imc <= 18.5) {
        respuesta.innerHTML = '18.5 Peso por debajo delo normal'

    } else if (imc <= 24.9) {
        respuesta.innerHTML = '24.9 Peso standar o saludable'
    } else if (imc <= 29.9) {
        respuesta.innerHTML = 'Sobre peso indice poco saludable'
    } else {
        respuesta.innerHTML = 'Obesidad o/y trastorno 🐷'
    }
   

}
function limpiar() {//limpia campos y en este caso no admite el borrado del campo id='resultado' ojo!! data-bs-dismiss="modal"

document.getElementById('limpiar').reset();
document.getElementById('resultado').innerHTML = ''; 
}