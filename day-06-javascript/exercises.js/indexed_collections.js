//Exercise 1 — Object.groupBy():
/*
const students = [
    { name: "Ela", age: 25 },
    { name: "Ali", age: 22 },
    { name: "Defne", age: 25 },
    { name: "Mert", age: 22 }
];

const grouped = Object.groupBy(
      students,
      students => students.age
);
console.log(grouped); 

//Exercise 2 —

const products = [
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Banana", category: "fruit" },
    { name: "Potato", category: "vegetable" }
];

const groups = Object.groupBy(
    products,
    products => products.category
);
console.log(groups);

//Exercise 3 — Sparse Array:

const numbers = [10, 20, , 40, 50];

console.log(2 in numbers); //false -> in değeri değil, index var mı onu kontrol eder. property olarak boş olduğu için false
console.log(numbers[2]); //undefined -> 2. indexteki değer undefined
*/
//Exercise 4 — for...of vs map():

const numbers = [1, 2, , 4];

for(const number of numbers){
    console.log(number);
}

const result = numbers.map(number => number * 2);

console.log(result);
/*
 //output:
1
2
undefined     //for...of empty slotları undefined olarak görür.
4              
[ 2, 4, <1 empty item>, 8 ]  //çünkü map() empty slotları atlar.
*/

//Exercise 5 — Matrix:

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
 
   for( let i = 0; i < matrix.length; i++){
      for(let j = 0; j <  matrix[i].length; j++){
        console.log(matrix[i][j]);
      }
   }

//sumArray

let sumArray = 0;

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        sumArray += matrix[i][j];
    }
}

console.log(sumArray);

//Exercise 6 — Array-like → Array:

function doubleNumbers(){
     
     const numbers = Array.from(arguments); // array-like -> array

     const doubled = numbers.map(number => number * 2);
          return doubled;
}

console.log(doubleNumbers(1, 2, 3, 4));

   
  