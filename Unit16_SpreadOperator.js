/*
    UNIT 16: SPREAD OPERATOR (...)

    The spread operator (...) in JavaScript is used to expand an iterable (like an array) or an object's 
    enumerable properties into individual elements or properties. This operator makes it easy to combine 
    arrays or objects, or to pass array elements as individual arguments to functions.

    - For objects, it's commonly used to create a new object by copying properties from an existing object, 
      and then adding or overriding some properties.
*/

// Example: Using Spread Operator with Objects
const button = {
    width: 200,
    text: 'Buy'
};

// Create a new object 'redButton' by spreading the 'button' object
// and adding a new property 'color'.
const redButton = {
    ...button, // Copies all properties from 'button' into 'redButton' 
    color: 'red' // Adds a new property or overrides an existing one
};

console.table(redButton); // Displays the 'redButton' object with 'width', 'text', and 'color' properties

/*
    In this example, the spread operator copies all properties from 'button' into 'redButton'.
    Additionally, 'redButton' gets a new property 'color'. This illustrates how the spread operator 
    can be effectively used for object manipulation and combination, enabling an elegant syntax for 
    object extension or modification.
*/