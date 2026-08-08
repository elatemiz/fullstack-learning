//VARIABLES:

const name = "Ela";
const age = 26;

//Data Types Practice:

const isStudent = true;
const nothing = null;
let something;  // const yazdığımızda hata veriyor. Çünkü const kullanırken mutlaka başlangıç değeri vermek gerekir.

//const skills = ["JavaScript", "HTML", "CSS"];

const user = {
    name: "Ela",
    age: 26,
    city: "Eskisehir",
    skills: ["JavaScript", "HTML", "CSS"]
};

console.log(user.name); //Ela
console.log(user.age); //26
console.log(user.city);  //Eskisehir
console.log(user.skills[0]); // JavaScript
console.log(user.skills.length); //3 --> arrayin kac elemanli oldugunu bulur.

/*console.log(typeof name); //String
console.log(typeof age); //number
console.log(typeof isStudent); //boolean
console.log(typeof nothing); //null --> doğru cevap object
console.log(typeof something); //undefined
console.log(typeof skills); //Array  --> doğru cevap object
console.log(typeof user); //object
*/

const arr = ["A", , "C"];
console.log(arr[1]); //undefined

