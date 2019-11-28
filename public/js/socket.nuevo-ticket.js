//Comando para establecer la conexion
var socket = io();

var label = $( '#lblNuevoTicket' );

socket.on( 'connect', function() {

    console.log( 'Conectado al servidor' )

} );

socket.on( 'disconnect', function() {

    console.log( 'Desconectado del servidor' )

} );

socket.on( 'estadoActual', function( respuesta ) {

    console.log(respuesta);
    label.text(respuesta.actual)
} );

$( 'button' ).on( 'click', function() {

    socket.emit( 'siguienteTicket', null, function( siguienteTicket ) {

        label.text( siguienteTicket );
    } );

} );