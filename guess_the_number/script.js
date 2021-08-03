// eerste bericht - vragen om naam - gebruikersnaam invoeren en op enter drukken > prompt

const userName = prompt(`Welkom bij Guess The Number! Wat is je naam?`)

while (userName === undefined || userName === null || userName.length === 0) {
}

// een bericht terug zien: "Hey [naam]" > alert
alert(`Hoi ${userName}, leuk dat je meedoet! Ga snel verder...`)

// nieuwe input vragen met een cijfer: "Voer een nummer in van 0 tot 25 om te beginnen met raden..." > prompt

// gebruiker krijgt een reële kans om te winnen, door een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random() > functie
// gebruiker kan een nummer invoeren en op enter klikken > prompt

let guessNumber = prompt(`Voer een getal in tussen de 0 en 25...`)

alert(`Je kiest voor ${guessNumber}`);
alert(`Even checken... Klopt dit...?`);

// functie random getal bepalen
let getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // maximum is exclusief, minimum is inclusief
};

console.log(getRandomNumber(1, 25));

while (guessNumber === getRandomNumber) {
      
    if (guessNumber !== getRandomNumber) {
        alert(`Helaas! Dat was 'm niet!`);
        let guessNumber = prompt(`Opnieuw raden? Kies een getal tussen de 1 en 25...`); // herhaling zelfde let 'guessNumber', kan dat?
    }
    
    else if (guessNumber == getRandomNumber) {
        alert(`Goed geraden! Het was inderdaad ${getRandomNumber}`);
    }
}

    alert(`Bedankt voor het meespelen ${userName}, tot de volgende keer!`);