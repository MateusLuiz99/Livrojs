// Elaborar um programa que leia a velocidade permitida em uma
// estrada e a velocidade de um condutor. Se a velocidade for inferior
// ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até
// 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade
// for superior a 20% da velocidade permitida, exiba “Multa Grave”.

function verificaVelocidade(){
    //Referêmcias aos elementos da página.
    var inVelocidade = document.getElementById("inVelocidade");
    var inVelCond = document.getElementById("inVelCond");

    //Conversão dos tipos de dados.
    var velocidade = Number(inVelocidade.value);
    var condutor = Number(inVelCond.value);

    //Condição que compara os valores passados pelo o usuário.
    if (condutor <= velocidade){        
        //Se sim, mostra esse resultado.
        document.getElementById("outSituacao").innerHTML = "Situação: Sem multa";
    } else if (condutor <= velocidade + (velocidade * 0.20)){
        //Se não, mostra esse resultado.
        document.getElementById("outSituacao").innerHTML = "Situação: Multa leve";
    } else if (condutor > velocidade + (velocidade * 0.20)){
        //Se não for nenhum dos 2 anteriores, mostra esse resultado.
        document.getElementById("outSituacao").innerHTML = "Situação: Multa grave";
    }else{        
        //Se não for nenhum dos anteriores, mostra esse resultado.
        document.getElementById("outSituacao").innerHTML = "Digite um valor válido";
    }
}

//Cria referência ao botão e após associa function ao evento click.
var btVelocidade = document.getElementById("btVelocidade");
btVelocidade.addEventListener("click", verificaVelocidade);