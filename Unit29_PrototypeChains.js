/*
    UNIT 29: PROTOTYPE CHAINS 
*/

// Creating a constructor function
function Comment(name) {
    this.name = name;
}

// Creating an instance of Comment
const firstComment = new Comment('HEY There!');
console.log(firstComment);

// Checking instance relationships
console.log(firstComment instanceof Comment); // Returns true
console.log(firstComment instanceof Object); // Returns true

console.log(firstComment.hasOwnProperty('text')); // Returns false
console.log(firstComment.hasOwnProperty('hasOwnProperty')); // Returns false

// Accessing the prototype of the Comment constructor
console.log(Comment.prototype);



/* 
    STATIC METHODS

    In JavaScript, a static method is a method that is associated with the constructor function
    itself rather than with the instances created from it. It is called on the constructor
    function rather than on an instance of the class.

    In the example below, the `mergePosts` method is a static method of the Post constructor.
    It is called directly on the constructor, not on an instance of Post. Static methods are
    useful for defining utility functions that are not tied to a specific instance of the class.

    To define a static method, you use the constructor function and add the method directly to it,
    as shown in the example with `Post.mergePosts`.
*/


// Creating a constructor function with static method
function Post(text) {
    this.text = text;
    this.votesQty = 0;
}

// Adding an instance method to the Post constructor
Post.prototype.upvote = function () {
    this.votesQty += 1;
};

// Adding a static method to the Post constructor
Post.mergePosts = function (first, second) {
    return `${first}, ${second}`;
};

// Creating an instance of Post
const firstPost = new Post('First post');
console.log(firstPost);

// Calling the instance method
firstPost.upvote();
console.log(firstPost.votesQty); // Output: 1

// Calling the static method
const mergedPosts = Post.mergePosts('firstPost', 'secondPost');
console.log(mergedPosts); // Output: 'firstPost, secondPost'



/*
    Extension of other classes 

    In JavaScript, you can create a new class that inherits from an existing class using
    the "extends" keyword. This is known as class inheritance, and the new class is called
    the subclass or derived class, while the existing class is the superclass or base class.

    In the example below, the NumbersArray class is created by extending the built-in Array class.
    By doing this, NumbersArray inherits all the properties and methods of the Array class, and you
    can also add additional methods or override existing ones.

    In this case, the NumbersArray class adds a new method called `sum`. This method uses the `reduce`
    method, which is inherited from the Array class, to calculate the sum of all elements in the array.

    When you create an instance of NumbersArray, such as `const myArray = new NumbersArray(2, 5, 7)`
    it behaves like a regular array but also has the additional `sum` method available.

    Extending built-in classes is a powerful feature in JavaScript that allows you to create specialized
    classes with additional functionality while leveraging the capabilities of existing classes.
*/


// Creating a class that extends the built-in Array class
class NumbersArray extends Array {
    sum() {
        // Using the reduce method to calculate the sum
        return this.reduce((acc, el) => acc + el, 0);
    }
}

// Creating an instance of NumbersArray
const myArray = new NumbersArray(2, 5, 7);
console.log(myArray); // Output: NumbersArray [2, 5, 7]
console.log(myArray.sum()); // Output: 14


