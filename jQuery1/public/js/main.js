var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  $("#reiniciar").click(reniciaJogo);
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numeroPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase")
    tamanhoFrase.text(numeroPalavras);
}

function inicializaContadores() {
  campo.on("input", () => {
    var conteudo = campo.val();
   
    var qtdPalavras = conteudo.split(/\s+/).length - 1;
    $("#contador-palavras").text(qtdPalavras)
    
    var qtdCaracters =  conteudo.length ;
    $("#contador-caracteres").text(qtdCaracters)
   });
}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus" , function() {
  var tempoID =  setInterval(function() {
    tempoRestante--;
    $("#tempo-digitacao").text(tempoRestante)
    if(tempoRestante < 1) {
      clearInterval(tempoID)
      finalizaJogo();
    }
  },1000)
})
}
function finalizaJogo(){
    campo.attr("disabled", true)
    campo.toggleClass("campo-desativado")
    inserePlacar();
}


function inicializaMarcadores() {
  var frase = $(".frase").text();
  campo.on("input" , function() {
  var digitado = campo.val();
  var comparavel = frase.substr(0 , digitado.length);

  if (digitado == comparavel) {
    campo.addClass("borda-verde");
    campo.removeClass("borda-vermelha");
  } else {
    campo.addClass("borda-vermelha");
    campo.removeClass("borda-verde");
  }
})

}
function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Johan";
  var numeroPalavras = $("#contador-palavras").text();  
  var linha = novaLinha(usuario, numeroPalavras);
  linha.find(".botao-remover").click(removeLinha)

  corpoTabela.prepend(linha)
};

function novaLinha(usuario,palavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");
  
  var link = $("<a>").addClass("botao-remover").attr("href", "#");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);
  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;

};
function removeLinha() {   
    event.preventDefault();
    $(this).parent().parent().remove()
};

function reniciaJogo() {
  $("#reiniciar").click(function(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro()
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
  })
}


