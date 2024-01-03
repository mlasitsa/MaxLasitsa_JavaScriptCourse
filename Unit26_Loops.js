/*
    UNIT 26: LOOPS IN JavaScript
    In JavaScript, loops are used to repeatedly 
    execute a block of code until a certain condition is met.

    Types of loops:

    for: commonly used when you know the number of iterations you want to perform
    while: used when you want to execute a block of code as long as a specified condition is true
    do while: similar to the while loop, but it always executes the block of code at least once, even if the condition is initially false
    for...in: iterates over the properties of an object
    for...of: it iterates over iterable objects (arrays, strings, etc.)
*/

// Basic examples:


// For loop 
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// While loop
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

// Do While loop 
let l = 0;
do {
    console.log(l);
    l++;
} while (l < 5);

// For In loop 
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
} // where key is: a, b, c and obj[key] is: 1, 2, 3

// For Of loop
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}