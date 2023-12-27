// Digamos que o número de chinchilas de uma fazenda triplica a
// cada ano, após o primeiro ano. Elaborar um programa que leia o
// número inicial de chinchilas e anos e informe ano a ano o número
// médio previsto de chinchilas da fazenda. Validar a entrada para que
// o número inicial de chinchilas seja maior ou igual a 2 (um casal).

function criaChinchila(){
    //Referêmcias aos elementos da página.
    var numero = document.getElementById("inNumero").value;
    var anos = document.getElementById("inAnos").value;

    //as variáveis recebem os valores da referência dos elementos, 
    //mas com conversão dos tipos de dados.
    numero = Number(numero);
    anos = Number(anos);

    //Validação dos dados.
    if (numero < 2){
        alert("O número inicial de Chinchila deva ser igual ou maior a 2.");
        return;
    }

    //Variável "res" que mostrará a resposta recebe o valor inicial.
    var res = "1º Ano: " + numero + " Chinchilas<br>" ;

    //Laço que percorre o valor de "anos".
    for (var i = 1; i < anos; i++){
        //Adiciona o valor de multiplicação por 3 a cada ano.
        numero *= 3;
        //Concatena as linhas na variável "res", com o novo valor de 
        //número, e sua númeração de anos que é o valor do índice + 1.
        res += (i+1) + "º Ano: " + numero + " Chinchilas<br>" ;
    }

    //O valor da resposta é passada para o elemeto do HTML.
    outAnos.innerHTML = res;
}

//Cria referência ao botão e após associa function ao evento click.
var btMinistrar = document.getElementById("btMinistrar");
btMinistrar.addEventListener("click", criaChinchila);
