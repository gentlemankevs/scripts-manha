$(document).ready(function () {
  var $formWell = $('#form-well');
  var $formGroups = $('div.form-group');
  var $helpBlocks = $('span.help-block');
  var $nomeInput = $('#nome-input');
  var $descriptionInput = $('#description-input');
  var $tabelaCategoria = $('#tabela-categoria');
  var cont = 4;

  $formWell.hide();
  $('#botao-nova-categoria').click(function () {
    $formWell.slideToggle();
  });

  function limparErros() {
    $formGroups.removeClass('has-error');
    $helpBlocks.text('');
  }

  $.get('http://localhost:8080/categorias/rest',function(categorias){
    console.log(categorias);
  },'json');

  function adicionarCategoria(categoria) {
    var linha = '<tr>';
    linha += '<td>' + categoria.id + '</td>';
    linha += '<td>' + categoria.creation + '</td>';
    linha += '<td>' + categoria.nome + '</td>';
    linha += '<td>' + categoria.description + '</td>'
    linha += '<td>';
    linha += '<button class="btn btn-default btn-sm"><i class="glyphicon-remove-sign"></i></button>';
    linha += '</td ></tr>';

    var $linhaObjeto = $(linha);
    var $botao = $linhaObjeto.find('button.btn').click(function () {
      console.log(categoria.id);
      $linhaObjeto.remove();
    });

    $tabelaCategoria.append($linhaObjeto);

  }

  function listarCategorias(categorias){
    $.each(categorias, function(i, cat){
      adicionarCategoria(cat);
    })
  }

  var categoriasFake=[{"id": 1, "nome": "PEOPLE", "creation": "14/09/2015 16:55:23", "description": "Photos of beautiful people (and some ugly ones too)."}, {"id": 2, "nome": "NATURE", "creation": "14/09/2015 16:55:54", "description": "It's a beautiful day! Do yourself a favor and go outside, please."}, {"id": 3, "nome": "PHOTOGRAPHY", "creation": "14/09/2015 16:56:35", "description": "Lots of pictures here. No selfies allowed."}];
  listarCategorias(categoriasFake);

  function mostrarErros(erros) {
    var helpBlockPrefixo = '#help-block-';
    var formGroupPrefixo = '#form-group-';
    $.each(erros, function (propriedade, valorDaPropriedade) {
      $(helpBlockPrefixo + propriedade).text(valorDaPropriedade);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

  $('#form-categoria').submit(function (evento) {
    evento.preventDefault();
    limparErros();
    var nome = $nomeInput.val();
    var description = $descriptionInput.val();
    if (nome === '') {
      mostrarErros({'nome': "We need a name for this category, please."})
    }
    else if (description === '') {
      mostrarErros({'nome': "No description? Come on man!"})
    }
    else {
      adicionarCategoria({"id": cont,
        "nome": nome,
        "creation": "14/09/2015 17:20:10",
        "description": description});
      $nomeInput.val('');
      $descriptionInput.val('');
      cont+=1
    }

  });

});
