//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome === "") {
        alert("Digite um nome válido!");
    } else {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        exibirAmigos();
    }
}

function exibirAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        const novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo() {

    if (amigos.length <= 0) {
        alert("O array está vazio!");
    } else {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];

        const listaSorteado = document.getElementById("resultado");
        listaSorteado.innerHTML = "";

        const elementoSorteado = document.createElement("li");
        elementoSorteado.textContent = amigoSorteado;
        listaSorteado.appendChild(elementoSorteado);
        amigos.splice(indiceSorteado, 1);
        exibirAmigos();
    }

}