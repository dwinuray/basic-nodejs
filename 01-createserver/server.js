// module http 
var http = require('http');
var fs   = require('fs');

function handleRequest( request, response ) {

    response.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile( './index.html', null, function( error, data ) {

        if ( error ) {

            response.writeHead(404);
            response.write('File tidak ditemukan');
        } else {

            response.write(data);
        }

        response.end();
    } );
}

// mempersiapkan server
var server = http.createServer( handleRequest );

// memberikan port
server.listen( 3000, function() {

    console.log( "Sedang berjalan pada port 3000" );
} );