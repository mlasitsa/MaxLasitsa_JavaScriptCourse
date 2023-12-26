/*
    UNIT 10 MUTATION in JavaScript

    Understanding mutation in JavaScript through Primitive and Reference types:
*/

// Example with Primitive Type:
const a = 10;
let b = a; // 'b' gets a copy of the value that 'a' holds.
b = 50; // Changing 'b' does not affect 'a'.
console.log(a); // Output: 10 (unchanged)
console.log(b); // Output: 50 (changed)

// Example with Reference Type:
const person = {
    name: 'Nick',
    age: 30
};
person.age = 22;
person.isAdult = true;
console.log(person); // Output: { name: 'Nick', age: 22, isAdult: true }

// Mutation with Shallow Copy:
const person2 = person; // person2 is not a new object, it's a reference to 'person'.
person2.age = 10;
console.log(person); // Output: { name: 'Nick', age: 10, isAdult: true }
// Changing person2 also changed 'person' because they refer to the same object.

// Deep Copy using JSON:
const user = {
    name: 'Bryce',
    age: 30
};
const JSONuser = JSON.stringify(user); // Convert 'user' to a JSON string
const newUser = JSON.parse(JSONuser); // Create a new object from the JSON string
newUser.name = 'Alec';
newUser.age = 25;
console.log(user); // Output: { name: 'Bryce', age: 30 } (unchanged)
console.log(newUser); // Output: { name: 'Alec', age: 25 } (new object)

/*
    JSON.stringify and JSON.parse create a deep copy of the object. 
    This means 'newUser' is a completely separate object from 'user', 
    so changes to 'newUser' do not affect 'user'.
    Note: This method works well for simple objects but may not handle 
    complex objects with methods, Date objects, etc., correctly.
*/


/// Using Object.assign() to create a shallow copy:
const student = {
    name: 'Mikita',
    age: 25
};
const student2 = Object.assign({}, student); // Creates a shallow copy of 'student'
student2.age = 30;
console.log(student); // Output: { name: 'Mikita', age: 25 } (unchanged)
console.log(student2); // Output: { name: 'Mikita', age: 30 } (new object)



// Using Spread Operator to create a shallow copy:
const student3 = {...student}; // Creates a shallow copy using spread operator
student3.name = 'Max';
console.log(student); // Output: { name: 'Mikita', age: 25 } (unchanged)
console.log(student3); // Output: { name: 'Max', age: 25 } (new object)



// Using Object.create() to create a new object with 'student' as a prototype:
const student4 = Object.create(student); // 'student4' has 'student' as its prototype
student4.name = 'Alex'; // Shadowing the 'name' property
student4.age = 18;
console.log(student); // Output: { name: 'Mikita', age: 25 } (unchanged)
console.log(student4); // Output: { name: 'Alex', age: 18 } ('name' is shadowed, 'age' is inherited)

/*
    Each of these methods serves different purposes in object copying and mutation.
    Object.assign() and the spread operator {...} create shallow copies,
    while Object.create() sets up a prototype relationship.
*/
