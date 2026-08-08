//Problem 1:

const name = "Ela";
const age = 26;
const isStudent = true;
const city = "Eskisehir";

console.log(`My name is ${name}.`);
console.log(`I am ${age}.`);
console.log(`I live in ${city}.`);
console.log(`I am a student: ${isStudent}`);

//Problem 2:

const array = ["laptop", "mouse", "keyboard"];

console.log(array.length);
console.log(array[0]);
console.log(array[2]);

array.push("headphones");
console.log(array);

//Problem 3 - User object:

const user = {
    name: "Ela",
    age: 26,
    email: "elatemiz@gmail.com",
    skills: ["JavaScript", "HTML", "CSS"]
};

console.log(`User: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Email: ${user.email}`);
console.log(`Skills: ${user.skills}`);