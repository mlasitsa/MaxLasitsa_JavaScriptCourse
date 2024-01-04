/*
    UNIT 28: CLASSES AND PROTOTYPES 
    Classes and Prototypes are both mechanisms 
    for creating and defining objects, 
    but they have different syntax and underlying concepts

    For example: 

    Lets say you have multiple cars that have their name, engine etc 
    You can create ONE prototype and based on that prototype you 
    can create as many cars as you want. 
*/

// Prototype (Constructor function)
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Adding a method to the prototype
  Car.prototype.startEngine = function() {
    console.log("Engine started for " + this.make + " " + this.model + " " + this.year);
  };
  
  // Creating individual cars using the Car prototype
  let car1 = new Car("Toyota", "Camry", 2020);
  let car2 = new Car("Ford", "Mustang", 2021);
  
  // Using the common method from the prototype
  car1.startEngine(); // Output: Engine started for Toyota Camry 2020
  car2.startEngine(); // Output: Engine started for Ford Mustang 2021



// AS you noticed we craeted our prototype using function, but we can also use create:
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

let firstCom = new Comment('Hey there');
firstCom.upvote();
console.log(firstCom)