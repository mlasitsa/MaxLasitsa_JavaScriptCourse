/*
    UNIT 14: GLOBAL AND LOCAL VARIABLES
    In JavaScript, the scope of a variable determines where it can be accessed in the code.
    Global variables are accessible from anywhere in your code, whereas local variables 
    are only accessible within the function or block where they are defined.
*/

// Global variables:
let a; // This is a global variable. It can be accessed and modified anywhere in the code.
let b; // Another global variable.

function print() {
    // Local variable:
    let b; // This 'b' is a local variable inside the 'print' function. It's different from the global 'b'.

    // Modifying global variable:
    a = true; // Here, the global variable 'a' is modified within the function.

    // Modifying local variable:
    b = 10; // This modifies the local 'b', not the global one.

    // When 'b' is printed here, it refers to the local 'b'.
    console.log(b); // Output: 10
}

print(); // Calls the function 'print'.

// When accessing 'a' outside the function, it shows the modified value.
console.log(a); // Output: true (global 'a' modified in the function)

// The global 'b' remains unchanged as the function modified a local 'b'.
console.log(b); // Output: undefined (since global 'b' was never assigned a value)

/*
    Explanation:
    - Inside the function 'print', a local variable 'b' is declared and modified.
    - The global 'a' is accessed and modified inside the function, which reflects globally.
    - The global 'b' remains unchanged, as the function's 'b' is a separate, local variable.
    - This demonstrates how global and local variables can have the same name 
      but are treated as separate entities in their respective scopes.
*/



// Another example:

// Global variable:
const c = 5; // This is a global variable, accessible anywhere in your code.

function myFn() {
    // innerFn is a nested function within myFn

    function innerFn() {
        // innerFn accesses the global variable 'c'.
        // This is an example of lexical scoping, where an inner function 
        // has access to the variables of its outer functions.
        console.log(c); // It logs the value of 'c'.
    }

    // Call innerFn from within myFn
    innerFn(); // The inner function has access to 'c', even though 'c' isn't defined inside innerFn.
} 

// Call myFn, which in turn calls innerFn
myFn(); // This call results in logging the value of 'c' (5) to the console.

/*
    Explanation:
    - The variable 'c' is declared in the global scope.
    - The function 'myFn' contains another function 'innerFn'.
    - 'innerFn' accesses 'c', which is not declared within 'innerFn' or 'myFn'.
    - Due to JavaScript's lexical scoping, 'innerFn' can access 'c' because 
      'c' is part of the outer (global) scope in which 'innerFn' is contained.
    - This demonstrates how JavaScript functions can access variables 
      from their surrounding lexical environment.
*/


// To conclude, there are several types of scopes:

/* 1. Global Scope:
    A variable declared outside any function or block is said to be in the global scope.
    Global scope variables are accessible from any part of the program.
    Example:
*/

let globalVar = "I am a global variable";

function exampleFunction() {
    console.log(globalVar); // Accessible here
}


/*
    2. Local (or Function) Scope:
    Variables declared within a function are in the local scope of that function.
    They are accessible only within that function and not outside of it.
    Each function has its own scope.
    Example:
*/
function exampleFunction() {
    let localVar = "I am local to exampleFunction";
}
console.log(localVar); // This will result in an error, as localVar is not accessible outside exampleFunction.


/* 
    Additionally, with the introduction of ES6 (ECMAScript 2015), 
    JavaScript introduced let and const, which provide block-level scope:

    Block Scope:
    Variables declared inside a block {} using let or const are limited to the block's scope.
    They can't be accessed outside of that block.
    Example:
*/

if (true) {
    let blockVar = "I am inside a block";
}
console.log(blockVar); // Error: blockVar is not defined outside the block


// Also you can accces JavaScript feature called 'use strict'
// However, dont rely on this feature.