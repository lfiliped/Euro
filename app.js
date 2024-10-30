const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/ola', function(req, res) {
    console.log("a responder em /");
    res.send('Hello Express!');
});

app.get('/euro', function (req, res) {
    res.set("content-type", 'application/json');
    const chave = gerachave();
    res.json(chave);
});

function gerachave() {
    let chave = {
        numeros: [],
        estrelas: []
    };

    let numerosSet = new Set();
    while (numerosSet.size < 5) {
        let novo = (Math.floor(Math.random() * 50) + 1);
        numerosSet.add(novo);
    }

    let estrelasSet = new Set();
    while (estrelasSet.size < 2) {
        let novo = (Math.floor(Math.random() * 12) + 1);
        estrelasSet.add(novo);
    }

    chave.numeros = [...numerosSet];
    chave.estrelas = [...estrelasSet];
    return chave;
}

app.listen(3000, () => {
    console.log('Servidor a correr na porta 3000 - http://localhost:3000');
});