/*
    UNIT 11: FUNCTIONS PART 1

    A function in JavaScript is a block of code designed to perform a specific task. 
    A function is executed when it is called (or invoked).
    Functions can be reused, reducing redundancy in your code.
    In JavaScript, functions are treated as objects, which means they can have properties and be passed around like any other object.
*/

// Example of redundant code:
let a = 10;
let b = 10;
let c = a + b;
console.log(c); // 20

a = 15;
b = 25;
c = a + b;
console.log(c); // 40

// Instead of repeating code, use a function:
function numSum(a, b) {
    const c = a + b;
    console.log(c);
}

// Now, use the function to perform the same task:
numSum(10, 15); // 25
numSum(1, 1);   // 2

/*
    This demonstrates how functions can simplify code and reduce repetition.
    Each time you call numSum with different arguments, it performs the addition and logs the result.
*/

// Functions can also return values:
function multiply(d, y) {
    let sum = d * y;
    return sum;
}

console.log(multiply(10, 2)); // 20

/*
    The variables 'd' and 'y' are parameters of the multiply function.
    They, along with any variables declared inside a function (like 'sum' here), 
    are local to the function and cannot be accessed outside of it.
    This is an example of function scope in JavaScript.
*/

/*
    Notice how using functions not only makes the code more concise and readable 
    but also encapsulates the logic, allowing for easier maintenance and less error-prone code.
*/

