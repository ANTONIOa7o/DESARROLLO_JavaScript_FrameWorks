
function presionar() {
    // 1º variable eje
    var fecha = new Date();
    var dia = fecha.getDay();
    // 2º variable residual
    var menu = ''

    switch (dia) {
        case 0:
        menu='Cocido Madrileño Completo';
            break;
        case 1:
            menu='Cerrado por descanso del personal';
            break;

        case 2:
            menu='Alubiones del Cantabrico';
            break;

        case 3:
            menu='Judiones a la Madrileña';
            break;

        case 4:
            menu='Cocido Montañes';
            break;

        case 5:
            menu='Potage Asturiano';
            break;

        case 6:
            menu='Salmorejo Cordobés';
            break;


        default:
            menu='Error de conexion'
            break;
    }

//3º Seleccionada la variable, que la define la condicion del switch (getDay), muestro el resultado
document.getElementById('resultado').innerHTML='el menu del dia es:'+ '<br>' + menu;
}