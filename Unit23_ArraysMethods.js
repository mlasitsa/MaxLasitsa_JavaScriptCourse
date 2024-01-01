/*
    UNIT 23: ARRAYS METHODS

    There are several methods that make our work with arrays easier
    Methods:

    1. push: Adds one or more elements to the end of an array.
    2. pop: Removes the last element from an array.
    3. shift: Removes the first element from an array.
    4. unshift: Adds one or more elements to the beginning of an array.
    5. forEach: Executes a provided function once for each array element.
    6. map: Creates a new array with the results of calling a provided function on every element in the array.
    7. concat: Combines two or more arrays.
    8. slice: Returns a portion of an array.
    9. indexOf: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
    10. lastIndexOf: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
    11. includes: Determines whether an array includes a certain element, returning true or false.
    12. filter: Creates a new array with all elements that pass the test implemented by the provided function.
    13. reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
    14. find: Returns the first element in the array that satisfies the provided testing function.
    15. findIndex: Returns the index of the first element in the array that satisfies the provided testing function, or -1 if none is found.
    16. some: Tests whether at least one element in the array passes the test implemented by the provided function.
    17. every: Tests whether all elements in the array pass the test implemented by the provided function.
    18. sort: Sorts the elements of an array in place.
    19. reverse: Reverses the elements of an array in place.
    20. join: Joins all elements of an array into a string.
    21. splice: Adds or removes elements from an array.
    22. isArray: Checks if a value is an array.
    23. fill: Fills all the elements of an array from a start index to an end index with a static value.
    24. keys: Returns a new array iterator that contains the keys for each index in the array.
    25. values: Returns a new array iterator that contains the values for each index in the array.
    26. entries: Returns a new array iterator that contains key/value pairs for each index in the array.

*/

// Example of push: Adds one or more elements to the end of an array.
const pushArray = [1, 2, 3];
pushArray.push(4, 5);
console.log(pushArray);
// Output: [1, 2, 3, 4, 5]

// Example of pop: Removes the last element from an array.
const popArray = [1, 2, 3, 4, 5];
const poppedElement = popArray.pop();
console.log(popArray); // Output: 1, 2, 3, 4
console.log(poppedElement); // Output: 5


// Example of shift: Removes the first element from an array.
const shiftArray = [1, 2, 3, 4, 5];
const shiftedElement = shiftArray.shift();
console.log(shiftArray); // Output: 2, 3, 4, 5
console.log(shiftedElement); // Output: 1
console.log(shiftArray[0]); // NOTE THAT AFTER WE SHIFTED OUR FIRST INDEX(0) BECAME NUMBER 2


// Example of unshift: Adds one or more elements to the beginning of an array.
const unshiftArray = [2, 3, 4, 5];
unshiftArray.unshift(1);
console.log(unshiftArray); // Output: [1, 2, 3, 4, 5]
console.log(unshiftArray[0]); // NOTE THAT AFTER WE UNSHIFTED OUR FIRST INDEX(0) BECAME NUMBER 1
 
// Example of forEach: Executes a provided function once for each array element.
const forEachArray = [1, 2, 3, 4, 5];
forEachArray.forEach((element) => {
    console.log(element * 2);
});
// Output: 2, 4, 6, 8, 10
/* 
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
    PLEASE NOTICE THAT THIS METHOD DOESNT RETURN ANY VALUES
    IF you want to return value and store it in variable or an array 
    CHECK MAP ARRAY FUNCTION BELOW
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/ 

// Example of map: Creates a new array with the results of calling a provided function on every element.
const mapArray = [1, 2, 3, 4, 5];
const mappedArray = mapArray.map((element) => {
    return element * 3;
});
console.log(mappedArray);
// Output: [3, 6, 9, 12, 15]

// Example of concat: Combines two or more arrays.
const concatArray1 = [1, 2];
const concatArray2 = [3, 4, 5];
const combinedArray = concatArray1.concat(concatArray2);
console.log(combinedArray);
// Output: [1, 2, 3, 4, 5]

// Example of slice: Returns a portion of an array.
const sliceArray = [1, 2, 3, 4, 5];
const slicedArray = sliceArray.slice(1, 4); 
console.log(slicedArray);
// Output: [2, 3, 4]

// Example of indexOf: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const indexOfArray = [1, 2, 3, 4, 5];
const index = indexOfArray.indexOf(3);
console.log(index);
// Output: 2

// Example of lastIndexOf: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const lastIndexOfArray = [1, 2, 3, 4, 2, 5];
const lastIndex = lastIndexOfArray.lastIndexOf(2);
console.log(lastIndex);
// Output: 4

// Example of includes: Determines whether an array includes a certain element, returning true or false.
const includesArray = [1, 2, 3, 4, 5];
const includes = includesArray.includes(3);
console.log(includes);
// Output: true

// Example of filter: Creates a new array with all elements that pass the test implemented by the provided function.
const filterArray = [1, 2, 3, 4, 5];
const filteredArray = filterArray.filter((element) => {
    return element > 2;
});
console.log(filteredArray); // Output: [3, 4, 5]


// Example of reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// Array to be reduced
const reduceArray = [1, 2, 3, 4, 5];

// Using the reduce method to accumulate values
// The second argument (0) is the initial value for the accumulator
const reducedValue = reduceArray.reduce((accumulator, element) => {
    // The accumulator is a variable that accumulates the result
    // The element is the current element being processed in the array
    // The callback function adds each element of the array to the accumulator
    return accumulator + element;
}, 0);

// Output the final result
console.log(reducedValue); // Output: 15


// Example of find: Returns the first element in the array that satisfies the provided testing function.
const findArray = [1, 2, 3, 4, 5];
const found = findArray.find((element) => element > 2);
console.log(found); // Output: 3


// Example of findIndex: Returns the index of the first element in the array that satisfies the provided testing function, or -1 if none is found.
const findIndexArray = [1, 2, 3, 4, 5];
const foundIndex = findIndexArray.findIndex((element) => element > 2);
console.log(foundIndex); // Output: 2


// Example of some: Tests whether at least one element in the array passes the test implemented by the provided function.
const someArray = [1, 2, 3, 4, 5];
const hasEven = someArray.some((element) => element % 2 === 0);
console.log(hasEven); // Output: true


// Example of every: Tests whether all elements in the array pass the test implemented by the provided function.
const everyArray = [2, 4, 6, 8, 10];
const allEven = everyArray.every((element) => element % 2 === 0);
console.log(allEven);
// Output: true

// Example of sort: Sorts the elements of an array in place.
const sortArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
sortArray.sort();
console.log(sortArray);
// Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

// Example of reverse: Reverses the elements of an array in place.
const reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log(reverseArray);
// Output: [5, 4, 3, 2, 1]

// Example of join: Joins all elements of an array into a string.
const joinArray = ['Hello', 'World', '!'];
const joinedString = joinArray.join(' ');
console.log(joinedString);
// Output: 'Hello World !'

// Example of splice: Adds or removes elements from an array.
// Array to be modified using the splice method
const spliceArray = [1, 2, 3, 4, 5];

// Using the splice method to add or remove elements
// Arguments: (start index, delete count, elements to add)
// In this example, starting from index 2, remove 1 element, and add 'a' and 'b'
spliceArray.splice(2, 1, 'a', 'b');

// Output the modified array
console.log(spliceArray);
// Output: [1, 2, 'a', 'b', 4, 5]

// Example of isArray: Checks if a value is an array.
const isArrayExample = [1, 2, 3];
const isArrayResult = Array.isArray(isArrayExample);
console.log(isArrayResult);
// Output: true

// Example of fill: Fills all the elements of an array from a start index to an end index with a static value.
const fillArray = [1, 2, 3, 4, 5];

// Using the fill method to fill elements with a static value
// Arguments: (value to fill, start index, end index)
// In this example, fill with 0 starting from index 1 (inclusive) to index 3 (exclusive)
fillArray.fill(0, 1, 3);

// Output the modified array
console.log(fillArray);
// Output: [1, 0, 0, 4, 5]

// Example of keys: Returns a new array iterator that contains the keys for each index in the array.
const keysArray = ['a', 'b', 'c'];
const keysIterator = keysArray.keys();
for (const key of keysIterator) {
    console.log(key);
}
// Output: 0, 1, 2

// Example of values: Returns a new array iterator that contains the values for each index in the array.
const valuesArray = ['a', 'b', 'c'];
const valuesIterator = valuesArray.values();
for (const value of valuesIterator) {
    console.log(value);
}
// Output: 'a', 'b', 'c'

// Example of entries: Returns a new array iterator that contains key/value pairs for each index in the array.
const entriesArray = ['a', 'b', 'c'];
const entriesIterator = entriesArray.entries();
for (const [index, value] of entriesIterator) {
    console.log(index, value);
}
// Output: 0 'a', 1 'b', 2 'c'
