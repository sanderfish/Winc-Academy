
/*
// checking if a number is big

const checkNumber = function(numberA) {
    const sum = numberA;
    if (sum > 100) {
        return true;
    }
    else if (sum <= 100) {
        return false;
    }
}

const result = checkNumber(5);
console.log(result);
*/

/*
// bouncer at a club

const enterTheClub = function(maxNumber, currentNumber, age) {
    
    if (age < 18) {
        return "this is a club for adults"
    }
    else if (currentNumber >= maxNumber) {
        return "It's too busy now, come back later";
    }
    else (currentNumber < maxNumber) {
        return "come in";
    }
}

*/

/* test 
const result = enterTheClub(100, 51, 24);
console.log(result);

const result = enterTheClub(100, 101, 24);
console.log(result);

const result = enterTheClub(100, 90, 16);
console.log(result); 
*/

// calculating the average of 5 numbers

const calculateAverage = function(number1, number2, number3, number4, number5) {
    const average = (number1 + number2 + number3 + number4 + number5) / 5;
    return average;
}
 
// const result = calculateAverage(10, 5, 15, 10, 10);
// console.log(result);

const result = calculateAverage(9, 70, 15, 80, 7);
console.log(Math.round(result));
// expected output: 36