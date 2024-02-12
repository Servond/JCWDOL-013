function multiplier(factor, number) {
  return number * factor;
}

console.log(multiplier(5, 3));

function multiplierCur(factor) {
  return function (number) {
    return function (number2) {
      return number * factor * number2;
    };
  };
}

const data = multiplierCur(5);
const result2 = data(3);
console.log(result2(6));
// console.log(result(3));

console.log(result2(1));
console.log(multiplierCur(3)(3)(2));
console.log(multiplierCur(3)(3)(1));
