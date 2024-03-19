// Cerința 2
let produse = {
    "produs1": 25.99,
    "produs2": 10.49,
    "produs3": 5.99,
    "produs4": 50.00
};

// Afișează cheile și valorile din șir prin tipărirea directă
let rezultatCheiValori = "<p>Chei și Valorile din șir:<br>";
for (let key in produse) {
    rezultatCheiValori += key + ": " + produse[key] + "<br>";
}
rezultatCheiValori += "</p>";
document.getElementById("rezultate").innerHTML += rezultatCheiValori;

// Afișează valorile din șir prin iterarea cheilor
let rezultatValorile = "<p>Valorile din șir prin iterarea cheilor:<br>";
Object.keys(produse).forEach(key => {
    rezultatValorile += produse[key] + "<br>";
});
rezultatValorile += "</p>";
document.getElementById("rezultate").innerHTML += rezultatValorile;

// Ordonează produsele după preț și afișează rezultatul
let produseOrdonate = Object.fromEntries(Object.entries(produse).sort(([,a],[,b]) => a-b));
let rezultatOrdonare = "<p>Produse ordonate după preț:<br>" + JSON.stringify(produseOrdonate) + "</p>";
document.getElementById("rezultate").innerHTML += rezultatOrdonare;
