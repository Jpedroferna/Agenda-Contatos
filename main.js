const form = document.getElementById('form-agenda');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById(`nome-pessoa`);
    const inputNumeroPessoa = document.getElementById(`numero-pessoa`);

    if (nome.includes(inputNumeroPessoa.value)) {
        alert(`O Número: ${inputNumeroPessoa.value} já foi inserido`);
    } else {
        nome.push(inputNumeroPessoa.value);
        numero.push(parseFloat(inputNomePessoa.value));

        let linha = `<tr>`;
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputNumeroPessoa.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomePessoa.value = ``;
    inputNumeroPessoa.value = ``;
}

function atualizaTabela () {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}