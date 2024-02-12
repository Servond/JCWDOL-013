let message;

// Write a code to display the multiplication table of a given integer.
let number1 = 9;
message = `${number1} -> \n`;
for (let i = 1; i <= 10; i++) {
  // if (i == 10) {
  //   message += `${number1} x ${i} = ${number1 * i}`;
  // } else {
  //   message += `${number1} x ${i} = ${number1 * i}, \n`;
  // }
  message +=
    i == 10
      ? `${number1} x ${i} = ${number1 * i}`
      : `${number1} x ${i} = ${number1 * i}, \n`;
}
console.log(message);

// Write a code to check whether a string is a palindrome or not
let string = "amsma";
console.log(string.split("").reverse().join(""));
let stringLength = string.length;
message = `${string} is a palindrome`;

for (let i = 0; i < stringLength / 2; i++) {
  console.log(i);
  console.log(string[i]);
  console.log(string[stringLength - 1 - i]);
  if (string[i] !== string[stringLength - 1 - i]) {
    message = `${string} is not a palindrome`;
    break;
  }
}
console.log(message);

// Write a code to convert centimeter to kilometer.
let cm = 50;
const km = cm / 100000;
message = `${cm} centimeter = ${km} kilometer`;
console.log(message);

// Write a code to format number as currency (IDR)
let number2 = 10000;
let currency = number2.toLocaleString("en-US", {
  style: "currency",
  currency: "usd",
});
console.log(currency);

currency = new Intl.NumberFormat("in-ID", {
  style: "currency",
  currency: "IDR",
}).format(number2);
console.log(currency);

// Write a code to remove the first occurrence of a given “search string” from a string
string = "Hello World";
let searchString = "llo";
message = string.replace(searchString, "");
console.log(message);

// Write a code to capitalize the first letter of each word in a string
string = "hello world";

// string akan dipisah sendiri2
let splitString = string.split(" ");
for (let i = 0; i < splitString.length; i++) {
  // dicari huruf pertama string berdasarkan indexnya menggunakan charAt() lalu ditambahkan kembali
  // setelah huruf pertama dijadikan huruf besar dengan kata2 nya dikurangi dengan
  // huruf pertamanya menggunakan slice
  splitString[i] =
    splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
}
string = splitString.join(" ");
console.log(string);

// Write a code to reverse a string.
string = "hello world";
let newString = "";

for (i = string.length - 1; i >= 0; i--) {
  newString += string[i];
}
console.log(newString);

// Write a code to swap the case of each character from string
let strings = "The QuIcK BrOwN FoX";
let splits = strings.split("");
for (let i = 0; i < splits.length; i++) {
  if (splits[i] === splits[i].toUpperCase()) {
    splits[i] = splits[i].toLowerCase();
  } else {
    splits[i] = splits[i].toUpperCase();
  }
}
strings = splits.join("");
console.log(strings);

// Write a code to find the largest of 2 numbers
let int1 = 5;
let int2 = 10;

if (int1 == int2) {
  console.log("Numbers are the same");
} else if (int1 >= int2) {
  console.log(`${int1} is larger than ${int2}`);
} else {
  console.log(`${int2} is larger than ${int1}`);
}

// Write a code that shows 1 if the input is string, 2 if number, and 3 for the others
let input = 0;
if (typeof input == "string") {
  console.log(1);
} else if (typeof input == "number") {
  console.log(2);
} else {
  console.log(3);
}

// Write a conditional statement to sort three numbers
let num1 = 11;
let num2 = 12;
let num3 = 10;

if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`${num3}, ${num2}, ${num1}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num3 <= num1 && num3 <= num2) {
  if (num1 <= num2) {
    console.log(`${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`${num1}, ${num2}, ${num3}`);
  }
}

// Write a code to change every letter a into * from a string of input
let sentence = "An apple a day keeps the doctors away";
let splitSentence = sentence.split("");
for (let i = 0; i < splitSentence.length; i++) {
  if (splitSentence[i].toLowerCase() == "a") {
    splitSentence[i] = "*";
  }
}
sentence = splitSentence.join("");
console.log(sentence);

console.log(sentence.replace(/a/g, "*"));
