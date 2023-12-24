/* 
UNIT 3 TYPES: PRIMITIVE AND REFERENCE
Primitive Types:
    String - 'ABC'
    Boolean - true/false 
    Number - integers, floats, etc.
    null - represents a deliberate absence of any object value
    undefined - indicates that a variable has not been assigned a value
    Symbol - unique and immutable primitive, often used to identify object properties

Reference Types:
    Object - includes objects, arrays, functions, and more
*/

// Primitive Type examples
// In memory, primitive types store the actual values.
let word = 'Hello World'; // String
let number; // Undefined by default, as it's not initialized
let isAtHome = true; // Boolean
let newNum = 25.5; // Number (includes integers and floats)

// Reference type example: 
// Reference types store a reference to the memory location of the object.
// Functions and arrays are also objects in JavaScript.
let Person = function(name, age, isAdult) {
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
}

let richard = new Person('Richard', 30, true);
console.log(richard); // Displays the 'richard' object with its properties


// Example demonstrating how objects in JavaScript are reference types
// Even though 'object' is declared with 'const', its properties can still be changed.
// This is because 'object' is a reference to an object in memory, not the actual object itself.
// When we create 'cope' and assign it the value of 'object', both variables refer to the same object in memory.
// Therefore, modifying 'cope' will also reflect changes in 'object', as they are both references to the same object.
const object = {
    a: 10, 
    b: true
}

const cope = object;
cope.a = 20; // Modifying 'cope' also modifies 'object'

console.log(object.a); // Outputs: 20