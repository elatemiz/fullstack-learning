
const users = [
     {
        id: 1,
        name: "Ela",
        age: 26,
        role: "user"
     },
     {
        id: 2,
        name: "Defne",
        age: 20,
        role: "admin"
     },
     {
        id: 3,
        name: "Nilay",
        age: 23,
        role: "user"
     }
];

//Print user's names:

for( let i = 0; i < users.length; i++){
    console.log(users[i].name);
}

//Find the user with id = 2:

const secondUser = users.find(user => user.id === 2);
console.log(secondUser);

//Find admin:

const admins = users.filter(user => user.role === "admin");
console.log(admins);

//20+ age users:

const adults = users.filter(user => user.age > 20);
console.log(adults);

//Change the age of the user with id = 3:

const thirdUser = users.find(user => user.id === 3);
thirdUser.age = 20;
console.log(thirdUser);

//add new user to the array:

const addUser = {  
    id: 4,
    name: "Nidal",
    age: 28,
    role: "admin"
};

users.push(addUser); 

//delete the user with id = 1:

const remainingUsers = users.filter(user => user.id !== 1);
console.log(remainingUsers);

//findUserById():

function findUserById(a){
      const user = users.find(user => user.id === a);
      return user;
}

const result = findUserById(1);
console.log(result);

