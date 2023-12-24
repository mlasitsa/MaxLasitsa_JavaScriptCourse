/*
    UNIT 7: OBJECTS PART 3
    Including attributes in objects and nested objects.
    Nested objects are common in JavaScript for structuring data hierarchically.

    Example with nested objects:
*/
const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

// Accessing nested object properties:
console.log(myCity.info.isPopular) // Output: true

// Deleting a property using the delete operator and square brackets:
delete myCity.info['isPopular'];
console.log(myCity); // Outputs the myCity object with the isPopular property removed

/*
    Creating object properties from existing variables:
    Traditional approach and ES6 shorthand syntax.
*/

// Traditional way:
const name = 'Alex';
const postsQty = 29;

const userProfile = {
    name: name,
    postsQty: postsQty, 
    hasSignedIn: false 
}

console.log(userProfile); // Outputs the userProfile object

// ES6 shorthand syntax:
const newName = 'Nick';
const newPostsQty = 36;

const newUserProfile = {
    newName,
    newPostsQty, 
    hasSignedIn: true 
}

console.log(newUserProfile); // Outputs the newUserProfile object

/*
    The ES6 shorthand is useful when the property name is the same as the variable name.
    It makes the code cleaner and more concise.
*/