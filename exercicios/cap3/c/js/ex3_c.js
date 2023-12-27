// Elaborar um programa para simular um parquímetro, o qual leia o
// valor de moedas depositado em um terminal de estacionamento
// rotativo. O programa deve informar o tempo de permanência do
// veículo no local e o troco (se existir). Se o valor for 
// inferior ao tempo mínimo, exiba a mensagem: “Valor Insuficiente”.

function parquimetro(){
    //Referêmcias aos elementos da página.
    var inValor = document.getElementById("inValor");

    //Conversão do tipo de dado.
    var valor = Number(inValor.value);

    //Condição que compara o valor digitado pelo usuário com os 
    //valores do parquímetro.
    if (valor == 1.00 || valor > 1 && valor < 1.75){
        //Se sim, mostra esse resultado.
        document.getElementById("outTempo").innerHTML = "Tempo: 30 min";
        document.getElementById("outTroco").innerHTML = "Troco R$: " + (valor % 1).toFixed(2);
    } else if (valor == 1.75 || valor > 1.75 && valor < 3.00){
        //Se não, mostra esse resultado.
        document.getElementById("outTempo").innerHTML = "Tempo: 60 min";
        document.getElementById("outTroco").innerHTML = "Troco R$: " + (valor % 1.75).toFixed(2);
    } else if (valor == 3.00 || valor > 3.00){
        //Se não for nenhum dos 2 anteriores, mostra esse resultado.
        document.getElementById("outTempo").innerHTML = "Tempo: 120 min";
        document.getElementById("outTroco").innerHTML = "Troco R$: " + (valor % 3).toFixed(2);
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btDep = document.getElementById("btDep");
btDep.addEventListener("click", parquimetro);