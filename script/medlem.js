var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = (yyyy-13)+'-'+mm+'-'+dd; // max er i dag for 13 år siden! (man må være 13 for å bli medlem)
document.getElementById("datefield").setAttribute("max", today);



//Funksjonen skriver ut at registreringen er mottatt (Funker ikke >:( ))
function sendinn() {
    sendinnBtn = document.getElementById("submit")
    outputTxt = "Innsendingen er mottatt. Du vil få bekreftelse på e-post snart."
    //document.getElementById("outputSendinn").innerText = "Innsendingen er mottatt. Du vil få bekreftelse på e-post snart."
}
