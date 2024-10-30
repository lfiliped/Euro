//

http = require('http');

server = http.createServer();

server.on('request', function (req, res) {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write('<h1> Olá </h1>');
    res.end();
    console.log("a responder a pedido " + req.method );
});

server.on('listening', () => { console.log("sou o servidor e estou a correr") });

server.listen(3000);
