// while loop 
const colors = ["yellow", "blue", "red", "orange"];
let numberColors = 0;
while (numberColors < colors.length) {
    console.log(colors[numberColors]);
    numberColors++;
}

// for loop
const colors2 = ["yellow", "blue", "red", "orange"];
for (numberColors = 0; numberColors < colors2.length; numberColors++) {
    console.log(colors2[numberColors]);
}

// forEach
const colors3 = ["yellow", "blue", "red", "orange"];
colors3.forEach(string => console.log(string));


/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
>For: 4
>While: 6

Hoeveel regels neemt mijn forEach method in beslag?
>2

Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
>Bij forEach worden gewoon alle elementen genoemd, zonder daarvoor eerst een formule op los te laten.

Kun je een array method gebruiken op een object? Het antwoord is nee.
>Nee, dat is geen lijst met dezelfde elementen.

Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: 
Looping through the properties of an object.
>for...in statement

Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
*/

// for...in

let person1 = {
    firstName: 'Puck',
    lastName: 'Visser',
    age: 31,
    length: '168 cm',
    weight: '60 kg'
};

for (const property in person1) {
    console.log(`${property}: ${person1[property]}`);
  }
