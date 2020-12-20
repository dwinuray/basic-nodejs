var express = require('express');
var app     = express();

app.get('/', function( request, response ) {

    response.send("Oke express was successfully to installed !");
});

app.get('/user/:name', function( req, res ) {

    res.send( req.params );
});

app.listen( 3000, function() {

    console.log( "Working !" );
} );