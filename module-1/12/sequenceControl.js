// Function sequence

let result;

function greet(str) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou();
hello();
console.log(result);

// Sequence Control

function displayer(something) {
  console.log(something);
}

// first way
function calculator(a, b) {
  return a + b;
}

result = calculator(5, 5);

displayer(result);

// second way
function calculator(a, b) {
  //   result = a + b;

  displayer(a + b);
}

calculator(5, 6);
