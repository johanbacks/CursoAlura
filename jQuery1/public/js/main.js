var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  reniciaJogo();
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
      campo.attr("disabled", true)
      clearInterval(tempoID)
    }
  },1000)
})
}


function reniciaJogo() {
  $("#reiniciar").click(function(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro()
  })
}
$("#reiniciar").click(reniciaJogo);

