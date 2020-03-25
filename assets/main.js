//Controllo di aver settato correttamente Java

console.log("java is done");

//Ottenere Nome Utente

var nome = prompt("Come ti chiami?");
console.log(nome);

// Ottenere Cognome

var cognome = prompt("Qual'è il tuo cognome?");
console.log(cognome);

//Ottenere colore

var colore = prompt("Qual'è il tuo colore preferito?");
console.log(colore);

//stampare output
document.getElementById("test").innerHTML = nome + cognome + colore + 20;
