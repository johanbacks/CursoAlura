  $("#botao-frase").click(fraseAleatoria);
  $("#botao-frase-id").click(buscaFrase);

  function fraseAleatoria() {
    $("#spinner").show();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
      $("#spinner").toggle();
    });
  }

  function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAlatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAlatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAlatorio].tempo)
  }

  function buscaFrase(){
    $("#spinner").show();
    var fraseId = $("#frase-id").val();
    var dados = { id : fraseId };
    console.log("fraseid" + fraseId);

    $.get("http://localhost:3000/frases" , dados , trocaFrase)
    .fail(function(){
      $("#erro").toggle();
      setTimeout(function(){
          $("#erro").toggle();
      },2000);
    })
    .always(function() {
      $("#spinner").toggle();
    }) 
  }

  function trocaFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
  }