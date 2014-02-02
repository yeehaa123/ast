var express = require('express');
var http = require('http');
var app = express();
var port = process.env.PORT || 8080;
var server = http.createServer(app).listen(port);

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Add our Application Middlewares
app.use(app.router);

// Add DocPad to our Application
var docpadInstanceConfiguration = {
    // Give it our express application and http server
    serverExpress: app,
    serverHttp: server,

    // Tell it not to load the standard middlewares (as we handled that above)
    middlewareStandard: false
};
var docpadInstance = require('docpad').createInstance(docpadInstanceConfiguration, function(err){
    if (err)  return console.log(err.stack);

    // Tell DocPad to perform a generation, extend our server with its routes, and watch for changes
    docpadInstance.action('generate server watch', function(err){
        if (err)  return console.log(err.stack);
    });
});
