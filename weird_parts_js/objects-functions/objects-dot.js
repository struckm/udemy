var person = new Object();

person['firstname'] = 'John';
person['lastname'] = 'Doe';

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = '123 Main Street';
person.address.city = 'Nowhere';
person.address.state = 'IL'


console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);
