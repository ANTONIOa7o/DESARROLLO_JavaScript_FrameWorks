

function genero() {
    var sexo = window.prompt('Cual es tu género definido: ');

    switch (sexo.toLocaleLowerCase()) {
        case 'hombre':
            swal('Estas dentro del colectivo heterosexual');
            break;
        case 'mujer':
            swal('Estas dentro del colectivo heterosexual')
            break;
        case 'transgenero':
            swal('Estas dentro del colectivo homosexual')
            break;
        case 'fluido':
            swal('Estas dentro del colectivo pansexual')
            break;
        case 'binario':
            swal('Estas dentro del colectivo homosexual')
            break;
        default:
            swal('Perteneces a otro colectivo no identificado aqui') 
            
    }


}