// Elaborar um programa para uma lan house de um aeroporto – O
// programa deve ler o valor de cada 15 minutos de uso de um
// computador e o tempo de uso por um cliente em minutos. Informe
// o valor a ser pago pelo cliente, sabendo que as frações extras de
// 15 minutos devem ser cobradas de forma integral.

function lanAeroporto(){
    //Referêmcias aos elementos da página.
    var inMinVal = document.getElementById("inMinVal");
    var inTempo = document.getElementById("inTempo");

    //Conversão dos tipos de dados.
    var valorMinuto = Number(inMinVal.value);
    var tempo = Number(inTempo.value);

    var novovalor;

    //Condição que compara se o tempo adicionado pelo usuário é 
    //divisivel por 15.
    if (tempo % 15 == 0){
        //Se sim, o "novovalor" recebe o tempo dividido por 15 
        //multiplicado pelo "valorMinuto".
        novovalor = (tempo / 15) * valorMinuto;
    } else {
        //Se não, o "novovalor" irá receber o valor inteiro da 
        //divisão sem o valor depor da "," + 1 multiplicado pelo 
        //"valorMinuto".
        novovalor = (Math.floor(tempo / 15) + 1) * valorMinuto;
    }

    //O valor da resposta é passadas para os elemetos do HTML.
    document.getElementById("outValor").innerHTML = "Valor a pagar RS: " + novovalor.toFixed(2);
}

//Cria referência ao botão e após associa function ao evento click.
var btPagar = document.getElementById("btPagar");
btPagar.addEventListener("click", lanAeroporto);