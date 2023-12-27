function compraVeiculo(){
    var inVeiculo = document.getElementById("inVeiculo");
    var inValor = document.getElementById("inValor");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcelas = document.getElementById("outParcelas");

    var veiculo = inVeiculo.value;
    var valor = inValor.value;
    var entrada = valor / 2;
    var parcelas = entrada / 12;

    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcelas.textContent = "+ 12x de R$: " + parcelas.toFixed(2);
}

var btPromo = document.getElementById("btPromo");
btPromo.addEventListener("click", compraVeiculo)