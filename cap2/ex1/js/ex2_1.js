function mostrarOla(){
    //Obtém conteúdo do campo (com id=) nome
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
}
var mostrar = document.getElementById("btMostrar");
mostrar.addEventListener('click', mostrarOla);