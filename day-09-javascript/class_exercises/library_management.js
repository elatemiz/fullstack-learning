
class Book{
    constructor(id, title, author){
        this.id = id,
        this.title = title;
        this.author = author;
        this.isAvailable = true;
      }

    borrow(){
        if(this.isAvailable === true){
            this.isAvailable = false;
        } else {
            console.log("Book is not available right now");
        } 
    }

    returnBook(){
       return this.isAvailable = true;
    }
}

class Member{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
        
    }

    borrowBook(book){
        if(book.isAvailable){
          book.borrow();
          return this.borrowedBooks.push(book);
        }else {
        console.log("Book is not available.");
        }
    }

    returnBook(book){
        book.returnBook();
        const index = this.borrowedBooks.indexOf(book);
        this.borrowedBooks.splice(index, 1);
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
        this.members = [];
    }

    addBook(book){
        return this.books.push(book);
    }

    addMember(member){
        return this.members.push(member);
    }

    findBookById(id){
        return this.books.find(book => book.id === id
        );
    
    }

    findMemberById(id){
        return this.members.find(members => members.id === id);
    }

}

const book1 = new Book(
    1, 
    "Clean Code", 
    "Robert C. Martin"
);

const book2 = new Book(
    2, 
    "JavaScript: The Good Parts", 
    "Douglas Crockford"
);

const book3 = new Book(
    3, 
    "The Pragmatic Programmer", 
    "Andrew Hunt"
);

const member1 = new Member(
    1,
    "Ela"
);

const member2 = new Member(
    2,
    "Defne"
);

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.addMember(member1);
library.addMember(member2);

console.log(library);
console.log(library.findBookById(2));
console.log(library.findMemberById(1));

member1.borrowBook(book1);
member2.borrowBook(book1);

member1.returnBook(book1);
console.log(book1.isAvailable);
member2.borrowBook(book1);
console.log(book1.isAvailable);