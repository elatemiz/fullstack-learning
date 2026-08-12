
//Exercise 1 — arguments

//Print the number of arguments passed to the function:
/*
function countArguments(){
    console.log(arguments.length);
}

countArguments(10, 20, 30, 40, 50);

//Exercise 2 — sum with arguments:

function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
        
    }
    return total;
}
console.log(sum(10, 20, 30, 40, 50));
*/ 
//Exercise 4 — Rest parameter:

function sum(...numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}
console.log(sum(5, 10, 15, 20));

//Exercise 5 — Rest + function expression:

const multiply = function(multiplier, ...numbers){
    const arr = [];
    for(let i = 0; i < numbers.length; i++){
        numbers[i] *= multiplier;  //arr[i] = numbers[i] * multiplier; daha doğru olur çünkü numbers arrayini değiştirmemiş oluyorum
        arr[i] = numbers[i];
    }
    return arr;
}
console.log(multiply(2, 5, 10, 15));