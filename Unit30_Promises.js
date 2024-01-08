/*
    UNIT 30: Promises 

    Promises in JavaScript provide a way to handle asynchronous operations
    and manage the flow of data that may take some time to fetch or process.

    For instance, when you need to fetch data from a remote server, you can't
    predict when the server will respond. A Promise is like making a commitment
    to handle the result once it's available or to handle any errors that may occur.

    Promise States:
    - Pending: The initial state, representing the ongoing operation.
    - Fulfilled: The operation completed successfully, and a result is available.
    - Rejected: The operation encountered an error, and a reason for failure is provided.

    Creating a Promise:

    const myPromise = new Promise((resolve, reject) => {
        // Simulating an asynchronous action, e.g., fetching data
        setTimeout(() => {
            const success = true; // Assume the operation was successful
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Error fetching data');
            }
        }, 2000); // Simulating a delay of 2 seconds
    });



    Obtaining the result of a Promise:

    myPromise
        .then((value) => {
            console.log('Success:', value);
            // Perform actions with the successfully fetched data
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors that occurred during the operation
        });



    Real-world example with the Fetch API:

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((json) => {
            console.log('Fetched data:', json);
            // Perform actions with the fetched JSON data
        })
        .catch((error) => {
            console.error('Fetch error:', error);
            // Handle errors that occurred during the fetch operation
        });

    JSON - JavaScript Object Notation 
*/

// Note: The following code uses the Fetch API which may not be supported in Node.js without additional packages.
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((json) => {
        console.log('Fetched data:', json);
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });