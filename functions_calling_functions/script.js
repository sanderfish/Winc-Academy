/*
// hey kiddo

const checkAge = function (number) {
    if (number >= 18) {
        return true;
    }
    else {
        return false;
    }
};

 test data voor checkAge
const result = checkAge(21);
console.log(result);


const checkAdult = function (number) {
    const adult = checkAge(number);
    if (adult == true) {
    return "Hello there";
    }
else if (adult == false) {
        return "Hey kiddo";
    }
};

console.log(checkAdult(15));
console.log(checkAdult(31));

*/

// VAT calculations - 1

/*
const getPrice = function (price, VAT) {
    const sum = number * ((VAT/100) + 1);
    return sum;
};

// test data voor getPrice
// const result = getPrice(100, 1.21);
// console.log(result);
// expected output: 121

const getTotalPrice = function (price, VAT) {
    const TotalPrice = getPrice(price, VAT);
    return TotalPrice;
};

console.log(getTotalPrice(1000, 21));
console.log(getTotalPrice(2, 9));

*/

// VAT calculations - 2

// The main function you make should take the amount including VAT and the VAT percentage. 
// The return value should be an array with two elements: base price and VAT amount.
// Again: make sure you use two functions, where the main one calls another function to do part of the calculation.


const basePrice = function (price, VAT) {
    const base = price / ((VAT / 100) + 1)
    const amount = price - (price / ((VAT / 100) + 1));
    console.log(base, amount);
    return;
};

// test data voor basePrice
// console.log(basePrice(242, 21));
// expected output: 200, 42


const getBasePrice = function (price, VAT) {
    const result = basePrice(price, VAT);
    return result;
};

console.log(getBasePrice(242, 21));
console.log(getBasePrice(109, 9));
// expected output: 200, 42
// expected output: 100, 9