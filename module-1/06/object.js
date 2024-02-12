let merekSepatu = "adidas";
let tipeSepatu = "Air Jordan";
let ukuranSepatu = 42;

let sepatuAdidas = ["adidas", "air jordan", 42];

// Object
// Object literal
let sepatu = {
  merek: "adidas",
  tipe: "air jordan",
  ukuran: 42,
  fungsi: function (obj) {
    return `${obj} digunakan untuk berjalan`;
  },
};

// object constructor
let car = new Object();
car.brand = "BMW";
car.price = 8000000;
console.log(car);

let listSepatu = [
  {
    merek: "adidas",
    tipe: "air jordan",
    ukuran: 42,
  },
  {
    merek: "adidas",
    tipe: "air jordan",
    ukuran: 39,
  },
];
console.log(listSepatu[0].merek);

console.log(sepatu.merek);

// Add property to object
sepatu.milik = "saya";
console.log(sepatu);

// delete property in object
delete sepatu.milik;

console.log(sepatu);
console.log(sepatu.fungsi("sepatu"));
console.log(listSepatu);

// accessing property in object
console.log(sepatu.merek_sepatu);
console.log(sepatu["merek"]);

let person = {
  name: "budi",
  age: 21,
  education: {
    school: "smp",
  },
};
console.log(person.name);
console.log(person.education.school);

// optional chaining
console.log(person.education.highschool?.name);
console.log("hello");

console.log(person);
console.log(Object.keys(person));

// for let in
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// getter & setter method
const user = {
  firstName: "budi",
  lastName: "widodo",
  age: 21,

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set thisName(value) {
    const split = value.split(" ");
    console.log(split);
    this.firstName = split[0];
    this.lastName = split[1];
  },
};
console.log(user.fullName);
user.thisName = "Joko Widodo";
console.log(user.fullName);

// destructuring
const { name, age, education } = person;
console.log(person.name);
console.log(name);
console.log(name, age, education);

// spread operator
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 1,
  d: 2,
};

const arr = { ...obj1, ...obj2 };
console.log(arr);
console.log({ ...obj1 });

const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = [...arr1, ...arr2];
console.log(newArr);

// Object build-in method
const newObj = Object.assign(obj1, obj2);
console.log(newObj);
console.log(obj1, obj2);

const newObj1 = Object.create(obj1);
obj1.a = 5;
console.log(newObj1.a);

console.log(Object.entries(obj1));

Object.freeze(obj1);
obj1.a = 6;
console.log(obj1);

const obj3 = {
  a: 1,
  b: 2,
};

const obj4 = {
  a: 1,
  b: 2,
};

console.log(Object.is(obj3.a, obj4.a));

const num1 = {
  a: 1,
  b: 2,
};

const num2 = {
  c: 3,
  d: 4,
};

const newNum = Object.assign({}, num1, num2);
console.log(num1);
console.log(num2);
console.log(newNum);
newNum.a = 5;
console.log(newNum);
console.log(num1);
console.log(num2);
