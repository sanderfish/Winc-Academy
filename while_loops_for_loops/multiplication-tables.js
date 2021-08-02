/* // table of 9
for (let i = 1; i <= 10; i++) {
    console.log(i + "x9 = " + (i * 9));
}

// output
// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc...

*/

// tables 1 until 10
for (let i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(i + " x " + j  + " = " + (i * j));
    }
}