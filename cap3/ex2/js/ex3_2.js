function exibirSituacao(){
    var inNome = document.getElementById("inNome");
    var inNota_1 = document.getElementById("inNota_1");
    var inNota_2 = document.getElementById("inNota_2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao")

    var nome = inNome.value;
    var pNota = Number(inNota_1.value);
    var sNota = Number(inNota_2.value);
    
    var media = (pNota + sNota) / 2;
    // var situacao = outSituacao.textContent;
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    if (media >= 7){
        outSituacao.textContent = "Parabéns " + nome+"! Você foi aprovado(a)";
        outSituacao.style.color = "blue"
    }else{
        outSituacao.textContent = "Lamento " + nome+"! Você foi reprovado(a)";
        outSituacao.style.color = "red"
    }
}
var btMedia = document.getElementById("btMedia");
btMedia.addEventListener("click", exibirSituacao);