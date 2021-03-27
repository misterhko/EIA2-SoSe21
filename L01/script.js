var subjekt = ["Fischers Fritz", "Son Goku", "PewDiePie", "Merkel", "Eminem"];
var verb = ["hasst", "schnupft", "bezirzt", "erfindet", "disst"];
var objekt = ["Zungenbrecher", "feinstes Maggi", "Schneemänner", "Weltfrieden", "Apfelbauern"];
var gedichtsubjekte = [];
var gedichtverben = [];
var gedichtobjekte = [];
function gedichtschreiben() {
    var zufallszahl;
    var index;
    index = subjekt.length - 1;
    while (gedichtsubjekte.length < 5) {
        zufallszahl = Math.floor(Math.random() * index);
        gedichtsubjekte.push(subjekt[zufallszahl]);
        subjekt.splice(zufallszahl, 1);
        index = index - 1;
    }
    index = verb.length - 1;
    while (gedichtverben.length < 5) {
        zufallszahl = Math.floor(Math.random() * index);
        gedichtverben.push(verb[zufallszahl]);
        verb.splice(zufallszahl, 1);
        index = index - 1;
    }
    index = objekt.length - 1;
    while (gedichtobjekte.length < 5) {
        zufallszahl = Math.floor(Math.random() * index);
        gedichtobjekte.push(objekt[zufallszahl]);
        objekt.splice(zufallszahl, 1);
        index = index - 1;
    }
    var gedicht;
    for (var zaehler = 0; zaehler < 5; zaehler++) {
        gedicht = gedichtsubjekte[zaehler] + " " + gedichtverben[zaehler] + " " + gedichtobjekte[zaehler];
        console.log(gedicht);
    }
}
gedichtschreiben();
//# sourceMappingURL=script.js.map