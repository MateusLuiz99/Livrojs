// Elaborar um programa que leia um número. Informe se ele é par
// ou ímpar.

function parImpar(){
    //Referêmcias aos elementos da página.
    var inNumero = document.getElementById("inNumero");

    //Conversão dos tipos de dados.
    var numero = Number(inNumero.value);

    //Condição que compara se o valor digitado pelo usuário é par.
    if (numero % 2 == 0){
        //Se sim, mostra esse resultado.
        document.getElementById("outResposta").innerHTML = "Resposta: " + numero + " é par";
    } else {
        //Se não, mostra esse outro resultado.
        document.getElementById("outResposta").innerHTML = "Resposta: " + numero + " é ímpar";
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", parImpar);