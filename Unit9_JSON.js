/*
    UNIT 9 JSON 
    JSON is a JavaScript Object Notation

    JSON (JavaScript Object Notation) is a format for storing and exchanging data.
    It's used when data is sent from a server to a web page or between any two systems that need to communicate with each other.
    JSON is popular because it's easy for both humans and machines to understand.

    Example of JSON:

    {
    "userid": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}
*/

/*
    HOW DO WE TRANSFORM DATA:
    Let's say you have a JavaScript object in your code. 
    To send this data to a server or another system, 
    you need to convert it into a JSON string. 
    This process is called serialization.
    Here's how it works in JavaScript:
*/

// User Object
const user = {
    userid: 1,
    id: 1,
    title: "Test title",
    status: {
        completed: false
    }
};

// from JavaScript to JSON
const userJSON = JSON.stringify(user); // TRY TO REMEMBER THIS COMMAND
console.log(userJSON); // This will show the user object as a JSON string


// from JSON to JavaScript 
const userObject = JSON.parse(userJSON); // TRY TO REMEMBER THIS COMMAND
console.log(userObject); // This will convert the JSON string back to a JavaScript object
 
