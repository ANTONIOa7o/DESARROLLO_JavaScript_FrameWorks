
function ejecutar() {
    var opcion = parseInt(document.getElementById('opcion').value);
    console.log(opcion)
    var respuesta = document.getElementById('resultado');

    switch (opcion) {
        case 1:
        respuesta.innerText='FORMATEANDO DISCO, espere...';
            break;
        case 2:
        respuesta.innerHTML='RECOPILANDO DATOS PARA SU DESTRUCCION, por favor espere...'
            break;
        case 3:
        respuesta.innerHTML='BUSCANDO UBICACION PARA VOLCADO DE DATOS E IP, espere...'
            break;
        case 4:
        respuesta.innerHTML='MONOTORIZANDO NAVEGADOR, espere..' + '<br>' + navigator.userAgent;
            break;
        case 5:
            respuesta.innerHTML='FORMATEANDO DISCO, espere...';
            break;

        default:
            respuesta.innerHTML='Es necesario elegir una de las opciones'
            break;
    }



}