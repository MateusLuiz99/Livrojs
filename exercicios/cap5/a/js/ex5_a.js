// Elaborar um programa para gerar uma tabela com os jogos de
// uma fase eliminatória de um campeonato. O programa deve conter
// três funções (a serem executadas no evento click de cada botão)
// para: 1) validar o preenchimento, adicionar um clube ao vetor e listar
// os clubes; 2) listar os clubes (se houver); 3) montar a tabela de
// jogos, no formato primeiro x último, segundo x penúltimo e assim
// por diante. Exibir mensagem e não listar a tabela de jogos, caso o
// número de clubes informados seja ímpar. 

//Variável global que armazenará os nomes dos clubes adicionados 
//pelo usuário.
var Clubes = [];
function adicionarClube(){
    //Referêmcias aos elementos da página.
    var inClube = document.getElementById("inClube");
    //A variável recebe o valor da referência dos elementos.
    var clube = inClube.value;

    //Validação dos dados.
    if (clube == ""){
        alert("Informe pelo menos dois clubes para se enfrentarem");
        inClube.focus();
        return;
    }

    //Adicionando valores passados pelo usuário no array global.
    Clubes.push(clube);
    //Limpa o campo de adição de dados e coloca o foco no campo 
    //de inClube.
    inClube.value = "";
    inClube.focus();

    //Chama outra função
    listarClubes();
}

//Cria referência ao botão e após associa function ao evento click.
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionarClube);

function listarClubes(){
    //Validação dos dados.
    if (Clubes.length == 0){
        alert("Não tem clubes na lista")
        return;
    } 

    //Variável que mostrará os valores finais.
    var lista = "";

    //Laço que percorre todo o array global.
    for (var i = 0; i < Clubes.length; i++){
        lista += i + 1 + ". " + Clubes[i] + "\n";
    }

    //O valor da resposta é passada para o elemeto do HTML.
    document.getElementById("outLista").textContent = lista;
}

//Cria referência ao botão e após associa function ao evento click.
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarTabelaJogos(){
    //Validação dos dados.
    if (Clubes.length % 2 !== 0){
        alert ("Você precisa de um número par de clubes para criar tabelas");
        return;
    }

    //Array tabela que irá mostrar a tabela dos jogos.
    var tabela = [];
    //Variável que irá receber o tamanho da variável golbal.
    var totalClubes = Clubes.length;

    //Laço que percorre todo o array golbal.
    for (var i = 0; i < totalClubes / 2; i++){
        //Cria uma nova variável e recebe todos os valores do array 
        //organizados. Sendo que, para mostrar o confronto entre o 
        //primeiro e o último, o segundo e o antepenúltimo e assim 
        //em diante, "Clubes[i]" = mostra os primeiros clubes e 
        //"Clubes[totalClubes - 1 - i]" mostra os últimos clubes 
        //ex: 8 - 1 - 0 = 7, 8 - 1 - 1 = 6. Os índices dos elementos 
        //do array começam por 0 e vai até 7, segundo esse exemplo, 
        //então o índice do último valor é 7, calculando o total de 
        //clubes - 1 - o índice do seu rival, assim por diante.
        var jogo = Clubes[i] + " x " + Clubes[totalClubes - 1 - i];
        //Adiciona o resultado no array.
        tabela.push(jogo);
    }

    //O valor da resposta é passada para o elemeto do HTML.
    outLista.textContent = tabela.join('\n');
}

//Cria referência ao botão e após associa function ao evento click.
var btTabela = document.getElementById("btTabela");
btTabela.addEventListener("click", montarTabelaJogos);