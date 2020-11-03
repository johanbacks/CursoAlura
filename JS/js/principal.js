var title = document.querySelector(".title")
title.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var resultado = document.querySelector(".info-imc")

//Validçao do calculo IMC
var validaPeso = true;
var validaAltura = true;

if(peso <= 0 || peso >= 1000 ) {
  console.log('Peso invalido')
  validaPeso = false;
  resultado.textContent = "Peso Inválido"
}
if(altura <= 0 || altura >= 3.00) {
  console.log('Altura invalida')
  validaAltura = false;
  resultado.textContent = "Altura Inválido"
}
if (validaAltura && validaPeso ) {
  var imc = peso / (altura * altura);
  resultado.textContent = imc
  
} 