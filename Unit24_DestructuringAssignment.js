/*
    UNIT 24: DESTRUCTURING ASSIGNMENT

    Destructuring assignment is a feature in JavaScript 
    that allows you to unpack values from arrays or properties 
    from objects into distinct variables. 
    It provides a more concise and readable syntax 
    for extracting values and assigning them to variables.

*/

// User object with properties
const user = {
    firstName: 'Max',
    commentsQty: 40,
    hasVerified: true,
}

// Destructuring assignment to extract 'firstName' and 'commentsQty' properties
const { firstName, commentsQty } = user;

// Destructuring assignment to extract 'hasVerified' property
const { hasVerified } = user;

// Output the extracted values
console.log(firstName);      // Output: 'Max'
console.log(commentsQty);    // Output: 40
console.log(hasVerified);    // Output: true




/* 
    If you have an array of user objects, you can 
    use array destructuring to extract values for multiple users as well:
    Array of user objects example: 
*/ 

const users = [
    { firstName: 'Max', commentsQty: 40, hasVerified: true },
    { firstName: 'Alice', commentsQty: 25, hasVerified: false },
    { firstName: 'Bob', commentsQty: 35, hasVerified: true },
  ];
  
  // Destructuring assignment to extract values for the first user
  const { firstName: firstName1, commentsQty: commentsQty1, hasVerified: hasVerified1 } = users[0];
  
  // Destructuring assignment to extract values for the second user
  const { firstName: firstName2, commentsQty: commentsQty2, hasVerified: hasVerified2 } = users[1];
  
  // Output the extracted values for the first user
  console.log(firstName1);      // Output: 'Max'
  console.log(commentsQty1);    // Output: 40
  console.log(hasVerified1);    // Output: true
  
  // Output the extracted values for the second user
  console.log(firstName2);      // Output: 'Alice'
  console.log(commentsQty2);    // Output: 25
  console.log(hasVerified2);    // Output: false





/*
    If you have multiple user objects and they are not stored in an array, 
    you can still use object destructuring to extract values for each user.
*/

  // User objects
const user1 = { firstName: 'Max', commentsQty: 40, hasVerified: true };
const user2 = { firstName: 'Alice', commentsQty: 25, hasVerified: false };
const user3 = { firstName: 'Bob', commentsQty: 35, hasVerified: true };

// Destructuring assignment to extract values for the first user
const { firstName: firstNameU1, commentsQty: commentsQtyU1, hasVerified: hasVerifiedU1 } = user1;

// Destructuring assignment to extract values for the second user
const { firstName: firstNameU2, commentsQty: commentsQtyU2, hasVerified: hasVerifiedU2 } = user2;

// Destructuring assignment to extract values for the third user
const { firstName: firstNameU3, commentsQty: commentsQtyU3, hasVerified: hasVerifiedU3 } = user3;

// Output the extracted values for the first user
console.log(firstNameU1);      // Output: 'Max'
console.log(commentsQtyU1);    // Output: 40
console.log(hasVerifiedU1);    // Output: true

// Output the extracted values for the second user
console.log(firstNameU2);      // Output: 'Alice'
console.log(commentsQtyU2);    // Output: 25
console.log(hasVerifiedU2);    // Output: false

// Output the extracted values for the third user
console.log(firstNameU3);      // Output: 'Bob'
console.log(commentsQtyU3);    // Output: 35
console.log(hasVerifiedU3);    // Output: true





/*
    Arrays also can  be destructured:
*/
const colors = ['red', 'green', 'blue'];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors; // Please notice that we destruct arrays, we use [] square brackets 

// Variables now hold the values
console.log(firstColor);  // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor);  // Output: 'blue'