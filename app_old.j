//

express = require('express');

app = new express();

app.get('/', function(req, res) {
    console.log("a responder em /");
    res.send('Hello Express!');
});

app.listen(3000);