
//Exercise 1 — Basic arrow function:

const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Ela"));

//Exercise 2 — Write an arrow function that calculates the cube of a number:

const cube = number => number*number*number;

console.log(cube(3));

//Exercise 3 — Write an arrow function that multiplies two numbers:

const multiply = (a, b) => a * b;

console.log(multiply(5, 2));

//Exercise 5 — Convert it to an arrow function and find the square of all elements in the `numbers` array:

const numbers = [1, 2, 3, 4, 5];

const square = number => number * number;

//my addition 1:
const isEven = number => {
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

//my addition 2:
const negative = number => number = 1 - number -1; 
   
const operation = (arr, func) => {
         const array = [];

         for(let i = 0; i< arr.length; i++){
            array[i] = func(arr[i]);
         }
        return array;
    }; 
    
console.log(operation(numbers, square));
console.log(operation(numbers, isEven));
console.log(operation(numbers, negative));

        


