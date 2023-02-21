//1º declaro las variables
var estiloBorde = false;//No va a tener borde 
var estiloColor = false;
var estiloSombra = false;
var numero = 0

function borde() {
    if (estiloBorde == false) {
        document.getElementById('cuadrado').style.border = '8px solid #88939c';
        estiloBorde = true;
    } else {
        document.getElementById('cuadrado').style.border = 'none';
        estiloBorde = false;
    }

}

function color() {

    if (!estiloColor) {// la condicion simpre parte de true
        document.getElementById('cuadrado').style.backgroundColor = 'pink';
        estiloColor = true;
    } else {
        document.getElementById('cuadrado').style.backgroundColor = '#2196f3';
        estiloColor = false;

    }
}
/*
Ejercicio:
Utilizando la misma estructura de control de iteracion, con el metodo .style, utilizar para la
sombra el metodo .className apuntando a la clase .sombra de nuestro hoja de estilos styles6.css
*/
function sombra() {
    if (!estiloSombra) {
        document.getElementById('cuadrado').className = "sombra";
        /* estiloSombra = true; */
    } else {
        document.getElementById('cuadrado').className = null;
        /* estiloSombra = false; */
    }
    //Saliendo de la condición y utilizando un cambio de variable buleana
    estiloSombra = !estiloSombra;
}