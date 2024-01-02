/*
    UNIT 25: CONDITIONAL STATEMENTS 

    In JavaScript, conditional statements 
    are used to execute different code 
    blocks based on specified conditions.

    - if - else   
    - if - else if - else
    - switch 
    - ternary operator (? :)

    Examples of conditional statements: 
*/

/*
    EXAMPLE N1:
    If the temperature is greater than 30 degrees, 
    it logs "It is hot outside!" to the console; 
    otherwise, it logs "It is not too hot."
*/
const temperature = 25; // Change the value to see another console.log

if (temperature > 30) {
    console.log('It is hot outside!');
} else {
    console.log('It is not too hot.');
}


/*
    EXAMPLE N2:
    Depending on the value of the grade variable, 
    it logs 'A', 'B', 'C', or 'You need improvement.
*/
const grade = 75; // Change the value to see another console.log

if (grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
} else {
    console.log('You need improvement.');
}


/*
    EXAMPLE N3:
    Depending on the value of dayOfWeek, it logs different messages. 
    In this case, if dayOfWeek is 'Monday', it logs "It is the start of the week." 
    if it's 'Friday', it logs "It is Friday." 
    otherwise, it logs "It is a regular day.
*/
const dayOfWeek = 'Monday';

switch (dayOfWeek) {
    case 'Monday':
        console.log('It is the start of the week.');
        break;
    case 'Friday':
        console.log('It is Friday.');
        break;
    default:
        console.log('It is a regular day.');
}


/*
    EXAMPLE N4:
    If isRaining is true, it assigns the string 'Bring an umbrella' to weatherMessage
    otherwise, it assigns 'Enjoy the day'.
    The final message is then logged to the console
*/

const isRaining = true;
const weatherMessage = isRaining ? 'Bring an umbrella' : 'Enjoy the day';

console.log(weatherMessage);


/*
    EXAMPLE OF USING CONDITIONAL STATEMENTS IN FUNCTIONS:
*/

// Define a function named sumNum that takes two parameters, a and b
const sumNum = (a, b) => {
    // Check if either a or b is not a number using typeof
    if (typeof a !== 'number' || typeof b !== 'number') {
        // If true, return an error message
        return 'One of the arguments is not a number';
    }

    // Check if either a or b is not positive
    if (a <= 0 || b <= 0) {
        // If true, return an error message
        return 'One of the numbers is not positive';
    }

    // If both conditions are false, return the sum of a and b
    return a + b;
}

// Call the sumNum function with arguments -5 and 6, and log the result to the console
console.log(sumNum(-5, 6)); // Output: One of the numbers is not positive