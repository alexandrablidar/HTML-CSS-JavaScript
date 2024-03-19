// Cerința 1
let numere = [8, 3, 5, 1, 7, 2, 4, 6];
//let- declarare variabile locale

// Ordonarea crescătoare și afișarea rezultatului
let numereOrdonateCrescator = numere.slice().sort((a, b) => a - b); 
//slice()-creeaza o copie a sirului, pt a nu pierde sirul initial, sort()-ordoneaza
document.getElementById("rezultate").innerHTML += "<p>Ordonare crescătoare: " + numereOrdonateCrescator + "</p>";

// Ordonarea descrescătoare și afișarea rezultatului
let numereOrdonateDescrescator = numere.slice().sort((a, b) => b - a);
document.getElementById("rezultate").innerHTML += "<p>Ordonare descrescătoare: " + numereOrdonateDescrescator + "</p>";

// Eliminarea valorilor pare și afișarea rezultatului
let numereImpare = numere.filter(numar => numar % 2 !== 0); 
//filter-creeaza un nou sir in care filtreaza
document.getElementById("rezultate").innerHTML += "<p>Valori impare: " + numereImpare + "</p>";

// Introducerea în șir a elementelor unui alt șir predefinit
let altSir = [10, 20, 30];
numere = numere.concat(altSir);
document.getElementById("rezultate").innerHTML += "<p>Șirul rezultat după adăugarea altui șir: " + numere + "</p>";
