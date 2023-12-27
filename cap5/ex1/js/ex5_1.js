var pacientes = [];

function addPacientes(){
    var inPaciente = document.getElementById("inPaciente");
    var outAtendimento = document.getElementById("outAtendimento");

    var nome = inPaciente.value;

    if (nome == ""){
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);

    var lista = "";

    for(i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "<br>";
    }

    outAtendimento.innerHTML = lista;

    inPaciente.value = "";
    inPaciente.focus();
}
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", addPacientes);

function atenderPaciente(){
    var inPaciente = document.getElementById("inPaciente")
    
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }

    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    var atender = pacientes.shift();

    outAtendimento.textContent = atender;
    var lista = "";

    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". " + pacientes[i] + "<br>";
    }
    outLista.innerHTMLLucas = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);

