const form_agenda = document.querySelector("#form_agenda");
let linhas = "";
let contContatos = 0

form_agenda.addEventListener('submit', (e) => {
    e.preventDefault()
    atualizarTable();
    atualizarContador();
})

function atualizarTable() {
    const nome = document.querySelector("#nome").value;
    const tel = document.querySelector("#tel").value;
    const lista_contatos = document.querySelector("#lista_contatos");

    let linha = `<tr><td>${nome}</td><td>${tel}</td></tr>`
    linhas += linha;
    lista_contatos.innerHTML = linhas;
}

function atualizarContador() {
    const numContatos = document.querySelector("#numContatos");

    contContatos++;
    numContatos.innerHTML = contContatos;
}