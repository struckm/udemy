// variable environment
// this
// outer environment

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments ' + lang1 + ' ' + lang2);
}

var logPersonName = logName.bind(person);

//logPersonName('en');

// logName.call(person, 'en' , 'es');
// logName.apply(person, ['en', 'es']);

// where would you use this in real life scenarios

// function borrowing

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

// console.log(person.getFullName.apply(person2));

// function currying
// creating a copy of a function but with some preset parameters
// very useful in mathematical functions
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2, 5);

console.log(multipleByTwo(2, 2));



