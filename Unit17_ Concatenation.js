/*
    UNIT 17: CONCATENATION in JS

    Concatenation refers to the process of combining 
    two or more strings into a single string. 
    This operation is often performed using the + operator.
    When you concatenate strings, you join them together 
    to create a new string that contains the characters 
    of the original strings in the specified order.
*/

// For example:

let firstName = 'John';
let lastName = 'Peterson';
console.log(firstName + lastName); // Output: JohnPeterson
//As you see we need to add an extra spacing between firstName and lastName 
console.log(firstName + ' ' + lastName); // Output: John Peterson
// OR we can also assign this to a variable 
let fullName = firstName + ' ' + lastName;
console.log(fullName);



/*
    Additionally, JavaScript provides another way to 
    concatenate strings using the template literals 
    (string interpolation) feature. 
    Here's the same example using template literals:
*/


firstName = "John";
lastName = "Doe";

// Concatenate using template literals (backticks are required)
fullName = `${firstName} ${lastName}`; // PLEASE PAY ATTENTION THAT WE HAVE TO USE (``) BACKTICKS
console.log(`Full name is: ${firstName} ${lastName}`) // Output: Full name is: John Doe
console.log(fullName); // Output: John Doe


// Also, pay attention when declaring variables to ensure
// you are not declaring a number as a string. If you do,
// the addition operation may result in string concatenation.
let num = 5;
let num1 = '5';
console.log(num + num1);