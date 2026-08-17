
const product = {
     id: 501,
     name: "Wireless Mouse",
     price: 750,
     stock: 12,
     category: "electronics"
};

console.log(product.price);
console.log(product.stock - 1);

product.stock = 5;

if(product.stock >= 5){
    console.log("Product is in stock!");
} else if(product.stock < 5 && !(product.stock === 0)){
    console.log("Low stock!");
} else {
     console.log("No stock!");
}

let discount  = ((product.price) * 20) / 100;

console.log(product.price - discount); //600

console.log(product.name);
console.log(`Category: ${product.category}`);
console.log(`Price: ${product.price}`);
console.log(`Stock: ${product.stock}`);



