/*
    UNIT 13 FUNCTIONS PART 3
    CALLBACK FUNCTIONS 

    Callback functions are a fundamental concept in JavaScript, 
    used extensively in asynchronous operations. A callback function 
    is a function passed into another function as an argument, which is 
    then executed inside the outer function at a designated time or 
    under certain conditions.

    This pattern is especially useful in situations where you need to 
    wait for an operation to complete, such as after a delay, when a user 
    performs an action, or after receiving data from a server.

*/

// EXAMPLE:

// Define a simple function that logs a message
function displayMessage() {
    console.log("Hello World,My name is callback function!");
}

// Define a function that takes a callback function and a duration
function delayedLog(callback, duration) {
    console.log("Wait for it...");
    // setTimeout is used to delay the execution of the callback
    setTimeout(callback, duration);  // The callback is called after 'duration' milliseconds
}

// Call delayedLog with the displayMessage function as a callback
delayedLog(displayMessage, 3000); // The message will be displayed after 3 seconds

/*
    Note:
    The parameter names in the delayedLog function, 'callback' and 'duration', 
    are chosen for clarity. While you can name them whatever you want, 
    choosing descriptive names makes your code easier to understand and maintain.
*/

// JUST SO YOU KNOW, WE CAN ALSO SHORT DOWN CODE ABOVE
// YOU DON'T HAVE TO MEMORIZE IT RIGHT NOW 

// Define a function that takes a callback function and a duration

function delayedLog(callback, duration) {
    console.log("Wait for it...");
    setTimeout(callback, duration);
}

// Call delayedLog with an inline function as a callback
delayedLog(() => {
    // This is an inline arrow function that serves as the callback.
    // It gets executed after the specified duration in the delayedLog function.
    console.log("Hello World, My name is callback function!");
}, 3000); // The message will be displayed after 3 seconds (3000 milliseconds)