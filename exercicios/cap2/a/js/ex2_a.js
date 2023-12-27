// Uma farmácia está com uma promoção – Na compra de duas
// unidades de um mesmo medicamento, o cliente recebe como
// desconto os centavos do valor total. Elaborar um programa que
// leia descrição e preço de um medicamento. Informe o valor do
// produto na promoção.

function farmaciaPromo(){
    //Referêmcias aos elementos da página.
    var inMed = document.getElementById("inMed");
    var inPreco = document.getElementById("inPreco");

    //A variável recebe o valor da referência dos elementos.
    var medicamento = inMed.value;
    //Conversão dos tipos de dados.
    var preco = Number(inPreco.value);
    //Essa variável recebe o valor inteiro da soma do preco com 
    //ele mesmo.
    var valPromo = Math.floor(preco + preco);    

    //Os valores das respostas são passadas para os elemetos do HTML.
    document.getElementById("outPromo").innerHTML = "Promoção de " + medicamento;
    document.getElementById("outValPromo").innerHTML = "Leve 2 por apenas RS: " + valPromo.toFixed(2);
}

//Cria referência ao botão e após associa function ao evento click.
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", farmaciaPromo);