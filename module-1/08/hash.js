// Map

const myMap = new Map();

// set

myMap.set("david", "001");
myMap.set("buchanan", "002");
myMap.set("buchanan", "009");

// get

console.log(myMap.get("david"));

for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// delete

myMap.delete("david");
console.log(myMap);

//
let hashing = new Map();

// function hashMap(key, value) {
//   let sum = 0;

//   for (let i = 0; i < key.length; i++) {
//     console.log(key.charCodeAt(i));
//     sum += key.charCodeAt(i);
//   }
//   console.log(sum);

//   let hash = sum % 52;
//   console.log(hash);
//   console.log(hashing.get(hash));
//   if (hashing.get(hash) === undefined) {
//     return hashing.set(hash, { key, value });
//   } else {
//     while (hashing.get(hash) !== undefined) {
//       hash++;
//     }
//   }
//   console.log(hash);
//   return hashing.set(hash, { key, value });
// }

// // console.log(hashMap("mama", "apa"));
// console.log(hashMap("makan", "ayam"));
// console.log(hashMap("makan", "sapi"));
// console.log(hashMap("Harry Potter Makan Sapi"));

// console.log(hashing);

function hashMap(key, value) {
  let hash = hashing.size;

  return hashing.set(hash + 1, { key, value });
}

console.log(hashMap("mama", "apa"));
console.log(hashMap("makan", "ayam"));
console.log(hashMap("makan", "sapi"));
console.log(hashMap("Harry Potter Makan Sapi"));
console.log(hashMap("mama", "apa"));

let satu = hashing.get(1);
console.log(satu);
console.log(satu.key);
console.log(hashing.get(1));

for (let [key, value] of hashing) {
  console.log(`${value.key}: ${value.value}`);
}

let obj = [
  {
    name: "budi",
  },
];
