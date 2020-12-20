var fs  = require('fs');
var url = require('url');

function handleRequest( requestFile, response ) {

    response.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile( requestFile, null, function( error, data ) {

        if ( error ) {

            response.writeHead(404);
            response.write('File not found !');
        } else {

            response.write( data );
        }
        response.end();
    } )
}

module.exports = {
    handleRequest : function( req, res ) {

        res.writeHead( 200, {'Content-Type' : 'text/html' } );
        var path = url.parse(req.url).pathname;

        switch( path ) {

            case '/':
                handleRequest('./index.html', res);
                break;

            case '/user':
                handleRequest('./user.html', res);
                break;

            default : 
                handleRequest('404', res);
                break;
        }
    }
}