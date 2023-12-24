/*
    UNIT 5: OBJECTS IN JAVASCRIPT

    Objects in JavaScript are collections of key-value 
    pairs where keys are strings (also called properties) and values can be of any type.

    Example of an object declaration with properties:
*/
const myCity = {
    city: 'Duluth',
    popular: true,
    country: 'USA'
}

/*
    'myCity' is the object.
    'city', 'popular', 'country' are the keys or properties of the object.
    'Duluth', true, 'USA' are the corresponding values for these properties.

    It is recommended to use 'const' for declaring objects 
    when we don't intend to reassign the object itself 
    because even though JavaScript is dynamically typed, 
    a 'const' object's properties can still be modified.
*/

// Accessing properties of an object using dot notation:
console.log(myCity.city);  // Output: Duluth
console.log(myCity.country); // Output: USA

// Modifying properties of a 'const' object:
myCity.city = 'New York'; // The property 'city' of the object 'myCity' is changed to 'New York'.
console.log(myCity.city); // Output: New York

// Adding a new property to the object:
myCity.state = 'NY'; // A new property 'state' is added to the 'myCity' object.
console.log(myCity);

/*
    IMPORTANT NOTE:
    Even though 'myCity' is declared with 'const', 
    we can still alter the properties within it.
    This is because 'const' only prevents reassignment of the variable 'myCity' itself, 
    not the modification of its individual properties. 
    The reference to the object remains constant, 
    but the contents of that object can be changed.
*/
