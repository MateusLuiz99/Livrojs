function conversorDuracao() {
  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outDuracao = document.getElementById("outDuracao");

  var titulo = inTitulo.value;
  var duracao = inDuracao.value;

  if (inTitulo == NaN || inDuracao == 0) {
    alert("Por favor, digite o nome do Filme e a Duração dele");
  }

  var horas = Math.floor(duracao / 60);
  var minutos = duracao % 60;

  outTitulo.textContent = titulo
  outDuracao.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}
var btConverter = document.getElementById("btConverter")
btConverter.addEventListener("click", conversorDuracao)
