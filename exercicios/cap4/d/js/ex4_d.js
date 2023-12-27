// Elaborar um programa que leia um número e exiba estrelas na
// página, em linhas diferentes. A cada nova linha, o número de
// estrelas deve ser incrementado. Observação: caso você informe um
// valor alto, as linhas podem ultrapassar o tamanho da imagem e se
// alinhar à margem esquerda da página. Para evitar que isso ocorra,
// crie uma nova classe no arquivo estilos.css, que defina uma
// flutuação à direita para essa imagem.

function fabricaEstrela(){
    //Referêmcias aos elementos da página.
    var inNum = document.getElementById("inNum").value;
    //Conversão do tipo de dado.
    inNum = Number(inNum);
    //Variável que irá receber as estrelas "*".
    var estrela = " ";

    //Laço que percorre a quantidade de estrelas que 
    //serão repetidas.
    for (var i = 1; i <= inNum; i++){
        //Adiciona as estrelas e usa a função "repeat(i)"
        //repedtindo pela quantidade de vezes adicionada 
        //pelo usuário.
        estrela += " * " .repeat(i) + "<br>";
        //O valor da resposta é passada para o elemeto do HTML.
        document.getElementById("outEstrela").innerHTML =  estrela;
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", fabricaEstrela);
