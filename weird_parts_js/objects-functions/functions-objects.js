// javascript.info is still the best resource I've found so far to explain
// javascript in detail

// First Class Functions
// Everything you can do with other types you can do with functions

// Assign them to variables, pass them around, create them on the fly.

// Function - a special type of object
// Attach a primitive, object and function
// NAME optional, can be anonymous
// CODE

function greet() {
    console.log('hi');
}

greet.language = 'english';

console.log(greet);