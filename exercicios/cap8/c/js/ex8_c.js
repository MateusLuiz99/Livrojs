// Elaborar um programa para cadastrar os serviços a serem
// realizados por um auto center, que organize a ordem de execução
// dos serviços. Armazenar os serviços no navegador do usuário e a
// cada clique no botão Executar Serviço remover o primeiro serviço e
// exibi-lo na página. O programa deve atualizar o número de serviços
// pendentes quando: a) a página for aberta; b) um serviço for incluído;
// c) um serviço for removido.

function adicionarServico(){
    //Referêmcias aos elementos da página.
    var inServico = document.getElementById("inServico");
    var outServicos = document.getElementById("outServicos");
    var outRevisao = document.getElementById("outRevisao");
    var servico = inServico.value;

    //Validação dos dados.
    if (servico == ""){
        alert("Informe um serviço!");
        inServico.focus();
        return;
    }

    //Obtém o conteúdo salvo no localStorage.
    var servicosAdicionados = localStorage.getItem("servicosAdicionados");
    //Condicional, se tem valores salvos no localStorage.
    if(servicosAdicionados){
        //Se sim, os separam com ",".
        servicosAdicionados = servicosAdicionados.split(",");
    } else {
        //Se não, limpa tudo.
        servicosAdicionados = [];
    }

    //Adiciona o valor digitado na variável.
    servicosAdicionados.push(servico);
    //Joga todos os itens da lista em uma string, separada por ",".
    localStorage.setItem("servicosAdicionados", servicosAdicionados.join(","));

    //Variável que receberá os valores da lista de produtos.
    var linhas = "";

    //Laço que percorre toda a variável servicosAdicionados.
    for (var i = 0; i < servicosAdicionados.length; i++){
        //Adiciona os seus valores, com uma quebra de linha, em linhas.
        linhas += servicosAdicionados[i] + "\n";
    }

    //Os valores das respostas são passadas para os elemetos do HTML.
    outServicos.textContent = "Serviços pendentes: " + servicosAdicionados.length;
    outRevisao.textContent = servico;

    //Limpa os campos do formulário e joga o focu no campo inNome.
    inServico.value = "";
    inServico.focus();
}

function executarServicos(){
    //Referêmcias aos elementos da página.
    var outServicos = document.getElementById("outServicos");
    var outRevisao = document.getElementById("outRevisao");

    //Obtém o conteúdo salvo no localStorage.
    var servicosAdicionados = localStorage.getItem("servicosAdicionados");
    //Condicional, se tem valor salvo em servicosAdicionados.
    if(servicosAdicionados){
        //Se sim, ele recebe ele mesmo separado por ",".
        servicosAdicionados = servicosAdicionados.split(",");
    } else {
        //Se não, exibe esse alerta.
        alert("Não tem serviços para executar");
        return;
    }

    //Essa variável está recebendo o primeiro item que foi removido 
    //de "servicosAdicionados".
    var servicoExecutado = servicosAdicionados.shift();
    //Aqui será armazenado o valor do array "servicosAdicionados" no 
    //localStorage, o método join() tanto transforma o conteúdo do 
    //array em string como os separa por ",".    
    localStorage.setItem("servicosAdicionados", servicosAdicionados.join(","));

    //Os valores das respostas são passadas para os elemetos do HTML.
    outServicos.textContent = "Serviços pendentes: " + servicosAdicionados.length;
    outRevisao.textContent = servicoExecutado;
}

//Cria referência ao botão e após associa function ao 
//evento click.
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionarServico);

var btExecutar = document.getElementById("btExecutar");
btExecutar.addEventListener("click", executarServicos);

//Função que adiciona um serviço a cada vez que o botão 
//"enter" for clicado.
var inServico = document.getElementById("inServico");
inServico.addEventListener("keypress", function (tecla) {
    if (tecla.keyCode == 13){
        adicionarServico();
    }
});
