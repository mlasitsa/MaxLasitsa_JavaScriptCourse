/*
    UNIT 21: ERROR HANDLING 

    Error handling, also known as error processing, is a crucial 
    aspect of JavaScript programming. It involves dealing with potential 
    errors or exceptions that may occur during the execution of a program. 
    Proper error handling helps ensure that unexpected issues are gracefully managed, 
    preventing the program from crashing and providing meaningful feedback to developers or users.

    In JavaScript, error handling is typically performed using try...catch statements.

    try {
        // executing the code 
    } catch(error) {
        // this part will be executed only 
        // if we have an error in the try block 
    }
*/

try {
    // Code that might throw an error
    // For example, calling a function that does not exist
    functionDoesntExist();
} catch (error) {
    // Code to handle the error
    console.error("An error occurred: " + error.message);
} finally { // It is not neccassry to use finally 
    // Code that will always be executed, regardless of whether an error occurred or not
    console.log("This will always be executed.");
}

// JavaScript also has the throw statement, which allows you to create and throw custom errors:
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));  // Output: 5 
    console.log(divide(10, 0));  // This will throw an error
} catch (error) {
    console.error("An error occurred: " + error.message);
}

// Additional details:
// - Types of Errors: Syntax errors, runtime errors, and logical errors.
// - Handling Specific Errors: Multiple catch blocks for different error types.
// - Best Practices: Logging errors, throwing meaningful messages, avoiding overly broad catch blocks.
// - Asynchronous Error Handling: Considerations for Promises and async/await syntax.