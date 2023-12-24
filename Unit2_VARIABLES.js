/* 
UNIT 2 VARIABLES 
Variables are used to store data that can be accessed and modified during the execution of a program.
Naming conventions for variables:
    1. PascalCase - Often used for classes and constructor functions.
    2. camelCase - Standard for variable and function names.
    3. UPPER_CASE - Used for constant values that are global and unchanging, such as configuration values.

It's important to choose clear and descriptive names for variables.

Ways to declare variables:
    let - Allows reassignment; use for values that may change.
    const - Cannot be reassigned; must be initialized during declaration.
    var - Legacy way to declare variables; generally avoided in modern JavaScript due to scoping rules.
*/

// Example:  
let a = 15; 
let k; // Declared without initialization
// const p; // Uncommenting this line will cause an error because 'const' must be initialized
const c = 10;
a = 'hello'; // Reassigning 'a' to a string
k = 11;
// c = 15; // Uncommenting this will cause an error because 'const' values cannot be reassigned
console.log(a); // prints out 'hello'
console.log(c); // prints out 10
console.log(k); // prints out 11
