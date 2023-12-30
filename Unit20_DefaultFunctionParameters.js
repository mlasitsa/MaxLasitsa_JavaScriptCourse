/*
    UNIT 20: DEFAULT FUNCTION PARAMETERS 

    In JavaScript, the ability to set default values for 
    function parameters was introduced with ECMAScript 6 (ES6). 
    Before this feature, if a function was called with fewer arguments 
    than parameters, the missing parameters 
    would be assigned the value undefined. 
    With default parameter values, you can specify a 
    default value that will be used if the corresponding 
    argument is not provided.

*/

// FOR EXAMPLE:

// The multiply function takes two parameters: value and multiplyBy.
// If multiplyBy is not provided, it defaults to 1.
function multiply(value, multiplyBy = 1) {
    // The result is calculated by multiplying value with multiplyBy.
    return value * multiplyBy;
}

// Example usage with two arguments provided.
console.log(multiply(10, 2)); // Output: 20 

// Example usage with only one argument provided.
// Since multiplyBy is not provided, it defaults to 1.
console.log(multiply(10)); // Output: 10


// SAME EXAMPLE IN ARROW FUNCTION SYNTAX
const sum = (num1,num2 = 1) => num1 + num2;
console.log(sum(2,5));
console.log(sum(5));




// MORE COMPLEX WAY OF DEFAULT FUNCTION PARAMETERS:
// The newPost function takes two parameters: post and addedAt.
// If addedAt is not provided, it defaults to the current date and time using Date().
const newPost = (post, addedAt = Date()) => {
    return {
        // The spread operator (...) is used to create a new object with the properties of the existing 'post' object.
        ...post,
        // The 'addedAt' property is assigned the value of the provided 'addedAt' parameter or the default Date().
        addedAt: addedAt,
    };
};

// An example 'post' object representing the first post with an 'id' and 'author'.
const firstPost = {
    id: 1,
    author: 'Alex',
};

// Calling the newPost function with only one argument (post), 
// so the 'addedAt' parameter defaults to the current date and time.
const updatedPost = newPost(firstPost);

// Output the updated post object, including the original properties and the added 'addedAt' property.
console.log(updatedPost);

