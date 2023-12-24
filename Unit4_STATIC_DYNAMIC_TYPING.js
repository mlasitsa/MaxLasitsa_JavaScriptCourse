/*
UNIT 4: STATIC AND DYNAMIC TYPING

JavaScript is a dynamic language, meaning you can 
assign any value and change it into different: 
*/

// For example:
// This is DYNAMIC Typing
let a = 10; // number
a = true; // boolean
a = undefined; // undefined
a = 'JavaScripts Rocks!'; // String
console.log(a); // WHAT WILL PRINT OUT IN THE CONSOLE ???


/*
 However, in recent years, there has been a growing interest 
 in introducing static typing to JavaScript to avoid the pitfalls 
 of dynamic typing, especially in large-scale applications. 
 This is where TypeScript come into play.

 For Example,
 This is STATIC Typing:

    let count: number = 5; 
    count = 'Hello'; - This will cause a compilation error in TypeScript
*/