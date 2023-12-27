function calcularFuso(){
    var inHoraBr = document.getElementById("inHoraBr");
    var outHoraFr = document.getElementById("outHoraFr");

    var horaBr = Number(inHoraBr.value);

    if (inHoraBr.value == "" || isNaN(horaBr)){
        alert("Informe a hora no Brasil corretamente");
        inHoraBr.focus();
        return;
    }

    var horaFr = horaBr + 5;

    if(horaFr > 24){
        horaFr = horaFr - 24;
    }
    outHoraFr.textContent = "Hora na França: " + horaFr.toFixed(2);
}
var btHoraFr = document.getElementById("btHoraFr");
btHoraFr.addEventListener("click", calcularFuso);