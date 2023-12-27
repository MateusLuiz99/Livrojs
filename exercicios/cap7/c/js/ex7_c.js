// Elaborar um programa para uma veterinária, o qual leia o preço
// de uma vacina e se o cliente possui ou não convênio. Caso possua
// algum convênio, exibir uma caixa de seleção com os convênios
// “Amigo dos Animais” e “Saúde Animal”. O programa deve exibir o
// valor do desconto (10% sem convênio; 20% para “Amigo dos
// Animais”; 50% para “Saúde Animal”) e o valor a ser pago. Criar a
// função:

// • calcularDesconto() – que receba os parâmetros valor e taxa de
// desconto. Retornar o valor do desconto.

// A caixa de seleção não deve ser exibida no início do programa.

//Essa função apenas recebe os valores "valor" e "taxa" e retorna 
//a multiplicação dos dois valores.
function calcularDesconto(valor, taxa){
    return valor * taxa;
}

//Função que exibe as opções de convenho, utilizando o operador 
//térnario, uma forma simplificada do "if-else" que vai decidir 
//exibir ou ocultar o campo "select" se o "radio" estiver 
//selecionado como "sim".
function exibirConvenho(){
    var inServicos = document.getElementById("inServicos");
    var inConv = document.getElementById("inConv");

    inServicos.className = rbSim.checked ? "exibe" : "oculta";
    inConv.className = rbSim.checked ? "exibe" : "oculta";
}

//Evento de click na opção "sim" que chama a function exibirConvenho 
//que irá fazer conparação do operador térnario.
var rbSim = document.getElementById("rbSim");
rbSim.addEventListener("click", exibirConvenho);

//Evento de click na opção "não".
var rbNao = document.getElementById("rbNao");
rbNao.addEventListener("click", exibirConvenho);

function verificarTaxa(){
    //Referêmcias aos elementos da página.
    var inValor = document.getElementById("inValor");
    var outDesconto = document.getElementById("outDesconto");
    var outPagar = document.getElementById("outPagar");   

    //a variável recebe o valor da referência dos elementos, 
    //mas com conversão do tipo de dado.
    var valor = Number(inValor.value);

        //Validação dos dados.
        if (valor == 0 || isNaN(valor)){
        alert("Digite o valor da vacina, por favor");
        inValor.focus();
        return;
    }

    //Condicional, se "rbNao" for selecionada, 0.10 será 
    //atribuido a taxaDes, se não será atribuido 0.
    var taxaDes = rbNao.checked ? 0.10 : 0;

    //Condicional, se "rbSim" for selecionado.
    if (rbSim.checked){
        //Sem sim, a variável "conv" recebe direto o valor do 
        //select.
        var conv = document.getElementById("inServicos").value;
        //Em seguida, a "taxaDes" recebe a operação térnaria de 
        //se a opção de "saude" foi selecionada a "taxaDes" recebe 
        //"0.50", se não, recebe "0.20".
        taxaDes = conv == "saude" ? 0.50 : 0.20;
    }
    //A variável "dec" recebe a chamada da função com as passagens 
    //de parâmetro "calcularDesconto(valor, taxaDes)".
    var desc = calcularDesconto(valor, taxaDes);
    //A variável "totalPag", recebe o valor passado pelo usuário 
    //menos o de desconto "desc".
    var totalPag = valor - desc;

    //Os valores das respostas são passadas para os elemetos do HTML.
    outDesconto.textContent = "Desconto R$: " + desc.toFixed(2);
    outPagar.textContent = "A pagar R$: " + totalPag.toFixed(2);
}

//Cria referência ao botão e após associa function ao evento click.
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", verificarTaxa);
