// Elaborar um programa que leia nome e número de acertos de
// candidatos inscritos em um concurso. Listar os dados a cada
// inclusão. Ao clicar no botão Aprovados 2ª Fase, ler o número de
// acertos para aprovação dos candidatos para a 2ª fase do concurso. 
// O programa deve, então, exibir os candidatos aprovados, ou seja, 
// apenas os que obtiveram nota maior ou igual à nota informada. 
// Exibir os candidatos aprovados em ordem decrescente de 
// número de acertos. Caso nenhum candidato tenha sido 
// aprovado, exibir mensagem.

//Array global que irá armazenar os nomes e notas dos candidatos.
var candidatos = [];

function adicionarCandidatos(){
    //Referêmcias aos elementos da página.
    var inNome = document.getElementById("inNome");
    var inNota = document.getElementById("inNota");

    //a variável recebe o valor da referência dos elementos.
    var nome = inNome.value;
    //a variável recebe o valor da referência dos elementos, 
    //mas com conversão do tipo de dado.
    var nota = Number(inNota.value);
    //Adicionando valores passados pelo usuário no array global.
    candidatos.push({nome: nome, nota: nota});

    //Validação dos dados.
    if (nome == "" || nota == ""){
        alert("Preencha os campos!");
        inNome.focus();
        return;
    }

    //Limpa o campo de adição de dados e coloca o foco no campo 
    //de inNota.
    inNome.value = "";
    inNota.value = "";
    inNome.focus();
}

//Cria referência ao botão e após associa function ao evento click.
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionarCandidatos);

function listarCandidatos(){
    //Variável que mostrará os valores finais.
    var lista = "";

    //Validação dos dados.
    if(candidatos.length == 0){
        alert("Adicione o nome do candidato e sua nota porfavor");
        inNome.focus();
        return;
    }

    //Laço que percorre todo o array global.
    for(var i = 0; i < candidatos.length; i++){
        //Em seguida é passado os valores do array cadidatos de forma organizadas 
        //para a variável "lista".
        lista += candidatos[i].nome + " - " + candidatos[i].nota + " acertos \n";
    }

    //O valor da resposta é passada para o elemeto do HTML.
    document.getElementById("outCandidatos").innerHTML = lista;

}

//Cria referência ao botão e após associa function ao evento click.
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCandidatos);

function aprovadosEtapa(){
    //Variável que recebe o valor recebido no prompt.
    var numeroAcertos = Number(prompt("Números de acertos para aprovação?"));

    //Validação dos dados.
    if(numeroAcertos == 0 || isNaN(numeroAcertos)){
        return;
    }

    //Variável que mostrará os valores finais.
    var lista = "";

    //Laço que percorre todo o array
    for (var i = 0; i < candidatos.length; i++){
        //Condição que compara as notas se elas forem maior ou igual ao valor 
        //passado pelo usuário no prompt.
        if (candidatos[i].nota >= numeroAcertos){
            //Se sim, os valores são passados para a variável lista.
            lista += candidatos[i].nome + " - " + candidatos[i].nota + " acertos \n";
        }
        //Se não, os valores simplesmente não aparecem por isso não foi 
        //necessario um else.
    }
    
    //O valor da resposta é passada para o elemeto do HTML.
    document.getElementById("outCandidatos").innerHTML = lista;
}

//Cria referência ao botão e após associa function ao evento click.
var btAprovado = document.getElementById("btAprovado");
btAprovado.addEventListener("click", aprovadosEtapa);