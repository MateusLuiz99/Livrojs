function mostrarOla(){
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
}
var btMostrar = document.getElementById("btMostrar")
btMostrar.onclick = mostrarOla