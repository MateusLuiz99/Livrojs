// Elaborar um programa que leia um nome e, ao clicar no botão
// Exibir Partes do Nome, insira linhas de cabeçalho h3 na página com
// as partes do nome em cores aleatórias. Ao clicar no botão, o
// programa deve verificar a existência de linhas de cabeçalho h3 na
// página, excluindo-as se houver.

function nomeColorido(){
    //Referêmcias aos elementos da página.
    var inNome = document.getElementById("inNome");
    var outNomes = document.getElementById("outNomes");
    var nome = inNome.value;

    //Validação dos dados.
    if (nome == ""){
        alert("Digite algum nome.");
        inNome.focus();
        return;
    }

    //Essa variável recebe os dados digitados pelo usuário como um 
    //array separados.
    var divNome = nome.split(" ");
    //Variável que será responsável por chamar a função que mudará a 
    //estilização dos nomes.
    var nomeDoc = "";

    //Laço que percorre os nomes.
    for (var i = 0; i < divNome.length; i++){
        //"nomeDoc" recebe o "span" que o style que chama a função 
        //"getRandomColor()" que mudará a cor dos nomes e em seguida 
        //mostra os nomes com "divNome[i]" e faz a quebra de linha 
        //no HTML com o "<br>".
        nomeDoc += "<span style='color:" + getRandomColor() + "'>" 
        + divNome[i] + "</span><br>";
    }
    //Os valores das respostas são passadas para o elemeto do HTML.
    outNomes.innerHTML = nomeDoc;
}

function getRandomColor(){
    //"letters" recebe uma string de 16 dígitos hexadecimal, porque as 
    //cores são representados dessa forma.
    var letters = '0123456789ABCDEF';
    //"color" inicializa recebendo "#", isso porque as cores são 
    //representadas com um "#" na frente.
    var color = '#';
    //Laço, que executa 6 vezes, uma cor hexadecimal é representado por 
    //6 dígitos.
    for (var i = 0; i < 6; i++){
        //"color" recebe ele mesmo + um dígito hexadecimal aleatório 
        //escolhido da string "letters". "Math.random()" gera números 
        //aleatórios entre 0 e 1, e "Math.floor()" arredonda o número 
        //para baixo, o número inteiro mais próximo, multiplicado por 16, 
        //ou seja, se gerar o número 0.1 * 16 = 1.6, com arredondamento 
        //será igual a 1, ou se gerar 0.9999 * 16 = 15.9984, arredondado 
        //ficará igual a 15 e etc, assim gera um valor de uma cor hexadecimal.
        color += letters[Math.floor(Math.random() * 16)];
    }
    //E retorna esse valor
    return color;
}

//Cria referência ao botão e após associa function ao 
//evento click.
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", nomeColorido);
