/*
    UNIT 31: Async/Await

    Async/Await is a special syntax in JavaScript that simplifies working with Promises.

    There are two ways to define async functions:

*/

// 1. Using the async function declaration:
async function asyncFn() {
    // Always returns a Promise
}


// 2. Using the async arrow function:
const asyncFn = async () => {
    // Always returns a Promise
}


// Example:
const asyncFn = async () => {
    return 'Success';
}

// Calling the async function using then method to handle the Promise result
asyncFn()
    .then((value) => console.log(value));

/*
When using async/await, you mark a function as asynchronous using the "async" keyword.
An async function always returns a Promise, and the value it resolves to is the value
you use in the "return" statement.

You can then call this function using the "await" keyword, which waits for the Promise
to resolve. This helps in writing asynchronous code in a more synchronous-like fashion.

Example with async/await:
*/

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Calling the async function
fetchData();

/*
In the example above, the "await" keyword is used to wait for the fetch and json
operations to complete before moving to the next line of code. This helps in writing
more readable and synchronous-like asynchronous code.
*/