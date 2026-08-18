
class User{
     constructor(id, name, email, isActive){
        this.id = id;
        this.name = name;
        this.email = email;
        this.isActive = true;
     }
     
     deactivate(){
        return this.isActive = false ;
     }

     activate(){
        return this.isActive = true ;
     }

     getUserInfo(){
        if(this.isActive === true){
        return console.log(`${this.name} - ${this.email} - Active`);
        } else {
        return console.log(`${this.name} - ${this.email} - Inactive`);
        }
     }

     changeEmail(newEmail){
        return this.email = newEmail;
     }
}

const user1 = new User(
    1,
    "Ela",
    "ela@gmail.com"
);

user1.activate();
user1.getUserInfo();

user1.deactivate();
user1.getUserInfo();

user1.changeEmail("ela27@gmail.com");
user1.getUserInfo();


