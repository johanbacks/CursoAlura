$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numeroAlatorio = Math.floor(Math.random() * data.length);
  frase.text(data[numeroAlatorio].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAlatorio].tempo)
}