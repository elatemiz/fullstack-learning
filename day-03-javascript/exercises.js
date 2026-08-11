//# Loops and Iterations:

//for statement:
/*
//1. Print the numbers from 1 to 20:
for(let i=0; i<=20; i++){
    console.log(i);
}
//2.Print only the even numbers from 1 to 50:
for(let a=0; a<=50; a+=2){
    console.log(a);
}

//3.Find the sum of an array:
const numbers = [10, 20, 30, 40, 50];
let total = 0;
for(j = 0; j < numbers.length; j++){
    total += numbers[j];
}
console.log(total);

//4.Find the sum of the even numbers in an array:
const numbers = [3, 8, 12, 5, 7, 20, 11];
let total = 0;
for(i = 0; i<numbers.length; i++){
    if(numbers[i]%2 === 0){
        total += numbers[i];
    }
}
console.log(total);

//do...while statement:
//1.Try printing the even numbers from 1 to 20 using a do-while loop:

let number = 2;
do{
    console.log(number);
    number +=2;
}while (number <= 20);


//while statement:
//1.Find the sum of the numbers from 1 to 10 using a while loop:
let i = 0;
let total = 0;
while(i <= 10){
    total += i;
    i++;
}
console.log(total);

//2.Print all elements of the array using a while loop:

const numbers = [5, 10, 15, 20, 25];
let j = 0;

while(j < numbers.length){
    console.log(numbers[j]);
    j++;
}

//3.Print the multiples of 3 between 1 and 50 using a while loop:

let number = 1;
while(number < 49){
    number += 2;
    console.log(number);
    number++;
}

//break statement:

//Stop the loop when 30 is found in the array:
const numbers = [10, 20, 30, 40, 50];

for(let i = 0; i<=numbers.length; i++){
    console.log(numbers[i]);
    if(numbers[i] === 30){
        break;
    }
}


//for...in and for...of statements:

const user = {
    name: "Ela",
    age: 26,
    role: "Software Engineer"
};

//1.Print only the keys using for...in:

for(const key in user){
    console.log(key);
}

//2. 
for(const key in user){
    console.log(key, user[key]);
}

//3.Print all skills using for...of:

const skills = ["JavaScript", "HTML", "CSS", "Node.js"];

for(const value of skills){
    console.log(value);
}
 //4.Print both the keys and values ​​of `user` using `Object.entries()` and destructuring:

 for(const[key,value] of Object.entries(user)){
    console.log(key, value);
 }

 
//FUNCTIONS:

//Exercise 1 — Hello:
function sayHello(){
    console.log("Hello, Ela!");
}
sayHello();

//Exercise 2 — Parameter:
function sayHello(name){
    console.log(`Hello, ${name}!`);
}
sayHello("Defne");

//Exercise 3 — Return:

function add(a, b){
    return a + b;
}
const result = add(5, 10);
console.log(result);

//4. Write a function that checks whether a number is even:

function isEven(number){
    if(number%2 === 0){
       return console.log("true");
    }
    else{
        return console.log("false");
    }
}
isEven(7);

//5. Write a function that retrieves a user's information:

function getUserInfo(user){
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
}

const user = {
    name: "Ela",
    age: 26,
    city: "Eskisehir"
}
getUserInfo(user);

//6. A function that takes an array and returns the sum of the numbers in the array:

function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
const numbers = [10, 20, 30, 40, 50];

const result = sumArray(numbers);
console.log(result);


//Function Expressions:

 //Exercise 1 — Basic Function Expression:

 const greet = function(name){
      return console.log(`Hello, ${name}!`);
 };
 greet("Ela");

 //Exercise 2 — Adding Two Numbers:

 const add = function(a, b){
    return a + b;
 }
 console.log(add(10,5));
 
 //Exercise 3 — Check if the number is even:
 
const isEven = function(n){
    if(n % 2 === 0){
        return "true";
    }
    else{
        return "false";
    }
};
console.log(isEven(10)); // true
console.log(isEven(7));  // false


//Exercise 4 — Add the Numbers in the Array:

const numbers = [10, 20, 30, 40, 50];

const sumArray = function(arr){
      let total = 0;

      for(let i = 0; i < arr.length; i++){
         total += arr[i];
      }
      return total;
};
console.log(sumArray(numbers));

//Exercise 5 — Send the Function as a Parameter:

const double = function(number){
    return number * 2;
};

const applyFunction = function (number, func){
     let result = func(number);
     return result;
     
}
console.log(applyFunction(5, double));


//Exercise 6 — Function Expression + Array:
const numbers = [1, 2, 3, 4, 5];

const double = function(number){
    return number*2;
}

const transformArray = function(arr, func){
    const array = [];
       for(let i = 0; i< arr.length; i++){
          array[i] = func(arr[i]);
       }
       return array;
}

console.log(transformArray(numbers, double));
*/
//Bonus — Your Own Mini Map Function:

const numbers = [2, 4, 6, 8];

const square = function(number){
    return number * number;
};

const myMap = function(arr, func){
    const array = [];
    for(let i = 0; i< arr.length;i++){
        array[i] = func(arr[i]); 
    }
    return array;
}

const result = myMap(numbers, square);
console.log(result);

