// Um supermercado está com uma promoção – Para aumentar
// suas vendas no setor de higiene, cada etiqueta de produto deve
// exibir uma mensagem anunciando 50% de desconto (para um
// item) na compra de três unidades do produto. Elaborar um
// programa que leia descrição e preço de um produto. Após,
// apresente as mensagens indicando a promoção.

function promocaoTerceiroProduto(){
    //Referêmcias aos elementos da página.
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");

    //A variável recebe o valor da referência dos elementos.
    var produto = inProduto.value;
    //Conversão dos tipos de dados.
    var preco = Number(inPreco.value);

    //A variável "novoPreco" recebe o valor do preço multiplicado por 
    //2 mais a métade do valor do preço (preco * 0.5 ).
    var novoPreco = preco * 2 + ( preco * 0.5 );

    //Os valores das respostas são passadas para os elemetos do HTML.
    document.getElementById("outPromo").innerHTML = produto + " - Promoção: Leve 3 por R$: " + novoPreco.toFixed(2);
    document.getElementById("outValor").innerHTML = "O 3º produto custa apenas R$: " + (preco * 0.5).toFixed(2);

}

//Cria referência ao botão e após associa function ao evento click.
var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", promocaoTerceiroProduto);