//1º Declarar variable
var mapa;

function mostrarMapa() {
    if (navigator.geolocation) {
        // 2º En la condicion,mostramos a través del metodo getCurrentPosition
        //accedemos a las coordenadas (lat y lng), partiendo de true, 
        //necesitamos que ejecute esta sentencia:
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert('Tu dispositivo o navegador no accede a la geolocalizacion');
    }
    //3º variables sucundarias[Variable, con dos elementos, cada elemento con un valor, con estructura de array]
    var opciones = {
        zoom: 12,
        mapTypeid: google.maps.MapTypeId.ROADMAP//Tipos de Mapa: 1/ROADMAP, 2/SATELLITE, 3/TERRAIN, 4/HIBRYD
    };
    mapa = new google.maps.Map(document.getElementById('resultado'), opciones);
}

//4º Montar las coordenadas, mostralocalizacion(), funcion principal establecer
//las coordenadas solicitadas
function mostrarLocalizacion() {
    //obtener las coordenadas
    var pos = new google.maps.LatLng(40.434867, -3.6541705);
    // a.Mostrar texto
    var info = new google.maps.InfoWindow({
        map: mapa,
        position: pos,
        content: 'CFC formacion'
    });
    //b.Mostra marca

    var marker = new google.maps.Marker({
        map: mapa,
        position: { lat: 40.434867, lng: -3.6541705 },
        title: 'CfC formacion'
    });
    //5º Posicionamos el mapa en el centro, es decir nos aseguramos que 
    //la visualizacion del usuario este centrada con respecto al espacio 
    //otorgado
    mapa.setCenter(pos);
}

//6º Manenjando errores para experiencia de usuario

function manejarError(error) {

    switch (error.code) {
        case error.PERMISION_DENIED:
            alert('Permiso denegado');
            break;
        case error.TIME_OUT:
            alert('Tiempo excedido de espera...');
            break;

        case error.POSITION_UNAVAILABLE:
            alert('Posicion indeterminada');
            break;
        case error.UNKNOWN_ERROR:
            alert('Error desconocido');
            break;
        default:
            alert('Error o desconexion')
            break;
    }

}

