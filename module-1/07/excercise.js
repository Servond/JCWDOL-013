let random = Math.floor(Math.random() * 2) == 1 ? 10 : 0;
console.log(random);

console.log(random == 1 ? 10 : 0);

// Create a function to check if two objects are equal

function comparingObjects(obj1, obj2) {
  let newObj1 = Object.entries(obj1);
  let newObj2 = Object.entries(obj2);
  // jika panjang object sudah tidak sama maka bisa langsung direturn karena object tidak akan sama
  if (newObj1.length != newObj2.length) {
    return "Object 1 and Object 2 are not equal";
  }

  for (let i = 0; i < newObj1.length; i++) {
    if (newObj1[i][i] != newObj2[i][i]) {
      return "Object 1 and Object 2 are not equal";
    }
  }

  return "Object 1 and Object 2 are equal";
}

let obj1 = {
  firstName: "David",
  lastName: "Mon",
  thirdName: "yes",
};

let obj2 = {
  firstName: "David",
  lastName: "Mon",
  thirdName: "yeds",
};

console.log(comparingObjects(obj1, obj2));

// Create a function to get the intersection of two objects

function getIntersection(obj1, obj2) {
  let newObj = {};

  for (const key1 in obj1) {
    for (const key2 in obj2) {
      if (key1 == key2) {
        if (obj1[key1] == obj2[key2]) {
          newObj[key1] = obj1[key1];
        }
      }
    }
  }

  return newObj;
}

console.log(getIntersection(obj1, obj2));

let arrObj1 = [
  {
    name: "student1",
    email: "student1@gmail.com",
  },
  {
    name: "student2",
    email: "student2@gmail.com",
  },
  {
    name: "student3",
    email: "student3@gmail.com",
  },
  {
    name: "student4",
    email: "student4@gmail.com",
  },
];

let arrObj2 = [
  {
    name: "student1",
    email: "student1@gmail.com",
  },
  {
    name: "student3",
    email: "student4@gmail.com",
  },
];

function removeDuplicate(arr1, arr2) {
  let combine = [...arr1, ...arr2];
  let newArr = [];
  let unique = {};
  for (let i in combine) {
    objNew = combine[i]["name"];
    console.log(objNew);
    console.log(combine[i]);
    unique[objNew] = combine[i];
  }
  console.log(unique);
  for (let i in unique) {
    newArr.push(unique[i]);
  }
  return newArr;
}

console.log(removeDuplicate(arrObj1, arrObj2));

function reverseProperty(arr) {
  let newArr = [];
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      newObj[arr[i][key]] = key;
    }
    newArr.push(newObj);
  }

  return newArr;
}

console.log(reverseProperty([{ name: "billy", age: 20 }]));

function factorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));

// Shooting Game

class ShootingGame {
  player1;
  player2;

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  generateItem() {
    let healthPower = Math.floor(Math.random() * 2);
    let result = { items: "none", buff: 0 };

    if (healthPower == 0) {
      let item = Math.floor(Math.random() * 2);
      if (item > 0) result = { items: "health", buff: 10 };
    } else {
      let item = Math.floor(Math.random() * 2);
      if (item > 0) result = { items: "power", buff: 10 };
    }

    return result;
  }

  start() {}
}

class Player extends ShootingGame {
  name;
  #health = 100;
  #power = 10;

  constructor(name) {
    super();
    this.name = name;
  }

  hit(power) {
    this.#health -= power;
    if (this.#health < 0) this.#health = 0;
  }

  useItem(randomItem) {
    if (randomItem.items != "none") {
      if (randomItem.items === "health") this.#health += randomItem.buff;

      if (randomItem.items === "power") this.#power += randomItem.buff;
    } else return "No item";

    return `Buff added`;
  }

  showStatus() {
    return `player = ${this.name}, health = ${this.#health}, power = ${
      this.#power
    }`;
  }
}
