function exibirRaiz(){
    var inNum = document.getElementById("inNum");
    var outResposta = document.getElementById("outResposta");

    numero = Number(inNum.value)

    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido...")
        return;
    }
    
    var raiz = Math.sqrt(numero);

    if(raiz == Math.floor(raiz)){        
        outResposta.textContent = "Raiz: " + raiz;
    } else {
        outResposta.textContent = "Não há raiz para " + numero;
    }
}

var btRaiz = document.getElementById("btRaiz");
btRaiz.addEventListener("click", exibirRaiz);