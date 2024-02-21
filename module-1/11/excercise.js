function majority(arr) {
  return (
    arr.filter((i) => arr.filter((y) => y == i).length > arr.length / 2)[0] || 0
  );
}

console.log(majority([3, 1, 1, 2]));

function majority2(arr) {
  const unique = new Map();

  for (let item of arr) {
    if (!unique.has(item)) {
      unique.set(item, 1);
    } else {
      unique.set(item, unique.get(item) + 1);
    }
  }
  console.log(unique);

  let max = 0;
  let majority;

  for (const [key, value] of unique) {
    if (value > max) {
      max = value;
      majority = key;
    }
  }

  return majority;
}

console.log(majority2([3, 2, 3, 3, 4, 5]));

function romanToInteger(str) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let n = 0;

  for (let i = 0; i < str.length; i++) {
    console.log(roman[str[i]]);
    console.log(roman[str[i + 1]]);
    n =
      roman[str[i]] < roman[str[i + 1]] ? n - roman[str[i]] : n + roman[str[i]];
    console.log(n);
  }

  return n;
}

console.log(romanToInteger("VIX"));

function pascal(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let temp = [];
    for (let j = 0; j < i; j++) {
      if (j == 0 || j == i - 1) {
        temp.push(1);
      } else {
        console.log(arr[1][0] + arr[i - 2][j]);
        temp.push(arr[i - 2][j - 1] + arr[i - 2][j]);
      }
    }
    arr.push(temp);
    console.log(arr);
  }

  return arr;
}

console.log(pascal(4));

// salah
function buySell(arr) {
  let minValue = Math.min(...arr);
  console.log(minValue);
  let minIndex = arr.indexOf(minValue);
  console.log(minIndex);
  let maxValue = Math.max(...arr.splice(minIndex, arr.length - minIndex));
  console.log(maxValue);
  return maxValue - minValue;
}

console.log(buySell([2, 8, 1, 3, 5]));

// benar
function buySell2(arr) {
  let left = 0;
  let right = 1;
  let maxVal = 0;

  while (right < arr.length) {
    console.log(left);
    console.log(arr[left]);

    console.log(right);
    console.log(arr[right]);
    if (arr[left] < arr[right]) {
      let profit = arr[right] - arr[left];
      maxVal = Math.max(profit, maxVal);
    } else {
      left = right;
    }
    right++;
  }

  return maxVal;
}

console.log(buySell2([2, 8, 1, 3, 5]));
