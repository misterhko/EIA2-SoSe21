let subjekt: string[] = ["Fischers Fritz", "Son Goku", "PewDiePie", "Merkel", "Eminem"];
let verb: string[] = ["hasst", "schnupft", "bezirzt", "erfindet", "disst"];
let objekt: string[] = ["Zungenbrecher", "feinstes Maggi", "Schneemänner", "Weltfrieden", "Apfelbauern"];

let gedichtsubjekte: string[] = [];
let gedichtverben: string[] = [];
let gedichtobjekte: string[] = [];

function gedichtschreiben(): void {

    let zufallszahl: number;
    let index: number;
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


    let gedicht: string;
    for (let zaehler: number = 0; zaehler < 5; zaehler++) {
        gedicht = gedichtsubjekte[zaehler] + " " + gedichtverben[zaehler] + " " + gedichtobjekte[zaehler];
        console.log(gedicht);
        }
    }

gedichtschreiben();