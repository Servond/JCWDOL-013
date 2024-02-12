// Excercise 1

let students = [
  {
    name: "Budi",
    email: "budi@mail.com",
    age: new Date("01-06-1998"),
    score: 40,
  },
  {
    name: "andi",
    email: "andi@mail.com",
    age: new Date("02-04-1997"),
    score: 20,
  },
  {
    name: "suci",
    email: "suci@mail.com",
    age: new Date("03-04-1991"),
    score: 80,
  },
];

function calculateArray(objects) {
  let results = {
    score: {
      highest: 0,
      lowest: 0,
      average: 0,
    },
    age: {
      highest: 0,
      lowest: 0,
      average: 0,
    },
  };

  let scores = [];
  let ages = [];
  let dateNow = new Date();

  for (let i = 0; i < objects.length; i++) {
    let dateNow = new Date();
    scores.push(objects[i].score);

    ages.push(objects[i].age);
  }

  console.log(scores);
  console.log(ages);
  results.score.highest = Math.max(...scores);
  results.score.lowest = Math.min(...scores);
  results.score.average = scores.reduce((a, b) => a + b) / scores.length;

  results.age.highest = Math.max(...ages);
  results.age.lowest = Math.min(...ages);
  results.age.average = ages.reduce((a, b) => a + b) / ages.length;

  return results;
}

console.log(calculateArray(students));

//Excercise 2

class Product {
  constructor() {
    this.name;
    this.price;
  }
}

class Transaction extends Product {
  constructor() {
    super();
    this.total = 0;
    this.products = [];
  }

  addToCart() {
    this.products.push({
      name: this.name,
      price: this.price,
      qty: this.qty,
    });
  }

  getTotalTransactions() {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].qty * this.products[i].price;
    }
    return sum;
  }

  getTransactions() {
    return {
      total: this.getTotalTransactions(),
      products: this.products,
    };
  }
}

const transact = new Transaction();

transact.name = "Book";
transact.price = 20000;
transact.qty = 2;
transact.addToCart();
console.log(transact.name);
console.log(transact.getTransactions());

transact.name = "Card";
transact.price = 10000;
transact.qty = 4;
transact.addToCart();
console.log(transact.getTransactions());

transact.name = "Card";
transact.price = 10000;
transact.qty = 4;
transact.addToCart();
console.log(transact.getTransactions());

transact.name = "Chess";
transact.price = 10000;
transact.qty = 4;
transact.addToCart();
console.log(transact.getTransactions());

transact.name = "Card";
transact.price = 10000;
transact.qty = 4;
transact.addToCart();
console.log(transact.getTotalTransactions());
console.log(transact.getTransactions());
