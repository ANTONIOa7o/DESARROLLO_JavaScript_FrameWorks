function aplicarCupon() {
    var cupon = document.getElementById('cupon').value;
    var respuesta = document.getElementById('resultado');

    switch (cupon) {
        case 'PLUSGOLDEN':
            respuesta.innerHTML = 'Gran descuento del 10%: 900.000 € '
            break;
        case 'DELUXE':
            respuesta.innerHTML = 'Gran descuento del 9%: 910.000 € '
            break;
        case 'PREMIUM':
            respuesta.innerHTML ='Gran descuento del 10%: 900.000 € '
            break;

        default:
            break;
    }



}