/*
    UNIT 27: MODULES 

    This is will be theory mostly and the 
    code that I am going to have here won't run 

    In JavaScript, the term "modules" typically refers to a way of 
    organizing and structuring code into reusable and maintainable units. 
    In the past, JavaScript did not have built-in support for modules, 
    but with the introduction of ECMAScript 2015 (ES6), 
    native support for modules was added. 

    We will be talking specifically about export and import modules
    I am not sure if you have seen, but in Full-Stack Applications 
    we have a folder called modules that has different JS files. 
    This files have some kind of functionality and we can either 
    export FROM files or import TO files  
*/

/*
    For example, lets assume that you have two modules called 
    moduleOne.js
    moduleTwo.js  
*/

// moduleOne.js code
const myName = () => {
    console.log('Max');
}

export default myName;

// We want to use this function in 
// Our moduleTwo.js, so in the 
// moduleTwo.js we would put:

import printMyName from './moduleOne.js'  
// where  printMyName is the name AND the ' ' is a directory(location) of the file ./folder/fileName
printMyName(); // Output: Max. As I said this is just an example and the code won't run here 

// Note: if you will be testing using Node.js then your files should have .mjs format 
// moduleOne.mjs
// moduleTwo.mjs

// Note: It is very recommended to use import in the begging of programming(on top)


/*
    What if we need to import more than one variables ?
    The logic is pretty much same 
*/

// Lets say again you have a file called moduleOne.js

const one = 1;
const two = 'two';

export {
    one,
    two
}
// It is reccommended to export your variables/functions at the BOTTOM 



// In the moduleTwo.js where you need the acces you would juts have:
import {
    one, 
    two 
} from './moduleOne.js'

// Note! This is not an object creation. This are export/import methods

// ATTENTION! Since we are not importing using default method 
// NAME OF THE VARIABLES WE ARE TRYING TO EXPORT/IMPORT HAVE TO BE THE SAME 
// !!! HOWEVER !!!
// Sometimes we have scenarious when we need to have a different name for the variable 
// we are trying to import 
// In that case we can do it like this: 

import {
    one as numOne, 
    two as numTwo 
} from './moduleOne.js'

