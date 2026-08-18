
class Product {
     constructor(id, name, price, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
     }

     increaseStock(amount){
          this.stock += amount;
     }

     decreaseStock(amount){
        if(this.stock < amount){
            console.log(`Only ${this.stock} left!`);
        } else {
        this.stock -= amount;
        }
     }

     getProductInfo(){
        return console.log(`${this.name} - ${this.price} TL - Stock: ${this.stock}`);
     }

     applyDiscount(discount){
        return this.price -= (this.price * discount) / 100;
     }
}

const laptop = new Product(
    1,
    "Laptop",
    35000,
    5,
);

const mouse = new Product(
    2,
    "Mouse",
    800,
    20
);

laptop.increaseStock(2);
console.log(laptop.stock);

laptop.decreaseStock(10);
laptop.getProductInfo();

laptop.applyDiscount(10);
laptop.getProductInfo();

mouse.increaseStock(6);
console.log(mouse.stock);

mouse.applyDiscount(5);
mouse.getProductInfo();

