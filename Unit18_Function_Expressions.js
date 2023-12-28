/*
    UNIT 18: Function Expressions 

    In JavaScript, functions can be created 
    using two main approaches: 
    function declarations and function expressions.
*/
// EXAMPLES:

// Function Declaration example:
function myFunction(a, b) {
    let c = a + b;
    return c;
}
console.log(myFunction(10, 10)); // Output: 20

// Function Expression that stored in Variable example:
const myNewFunction = function(a, b) {
    let c = a + b;
    return c;
};

let sum = myNewFunction(5, 3);
console.log(sum); // Output: 8

// There is another way we can use Funcion Expressin as a callback function
setTimeout(function(){
    console.log('Hello World');
}, 2000)





