// Elaborar um programa que leia três lados e verifique se eles
// podem ou não formar um triângulo. Para formar um triângulo, um
// dos lados não pode ser maior que a soma dos outros dois. Caso
// possam formar um triângulo, exiba também qual o tipo do triângulo:
// Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3
// lados diferentes).

function lados(){
    //Referêmcias aos elementos da página.
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");

    //Conversão do tipo de dado.
    var a = Number(inLadoA.value);
    var b = Number(inLadoB.value);
    var c = Number(inLadoC.value);

    //Condicional que compara os valores passados pelo usuário.
    if (a == b && a == c && b == c){
        //Se sim, mostra esse resultado.
        document.getElementById("outLados").innerHTML = "Lados podem formar um triângulo";
        document.getElementById("outTipo").innerHTML = "Tipo: Equilátero";
    } else if (a == b && a == c || b == c){
        //Se não, mostra esse resultado.
        document.getElementById("outLados").innerHTML = "Lados podem formar um triângulo";
        document.getElementById("outTipo").innerHTML = "Tipo: Isósceles";
    } else if (a != b && a != c && b != c){
        //Se não for nenhum dos 2 anteriores, mostra esse resultado.
        document.getElementById("outLados").innerHTML = "Lados podem formar um triângulo";
        document.getElementById("outTipo").innerHTML = "Tipo: Escaleno";
    } else if (a > b + c || b > a + c || c > a + b){
        //Se não for nenhum dos anteriores, mostra esse resultado.
        document.getElementById("outLados").innerHTML = "Lados não podem formar um triângulo";
        document.getElementById("outTipo").innerHTML = "Sem tipo";
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", lados);