function mostrarDec(){
    var inNumero = document.getElementById("inNumero");
    var outDec = document.getElementById("outDec");

    var numero = Number(inNumero.value);
    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    var res = "Entre " + numero + " e 1: " + numero;

    for(var i = numero - 1; i > 0; i--){
        res = res + ", " + i;
    }
    res = res + ". ";
    outDec.textContent = res;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarDec);