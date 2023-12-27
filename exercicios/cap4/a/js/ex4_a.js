// Elaborar um programa que leia o nome de uma fruta e um
// número. O programa deve repetir a exibição do nome da fruta, de
// acordo com o número informado. Utilize o “*” para separar os
// nomes.

function repetirFruta(){
    //Referêmcias aos elementos da página.
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");

    //A variável recebe o valor da referência dos elementos.
    var fruta = inFruta.value;
    //Conversão do tipo de dado.
    var numero = Number(inNumero.value);
    var resultado = " ";

    //Laço que percorre os valores de "numero".
    for (var i = 0; i < numero; i++){
        //Condição se o índice não for o primeiro.
        if (i != 0){
            //Se sim, adiciona estrelas na variável.
            resultado += " * ";
        }
        //Dentro do "for", os nomes das frutas são adicionadas 
        //na variável "resultado".
        resultado += fruta;
    }
    
    //O valor da resposta é passada para o elemeto do HTML.
    document.getElementById('outVzs').textContent = resultado;
}

//Cria referência ao botão e após associa function ao evento click.
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);
