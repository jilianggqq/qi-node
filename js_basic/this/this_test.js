// "use strict";
// 1. Using this in a Method of an object. the `this` keyword refers to the object itself,
// allowing access to its properties and methods within the method’s scope.
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(
            "Hello, my name is " +
                this.name +
                " and I am " +
                this.age +
                " years old."
        );
    },
};

person.greet(); // Output: Hello, my name is John and I am 30 years old.

function greet() {
    console.log("Hello, my name is " + this.name);
}

// 2. Using this in a Function
const person1 = {
    name: "John",
    sayHello: greet,
};

const anotherPerson1 = {
    name: "Alice",
};

greet(); // Output: Hello, my name is undefined
person1.sayHello(); // Output: Hello, my name is John
// When greet.call(anotherPerson) is called, this refers to the anotherPerson object, allowing access to its name property.
greet.call(anotherPerson1); // Output: Hello, my name is Alice

// 3. Using this alone
// In non-strict mode, this refers to the global object (e.g., window in browsers, global in Node.js), representing the global scope.
// In strict mode, this is undefined when used alone outside of any function or object context.
console.log(this);

// 4. Implicit Binding
const person2 = {
    name: "ram",
    age: 22,
    greet: function () {
        return `Hello ${this.name}, you are ${this.age} years old`;
    },
};
console.log(person2.greet());

// 4.1 (!!!) without the function keyword this is unable to refer to the object in the outer scope.
const person3 = {
    name: "ram",
    age: 22,
    greet: () => {
        return `Hello , you are ${this.age} years old`;
    },
};
console.log(person3.greet());

// 5. Explicit Binding
// When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.
const obj1 = {
    firstName: "San",
    lastName: "Zhang",
};
const obj2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
};
function printName(profession, country) {
    console.log(
        this.firstName + " " + this.lastName + " " + profession + " " + country
    );
}
printName.apply(obj2, ["Cricketer", "India"]);
printName.call(obj1, 'Lawer', 'China');
printName.call(obj1);

// 6. Default Binding.
// "use strict";
age = 22;
function verifyAge() {
    return this.age;
}
// should be 22, not working.
console.log(verifyAge());
