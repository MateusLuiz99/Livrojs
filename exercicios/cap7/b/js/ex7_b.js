// Elaborar um programa que leia o nome completo de um aluno. O
// programa deve validar o preenchimento de um nome completo e
// exibir a senha inicial do aluno, a qual será o sobrenome seguido
// pelo número de vogais do nome completo dele. O programa deve
// conter as funções:

// • validarNome() – que receba um nome como parâmetro e retorne true
// (nome completo) ou false (nome incompleto).
// • obterSobrenome() – que receba um nome como parâmetro e retorne o
// último nome do aluno em letras minúsculas.
// • contarVogais() – que receba um nome e retorne o número de vogais
// deste, com dois dígitos.

function validarNome(nome){
    //Expressão que fornece o nome completo, retorna true se for 
    //completo e false se for incompleto. O "nome.trim()" remove 
    //espaços em branco estras no início e fim da string, o 
    //"split(" ")" divide a string em um array de substring toda 
    //vez que encontrar um espaço, "length" para obter o número 
    //de elementos e "> 1" se o número de elementos é maior 
    //que 1.
    return nome.trim().split(" ").length > 1;
}

function obterSobrenome(nome){
    //Referêmcias aos elementos da página.
    var nome = document.getElementById("inNome").value;

    //Essa variável recebe o índece do último espaço 
    //do array.
    var ultEsp = nome.lastIndexOf(" ");
    //E essa variável recebe o valor de todo o conteúdo apartir 
    //do último espaço em diante.
    var sobreNome = nome.substr(ultEsp);

    //Retorna o valor de "sobreNome".
    return sobreNome;
}

function contarVogais(nome){
    //Essa constante recebe todas as vogais encontradas em "nome", 
    //a flag "g" = Global serve para encontrar todas as correspondências 
    //na string, não apenas a primeira. A flag "i" = Ignore case, serve 
    //para encontrar as vogais independente de serem maiúsculas ou 
    //minúsculas.
    const vogais = nome.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
    //Nessa outra constante é usada operador ternário para obter valor, 
    //se "vogais" não for null, "vogais.length" terá vogais encontradas, 
    //se não, será 0.
    const quantidade = vogais ? vogais.length : 0;
    //Aqui é usado o método toString(), para converter "quantidade" em 
    //string, o método "padStart()" garante que a string tenha ao menos 
    //2 digitos, ex: 5 = 05 / 12 = 12;
    return quantidade.toString().padStart(2, '0');
}

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", function() {
    //Referêmcias aos elementos da página.
    const nomeCompleto = document.getElementById("inNome").value;
    //Condicional se o nome digitado for validado na função "validarNome".
    if (validarNome(nomeCompleto)){
        //Se sim, adiciona os valores passados na função nessas constantes.
        const sobrenome = obterSobrenome(nomeCompleto);
        const numVogais = contarVogais(nomeCompleto);
        const senha = sobrenome + numVogais;
        
        //O valor da resposta é passada para o elemeto do HTML.
        document.getElementById("outSenha").textContent = "Senha inicial: " + senha;
    } else {
        //Se não, esse valor da resposta é passada para o elemeto do HTML.
        document.getElementById("outSenha").textContent = "Por favor, insira um nome completo";
    }
});