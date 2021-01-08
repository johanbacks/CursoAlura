$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://localhost:3000/frases",trocaFraseAleatoria)
  .fail(function(){
    $("erro").show();
    setTimeout(function(){
      $("erro").toggle();
    },2000)
  })
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numeroAlatorio = Math.floor(Math.random() * data.length);
  frase.text(data[numeroAlatorio].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAlatorio].tempo)
}