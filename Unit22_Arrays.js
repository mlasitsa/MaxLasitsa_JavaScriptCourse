/*
    UNIT 22: ARRAYS 

    In JavaScript, an array is a data structure that 
    allows you to store and organize multiple values within 
    a single variable. Arrays can hold elements of various 
    data types, including numbers, strings, objects, and even 
    other arrays. Arrays in JavaScript are zero-indexed, 
    meaning the index of the first element is 0, the 
    second element is at index 1, and so on.

    const myArray = [1, 2, 3];
     Array indexes: [0, 1, 2]
*/

// Way of declaring an array
const myArray = [1, 2, 3];
console.log(myArray);

// Another way of declaring an array
const myArray2 = new Array(1, 2, 3);
console.log(myArray2);

/* 
    Note: myArray !== myArray2
    Explanation: Arrays with the same values are not considered equal in JavaScript.
    In JavaScript, when you compare two arrays using the strict equality operator (===), 
    it checks whether the two arrays reference the exact same object in memory, 
    not whether their contents are the same.
*/

if (myArray.toString() === myArray2.toString()) {
    console.log('Equal');
} else {
    console.log('Not Equal'); 
}
// Output: Not Equal 



// Arrays can contain different types of elements:
// INDEXES OF ELEMENTS: [0, 1, 2, 3, 4]
const mixedArray = [1, true, undefined, '25', 'Hello Everyone'];
console.log(mixedArray);

// We can determine the number of elements in an array using the built-in .length property.
console.log(`The number of elements is: ${mixedArray.length}`);

// We can access specific elements using their indices.
console.log(mixedArray[2]); // Output: undefined
console.log(mixedArray[0]); // Output: 1