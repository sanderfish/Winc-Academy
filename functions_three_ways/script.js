// function declaration

function squaredNumbers1(number1, number2) {
    const squareNumber1 = number1 * number1;
    const squareNumber2 = number2 * number2;
    const sumNumbers = squareNumber1 + squareNumber2;
    const sum = sumNumbers * sumNumbers;
    return sum;
}
 
console.log(squaredNumbers1(2,3));
// expected output: 169


// function expression - normal

const squaredNumbers2 = function(number1, number2) {
    const squareNumber1 = number1 * number1;
    const squareNumber2 = number2 * number2;
    const sumNumbers = squareNumber1 + squareNumber2;
    const sum = sumNumbers * sumNumbers;
    return sum;
}
 
console.log(squaredNumbers2(2,3));
// expected output: 169


// function expression - arrow

const squaredNumbers3 = (number1, number2) => {
    const squareNumber1 = number1 * number1;
    const squareNumber2 = number2 * number2;
    const sumNumbers = squareNumber1 + squareNumber2;
    const sum = sumNumbers * sumNumbers;
    return sum;
}
 
console.log(squaredNumbers3(2, 3));

// expected output: 169

// alternatief loggen:
// const result = (squaredNumbers3(2, 3));
//console.log(result);
