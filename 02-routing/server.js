var http  = require('http');
var route = require('./route');


var server = http.createServer( route.handleRequest );
server.listen( 3000, function() {

    console.log( "Working !" );
} );