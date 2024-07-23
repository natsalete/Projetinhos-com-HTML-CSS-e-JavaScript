const form = document.getElementById("form-contatos");
const imgPerfil = '<img src="./images/Profile Circle.png" alt="perfil" />';
const nomes = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputTelefone = document.getElementById("telefone");

  if (telefones.includes(inputTelefone.value)) {
    alert(
      `O telefone: ${inputTelefone.value} já está na sua lista de contatos!`
    );
  } else {
    nomes.push(inputNomeContato.value);
    telefones.push(inputTelefone.value);
    let linha = "<tr>";
    linha += `<td>${imgPerfil}</td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputTelefone.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
