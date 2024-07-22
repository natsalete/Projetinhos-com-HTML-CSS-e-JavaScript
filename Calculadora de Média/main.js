const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';

let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtivivdade = document.getElementById('nome-atvidade');
    const inputNotaAtivivdade = document.getElementById('nota-atividade');
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtivivdade.value}</td>`;
    linha += `<td>${inputNotaAtivivdade.value}</td>`;
    linha += `<td>${inputNotaAtivivdade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtivivdade.value = '';
    inputNotaAtivivdade.valeue = '';

   // alert(`Atividade: ${inputNomeAtivivdade.value} - Nota: ${inputNotaAtivivdade.value}`);
});

