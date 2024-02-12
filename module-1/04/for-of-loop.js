let arr = ["adidas", "nike", "puma"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let data of arr) {
  console.log(data);
}

function findMaxValue(arrInput) {
  let maxValue = 0;
  for (let i = 0; i < arrInput.length; i++) {
    if (maxValue < arrInput[i]) {
      maxValue = arrInput[i];
    }
    console.log(maxValue);
  }

  return maxValue;
}

console.log(findMaxValue([5, 6, 1, 4, 12]));
