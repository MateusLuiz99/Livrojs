// Suponha que o prazo para o pagamento de uma infração de
// trânsito com desconto seja de 90 dias. Elaborar um programa que
// leia a data de uma infração e o valor da multa. Informe qual a data
// limite do pagamento com desconto (até 90 dias) e o valor a ser pago
// até essa data (com 20% de desconto).

function calcularMulta(){
    //Referêmcias aos elementos da página.
    var dataStr = document.getElementById("inDate").value;
    var multa = parseFloat(document.getElementById("inMulta").value);
    var outData = document.getElementById("outData");
    var outValor = document.getElementById("outValor");
    //variável que separa a string dataStr em partes com o hífen.
    var partesData = dataStr.split("-");
    //objeto date que chama o construtor Date que separa em 
    //3 argumentos: partesData[0], partesData[1] - 1, partesData[2].
    var data = new Date(partesData[0], partesData[1] - 1, partesData[2]);
    //Varável que armazena o dia atual passado pelo usuário.
    var dia = data.getDate();
    //Variável que armazena 90 dias depois do dia da multa.
    var hoje = new Date();
    var dia_90 = new Date(data);
    dia_90.setDate(dia + 90);
    //Calculo do desconto.
    var desconto = multa * 0.8;

    //Validação dos dados.
    if(dataStr == "" || multa == 0 || isNaN(multa)){
        alert("Informe corretamente o valor da multa");
        inDate.focus();
        return;
    }

    //Comparação se a data atual é manor que a data limite do desconto.
    if (hoje <= dia_90){
        //Se for verdadeiro informa a data que expira o prazo de pagamento e o avlor com desconto.
        outData.textContent = "Data limite para Pagto com desconto: " + dia_90.toLocaleDateString();
        outValor.textContent = "Valor com desconto R$: " + desconto.toFixed(2);
    } else {        
        //Se não, exibe que o prazo expirou e mostra o valor sem o desconto.
        outData.textContent = "Data limite para Pagto com desconto expirou";
        outValor.textContent = "Valor com desconto R$: " + multa.toFixed(2);
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMulta);