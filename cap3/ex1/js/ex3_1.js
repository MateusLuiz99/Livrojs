function calcularValor(){
    var inBuffet = document.getElementById("inBuffet");
    var inConsumo = document.getElementById("inConsumo")
    var outValor = document.getElementById("outValor")

    var quilo = inBuffet.value;
    var consumo = inConsumo.value;

    var valor = (quilo/1000) * consumo;
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2)
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor)