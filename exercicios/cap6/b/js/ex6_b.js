// Elaborar um programa que leia o nome de um autor de um livro.
// Em seguida, exiba-o no formato de uma citação bibliográfica com o
// sobrenome, seguido pelas iniciais do nome.

function gerarCitacao(){
    //Referêmcias aos elementos da página.
    var inNome = document.getElementById("inNome");
    var outCitacao = document.getElementById("outCitacao");
    //Pega o valor da variável passada como referência.
    var nome = inNome.value;    

    //Validação dos dados.
    if (nome == "" || nome.indexOf(" ") == -1){
        alert("Informe o nome completo do autor");
        inNome.focus();
        return;
    }

    //Divisão da string em array de substring, com o espaço como separador, 
    //significa que nome será separado no arrar partes.
    var partes = nome.split(" ");
    var resNome = "";
    //Essa variável recebe o tamanho da quantidade de strings na frase.
    var tam = partes.length;

    //Essa variável recebe o ultimo nome do array "partes". 
    //Ex: se partes tiver 3 nomes, suas posições são 0, 1 e 2,
    //a variável "tam" recebeu o tamanho do array, por isso
    //seu valor é 3, pois contou cada elemento do array e não 
    //suas posições, portanto, tam - 1 = 2, ou seja, ultNome 
    //recebe o conteúdo do elementona posição 2, o último nome 
    //desse exemplo.
    var ultNome = partes[tam - 1];

    //Laço que percorre todo o array, menos o último elemento 
    //e adiciona com o método charAt(0) apenas a primeira letra 
    //de todos os nome com exeção do último.
    for (var i = 0; i < tam - 1; i++){
        resNome += partes[i].charAt(0) + ", ";
    }

    //Agora a variável "resNome" recebe o último nome também.
    resNome += ultNome;

    //O valor da resposta é passada para o elemeto do HTML.
    outCitacao.textContent = resNome;

}

//Cria referência ao botão e após associa function ao evento click.
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCitacao);