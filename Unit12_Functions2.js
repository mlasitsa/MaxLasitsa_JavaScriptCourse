/*
    UNIT 12: FUNCTIONS PART 2 
    PASSING AN OBJECT TO A FUNCTION 

    In JavaScript, when you pass an object to a function, 
    you are passing a reference to that object. 
    This means that if the function modifies the object, 
    those modifications are made on the original object.
*/

// Example object:
const personOne = {
    name: 'Mick',
    age: 18
};

// Function to increase the age of a person:
function increaseAge(person) {
    person.age += 1; // This modifies the 'age' property of the passed object
    return person;   // Returns the modified object
}

// Calling the function with personOne:
increaseAge(personOne);

// The original personOne object is modified:
console.log(personOne.age); // Output: 19

/*
    Key Points:

    - When personOne is passed to the increaseAge function, 
      the function receives a reference to personOne, not a separate copy of it.

    - Any changes made to 'person' inside the function affect the original personOne object.

    - This behavior demonstrates the mutable nature of objects in JavaScript 
      and the concept of reference types.

*/

// Another way if you want to 
// keep your original OBJECT THE SAME 
// Define an object userOne
const userOne = {
    name: 'Alessio',
    age: 21
};

// Define a function moveUpAge that takes a user object as an argument
function moveUpAge(user) {
    // Create a shallow copy of the user object using Object.assign
    // Object.assign({}, user) takes an empty object {} and copies all properties of 'user' into it
    const updatedUser = Object.assign({}, user);
    
    // Increment the age of the copied user object
    updatedUser.age += 1;

    // Return the updated copy
    return updatedUser;
}

// Call moveUpAge with userOne, and store the result in updatedUserOne
const updatedUserOne = moveUpAge(userOne);

// Log the age of userOne and updatedUserOne
console.log(userOne.age);       // Output: 21 (original userOne is unchanged)
console.log(updatedUserOne.age); // Output: 22 (updatedUserOne is a modified copy)

/*
    Explanation:
    - The original object, userOne, remains unchanged after the function call because 
      moveUpAge operates on a copy of the object.
    - The function moveUpAge creates a new object (updatedUser) that is a shallow copy of the original.
    - Any modifications (like incrementing the age) are done on the copy, not the original object.
    - This approach is beneficial when you want to avoid modifying the original object, 
      adhering to the principle of immutability. 
    - It helps prevent unintended side effects, especially in larger, more complex applications.
*/