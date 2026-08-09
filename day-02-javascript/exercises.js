//Block Statement:

let x = 10;

if(true) {
    let x = 20;
    console.log("Inside:", x);
}
console.log("Outside:", x);

//Inside: 20
//Outside: 10

var y = 10;

if (true) {
    var y = 20;
    console.log("Inside:", y);
}
console.log("Outside:", y);

//Inside: 20
//Outside: 20

//Conditional Statements:

//if...else statement:

//1:
const age = 19;
if(age>=18){
    console.log("Adult");
}
  else if(age<18){
    console.log("Minor");
}

//2:

const user = {
    name: "Ela",
    age: 26,
    isLoggedIn: true
};

if(user.isLoggedIn === false){  //(!user.isLoggedIn) boolean olduğu için daha güzel bir yazım olur.
    console.log("Please log in");
}
else if(user.isLoggedIn === true && user.age>= 18){
    console.log(`Welcome, ${user.name}!`);
}
else if(user.isLoggedIn === true && user.age<18){
    console.log("Access restricted.");
}
/*
clean code:
const user = {
    name: "Ela",
    age: 26,
    isLoggedIn: false
};

if (!user.isLoggedIn) {
    console.log("Please log in");
} else if (user.age >= 18) {
    console.log(`Welcome, ${user.name}!`);
} else {
    console.log("Access restricted.");
}
*/ 

//Falsy Statements:

const userp = null; // null is a falsy statement

if (!userp){  // !userp: if userp not truthy -> !null - true olur
    console.log("Please log in.");  
}

// Switch Statement:
//1.

const day = "Tuesday";

switch(day){
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Wednesday":
        console.log("Middle of the week.");
        break;
    case "Friday":
        console.log(" Almost weekend.");
        break;
    case "Saturday":
        console.log("Weekend!");
        break;
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}
//2.

const a = 10;
const b = 5;
const operator = "*";

switch(operator){
    case "+":
        console.log(a+b);
        break;       //dont forget to add break!
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    default: 
         console.log("please enter a valid operator");

}

//Exception Handling:

//throw:
/*
console.log("Before");
throw new Error("Something went wrong");
console.log("After"); //burası çalışmaz.
*/

try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log("An error occurred!"); //try...catch ile kullanınca çalışıyor.
}

const year = -2000;

try {
    if (year < 0) {
        throw new Error("Year cannot be negative.");
    }

    console.log(`Year: ${year}`);
} catch (error) {
    console.log(error.message);
}

//practice:

const password = "";

try{
   if(password === "") { //if (!password) daha doğru bir kullanım
     throw new Error("Password cannot be empty.");
   }
   if(password.length < 6){
     throw new Error("Password is too short");
   }
   console.log("Password is valid.");
} catch (error) {
    console.log(error.message);
}