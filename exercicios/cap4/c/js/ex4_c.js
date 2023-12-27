// Elaborar um programa que leia um número e verifique se ele é ou
// não perfeito. Um número dito perfeito é aquele que é igual à soma
// dos seus divisores inteiros (exceto o próprio número). O programa
// deve exibir os divisores do número e a soma deles.

function numeroPerfeito(){
    //Referêmcias aos elementos da página.
    var numero = document.getElementById("inNumero").value;
    //Conversão do tipo de dado.
    numero = Number(numero);

    //Variáveis que receberam os valores das somas e seus divisores.
    var soma = 0;
    var divisores = "";

    //Laço que percorre o número digitado pelo usuário.
    for (var i = 1; i < numero; i++){
        //Condição que verifica se o resto da divisão do número com 
        //índice é igual a 0.
        if (numero % i == 0){
            //Se sim, soma e acumula os números.
            soma += i;
            //E os divisores recebem os índices mais eles mesmos.
            divisores += i + ", ";
        }
    }

    //A variável vai receber os números divisores, menos os 2 últimos 
    //valores ", 28".
    divisores = divisores.slice(0, -2);

    //Condição que verifica se a soma é igual ao número digitado pelo 
    //usuário.
    if (soma == numero){
        //Se sim, mostra esse texto com os valores.
        document.getElementById("outDiv").textContent = 
                "Divisores do " + numero + ": " + divisores + " (Soma: " + soma + ")";
        document.getElementById("outNumPerf").textContent = 
            numero + " É um número perfeito";
    } else {
        //Se não, mostra esse outro texto com outros valores.
        document.getElementById("outDiv").textContent = 
            "Divisores do " + numero + ": " + divisores + " (Soma: " + soma + ")";
        document.getElementById("outNumPerf").textContent = 
            numero + " Não é perfeito";
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", numeroPerfeito);
