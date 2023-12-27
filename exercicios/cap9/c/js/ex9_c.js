// Elaborar um programa que leia o nome de um clube e, ao clicar
// em Adicionar, insira-o na página a partir de uma tag h5 (alinhada à
// direita e em itálico). Ao clicar em Montar Tabela de Jogos, o
// programa deve verificar se o número de tags h5 existentes na página
// é par. Se for, exiba os jogos (na ordem de inserção) em uma tabela,
// também inserida pelo programa na página. Os clubes devem ser
// recuperados das tags h5 existentes na página. Se o número de tags
// h5 for ímpar, exiba mensagem de advertência. Depois de montar a
// tabela, o programa deve desabilitar os botões Adicionar e Montar
// Tabela de Jogos.

//Variável global que armazenará os nomes de todos os clubes.
var listaClubes = [];

function adicionarTimes(){
    //Referêmcias aos elementos da página.
    var inClube = document.getElementById("inClube");
    var outClubes = document.getElementById("outClubes");
    var clube = inClube.value;

    //Validação dos dados.
    if (clube == ""){
        alert("Adicione um clube.");
        inClube.focus();
        return;
    }

    //Adiona os valores no array global.
    listaClubes.push(clube);

    //Os valores das respostas são passadas para o elemeto do HTML.
    outClubes.innerHTML += clube + "<br>";

    //Limpa e coloca o focu no campo de texto.
    inClube.value = "";
    inClube.focus();
}

//Cria referência ao botão e após associa function ao 
//evento click.
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionarTimes);

function montarConfrontos(){
    //Referêmcias aos elementos da página.
    var tbClubes = document.getElementById("tbClubes");
    var linha;

    //Limpa os campos da tabela antes de adicionar um novo valor.
    tbClubes.innerHTML = "";

    //Laço que percorre o array com os nomes dos times.
    for (var i = 0; i < listaClubes.length; i++){
        //Condição que verifica se a posição do clube é par 
        //ou impar.
        if (i % 2 == 0){
            //Se sim, cria uma nova linha na tabela, insertRow(-1) 
            //insere uma nova linha no final da tabela, "linha" 
            //armazena a referência para essa nova linha.
            linha = tbClubes.insertRow(-1);
        }
        //Independentemente se o índice for par ou ímpar, é adicionada 
        //uma nova célula, conteúdo, ao final da linha atual. "-1" indica 
        //que uma nova célula será inserida no final da linha.
        var coluna = linha.insertCell(-1);
        //Os valores das respostas são passadas para o elemeto do HTML.
        coluna.textContent = listaClubes[i];

        //*Resumindo: Se a posição for par ele adiciona uma linha 
        //(insertRow(-1)), e coloca o valor na tabela (insertCell(-1)), então, 
        //os valores são passados para o formulário HTML (coluna.textContent = 
        //listaClubes[i];)
    }
}

//Cria referência ao botão e após associa function ao 
//evento click.
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarConfrontos);

//Referência ao elemento do botão e adiciona um ouvinte 
//de click que aciona uma função anônima que faz um 
//reload que é a atualização da página e limpa os campos 
//da página ao clicar no botão.
var btNovosClubes = document.getElementById("btNovosClubes");
btNovosClubes.addEventListener("click", function(){
    location.reload();
})