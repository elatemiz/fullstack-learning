
//Exercise 1 — this and object:
/*
const person = {
    name: "Ela",
    age: 26,

    getInfo: function() {
        return `${this.name} is ${this.age} years old.`;
    }
};
console.log(person.getInfo());

//Exercise 2 — Same function, different objects:
function getFullName(){
    return `${this.firstName} ${this.lastName}`;
}

const person1 = {
    firstName: "Ela",
    lastName: "Temiz"
};
const person2 = {
    firstName: "Defne",
    lastName: "Deniz"
};

person1.getFullName = getFullName;  //Add a property named getFullName to the person1 object and set the getFullName function as the value of this property.
person2.getFullName = getFullName;

console.log(person1.getFullName());
console.log(person2.getFullName());

//Exercise 3 — Property accessor:

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

console.log(car.brand);  //dot notation
console.log(car["brand"]);  //bracket notation
console.log(car.model);  
console.log(car["model"]);  
console.log(car.year);  
console.log(car["year"]);  

const property = "model"; //access the value "Corolla" using the property variable

//Exercise 4 — in:
const user = {
    name: "Ela",
    age: 25,
    email: "ela@example.com"
};

console.log("name" in user);
console.log("age" in user);
console.log("email" in user);
console.log("password" in user);


//Exercise 5 — instanceof:
const numbers = [1, 2, 3];
const text = "Hello";
const user = {
    name: "Ela"
};

console.log(numbers instanceof Array); //true
console.log(text instanceof Object); //false
console.log(user instanceof Array); //false
console.log(numbers instanceof Object); //true -> arrays are also a type of object

//Exercise 6:

function getInfo(){
    return `${this.name} is ${this.age} years old.`;
}

const student1 = {
        name: "Ela",
        age: 25
};
const student2 = {
        name: "Defne",
        age: 22
};

student1.getInfo = getInfo;
student2.getInfo = getInfo;

console.log(student1.getInfo());
console.log(student2.getInfo());

console.log("age" in student1); //true
console.log(student2 instanceof Object); //true
console.log(student1 instanceof Array); //false
*/