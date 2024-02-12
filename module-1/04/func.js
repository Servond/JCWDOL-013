let a = 1;
let b = 2;
let a1 = 4;
let b2 = 5;
let c = a + b;
let d = a1 + b2;
console.log(c);

// function declaration
console.log(pertambahanDec(1, 2));

function pertambahanDec(num1, num2) {
  // function body
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

console.log(pertambahanDec(1, 2));
console.log(pertambahanDec(4, 4));

// function expression
// console.log(pertambahanExp(2, 2));
const pertambahanExp = function (num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
};

console.log(pertambahanExp(2, 2));

// default parameter
function getListData(sortBy = "ASC") {
  let listData = [1, 2, 3, 4, 5];

  if (sortBy === "ASC") {
    return listData;
  } else {
    return listData.reverse();
  }
}

console.log(getListData("DESC"));
