/*
    UNIT 19: ARROW FUNCTIONS 
    Arrow functions are a concise way to write functions in JavaScript. 
    They provide a more compact syntax compared to traditional function expressions. 

*/
// FOR EXAMPLE:

// Traditional function expression
const regFunction = function (a, b) {
    return a + b;
};

// Arrow function equivalent
const arrowFunction = (a, b) => a + b;

// Another example when we need to filter even numbers:

const numbers = [1, 2, 3, 4, 5];

// Traditional function to filter even numbers
const evens = numbers.filter(function (num) {
    return num % 2 === 0;
});

// Arrow function equivalent
const evensArrow = numbers.filter(num => num % 2 === 0);

console.log(`Traditional function answer: ${evens}`); // Output: 2,4
console.log(`Arrow function answer: ${evensArrow}`); // Output 2,4

// We can also use arrow function as a callback function 

// Regular function as a callback:
setTimeout(function () {
    console.log('Regular callback function');
}, 1000);

// Arrow function as a callback
setTimeout(() => {
    console.log('Arrow callback function');
}, 2000);



/*
    POPULAR SHORTCUT IN ARROW FUNCTIONS:

    Arrow functions without curly braces {} 
    can be used in a concise manner when 
    the function body consists of a single expression. 
    This is known as an IMPLICIT RETURN.
*/

// Regular function with explicit return
const regularFunction = function (a, b) {
    return a + b;
};

// Arrow function with implicit return
const arrowFunctionNoCurlyBraces = (a, b) => a + b; 

// Using the regular function
console.log(regularFunction(3, 4)); // Output: 7

// Using the arrow function
console.log(arrowFunctionNoCurlyBraces(3, 4)); // Output: 7



// PLEASE NOT THAT IF WE USE SINGLE EPRESSIONED ARROW FUNCTION WITH CURLY BRACES 
// WE MUST HAVE A RETURN STATEMENT 

const arrowFunctionWithCurlyBraces = (a,b) => {
    return a + b; // try to remove return and see what happens 
}
console.log(arrowFunctionWithCurlyBraces(10,5)); //Output: 15