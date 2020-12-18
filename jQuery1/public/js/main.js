var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase").text(numeroPalavras)

var campo = $(".campo-digitacao");
campo.on("input", () => {
 var conteudo = campo.val();

 var qtdPalavras = conteudo.split(/\s+/).length - 1;
 $("#contador-palavras").text(qtdPalavras)
 
 var qtdCaracters =  conteudo.length ;
 $("#contador-caracteres").text(qtdCaracters)

});