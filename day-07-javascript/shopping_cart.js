
const cart = new Map();

cart.set("Laptop", 1);
cart.set("Mouse", 2);
cart.set("Keyboard", 1);

console.log(cart);

//update mouse amount to 3:
cart.set("Mouse", 3);
//add monitor to cart:
cart.set("Monitor", 1);
//check if cart has keyboard:
console.log(cart.has("Keyboard"));
//delete laptop from cart:
cart.delete("Laptop");

//Print all items in the cart:
for(const [key, value] of cart){
    console.log(`${key}: ${value}`);
}