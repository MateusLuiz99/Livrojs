// Uma palavra ou frase é um palíndromo quando pode ser lida nos
// dois sentidos, como RADAR, MUSSUM, ABBA. Elaborar um
// programa que leia uma frase e informe se ela é ou não um
// palíndromo (converter a frase para caixa alta).

function polin(){
    //Referêmcias aos elementos da página.
    var frase = document.getElementById("inFrase").value;
    var outResposta = document.getElementById("outResposta");
    //A variável fraseLimpa, limpa a string "frase" dos caracteres que não são (AZ),
    //números (0-9). O método "replace" encontra todos os caracteres que não se 
    //encaixam na primeira expressão para substituir por uma string vazia ("") e o 
    //".toLowerCase()" transforma todos os caracteres em minúsculos.
    var fraseLimpa = frase.replace(/[^A-Z0-9]/ig,"").toLowerCase();
    //A varável "fraseInv" inverte a "fraseLimpa", o método "split("")" é usado para
    //dividir a string em um array de caracters, o reverse() inverte a ordem dos 
    //elementos do array e o join(" ") junta os elemetos do array.
    var fraseInv = fraseLimpa.split("").reverse().join("");

    //Comparação se a as 2 frases são iguais.
    if(fraseLimpa === fraseInv){
        //Se sim, mostra a mensagem.
        outResposta.textContent = "A palavra '" + frase + "' é um políndromo";
    }else{
        //Se não, mostra essa outra mensagem
        outResposta.textContent = "A palavra '" + frase + "' não é um políndromo";
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", polin);
