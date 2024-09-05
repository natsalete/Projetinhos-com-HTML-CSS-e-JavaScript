$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(
      novoItem
    );
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereco-imagem-nova').val('');
  });
});
