const fruits = [
  "banana",
  "apple",
  "orange",
  "apple",
  1,
  "1",
  { name: 1 },
  { name: 1 },
];
console.log(fruits);

const newFruits = new Set(fruits);
console.log(newFruits);

// add

newFruits.add("melon");
newFruits.add("Melon");

console.log(newFruits);

// delete

newFruits.delete("banana");
console.log(newFruits);

// has

console.log(newFruits.has("apple"));

// size

console.log(newFruits.size);

// entries

let getEntries = newFruits.entries();
console.log(getEntries);
console.log(getEntries.next().value[0]);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);
console.log(getEntries.next().value);

// foreach

let text = "";
newFruits.forEach((item) => {
  text += `${item}, `;
});
console.log(text);

// clear

newFruits.clear();
console.log(newFruits);
