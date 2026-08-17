
const user = {
    name: "Ela",
    email: "ela@gmail.com",
    address: {
        city: "Eskişehir",
        district: "Tepebaşı",
        postalCode: "26000"
    }
};

console.log(user.address.city);
console.log(user.address.district);

user.address.postalCode = "26026";

console.log(user.address.postalCode);

user.address.street = "Çayır Sokak";

console.log(`${user.address.city}, ${user.address.district}, ${user.address.postalCode}`);

user.getfullAdress = function(){
    return (`${this.address.city}, ${this.address.district}, ${this.address.postalCode}`);
}    //user objectinin içine getfullAdress methodu eklendi

console.log(user.getfullAdress());