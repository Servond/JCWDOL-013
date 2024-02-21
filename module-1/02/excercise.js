let message = "";

// Write a code to convert celcius to fahrenheit
let celcius = 30;
const fahrenheit = celcius * 1.8 + 32;

message = `${celcius} degrees celcius = ${fahrenheit} degrees fahrenheit`;
console.log(message);

// Write a code to check whether the number is even or odd
let number = 21;

message =
  number % 2 == 0
    ? `${number} is an even number`
    : `${number} is an odd number`;
console.log(message);

// Write a code to check whether  the number is prime number or not
let isPrime = true;
message = `${number} is a prime number`;

if (number === 1) message = `please input number other than 1`;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
    message = `${number} is not a prime number`;
    break;
  }
}

console.log(message);

// Write a code to find the sum of numbers 1 to N
let numberN = 5;
let calc = 0;
message = `${numberN} -> `;

for (let i = 1; i <= numberN; i++) {
  calc += i;
  message += i == numberN ? ` ${i} = ${calc}` : ` ${i} +`;
}

console.log(message);

// Write a code to find factorial of number
message = `factorial of ${numberN} = `;
for (let i = numberN - 1; i >= 1; i--) {
  numberN *= i;
}
message += `${numberN}`;
console.log(message);

// Write a code to print the first N fibonacci numbers
calc = 0;
numberN = 3;
let number1 = 0;
let number2 = 1;
message = `First ${numberN} of fibonacci = ${number1}, `;

for (let i = 1; i <= numberN; i++) {
  calc = number1 + number2;
  number1 = number2;
  number2 = calc;
  if (i == 1) {
    message += `${number1}`;
  } else {
    message += `, ${number1}`;
  }
  // message += i == 1 ? `${number1}` : `, ${number1}`;
}
console.log(message);
