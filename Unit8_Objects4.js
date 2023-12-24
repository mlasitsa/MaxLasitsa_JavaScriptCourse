/*
    UNIT 8: OBJECTS PART 4
    GLOBAL OBJECTS: 


    1. Window
        
        The Window object is a global object in web browsers.
        It represents the browser window and provides functions and variables that affect the entire web page.
        For example, window.alert("Hello") shows an alert box in the browser, and window.innerWidth gives the width of the browser window.
        Think of the Window object as a big box that contains everything related to what you can see and do in your browser window.
    

    2. global 
        
        In Node.js, which is a JavaScript runtime for server-side programming, the global object is called global.
        Similar to the Window object in a browser, global in Node.js provides functions and variables that are accessible from anywhere in your Node.js application.
        For example, global.setTimeout(() => { console.log("Hello") }, 1000) sets a timer to print "Hello" after 1 second.
        Think of the global object in Node.js like a toolbox that's available anywhere in your Node.js project, containing tools (functions and variables) you can use anytime.


    3. globalThis
        
        globalThis is a relatively new addition to JavaScript, introduced to provide a standard way of accessing the global object across different environments.
        Before globalThis, you had to use window in browsers, global in Node.js, and self in web workers. This could get confusing when writing code that needs to work in 
        multiple environments. With globalThis, no matter where your JavaScript code is running — whether in a browser, on a server (Node.js), or in a web worker — you can 
        use globalThis to access the global object. For example, globalThis.setTimeout() works both in browsers and Node.js to set a timeout.
        Think of globalThis as a universal key that opens the global object's door, no matter where you are in the JavaScript world. It makes your code more portable 
        and less dependent on the environment it's running in.
*/


/*
    METHODS (FUNCTIONS) IN OBJECTS
    In JavaScript, we can define functions within objects. These functions are often referred to as 'methods'.

    Example of defining a method in an object:
*/

const myCity = {
    city: 'New York',
    cityGreeting: function() {
        console.log('I love NYC');
    }
}

myCity.cityGreeting(); // Output: I love NYC


// The same code can be simplified using the ES6 shorthand for method definitions:
const newCity = {
    city: 'Los Angeles',
    newGreetings() {
        console.log('Hello LA');
    }
}

newCity.newGreetings(); // Output: Hello LA

/*
    In the 'myCity' object, 'cityGreeting' is a method defined using the traditional function syntax. 
    In the 'newCity' object, 'newGreetings' is defined using the ES6 shorthand syntax, which is more concise.
    Both are valid ways to define methods in objects.
*/