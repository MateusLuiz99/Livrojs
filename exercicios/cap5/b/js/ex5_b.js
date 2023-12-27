// Elaborar um programa que adicione números a um vetor. O
// programa deve impedir a inclusão de números repetidos. Exibir a
// lista de números a cada inclusão. Ao clicar no botão Verificar
// Ordem, o programa deve analisar o conteúdo do vetor e informar se
// os números estão ou não em ordem crescente.

//Array global que irá armazenar os números.
var numeros = [];

function ordemNumeros(){
    //Referêmcias aos elementos da página.
    var inNumero = document.getElementById("inNumero");
    var outNumeros = document.getElementById("outNumeros");

    // a variável recebe o valor da referência dos elementos, 
    //mas com conversão do tipo de dado.
    var num = Number(inNumero.value);

    //Validação dos dados.
    if (num == ""){
        alert("Você não adicionou nenhum número ainda");
        inNumero.focus();
        return;
    }

    //Adicionando valores passados pelo usuário no array global.
    numeros.push(num);

    //Mostra os valores do array separados por ",".
    outNumeros.textContent = numeros.join(", ");

    //Limpa o campo de adição de dados e coloca o foco no campo 
    //de inNúmero.
    inNumero.value = "";
    inNumero.focus();
}

//Cria referência ao botão e após associa function ao evento click.
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", ordemNumeros);

function crescenteDecrescente(){
    //Referêmcias aos elementos da página.
    var outAtencao = document.getElementById("outAtencao");
    //Variável usada como flag.
    let estaOrdem = true;

    //Laço que percorre o array numeros.
    for (let i = 0; i < numeros.length - 1; i++){
        //Condicional que verifica se o elemento atual é maior 
        //que o próximo.
        if(numeros[i] > numeros[i + 1]){
            //O valor da flag muda e em seguida da um break.
            estaOrdem = false;
            break;
        } 
    }

    //Condicional se a flag for verdadeira
    if (estaOrdem){
        //Se sim, mostra esse texto.
        outAtencao.textContent = "Atenção... Números estão em ordem crescente";
    } else {
        //Se não, mostra esse outro texto.
        outAtencao.textContent = "Atenção... Números não estão em ordem crescente";
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btOrdem = document.getElementById("btOrdem");
btOrdem.addEventListener("click", crescenteDecrescente);
