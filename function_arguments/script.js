
/* // functie: koffie zetten
const makeBread = function(){
    console.log("Smeer een boterham.");
}

// functie oproepen
makeBread();


// functie met single argument
const makeBread = function(item){
    console.log("Smeer een boterham met " + item);
}

const peanutbutter = "pindakaas";
const jam = "jam";

makeBread(peanutbutter);
makeBread(jam);

// functie oproepen zonder argument
makeBread();
*/

// functie met multiple arguments
const makeBread = function(itemA, itemB){
    console.log("Smeer een " + itemA + " boterham met " + itemB);
}

const peanutbutter = "pindakaas";
const jam = "jam";
const white = "witte";
const brown = "bruine";

makeBread(white, peanutbutter);
makeBread(brown, jam);

/* 
// items omgedraaid
makeBread(peanutbutter, white);
makeBread(jam, brown);
*/