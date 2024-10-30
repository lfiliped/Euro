document.addEventListener("DOMContentLoaded", (event) => {
    const botao = document.getElementById("genBtn");
    const botaoJson = document.getElementById("genJsonBtn");
    const botaoInputJson = document.getElementById("inputJsonBtn");
    
    botao.addEventListener("click", () => {
        consomeChave();
        geraJson();
    });
        botaoInputJson.addEventListener("click", () => {
        geraJsonDosInputs();
        geraJson();
    });
});

function consomeChave() {
    fetch("http://localhost:3000/euro")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            afixachave(data);
        })
        .catch(err => console.error('Error:', err));
}

function afixachave(mychave) {
    let listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = "";
    mychave.numeros.forEach(numero => {
        let newli = document.createElement('li');
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    });

    let listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = "";
    mychave.estrelas.forEach(estrela => {
        let newli = document.createElement('li');
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    });
}

function geraJson() {
    const numeros = [];
    const estrelas = [];

    document.querySelectorAll("#olMain li").forEach(item => {
        numeros.push(parseInt(item.innerHTML));
    });

    document.querySelectorAll("#olStars li").forEach(item => {
        estrelas.push(parseInt(item.innerHTML));
    });

    const jsonRepresentation = {
        numeros: numeros,
        estrelas: estrelas
    };

    console.log("JSON Gerado:", JSON.stringify(jsonRepresentation));
}

function geraJsonDosInputs() {
    const numerosInput = document.getElementById("numeros").value;
    const estrelasInput = document.getElementById("estrelas").value;

    const numeros = numerosInput.split(",").map(num => parseInt(num.trim()));
    const estrelas = estrelasInput.split(",").map(num => parseInt(num.trim()));

    if (numeros.length !== 5) {
        alert("Erro: Deve inserir exatamente 5 números.");
        return;
    }

    if (estrelas.length !== 2) {
        alert("Erro: Deve inserir exatamente 2 estrelas.");
        return;
    }

    if (numeros.some(num => num < 1 || num > 50)) {
        alert("Erro: Os números devem estar entre 1 e 50.");
        return;
    }

    if (estrelas.some(estrela => estrela < 1 || estrela > 12)) {
        alert("Erro: As estrelas devem estar entre 1 e 12.");
        return;
    }

    const jsonRepresentation = {
        numeros: numeros,
        estrelas: estrelas
    };

    console.log("JSON Gerado dos Inputs:", JSON.stringify(jsonRepresentation));

    // Atualizar a interface com os números e estrelas inseridos
    afixachave(jsonRepresentation);
}