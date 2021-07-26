/* test data
const age = 18;
const firstName = 'Bram';
const totalAmount = 31;
*/

const age = 31;
const firstName = 'Puck';
const totalAmount = 51;

/* test data v2
const age = 20;
const firstName = 'Sarah';
const totalAmount = 15; 
*/

if (age >= 18 && age < 25) {
    console.log("Je krijg 50% korting!");
}
else {
    console.log("Helaas, geen korting voor jou.");
}

if (firstName === 'Bram' || firstName === 'Sarah') {
    console.log("De kroeg bestaat 50 jaar! Je heet Bram of Sarah. Gratis biertje voor jou vandaag.");
} 
else {
    console.log("Jammer voor jou, geen Bram of Sarah.");
}

if (totalAmount > 100) {
    console.log("Flesje champagne!");
}
else if (totalAmount > 50) {
    console.log("Gratis portie nachos!");
}
else if (totalAmount > 25) {
    console.log("Gratis bitterballen voor jou!");
}
else {
    console.log("Helaas, niets voor jou.");
}
