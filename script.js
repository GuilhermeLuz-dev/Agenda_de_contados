const form_agenda = document.querySelector("#form_agenda");
let linhas = "";
let contContatos = 0

form_agenda.addEventListener('submit', (e) => {
    e.preventDefault()
    atualizarTable();
    atualizarContador();
})

function atualizarTable() {
    const nome = document.querySelector("#nome");
    const tel = document.querySelector("#tel");
    const lista_contatos = document.querySelector("#lista_contatos");
    if (!linhas.includes(nome.value) && !linhas.includes(tel.value)) {

        let linha = `<tr><td>${nome.value}</td><td>${tel.value}</td></tr>`
        linhas += linha;
        lista_contatos.innerHTML = linhas;
        nome.value = "";
        tel.value = "";
    } else {
        if (linhas.includes(nome.value)) alert(`O nome ${nome.value} já foi cadastrado!`)
        else alert(`O número ${tel.value} já foi cadastrado!`)
    }
}

function atualizarContador() {
    const numContatos = document.querySelector("#numContatos");

    contContatos++;
    numContatos.innerHTML = contContatos;
}