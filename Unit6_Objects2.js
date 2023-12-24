/*
    UNIT 6: OBJECTS PART 2
    Besides using dot notation, JavaScript allows us 
    to interact with object properties using square brackets [] - bracket notation.
    This is particularly useful in a few scenarios:
*/

const myCity = {
    city: 'New York'
}

// Using square brackets to add a new property:
myCity['popular'] = true;
console.log(myCity);  // Outputs: { city: 'New York', popular: true }

// When the property name is stored in a variable:
const countryProperty = 'country';
myCity[countryProperty] = 'USA';
console.log(myCity);  // Output: { city: 'New York', popular: true, country: 'USA' }

/*
    Why do we use square bracket syntax?

    1. When the property name is dynamic or stored in a variable.
    2. When the property name is not a valid identifier, such as having spaces or starting with a number.
    3. When the property name is a reserved word in JavaScript.
    4. For accessing properties with keys that are determined at runtime.
    EXAMPLES BELOW:
*/

//

/* 1. When the property name is dynamic or stored in a variable.

    Imagine you're labeling a folder with a sticky note. 
    You can write different things on the sticky note each time, 
    like "Bills," "Recipes," or "Photos." 
    In JavaScript, sometimes you want to add new information to an object, 
    but you're not sure what the label (property name) will be until the program is running.
*/
const propertyName = 'rating'; // This is like deciding what to write on the sticky note
const movie = {
    title: 'JS Rocks',
    year: 2010
};
movie[propertyName] = 9.5; // We stick the note 'rating' on our 'movie' folder and write '9.5' on it

console.log(movie); // This shows us our folder now has a 'rating' of 9.5



/* 2. When the property name is not a valid identifier, such as having spaces or starting with a number.
    
    Imagine you have a filing cabinet, 
    but the labels on the drawers have unusual names,
    some with spaces and others starting with numbers. 
    In a regular filing system, this might be a problem, 
    but in JavaScript, you can handle these 
    unconventional names using square brackets.
*/
const user = {
    "full name": "John Doe", // This is like having a drawer labeled "full name"
    "1stPlace": "Coding Competition" // And another drawer labeled "1stPlace"
};
console.log(user["full name"]); // We open the "full name" drawer and find "John Doe"
console.log(user["1stPlace"]); // We open the "1stPlace" drawer and find "Coding Competition"



/* 3. When the property name is a reserved word in JavaScript.
    
    Think of a scenario where you're naming pets but 
    using words that already have special meanings, like "Stop" or "Go." 
    In JavaScript, there are certain words you can't use for property 
    names the usual way because they have special meanings in the language. 
    These are called "reserved words."
*/
const myObject = {
    class: "Math", // It's like naming a pet "Class"
    return: true // And another pet "Return"
};
console.log(myObject["class"]); // We ask for the pet named "Class" and find it's "Math"
console.log(myObject["return"]); // We ask for the pet named "Return" and find it's true



/* 4. For accessing properties with keys that are determined at runtime.
 
    Imagine you have a vending machine that can give you different snacks 
    based on the button you press. You don't know in advance which button 
    someone will press; it's a decision made in the moment. 
    Similarly, in JavaScript, sometimes you don't know which property 
    of an object you need to access until the program is 
    actually running — this is what we mean by "runtime."
*/

const petShop = {
    dogs: 10,
    cats: 5,
    birds: 15
};

function getPetCount(petType) {
    // The pet type (dogs, cats, birds) is not known until the function is called
    return petShop[petType]; // We use square brackets to access the property name that we get when the function is called
}

console.log(getPetCount('dogs')); // If you ask for "dogs", it tells you there are 10 dogs
console.log(getPetCount('birds')); // If you ask for "birds", it tells you there are 15 birds