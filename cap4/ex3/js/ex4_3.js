function mostrarPrimo(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Insira um valor valido...")
        inNumero.focus();
        return
    }

    // var numDivisores = 0;

    var temDivisor = 0;

    for (var i = 2; i <= numero / 2; i++){
        if(numero % i == 0){
            // numDivisores++;
            temDivisor = 1;
            break;
        }
    }

    if(numero > 1 && !temDivisor){
        outResposta.textContent = numero + " É primo";
    } else {
        outResposta.textContent = numero + " Não é primo";        
    }

    // if(numDivisores == 2){
    //     outResposta.textContent = numero + " É primo";
    // } else {
    //     outResposta.textContent = numero + " Não é primo";
    // }
}
var btPrimo = document.getElementById("btPrimo");
btPrimo.addEventListener("click", mostrarPrimo);