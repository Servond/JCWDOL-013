// class declaration
// class User {
//   name = "budi";
//   greeting() {
//     return "Hello World";
//   }
// }

// class expression
const User1 = class {
  // public property
  firstName;
  lastName;
  // private property
  #email;

  constructor(firstName = "dodi", lastName = "user", email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#email = email;
  }

  static fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greeting() {
    if (this.#email) {
      return `Hello World ${this.#email}`;
    }
  }
};

// create object from class

// const user = new User();
// console.log(user.name);
// console.log(user.greeting());

const user1 = new User1("joko", "widodo");
console.log(user1.firstName, user1.lastName);
console.log(user1.greeting());
console.log(user1);

const user2 = new User1();
console.log(user2.firstName, user2.lastName);

// Static Property
class DB {
  static #connection = "";

  static #initializeConnection() {
    const random = Math.ceil(Math.random() * 100);
    DB.#connection = random;
  }

  static getConnection() {
    if (!DB.#connection) {
      DB.#initializeConnection();
    }

    return DB.#connection;
  }
}

console.log(DB.getConnection());

// Inheritance

class Product {
  constructor() {
    this.productName;
    this.price;
  }

  setProduct(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}

class Book extends Product {
  constructor() {
    super();
    this.author;
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(authorName) {
    this.author = authorName;
  }
}

class Shoes extends Product {
  constructor() {
    super();
    this.brand;
  }

  getBrand() {
    return this.brand;
  }

  setBrand(brandName) {
    this.brand = brandName;
  }
}

const book = new Book();
book.setAuthor("JK Rowling");
book.productName = "Harry Potter";
console.log(book);

const shoes = new Shoes();
shoes.setBrand("Adidas");
shoes.setProduct("Sepatu", 5000);
console.log(shoes.getBrand());

// Instance Of
class Animal {}
class Rabbit extends Animal {}
class Tree extends Animal {}

const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Tree);

// Super
class User {
  name;
  #code = "";

  constructor(prefix = "") {
    const random = Math.round(Math.random() * 1000);
    this.#code = `${prefix}${random}`;
  }

  getCode() {
    return this.#code;
  }
}

class Student extends User {
  constructor() {
    super("STD");
  }
}

class Employee extends User {
  constructor(prefix = "") {
    super(prefix);
  }
}

const student = new Student();
console.log(student.getCode());

const employee = new Employee("EM");
console.log(employee.getCode());
