//SET/
//Exercise 1 — Clear duplicate numbers:

const numbers = [1, 2, 3, 2, 4, 5, 1, 3, 6];

const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); //[1, 2, 3, 4, 5, 6]

//Exercise 2 — Adding an element to a set:

const fruits = new Set(["apple", "banana", "orange"]);

fruits.add("mango");
fruits.has("banana");
fruits.delete("apple");
fruits.size;

console.log(fruits);

//Exercise 3 — Unique words:

const sentence = "hello world hello javascript world";

const arr = sentence.split(" ");
console.log(arr);

const uniqueWords = new Set(arr);

console.log(uniqueWords);
console.log(uniqueWords.size);

//Exercise 4 — Find common elements:

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

const common = [];

for(const item of setA){
     if (setB.has(item)){
        common.push(item);
     }
}

console.log(common);

//MAP:

//Exercise 5 — Student grades:

const grades = new Map();

grades.set("Ali", 85);
grades.set("Ela", 75);
grades.set("Defne", 95);
grades.set("Nilay", 89);

console.log(grades.get("Ela"));
console.log(grades.has("Defne"));
grades.set("Ali", 90);
console.log(grades.get("Ali"));
grades.delete("Nilay");
console.log(grades.size);


//Exercise 6 — 

const users = new Map([
    ["user1", "Ela"],
    ["user2", "Ali"],
    ["user3", "Defne"],
    ["user4", "Nilay"]
]);

for( const[key, value] of users){
    console.log(`${key} -> ${value}`);
}

//MAP:

//Exercise 7 Word frequency:

const words = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];
 
const wordCount = new Map();

for (const word of words){  //words arrayinin her elemanını sırayla al ve ona word adını ver.
    if(wordCount.has(word)){
        wordCount.set(word, wordCount.get(word) + 1);
    } else {
        wordCount.set(word, 1);
    }
}

console.log(wordCount);

//Exercise 8 — Find users by ID:

const users = [
    { id: 1, name: "Ela" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Ayşe" },
    { id: 4, name: "Mehmet" }
];

const userMap = new Map();

for(const user of users){
    userMap.set(user.id, user); //key = user.id, value = user
}

console.log(userMap);

const userId = 3;

console.log(userMap.get(userId)); // {id: 3, name: 'Ayşe'}

console.log(userMap.get(userId).name); //just name -> Ayşe

/*users
  │
  ├── index 0 → { id: 1, name: "Ela" }
  │                 │
  │                 └── user.id → 1
  │
  ├── index 1 → { id: 2, name: "Ali" }
  │                 │
  │                 └── user.id → 2
  │
  └── index 2 → { id: 3, name: "Ayşe" }
                    │
                    └── user.id → 3
                    
*/
//Exercise 9 — Unique users:

const users = [
    { id: 1, name: "Ela" },
    { id: 2, name: "Defne" },
    { id: 1, name: "Ela" },
    { id: 3, name: "Ali" },
    { id: 2, name: "Defne" }
];

const uniqueUsers = new Map();

for(const user of users){
    if(!uniqueUsers.has(user.id)){ //mapin içinde bu id var mı?
        uniqueUsers.set(user.id, user); //key = id, value = user object
    }
} 

console.log(uniqueUsers);

//Exercise 10 — Object to Map:

const scores = {
    Ela: 90,
    Ali: 75,
    Ayşe: 88
};

const scoresMap = new Map();

for(const [name, score] of Object.entries(scores)){
    scoresMap.set(name, score);
}

console.log(scoresMap.get("Ela"));

//Exercise 11 — Map to Array:

const products = new Map([
      ["p1", "Laptop"],
      ["p2", "Mouse"],
      ["p3", "Keyboard"]
]);

const arr = Array.from(products);
console.log(arr);