// Você deve desenvolver um programa de criptografia para
// transmitir mensagens entre amigos. O programa deve ler uma
// mensagem e, em seguida, exibi-la criptografada. A criptografia
// consiste em: a) exibir todas as letras das posições pares da
// mensagem; b) exibir todas as letras das posições ímpares da
// mensagem. A Figura 6.15 exibe a mensagem criptografada. O
// programa deve conter ainda um botão para decriptografar a
// mensagem, ou seja, retornar a mensagem original a partir do texto
// cifrado.

function criptografia(){
    //Referêmcias aos elementos da página.
    var inMensagem = document.getElementById("inMensagem");
    var outMensagem = document.getElementById("outMensagem");
    // a variável recebe o valor da referência dos elementos.
    var mensagem = inMensagem.value;

    //Validação dos dados.
    if (mensagem == ""){
        alert("Informe uma mensagem");
        inMensagem.focus();
        return;
    }

    //Essa variável recebe o tamanho da quantidade de strings na frase.
    var tam = mensagem.length;

    var letraPar = "";
    var letraImpar = "";

    //Laço que percorre todas as mensagem.
    for (var i = 0; i < tam; i++){
        //Condição se a posição da letra é divisivel por 0.
        if (i % 2 == 0){
            //Se sim, adiciona a letra na variável letraPar;
            letraPar += mensagem[i];
        } else {
            //Se não, adiciona a letra na variável letraImpar;
            letraImpar += mensagem[i];
        }
    }
    
    //O valor da resposta é passada para o elemeto do HTML.
    outMensagem.textContent = letraPar + letraImpar;
}

//Cria referência ao botão e após associa function ao evento click.
var btCripto = document.getElementById("btCripto");
btCripto.addEventListener("click", criptografia);

function descriptografar(){
    var mensagemCripto = document.getElementById("outMensagem").textContent;
    var descripto = '';
    var metade = Math.floor((mensagemCripto.length - 1) / 2);

    for (var i = 0; i <= metade; i++){
        descripto += mensagemCripto[i];
        if (i + metade < mensagemCripto.length - 1){
            descripto += mensagemCripto[i + metade + 1];
        }
    }
    
    document.getElementById("outMensagem").textContent = descripto;
}

//Cria referência ao botão e após associa function ao evento click.
var btDescripto = document.getElementById("btDescripto");
btDescripto.addEventListener("click", descriptografar);