/*
// Exercise 1 — push/pop:
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);
const removedFruit = fruits.pop();
console.log(removedFruit);

//Exercise 2 — map:
const numbers = [2, 4, 6, 8];

const doubled = numbers.map((number) => number * 2);
console.log(doubled);
*/
//Exercise 3 — filter:
const numbers = [3, 10, 15, 22, 7, 30];

const newNumbers = numbers.filter((number) => number > 10);
console.log(newNumbers);

//Exercise 4 — find:

const num = numbers.find((number) => number > 10);
console.log(num);

//Exercise 5 — some/every:

const result_s = numbers.some((number) => number > 10);
const result_e = numbers.every((number) => number > 10);
console.log(result_s);
console.log(result_e);

const s_even = numbers.some((number) => number % 2 === 0);
const e_even = numbers.every((number) => number % 2 === 0);
console.log(s_even);
console.log(e_even);

//Exerxise 6 — reduce:
const prices = [100, 200, 50, 300];

const total = prices.reduce((sum, number) =>{
            return sum + number;
} , 0)

console.log(total);
   
//Exercise 7:
const users = [
     {name: "Ela", age: 26},
     {name: "Defne", age: 20},
     {name: "Nidal", age: 17},
     {name: "Helin", age: 15}
];

const isLegal = users.filter((users) => users.age > 18);
console.log(isLegal);

const firstName = users.map((users) => users.name);
console.log(firstName);

const find_age = users.find((users) => users.age > 20);
console.log(find_age);