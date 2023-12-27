// Elaborar um programa que leia o nome e a idade de um atleta de
// um clube de natação. O programa deve exibir o nome com “-”
// abaixo das letras do nome e a categoria do atleta, que pode ser
// “Infantil” (até 12 anos), “Juvenil” (entre 13 e 18 anos) ou “Adulto”
// (acima de 18 anos). O programa deve conter as funções:

// • retornarTracos() – que receba um nome como parâmetro e retorne
// uma linha com “-” para as letras do nome (nos espaços, manter
// os espaços).
// • categorizarAluno() – que receba um número como parâmetro e retorne
// a categoria do aluno, conforme indicação no enunciado do
// exercício.

//Referência ao botão logo no início para chamar a função 
//logo no começo.
var btCategoria = document.getElementById("btCategoria");
btCategoria.addEventListener("click", function retornarTracos(){
    //Referêmcias aos elementos da página.
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");
    var outNome = document.getElementById("outNome");

    //a variável recebe o valor da referência dos elementos, 
    //mas com conversão do tipo de dado.
    var idade = Number(inIdade.value);
    var nome = inNome.value;
    var tam = nome.length;
    var linha = "";

    //Validação dos dados.
    if(nome == "" || isNaN(idade)){
        alert("Preencha todos os campos com os dados corretamente");
        inNome.focus();
        return;
    }

    //Laço que percorre todo o tamanho da variável nome.
    for(var i = 0; i < tam; i++){
        //Condicional que verifica se o caracter não é 
        //igual a um espaço " ".
        if (nome.charAt(i) != " "){
            //Se sim, adiciona um "-" na variável linha.
            linha += "-";
        } else {
            //Se não, adiciona um espaço na variável linha.
            linha += " ";
        }
    }

    //O valor da resposta é passada para o elemeto do HTML.
    outNome.textContent = nome + "\n" + linha;

    //Chamando a função para categorizar o aluno.
    categorizarAluno();    
});

function categorizarAluno(){
    //Referêmcias aos elementos da página.
    var inIdade = document.getElementById("inIdade");
    var outCategoria = document.getElementById("outCategoria");
    //a variável recebe o valor da referência dos elementos, 
    //mas com conversão do tipo de dado.
    var idade = Number(inIdade.value);

    //Condicional que verifica se a idade passada é igual ou 
    //maior que 12 e se for maior que 0.
    if(idade <= 12 && idade >= 0){
        //Se sim, será exibido essa mensagem no elemto HTML.
        outCategoria.textContent = "Infantil";
    } else if (idade >= 13 && idade <= 18){
        //Se não, será exibido essa mensagem no elemto HTML.
        outCategoria.textContent = "Juvenil";
    } else if (idade > 18){
        //Se não for nehuma das anteriores, será exibido 
        //essa mensagem no elemto HTML.
        outCategoria.textContent = "Adulto";
    } else if (idade < 0){
        //E se idade for menor do que 0, essa mensagem será 
        //exibida na tela.
        outCategoria.textContent = "Idade inválida";
    }
}