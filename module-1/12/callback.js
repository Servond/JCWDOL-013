// callback

// function displayer(something) {
//   console.log(something);
// }

function calculator(a, b, callback) {
  callback(a + b);
}

calculator(5, 5, (something) => console.log(something));
