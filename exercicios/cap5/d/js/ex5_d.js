// Elaborar um programa que leia as últimas notícias da sua região
// e armazene-as em um vetor. Exibir na página, a cada inclusão,
// somente a quantidade de notícias cadastradas. O programa deve
// conter um botão que solicite o número de notícias que o usuário
// deseja visualizar e, então, liste as notícias em ordem inversa da
// inclusão. Ou seja, apenas as notícias mais recentes devem ser
// listadas, de acordo com o número informado pelo usuário. Validar
// esse número para que seja inferior ou igual à quantidade de notícias
// cadastradas.

var listaNoticia = [];

function adicionarNoticias(){
    //Referêmcias aos elementos da página.
    var inNoticias = document.getElementById("inNoticias");
    var outNoticias = document.getElementById("outNoticias");
    // a variável recebe o valor da referência dos elementos.
    var noticias = inNoticias.value;

    //Validação dos dados.
    if(inNoticias == ""){
        alert("Ainda não foi adicionado nenhuma notícia");
        inNoticias.focus();
        return;
    }

    //Adição das notícias no array.
    listaNoticia.push(noticias);

    //Laço que percorre todo o array
    for(var i = 0; i < listaNoticia.length; i++){
        //Exibe os valores do array.
        outNoticias.textContent = "Notícias Cadastradas: " + (i + 1);
    }

    //Limpa o campo de adição de dados e coloca o foco no campo 
    //de inNoticia.
    inNoticias.value = "";
    inNoticias.focus();
}

//Cria referência ao botão e após associa function ao evento click.
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionarNoticias);

function exibirNoticias(){
    //Variável que recebe o valor recebido no prompt.
    var numNot = Number(prompt
        ("Quantas notícias mais recentes adicionadas você quer ver?"));

    //variável que irá receber as respostas.
    var lista = "";
    //Variável que recebe o tamanho do array.
    var totalNot = listaNoticia.length;
    
    //Adição dos valores em "lista",mostrando a quantidade de notícias que serão 
    //exibidas, mais uma linha de separação.
    lista += numNot + " Últimas Notícias\n";
    lista += "-------------------------------------------------------------------------\n";

    //Laço que percorre as notícias, mas até a quantidade definida pelo usuário.
    for(var i = 0; i < numNot; i++){
        //Adiciona as útimas notícias que irão ser mostradas. Em "listaNoticia[totalNot - 1 - i]" 
        //é feito o calculo dos índices dos valores que irão ser mostrados, ex: [10 - 1 - 0] = 9, 
        //[10 - 1 - 1] = 8, assim sucessivamente, como os índices vão de 0 a 9, neste exemplo, ele 
        //irá mostrar os últimos valores enquanto o "for" for verdadeiro.
        lista += totalNot - i + "º) " + listaNoticia[totalNot - 1 - i] + "\n\n";
    }

    //O valor da resposta é passada para o elemeto do HTML.
    outÚltimasNoricias.textContent = lista;
}

//Cria referência ao botão e após associa function ao evento click.
var listaNoticias = document.getElementById("listaNoticias");
listaNoticias.addEventListener("click", exibirNoticias);
