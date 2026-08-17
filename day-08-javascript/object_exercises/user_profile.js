
const user = {
    id: 101,
    name: "Ela",
    email: "ela@gmail.com",
    role: "student",
    isActive: true
};

console.log(user.name);
console.log(user.email);
console.log(user.isActive);

user.role = "admin";
console.log(user.role);

user.lastLogin = "20:00";
console.log(user.lastLogin);

for(const key in user){
    console.log(key); //sadece property
}

for(const key in user){
    console.log(user[key]); //sadece value
}
for(const key in user){
    console.log(key, user[key]); //property ve value
}