// Elaborar um programa para cadastrar produtos na lista de
// compras da semana. Salvar e exibir a listagem dos produtos em
// ordem alfabética.

function addCompras(){
    //Referêmcias aos elementos da página.
    var inProduto = document.getElementById("inProduto");
    var outProdutosAdd = document.getElementById("outProdutosAdd");
    var outProdutos = document.getElementById("outProdutos");
    var produto = inProduto.value;

    //Validação dos dados.
    if(produto == ""){
        alert("Informe um produtos");
        inProduto.focus();
        return;
    }

    //Se existe algum dado salvo em localStorage.
    if (localStorage.getItem("produtoSemana")){
        //Obtém seu conteúdo e concatena com uma vírgula seguida do 
        //valor da variável "produto".
        var produtoSemana = localStorage.getItem("produtoSemana") 
        + "," + produto;
        //Atualiza o item "produtoSemana" no localStorage com o novo 
        //valor que inclui o produto recém-adicionado.
        localStorage.setItem("produtoSemana", produtoSemana);
    } else {
        //Se não, é a 1º vez que um produto está sendo adicionado, 
        //um novo item "produtoSemana" é criado no localStorage e o 
        //valor da variável "produto" é definido como seu valor.
        localStorage.setItem("produtoSemana", produto);
    }

    //Obtém seu conteúdo, e divide os itens de vetor a cada ",".
    var produtos = localStorage.getItem("produtoSemana").split(",");
    //Organiza os dados adicionados pelo usuário em ordem alfabética.
    produtos.sort();
    //Variável que receberá os valores da lista de produtos.
    var linhas = "";

    //Laço que percorre os produtos.
    for (var i = 0; i < produtos.length; i++){
        //Adiciona todos os elementos adicionados pelo usuário na variável, com 
        //um salto de linha.
        linhas += produtos[i] + "\n";
    }

    //Os valores das respostas são passadas para os elemetos do HTML.
    outProdutosAdd.textContent = "Produtos adicionados \n" + 
    "-------------------------------------- \n";
    outProdutos.textContent = linhas + "\n";

    //Limpa o campo de texto e coloca o focu nele.
    inProduto.value = "";
    inProduto.focus();
}

//Cria referência ao botão e após associa function ao evento click.
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", addCompras);

function limparLista(){
    //Função que remove os valores armazenados no localStorage.
    localStorage.removeItem("produtoSemana");
    //Limpa o campo do elemento da página.
    outProdutos.textContent = "";
    //Limpa o campo de texto e coloca o focu nele.
    inProduto.value = "";
    inProduto.focus();
}

//Cria referência ao botão e após associa function ao evento click.
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);
