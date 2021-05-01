namespace Aufgabe3 {

//Variablen definieren
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardArray: HTMLElement[] = [];
    let cardsOpen: number = 0;
    let cardsOpenArray: HTMLElement[] = [];
    let checkRest: HTMLElement[] = [];

//Spielstart
    window.addEventListener("load", startGame);

    function startGame(): void {
        let startMemory: HTMLElement = <HTMLElement>document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
   
//Karte initialisieren     
    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");

        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");

        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);

 //Responses
        card.style.width = size + "px";
        card.style.height = size + "px";

        if (backgroundColor) { 
            card.style.backgroundColor = backgroundColor.toString();
        }
        
        if (backsideColor) { 
            card.style.background = backsideColor.toString();
        }

        if (fontColor) { 
            card.style.color = fontColor.toString();
        }

        if (fontStyle) { 
            card.style.fontFamily = fontStyle.toString();
        }
    }

    function clickHandler(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            } else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    // Vergleich Karten
    function compareCards(): void {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        } else {
            for (let i: number = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }

    function checkWin(): void {
        if (checkRest.length == 0) {
            alert("Hey Champ, Gratulation! Noch ne Runde? Einfach F5 drücken!");
        }
    }

//Durstenfeld-Shuffle
    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

//Auswertung des Formulars im Main
    let formData: FormData;
    let size: number;
    let backgroundColor: FormDataEntryValue | null; 
    let backsideColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;

//Formular schließen bei Spielstart
    function main(_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
//Popup für Kartenpaare
        formData = new FormData(document.forms[0]);
        console.log(formData);
        size = Number(formData.get("Slider"));
        backgroundColor = formData.get("BGColor");
        backsideColor = formData.get("BSColor"); 
        fontColor = formData.get("FColor"); 
        fontStyle = formData.get("Radiogroup"); 

//Stepper einbringen
        let pairOfCards: FormDataEntryValue | null = formData.get("Stepper"); 
        if (pairOfCards) {
        numPairs = Number(pairOfCards);
        }
        else {
            numPairs = 5;
        }

//Erstelle Karten
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }

//Mixe Karten
        shuffleArray(cardArray);
        for (let i: number = 0; i < cardArray.length; i++) {
            let playerbox: HTMLDivElement = <HTMLDivElement>document.getElementById("playerbox");
            playerbox.appendChild(cardArray[i]);
        }
    }
}